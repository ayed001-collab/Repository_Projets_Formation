# Veille Épargne — Assurance & Banque en France

Petite application de **veille** qui agrège automatiquement les articles les plus
pertinents sur l'**épargne** en France (produits, **fiscalité**, **réglementation**,
**nouveaux produits** des assureurs et des banques), à partir de flux RSS de sources
de référence : presse spécialisée (*L'Argus de l'Assurance*, *News Assurances Pro*,
*MoneyVox*, *cBanque*…), **régulateurs** (AMF), acteurs et administration
(France Assureurs, Ministère de l'Économie…).

La restitution se fait sous forme de **titres cliquables** (liens directs vers le
site source), **classés par domaine** :

- **Épargne — produits Assurance**
- **Épargne — produits Banque**
- *Transverse* (régulation / marché / patrimoine, quand l'article ne relève pas
  clairement d'un des deux domaines)

…et **étiquetés par tags** détectés automatiquement : `Fiscalité`, `Réglementation`,
`Nouveau produit`, `Rendement / Taux`, `Assurance-vie`, `Épargne retraite / PER`,
`Livrets réglementés`, `Bourse / PEA`, `Immobilier / SCPI`, `ESG / Durable`,
`Crypto / Actifs numériques`, `Marché / Collecte`.

> Ces domaines et tags couvrent le **panorama des placements en France** (placements
> financiers, immobiliers, épargne salariale, retraite…).

---

## Installation

```bash
cd veille_epargne
python3 -m venv .venv && source .venv/bin/activate   # optionnel mais recommandé
pip install -r requirements.txt
```

## Utilisation

```bash
# Génère output/veille_epargne.html + .json et affiche un résumé console
python run.py

# Équivalent
python -m veille
```

Puis ouvrez **`output/veille_epargne.html`** dans un navigateur.

### Options

| Option | Description | Défaut |
|---|---|---|
| `--jours N` | Ne garder que les articles des N derniers jours (`0` = tous) | `30` |
| `--max-par-domaine N` | Plafonner le nombre d'articles par domaine (`0` = illimité) | `0` |
| `--format html,json,console` | Formats de sortie voulus | tous |
| `--sortie DIR` | Dossier de sortie | `./output` |
| `--timeout N` | Timeout réseau par flux (s) | `20` |
| `--config FICHIER` | Fichier de sources | `sources.yml` |
| `--tags FICHIER` | Fichier de tags | `tags.yml` |
| `-v`, `--verbeux` | Détail de la collecte (flux, comptes) | off |

Exemples :

```bash
python run.py --jours 15 -v                 # 15 derniers jours, en mode détaillé
python run.py --format html --jours 0        # tout l'historique des flux, HTML seul
python run.py --max-par-domaine 20           # top 20 par domaine
```

---

## Comment ça marche

```
sources.yml ─┐
             ├─► fetch (RSS/Atom) ─► filtre pertinence ─► re-classement domaine
tags.yml ────┘                                        ─► détection tags
                                   ─► dédoublonnage ─► filtre ancienneté
                                                    ─► HTML / JSON / console
```

1. **Collecte** : lecture des flux RSS/Atom déclarés dans `sources.yml`
   (un flux injoignable est ignoré, avec un avertissement — la collecte continue).
2. **Pertinence** : un article n'est retenu que s'il contient au moins un mot-clé
   d'épargne (liste `pertinence:` de `sources.yml`).
3. **Domaine** : les sources typées `assurance`/`banque` gardent leur domaine ;
   les sources `transverse` (AMF, presse généraliste…) sont re-classées article par
   article selon les mots-clés (`indices_domaine` de `tags.yml`).
4. **Tags** : chaque article reçoit les tags dont un mot-clé apparaît (recherche par
   **mot entier**, insensible à la casse et aux accents).
5. **Dédoublonnage** par URL/titre, **tri** par date décroissante, **filtre**
   d'ancienneté.

---

## Personnalisation

Tout est piloté par deux fichiers YAML, **sans toucher au code** :

- **`sources.yml`** — ajouter/retirer une source, activer/désactiver (`actif: false`),
  ajuster la liste `pertinence`.
- **`tags.yml`** — ajouter un tag, ses mots-clés et sa couleur ; affiner les
  `indices_domaine` pour le re-classement.

Ajouter une source :

```yaml
  - nom: "Ma source"
    domaine: banque          # assurance | banque | transverse
    site: "https://exemple.fr/"
    actif: true
    flux:
      - "https://exemple.fr/rss"
```

### Vérifier / corriger les URLs de flux

Les URLs de flux évoluent. Si une source ne remonte rien en mode `-v`, vérifiez son
flux sur sa page dédiée :

- **AMF** — https://www.amf-france.org/fr/subscriptions-rss-feeds *(flux vérifiés :
  `.../flux-rss/display/22` épargnants, `/30` actualités, `/23` communiqués)*
- **MoneyVox** — https://www.moneyvox.fr/legal/flux-rss.php
- **Ministère de l'Économie** — https://www.economie.gouv.fr/rss
- **L'Argus de l'Assurance** — https://www.argusdelassurance.com/ (rubrique RSS)
- **News Assurances Pro** — https://www.newsassurancespro.com/flux-actualites

> Astuce : pour beaucoup de sites WordPress, le flux est `.../feed/`.

---

## Automatiser la veille (quotidienne)

Exemple de tâche `cron` (tous les jours à 8h) :

```bash
0 8 * * *  cd /chemin/vers/veille_epargne && ./.venv/bin/python run.py >> veille.log 2>&1
```

---

## Tests

```bash
python tests/test_classify.py     # suite hors-ligne (aucun réseau requis)
# ou, si pytest est installé :
pytest -q
```

---

## Structure

```
veille_epargne/
├── sources.yml            # sources & flux + mots-clés de pertinence
├── tags.yml               # tags (mots-clés, couleurs) + indices de domaine
├── requirements.txt
├── run.py                 # lanceur : python run.py
├── veille/
│   ├── cli.py             # ligne de commande
│   ├── config.py          # chargement YAML
│   ├── models.py          # Source, Article
│   ├── text.py            # normalisation + match par mot entier
│   ├── fetch.py           # récupération/parsing RSS
│   ├── classify.py        # pertinence, domaine, tags
│   ├── pipeline.py        # orchestration + dédoublonnage + filtres
│   └── report.py          # HTML / JSON / console
├── tests/
│   └── test_classify.py
└── output/                # rapports générés (git-ignoré)
```

## Notes

- **Réseau** : en environnement restreint (proxy/sandbox), l'accès sortant peut être
  bloqué et la collecte remonter 0 article — c'est normal, lancez l'application depuis
  un poste avec accès Internet.
- Seuls les **titres, liens et métadonnées** publiés dans les flux RSS sont récupérés :
  aucun contenu d'article n'est copié, l'utilisateur est renvoyé vers le site source.
