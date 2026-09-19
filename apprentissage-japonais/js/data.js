/**
 * data.js — Contenu pédagogique de l'agent d'apprentissage du japonais
 * -------------------------------------------------------------------
 * Chaque entrée est fournie en :
 *   - jp     : japonais (kanji + kana)
 *   - kana   : lecture en hiragana/katakana
 *   - romaji : transcription en alphabet latin (rōmaji)
 *   - fr     : traduction française
 *   - img    : représentation visuelle (emoji) pour l'apprentissage visuel
 *
 * Ce fichier ne contient QUE des données. La logique est dans app.js.
 */

/* =====================================================================
 * 1. VOCABULAIRE — regroupé par thèmes
 * ===================================================================== */
const VOCABULAIRE = [
  {
    theme: "Salutations & politesse",
    icon: "👋",
    mots: [
      { jp: "こんにちは", kana: "こんにちは", romaji: "konnichiwa", fr: "bonjour", img: "☀️" },
      { jp: "おはようございます", kana: "おはようございます", romaji: "ohayō gozaimasu", fr: "bonjour (matin, poli)", img: "🌅" },
      { jp: "こんばんは", kana: "こんばんは", romaji: "konbanwa", fr: "bonsoir", img: "🌙" },
      { jp: "おやすみなさい", kana: "おやすみなさい", romaji: "oyasuminasai", fr: "bonne nuit", img: "😴" },
      { jp: "さようなら", kana: "さようなら", romaji: "sayōnara", fr: "au revoir", img: "👋" },
      { jp: "ありがとうございます", kana: "ありがとうございます", romaji: "arigatō gozaimasu", fr: "merci (poli)", img: "🙏" },
      { jp: "すみません", kana: "すみません", romaji: "sumimasen", fr: "excusez-moi / pardon", img: "🙇" },
      { jp: "はい", kana: "はい", romaji: "hai", fr: "oui", img: "✅" },
      { jp: "いいえ", kana: "いいえ", romaji: "iie", fr: "non", img: "❌" },
      { jp: "お願いします", kana: "おねがいします", romaji: "onegai shimasu", fr: "s'il vous plaît", img: "🤲" },
      { jp: "はじめまして", kana: "はじめまして", romaji: "hajimemashite", fr: "enchanté(e)", img: "🤝" },
    ],
  },
  {
    theme: "Nombres",
    icon: "🔢",
    mots: [
      { jp: "一", kana: "いち", romaji: "ichi", fr: "un (1)", img: "1️⃣" },
      { jp: "二", kana: "に", romaji: "ni", fr: "deux (2)", img: "2️⃣" },
      { jp: "三", kana: "さん", romaji: "san", fr: "trois (3)", img: "3️⃣" },
      { jp: "四", kana: "よん", romaji: "yon / shi", fr: "quatre (4)", img: "4️⃣" },
      { jp: "五", kana: "ご", romaji: "go", fr: "cinq (5)", img: "5️⃣" },
      { jp: "六", kana: "ろく", romaji: "roku", fr: "six (6)", img: "6️⃣" },
      { jp: "七", kana: "なな", romaji: "nana / shichi", fr: "sept (7)", img: "7️⃣" },
      { jp: "八", kana: "はち", romaji: "hachi", fr: "huit (8)", img: "8️⃣" },
      { jp: "九", kana: "きゅう", romaji: "kyū / ku", fr: "neuf (9)", img: "9️⃣" },
      { jp: "十", kana: "じゅう", romaji: "jū", fr: "dix (10)", img: "🔟" },
      { jp: "百", kana: "ひゃく", romaji: "hyaku", fr: "cent (100)", img: "💯" },
    ],
  },
  {
    theme: "Temps & jours",
    icon: "📅",
    mots: [
      { jp: "今日", kana: "きょう", romaji: "kyō", fr: "aujourd'hui", img: "📆" },
      { jp: "明日", kana: "あした", romaji: "ashita", fr: "demain", img: "⏩" },
      { jp: "昨日", kana: "きのう", romaji: "kinō", fr: "hier", img: "⏪" },
      { jp: "今", kana: "いま", romaji: "ima", fr: "maintenant", img: "⏰" },
      { jp: "朝", kana: "あさ", romaji: "asa", fr: "matin", img: "🌅" },
      { jp: "昼", kana: "ひる", romaji: "hiru", fr: "midi / journée", img: "🌞" },
      { jp: "夜", kana: "よる", romaji: "yoru", fr: "nuit / soir", img: "🌙" },
      { jp: "週", kana: "しゅう", romaji: "shū", fr: "semaine", img: "🗓️" },
      { jp: "週末", kana: "しゅうまつ", romaji: "shūmatsu", fr: "week-end", img: "🎉" },
      { jp: "時間", kana: "じかん", romaji: "jikan", fr: "temps / heure", img: "⏳" },
    ],
  },
  {
    theme: "Famille",
    icon: "👨‍👩‍👧‍👦",
    mots: [
      { jp: "家族", kana: "かぞく", romaji: "kazoku", fr: "famille", img: "👪" },
      { jp: "父", kana: "ちち", romaji: "chichi", fr: "père (le mien)", img: "👨" },
      { jp: "母", kana: "はは", romaji: "haha", fr: "mère (la mienne)", img: "👩" },
      { jp: "兄", kana: "あに", romaji: "ani", fr: "grand frère", img: "👦" },
      { jp: "姉", kana: "あね", romaji: "ane", fr: "grande sœur", img: "👧" },
      { jp: "弟", kana: "おとうと", romaji: "otōto", fr: "petit frère", img: "🧒" },
      { jp: "妹", kana: "いもうと", romaji: "imōto", fr: "petite sœur", img: "👶" },
      { jp: "子供", kana: "こども", romaji: "kodomo", fr: "enfant", img: "🧒" },
      { jp: "友達", kana: "ともだち", romaji: "tomodachi", fr: "ami(e)", img: "🧑‍🤝‍🧑" },
    ],
  },
  {
    theme: "Le corps",
    icon: "🧍",
    mots: [
      { jp: "頭", kana: "あたま", romaji: "atama", fr: "tête", img: "🗣️" },
      { jp: "目", kana: "め", romaji: "me", fr: "œil", img: "👁️" },
      { jp: "耳", kana: "みみ", romaji: "mimi", fr: "oreille", img: "👂" },
      { jp: "鼻", kana: "はな", romaji: "hana", fr: "nez", img: "👃" },
      { jp: "口", kana: "くち", romaji: "kuchi", fr: "bouche", img: "👄" },
      { jp: "手", kana: "て", romaji: "te", fr: "main", img: "✋" },
      { jp: "足", kana: "あし", romaji: "ashi", fr: "pied / jambe", img: "🦵" },
      { jp: "心", kana: "こころ", romaji: "kokoro", fr: "cœur (esprit)", img: "❤️" },
    ],
  },
  {
    theme: "Couleurs",
    icon: "🎨",
    mots: [
      { jp: "赤", kana: "あか", romaji: "aka", fr: "rouge", img: "🔴" },
      { jp: "青", kana: "あお", romaji: "ao", fr: "bleu", img: "🔵" },
      { jp: "黄色", kana: "きいろ", romaji: "kiiro", fr: "jaune", img: "🟡" },
      { jp: "緑", kana: "みどり", romaji: "midori", fr: "vert", img: "🟢" },
      { jp: "白", kana: "しろ", romaji: "shiro", fr: "blanc", img: "⚪" },
      { jp: "黒", kana: "くろ", romaji: "kuro", fr: "noir", img: "⚫" },
      { jp: "茶色", kana: "ちゃいろ", romaji: "chairo", fr: "marron", img: "🟤" },
      { jp: "紫", kana: "むらさき", romaji: "murasaki", fr: "violet", img: "🟣" },
      { jp: "ピンク", kana: "ピンク", romaji: "pinku", fr: "rose", img: "🌸" },
    ],
  },
  {
    theme: "Alimentation",
    icon: "🍱",
    mots: [
      { jp: "ご飯", kana: "ごはん", romaji: "gohan", fr: "riz / repas", img: "🍚" },
      { jp: "水", kana: "みず", romaji: "mizu", fr: "eau", img: "💧" },
      { jp: "お茶", kana: "おちゃ", romaji: "ocha", fr: "thé", img: "🍵" },
      { jp: "コーヒー", kana: "コーヒー", romaji: "kōhī", fr: "café", img: "☕" },
      { jp: "牛乳", kana: "ぎゅうにゅう", romaji: "gyūnyū", fr: "lait", img: "🥛" },
      { jp: "寿司", kana: "すし", romaji: "sushi", fr: "sushi", img: "🍣" },
      { jp: "麺", kana: "めん", romaji: "men", fr: "nouilles", img: "🍜" },
      { jp: "パン", kana: "パン", romaji: "pan", fr: "pain", img: "🍞" },
      { jp: "肉", kana: "にく", romaji: "niku", fr: "viande", img: "🍖" },
      { jp: "野菜", kana: "やさい", romaji: "yasai", fr: "légumes", img: "🥬" },
      { jp: "果物", kana: "くだもの", romaji: "kudamono", fr: "fruits", img: "🍎" },
      { jp: "卵", kana: "たまご", romaji: "tamago", fr: "œuf", img: "🥚" },
    ],
  },
  {
    theme: "Restauration",
    icon: "🍽️",
    mots: [
      { jp: "レストラン", kana: "レストラン", romaji: "resutoran", fr: "restaurant", img: "🍽️" },
      { jp: "メニュー", kana: "メニュー", romaji: "menyū", fr: "menu", img: "📋" },
      { jp: "注文", kana: "ちゅうもん", romaji: "chūmon", fr: "commande", img: "📝" },
      { jp: "お勘定", kana: "おかんじょう", romaji: "okanjō", fr: "l'addition", img: "🧾" },
      { jp: "予約", kana: "よやく", romaji: "yoyaku", fr: "réservation", img: "📅" },
      { jp: "箸", kana: "はし", romaji: "hashi", fr: "baguettes", img: "🥢" },
      { jp: "お皿", kana: "おさら", romaji: "osara", fr: "assiette", img: "🍽️" },
      { jp: "コップ", kana: "コップ", romaji: "koppu", fr: "verre", img: "🥛" },
      { jp: "美味しい", kana: "おいしい", romaji: "oishii", fr: "délicieux", img: "😋" },
      { jp: "乾杯", kana: "かんぱい", romaji: "kanpai", fr: "santé ! (trinquer)", img: "🍻" },
    ],
  },
  {
    theme: "Achats & argent",
    icon: "🛍️",
    mots: [
      { jp: "店", kana: "みせ", romaji: "mise", fr: "magasin", img: "🏪" },
      { jp: "お金", kana: "おかね", romaji: "okane", fr: "argent", img: "💰" },
      { jp: "円", kana: "えん", romaji: "en", fr: "yen", img: "💴" },
      { jp: "高い", kana: "たかい", romaji: "takai", fr: "cher", img: "💸" },
      { jp: "安い", kana: "やすい", romaji: "yasui", fr: "bon marché", img: "🏷️" },
      { jp: "レジ", kana: "レジ", romaji: "reji", fr: "caisse", img: "🧾" },
      { jp: "財布", kana: "さいふ", romaji: "saifu", fr: "portefeuille", img: "👛" },
      { jp: "カード", kana: "カード", romaji: "kādo", fr: "carte (bancaire)", img: "💳" },
      { jp: "袋", kana: "ふくろ", romaji: "fukuro", fr: "sac", img: "🛍️" },
      { jp: "値段", kana: "ねだん", romaji: "nedan", fr: "prix", img: "🔖" },
    ],
  },
  {
    theme: "Transport",
    icon: "🚃",
    mots: [
      { jp: "電車", kana: "でんしゃ", romaji: "densha", fr: "train", img: "🚃" },
      { jp: "車", kana: "くるま", romaji: "kuruma", fr: "voiture", img: "🚗" },
      { jp: "バス", kana: "バス", romaji: "basu", fr: "bus", img: "🚌" },
      { jp: "自転車", kana: "じてんしゃ", romaji: "jitensha", fr: "vélo", img: "🚲" },
      { jp: "飛行機", kana: "ひこうき", romaji: "hikōki", fr: "avion", img: "✈️" },
      { jp: "地下鉄", kana: "ちかてつ", romaji: "chikatetsu", fr: "métro", img: "🚇" },
      { jp: "タクシー", kana: "タクシー", romaji: "takushī", fr: "taxi", img: "🚕" },
      { jp: "船", kana: "ふね", romaji: "fune", fr: "bateau", img: "🚢" },
      { jp: "駅", kana: "えき", romaji: "eki", fr: "gare / station", img: "🚉" },
      { jp: "切符", kana: "きっぷ", romaji: "kippu", fr: "ticket", img: "🎫" },
    ],
  },
  {
    theme: "Voyages",
    icon: "✈️",
    mots: [
      { jp: "旅行", kana: "りょこう", romaji: "ryokō", fr: "voyage", img: "🧳" },
      { jp: "空港", kana: "くうこう", romaji: "kūkō", fr: "aéroport", img: "🛫" },
      { jp: "ホテル", kana: "ホテル", romaji: "hoteru", fr: "hôtel", img: "🏨" },
      { jp: "パスポート", kana: "パスポート", romaji: "pasupōto", fr: "passeport", img: "🛂" },
      { jp: "地図", kana: "ちず", romaji: "chizu", fr: "carte (plan)", img: "🗺️" },
      { jp: "荷物", kana: "にもつ", romaji: "nimotsu", fr: "bagages", img: "🧳" },
      { jp: "写真", kana: "しゃしん", romaji: "shashin", fr: "photo", img: "📷" },
      { jp: "お土産", kana: "おみやげ", romaji: "omiyage", fr: "souvenir", img: "🎁" },
      { jp: "観光", kana: "かんこう", romaji: "kankō", fr: "tourisme", img: "🏯" },
      { jp: "案内", kana: "あんない", romaji: "annai", fr: "guide / renseignement", img: "ℹ️" },
    ],
  },
  {
    theme: "En ville & lieux",
    icon: "🏙️",
    mots: [
      { jp: "町", kana: "まち", romaji: "machi", fr: "ville / quartier", img: "🏙️" },
      { jp: "銀行", kana: "ぎんこう", romaji: "ginkō", fr: "banque", img: "🏦" },
      { jp: "病院", kana: "びょういん", romaji: "byōin", fr: "hôpital", img: "🏥" },
      { jp: "郵便局", kana: "ゆうびんきょく", romaji: "yūbinkyoku", fr: "bureau de poste", img: "🏤" },
      { jp: "公園", kana: "こうえん", romaji: "kōen", fr: "parc", img: "🏞️" },
      { jp: "図書館", kana: "としょかん", romaji: "toshokan", fr: "bibliothèque", img: "📚" },
      { jp: "コンビニ", kana: "コンビニ", romaji: "konbini", fr: "supérette", img: "🏪" },
      { jp: "交番", kana: "こうばん", romaji: "kōban", fr: "poste de police", img: "🚓" },
      { jp: "映画館", kana: "えいがかん", romaji: "eigakan", fr: "cinéma", img: "🎬" },
      { jp: "神社", kana: "じんじゃ", romaji: "jinja", fr: "sanctuaire shintō", img: "⛩️" },
    ],
  },
  {
    theme: "La maison",
    icon: "🏠",
    mots: [
      { jp: "家", kana: "いえ", romaji: "ie", fr: "maison", img: "🏠" },
      { jp: "部屋", kana: "へや", romaji: "heya", fr: "chambre / pièce", img: "🛋️" },
      { jp: "台所", kana: "だいどころ", romaji: "daidokoro", fr: "cuisine", img: "🍳" },
      { jp: "お風呂", kana: "おふろ", romaji: "ofuro", fr: "bain", img: "🛁" },
      { jp: "トイレ", kana: "トイレ", romaji: "toire", fr: "toilettes", img: "🚽" },
      { jp: "ドア", kana: "ドア", romaji: "doa", fr: "porte", img: "🚪" },
      { jp: "窓", kana: "まど", romaji: "mado", fr: "fenêtre", img: "🪟" },
      { jp: "机", kana: "つくえ", romaji: "tsukue", fr: "bureau (meuble)", img: "🪑" },
      { jp: "椅子", kana: "いす", romaji: "isu", fr: "chaise", img: "💺" },
      { jp: "ベッド", kana: "ベッド", romaji: "beddo", fr: "lit", img: "🛏️" },
    ],
  },
  {
    theme: "Vêtements",
    icon: "👕",
    mots: [
      { jp: "服", kana: "ふく", romaji: "fuku", fr: "vêtements", img: "👕" },
      { jp: "シャツ", kana: "シャツ", romaji: "shatsu", fr: "chemise", img: "👔" },
      { jp: "ズボン", kana: "ズボン", romaji: "zubon", fr: "pantalon", img: "👖" },
      { jp: "スカート", kana: "スカート", romaji: "sukāto", fr: "jupe", img: "👗" },
      { jp: "コート", kana: "コート", romaji: "kōto", fr: "manteau", img: "🧥" },
      { jp: "靴", kana: "くつ", romaji: "kutsu", fr: "chaussures", img: "👟" },
      { jp: "靴下", kana: "くつした", romaji: "kutsushita", fr: "chaussettes", img: "🧦" },
      { jp: "帽子", kana: "ぼうし", romaji: "bōshi", fr: "chapeau", img: "🧢" },
      { jp: "眼鏡", kana: "めがね", romaji: "megane", fr: "lunettes", img: "👓" },
      { jp: "時計", kana: "とけい", romaji: "tokei", fr: "montre", img: "⌚" },
    ],
  },
  {
    theme: "École & études",
    icon: "🏫",
    mots: [
      { jp: "学校", kana: "がっこう", romaji: "gakkō", fr: "école", img: "🏫" },
      { jp: "大学", kana: "だいがく", romaji: "daigaku", fr: "université", img: "🎓" },
      { jp: "学生", kana: "がくせい", romaji: "gakusei", fr: "étudiant(e)", img: "🧑‍🎓" },
      { jp: "先生", kana: "せんせい", romaji: "sensei", fr: "professeur", img: "👨‍🏫" },
      { jp: "本", kana: "ほん", romaji: "hon", fr: "livre", img: "📖" },
      { jp: "鉛筆", kana: "えんぴつ", romaji: "enpitsu", fr: "crayon", img: "✏️" },
      { jp: "ノート", kana: "ノート", romaji: "nōto", fr: "cahier", img: "📓" },
      { jp: "勉強", kana: "べんきょう", romaji: "benkyō", fr: "étude", img: "📚" },
      { jp: "宿題", kana: "しゅくだい", romaji: "shukudai", fr: "devoirs", img: "📝" },
      { jp: "試験", kana: "しけん", romaji: "shiken", fr: "examen", img: "🧑‍💻" },
    ],
  },
  {
    theme: "Métiers & travail",
    icon: "💼",
    mots: [
      { jp: "仕事", kana: "しごと", romaji: "shigoto", fr: "travail", img: "💼" },
      { jp: "会社", kana: "かいしゃ", romaji: "kaisha", fr: "entreprise", img: "🏢" },
      { jp: "会社員", kana: "かいしゃいん", romaji: "kaishain", fr: "employé(e)", img: "🧑‍💼" },
      { jp: "医者", kana: "いしゃ", romaji: "isha", fr: "médecin", img: "👨‍⚕️" },
      { jp: "看護師", kana: "かんごし", romaji: "kangoshi", fr: "infirmier / infirmière", img: "👩‍⚕️" },
      { jp: "店員", kana: "てんいん", romaji: "ten'in", fr: "vendeur / vendeuse", img: "🛍️" },
      { jp: "料理人", kana: "りょうりにん", romaji: "ryōrinin", fr: "cuisinier", img: "👨‍🍳" },
      { jp: "運転手", kana: "うんてんしゅ", romaji: "untenshu", fr: "chauffeur", img: "🚗" },
      { jp: "警察官", kana: "けいさつかん", romaji: "keisatsukan", fr: "policier", img: "👮" },
      { jp: "教師", kana: "きょうし", romaji: "kyōshi", fr: "enseignant(e)", img: "🧑‍🏫" },
    ],
  },
  {
    theme: "Animaux",
    icon: "🐾",
    mots: [
      { jp: "犬", kana: "いぬ", romaji: "inu", fr: "chien", img: "🐶" },
      { jp: "猫", kana: "ねこ", romaji: "neko", fr: "chat", img: "🐱" },
      { jp: "鳥", kana: "とり", romaji: "tori", fr: "oiseau", img: "🐦" },
      { jp: "魚", kana: "さかな", romaji: "sakana", fr: "poisson", img: "🐟" },
      { jp: "馬", kana: "うま", romaji: "uma", fr: "cheval", img: "🐴" },
      { jp: "牛", kana: "うし", romaji: "ushi", fr: "vache", img: "🐮" },
      { jp: "豚", kana: "ぶた", romaji: "buta", fr: "cochon", img: "🐷" },
      { jp: "兎", kana: "うさぎ", romaji: "usagi", fr: "lapin", img: "🐰" },
      { jp: "熊", kana: "くま", romaji: "kuma", fr: "ours", img: "🐻" },
      { jp: "象", kana: "ぞう", romaji: "zō", fr: "éléphant", img: "🐘" },
    ],
  },
  {
    theme: "Nature & météo",
    icon: "🌤️",
    mots: [
      { jp: "日", kana: "ひ", romaji: "hi", fr: "jour / soleil", img: "☀️" },
      { jp: "月", kana: "つき", romaji: "tsuki", fr: "lune / mois", img: "🌙" },
      { jp: "雨", kana: "あめ", romaji: "ame", fr: "pluie", img: "🌧️" },
      { jp: "雪", kana: "ゆき", romaji: "yuki", fr: "neige", img: "❄️" },
      { jp: "風", kana: "かぜ", romaji: "kaze", fr: "vent", img: "💨" },
      { jp: "空", kana: "そら", romaji: "sora", fr: "ciel", img: "🌌" },
      { jp: "海", kana: "うみ", romaji: "umi", fr: "mer", img: "🌊" },
      { jp: "山", kana: "やま", romaji: "yama", fr: "montagne", img: "⛰️" },
      { jp: "木", kana: "き", romaji: "ki", fr: "arbre", img: "🌳" },
      { jp: "花", kana: "はな", romaji: "hana", fr: "fleur", img: "🌸" },
    ],
  },
  {
    theme: "Directions & positions",
    icon: "🧭",
    mots: [
      { jp: "上", kana: "うえ", romaji: "ue", fr: "en haut / dessus", img: "⬆️" },
      { jp: "下", kana: "した", romaji: "shita", fr: "en bas / dessous", img: "⬇️" },
      { jp: "右", kana: "みぎ", romaji: "migi", fr: "droite", img: "➡️" },
      { jp: "左", kana: "ひだり", romaji: "hidari", fr: "gauche", img: "⬅️" },
      { jp: "前", kana: "まえ", romaji: "mae", fr: "devant / avant", img: "⏫" },
      { jp: "後ろ", kana: "うしろ", romaji: "ushiro", fr: "derrière", img: "🔙" },
      { jp: "中", kana: "なか", romaji: "naka", fr: "dedans / milieu", img: "🔲" },
      { jp: "外", kana: "そと", romaji: "soto", fr: "dehors", img: "🌳" },
      { jp: "近く", kana: "ちかく", romaji: "chikaku", fr: "près", img: "📍" },
      { jp: "隣", kana: "となり", romaji: "tonari", fr: "à côté", img: "👥" },
    ],
  },
  {
    theme: "Adjectifs courants",
    icon: "✨",
    mots: [
      { jp: "大きい", kana: "おおきい", romaji: "ōkii", fr: "grand", img: "🔵" },
      { jp: "小さい", kana: "ちいさい", romaji: "chiisai", fr: "petit", img: "🔹" },
      { jp: "新しい", kana: "あたらしい", romaji: "atarashii", fr: "nouveau", img: "✨" },
      { jp: "古い", kana: "ふるい", romaji: "furui", fr: "vieux / ancien", img: "🏚️" },
      { jp: "良い", kana: "いい", romaji: "ii", fr: "bon / bien", img: "👍" },
      { jp: "悪い", kana: "わるい", romaji: "warui", fr: "mauvais", img: "👎" },
      { jp: "暑い", kana: "あつい", romaji: "atsui", fr: "chaud (temps)", img: "🥵" },
      { jp: "寒い", kana: "さむい", romaji: "samui", fr: "froid (temps)", img: "🥶" },
      { jp: "楽しい", kana: "たのしい", romaji: "tanoshii", fr: "amusant", img: "😄" },
      { jp: "難しい", kana: "むずかしい", romaji: "muzukashii", fr: "difficile", img: "😓" },
    ],
  },
  {
    theme: "Expressions utiles",
    icon: "💬",
    mots: [
      { jp: "大丈夫", kana: "だいじょうぶ", romaji: "daijōbu", fr: "ça va / d'accord", img: "👌" },
      { jp: "分かりました", kana: "わかりました", romaji: "wakarimashita", fr: "j'ai compris", img: "✅" },
      { jp: "分かりません", kana: "わかりません", romaji: "wakarimasen", fr: "je ne comprends pas", img: "❓" },
      { jp: "ちょっと待って", kana: "ちょっとまって", romaji: "chotto matte", fr: "attends un peu", img: "✋" },
      { jp: "お元気ですか", kana: "おげんきですか", romaji: "ogenki desu ka", fr: "comment allez-vous ?", img: "😊" },
      { jp: "おめでとう", kana: "おめでとう", romaji: "omedetō", fr: "félicitations", img: "🎉" },
      { jp: "気をつけて", kana: "きをつけて", romaji: "ki o tsukete", fr: "fais attention", img: "🙂" },
      { jp: "もう一度", kana: "もういちど", romaji: "mō ichido", fr: "encore une fois", img: "🔁" },
      { jp: "助けて", kana: "たすけて", romaji: "tasukete", fr: "au secours", img: "🆘" },
      { jp: "いくらですか", kana: "いくらですか", romaji: "ikura desu ka", fr: "combien ça coûte ?", img: "💴" },
    ],
  },
];

/* =====================================================================
 * 2. VERBES — avec conjugaisons de base (forme polie)
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
 * 3. GRAMMAIRE — leçons progressives
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

/* Exposé global pour app.js */
window.DATA = { VOCABULAIRE, VERBES, GROUPES_VERBES, GRAMMAIRE };
