/**
 * couleurs.js — Axe « Couleurs » de l'agent d'apprentissage du japonais
 * --------------------------------------------------------------------
 * Chaque couleur est présentée avec une pastille colorée (hex), le
 * japonais, le kana, le rōmaji, le français et un exemple d'utilisation.
 *   hex : couleur de la pastille (ou "rainbow" / "transparent" pour les cas
 *         spéciaux, gérés par app.js).
 *
 * Ce fichier expose la variable globale COULEURS.
 */
const COULEURS = [
  {
    categorie: "Couleurs de base",
    icon: "🎨",
    desc: "Les couleurs indispensables.",
    items: [
      { jp: "赤", kana: "あか", romaji: "aka", fr: "rouge", hex: "#E53935", exemple: { jp: "赤いりんご。", romaji: "Akai ringo.", fr: "Une pomme rouge." } },
      { jp: "青", kana: "あお", romaji: "ao", fr: "bleu", hex: "#1E88E5", exemple: { jp: "青い空。", romaji: "Aoi sora.", fr: "Un ciel bleu." } },
      { jp: "黄色", kana: "きいろ", romaji: "kiiro", fr: "jaune", hex: "#FDD835", exemple: { jp: "黄色い花。", romaji: "Kiiroi hana.", fr: "Une fleur jaune." } },
      { jp: "緑", kana: "みどり", romaji: "midori", fr: "vert", hex: "#43A047", exemple: { jp: "緑の葉。", romaji: "Midori no ha.", fr: "Une feuille verte." } },
      { jp: "白", kana: "しろ", romaji: "shiro", fr: "blanc", hex: "#FAFAFA", exemple: { jp: "白い雪。", romaji: "Shiroi yuki.", fr: "De la neige blanche." } },
      { jp: "黒", kana: "くろ", romaji: "kuro", fr: "noir", hex: "#212121", exemple: { jp: "黒い猫。", romaji: "Kuroi neko.", fr: "Un chat noir." } },
      { jp: "茶色", kana: "ちゃいろ", romaji: "chairo", fr: "marron", hex: "#6D4C41", exemple: { jp: "茶色い犬。", romaji: "Chairoi inu.", fr: "Un chien marron." } },
      { jp: "紫", kana: "むらさき", romaji: "murasaki", fr: "violet", hex: "#8E24AA", exemple: { jp: "紫の花。", romaji: "Murasaki no hana.", fr: "Une fleur violette." } },
      { jp: "ピンク", kana: "ピンク", romaji: "pinku", fr: "rose", hex: "#EC407A", exemple: { jp: "ピンクのドレス。", romaji: "Pinku no doresu.", fr: "Une robe rose." } },
      { jp: "オレンジ", kana: "オレンジ", romaji: "orenji", fr: "orange", hex: "#FB8C00", exemple: { jp: "オレンジのジュース。", romaji: "Orenji no jūsu.", fr: "Du jus d'orange." } },
      { jp: "灰色", kana: "はいいろ", romaji: "haiiro", fr: "gris", hex: "#9E9E9E", exemple: { jp: "灰色の雲。", romaji: "Haiiro no kumo.", fr: "Un nuage gris." } },
      { jp: "金色", kana: "きんいろ", romaji: "kin'iro", fr: "doré", hex: "#D4AF37", exemple: { jp: "金色の指輪。", romaji: "Kin'iro no yubiwa.", fr: "Une bague dorée." } },
      { jp: "銀色", kana: "ぎんいろ", romaji: "gin'iro", fr: "argenté", hex: "#B0BEC5", exemple: { jp: "銀色のスプーン。", romaji: "Gin'iro no supūn.", fr: "Une cuillère argentée." } },
    ],
  },
  {
    categorie: "Nuances & variations",
    icon: "🌈",
    desc: "Des teintes plus précises.",
    items: [
      { jp: "水色", kana: "みずいろ", romaji: "mizuiro", fr: "bleu clair", hex: "#4FC3F7", exemple: { jp: "水色のシャツ。", romaji: "Mizuiro no shatsu.", fr: "Une chemise bleu clair." } },
      { jp: "空色", kana: "そらいろ", romaji: "sorairo", fr: "bleu ciel", hex: "#81D4FA", exemple: { jp: "空色の傘。", romaji: "Sorairo no kasa.", fr: "Un parapluie bleu ciel." } },
      { jp: "紺色", kana: "こんいろ", romaji: "kon'iro", fr: "bleu marine", hex: "#1A237E", exemple: { jp: "紺色のスーツ。", romaji: "Kon'iro no sūtsu.", fr: "Un costume bleu marine." } },
      { jp: "黄緑", kana: "きみどり", romaji: "kimidori", fr: "vert clair", hex: "#9CCC65", exemple: { jp: "黄緑の葉。", romaji: "Kimidori no ha.", fr: "Une feuille vert clair." } },
      { jp: "深緑", kana: "ふかみどり", romaji: "fukamidori", fr: "vert foncé", hex: "#1B5E20", exemple: { jp: "深緑の森。", romaji: "Fukamidori no mori.", fr: "Une forêt vert foncé." } },
      { jp: "桃色", kana: "ももいろ", romaji: "momoiro", fr: "rose pêche", hex: "#F48FB1", exemple: { jp: "桃色の花。", romaji: "Momoiro no hana.", fr: "Une fleur rose pêche." } },
      { jp: "えんじ色", kana: "えんじいろ", romaji: "enjiiro", fr: "bordeaux", hex: "#8C2E3B", exemple: { jp: "えんじ色のセーター。", romaji: "Enjiiro no sētā.", fr: "Un pull bordeaux." } },
      { jp: "ベージュ", kana: "ベージュ", romaji: "bēju", fr: "beige", hex: "#D7C4A1", exemple: { jp: "ベージュのコート。", romaji: "Bēju no kōto.", fr: "Un manteau beige." } },
      { jp: "クリーム色", kana: "クリームいろ", romaji: "kurīmuiro", fr: "crème", hex: "#FFF3C4", exemple: { jp: "クリーム色の壁。", romaji: "Kurīmuiro no kabe.", fr: "Un mur couleur crème." } },
      { jp: "肌色", kana: "はだいろ", romaji: "hadairo", fr: "couleur chair", hex: "#F6C9A0", exemple: { jp: "肌色の紙。", romaji: "Hadairo no kami.", fr: "Du papier couleur chair." } },
    ],
  },
  {
    categorie: "Adjectifs de couleur (い)",
    icon: "🏷️",
    desc: "Les couleurs qui se conjuguent comme des adjectifs en -い.",
    items: [
      { jp: "赤い", kana: "あかい", romaji: "akai", fr: "rouge (adjectif)", hex: "#E53935", exemple: { jp: "赤い車。", romaji: "Akai kuruma.", fr: "Une voiture rouge." } },
      { jp: "青い", kana: "あおい", romaji: "aoi", fr: "bleu (adjectif)", hex: "#1E88E5", exemple: { jp: "青い海。", romaji: "Aoi umi.", fr: "Une mer bleue." } },
      { jp: "白い", kana: "しろい", romaji: "shiroi", fr: "blanc (adjectif)", hex: "#FAFAFA", exemple: { jp: "白いシャツ。", romaji: "Shiroi shatsu.", fr: "Une chemise blanche." } },
      { jp: "黒い", kana: "くろい", romaji: "kuroi", fr: "noir (adjectif)", hex: "#212121", exemple: { jp: "黒い髪。", romaji: "Kuroi kami.", fr: "Des cheveux noirs." } },
      { jp: "黄色い", kana: "きいろい", romaji: "kiiroi", fr: "jaune (adjectif)", hex: "#FDD835", exemple: { jp: "黄色いバナナ。", romaji: "Kiiroi banana.", fr: "Une banane jaune." } },
      { jp: "茶色い", kana: "ちゃいろい", romaji: "chairoi", fr: "brun (adjectif)", hex: "#6D4C41", exemple: { jp: "茶色い靴。", romaji: "Chairoi kutsu.", fr: "Des chaussures marron." } },
    ],
  },
  {
    categorie: "Cas particuliers",
    icon: "✨",
    desc: "Multicolore, transparent…",
    items: [
      { jp: "虹色", kana: "にじいろ", romaji: "nijiiro", fr: "couleur arc-en-ciel", hex: "rainbow", exemple: { jp: "虹は七色です。", romaji: "Niji wa nanairo desu.", fr: "L'arc-en-ciel a sept couleurs." } },
      { jp: "カラフル", kana: "カラフル", romaji: "karafuru", fr: "coloré / bariolé", hex: "rainbow", exemple: { jp: "カラフルな絵。", romaji: "Karafuru na e.", fr: "Un dessin coloré." } },
      { jp: "透明", kana: "とうめい", romaji: "tōmei", fr: "transparent", hex: "transparent", exemple: { jp: "透明なガラス。", romaji: "Tōmei na garasu.", fr: "Du verre transparent." } },
    ],
  },
];

/* Exposé global */
if (typeof window !== "undefined") window.COULEURS = COULEURS;
