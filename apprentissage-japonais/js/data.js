/**
 * data.js — Contenu pédagogique de l'agent d'apprentissage du japonais
 * -------------------------------------------------------------------
 * Le VOCABULAIRE (volumineux) est défini dans js/vocab.js, chargé avant
 * ce fichier, et exposé en tant que variable globale VOCABULAIRE.
 *
 * Ici sont définis les verbes et la grammaire. Chaque entrée fournit le
 * japonais, le rōmaji et le français.
 */

/* VERBES est défini et conjugué dans js/verbs.js (variable globale VERBES). */

const GROUPES_VERBES = {
  godan: { nom: "Godan (1er groupe, en -u)", couleur: "var(--accent-1)" },
  ichidan: { nom: "Ichidan (2e groupe, en -ru)", couleur: "var(--accent-2)" },
  irregular: { nom: "Irréguliers (する・来る)", couleur: "var(--accent-3)" },
};

/* =====================================================================
 * GRAMMAIRE — plan d'apprentissage débutant
 * ---------------------------------------------------------------------
 * niveau : 1 (les fondations) ou 2 (construire des phrases).
 * Chaque leçon : titre, icon, niveau, resume, contenu[], exemples[].
 * ===================================================================== */
const GRAMMAIRE = [
  /* ---------------------- NIVEAU 1 — Les fondations ---------------------- */
  {
    niveau: 1,
    titre: "L'ordre des mots : Sujet – Objet – Verbe",
    icon: "🧩",
    resume: "En japonais, le verbe se place toujours à la fin de la phrase.",
    contenu: [
      "Là où le français dit Sujet–Verbe–Objet, le japonais suit l'ordre Sujet–Objet–Verbe (SOV).",
      "Le verbe termine la phrase. Le rôle de chaque mot est indiqué par une particule qui le suit.",
    ],
    exemples: [
      { jp: "私はりんごを食べます。", romaji: "Watashi wa ringo o tabemasu.", fr: "Je mange une pomme. (litt. « Je — pomme — mange »)" },
      { jp: "彼は水を飲みます。", romaji: "Kare wa mizu o nomimasu.", fr: "Il boit de l'eau." },
    ],
  },
  {
    niveau: 1,
    titre: "です (desu) — le verbe « être »",
    icon: "🟰",
    resume: "です relie un sujet à un attribut. C'est la copule polie.",
    contenu: [
      "です s'emploie pour dire « c'est / je suis / il est » et se place à la fin de la phrase.",
      "Négation : ではありません (dewa arimasen) ou じゃありません (ja arimasen). Passé : でした (deshita).",
    ],
    exemples: [
      { jp: "これは猫です。", romaji: "Kore wa neko desu.", fr: "C'est un chat." },
      { jp: "学生ではありません。", romaji: "Gakusei dewa arimasen.", fr: "Je ne suis pas étudiant(e)." },
      { jp: "昨日は休みでした。", romaji: "Kinō wa yasumi deshita.", fr: "Hier était un jour de congé." },
    ],
  },
  {
    niveau: 1,
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
    niveau: 1,
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
    niveau: 1,
    titre: "これ・それ・あれ — ceci, cela, cela là-bas",
    icon: "👉",
    resume: "Trois mots pour désigner un objet selon la distance.",
    contenu: [
      "これ (kore) = ceci, près de moi. それ (sore) = cela, près de toi. あれ (are) = cela, loin de nous deux.",
      "どれ (dore) = lequel ? Ces mots remplacent un nom : ils sont autonomes.",
    ],
    exemples: [
      { jp: "これは本です。", romaji: "Kore wa hon desu.", fr: "Ceci est un livre." },
      { jp: "それは何ですか。", romaji: "Sore wa nan desu ka.", fr: "Qu'est-ce que c'est (près de toi) ?" },
      { jp: "あれは私の車です。", romaji: "Are wa watashi no kuruma desu.", fr: "Cela là-bas est ma voiture." },
    ],
  },
  {
    niveau: 1,
    titre: "この・その・あの + nom",
    icon: "📎",
    resume: "Comme これ/それ/あれ, mais suivis d'un nom : « ce…, cette… ».",
    contenu: [
      "この (kono), その (sono), あの (ano) ne s'emploient jamais seuls : ils précèdent toujours un nom.",
      "この本 = ce livre-ci, その本 = ce livre-là, あの本 = ce livre là-bas. どの = quel ?",
    ],
    exemples: [
      { jp: "この人は先生です。", romaji: "Kono hito wa sensei desu.", fr: "Cette personne est le professeur." },
      { jp: "あのレストランは高いです。", romaji: "Ano resutoran wa takai desu.", fr: "Ce restaurant là-bas est cher." },
    ],
  },
  {
    niveau: 1,
    titre: "La particule も (mo) — « aussi »",
    icon: "➕",
    resume: "も remplace は ou が pour dire « aussi / également ».",
    contenu: [
      "も se place après le mot, exactement là où は ou を se trouverait, et signifie « aussi ».",
      "Répétée, elle exprime « et… et… » ; avec une négation, « ni… ni… ».",
    ],
    exemples: [
      { jp: "私も学生です。", romaji: "Watashi mo gakusei desu.", fr: "Moi aussi, je suis étudiant(e)." },
      { jp: "パンも買います。", romaji: "Pan mo kaimasu.", fr: "J'achète aussi du pain." },
    ],
  },
  {
    niveau: 1,
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
  {
    niveau: 1,
    titre: "La particule を (o) — le complément d'objet",
    icon: "🎯",
    resume: "を marque l'objet direct de l'action.",
    contenu: [
      "La particule を (prononcée « o ») se place après le complément d'objet direct, celui qui subit l'action.",
      "Structure : [Objet] を [verbe].",
    ],
    exemples: [
      { jp: "本を読みます。", romaji: "Hon o yomimasu.", fr: "Je lis un livre." },
      { jp: "コーヒーを飲みます。", romaji: "Kōhī o nomimasu.", fr: "Je bois un café." },
    ],
  },
  {
    niveau: 1,
    titre: "La particule が (ga) — le sujet",
    icon: "⭐",
    resume: "が met en avant le sujet, souvent une information nouvelle.",
    contenu: [
      "が marque le sujet grammatical. On l'emploie pour présenter une information nouvelle, ou avec certains verbes/adjectifs (好き, ある, いる…).",
      "Différence avec は : は pose le thème (connu), が désigne « c'est celui-ci qui… » (nouveau).",
    ],
    exemples: [
      { jp: "猫が好きです。", romaji: "Neko ga suki desu.", fr: "J'aime les chats." },
      { jp: "雨が降っています。", romaji: "Ame ga futte imasu.", fr: "Il pleut. (litt. « la pluie tombe »)" },
    ],
  },
  {
    niveau: 1,
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
    niveau: 1,
    titre: "あります・います — « il y a » / exister",
    icon: "📦",
    resume: "Deux verbes d'existence : います pour les êtres vivants, あります pour le reste.",
    contenu: [
      "います s'emploie pour les personnes et les animaux ; あります pour les objets, plantes et lieux.",
      "Structure : [lieu] に [chose] が あります／います. La chose qui existe est marquée par が.",
    ],
    exemples: [
      { jp: "机の上に本があります。", romaji: "Tsukue no ue ni hon ga arimasu.", fr: "Il y a un livre sur le bureau." },
      { jp: "公園に犬がいます。", romaji: "Kōen ni inu ga imasu.", fr: "Il y a un chien dans le parc." },
    ],
  },
  {
    niveau: 1,
    titre: "La particule と (to) — « et » / « avec »",
    icon: "🤝",
    resume: "と relie des noms (« et ») ou indique l'accompagnement (« avec »).",
    contenu: [
      "Entre deux noms, と signifie « et » (liste complète, exhaustive).",
      "Devant un verbe d'action, と signifie « avec (quelqu'un) ».",
    ],
    exemples: [
      { jp: "パンと卵を買います。", romaji: "Pan to tamago o kaimasu.", fr: "J'achète du pain et des œufs." },
      { jp: "友達と映画を見ます。", romaji: "Tomodachi to eiga o mimasu.", fr: "Je regarde un film avec un ami." },
    ],
  },
  {
    niveau: 1,
    titre: "Les adjectifs en -い et en -な",
    icon: "🏷️",
    resume: "Deux familles d'adjectifs, qui ne se comportent pas de la même façon.",
    contenu: [
      "Adjectifs en -い (i-adjectifs) : se terminent par い et peuvent se conjuguer eux-mêmes.",
      "Adjectifs en -な (na-adjectifs) : prennent な devant un nom (ex. きれいな花 = une jolie fleur).",
    ],
    exemples: [
      { jp: "高い山です。", romaji: "Takai yama desu.", fr: "C'est une montagne haute. (i-adjectif)" },
      { jp: "きれいな花です。", romaji: "Kirei na hana desu.", fr: "C'est une jolie fleur. (na-adjectif)" },
    ],
  },
  {
    niveau: 1,
    titre: "Les pronoms personnels",
    icon: "🙋",
    resume: "Je, tu, il, elle… et pourquoi on les omet souvent.",
    contenu: [
      "私 (watashi) = je/moi ; あなた (anata) = toi/vous ; 彼 (kare) = il ; 彼女 (kanojo) = elle.",
      "On préfère souvent le prénom + さん au « tu/vous », et on omet le pronom quand le contexte est clair.",
    ],
    exemples: [
      { jp: "私は日本語を勉強します。", romaji: "Watashi wa nihongo o benkyō shimasu.", fr: "J'étudie le japonais." },
      { jp: "彼女は先生です。", romaji: "Kanojo wa sensei desu.", fr: "Elle est professeure." },
    ],
  },
  {
    niveau: 1,
    titre: "Les nombres et les classificateurs",
    icon: "🔢",
    resume: "Compter des objets exige un « compteur » adapté à leur forme.",
    contenu: [
      "Pour compter, on ajoute un classificateur au nombre : 〜個 (objets), 〜人 (personnes), 〜枚 (objets plats), 〜本 (objets longs).",
      "Structure fréquente : [chose] を [nombre + compteur] [verbe].",
    ],
    exemples: [
      { jp: "りんごを三個ください。", romaji: "Ringo o san-ko kudasai.", fr: "Trois pommes, s'il vous plaît." },
      { jp: "学生が五人います。", romaji: "Gakusei ga go-nin imasu.", fr: "Il y a cinq étudiants." },
    ],
  },

  /* ------------------ NIVEAU 2 — Construire des phrases ------------------ */
  {
    niveau: 2,
    titre: "La forme polie ~ます",
    icon: "🙏",
    resume: "La terminaison ~ます rend un verbe poli au présent/futur.",
    contenu: [
      "On remplace la terminaison de la forme dictionnaire par ~ます : 食べる → 食べます, 飲む → 飲みます.",
      "Le présent poli exprime aussi le futur et les habitudes ; le contexte précise le sens.",
    ],
    exemples: [
      { jp: "毎日日本語を勉強します。", romaji: "Mainichi nihongo o benkyō shimasu.", fr: "J'étudie le japonais tous les jours." },
      { jp: "明日、東京へ行きます。", romaji: "Ashita, Tōkyō e ikimasu.", fr: "Demain, j'irai à Tokyo." },
    ],
  },
  {
    niveau: 2,
    titre: "Le passé poli ~ました / でした",
    icon: "⏮️",
    resume: "~ました pour les verbes, でした pour です et les noms.",
    contenu: [
      "Verbes : ~ます → ~ました (食べます → 食べました).",
      "Copule : です → でした. Adjectif en -い : 〜い → 〜かったです (楽しい → 楽しかったです).",
    ],
    exemples: [
      { jp: "映画を見ました。", romaji: "Eiga o mimashita.", fr: "J'ai regardé un film." },
      { jp: "旅行は楽しかったです。", romaji: "Ryokō wa tanoshikatta desu.", fr: "Le voyage était amusant." },
    ],
  },
  {
    niveau: 2,
    titre: "La négation des verbes ~ません",
    icon: "🚫",
    resume: "~ます → ~ません (présent) ; passé négatif : ~ませんでした.",
    contenu: [
      "Pour nier un verbe poli : 行きます → 行きません (je ne vais pas).",
      "Au passé négatif : 行きませんでした (je ne suis pas allé).",
    ],
    exemples: [
      { jp: "お酒を飲みません。", romaji: "Osake o nomimasen.", fr: "Je ne bois pas d'alcool." },
      { jp: "昨日は来ませんでした。", romaji: "Kinō wa kimasen deshita.", fr: "Hier, il/elle n'est pas venu(e)." },
    ],
  },
  {
    niveau: 2,
    titre: "Conjuguer les adjectifs",
    icon: "🔧",
    resume: "Les i-adjectifs se conjuguent ; les na-adjectifs utilisent です/でした.",
    contenu: [
      "i-adjectif : 高い (présent) → 高くない (négatif) → 高かった (passé) → 高くなかった (passé négatif).",
      "na-adjectif : きれいです → きれいじゃありません → きれいでした → きれいじゃありませんでした.",
    ],
    exemples: [
      { jp: "この店は高くないです。", romaji: "Kono mise wa takakunai desu.", fr: "Ce magasin n'est pas cher." },
      { jp: "部屋はきれいじゃありませんでした。", romaji: "Heya wa kirei ja arimasen deshita.", fr: "La chambre n'était pas propre." },
    ],
  },
  {
    niveau: 2,
    titre: "La forme て — la clé des verbes",
    icon: "🔑",
    resume: "La forme en て relie des actions et ouvre de nombreuses tournures.",
    contenu: [
      "La forme て permet d'enchaîner des actions (« et puis ») et sert de base à beaucoup de structures.",
      "Elle dépend du verbe : 食べる → 食べて, 飲む → 飲んで, 行く → 行って, する → して.",
    ],
    exemples: [
      { jp: "朝起きて、顔を洗います。", romaji: "Asa okite, kao o araimasu.", fr: "Le matin, je me lève et je me lave le visage." },
      { jp: "友達に会って、話しました。", romaji: "Tomodachi ni atte, hanashimashita.", fr: "J'ai rencontré un ami et nous avons parlé." },
    ],
  },
  {
    niveau: 2,
    titre: "~てください — demander poliment",
    icon: "🙇",
    resume: "Forme て + ください = « veuillez faire… ».",
    contenu: [
      "On ajoute ください à la forme て pour formuler une demande polie.",
      "Structure : [verbe en て] + ください.",
    ],
    exemples: [
      { jp: "ここに名前を書いてください。", romaji: "Koko ni namae o kaite kudasai.", fr: "Écrivez votre nom ici, s'il vous plaît." },
      { jp: "ゆっくり話してください。", romaji: "Yukkuri hanashite kudasai.", fr: "Parlez lentement, s'il vous plaît." },
    ],
  },
  {
    niveau: 2,
    titre: "~ています — action en cours",
    icon: "🔄",
    resume: "Forme て + います = « être en train de… » ou un état continu.",
    contenu: [
      "~ています exprime une action en cours (« je suis en train de… ») ou un état résultant.",
      "Structure : [verbe en て] + います. Négation : ~ていません.",
    ],
    exemples: [
      { jp: "今、本を読んでいます。", romaji: "Ima, hon o yonde imasu.", fr: "En ce moment, je lis un livre." },
      { jp: "東京に住んでいます。", romaji: "Tōkyō ni sunde imasu.", fr: "J'habite à Tokyo." },
    ],
  },
  {
    niveau: 2,
    titre: "~たい — exprimer un désir",
    icon: "💭",
    resume: "Base en ~ます sans ます + たい = « vouloir faire… ».",
    contenu: [
      "On retire ます et on ajoute たい : 食べます → 食べたい (je veux manger).",
      "たい se conjugue comme un i-adjectif : 食べたくない (je ne veux pas manger).",
    ],
    exemples: [
      { jp: "日本に行きたいです。", romaji: "Nihon ni ikitai desu.", fr: "Je veux aller au Japon." },
      { jp: "何も食べたくないです。", romaji: "Nani mo tabetakunai desu.", fr: "Je ne veux rien manger." },
    ],
  },
  {
    niveau: 2,
    titre: "~ませんか / ~ましょう — proposer",
    icon: "🎉",
    resume: "Inviter (« et si on… ? ») et suggérer (« faisons… »).",
    contenu: [
      "~ませんか propose poliment : « voulez-vous… ? / et si on… ? ».",
      "~ましょう suggère de faire ensemble : « faisons… ». ~ましょうか = « voulez-vous que je… ? ».",
    ],
    exemples: [
      { jp: "一緒に映画を見ませんか。", romaji: "Issho ni eiga o mimasen ka.", fr: "Et si on regardait un film ensemble ?" },
      { jp: "コーヒーを飲みましょう。", romaji: "Kōhī o nomimashō.", fr: "Buvons un café." },
    ],
  },
  {
    niveau: 2,
    titre: "から et ので — exprimer la cause",
    icon: "🔎",
    resume: "« parce que / donc » : から (subjectif) et ので (plus doux, objectif).",
    contenu: [
      "Structure : [raison] から / ので, [conséquence]. La cause vient avant.",
      "ので est plus poli et neutre ; から exprime une raison plus personnelle.",
    ],
    exemples: [
      { jp: "寒いから、コートを着ます。", romaji: "Samui kara, kōto o kimasu.", fr: "Comme il fait froid, je mets un manteau." },
      { jp: "時間がないので、急ぎます。", romaji: "Jikan ga nai node, isogimasu.", fr: "Comme je n'ai pas le temps, je me dépêche." },
    ],
  },
  {
    niveau: 2,
    titre: "が et でも — exprimer l'opposition",
    icon: "↔️",
    resume: "« mais » : が relie deux propositions, でも commence une phrase.",
    contenu: [
      "が (en milieu de phrase) relie deux idées opposées : « …, mais … ».",
      "でも se place en début de phrase : « Mais / Cependant … ».",
    ],
    exemples: [
      { jp: "高いですが、美味しいです。", romaji: "Takai desu ga, oishii desu.", fr: "C'est cher, mais c'est délicieux." },
      { jp: "でも、時間がありません。", romaji: "Demo, jikan ga arimasen.", fr: "Mais je n'ai pas le temps." },
    ],
  },
  {
    niveau: 2,
    titre: "La comparaison — より・のほうが・いちばん",
    icon: "⚖️",
    resume: "Comparer deux choses, et exprimer le superlatif.",
    contenu: [
      "AはBより〜 = « A est plus … que B ». BよりAのほうが〜 met A en avant.",
      "Superlatif : いちばん (le plus). 〜の中で = « parmi … ».",
    ],
    exemples: [
      { jp: "電車はバスより速いです。", romaji: "Densha wa basu yori hayai desu.", fr: "Le train est plus rapide que le bus." },
      { jp: "夏がいちばん好きです。", romaji: "Natsu ga ichiban suki desu.", fr: "C'est l'été que je préfère." },
    ],
  },
  {
    niveau: 2,
    titre: "へ・から・まで — direction et trajet",
    icon: "🧭",
    resume: "へ (vers), から (à partir de), まで (jusqu'à).",
    contenu: [
      "へ (prononcé « e ») indique la direction, comme に pour un déplacement.",
      "から … まで = « de … à … », dans l'espace comme dans le temps.",
    ],
    exemples: [
      { jp: "駅へ行きます。", romaji: "Eki e ikimasu.", fr: "Je vais vers la gare." },
      { jp: "九時から五時まで働きます。", romaji: "Ku-ji kara go-ji made hatarakimasu.", fr: "Je travaille de 9 h à 17 h." },
    ],
  },
  {
    niveau: 2,
    titre: "~ことができる — pouvoir / savoir faire",
    icon: "✅",
    resume: "Forme dictionnaire + ことができます = « pouvoir faire… ».",
    contenu: [
      "Structure : [verbe au dictionnaire] + ことができます pour exprimer la capacité ou la permission.",
      "On peut aussi employer le nom + ができます (ex. 日本語ができます = je sais parler japonais).",
    ],
    exemples: [
      { jp: "漢字を読むことができます。", romaji: "Kanji o yomu koto ga dekimasu.", fr: "Je sais lire les kanji." },
      { jp: "ピアノを弾くことができません。", romaji: "Piano o hiku koto ga dekimasen.", fr: "Je ne sais pas jouer du piano." },
    ],
  },
  {
    niveau: 2,
    titre: "なる — devenir",
    icon: "🌱",
    resume: "Exprimer un changement d'état avec なる.",
    contenu: [
      "i-adjectif : 〜い → 〜く + なる (寒くなる = devenir froid).",
      "na-adjectif / nom : 〜 + に + なる (元気になる = retrouver la forme ; 先生になる = devenir professeur).",
    ],
    exemples: [
      { jp: "寒くなりました。", romaji: "Samuku narimashita.", fr: "Il a fait plus froid. (c'est devenu froid)" },
      { jp: "医者になりたいです。", romaji: "Isha ni naritai desu.", fr: "Je veux devenir médecin." },
    ],
  },
  {
    niveau: 2,
    titre: "Situer dans le temps — 前に・後で・ながら",
    icon: "⏳",
    resume: "Avant, après, et faire deux choses en même temps.",
    contenu: [
      "[dictionnaire] + 前に = « avant de … ». [verbe en た] + 後で = « après avoir … ».",
      "[base en ます sans ます] + ながら = « tout en … » (deux actions simultanées).",
    ],
    exemples: [
      { jp: "寝る前に歯を磨きます。", romaji: "Neru mae ni ha o migakimasu.", fr: "Je me brosse les dents avant de dormir." },
      { jp: "音楽を聞きながら勉強します。", romaji: "Ongaku o kikinagara benkyō shimasu.", fr: "J'étudie tout en écoutant de la musique." },
    ],
  },
];

/* Exposé global pour app.js (VOCABULAIRE provient de vocab.js) */
window.DATA = {
  VOCABULAIRE: (typeof VOCABULAIRE !== "undefined" ? VOCABULAIRE : window.VOCABULAIRE),
  VERBES: (typeof VERBES !== "undefined" ? VERBES : window.VERBES),
  GROUPES_VERBES,
  GRAMMAIRE,
  QUESTIONS: (typeof QUESTIONS !== "undefined" ? QUESTIONS : window.QUESTIONS),
  KANJI: (typeof KANJI !== "undefined" ? KANJI : window.KANJI),
};
