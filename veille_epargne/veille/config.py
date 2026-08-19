"""Chargement de la configuration (sources.yml, tags.yml)."""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path

import yaml

from .models import Source

# Racine du projet = dossier parent de ce package.
ROOT = Path(__file__).resolve().parent.parent

DOMAINES_VALIDES = {"assurance", "banque", "transverse"}


@dataclass
class TagRule:
    nom: str
    couleur: str
    mots_cles: list[str]


@dataclass
class Config:
    sources: list[Source]
    pertinence: list[str]
    tags: list[TagRule]
    indices_domaine: dict[str, list[str]] = field(default_factory=dict)

    def couleur_tag(self, nom: str) -> str:
        for tag in self.tags:
            if tag.nom == nom:
                return tag.couleur
        return "#475569"


def _lire_yaml(chemin: Path) -> dict:
    with chemin.open("r", encoding="utf-8") as fh:
        data = yaml.safe_load(fh)
    if not isinstance(data, dict):
        raise ValueError(f"Format YAML invalide : {chemin}")
    return data


def charger_config(
    sources_path: Path | None = None,
    tags_path: Path | None = None,
) -> Config:
    """Charge et valide la configuration des sources et des tags."""
    sources_path = sources_path or (ROOT / "sources.yml")
    tags_path = tags_path or (ROOT / "tags.yml")

    src_data = _lire_yaml(sources_path)
    tag_data = _lire_yaml(tags_path)

    sources: list[Source] = []
    for i, item in enumerate(src_data.get("sources", []) or []):
        nom = item.get("nom") or f"source #{i}"
        domaine = (item.get("domaine") or "transverse").strip().lower()
        if domaine not in DOMAINES_VALIDES:
            raise ValueError(
                f"Domaine invalide '{domaine}' pour la source '{nom}'. "
                f"Attendu : {sorted(DOMAINES_VALIDES)}"
            )
        flux = item.get("flux") or []
        if isinstance(flux, str):
            flux = [flux]
        sources.append(
            Source(
                nom=nom,
                domaine=domaine,
                site=item.get("site", ""),
                flux=list(flux),
                actif=bool(item.get("actif", True)),
            )
        )

    pertinence = [str(m) for m in (src_data.get("pertinence") or [])]

    tags: list[TagRule] = []
    for nom, regle in (tag_data.get("tags") or {}).items():
        regle = regle or {}
        tags.append(
            TagRule(
                nom=str(nom),
                couleur=str(regle.get("couleur", "#475569")),
                mots_cles=[str(m) for m in (regle.get("mots_cles") or [])],
            )
        )

    indices = {
        "assurance": [str(m) for m in (tag_data.get("indices_domaine", {}).get("assurance") or [])],
        "banque": [str(m) for m in (tag_data.get("indices_domaine", {}).get("banque") or [])],
    }

    return Config(sources=sources, pertinence=pertinence, tags=tags, indices_domaine=indices)
