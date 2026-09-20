/**
 * adjectifs.js — Axe « Adjectifs » de l'agent d'apprentissage du japonais
 * ----------------------------------------------------------------------
 * Les adjectifs sont présentés par PAIRES d'opposés (contraire en face),
 * regroupés par thèmes. Pour chaque adjectif :
 *   jp, kana, romaji, fr, type ("い" i-adjectif, "な" na-adjectif, "—" autre)
 * Chaque paire fournit un exemple d'utilisation : exemple { jp, romaji, fr }.
 *
 * Ce fichier expose la variable globale ADJECTIFS.
 */
const ADJECTIFS = [
  {
    theme: "Taille & dimension",
    icon: "📏",
    desc: "Grand ou petit, long ou court, proche ou loin…",
    paires: [
      { a: { jp: "大きい", kana: "おおきい", romaji: "ōkii", fr: "grand", type: "い" }, b: { jp: "小さい", kana: "ちいさい", romaji: "chiisai", fr: "petit", type: "い" }, exemple: { jp: "大きい家に住む。", romaji: "Ōkii ie ni sumu.", fr: "Habiter une grande maison." } },
      { a: { jp: "長い", kana: "ながい", romaji: "nagai", fr: "long", type: "い" }, b: { jp: "短い", kana: "みじかい", romaji: "mijikai", fr: "court", type: "い" }, exemple: { jp: "長い川ですね。", romaji: "Nagai kawa desu ne.", fr: "C'est une longue rivière." } },
      { a: { jp: "高い", kana: "たかい", romaji: "takai", fr: "haut", type: "い" }, b: { jp: "低い", kana: "ひくい", romaji: "hikui", fr: "bas", type: "い" }, exemple: { jp: "高い山に登る。", romaji: "Takai yama ni noboru.", fr: "Gravir une haute montagne." } },
      { a: { jp: "広い", kana: "ひろい", romaji: "hiroi", fr: "spacieux / large", type: "い" }, b: { jp: "狭い", kana: "せまい", romaji: "semai", fr: "étroit", type: "い" }, exemple: { jp: "広い部屋がいい。", romaji: "Hiroi heya ga ii.", fr: "Je préfère une pièce spacieuse." } },
      { a: { jp: "太い", kana: "ふとい", romaji: "futoi", fr: "épais / gros", type: "い" }, b: { jp: "細い", kana: "ほそい", romaji: "hosoi", fr: "fin / mince", type: "い" }, exemple: { jp: "太い木を切る。", romaji: "Futoi ki o kiru.", fr: "Couper un arbre épais." } },
      { a: { jp: "深い", kana: "ふかい", romaji: "fukai", fr: "profond", type: "い" }, b: { jp: "浅い", kana: "あさい", romaji: "asai", fr: "peu profond", type: "い" }, exemple: { jp: "この海は深い。", romaji: "Kono umi wa fukai.", fr: "Cette mer est profonde." } },
      { a: { jp: "近い", kana: "ちかい", romaji: "chikai", fr: "proche", type: "い" }, b: { jp: "遠い", kana: "とおい", romaji: "tōi", fr: "loin", type: "い" }, exemple: { jp: "駅は近いです。", romaji: "Eki wa chikai desu.", fr: "La gare est proche." } },
    ],
  },
  {
    theme: "Poids, quantité & prix",
    icon: "⚖️",
    desc: "Lourd ou léger, nombreux ou rare, cher ou bon marché.",
    paires: [
      { a: { jp: "重い", kana: "おもい", romaji: "omoi", fr: "lourd", type: "い" }, b: { jp: "軽い", kana: "かるい", romaji: "karui", fr: "léger", type: "い" }, exemple: { jp: "重い荷物を運ぶ。", romaji: "Omoi nimotsu o hakobu.", fr: "Transporter des bagages lourds." } },
      { a: { jp: "多い", kana: "おおい", romaji: "ōi", fr: "nombreux", type: "い" }, b: { jp: "少ない", kana: "すくない", romaji: "sukunai", fr: "peu nombreux", type: "い" }, exemple: { jp: "人が多いです。", romaji: "Hito ga ōi desu.", fr: "Il y a beaucoup de monde." } },
      { a: { jp: "高い", kana: "たかい", romaji: "takai", fr: "cher", type: "い" }, b: { jp: "安い", kana: "やすい", romaji: "yasui", fr: "bon marché", type: "い" }, exemple: { jp: "この店は安い。", romaji: "Kono mise wa yasui.", fr: "Ce magasin est bon marché." } },
    ],
  },
  {
    theme: "Temps & vitesse",
    icon: "⏱️",
    desc: "Rapide ou lent, tôt ou tard, neuf ou ancien.",
    paires: [
      { a: { jp: "速い", kana: "はやい", romaji: "hayai", fr: "rapide", type: "い" }, b: { jp: "遅い", kana: "おそい", romaji: "osoi", fr: "lent", type: "い" }, exemple: { jp: "新幹線は速い。", romaji: "Shinkansen wa hayai.", fr: "Le shinkansen est rapide." } },
      { a: { jp: "早い", kana: "はやい", romaji: "hayai", fr: "tôt", type: "い" }, b: { jp: "遅い", kana: "おそい", romaji: "osoi", fr: "tard", type: "い" }, exemple: { jp: "朝が早いです。", romaji: "Asa ga hayai desu.", fr: "Le matin (je commence) tôt." } },
      { a: { jp: "新しい", kana: "あたらしい", romaji: "atarashii", fr: "nouveau", type: "い" }, b: { jp: "古い", kana: "ふるい", romaji: "furui", fr: "vieux / ancien", type: "い" }, exemple: { jp: "新しい車を買う。", romaji: "Atarashii kuruma o kau.", fr: "Acheter une voiture neuve." } },
    ],
  },
  {
    theme: "Température",
    icon: "🌡️",
    desc: "Chaud ou froid, selon qu'il s'agit du temps ou du toucher.",
    paires: [
      { a: { jp: "暑い", kana: "あつい", romaji: "atsui", fr: "chaud (temps)", type: "い" }, b: { jp: "寒い", kana: "さむい", romaji: "samui", fr: "froid (temps)", type: "い" }, exemple: { jp: "夏はとても暑い。", romaji: "Natsu wa totemo atsui.", fr: "L'été est très chaud." } },
      { a: { jp: "熱い", kana: "あつい", romaji: "atsui", fr: "chaud (au toucher)", type: "い" }, b: { jp: "冷たい", kana: "つめたい", romaji: "tsumetai", fr: "froid (au toucher)", type: "い" }, exemple: { jp: "熱いお茶を飲む。", romaji: "Atsui ocha o nomu.", fr: "Boire du thé chaud." } },
      { a: { jp: "暖かい", kana: "あたたかい", romaji: "atatakai", fr: "doux (agréablement chaud)", type: "い" }, b: { jp: "涼しい", kana: "すずしい", romaji: "suzushii", fr: "frais (agréable)", type: "い" }, exemple: { jp: "暖かい日ですね。", romaji: "Atatakai hi desu ne.", fr: "C'est une journée douce." } },
    ],
  },
  {
    theme: "Goût & intensité",
    icon: "😋",
    desc: "Les saveurs et la force d'un goût.",
    paires: [
      { a: { jp: "甘い", kana: "あまい", romaji: "amai", fr: "sucré", type: "い" }, b: { jp: "苦い", kana: "にがい", romaji: "nigai", fr: "amer", type: "い" }, exemple: { jp: "甘いケーキが好き。", romaji: "Amai kēki ga suki.", fr: "J'aime les gâteaux sucrés." } },
      { a: { jp: "美味しい", kana: "おいしい", romaji: "oishii", fr: "délicieux", type: "い" }, b: { jp: "まずい", kana: "まずい", romaji: "mazui", fr: "mauvais (goût)", type: "い" }, exemple: { jp: "この料理は美味しい。", romaji: "Kono ryōri wa oishii.", fr: "Ce plat est délicieux." } },
      { a: { jp: "濃い", kana: "こい", romaji: "koi", fr: "fort / foncé", type: "い" }, b: { jp: "薄い", kana: "うすい", romaji: "usui", fr: "léger / pâle", type: "い" }, exemple: { jp: "濃いコーヒーを飲む。", romaji: "Koi kōhī o nomu.", fr: "Boire un café serré." } },
    ],
  },
  {
    theme: "Apparence & lumière",
    icon: "🎨",
    desc: "Propreté, beauté et luminosité.",
    paires: [
      { a: { jp: "きれい", kana: "きれい", romaji: "kirei", fr: "joli / propre", type: "な" }, b: { jp: "汚い", kana: "きたない", romaji: "kitanai", fr: "sale", type: "い" }, exemple: { jp: "きれいな部屋ですね。", romaji: "Kirei na heya desu ne.", fr: "Quelle chambre propre !" } },
      { a: { jp: "美しい", kana: "うつくしい", romaji: "utsukushii", fr: "beau", type: "い" }, b: { jp: "醜い", kana: "みにくい", romaji: "minikui", fr: "laid", type: "い" }, exemple: { jp: "美しい景色を見る。", romaji: "Utsukushii keshiki o miru.", fr: "Admirer un beau paysage." } },
      { a: { jp: "明るい", kana: "あかるい", romaji: "akarui", fr: "lumineux / gai", type: "い" }, b: { jp: "暗い", kana: "くらい", romaji: "kurai", fr: "sombre", type: "い" }, exemple: { jp: "明るい部屋が好き。", romaji: "Akarui heya ga suki.", fr: "J'aime les pièces lumineuses." } },
    ],
  },
  {
    theme: "Caractère & difficulté",
    icon: "💪",
    desc: "Force, gentillesse et niveau de difficulté.",
    paires: [
      { a: { jp: "難しい", kana: "むずかしい", romaji: "muzukashii", fr: "difficile", type: "い" }, b: { jp: "易しい", kana: "やさしい", romaji: "yasashii", fr: "facile", type: "い" }, exemple: { jp: "難しい問題です。", romaji: "Muzukashii mondai desu.", fr: "C'est un problème difficile." } },
      { a: { jp: "強い", kana: "つよい", romaji: "tsuyoi", fr: "fort", type: "い" }, b: { jp: "弱い", kana: "よわい", romaji: "yowai", fr: "faible", type: "い" }, exemple: { jp: "彼は強い選手だ。", romaji: "Kare wa tsuyoi senshu da.", fr: "C'est un joueur fort." } },
      { a: { jp: "優しい", kana: "やさしい", romaji: "yasashii", fr: "gentil", type: "い" }, b: { jp: "厳しい", kana: "きびしい", romaji: "kibishii", fr: "strict / sévère", type: "い" }, exemple: { jp: "優しい先生です。", romaji: "Yasashii sensei desu.", fr: "C'est un professeur gentil." } },
      { a: { jp: "忙しい", kana: "いそがしい", romaji: "isogashii", fr: "occupé", type: "い" }, b: { jp: "暇", kana: "ひま", romaji: "hima", fr: "libre / oisif", type: "な" }, exemple: { jp: "今日は忙しいです。", romaji: "Kyō wa isogashii desu.", fr: "Aujourd'hui je suis occupé." } },
    ],
  },
  {
    theme: "Émotions & ambiance",
    icon: "😊",
    desc: "Ce que l'on ressent et l'atmosphère d'un lieu.",
    paires: [
      { a: { jp: "楽しい", kana: "たのしい", romaji: "tanoshii", fr: "amusant", type: "い" }, b: { jp: "つまらない", kana: "つまらない", romaji: "tsumaranai", fr: "ennuyeux", type: "い" }, exemple: { jp: "楽しい映画でした。", romaji: "Tanoshii eiga deshita.", fr: "C'était un film amusant." } },
      { a: { jp: "嬉しい", kana: "うれしい", romaji: "ureshii", fr: "content / heureux", type: "い" }, b: { jp: "悲しい", kana: "かなしい", romaji: "kanashii", fr: "triste", type: "い" }, exemple: { jp: "とても嬉しいです。", romaji: "Totemo ureshii desu.", fr: "Je suis très content." } },
      { a: { jp: "面白い", kana: "おもしろい", romaji: "omoshiroi", fr: "intéressant / drôle", type: "い" }, b: { jp: "退屈", kana: "たいくつ", romaji: "taikutsu", fr: "ennuyeux (monotone)", type: "な" }, exemple: { jp: "面白い本を読む。", romaji: "Omoshiroi hon o yomu.", fr: "Lire un livre intéressant." } },
      { a: { jp: "静か", kana: "しずか", romaji: "shizuka", fr: "calme", type: "な" }, b: { jp: "うるさい", kana: "うるさい", romaji: "urusai", fr: "bruyant", type: "い" }, exemple: { jp: "静かな町です。", romaji: "Shizuka na machi desu.", fr: "C'est une ville calme." } },
    ],
  },
  {
    theme: "Bien / mal & praticité",
    icon: "✅",
    desc: "Qualité, sécurité et commodité.",
    paires: [
      { a: { jp: "良い", kana: "いい / よい", romaji: "ii / yoi", fr: "bon / bien", type: "い" }, b: { jp: "悪い", kana: "わるい", romaji: "warui", fr: "mauvais", type: "い" }, exemple: { jp: "天気が良いです。", romaji: "Tenki ga ii desu.", fr: "Il fait beau." } },
      { a: { jp: "安全", kana: "あんぜん", romaji: "anzen", fr: "sûr / en sécurité", type: "な" }, b: { jp: "危ない", kana: "あぶない", romaji: "abunai", fr: "dangereux", type: "い" }, exemple: { jp: "安全な場所を探す。", romaji: "Anzen na basho o sagasu.", fr: "Chercher un endroit sûr." } },
      { a: { jp: "便利", kana: "べんり", romaji: "benri", fr: "pratique", type: "な" }, b: { jp: "不便", kana: "ふべん", romaji: "fuben", fr: "peu pratique", type: "な" }, exemple: { jp: "この道具は便利だ。", romaji: "Kono dōgu wa benri da.", fr: "Cet outil est pratique." } },
      { a: { jp: "正しい", kana: "ただしい", romaji: "tadashii", fr: "correct / juste", type: "い" }, b: { jp: "間違った", kana: "まちがった", romaji: "machigatta", fr: "faux / erroné", type: "—" }, exemple: { jp: "正しい答えを選ぶ。", romaji: "Tadashii kotae o erabu.", fr: "Choisir la bonne réponse." } },
    ],
  },
  {
    theme: "Texture & état",
    icon: "🧱",
    desc: "Dureté et humidité d'une matière.",
    paires: [
      { a: { jp: "硬い", kana: "かたい", romaji: "katai", fr: "dur", type: "い" }, b: { jp: "柔らかい", kana: "やわらかい", romaji: "yawarakai", fr: "mou / tendre", type: "い" }, exemple: { jp: "硬いパンを食べる。", romaji: "Katai pan o taberu.", fr: "Manger du pain dur." } },
      { a: { jp: "乾いた", kana: "かわいた", romaji: "kawaita", fr: "sec", type: "—" }, b: { jp: "濡れた", kana: "ぬれた", romaji: "nureta", fr: "mouillé", type: "—" }, exemple: { jp: "乾いたタオルを使う。", romaji: "Kawaita taoru o tsukau.", fr: "Utiliser une serviette sèche." } },
    ],
  },
];

/* Exposé global */
if (typeof window !== "undefined") window.ADJECTIFS = ADJECTIFS;
