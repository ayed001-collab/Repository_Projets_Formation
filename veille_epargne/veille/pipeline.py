"""Orchestration : collecte -> enrichissement -> dédoublonnage -> filtrage."""

from __future__ import annotations

import logging
from datetime import datetime, timedelta, timezone

from .classify import enrichir
from .config import Config
from .fetch import collecter
from .models import Article
from .text import normalize

logger = logging.getLogger("veille")


def _cle_dedup(art: Article) -> str:
    lien = (art.lien or "").split("?")[0].rstrip("/").lower()
    return lien or normalize(art.titre)


def dedoublonner(articles: list[Article]) -> list[Article]:
    vus: set[str] = set()
    uniques: list[Article] = []
    for art in articles:
        cle = _cle_dedup(art)
        if cle in vus:
            continue
        vus.add(cle)
        uniques.append(art)
    return uniques


def filtrer_recents(
    articles: list[Article], jours: int, garder_sans_date: bool = True
) -> list[Article]:
    """Ne conserve que les articles publiés dans les `jours` derniers jours.

    `jours <= 0` désactive le filtre. Les articles sans date sont conservés
    si `garder_sans_date` est vrai.
    """
    if jours <= 0:
        return articles
    seuil = datetime.now(timezone.utc) - timedelta(days=jours)
    retenus: list[Article] = []
    for art in articles:
        if art.date is None:
            if garder_sans_date:
                retenus.append(art)
            continue
        if art.date >= seuil:
            retenus.append(art)
    return retenus


def executer(
    config: Config,
    jours: int = 30,
    timeout: int = 20,
    max_par_domaine: int | None = None,
) -> list[Article]:
    """Chaîne complète de traitement, renvoie les articles prêts à restituer."""
    bruts = collecter(config.sources, timeout=timeout)
    logger.info("Total brut : %d articles", len(bruts))

    enrichis = enrichir(bruts, config)
    logger.info("Après filtre de pertinence : %d articles", len(enrichis))

    uniques = dedoublonner(enrichis)
    logger.info("Après dédoublonnage : %d articles", len(uniques))

    recents = filtrer_recents(uniques, jours)
    logger.info("Après filtre d'ancienneté (%d j) : %d articles", jours, len(recents))

    recents.sort(key=lambda a: a._sort_key(), reverse=True)

    if max_par_domaine and max_par_domaine > 0:
        compteur: dict[str, int] = {}
        limites: list[Article] = []
        for art in recents:
            n = compteur.get(art.domaine, 0)
            if n >= max_par_domaine:
                continue
            compteur[art.domaine] = n + 1
            limites.append(art)
        recents = limites

    return recents
