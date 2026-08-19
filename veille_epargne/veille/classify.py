"""Filtrage de pertinence, détection de tags et re-classement par domaine."""

from __future__ import annotations

from .config import Config
from .models import Article
from .text import contains, contains_any, normalize


def est_pertinent(article: Article, config: Config) -> bool:
    """Vrai si l'article concerne bien l'épargne / le placement.

    Si la liste de pertinence est vide, tout est conservé.
    """
    if not config.pertinence:
        return True
    texte = normalize(f"{article.titre} {article.resume}")
    return contains_any(texte, config.pertinence)


def detecter_tags(article: Article, config: Config) -> list[str]:
    """Retourne la liste des tags détectés (ordre stable = ordre de tags.yml)."""
    texte = normalize(f"{article.titre} {article.resume}")
    tags: list[str] = []
    for regle in config.tags:
        if contains_any(texte, regle.mots_cles):
            tags.append(regle.nom)
    return tags


def resoudre_domaine(article: Article, config: Config) -> str:
    """Re-classe un article 'transverse' en 'assurance' ou 'banque'.

    Les sources déjà typées (assurance/banque) gardent leur domaine.
    Pour une source transverse, on compte les indices de chaque domaine dans
    le texte ; en cas d'égalité (ou d'absence d'indice) l'article reste
    'transverse'.
    """
    if article.domaine in ("assurance", "banque"):
        return article.domaine

    texte = normalize(f"{article.titre} {article.resume}")
    score_assurance = sum(
        1 for m in config.indices_domaine.get("assurance", []) if contains(texte, m)
    )
    score_banque = sum(
        1 for m in config.indices_domaine.get("banque", []) if contains(texte, m)
    )
    if score_assurance > score_banque:
        return "assurance"
    if score_banque > score_assurance:
        return "banque"
    return "transverse"


def enrichir(articles: list[Article], config: Config) -> list[Article]:
    """Filtre par pertinence, applique les tags et le domaine final."""
    retenus: list[Article] = []
    for art in articles:
        if not est_pertinent(art, config):
            continue
        art.domaine = resoudre_domaine(art, config)
        art.tags = detecter_tags(art, config)
        retenus.append(art)
    return retenus
