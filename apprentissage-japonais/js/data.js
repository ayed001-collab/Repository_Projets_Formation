/**
 * data.js — Contenu pédagogique de l'agent d'apprentissage du japonais
 * -------------------------------------------------------------------
 * Le VOCABULAIRE (volumineux) est défini dans js/vocab.js, chargé avant
 * ce fichier, et exposé en tant que variable globale VOCABULAIRE.
 *
 * Ici sont définis les verbes et la grammaire. Chaque entrée fournit le
 * japonais, le rōmaji et le français.
 */

/* =====================================================================
 * VERBES — avec conjugaisons de base (forme polie)
 * ---------------------------------------------------------------------
 * groupe :
 *   "godan"    (verbes du 1er groupe, en -u)
 *   "ichidan"  (verbes du 2e groupe, en -ru)
 *   "irregular"(suru, kuru)
 * formes :
 *   dictionnaire — forme neutre (dictionnaire)
 *   present      — présent/futur poli (~ます)
 *   negatif      — présent négatif poli (~ません)
 *   passe        — passé poli (~ました)
 *   te           — forme en て (liaison, requêtes)
 * ===================================================================== */
const VERBES = [
  {
    fr: "manger", img: "🍽️", groupe: "ichidan",
    dictionnaire: { jp: "食べる", romaji: "taberu" },
    present: { jp: "食べます", romaji: "tabemasu" },
    negatif: { jp: "食べません", romaji: "tabemasen" },
    passe: { jp: "食べました", romaji: "tabemashita" },
    te: { jp: "食べて", romaji: "tabete" },
    exemple: { jp: "寿司を食べます。", romaji: "Sushi o tabemasu.", fr: "Je mange des sushis." },
  },
  {
    fr: "boire", img: "🥤", groupe: "godan",
    dictionnaire: { jp: "飲む", romaji: "nomu" },
    present: { jp: "飲みます", romaji: "nomimasu" },
    negatif: { jp: "飲みません", romaji: "nomimasen" },
    passe: { jp: "飲みました", romaji: "nomimashita" },
    te: { jp: "飲んで", romaji: "nonde" },
    exemple: { jp: "お茶を飲みます。", romaji: "Ocha o nomimasu.", fr: "Je bois du thé." },
  },
  {
    fr: "aller", img: "🚶", groupe: "godan",
    dictionnaire: { jp: "行く", romaji: "iku" },
    present: { jp: "行きます", romaji: "ikimasu" },
    negatif: { jp: "行きません", romaji: "ikimasen" },
    passe: { jp: "行きました", romaji: "ikimashita" },
    te: { jp: "行って", romaji: "itte" },
    exemple: { jp: "学校に行きます。", romaji: "Gakkō ni ikimasu.", fr: "Je vais à l'école." },
  },
  {
    fr: "venir", img: "🏃", groupe: "irregular",
    dictionnaire: { jp: "来る", romaji: "kuru" },
    present: { jp: "来ます", romaji: "kimasu" },
    negatif: { jp: "来ません", romaji: "kimasen" },
    passe: { jp: "来ました", romaji: "kimashita" },
    te: { jp: "来て", romaji: "kite" },
    exemple: { jp: "友達が来ます。", romaji: "Tomodachi ga kimasu.", fr: "Un ami vient." },
  },
  {
    fr: "faire", img: "🛠️", groupe: "irregular",
    dictionnaire: { jp: "する", romaji: "suru" },
    present: { jp: "します", romaji: "shimasu" },
    negatif: { jp: "しません", romaji: "shimasen" },
    passe: { jp: "しました", romaji: "shimashita" },
    te: { jp: "して", romaji: "shite" },
    exemple: { jp: "宿題をします。", romaji: "Shukudai o shimasu.", fr: "Je fais mes devoirs." },
  },
  {
    fr: "voir / regarder", img: "👀", groupe: "ichidan",
    dictionnaire: { jp: "見る", romaji: "miru" },
    present: { jp: "見ます", romaji: "mimasu" },
    negatif: { jp: "見ません", romaji: "mimasen" },
    passe: { jp: "見ました", romaji: "mimashita" },
    te: { jp: "見て", romaji: "mite" },
    exemple: { jp: "映画を見ます。", romaji: "Eiga o mimasu.", fr: "Je regarde un film." },
  },
  {
    fr: "parler", img: "💬", groupe: "godan",
    dictionnaire: { jp: "話す", romaji: "hanasu" },
    present: { jp: "話します", romaji: "hanashimasu" },
    negatif: { jp: "話しません", romaji: "hanashimasen" },
    passe: { jp: "話しました", romaji: "hanashimashita" },
    te: { jp: "話して", romaji: "hanashite" },
    exemple: { jp: "日本語を話します。", romaji: "Nihongo o hanashimasu.", fr: "Je parle japonais." },
  },
  {
    fr: "écouter / entendre", img: "👂", groupe: "godan",
    dictionnaire: { jp: "聞く", romaji: "kiku" },
    present: { jp: "聞きます", romaji: "kikimasu" },
    negatif: { jp: "聞きません", romaji: "kikimasen" },
    passe: { jp: "聞きました", romaji: "kikimashita" },
    te: { jp: "聞いて", romaji: "kiite" },
    exemple: { jp: "音楽を聞きます。", romaji: "Ongaku o kikimasu.", fr: "J'écoute de la musique." },
  },
  {
    fr: "lire", img: "📖", groupe: "godan",
    dictionnaire: { jp: "読む", romaji: "yomu" },
    present: { jp: "読みます", romaji: "yomimasu" },
    negatif: { jp: "読みません", romaji: "yomimasen" },
    passe: { jp: "読みました", romaji: "yomimashita" },
    te: { jp: "読んで", romaji: "yonde" },
    exemple: { jp: "本を読みます。", romaji: "Hon o yomimasu.", fr: "Je lis un livre." },
  },
  {
    fr: "écrire", img: "✍️", groupe: "godan",
    dictionnaire: { jp: "書く", romaji: "kaku" },
    present: { jp: "書きます", romaji: "kakimasu" },
    negatif: { jp: "書きません", romaji: "kakimasen" },
    passe: { jp: "書きました", romaji: "kakimashita" },
    te: { jp: "書いて", romaji: "kaite" },
    exemple: { jp: "手紙を書きます。", romaji: "Tegami o kakimasu.", fr: "J'écris une lettre." },
  },
  {
    fr: "acheter", img: "🛒", groupe: "godan",
    dictionnaire: { jp: "買う", romaji: "kau" },
    present: { jp: "買います", romaji: "kaimasu" },
    negatif: { jp: "買いません", romaji: "kaimasen" },
    passe: { jp: "買いました", romaji: "kaimashita" },
    te: { jp: "買って", romaji: "katte" },
    exemple: { jp: "パンを買います。", romaji: "Pan o kaimasu.", fr: "J'achète du pain." },
  },
  {
    fr: "dormir", img: "😴", groupe: "ichidan",
    dictionnaire: { jp: "寝る", romaji: "neru" },
    present: { jp: "寝ます", romaji: "nemasu" },
    negatif: { jp: "寝ません", romaji: "nemasen" },
    passe: { jp: "寝ました", romaji: "nemashita" },
    te: { jp: "寝て", romaji: "nete" },
    exemple: { jp: "早く寝ます。", romaji: "Hayaku nemasu.", fr: "Je me couche tôt." },
  },
];

const GROUPES_VERBES = {
  godan: { nom: "Godan (1er groupe, en -u)", couleur: "var(--accent-1)" },
  ichidan: { nom: "Ichidan (2e groupe, en -ru)", couleur: "var(--accent-2)" },
  irregular: { nom: "Irréguliers (する・来る)", couleur: "var(--accent-3)" },
};

/* =====================================================================
 * GRAMMAIRE — leçons progressives
 * ===================================================================== */
const GRAMMAIRE = [
  {
    titre: "L'ordre des mots : Sujet – Objet – Verbe",
    icon: "🧩",
    resume: "En japonais, le verbe se place toujours à la fin de la phrase.",
    contenu: [
      "Là où le français dit Sujet–Verbe–Objet, le japonais suit l'ordre Sujet–Objet–Verbe (SOV).",
      "Le verbe termine la phrase. Les compléments et leur rôle sont indiqués par des particules qui suivent le mot.",
    ],
    exemples: [
      { jp: "私はりんごを食べます。", romaji: "Watashi wa ringo o tabemasu.", fr: "Je mange une pomme. (litt. « Je — pomme — mange »)" },
      { jp: "彼は水を飲みます。", romaji: "Kare wa mizu o nomimasu.", fr: "Il boit de l'eau." },
    ],
  },
  {
    titre: "La particule は (wa) — le thème",
    icon: "🔤",
    resume: "は marque le thème de la phrase : « en ce qui concerne… ».",
    contenu: [
      "La particule は (écrite は mais prononcée « wa ») indique de quoi on parle, le thème.",
      "Structure : [Thème] は [commentaire]. Elle se traduit souvent par « moi, je… » ou « quant à… ».",
    ],
    exemples: [
      { jp: "私は学生です。", romaji: "Watashi wa gakusei desu.", fr: "Je suis étudiant(e)." },
      { jp: "これはペンです。", romaji: "Kore wa pen desu.", fr: "Ceci est un stylo." },
    ],
  },
  {
    titre: "La particule を (o) — le complément d'objet direct",
    icon: "🎯",
    resume: "を marque l'objet direct de l'action.",
    contenu: [
      "La particule を (prononcée « o ») se place après le complément d'objet direct, celui qui subit l'action du verbe.",
      "Structure : [Objet] を [verbe].",
    ],
    exemples: [
      { jp: "本を読みます。", romaji: "Hon o yomimasu.", fr: "Je lis un livre." },
      { jp: "コーヒーを飲みます。", romaji: "Kōhī o nomimasu.", fr: "Je bois un café." },
    ],
  },
  {
    titre: "Les particules に (ni) et で (de) — lieu et temps",
    icon: "📍",
    resume: "に indique la destination / le moment ; で indique le lieu d'une action.",
    contenu: [
      "に : destination (« vers »), moment précis (« à »), ou lieu d'existence avec あります/います.",
      "で : lieu où se déroule une action, ou moyen utilisé.",
    ],
    exemples: [
      { jp: "東京に行きます。", romaji: "Tōkyō ni ikimasu.", fr: "Je vais à Tokyo. (destination)" },
      { jp: "七時に起きます。", romaji: "Shichi-ji ni okimasu.", fr: "Je me lève à 7 heures. (moment)" },
      { jp: "家で食べます。", romaji: "Ie de tabemasu.", fr: "Je mange à la maison. (lieu de l'action)" },
    ],
  },
  {
    titre: "です (desu) — le verbe « être »",
    icon: "🟰",
    resume: "です relie un sujet à un attribut. C'est la copule polie.",
    contenu: [
      "です s'emploie pour dire « c'est / je suis / il est ». Il se place à la fin de la phrase.",
      "Négation : ではありません (dewa arimasen) ou じゃありません (ja arimasen). Passé : でした (deshita).",
    ],
    exemples: [
      { jp: "これは猫です。", romaji: "Kore wa neko desu.", fr: "C'est un chat." },
      { jp: "学生ではありません。", romaji: "Gakusei dewa arimasen.", fr: "Je ne suis pas étudiant(e)." },
    ],
  },
  {
    titre: "Poser une question avec か (ka)",
    icon: "❓",
    resume: "Ajouter か à la fin d'une phrase la transforme en question.",
    contenu: [
      "Pas besoin d'inverser l'ordre des mots : on ajoute simplement la particule か à la fin.",
      "À l'oral, la voix monte légèrement, comme un point d'interrogation.",
    ],
    exemples: [
      { jp: "学生ですか。", romaji: "Gakusei desu ka.", fr: "Êtes-vous étudiant(e) ?" },
      { jp: "コーヒーを飲みますか。", romaji: "Kōhī o nomimasu ka.", fr: "Buvez-vous du café ?" },
    ],
  },
  {
    titre: "Les adjectifs en -い et en -な",
    icon: "🏷️",
    resume: "Deux familles d'adjectifs, qui ne se comportent pas de la même façon.",
    contenu: [
      "Adjectifs en -い (i-adjectifs) : se terminent par い et peuvent se conjuguer eux-mêmes (ex. passé : 高かった).",
      "Adjectifs en -な (na-adjectifs) : prennent な devant un nom (ex. きれいな花 = une jolie fleur).",
    ],
    exemples: [
      { jp: "高い山です。", romaji: "Takai yama desu.", fr: "C'est une montagne haute. (i-adjectif)" },
      { jp: "きれいな花です。", romaji: "Kirei na hana desu.", fr: "C'est une jolie fleur. (na-adjectif)" },
    ],
  },
  {
    titre: "La particule の (no) — possession et lien",
    icon: "🔗",
    resume: "の relie deux noms : possession, appartenance ou catégorie.",
    contenu: [
      "Structure : [A] の [B] = « le B de A ». L'ordre est inverse du français.",
      "Sert à la possession (mon, ton…) et à préciser une catégorie.",
    ],
    exemples: [
      { jp: "私の犬です。", romaji: "Watashi no inu desu.", fr: "C'est mon chien. (litt. « chien de moi »)" },
      { jp: "日本語の本です。", romaji: "Nihongo no hon desu.", fr: "C'est un livre de japonais." },
    ],
  },
];

/* Exposé global pour app.js (VOCABULAIRE provient de vocab.js) */
window.DATA = {
  VOCABULAIRE: (typeof VOCABULAIRE !== "undefined" ? VOCABULAIRE : window.VOCABULAIRE),
  VERBES,
  GROUPES_VERBES,
  GRAMMAIRE,
};
