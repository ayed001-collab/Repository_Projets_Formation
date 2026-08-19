"""Point d'entrée en ligne de commande."""

from __future__ import annotations

import argparse
import logging
import sys
from pathlib import Path

from .config import ROOT, charger_config
from .pipeline import executer
from .report import afficher_console, ecrire_html, ecrire_json


def _configurer_logs(verbeux: bool) -> None:
    logging.basicConfig(
        level=logging.INFO if verbeux else logging.WARNING,
        format="%(message)s",
        stream=sys.stderr,
    )


def construire_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        prog="veille-epargne",
        description="Agrégateur de veille sur l'épargne, l'assurance et la banque en France.",
    )
    p.add_argument("--config", type=Path, default=ROOT / "sources.yml",
                   help="Chemin du fichier des sources (defaut: sources.yml)")
    p.add_argument("--tags", type=Path, default=ROOT / "tags.yml",
                   help="Chemin du fichier des tags (defaut: tags.yml)")
    p.add_argument("--sortie", type=Path, default=ROOT / "output",
                   help="Dossier de sortie (defaut: ./output)")
    p.add_argument("--jours", type=int, default=30,
                   help="Ne garder que les articles des N derniers jours (0 = tous). Defaut: 30")
    p.add_argument("--max-par-domaine", type=int, default=0,
                   help="Nombre max d'articles par domaine (0 = illimité)")
    p.add_argument("--timeout", type=int, default=20,
                   help="Timeout réseau par flux, en secondes (defaut: 20)")
    p.add_argument("--format", default="html,json,console",
                   help="Formats de sortie séparés par des virgules : html,json,console")
    p.add_argument("-v", "--verbeux", action="store_true",
                   help="Affiche le détail de la collecte")
    return p


def main(argv: list[str] | None = None) -> int:
    args = construire_parser().parse_args(argv)
    _configurer_logs(args.verbeux)

    config = charger_config(sources_path=args.config, tags_path=args.tags)
    articles = executer(
        config,
        jours=args.jours,
        timeout=args.timeout,
        max_par_domaine=args.max_par_domaine or None,
    )

    formats = {f.strip().lower() for f in args.format.split(",") if f.strip()}

    if "json" in formats:
        chemin = args.sortie / "veille_epargne.json"
        ecrire_json(articles, chemin)
        print(f"JSON  écrit : {chemin}")
    if "html" in formats:
        chemin = args.sortie / "veille_epargne.html"
        ecrire_html(articles, config, chemin)
        print(f"HTML  écrit : {chemin}")
    if "console" in formats:
        afficher_console(articles)

    print(f"\n{len(articles)} article(s) retenu(s).")
    if not articles:
        print(
            "Aucun article : en environnement restreint le réseau sortant peut être "
            "bloqué, ou les URLs de flux doivent être vérifiées (voir README).",
            file=sys.stderr,
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
