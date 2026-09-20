# 先生 Sensei — Agent d'apprentissage du japonais

Application web interactive qui joue le rôle d'un professeur (**先生 / sensei**) pour
apprendre le japonais. Tout le contenu est présenté en **japonais**, en **rōmaji**
(transcription latine) et en **français**, et illustré par des **images** (pictogrammes)
pour un apprentissage plus visuel.

## ✨ Fonctionnalités

| Module | Contenu |
| --- | --- |
| 🈯 **Vocabulaire** | **1050 mots** (50 par thème) classés en 21 thèmes d'apprentissage (salutations & politesse, nombres, temps & jours, famille, corps, couleurs, alimentation, restauration, achats & argent, transport, voyages, en ville & lieux, maison, vêtements, école & études, métiers & travail, animaux, nature & météo, directions & positions, adjectifs courants, expressions utiles). Chaque mot : image + kanji/kana + kana de lecture + rōmaji + français. |
| 🔀 **Verbes** | **Plus de 230 verbes parmi les plus utilisés**, classés par groupe (godan, ichidan, irréguliers), avec pour chacun la forme du dictionnaire, le présent ~ます, le négatif ~ません, le passé ~ました et la forme て. Recherche intégrée (français, rōmaji ou kanji). Les conjugaisons sont **générées automatiquement** selon les règles japonaises, ce qui garantit exactitude et cohérence. |
| 📚 **Grammaire** | **Plan d'apprentissage débutant en 32 leçons**, réparties en Niveau 1 (les fondations : SOV, です, は・が・を・の・に・で・と・も, これ/それ/あれ, あります/います, adjectifs, pronoms, classificateurs) et Niveau 2 (construire des phrases : formes ます・ました・ません, forme て, ~てください, ~ています, ~たい, invitations, cause から/ので, opposition, comparaison, ~ことができる, なる, expressions temporelles). |
| ❓ **Questions** | Axe dédié à la formulation des questions : les mots interrogatifs (何・誰・どこ・いつ・なぜ・いくら…), les questions avec です か, les questions avec un verbe (何を・どこへ・誰と・どうやって…) et des tournures utiles pour se dépanner. Chaque tournure a un exemple complet (japonais, rōmaji, français) et l'audio. |
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
    ├── verbs.js        # 230+ verbes + générateur de conjugaison
    ├── questions.js    # Mots interrogatifs et modèles de questions
    ├── data.js         # Grammaire (plan Niveau 1 & 2) et groupes de verbes
    └── app.js          # Logique (navigation, flashcards, quiz, recherche, audio)
```

## ➕ Enrichir le contenu

Le contenu est centralisé par type : vocabulaire dans `js/vocab.js` (`VOCABULAIRE`),
verbes dans `js/verbs.js`, grammaire dans `js/data.js` (`GRAMMAIRE`).

Pour **ajouter un verbe**, il suffit d'ajouter une ligne compacte au tableau `BASE` de
`js/verbs.js` — `{ jp, kana, romaji, fr, groupe, img }` — et toutes les conjugaisons
(présent, négatif, passé, forme て) sont générées automatiquement. Le `groupe` vaut
`"godan"`, `"ichidan"` ou `"irregular"`.

Pour ajouter un mot ou une leçon, complétez le tableau correspondant en respectant le
format existant (chaque entrée fournit japonais, rōmaji et français).

## 📝 Note pédagogique

Le rōmaji utilise les macrons (ō, ū) pour les voyelles longues. Les termes de famille
donnés (父 chichi, 母 haha…) désignent sa propre famille ; les formes polies pour la
famille d'autrui diffèrent — une distinction abordable dans une future leçon.
