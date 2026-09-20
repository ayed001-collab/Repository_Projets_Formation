# 先生 Sensei — Agent d'apprentissage du japonais

Application web interactive qui joue le rôle d'un professeur (**先生 / sensei**) pour
apprendre le japonais. Tout le contenu est présenté en **japonais**, en **rōmaji**
(transcription latine) et en **français**, et illustré par des **images** (pictogrammes)
pour un apprentissage plus visuel.

## ✨ Fonctionnalités

| Module | Contenu |
| --- | --- |
| 🈯 **Vocabulaire** | **1050 mots** (50 par thème) classés en 21 thèmes d'apprentissage (salutations & politesse, nombres, temps & jours, famille, corps, couleurs, alimentation, restauration, achats & argent, transport, voyages, en ville & lieux, maison, vêtements, école & études, métiers & travail, animaux, nature & météo, directions & positions, adjectifs courants, expressions utiles). Chaque mot : image + kanji/kana + kana de lecture + rōmaji + français. |
| 🔀 **Verbes** | Conjugaison des verbes essentiels à la forme polie (dictionnaire, présent ~ます, négatif ~ません, passé ~ました, forme en て), classés par groupe (godan, ichidan, irréguliers), avec une phrase d'exemple. |
| 📚 **Grammaire** | Leçons courtes et progressives : ordre des mots (SOV), particules は・を・に・で・の, la copule です, les questions avec か, les adjectifs -い / -な. |
| 🎯 **Entraînement** | Cartes-mémoire (flashcards) recto/verso et quiz à choix multiples pour s'auto-évaluer. |

Autres atouts :

- 🔊 **Prononciation audio** via la synthèse vocale du navigateur (si une voix japonaise
  est disponible) — bonus optionnel, l'application fonctionne sans.
- 🌙 **Thème clair / sombre** avec mémorisation du choix.
- 📱 **Responsive** : utilisable sur mobile, tablette et ordinateur.
- 🚀 **100 % autonome** : HTML/CSS/JavaScript pur, aucune dépendance externe ni connexion requise.

## 🚀 Utilisation

Ouvrez simplement le fichier `index.html` dans un navigateur web.

Aucune installation n'est nécessaire. Pour éviter d'éventuelles restrictions liées au
protocole `file://`, vous pouvez aussi lancer un petit serveur local :

```bash
cd apprentissage-japonais
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

## 🗂️ Structure

```
apprentissage-japonais/
├── index.html          # Page principale et structure de l'interface
├── css/
│   └── styles.css      # Design (responsive, thème clair/sombre)
└── js/
    ├── vocab.js        # Vocabulaire : 21 thèmes × 50 mots
    ├── data.js         # Verbes et grammaire
    └── app.js          # Logique (navigation, flashcards, quiz, audio)
```

## ➕ Enrichir le contenu

Le vocabulaire est centralisé dans `js/vocab.js` (tableau `VOCABULAIRE`) ; les verbes et
la grammaire dans `js/data.js` (`VERBES`, `GRAMMAIRE`). Pour ajouter un mot, un verbe ou
une leçon, il suffit de compléter le tableau correspondant en respectant le format
existant (chaque entrée fournit japonais, rōmaji et français).

## 📝 Note pédagogique

Le rōmaji utilise les macrons (ō, ū) pour les voyelles longues. Les termes de famille
donnés (父 chichi, 母 haha…) désignent sa propre famille ; les formes polies pour la
famille d'autrui diffèrent — une distinction abordable dans une future leçon.
