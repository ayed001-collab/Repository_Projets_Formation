/**
 * questions.js — Axe « Poser des questions » de l'agent de japonais
 * ----------------------------------------------------------------
 * Mots interrogatifs et modèles de questions, regroupés par catégorie.
 * Chaque entrée : jp, kana, romaji, fr, img, et un exemple complet
 * (exemple : { jp, romaji, fr }).
 *
 * Rappel de formation : en japonais, on garde l'ordre de la phrase et on
 * ajoute la particule か à la fin ; le mot inconnu est remplacé par le
 * mot interrogatif adéquat (何, 誰, どこ…).
 *
 * Ce fichier expose la variable globale QUESTIONS.
 */
const QUESTIONS = [
  {
    categorie: "Les mots interrogatifs",
    icon: "🔑",
    desc: "Les mots de base pour interroger : quoi, qui, où, quand, pourquoi…",
    items: [
      { jp: "何", kana: "なに / なん", romaji: "nani / nan", fr: "quoi / que", img: "❓",
        exemple: { jp: "これは何ですか。", romaji: "Kore wa nan desu ka.", fr: "Qu'est-ce que c'est ?" } },
      { jp: "誰", kana: "だれ", romaji: "dare", fr: "qui", img: "🧑",
        exemple: { jp: "あの人は誰ですか。", romaji: "Ano hito wa dare desu ka.", fr: "Qui est cette personne ?" } },
      { jp: "どこ", kana: "どこ", romaji: "doko", fr: "où", img: "📍",
        exemple: { jp: "トイレはどこですか。", romaji: "Toire wa doko desu ka.", fr: "Où sont les toilettes ?" } },
      { jp: "いつ", kana: "いつ", romaji: "itsu", fr: "quand", img: "📅",
        exemple: { jp: "誕生日はいつですか。", romaji: "Tanjōbi wa itsu desu ka.", fr: "C'est quand, ton anniversaire ?" } },
      { jp: "なぜ", kana: "なぜ", romaji: "naze", fr: "pourquoi (soutenu)", img: "🤔",
        exemple: { jp: "なぜ日本語を勉強しますか。", romaji: "Naze nihongo o benkyō shimasu ka.", fr: "Pourquoi étudiez-vous le japonais ?" } },
      { jp: "どうして", kana: "どうして", romaji: "dōshite", fr: "pourquoi (courant)", img: "❔",
        exemple: { jp: "どうして遅れましたか。", romaji: "Dōshite okuremashita ka.", fr: "Pourquoi es-tu en retard ?" } },
      { jp: "どう", kana: "どう", romaji: "dō", fr: "comment (état, avis)", img: "🎐",
        exemple: { jp: "日本はどうですか。", romaji: "Nihon wa dō desu ka.", fr: "Comment trouvez-vous le Japon ?" } },
      { jp: "いくら", kana: "いくら", romaji: "ikura", fr: "combien (prix)", img: "💴",
        exemple: { jp: "これはいくらですか。", romaji: "Kore wa ikura desu ka.", fr: "Combien coûte ceci ?" } },
      { jp: "いくつ", kana: "いくつ", romaji: "ikutsu", fr: "combien (quantité)", img: "🔢",
        exemple: { jp: "りんごはいくつありますか。", romaji: "Ringo wa ikutsu arimasu ka.", fr: "Combien y a-t-il de pommes ?" } },
      { jp: "どれ", kana: "どれ", romaji: "dore", fr: "lequel (parmi 3+)", img: "👉",
        exemple: { jp: "あなたの傘はどれですか。", romaji: "Anata no kasa wa dore desu ka.", fr: "Lequel est votre parapluie ?" } },
      { jp: "どの", kana: "どの", romaji: "dono", fr: "quel + nom", img: "📎",
        exemple: { jp: "どの電車に乗りますか。", romaji: "Dono densha ni norimasu ka.", fr: "Quel train prends-tu ?" } },
      { jp: "どちら", kana: "どちら", romaji: "dochira", fr: "lequel (2) / où (poli)", img: "🔀",
        exemple: { jp: "お手洗いはどちらですか。", romaji: "Otearai wa dochira desu ka.", fr: "Où sont les toilettes ? (poli)" } },
    ],
  },
  {
    categorie: "Questions avec です か",
    icon: "🟰",
    desc: "Le modèle le plus simple : [thème] は [interrogatif] ですか.",
    items: [
      { jp: "何ですか", kana: "なんですか", romaji: "nan desu ka", fr: "qu'est-ce que c'est ?", img: "❓",
        exemple: { jp: "それは何ですか。", romaji: "Sore wa nan desu ka.", fr: "Qu'est-ce que c'est (près de toi) ?" } },
      { jp: "誰ですか", kana: "だれですか", romaji: "dare desu ka", fr: "qui est-ce ?", img: "🧑",
        exemple: { jp: "この人は誰ですか。", romaji: "Kono hito wa dare desu ka.", fr: "Qui est cette personne ?" } },
      { jp: "どこですか", kana: "どこですか", romaji: "doko desu ka", fr: "où est-ce ?", img: "📍",
        exemple: { jp: "駅はどこですか。", romaji: "Eki wa doko desu ka.", fr: "Où est la gare ?" } },
      { jp: "いつですか", kana: "いつですか", romaji: "itsu desu ka", fr: "c'est quand ?", img: "📅",
        exemple: { jp: "会議はいつですか。", romaji: "Kaigi wa itsu desu ka.", fr: "C'est quand, la réunion ?" } },
      { jp: "いくらですか", kana: "いくらですか", romaji: "ikura desu ka", fr: "combien ça coûte ?", img: "💴",
        exemple: { jp: "全部でいくらですか。", romaji: "Zenbu de ikura desu ka.", fr: "Ça fait combien en tout ?" } },
      { jp: "何時ですか", kana: "なんじですか", romaji: "nanji desu ka", fr: "quelle heure est-il ?", img: "🕐",
        exemple: { jp: "今、何時ですか。", romaji: "Ima, nanji desu ka.", fr: "Quelle heure est-il ?" } },
      { jp: "何曜日ですか", kana: "なんようびですか", romaji: "nan'yōbi desu ka", fr: "quel jour (semaine) ?", img: "🗓️",
        exemple: { jp: "今日は何曜日ですか。", romaji: "Kyō wa nan'yōbi desu ka.", fr: "On est quel jour aujourd'hui ?" } },
      { jp: "何歳ですか", kana: "なんさいですか", romaji: "nansai desu ka", fr: "quel âge as-tu ?", img: "🎂",
        exemple: { jp: "お子さんは何歳ですか。", romaji: "Okosan wa nansai desu ka.", fr: "Quel âge a votre enfant ?" } },
      { jp: "どちらですか", kana: "どちらですか", romaji: "dochira desu ka", fr: "où / lequel ? (poli)", img: "🙇",
        exemple: { jp: "お国はどちらですか。", romaji: "Okuni wa dochira desu ka.", fr: "De quel pays venez-vous ?" } },
      { jp: "どんな", kana: "どんな", romaji: "donna", fr: "quel genre de… ?", img: "🎨",
        exemple: { jp: "どんな音楽が好きですか。", romaji: "Donna ongaku ga suki desu ka.", fr: "Quel genre de musique aimes-tu ?" } },
    ],
  },
  {
    categorie: "Questions avec un verbe",
    icon: "🏃",
    desc: "Interroger sur une action : que, où, quand, avec qui, comment…",
    items: [
      { jp: "何をしますか", kana: "なにをしますか", romaji: "nani o shimasu ka", fr: "que faites-vous ?", img: "🛠️",
        exemple: { jp: "週末は何をしますか。", romaji: "Shūmatsu wa nani o shimasu ka.", fr: "Que fais-tu ce week-end ?" } },
      { jp: "どこへ行きますか", kana: "どこへいきますか", romaji: "doko e ikimasu ka", fr: "où allez-vous ?", img: "🚶",
        exemple: { jp: "今日はどこへ行きますか。", romaji: "Kyō wa doko e ikimasu ka.", fr: "Où vas-tu aujourd'hui ?" } },
      { jp: "いつ来ますか", kana: "いつきますか", romaji: "itsu kimasu ka", fr: "quand venez-vous ?", img: "🚪",
        exemple: { jp: "いつ日本へ来ますか。", romaji: "Itsu nihon e kimasu ka.", fr: "Quand viens-tu au Japon ?" } },
      { jp: "誰と行きますか", kana: "だれといきますか", romaji: "dare to ikimasu ka", fr: "avec qui y allez-vous ?", img: "🧑‍🤝‍🧑",
        exemple: { jp: "誰と映画を見ますか。", romaji: "Dare to eiga o mimasu ka.", fr: "Avec qui regardes-tu un film ?" } },
      { jp: "どうやって", kana: "どうやって", romaji: "dō yatte", fr: "comment (moyen) ?", img: "🧭",
        exemple: { jp: "学校までどうやって行きますか。", romaji: "Gakkō made dō yatte ikimasu ka.", fr: "Comment vas-tu à l'école ?" } },
      { jp: "何時に", kana: "なんじに", romaji: "nanji ni", fr: "à quelle heure ?", img: "⏰",
        exemple: { jp: "何時に起きますか。", romaji: "Nanji ni okimasu ka.", fr: "À quelle heure te lèves-tu ?" } },
      { jp: "どこで", kana: "どこで", romaji: "doko de", fr: "où (lieu de l'action) ?", img: "📌",
        exemple: { jp: "どこで昼ご飯を食べますか。", romaji: "Doko de hirugohan o tabemasu ka.", fr: "Où déjeunes-tu ?" } },
      { jp: "何が", kana: "なにが", romaji: "nani ga", fr: "qu'est-ce qui… ?", img: "⭐",
        exemple: { jp: "何が好きですか。", romaji: "Nani ga suki desu ka.", fr: "Qu'est-ce que tu aimes ?" } },
      { jp: "どのくらい", kana: "どのくらい", romaji: "dono kurai", fr: "combien (durée/quantité) ?", img: "⏳",
        exemple: { jp: "どのくらいかかりますか。", romaji: "Dono kurai kakarimasu ka.", fr: "Combien de temps ça prend ?" } },
      { jp: "何回", kana: "なんかい", romaji: "nankai", fr: "combien de fois ?", img: "🔁",
        exemple: { jp: "何回行きましたか。", romaji: "Nankai ikimashita ka.", fr: "Combien de fois y es-tu allé ?" } },
    ],
  },
  {
    categorie: "Demander & se dépanner",
    icon: "🆘",
    desc: "Des tournures toutes prêtes pour demander, vérifier ou obtenir de l'aide.",
    items: [
      { jp: "〜はありますか", kana: "〜はありますか", romaji: "~ wa arimasu ka", fr: "avez-vous… ?", img: "🛒",
        exemple: { jp: "空いている部屋はありますか。", romaji: "Aite iru heya wa arimasu ka.", fr: "Avez-vous une chambre de libre ?" } },
      { jp: "〜をお願いします", kana: "〜をおねがいします", romaji: "~ o onegai shimasu", fr: "… s'il vous plaît", img: "🤲",
        exemple: { jp: "メニューをお願いします。", romaji: "Menyū o onegai shimasu.", fr: "Le menu, s'il vous plaît." } },
      { jp: "〜てもいいですか", kana: "〜てもいいですか", romaji: "~te mo ii desu ka", fr: "puis-je… ?", img: "🙋",
        exemple: { jp: "写真を撮ってもいいですか。", romaji: "Shashin o totte mo ii desu ka.", fr: "Puis-je prendre une photo ?" } },
      { jp: "どういう意味ですか", kana: "どういういみですか", romaji: "dō iu imi desu ka", fr: "qu'est-ce que ça veut dire ?", img: "💡",
        exemple: { jp: "これはどういう意味ですか。", romaji: "Kore wa dō iu imi desu ka.", fr: "Qu'est-ce que ça veut dire ?" } },
      { jp: "もう一度いいですか", kana: "もういちどいいですか", romaji: "mō ichido ii desu ka", fr: "pouvez-vous répéter ?", img: "🔁",
        exemple: { jp: "すみません、もう一度いいですか。", romaji: "Sumimasen, mō ichido ii desu ka.", fr: "Excusez-moi, pouvez-vous répéter ?" } },
      { jp: "英語がわかりますか", kana: "えいごがわかりますか", romaji: "eigo ga wakarimasu ka", fr: "comprenez-vous l'anglais ?", img: "🇬🇧",
        exemple: { jp: "英語がわかりますか。", romaji: "Eigo ga wakarimasu ka.", fr: "Comprenez-vous l'anglais ?" } },
      { jp: "手伝ってもらえますか", kana: "てつだってもらえますか", romaji: "tetsudatte moraemasu ka", fr: "pouvez-vous m'aider ?", img: "🤝",
        exemple: { jp: "ちょっと手伝ってもらえますか。", romaji: "Chotto tetsudatte moraemasu ka.", fr: "Pouvez-vous m'aider un instant ?" } },
      { jp: "大丈夫ですか", kana: "だいじょうぶですか", romaji: "daijōbu desu ka", fr: "est-ce que ça va ?", img: "😊",
        exemple: { jp: "大丈夫ですか。", romaji: "Daijōbu desu ka.", fr: "Est-ce que ça va ?" } },
      { jp: "どうしましたか", kana: "どうしましたか", romaji: "dō shimashita ka", fr: "que se passe-t-il ?", img: "🤔",
        exemple: { jp: "どうしましたか。", romaji: "Dō shimashita ka.", fr: "Qu'est-ce qu'il y a ? / Que s'est-il passé ?" } },
      { jp: "〜はどこにありますか", kana: "〜はどこにありますか", romaji: "~ wa doko ni arimasu ka", fr: "où se trouve… ?", img: "🗺️",
        exemple: { jp: "駅はどこにありますか。", romaji: "Eki wa doko ni arimasu ka.", fr: "Où se trouve la gare ?" } },
    ],
  },
];

/* Exposé global */
if (typeof window !== "undefined") window.QUESTIONS = QUESTIONS;
