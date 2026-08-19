"""Récupération et parsing des flux RSS/Atom."""

from __future__ import annotations

import logging
from datetime import datetime, timezone
from time import mktime

import feedparser
import requests

from .models import Article, Source
from .text import strip_html

logger = logging.getLogger("veille")

USER_AGENT = (
    "VeilleEpargne/1.0 (+https://github.com/) "
    "Mozilla/5.0 (compatible; agregateur-veille)"
)


def _date_entree(entry) -> datetime | None:
    for attr in ("published_parsed", "updated_parsed"):
        struct = entry.get(attr)
        if struct:
            try:
                return datetime.fromtimestamp(mktime(struct), tz=timezone.utc)
            except (ValueError, OverflowError):
                continue
    return None


def _resume_entree(entry) -> str:
    for attr in ("summary", "description"):
        val = entry.get(attr)
        if val:
            return strip_html(val)
    content = entry.get("content")
    if content and isinstance(content, list) and content:
        return strip_html(content[0].get("value", ""))
    return ""


def _telecharger(url: str, timeout: int) -> bytes | None:
    """Télécharge le contenu d'un flux. Retourne None en cas d'échec."""
    try:
        resp = requests.get(
            url,
            headers={"User-Agent": USER_AGENT, "Accept": "application/rss+xml, application/xml, text/xml, */*"},
            timeout=timeout,
        )
        resp.raise_for_status()
        return resp.content
    except requests.RequestException as exc:
        logger.warning("Flux injoignable %s (%s)", url, exc)
        return None


def lire_flux(url: str, source: Source, timeout: int = 20) -> list[Article]:
    """Récupère et parse un flux, renvoie la liste d'articles bruts."""
    contenu = _telecharger(url, timeout)
    if contenu is None:
        return []

    parsed = feedparser.parse(contenu)
    if parsed.bozo and not parsed.entries:
        logger.warning("Flux illisible %s (%s)", url, getattr(parsed, "bozo_exception", ""))
        return []

    articles: list[Article] = []
    for entry in parsed.entries:
        titre = strip_html(entry.get("title", "")).strip()
        lien = (entry.get("link") or "").strip()
        if not titre or not lien:
            continue
        articles.append(
            Article(
                titre=titre,
                lien=lien,
                source=source.nom,
                domaine=source.domaine,
                resume=_resume_entree(entry),
                date=_date_entree(entry),
            )
        )
    logger.info("%-32s %3d articles (%s)", source.nom, len(articles), url)
    return articles


def collecter(sources: list[Source], timeout: int = 20) -> list[Article]:
    """Parcourt toutes les sources actives et agrège leurs articles."""
    tous: list[Article] = []
    for source in sources:
        if not source.actif:
            continue
        for url in source.flux:
            tous.extend(lire_flux(url, source, timeout=timeout))
    return tous
