/**
 * app.js — Logique de l'agent d'apprentissage du japonais
 * -------------------------------------------------------
 * Gère : navigation par onglets, affichage du vocabulaire/verbes/grammaire,
 * mode entraînement (flashcards + quiz), synthèse vocale japonaise et thème.
 */
(function () {
  "use strict";

  const { VOCABULAIRE, VERBES, GROUPES_VERBES, GRAMMAIRE, QUESTIONS, KANJI } = window.DATA;

  /* ---------- Utilitaires ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* ---------- Synthèse vocale japonaise (facultative) ---------- */
  const speak = (text) => {
    try {
      if (!("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ja-JP";
      u.rate = 0.85;
      const jaVoice = window.speechSynthesis
        .getVoices()
        .find((v) => v.lang && v.lang.toLowerCase().startsWith("ja"));
      if (jaVoice) u.voice = jaVoice;
      window.speechSynthesis.speak(u);
    } catch (_) {
      /* silencieux : la lecture audio est un bonus, pas une nécessité */
    }
  };
  if ("speechSynthesis" in window) {
    // Précharge la liste des voix (certains navigateurs la remplissent tardivement)
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }
  const speakBtn = (text) =>
    `<button class="speak" data-speak="${escapeHtml(text)}" aria-label="Écouter">🔊 Écouter</button>`;

  /* ================================================================
   * NAVIGATION
   * ================================================================ */
  function initNav() {
    $$("nav button").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("nav button").forEach((b) => b.classList.remove("active"));
        $$(".section").forEach((s) => s.classList.remove("active"));
        btn.classList.add("active");
        $("#" + btn.dataset.target).classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  /* ================================================================
   * VOCABULAIRE
   * ================================================================ */
  function initVocabulaire() {
    const chips = $("#vocab-chips");
    const grid = $("#vocab-grid");

    const renderTheme = (theme) => {
      grid.innerHTML = "";
      theme.mots.forEach((m) => {
        const card = el("div", "card");
        card.innerHTML = `
          <div class="img">${m.img}</div>
          <div class="jp">${escapeHtml(m.jp)}</div>
          <div class="kana">${escapeHtml(m.kana)}</div>
          <div class="romaji">${escapeHtml(m.romaji)}</div>
          <div class="fr">${escapeHtml(m.fr)}</div>
          ${speakBtn(m.jp)}
        `;
        grid.appendChild(card);
      });
    };

    VOCABULAIRE.forEach((theme, i) => {
      const chip = el("button", i === 0 ? "active" : "", `${theme.icon} ${theme.theme}`);
      chip.addEventListener("click", () => {
        $$("#vocab-chips button").forEach((b) => b.classList.remove("active"));
        chip.classList.add("active");
        renderTheme(theme);
      });
      chips.appendChild(chip);
    });

    renderTheme(VOCABULAIRE[0]);
  }

  /* ================================================================
   * VERBES
   * ================================================================ */
  function initVerbes() {
    const filters = $("#verb-filters");
    const list = $("#verb-list");
    const search = $("#verb-search");
    const count = $("#verb-count");
    let currentGroup = "all";

    const render = (groupe) => {
      currentGroup = groupe;
      list.innerHTML = "";
      const q = (search && search.value ? search.value : "").trim().toLowerCase();
      let verbs = groupe === "all" ? VERBES : VERBES.filter((v) => v.groupe === groupe);
      if (q) {
        verbs = verbs.filter(
          (v) =>
            v.fr.toLowerCase().includes(q) ||
            v.dictionnaire.romaji.toLowerCase().includes(q) ||
            v.dictionnaire.jp.includes(q)
        );
      }
      if (count) count.textContent = `${verbs.length} verbe${verbs.length > 1 ? "s" : ""}`;
      verbs.forEach((v) => {
        const g = GROUPES_VERBES[v.groupe];
        const card = el("div", "verb-card");
        const row = (label, form) => `
          <tr>
            <th>${label}</th>
            <td>
              <span class="jp">${escapeHtml(form.jp)}</span>
              <span class="romaji"> — ${escapeHtml(form.romaji)}</span>
              ${speakBtn(form.jp)}
            </td>
          </tr>`;
        const exemple = v.exemple
          ? `<div class="verb-example">
               <div class="jp">${escapeHtml(v.exemple.jp)}</div>
               <div class="romaji">${escapeHtml(v.exemple.romaji)}</div>
               <div class="fr">${escapeHtml(v.exemple.fr)}</div>
               ${speakBtn(v.exemple.jp)}
             </div>`
          : "";
        card.innerHTML = `
          <div class="verb-head">
            <span class="img">${v.img}</span>
            <span class="fr">${escapeHtml(v.fr)}</span>
            <span class="badge">${escapeHtml(g.nom)}</span>
          </div>
          <table class="conj-table">
            ${row("Dictionnaire", v.dictionnaire)}
            ${row("Présent poli (~ます)", v.present)}
            ${row("Négatif (~ません)", v.negatif)}
            ${row("Passé (~ました)", v.passe)}
            ${row("Forme en て", v.te)}
          </table>
          ${exemple}
        `;
        list.appendChild(card);
      });
      if (!verbs.length) {
        list.appendChild(el("p", "empty-msg", "Aucun verbe ne correspond à la recherche."));
      }
    };

    const makeFilter = (key, label, active) => {
      const b = el("button", "btn" + (active ? " active" : ""), label);
      b.addEventListener("click", () => {
        $$("#verb-filters button").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        render(key);
      });
      return b;
    };

    filters.appendChild(makeFilter("all", "Tous", true));
    Object.entries(GROUPES_VERBES).forEach(([key, g]) =>
      filters.appendChild(makeFilter(key, g.nom))
    );

    if (search) search.addEventListener("input", () => render(currentGroup));

    render("all");
  }

  /* ================================================================
   * GRAMMAIRE
   * ================================================================ */
  function initGrammaire() {
    const container = $("#grammar-list");

    // Titres des niveaux du plan d'apprentissage débutant.
    const NIVEAUX = {
      1: { titre: "Niveau 1 — Les fondations", sous: "Comprendre et former ses premières phrases." },
      2: { titre: "Niveau 2 — Construire des phrases", sous: "Conjuguer, relier les idées et nuancer." },
    };

    const renderLecon = (lecon, numero) => {
      const details = el("details", "lesson");
      const exemples = lecon.exemples
        .map(
          (e) => `
        <div class="ex">
          <div class="jp">${escapeHtml(e.jp)}</div>
          <div class="romaji">${escapeHtml(e.romaji)}</div>
          <div class="fr">${escapeHtml(e.fr)}</div>
          ${speakBtn(e.jp)}
        </div>`
        )
        .join("");
      const paragraphes = lecon.contenu.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
      details.innerHTML = `
        <summary>
          <span class="lesson-num">${numero}</span>
          <span class="icon">${lecon.icon}</span>
          <span>${escapeHtml(lecon.titre)}
            <span class="resume">${escapeHtml(lecon.resume)}</span>
          </span>
          <span class="chev">▶</span>
        </summary>
        <div class="lesson-body">
          ${paragraphes}
          ${exemples}
        </div>
      `;
      return details;
    };

    // Regroupe les leçons par niveau (défaut : niveau 1), en gardant l'ordre.
    Object.keys(NIVEAUX).forEach((niv) => {
      const lecons = GRAMMAIRE.filter((l) => String(l.niveau || 1) === niv);
      if (!lecons.length) return;
      const groupe = el("section", "level-group");
      groupe.innerHTML = `
        <div class="level-head">
          <h3>${escapeHtml(NIVEAUX[niv].titre)}</h3>
          <p>${escapeHtml(NIVEAUX[niv].sous)} · ${lecons.length} leçons</p>
        </div>`;
      lecons.forEach((lecon, i) => groupe.appendChild(renderLecon(lecon, i + 1)));
      container.appendChild(groupe);
    });
  }

  /* ================================================================
   * QUESTIONS — mots interrogatifs et modèles de questions
   * ================================================================ */
  function initQuestions() {
    const container = $("#questions-list");
    if (!container || !QUESTIONS) return;

    QUESTIONS.forEach((cat) => {
      const sec = el("section", "q-group");
      sec.appendChild(
        (() => {
          const head = el("div", "level-head");
          head.innerHTML = `
            <h3>${cat.icon} ${escapeHtml(cat.categorie)}</h3>
            <p>${escapeHtml(cat.desc)} · ${cat.items.length} tournures</p>`;
          return head;
        })()
      );
      const grid = el("div", "q-grid");
      cat.items.forEach((it) => {
        const card = el("div", "q-card");
        card.innerHTML = `
          <div class="q-word">
            <span class="jp">${escapeHtml(it.jp)}</span>
            ${speakBtn(it.jp)}
          </div>
          <div class="kana">${escapeHtml(it.kana)}</div>
          <div class="romaji">${escapeHtml(it.romaji)}</div>
          <div class="fr">${escapeHtml(it.fr)}</div>
          <div class="q-ex">
            <div class="jp">${escapeHtml(it.exemple.jp)}</div>
            <div class="romaji">${escapeHtml(it.exemple.romaji)}</div>
            <div class="fr">${escapeHtml(it.exemple.fr)}</div>
            ${speakBtn(it.exemple.jp)}
          </div>`;
        grid.appendChild(card);
      });
      sec.appendChild(grid);
      container.appendChild(sec);
    });
  }

  /* ================================================================
   * KANJI — les kanji les plus fréquents (avec exemple)
   * ================================================================ */
  function initKanji() {
    const container = $("#kanji-list");
    if (!container || !KANJI) return;
    const search = $("#kanji-search");
    const count = $("#kanji-count");
    const totalKanji = KANJI.reduce((n, c) => n + c.items.length, 0);

    const carte = (k) => {
      const card = el("div", "kanji-card");
      card.innerHTML = `
        <div class="kanji-char">${escapeHtml(k.char)} ${speakBtn(k.char)}</div>
        <div class="kanji-read"><span class="lbl">音</span> ${escapeHtml(k.on)}</div>
        <div class="kanji-read"><span class="lbl">訓</span> ${escapeHtml(k.kun)}</div>
        <div class="kanji-fr">${escapeHtml(k.fr)}</div>
        <div class="kanji-ex">
          <div class="jp">${escapeHtml(k.exemple.jp)}</div>
          <div class="romaji">${escapeHtml(k.exemple.romaji)}</div>
          <div class="fr">${escapeHtml(k.exemple.fr)}</div>
          ${speakBtn(k.exemple.jp)}
        </div>`;
      return card;
    };

    const render = () => {
      container.innerHTML = "";
      const q = (search && search.value ? search.value : "").trim().toLowerCase();
      let shown = 0;
      KANJI.forEach((cat) => {
        const items = q
          ? cat.items.filter(
              (k) =>
                k.char.includes(q) ||
                k.fr.toLowerCase().includes(q) ||
                k.on.toLowerCase().includes(q) ||
                k.kun.toLowerCase().includes(q) ||
                k.exemple.romaji.toLowerCase().includes(q)
            )
          : cat.items;
        if (!items.length) return;
        shown += items.length;
        const sec = el("section", "k-group");
        const head = el("div", "level-head");
        head.innerHTML = `<h3>${cat.icon} ${escapeHtml(cat.categorie)}</h3><p>${escapeHtml(cat.desc)} · ${items.length} kanji</p>`;
        sec.appendChild(head);
        const grid = el("div", "kanji-grid");
        items.forEach((k) => grid.appendChild(carte(k)));
        sec.appendChild(grid);
        container.appendChild(sec);
      });
      if (count) count.textContent = `${shown} kanji sur ${totalKanji}`;
      if (!shown) container.appendChild(el("p", "empty-msg", "Aucun kanji ne correspond à la recherche."));
    };

    if (search) search.addEventListener("input", render);
    render();
  }

  /* ================================================================
   * ENTRAÎNEMENT — jeu de données commun
   * ================================================================ */
  // On rassemble tout le vocabulaire pour les exercices.
  const POOL = VOCABULAIRE.flatMap((t) => t.mots);

  /* ---------- Bascule flashcards / quiz ---------- */
  function initPractice() {
    const cardBtn = $("#mode-flashcards");
    const quizBtn = $("#mode-quiz");
    const flashWrap = $("#flashcards");
    const quizWrap = $("#quiz");

    const show = (which) => {
      const isCards = which === "cards";
      cardBtn.classList.toggle("active", isCards);
      quizBtn.classList.toggle("active", !isCards);
      flashWrap.style.display = isCards ? "block" : "none";
      quizWrap.style.display = isCards ? "none" : "block";
    };
    cardBtn.addEventListener("click", () => show("cards"));
    quizBtn.addEventListener("click", () => {
      show("quiz");
      startQuiz();
    });

    initFlashcards();
    show("cards");
  }

  /* ---------- Flashcards ---------- */
  function initFlashcards() {
    let deck = shuffle(POOL);
    let idx = 0;

    const card = $("#flashcard");
    const faceFront = $("#flash-front");
    const faceBack = $("#flash-back");
    const counter = $("#flash-counter");

    const render = () => {
      const m = deck[idx];
      card.classList.remove("flipped");
      faceFront.innerHTML = `
        <div class="img">${m.img}</div>
        <div class="fr">${escapeHtml(m.fr)}</div>
        <div class="hint">Touchez la carte pour voir le japonais</div>`;
      faceBack.innerHTML = `
        <div class="jp">${escapeHtml(m.jp)}</div>
        <div class="romaji">${escapeHtml(m.romaji)}</div>
        <div class="kana">${escapeHtml(m.kana)}</div>
        ${speakBtn(m.jp)}`;
      counter.textContent = `Carte ${idx + 1} / ${deck.length}`;
    };

    card.addEventListener("click", (e) => {
      // Ne pas retourner la carte si on a cliqué le bouton « Écouter »
      if (e.target.closest(".speak")) return;
      card.classList.toggle("flipped");
    });
    $("#flash-next").addEventListener("click", () => {
      idx = (idx + 1) % deck.length;
      render();
    });
    $("#flash-prev").addEventListener("click", () => {
      idx = (idx - 1 + deck.length) % deck.length;
      render();
    });
    $("#flash-shuffle").addEventListener("click", () => {
      deck = shuffle(POOL);
      idx = 0;
      render();
    });

    render();
  }

  /* ---------- Quiz ---------- */
  let quizState = null;
  function startQuiz() {
    const questions = shuffle(POOL).slice(0, 10);
    quizState = { questions, i: 0, score: 0 };
    renderQuestion();
  }

  function renderQuestion() {
    const box = $("#quiz");
    const { questions, i, score } = quizState;

    if (i >= questions.length) {
      box.innerHTML = `
        <div class="quiz-box">
          <div class="quiz-prompt">
            <div class="img">🎉</div>
            <div class="quiz-score">Score : ${score} / ${questions.length}</div>
            <p>${score >= 8 ? "素晴らしい ! Excellent !" : score >= 5 ? "よくできました ! Bien joué !" : "頑張って ! Continuez à vous entraîner !"}</p>
          </div>
          <button class="btn primary" id="quiz-restart">Recommencer</button>
        </div>`;
      $("#quiz-restart").addEventListener("click", startQuiz);
      return;
    }

    const q = questions[i];
    // On demande la traduction française d'un mot affiché en japonais.
    // On choisit 3 distracteurs dont la traduction est distincte entre elles
    // et différente de la bonne réponse (évite les options en double).
    const wrong = [];
    const vues = new Set([q.fr]);
    for (const m of shuffle(POOL)) {
      if (vues.has(m.fr)) continue;
      vues.add(m.fr);
      wrong.push(m);
      if (wrong.length === 3) break;
    }
    const options = shuffle([q, ...wrong]);

    box.innerHTML = `
      <div class="quiz-box">
        <div class="quiz-progress">Question ${i + 1} / ${questions.length} — Score : ${score}</div>
        <div class="quiz-prompt">
          <div class="img">${q.img}</div>
          <div class="jp">${escapeHtml(q.jp)}</div>
          <div class="romaji">${escapeHtml(q.romaji)}</div>
          ${speakBtn(q.jp)}
        </div>
        <div class="quiz-options"></div>
      </div>`;

    const optWrap = $(".quiz-options", box);
    options.forEach((opt) => {
      const b = el("button", "", escapeHtml(opt.fr));
      b.addEventListener("click", () => handleAnswer(b, opt, q, optWrap));
      optWrap.appendChild(b);
    });
  }

  function handleAnswer(button, chosen, correct, optWrap) {
    $$("button", optWrap).forEach((b) => {
      b.disabled = true;
      if (b.textContent === correct.fr) b.classList.add("correct");
    });
    if (chosen.fr === correct.fr) {
      quizState.score++;
    } else {
      button.classList.add("wrong");
    }
    setTimeout(() => {
      quizState.i++;
      renderQuestion();
    }, 1000);
  }

  /* ================================================================
   * THÈME clair / sombre
   * ================================================================ */
  function initTheme() {
    const btn = $("#theme-toggle");
    const stored = (() => {
      try { return localStorage.getItem("jp-theme"); } catch (_) { return null; }
    })();
    if (stored) document.documentElement.setAttribute("data-theme", stored);

    const label = () => {
      const cur = document.documentElement.getAttribute("data-theme");
      const dark = cur
        ? cur === "dark"
        : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      btn.textContent = dark ? "☀️ Clair" : "🌙 Sombre";
    };
    btn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      const dark = cur
        ? cur === "dark"
        : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const next = dark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("jp-theme", next); } catch (_) {}
      label();
    });
    label();
  }

  /* ================================================================
   * Écoute globale des boutons « Écouter » (délégation d'événements)
   * ================================================================ */
  function initSpeechDelegation() {
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-speak]");
      if (b) {
        e.stopPropagation();
        speak(b.getAttribute("data-speak"));
      }
    });
  }

  /* ================================================================
   * Démarrage
   * ================================================================ */
  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initTheme();
    initVocabulaire();
    initVerbes();
    initGrammaire();
    initQuestions();
    initKanji();
    initPractice();
    initSpeechDelegation();
  });
})();
