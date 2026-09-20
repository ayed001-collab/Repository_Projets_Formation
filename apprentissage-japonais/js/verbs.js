/**
 * verbs.js — Verbes de l'agent d'apprentissage du japonais
 * --------------------------------------------------------
 * Plus de 200 verbes parmi les plus utilisés au Japon.
 *
 * Pour garantir des conjugaisons exactes et cohérentes, chaque verbe est
 * défini de façon compacte (forme du dictionnaire + groupe) et toutes les
 * formes sont GÉNÉRÉES automatiquement selon les règles japonaises :
 *   - présent poli (~ます), négatif (~ません), passé (~ました), forme て.
 *
 * groupe : "godan" (1er groupe, en -u), "ichidan" (2e groupe, en -ru),
 *          "irregular" (する et 来る).
 *
 * Ce fichier expose la variable globale VERBES (liste conjuguée).
 */
(function () {
  "use strict";

  // Règles godan basées sur la dernière more (kana + rōmaji).
  const GODAN = {
    "う": { i: "い", te: "って", iRo: "i", teRo: "tte" },
    "く": { i: "き", te: "いて", iRo: "ki", teRo: "ite" },
    "ぐ": { i: "ぎ", te: "いで", iRo: "gi", teRo: "ide" },
    "す": { i: "し", te: "して", iRo: "shi", teRo: "shite" },
    "つ": { i: "ち", te: "って", iRo: "chi", teRo: "tte" },
    "ぬ": { i: "に", te: "んで", iRo: "ni", teRo: "nde" },
    "ぶ": { i: "び", te: "んで", iRo: "bi", teRo: "nde" },
    "む": { i: "み", te: "んで", iRo: "mi", teRo: "nde" },
    "る": { i: "り", te: "って", iRo: "ri", teRo: "tte" },
  };
  // Rōmaji : terminaisons à retirer (les plus longues d'abord).
  const RO_END = [
    ["tsu", "つ"], ["ku", "く"], ["gu", "ぐ"], ["su", "す"],
    ["nu", "ぬ"], ["bu", "ぶ"], ["mu", "む"], ["ru", "る"], ["u", "う"],
  ];

  const mk = (jp, romaji) => ({ jp, romaji });

  function conjuguer(v) {
    const { jp, kana, romaji, fr, groupe, img, exemple } = v;
    let present, negatif, passe, te;

    if (groupe === "irregular") {
      if (/する$/.test(jp) || /suru$/.test(romaji)) {
        const bJp = jp.replace(/する$/, "");
        const bRo = romaji.replace(/\s*suru$/, "");
        const sp = bRo ? bRo + " " : "";
        present = mk(bJp + "します", sp + "shimasu");
        negatif = mk(bJp + "しません", sp + "shimasen");
        passe = mk(bJp + "しました", sp + "shimashita");
        te = mk(bJp + "して", sp + "shite");
      } else {
        // 来る (kuru)
        const bJp = jp.replace(/る$/, "");
        present = mk(bJp + "ます", "kimasu");
        negatif = mk(bJp + "ません", "kimasen");
        passe = mk(bJp + "ました", "kimashita");
        te = mk(bJp + "て", "kite");
      }
    } else if (groupe === "ichidan") {
      const sJp = jp.slice(0, -1);
      const sRo = romaji.replace(/ru$/, "");
      present = mk(sJp + "ます", sRo + "masu");
      negatif = mk(sJp + "ません", sRo + "masen");
      passe = mk(sJp + "ました", sRo + "mashita");
      te = mk(sJp + "て", sRo + "te");
    } else {
      // godan
      const last = kana.slice(-1);
      const g = GODAN[last];
      if (!g) throw new Error("Kana godan inconnu pour " + jp + " (" + last + ")");
      const sJp = jp.slice(0, -1);
      let roStem = romaji;
      for (const [end] of RO_END) {
        if (romaji.endsWith(end)) { roStem = romaji.slice(0, -end.length); break; }
      }
      present = mk(sJp + g.i + "ます", roStem + g.iRo + "masu");
      negatif = mk(sJp + g.i + "ません", roStem + g.iRo + "masen");
      passe = mk(sJp + g.i + "ました", roStem + g.iRo + "mashita");
      te = mk(sJp + g.te, roStem + g.teRo);
      // Exception : 行く → 行って
      if (romaji === "iku") te = mk(sJp + "って", "itte");
    }

    return {
      fr, img, groupe,
      dictionnaire: mk(jp, romaji),
      present, negatif, passe, te,
      ...(exemple ? { exemple } : {}),
    };
  }

  /* =====================================================================
   * Liste des verbes (forme du dictionnaire). Les 12 premiers portent une
   * phrase d'exemple ; les conjugaisons de tous sont générées.
   * ===================================================================== */
  const BASE = [
    // --- Verbes essentiels (avec exemple) ---
    { jp: "食べる", kana: "たべる", romaji: "taberu", fr: "manger", groupe: "ichidan", img: "🍽️", exemple: { jp: "寿司を食べます。", romaji: "Sushi o tabemasu.", fr: "Je mange des sushis." } },
    { jp: "飲む", kana: "のむ", romaji: "nomu", fr: "boire", groupe: "godan", img: "🥤", exemple: { jp: "お茶を飲みます。", romaji: "Ocha o nomimasu.", fr: "Je bois du thé." } },
    { jp: "行く", kana: "いく", romaji: "iku", fr: "aller", groupe: "godan", img: "🚶", exemple: { jp: "学校に行きます。", romaji: "Gakkō ni ikimasu.", fr: "Je vais à l'école." } },
    { jp: "来る", kana: "くる", romaji: "kuru", fr: "venir", groupe: "irregular", img: "🏃", exemple: { jp: "友達が来ます。", romaji: "Tomodachi ga kimasu.", fr: "Un ami vient." } },
    { jp: "する", kana: "する", romaji: "suru", fr: "faire", groupe: "irregular", img: "🛠️", exemple: { jp: "宿題をします。", romaji: "Shukudai o shimasu.", fr: "Je fais mes devoirs." } },
    { jp: "見る", kana: "みる", romaji: "miru", fr: "voir / regarder", groupe: "ichidan", img: "👀", exemple: { jp: "映画を見ます。", romaji: "Eiga o mimasu.", fr: "Je regarde un film." } },
    { jp: "話す", kana: "はなす", romaji: "hanasu", fr: "parler", groupe: "godan", img: "💬", exemple: { jp: "日本語を話します。", romaji: "Nihongo o hanashimasu.", fr: "Je parle japonais." } },
    { jp: "聞く", kana: "きく", romaji: "kiku", fr: "écouter / demander", groupe: "godan", img: "👂", exemple: { jp: "音楽を聞きます。", romaji: "Ongaku o kikimasu.", fr: "J'écoute de la musique." } },
    { jp: "読む", kana: "よむ", romaji: "yomu", fr: "lire", groupe: "godan", img: "📖", exemple: { jp: "本を読みます。", romaji: "Hon o yomimasu.", fr: "Je lis un livre." } },
    { jp: "書く", kana: "かく", romaji: "kaku", fr: "écrire", groupe: "godan", img: "✍️", exemple: { jp: "手紙を書きます。", romaji: "Tegami o kakimasu.", fr: "J'écris une lettre." } },
    { jp: "買う", kana: "かう", romaji: "kau", fr: "acheter", groupe: "godan", img: "🛒", exemple: { jp: "パンを買います。", romaji: "Pan o kaimasu.", fr: "J'achète du pain." } },
    { jp: "寝る", kana: "ねる", romaji: "neru", fr: "dormir / se coucher", groupe: "ichidan", img: "😴", exemple: { jp: "早く寝ます。", romaji: "Hayaku nemasu.", fr: "Je me couche tôt." } },

    // --- Déplacement ---
    { jp: "帰る", kana: "かえる", romaji: "kaeru", fr: "rentrer", groupe: "godan", img: "🏠" },
    { jp: "歩く", kana: "あるく", romaji: "aruku", fr: "marcher", groupe: "godan", img: "🚶" },
    { jp: "走る", kana: "はしる", romaji: "hashiru", fr: "courir", groupe: "godan", img: "🏃" },
    { jp: "泳ぐ", kana: "およぐ", romaji: "oyogu", fr: "nager", groupe: "godan", img: "🏊" },
    { jp: "飛ぶ", kana: "とぶ", romaji: "tobu", fr: "voler / sauter", groupe: "godan", img: "🕊️" },
    { jp: "乗る", kana: "のる", romaji: "noru", fr: "monter (véhicule)", groupe: "godan", img: "🚃" },
    { jp: "降りる", kana: "おりる", romaji: "oriru", fr: "descendre (véhicule)", groupe: "ichidan", img: "🚏" },
    { jp: "着く", kana: "つく", romaji: "tsuku", fr: "arriver", groupe: "godan", img: "📍" },
    { jp: "出る", kana: "でる", romaji: "deru", fr: "sortir (partir)", groupe: "ichidan", img: "🚪" },
    { jp: "入る", kana: "はいる", romaji: "hairu", fr: "entrer", groupe: "godan", img: "🚪" },
    { jp: "通る", kana: "とおる", romaji: "tōru", fr: "passer par", groupe: "godan", img: "🛣️" },
    { jp: "渡る", kana: "わたる", romaji: "wataru", fr: "traverser", groupe: "godan", img: "🌉" },
    { jp: "急ぐ", kana: "いそぐ", romaji: "isogu", fr: "se dépêcher", groupe: "godan", img: "⏱️" },
    { jp: "動く", kana: "うごく", romaji: "ugoku", fr: "bouger", groupe: "godan", img: "🔀" },
    { jp: "止まる", kana: "とまる", romaji: "tomaru", fr: "s'arrêter", groupe: "godan", img: "🛑" },
    { jp: "進む", kana: "すすむ", romaji: "susumu", fr: "avancer", groupe: "godan", img: "⏩" },
    { jp: "戻る", kana: "もどる", romaji: "modoru", fr: "revenir", groupe: "godan", img: "↩️" },
    { jp: "曲がる", kana: "まがる", romaji: "magaru", fr: "tourner (direction)", groupe: "godan", img: "↪️" },

    // --- Vie quotidienne ---
    { jp: "作る", kana: "つくる", romaji: "tsukuru", fr: "fabriquer / faire", groupe: "godan", img: "🔨" },
    { jp: "焼く", kana: "やく", romaji: "yaku", fr: "griller / cuire", groupe: "godan", img: "🔥" },
    { jp: "切る", kana: "きる", romaji: "kiru", fr: "couper", groupe: "godan", img: "🔪" },
    { jp: "洗う", kana: "あらう", romaji: "arau", fr: "laver", groupe: "godan", img: "🧼" },
    { jp: "片付ける", kana: "かたづける", romaji: "katazukeru", fr: "ranger", groupe: "ichidan", img: "🧹" },
    { jp: "起きる", kana: "おきる", romaji: "okiru", fr: "se lever / se réveiller", groupe: "ichidan", img: "⏰" },
    { jp: "休む", kana: "やすむ", romaji: "yasumu", fr: "se reposer", groupe: "godan", img: "😌" },
    { jp: "座る", kana: "すわる", romaji: "suwaru", fr: "s'asseoir", groupe: "godan", img: "🪑" },
    { jp: "立つ", kana: "たつ", romaji: "tatsu", fr: "se tenir debout", groupe: "godan", img: "🧍" },
    { jp: "磨く", kana: "みがく", romaji: "migaku", fr: "brosser / polir", groupe: "godan", img: "🪥" },
    { jp: "浴びる", kana: "あびる", romaji: "abiru", fr: "prendre (une douche)", groupe: "ichidan", img: "🚿" },
    { jp: "着る", kana: "きる", romaji: "kiru", fr: "porter (le haut)", groupe: "ichidan", img: "👕" },
    { jp: "脱ぐ", kana: "ぬぐ", romaji: "nugu", fr: "enlever (un vêtement)", groupe: "godan", img: "🧥" },
    { jp: "履く", kana: "はく", romaji: "haku", fr: "porter (chaussures/bas)", groupe: "godan", img: "👟" },
    { jp: "住む", kana: "すむ", romaji: "sumu", fr: "habiter", groupe: "godan", img: "🏡" },
    { jp: "引っ越す", kana: "ひっこす", romaji: "hikkosu", fr: "déménager", groupe: "godan", img: "📦" },

    // --- Communication & pensée ---
    { jp: "言う", kana: "いう", romaji: "iu", fr: "dire", groupe: "godan", img: "🗨️" },
    { jp: "見せる", kana: "みせる", romaji: "miseru", fr: "montrer", groupe: "ichidan", img: "👉" },
    { jp: "描く", kana: "かく", romaji: "kaku", fr: "dessiner", groupe: "godan", img: "🎨" },
    { jp: "呼ぶ", kana: "よぶ", romaji: "yobu", fr: "appeler", groupe: "godan", img: "📣" },
    { jp: "答える", kana: "こたえる", romaji: "kotaeru", fr: "répondre", groupe: "ichidan", img: "✅" },
    { jp: "教える", kana: "おしえる", romaji: "oshieru", fr: "enseigner", groupe: "ichidan", img: "👨‍🏫" },
    { jp: "習う", kana: "ならう", romaji: "narau", fr: "apprendre (auprès de)", groupe: "godan", img: "📚" },
    { jp: "覚える", kana: "おぼえる", romaji: "oboeru", fr: "mémoriser", groupe: "ichidan", img: "🧠" },
    { jp: "忘れる", kana: "わすれる", romaji: "wasureru", fr: "oublier", groupe: "ichidan", img: "💭" },
    { jp: "知る", kana: "しる", romaji: "shiru", fr: "savoir / connaître", groupe: "godan", img: "💡" },
    { jp: "考える", kana: "かんがえる", romaji: "kangaeru", fr: "réfléchir", groupe: "ichidan", img: "🤔" },
    { jp: "思う", kana: "おもう", romaji: "omou", fr: "penser / croire", groupe: "godan", img: "💬" },
    { jp: "分かる", kana: "わかる", romaji: "wakaru", fr: "comprendre", groupe: "godan", img: "🙆" },
    { jp: "感じる", kana: "かんじる", romaji: "kanjiru", fr: "ressentir", groupe: "ichidan", img: "❤️" },
    { jp: "信じる", kana: "しんじる", romaji: "shinjiru", fr: "croire", groupe: "ichidan", img: "🙏" },
    { jp: "見える", kana: "みえる", romaji: "mieru", fr: "être visible", groupe: "ichidan", img: "👁️" },
    { jp: "聞こえる", kana: "きこえる", romaji: "kikoeru", fr: "être audible", groupe: "ichidan", img: "🔊" },

    // --- Étude & travail ---
    { jp: "勉強する", kana: "べんきょうする", romaji: "benkyō suru", fr: "étudier", groupe: "irregular", img: "📚" },
    { jp: "働く", kana: "はたらく", romaji: "hataraku", fr: "travailler", groupe: "godan", img: "💼" },
    { jp: "練習する", kana: "れんしゅうする", romaji: "renshū suru", fr: "s'entraîner", groupe: "irregular", img: "🏋️" },
    { jp: "使う", kana: "つかう", romaji: "tsukau", fr: "utiliser", groupe: "godan", img: "🧰" },
    { jp: "選ぶ", kana: "えらぶ", romaji: "erabu", fr: "choisir", groupe: "godan", img: "☑️" },
    { jp: "決める", kana: "きめる", romaji: "kimeru", fr: "décider", groupe: "ichidan", img: "✔️" },
    { jp: "始める", kana: "はじめる", romaji: "hajimeru", fr: "commencer (qqch)", groupe: "ichidan", img: "▶️" },
    { jp: "始まる", kana: "はじまる", romaji: "hajimaru", fr: "commencer (débuter)", groupe: "godan", img: "🎬" },
    { jp: "終わる", kana: "おわる", romaji: "owaru", fr: "finir", groupe: "godan", img: "🏁" },
    { jp: "続ける", kana: "つづける", romaji: "tsuzukeru", fr: "continuer (qqch)", groupe: "ichidan", img: "➡️" },
    { jp: "続く", kana: "つづく", romaji: "tsuzuku", fr: "se poursuivre", groupe: "godan", img: "🔁" },
    { jp: "送る", kana: "おくる", romaji: "okuru", fr: "envoyer", groupe: "godan", img: "📤" },
    { jp: "受ける", kana: "うける", romaji: "ukeru", fr: "recevoir / passer (examen)", groupe: "ichidan", img: "📝" },
    { jp: "調べる", kana: "しらべる", romaji: "shiraberu", fr: "vérifier / rechercher", groupe: "ichidan", img: "🔍" },
    { jp: "集める", kana: "あつめる", romaji: "atsumeru", fr: "collecter", groupe: "ichidan", img: "🗂️" },
    { jp: "直す", kana: "なおす", romaji: "naosu", fr: "réparer / corriger", groupe: "godan", img: "🔧" },
    { jp: "手伝う", kana: "てつだう", romaji: "tetsudau", fr: "aider (donner un coup de main)", groupe: "godan", img: "🤝" },
    { jp: "待つ", kana: "まつ", romaji: "matsu", fr: "attendre", groupe: "godan", img: "⏳" },
    { jp: "探す", kana: "さがす", romaji: "sagasu", fr: "chercher", groupe: "godan", img: "🔎" },
    { jp: "試す", kana: "ためす", romaji: "tamesu", fr: "essayer", groupe: "godan", img: "🧪" },
    { jp: "確認する", kana: "かくにんする", romaji: "kakunin suru", fr: "confirmer / vérifier", groupe: "irregular", img: "✔️" },
    { jp: "説明する", kana: "せつめいする", romaji: "setsumei suru", fr: "expliquer", groupe: "irregular", img: "🗒️" },
    { jp: "紹介する", kana: "しょうかいする", romaji: "shōkai suru", fr: "présenter (qqn)", groupe: "irregular", img: "🤝" },
    { jp: "準備する", kana: "じゅんびする", romaji: "junbi suru", fr: "préparer", groupe: "irregular", img: "🧳" },
    { jp: "頑張る", kana: "がんばる", romaji: "ganbaru", fr: "faire de son mieux", groupe: "godan", img: "💪" },
    { jp: "諦める", kana: "あきらめる", romaji: "akirameru", fr: "abandonner", groupe: "ichidan", img: "🏳️" },
    { jp: "成功する", kana: "せいこうする", romaji: "seikō suru", fr: "réussir", groupe: "irregular", img: "🏆" },
    { jp: "失敗する", kana: "しっぱいする", romaji: "shippai suru", fr: "échouer", groupe: "irregular", img: "❌" },
    { jp: "できる", kana: "できる", romaji: "dekiru", fr: "pouvoir / être capable", groupe: "ichidan", img: "🆗" },

    // --- Donner, prendre, objets ---
    { jp: "売る", kana: "うる", romaji: "uru", fr: "vendre", groupe: "godan", img: "🏷️" },
    { jp: "払う", kana: "はらう", romaji: "harau", fr: "payer", groupe: "godan", img: "💳" },
    { jp: "借りる", kana: "かりる", romaji: "kariru", fr: "emprunter", groupe: "ichidan", img: "🙇" },
    { jp: "貸す", kana: "かす", romaji: "kasu", fr: "prêter", groupe: "godan", img: "🤲" },
    { jp: "返す", kana: "かえす", romaji: "kaesu", fr: "rendre (restituer)", groupe: "godan", img: "🔙" },
    { jp: "持つ", kana: "もつ", romaji: "motsu", fr: "tenir / avoir", groupe: "godan", img: "✊" },
    { jp: "取る", kana: "とる", romaji: "toru", fr: "prendre / saisir", groupe: "godan", img: "🫳" },
    { jp: "渡す", kana: "わたす", romaji: "watasu", fr: "remettre / passer", groupe: "godan", img: "🤝" },
    { jp: "もらう", kana: "もらう", romaji: "morau", fr: "recevoir", groupe: "godan", img: "🎁" },
    { jp: "あげる", kana: "あげる", romaji: "ageru", fr: "donner (à autrui)", groupe: "ichidan", img: "🎀" },
    { jp: "くれる", kana: "くれる", romaji: "kureru", fr: "donner (à moi)", groupe: "ichidan", img: "🙌" },
    { jp: "拾う", kana: "ひろう", romaji: "hirou", fr: "ramasser", groupe: "godan", img: "🫴" },
    { jp: "捨てる", kana: "すてる", romaji: "suteru", fr: "jeter", groupe: "ichidan", img: "🗑️" },
    { jp: "置く", kana: "おく", romaji: "oku", fr: "poser", groupe: "godan", img: "📥" },
    { jp: "入れる", kana: "いれる", romaji: "ireru", fr: "mettre dedans", groupe: "ichidan", img: "📦" },
    { jp: "出す", kana: "だす", romaji: "dasu", fr: "sortir (qqch)", groupe: "godan", img: "📤" },
    { jp: "開ける", kana: "あける", romaji: "akeru", fr: "ouvrir (qqch)", groupe: "ichidan", img: "🔓" },
    { jp: "開く", kana: "ひらく", romaji: "hiraku", fr: "s'ouvrir / ouvrir", groupe: "godan", img: "📂" },
    { jp: "閉める", kana: "しめる", romaji: "shimeru", fr: "fermer (qqch)", groupe: "ichidan", img: "🔒" },
    { jp: "閉まる", kana: "しまる", romaji: "shimaru", fr: "se fermer", groupe: "godan", img: "🚪" },
    { jp: "押す", kana: "おす", romaji: "osu", fr: "pousser / appuyer", groupe: "godan", img: "👉" },
    { jp: "引く", kana: "ひく", romaji: "hiku", fr: "tirer", groupe: "godan", img: "👈" },
    { jp: "回す", kana: "まわす", romaji: "mawasu", fr: "faire tourner", groupe: "godan", img: "🔄" },
    { jp: "運ぶ", kana: "はこぶ", romaji: "hakobu", fr: "transporter", groupe: "godan", img: "📦" },
    { jp: "投げる", kana: "なげる", romaji: "nageru", fr: "lancer", groupe: "ichidan", img: "🤾" },
    { jp: "打つ", kana: "うつ", romaji: "utsu", fr: "frapper", groupe: "godan", img: "👊" },
    { jp: "落ちる", kana: "おちる", romaji: "ochiru", fr: "tomber", groupe: "ichidan", img: "🍂" },
    { jp: "落とす", kana: "おとす", romaji: "otosu", fr: "faire tomber", groupe: "godan", img: "⬇️" },
    { jp: "見つける", kana: "みつける", romaji: "mitsukeru", fr: "trouver", groupe: "ichidan", img: "🔦" },
    { jp: "見つかる", kana: "みつかる", romaji: "mitsukaru", fr: "être trouvé", groupe: "godan", img: "✨" },

    // --- Émotions & états ---
    { jp: "好む", kana: "このむ", romaji: "konomu", fr: "préférer", groupe: "godan", img: "💗" },
    { jp: "愛する", kana: "あいする", romaji: "ai suru", fr: "aimer (d'amour)", groupe: "irregular", img: "❤️" },
    { jp: "笑う", kana: "わらう", romaji: "warau", fr: "rire", groupe: "godan", img: "😄" },
    { jp: "泣く", kana: "なく", romaji: "naku", fr: "pleurer", groupe: "godan", img: "😢" },
    { jp: "怒る", kana: "おこる", romaji: "okoru", fr: "se fâcher", groupe: "godan", img: "😠" },
    { jp: "驚く", kana: "おどろく", romaji: "odoroku", fr: "être surpris", groupe: "godan", img: "😲" },
    { jp: "喜ぶ", kana: "よろこぶ", romaji: "yorokobu", fr: "se réjouir", groupe: "godan", img: "🥳" },
    { jp: "困る", kana: "こまる", romaji: "komaru", fr: "être embêté", groupe: "godan", img: "😟" },
    { jp: "心配する", kana: "しんぱいする", romaji: "shinpai suru", fr: "s'inquiéter", groupe: "irregular", img: "😰" },
    { jp: "楽しむ", kana: "たのしむ", romaji: "tanoshimu", fr: "profiter / s'amuser", groupe: "godan", img: "🎉" },
    { jp: "疲れる", kana: "つかれる", romaji: "tsukareru", fr: "se fatiguer", groupe: "ichidan", img: "😩" },
    { jp: "慣れる", kana: "なれる", romaji: "nareru", fr: "s'habituer", groupe: "ichidan", img: "🔁" },
    { jp: "感謝する", kana: "かんしゃする", romaji: "kansha suru", fr: "remercier", groupe: "irregular", img: "🙏" },
    { jp: "期待する", kana: "きたいする", romaji: "kitai suru", fr: "espérer / attendre (de)", groupe: "irregular", img: "🤞" },
    { jp: "遊ぶ", kana: "あそぶ", romaji: "asobu", fr: "jouer / s'amuser", groupe: "godan", img: "🎮" },
    { jp: "歌う", kana: "うたう", romaji: "utau", fr: "chanter", groupe: "godan", img: "🎤" },
    { jp: "踊る", kana: "おどる", romaji: "odoru", fr: "danser", groupe: "godan", img: "💃" },

    // --- Existence & changement ---
    { jp: "ある", kana: "ある", romaji: "aru", fr: "il y a (objets)", groupe: "godan", img: "📦" },
    { jp: "いる", kana: "いる", romaji: "iru", fr: "il y a (êtres) / être présent", groupe: "ichidan", img: "🧍" },
    { jp: "なる", kana: "なる", romaji: "naru", fr: "devenir", groupe: "godan", img: "🌱" },
    { jp: "変わる", kana: "かわる", romaji: "kawaru", fr: "changer (intransitif)", groupe: "godan", img: "🔀" },
    { jp: "変える", kana: "かえる", romaji: "kaeru", fr: "changer (transitif)", groupe: "ichidan", img: "🔧" },
    { jp: "増える", kana: "ふえる", romaji: "fueru", fr: "augmenter (intr.)", groupe: "ichidan", img: "📈" },
    { jp: "減る", kana: "へる", romaji: "heru", fr: "diminuer (intr.)", groupe: "godan", img: "📉" },
    { jp: "上がる", kana: "あがる", romaji: "agaru", fr: "monter (intr.)", groupe: "godan", img: "⬆️" },
    { jp: "下がる", kana: "さがる", romaji: "sagaru", fr: "baisser (intr.)", groupe: "godan", img: "⬇️" },
    { jp: "生きる", kana: "いきる", romaji: "ikiru", fr: "vivre", groupe: "ichidan", img: "🌿" },
    { jp: "死ぬ", kana: "しぬ", romaji: "shinu", fr: "mourir", groupe: "godan", img: "🥀" },
    { jp: "生まれる", kana: "うまれる", romaji: "umareru", fr: "naître", groupe: "ichidan", img: "👶" },
    { jp: "育てる", kana: "そだてる", romaji: "sodateru", fr: "élever (qqn)", groupe: "ichidan", img: "🪴" },
    { jp: "育つ", kana: "そだつ", romaji: "sodatsu", fr: "grandir", groupe: "godan", img: "🌱" },
    { jp: "咲く", kana: "さく", romaji: "saku", fr: "fleurir", groupe: "godan", img: "🌸" },
    { jp: "光る", kana: "ひかる", romaji: "hikaru", fr: "briller", groupe: "godan", img: "✨" },
    { jp: "消える", kana: "きえる", romaji: "kieru", fr: "disparaître / s'éteindre", groupe: "ichidan", img: "💨" },
    { jp: "消す", kana: "けす", romaji: "kesu", fr: "éteindre / effacer", groupe: "godan", img: "🧯" },
    { jp: "点く", kana: "つく", romaji: "tsuku", fr: "s'allumer", groupe: "godan", img: "💡" },
    { jp: "壊れる", kana: "こわれる", romaji: "kowareru", fr: "se casser", groupe: "ichidan", img: "💔" },
    { jp: "壊す", kana: "こわす", romaji: "kowasu", fr: "casser", groupe: "godan", img: "🔨" },
    { jp: "決まる", kana: "きまる", romaji: "kimaru", fr: "être décidé", groupe: "godan", img: "✅" },

    // --- Corps, santé, soin ---
    { jp: "太る", kana: "ふとる", romaji: "futoru", fr: "grossir", groupe: "godan", img: "🍔" },
    { jp: "痩せる", kana: "やせる", romaji: "yaseru", fr: "maigrir", groupe: "ichidan", img: "🥗" },
    { jp: "治る", kana: "なおる", romaji: "naoru", fr: "guérir", groupe: "godan", img: "💊" },
    { jp: "怪我する", kana: "けがする", romaji: "kega suru", fr: "se blesser", groupe: "irregular", img: "🤕" },
    { jp: "眠る", kana: "ねむる", romaji: "nemuru", fr: "sommeiller", groupe: "godan", img: "💤" },
    { jp: "覚める", kana: "さめる", romaji: "sameru", fr: "se réveiller", groupe: "ichidan", img: "😳" },
    { jp: "起こす", kana: "おこす", romaji: "okosu", fr: "réveiller (qqn)", groupe: "godan", img: "⏰" },

    // --- Interactions & vie sociale ---
    { jp: "会う", kana: "あう", romaji: "au", fr: "rencontrer", groupe: "godan", img: "🤝" },
    { jp: "別れる", kana: "わかれる", romaji: "wakareru", fr: "se séparer", groupe: "ichidan", img: "👋" },
    { jp: "結婚する", kana: "けっこんする", romaji: "kekkon suru", fr: "se marier", groupe: "irregular", img: "💍" },
    { jp: "迎える", kana: "むかえる", romaji: "mukaeru", fr: "accueillir", groupe: "ichidan", img: "🙌" },
    { jp: "訪ねる", kana: "たずねる", romaji: "tazuneru", fr: "rendre visite", groupe: "ichidan", img: "🚪" },
    { jp: "招く", kana: "まねく", romaji: "maneku", fr: "inviter", groupe: "godan", img: "💌" },
    { jp: "助ける", kana: "たすける", romaji: "tasukeru", fr: "aider / sauver", groupe: "ichidan", img: "🆘" },
    { jp: "守る", kana: "まもる", romaji: "mamoru", fr: "protéger / respecter", groupe: "godan", img: "🛡️" },
    { jp: "約束する", kana: "やくそくする", romaji: "yakusoku suru", fr: "promettre", groupe: "irregular", img: "🤙" },
    { jp: "賛成する", kana: "さんせいする", romaji: "sansei suru", fr: "être d'accord", groupe: "irregular", img: "👍" },
    { jp: "反対する", kana: "はんたいする", romaji: "hantai suru", fr: "s'opposer", groupe: "irregular", img: "👎" },
    { jp: "参加する", kana: "さんかする", romaji: "sanka suru", fr: "participer", groupe: "irregular", img: "🙋" },
    { jp: "案内する", kana: "あんないする", romaji: "annai suru", fr: "guider", groupe: "irregular", img: "🧭" },

    // --- Activités & divers ---
    { jp: "料理する", kana: "りょうりする", romaji: "ryōri suru", fr: "cuisiner", groupe: "irregular", img: "🍳" },
    { jp: "掃除する", kana: "そうじする", romaji: "sōji suru", fr: "nettoyer", groupe: "irregular", img: "🧹" },
    { jp: "洗濯する", kana: "せんたくする", romaji: "sentaku suru", fr: "laver le linge", groupe: "irregular", img: "🧺" },
    { jp: "運転する", kana: "うんてんする", romaji: "unten suru", fr: "conduire", groupe: "irregular", img: "🚗" },
    { jp: "旅行する", kana: "りょこうする", romaji: "ryokō suru", fr: "voyager", groupe: "irregular", img: "🧳" },
    { jp: "散歩する", kana: "さんぽする", romaji: "sanpo suru", fr: "se promener", groupe: "irregular", img: "🚶" },
    { jp: "電話する", kana: "でんわする", romaji: "denwa suru", fr: "téléphoner", groupe: "irregular", img: "📞" },
    { jp: "予約する", kana: "よやくする", romaji: "yoyaku suru", fr: "réserver", groupe: "irregular", img: "📅" },
    { jp: "撮る", kana: "とる", romaji: "toru", fr: "prendre (une photo)", groupe: "godan", img: "📷" },
    { jp: "泊まる", kana: "とまる", romaji: "tomaru", fr: "loger (passer la nuit)", groupe: "godan", img: "🏨" },
    { jp: "止める", kana: "とめる", romaji: "tomeru", fr: "arrêter (qqch)", groupe: "ichidan", img: "✋" },
    { jp: "建てる", kana: "たてる", romaji: "tateru", fr: "construire", groupe: "ichidan", img: "🏗️" },
    { jp: "比べる", kana: "くらべる", romaji: "kuraberu", fr: "comparer", groupe: "ichidan", img: "⚖️" },
    { jp: "数える", kana: "かぞえる", romaji: "kazoeru", fr: "compter", groupe: "ichidan", img: "🔢" },
    { jp: "計る", kana: "はかる", romaji: "hakaru", fr: "mesurer", groupe: "godan", img: "📏" },
    { jp: "要る", kana: "いる", romaji: "iru", fr: "avoir besoin de", groupe: "godan", img: "🙏" },
    { jp: "破る", kana: "やぶる", romaji: "yaburu", fr: "déchirer / enfreindre", groupe: "godan", img: "📄" },
    { jp: "動かす", kana: "うごかす", romaji: "ugokasu", fr: "faire bouger", groupe: "godan", img: "🔀" },
    { jp: "直る", kana: "なおる", romaji: "naoru", fr: "être réparé", groupe: "godan", img: "🔧" },
    { jp: "生活する", kana: "せいかつする", romaji: "seikatsu suru", fr: "vivre (au quotidien)", groupe: "irregular", img: "🏠" },
    { jp: "質問する", kana: "しつもんする", romaji: "shitsumon suru", fr: "poser une question", groupe: "irregular", img: "❓" },
    { jp: "返事する", kana: "へんじする", romaji: "henji suru", fr: "répondre (à un message)", groupe: "irregular", img: "💬" },
    { jp: "注文する", kana: "ちゅうもんする", romaji: "chūmon suru", fr: "commander (au resto)", groupe: "irregular", img: "📝" },
    { jp: "遅れる", kana: "おくれる", romaji: "okureru", fr: "être en retard", groupe: "ichidan", img: "⏰" },
    { jp: "間に合う", kana: "まにあう", romaji: "ma ni au", fr: "arriver à temps", groupe: "godan", img: "🕐" },
    { jp: "眺める", kana: "ながめる", romaji: "nagameru", fr: "contempler", groupe: "ichidan", img: "🌄" },
    { jp: "並ぶ", kana: "ならぶ", romaji: "narabu", fr: "faire la queue / s'aligner", groupe: "godan", img: "🚶‍♂️" },
    { jp: "並べる", kana: "ならべる", romaji: "naraberu", fr: "aligner / disposer", groupe: "ichidan", img: "📚" },
    { jp: "触る", kana: "さわる", romaji: "sawaru", fr: "toucher", groupe: "godan", img: "👆" },
    { jp: "叩く", kana: "たたく", romaji: "tataku", fr: "taper / frapper", groupe: "godan", img: "🥁" },
    { jp: "踏む", kana: "ふむ", romaji: "fumu", fr: "marcher sur / piétiner", groupe: "godan", img: "👣" },
    { jp: "投票する", kana: "とうひょうする", romaji: "tōhyō suru", fr: "voter", groupe: "irregular", img: "🗳️" },
    { jp: "覚悟する", kana: "かくごする", romaji: "kakugo suru", fr: "se préparer (mentalement)", groupe: "irregular", img: "😤" },
    { jp: "祈る", kana: "いのる", romaji: "inoru", fr: "prier", groupe: "godan", img: "🙏" },
    { jp: "願う", kana: "ねがう", romaji: "negau", fr: "souhaiter", groupe: "godan", img: "🌠" },
    { jp: "決心する", kana: "けっしんする", romaji: "kesshin suru", fr: "se décider (fermement)", groupe: "irregular", img: "💪" },
    { jp: "利用する", kana: "りようする", romaji: "riyō suru", fr: "utiliser (un service)", groupe: "irregular", img: "🎫" },
    { jp: "経験する", kana: "けいけんする", romaji: "keiken suru", fr: "vivre une expérience", groupe: "irregular", img: "🌟" },
    { jp: "運動する", kana: "うんどうする", romaji: "undō suru", fr: "faire du sport", groupe: "irregular", img: "🏃" },
    { jp: "食事する", kana: "しょくじする", romaji: "shokuji suru", fr: "prendre un repas", groupe: "irregular", img: "🍚" },
    { jp: "話し合う", kana: "はなしあう", romaji: "hanashiau", fr: "discuter ensemble", groupe: "godan", img: "🗣️" },
    { jp: "気づく", kana: "きづく", romaji: "kizuku", fr: "s'apercevoir", groupe: "godan", img: "💡" },
    { jp: "飼う", kana: "かう", romaji: "kau", fr: "élever (un animal)", groupe: "godan", img: "🐕" },
    { jp: "植える", kana: "うえる", romaji: "ueru", fr: "planter", groupe: "ichidan", img: "🌱" },
    { jp: "登る", kana: "のぼる", romaji: "noboru", fr: "gravir / monter", groupe: "godan", img: "🧗" },
    { jp: "泳ぎ回る", kana: "およぎまわる", romaji: "oyogimawaru", fr: "nager partout", groupe: "godan", img: "🐟" },
    { jp: "空く", kana: "あく", romaji: "aku", fr: "se vider / se libérer", groupe: "godan", img: "🪑" },
    { jp: "混む", kana: "こむ", romaji: "komu", fr: "être bondé", groupe: "godan", img: "🚃" },
    { jp: "浮かぶ", kana: "うかぶ", romaji: "ukabu", fr: "flotter / venir à l'esprit", groupe: "godan", img: "🎈" },
    { jp: "沈む", kana: "しずむ", romaji: "shizumu", fr: "couler / se coucher (soleil)", groupe: "godan", img: "🌅" },
    { jp: "冷える", kana: "ひえる", romaji: "hieru", fr: "refroidir (intr.)", groupe: "ichidan", img: "🧊" },
    { jp: "温める", kana: "あたためる", romaji: "atatameru", fr: "réchauffer", groupe: "ichidan", img: "🔥" },
    { jp: "冷やす", kana: "ひやす", romaji: "hiyasu", fr: "refroidir (tr.)", groupe: "godan", img: "❄️" },
  ];

  // Garde-fou : on ne conjugue que les entrées complètes.
  const CLEAN = BASE.filter((v) => v.jp && v.kana && v.romaji && v.fr);

  const VERBES = CLEAN.map(conjuguer);

  if (typeof window !== "undefined") window.VERBES = VERBES;
  if (typeof module !== "undefined" && module.exports) module.exports = { VERBES, conjuguer };
})();
