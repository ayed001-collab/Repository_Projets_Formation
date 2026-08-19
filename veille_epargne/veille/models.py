"""Structures de données de l'application."""

from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone


@dataclass
class Source:
    """Une source de veille (éditeur) et ses flux."""

    nom: str
    domaine: str  # "assurance" | "banque" | "transverse"
    site: str
    flux: list[str] = field(default_factory=list)
    actif: bool = True


@dataclass
class Article:
    """Un article normalisé prêt à être restitué."""

    titre: str
    lien: str
    source: str
    domaine: str  # domaine final après re-classement : "assurance" | "banque" | "transverse"
    resume: str = ""
    date: datetime | None = None
    tags: list[str] = field(default_factory=list)

    @property
    def date_iso(self) -> str:
        return self.date.isoformat() if self.date else ""

    @property
    def date_affichage(self) -> str:
        if not self.date:
            return "date inconnue"
        return self.date.strftime("%d/%m/%Y")

    def _sort_key(self) -> datetime:
        # Les articles sans date passent en fin de liste.
        return self.date or datetime.min.replace(tzinfo=timezone.utc)

    def to_dict(self) -> dict:
        return {
            "titre": self.titre,
            "lien": self.lien,
            "source": self.source,
            "domaine": self.domaine,
            "resume": self.resume,
            "date": self.date_iso,
            "tags": self.tags,
        }
