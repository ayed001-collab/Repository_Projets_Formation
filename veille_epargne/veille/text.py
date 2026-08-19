"""Utilitaires de normalisation de texte (accents, casse, HTML)."""

from __future__ import annotations

import html
import re
import unicodedata

_TAG_RE = re.compile(r"<[^>]+>")
_WS_RE = re.compile(r"\s+")

# Cache des motifs de mots-clés (mot entier / expression), pour éviter les
# faux positifs de sous-chaîne (« per » dans « performance », « or » dans
# « trésor »…).
_pattern_cache: dict[str, re.Pattern] = {}


def strip_html(value: str) -> str:
    """Retire les balises HTML et décode les entités."""
    if not value:
        return ""
    value = _TAG_RE.sub(" ", value)
    value = html.unescape(value)
    return _WS_RE.sub(" ", value).strip()


def normalize(value: str) -> str:
    """Minuscule, sans accents, espaces compactés — pour la recherche de mots-clés."""
    if not value:
        return ""
    value = strip_html(value)
    value = unicodedata.normalize("NFKD", value)
    value = "".join(c for c in value if not unicodedata.combining(c))
    value = value.lower()
    return _WS_RE.sub(" ", value).strip()


def _motif(needle_norm: str) -> re.Pattern:
    """Motif 'mot/expression entière' : bornes sur non-alphanumérique.

    Les espaces internes tolèrent une largeur variable (\\s+), ce qui permet
    de retrouver « livret a » ou « plan d'epargne retraite ».
    """
    pat = _pattern_cache.get(needle_norm)
    if pat is None:
        corps = re.escape(needle_norm).replace(r"\ ", r"\s+")
        pat = re.compile(r"(?<![a-z0-9])" + corps + r"(?![a-z0-9])")
        _pattern_cache[needle_norm] = pat
    return pat


def contains(haystack_norm: str, needle: str) -> bool:
    """Vrai si le mot-clé (comme mot/expression entière) est présent."""
    n = normalize(needle)
    if not n:
        return False
    return _motif(n).search(haystack_norm) is not None


def contains_any(haystack_norm: str, needles: list[str]) -> bool:
    """Vrai si l'un des mots-clés apparaît comme mot/expression entière."""
    return any(contains(haystack_norm, needle) for needle in needles)
