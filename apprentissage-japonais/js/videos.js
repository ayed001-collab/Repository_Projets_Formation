/**
 * videos.js — Axe « Vidéos » de l'agent d'apprentissage du japonais
 * ----------------------------------------------------------------
 * Une entrée par thème d'apprentissage. Deux modes d'affichage :
 *   - Si "videoId" est renseigné (identifiant YouTube, ex. "dQw4w9WgXcQ"),
 *     la vidéo est INTÉGRÉE directement dans la page (lecteur YouTube).
 *   - Sinon, un bouton ouvre une RECHERCHE YouTube ciblée sur le thème
 *     (toujours valide, aucun lien mort).
 *
 * Pour intégrer une vidéo précise : ouvrez la vidéo sur YouTube, copiez la
 * partie après « v= » dans l'URL (ex. https://youtube.com/watch?v=XXXX → XXXX)
 * et collez-la dans "videoId".
 *
 * Ce fichier expose la variable globale VIDEOS.
 */
const VIDEOS = [
  { theme: "Hiragana", icon: "あ", desc: "Lire et écrire le premier syllabaire.", query: "apprendre hiragana débutant cours", videoId: "" },
  { theme: "Katakana", icon: "ア", desc: "Le syllabaire des mots étrangers.", query: "apprendre katakana débutant cours", videoId: "" },
  { theme: "Salutations & politesse", icon: "👋", desc: "Dire bonjour, merci, au revoir.", query: "salutations en japonais débutant", videoId: "" },
  { theme: "Se présenter", icon: "🙋", desc: "Donner son nom, son pays, son âge.", query: "se présenter en japonais débutant", videoId: "" },
  { theme: "Les nombres", icon: "🔢", desc: "Compter et dire les prix, l'heure.", query: "compter en japonais nombres débutant", videoId: "" },
  { theme: "Alimentation & restaurant", icon: "🍱", desc: "Vocabulaire des repas et commander.", query: "vocabulaire nourriture japonais restaurant", videoId: "" },
  { theme: "Famille", icon: "👪", desc: "Parler de sa famille.", query: "vocabulaire famille en japonais", videoId: "" },
  { theme: "Voyage & transports", icon: "✈️", desc: "Phrases utiles pour se déplacer.", query: "japonais voyage transport phrases utiles", videoId: "" },
  { theme: "Verbes & conjugaison", icon: "🔀", desc: "La forme ます, la forme て, le passé.", query: "conjugaison verbes japonais masu forme te", videoId: "" },
  { theme: "Grammaire N5", icon: "📚", desc: "Les particules et la structure de phrase.", query: "grammaire japonaise débutant N5 particules", videoId: "" },
  { theme: "Kanji", icon: "漢", desc: "Les premiers kanji et leurs lectures.", query: "apprendre kanji débutant N5", videoId: "" },
  { theme: "Adjectifs", icon: "⇄", desc: "Les adjectifs en い et な.", query: "adjectifs japonais i na débutant", videoId: "" },
  { theme: "Les couleurs", icon: "🎨", desc: "Nommer les couleurs.", query: "les couleurs en japonais", videoId: "" },
  { theme: "Poser des questions", icon: "❓", desc: "Les mots interrogatifs et les questions.", query: "poser des questions en japonais mots interrogatifs", videoId: "" },
];

/* Exposé global */
if (typeof window !== "undefined") window.VIDEOS = VIDEOS;
