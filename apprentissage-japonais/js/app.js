/**
 * app.js — Logique de l'agent d'apprentissage du japonais
 * -------------------------------------------------------
 * Gère : navigation par onglets, affichage du vocabulaire/verbes/grammaire,
 * mode entraînement (flashcards + quiz), synthèse vocale japonaise et thème.
 */
(function () {
  "use strict";

  const { VOCABULAIRE, VERBES, GROUPES_VERBES, GRAMMAIRE } = window.DATA;

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

    const render = (groupe) => {
      list.innerHTML = "";
      const verbs = groupe === "all" ? VERBES : VERBES.filter((v) => v.groupe === groupe);
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
          <div class="verb-example">
            <div class="jp">${escapeHtml(v.exemple.jp)}</div>
            <div class="romaji">${escapeHtml(v.exemple.romaji)}</div>
            <div class="fr">${escapeHtml(v.exemple.fr)}</div>
            ${speakBtn(v.exemple.jp)}
          </div>
        `;
        list.appendChild(card);
      });
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

    render("all");
  }

  /* ================================================================
   * GRAMMAIRE
   * ================================================================ */
  function initGrammaire() {
    const container = $("#grammar-list");
    GRAMMAIRE.forEach((lecon) => {
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
      container.appendChild(details);
    });
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
    initPractice();
    initSpeechDelegation();
  });
})();
