"""Tests hors-ligne du moteur de classification et de la restitution."""

import sys
from datetime import datetime, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from veille.classify import detecter_tags, enrichir, est_pertinent, resoudre_domaine
from veille.config import charger_config
from veille.models import Article
from veille.pipeline import dedoublonner, filtrer_recents
from veille.report import construire_html


def _config():
    return charger_config()


def _art(titre, resume="", domaine="transverse", lien="https://ex.fr/a", date=None):
    return Article(titre=titre, lien=lien, source="Test", domaine=domaine,
                   resume=resume, date=date)


def test_pertinence_retient_epargne():
    cfg = _config()
    assert est_pertinent(_art("Le nouveau taux du Livret A"), cfg)
    assert est_pertinent(_art("Assurance-vie : la collecte repart"), cfg)


def test_pertinence_rejette_hors_sujet():
    cfg = _config()
    assert not est_pertinent(_art("Résultats sportifs du week-end"), cfg)


def test_tags_fiscalite_et_reglementation():
    cfg = _config()
    tags = detecter_tags(_art("La fiscalité de l'assurance-vie évolue par décret"), cfg)
    assert "Fiscalité" in tags
    assert "Réglementation" in tags
    assert "Assurance-vie" in tags


def test_tags_insensibles_aux_accents():
    cfg = _config()
    # 'reglementation' sans accents doit matcher.
    tags = detecter_tags(_art("Nouvelle reglementation europeenne"), cfg)
    assert "Réglementation" in tags


def test_reclassement_domaine_assurance():
    cfg = _config()
    art = _art("Un assureur lance un fonds euros dynamique", domaine="transverse")
    assert resoudre_domaine(art, cfg) == "assurance"


def test_reclassement_domaine_banque():
    cfg = _config()
    art = _art("La rémunération du Livret A et du LDDS en 2026", domaine="transverse")
    assert resoudre_domaine(art, cfg) == "banque"


def test_source_typee_conserve_domaine():
    cfg = _config()
    art = _art("Titre neutre", domaine="banque")
    assert resoudre_domaine(art, cfg) == "banque"


def test_dedoublonnage_par_lien():
    a = _art("A", lien="https://ex.fr/x?utm=1")
    b = _art("A bis", lien="https://ex.fr/x/")
    assert len(dedoublonner([a, b])) == 1


def test_filtrer_recents():
    vieux = _art("vieux", date=datetime(2000, 1, 1, tzinfo=timezone.utc))
    neuf = _art("neuf", date=datetime.now(timezone.utc))
    res = filtrer_recents([vieux, neuf], jours=30)
    assert neuf in res and vieux not in res


def test_enrichir_bout_en_bout():
    cfg = _config()
    arts = [
        _art("PER : nouveau plan d'épargne retraite lancé", domaine="transverse"),
        _art("Match de foot ce soir", domaine="transverse"),
    ]
    res = enrichir(arts, cfg)
    assert len(res) == 1
    assert res[0].domaine in ("assurance", "banque", "transverse")
    assert "Nouveau produit" in res[0].tags


def test_pas_de_faux_positif_sous_chaine():
    cfg = _config()
    # « performance » ne doit PAS déclencher le tag PER, ni « record » un match « or ».
    tags = detecter_tags(_art("La performance record des marchés"), cfg)
    assert "Épargne retraite / PER" not in tags
    # Article hors sujet ne contenant que des sous-chaînes trompeuses.
    assert not est_pertinent(_art("Un opérateur télécom bat un record"), cfg)


def test_html_se_construit():
    cfg = _config()
    arts = enrichir([_art("Assurance-vie : la fiscalité change")], cfg)
    html = construire_html(arts, cfg)
    assert "<html" in html and "Assurance-vie" in html


if __name__ == "__main__":
    import traceback

    fns = [v for k, v in sorted(globals().items()) if k.startswith("test_") and callable(v)]
    echecs = 0
    for fn in fns:
        try:
            fn()
            print(f"  ok   {fn.__name__}")
        except Exception:
            echecs += 1
            print(f"  FAIL {fn.__name__}")
            traceback.print_exc()
    print(f"\n{len(fns) - echecs}/{len(fns)} tests réussis")
    raise SystemExit(1 if echecs else 0)
