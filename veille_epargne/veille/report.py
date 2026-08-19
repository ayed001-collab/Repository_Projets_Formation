"""Restitution des résultats : HTML, JSON et console."""

from __future__ import annotations

import html
import json
from datetime import datetime
from pathlib import Path

from .config import Config
from .models import Article

# Libellés des domaines pour l'affichage.
DOMAINES_LIBELLE = {
    "assurance": "Épargne — produits Assurance",
    "banque": "Épargne — produits Banque",
    "transverse": "Transverse (régulation, marché, patrimoine)",
}
DOMAINES_ORDRE = ["assurance", "banque", "transverse"]


def grouper_par_domaine(articles: list[Article]) -> dict[str, list[Article]]:
    groupes: dict[str, list[Article]] = {d: [] for d in DOMAINES_ORDRE}
    for art in articles:
        groupes.setdefault(art.domaine, []).append(art)
    for lst in groupes.values():
        lst.sort(key=lambda a: a._sort_key(), reverse=True)
    return groupes


# --------------------------------------------------------------------------- #
# JSON
# --------------------------------------------------------------------------- #
def ecrire_json(articles: list[Article], chemin: Path) -> None:
    chemin.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "genere_le": datetime.now().astimezone().isoformat(),
        "nombre": len(articles),
        "articles": [a.to_dict() for a in articles],
    }
    chemin.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


# --------------------------------------------------------------------------- #
# Console
# --------------------------------------------------------------------------- #
def afficher_console(articles: list[Article]) -> None:
    groupes = grouper_par_domaine(articles)
    for domaine in DOMAINES_ORDRE:
        lst = groupes.get(domaine, [])
        if not lst:
            continue
        print(f"\n=== {DOMAINES_LIBELLE[domaine]} ({len(lst)}) ===")
        for art in lst:
            tags = f" [{', '.join(art.tags)}]" if art.tags else ""
            print(f"  • {art.titre}{tags}")
            print(f"    {art.source} — {art.date_affichage} — {art.lien}")


# --------------------------------------------------------------------------- #
# HTML
# --------------------------------------------------------------------------- #
def _puce_tag(nom: str, couleur: str) -> str:
    return (
        f'<span class="tag" data-tag="{html.escape(nom)}" '
        f'style="--c:{html.escape(couleur)}">{html.escape(nom)}</span>'
    )


def _carte_article(art: Article, config: Config) -> str:
    tags_html = "".join(_puce_tag(t, config.couleur_tag(t)) for t in art.tags)
    data_tags = html.escape("|".join(art.tags))
    return (
        f'<li class="article" data-tags="{data_tags}">'
        f'<a class="titre" href="{html.escape(art.lien)}" target="_blank" rel="noopener">'
        f"{html.escape(art.titre)}</a>"
        f'<div class="meta">'
        f'<span class="source">{html.escape(art.source)}</span>'
        f'<span class="date">{html.escape(art.date_affichage)}</span>'
        f"</div>"
        f'<div class="tags">{tags_html}</div>'
        f"</li>"
    )


def _section_domaine(domaine: str, articles: list[Article], config: Config) -> str:
    if not articles:
        return ""
    cartes = "\n".join(_carte_article(a, config) for a in articles)
    return (
        f'<section class="domaine" id="dom-{domaine}">'
        f'<h2>{html.escape(DOMAINES_LIBELLE.get(domaine, domaine))} '
        f'<span class="compte">{len(articles)}</span></h2>'
        f'<ul class="articles">{cartes}</ul>'
        f"</section>"
    )


def _barre_tags(articles: list[Article], config: Config) -> str:
    presents = [t.nom for t in config.tags if any(t.nom in a.tags for a in articles)]
    boutons = ['<button class="filtre actif" data-filtre="*">Tous</button>']
    for nom in presents:
        couleur = config.couleur_tag(nom)
        boutons.append(
            f'<button class="filtre" data-filtre="{html.escape(nom)}" '
            f'style="--c:{html.escape(couleur)}">{html.escape(nom)}</button>'
        )
    return '<div class="barre-filtres">' + "".join(boutons) + "</div>"


def construire_html(articles: list[Article], config: Config) -> str:
    groupes = grouper_par_domaine(articles)
    genere_le = datetime.now().astimezone().strftime("%d/%m/%Y à %H:%M")
    sections = "\n".join(
        _section_domaine(d, groupes.get(d, []), config) for d in DOMAINES_ORDRE
    )
    barre = _barre_tags(articles, config)

    return f"""<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Veille Épargne — Assurance &amp; Banque</title>
<style>
  :root {{ color-scheme: light dark; }}
  * {{ box-sizing: border-box; }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    margin: 0; background: #f1f5f9; color: #0f172a; line-height: 1.5;
  }}
  header {{
    background: linear-gradient(135deg, #1e3a8a, #6d28d9); color: #fff;
    padding: 28px 20px;
  }}
  header h1 {{ margin: 0 0 4px; font-size: 1.55rem; }}
  header p {{ margin: 0; opacity: .85; font-size: .9rem; }}
  main {{ max-width: 980px; margin: 0 auto; padding: 20px; }}
  .barre-filtres {{ display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0 26px; }}
  .filtre {{
    border: 1px solid #cbd5e1; background: #fff; color: #334155;
    border-radius: 999px; padding: 5px 13px; font-size: .82rem; cursor: pointer;
    --c: #475569;
  }}
  .filtre:hover {{ border-color: var(--c); color: var(--c); }}
  .filtre.actif {{ background: var(--c, #1e293b); color: #fff; border-color: var(--c, #1e293b); }}
  .domaine {{ margin-bottom: 34px; }}
  .domaine h2 {{
    font-size: 1.15rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;
    display: flex; align-items: center; gap: 10px;
  }}
  .compte {{
    background: #e2e8f0; color: #475569; border-radius: 999px;
    padding: 1px 10px; font-size: .8rem; font-weight: 600;
  }}
  ul.articles {{ list-style: none; padding: 0; margin: 0; }}
  .article {{
    background: #fff; border: 1px solid #e2e8f0; border-radius: 12px;
    padding: 14px 16px; margin-bottom: 12px;
  }}
  .article .titre {{ font-weight: 600; color: #1d4ed8; text-decoration: none; font-size: 1.02rem; }}
  .article .titre:hover {{ text-decoration: underline; }}
  .meta {{ font-size: .8rem; color: #64748b; margin: 5px 0 8px; display: flex; gap: 12px; flex-wrap: wrap; }}
  .meta .source {{ font-weight: 600; color: #475569; }}
  .tags {{ display: flex; flex-wrap: wrap; gap: 6px; }}
  .tag {{
    font-size: .72rem; font-weight: 600; padding: 2px 9px; border-radius: 999px;
    color: var(--c); background: color-mix(in srgb, var(--c) 12%, transparent);
    border: 1px solid color-mix(in srgb, var(--c) 35%, transparent);
  }}
  .vide {{ color: #64748b; font-style: italic; }}
  footer {{ text-align: center; color: #94a3b8; font-size: .8rem; padding: 24px; }}
  @media (prefers-color-scheme: dark) {{
    body {{ background: #0f172a; color: #e2e8f0; }}
    .filtre {{ background: #1e293b; border-color: #334155; color: #cbd5e1; }}
    .article {{ background: #1e293b; border-color: #334155; }}
    .domaine h2 {{ border-color: #334155; }}
    .compte {{ background: #334155; color: #cbd5e1; }}
    .article .titre {{ color: #93c5fd; }}
  }}
</style>
</head>
<body>
<header>
  <h1>Veille Épargne — Assurance &amp; Banque en France</h1>
  <p>{len(articles)} article(s) — généré le {genere_le}</p>
</header>
<main>
  {barre}
  {sections if sections.strip() else '<p class="vide">Aucun article récupéré. Vérifiez la connexion réseau et les URLs de flux (voir README).</p>'}
</main>
<footer>Généré par Veille Épargne · classement par domaine et tags automatiques</footer>
<script>
  const boutons = document.querySelectorAll('.filtre');
  const articles = document.querySelectorAll('.article');
  boutons.forEach(btn => btn.addEventListener('click', () => {{
    boutons.forEach(b => b.classList.remove('actif'));
    btn.classList.add('actif');
    const f = btn.dataset.filtre;
    articles.forEach(a => {{
      const tags = (a.dataset.tags || '').split('|');
      a.style.display = (f === '*' || tags.includes(f)) ? '' : 'none';
    }});
    document.querySelectorAll('.domaine').forEach(sec => {{
      const visibles = sec.querySelectorAll('.article:not([style*="none"])').length;
      sec.style.display = visibles ? '' : 'none';
    }});
  }}));
</script>
</body>
</html>
"""


def ecrire_html(articles: list[Article], config: Config, chemin: Path) -> None:
    chemin.parent.mkdir(parents=True, exist_ok=True)
    chemin.write_text(construire_html(articles, config), encoding="utf-8")
