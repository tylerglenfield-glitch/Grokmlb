/* ===== 2026 MLB Postseason Portal - script.js ===== */

// ---------- Team Database ----------
const teams = {
  brewers: {
    name: "Milwaukee Brewers", league: "NL", rec: "103-59",
    pos: "NL Champions (4-0 vs LAD)", star: "Jackson Chourio", ws: "0",
    desc: "The Brewers swept the Dodgers 4-0 in the NLCS to reach their first World Series since 1982. Best regular-season record in baseball.",
    img: "https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80"
  },
  guardians: {
    name: "Cleveland Guardians", league: "AL", rec: "88-74",
    pos: "ALCS Lead 2-1 vs TB", star: "José Ramírez", ws: "2",
    desc: "Cleveland took a 2-1 ALCS lead with a 3-2 win in Game 3. Two wins away from the World Series.",
    img: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80"
  },
  rays: {
    name: "Tampa Bay Rays", league: "AL", rec: "98-64",
    pos: "ALCS Trail 1-2 vs CLE", star: "Junior Caminero", ws: "0",
    desc: "Tampa Bay swept the Yankees in the ALDS. They trail 1-2 in the ALCS and must win Game 4 tonight.",
    img: "https://images.unsplash.com/photo-1529763807622-491b1bb86698?auto=format&fit=crop&w=800&q=80"
  },
  dodgers: {
    name: "Los Angeles Dodgers", league: "NL", rec: "100-62",
    pos: "Eliminated (0-4 vs MIL)", star: "Shohei Ohtani", ws: "8",
    desc: "The two-time defending champions were swept by Milwaukee in the NLCS and eliminated from the 2026 postseason.",
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80"
  },
  yankees: {
    name: "New York Yankees", league: "AL", rec: "93-69",
    pos: "Eliminated in ALDS", star: "Aaron Judge", ws: "27",
    desc: "The Yankees were swept by the Rays in the ALDS after a strong regular season led by Aaron Judge.",
    img: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80"
  },
  padres: {
    name: "San Diego Padres", league: "NL", rec: "91-71",
    pos: "Eliminated in NLDS", star: "Fernando Tatis Jr.", ws: "0",
    desc: "San Diego reached the NLDS but fell to the Brewers in five games.",
    img: "https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80"
  }
};

let selectedTeam = "brewers";
let isPredictorMode = false;

// ---------- Theme Toggle ----------
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-toggle");
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    if (icon) icon.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    if (icon) icon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
}

// ---------- Countdown Timer ----------
function startCountdown() {
  const target = new Date("2026-10-23T20:00:00-04:00").getTime();
  function update() {
    const now = Date.now();
    const diff = target - now;
    const el = document.getElementById("live-timer-clock");
    if (!el) return;
    if (diff <= 0) {
      el.textContent = "WORLD SERIES LIVE!";
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = `${d}D ${String(h).padStart(2,"0")}H ${String(m).padStart(2,"0")}M ${String(s).padStart(2,"0")}S`;
  }
  update();
  setInterval(update, 1000);
}

// ---------- Fan MVP Poll ----------
const poll = [
  { id: "chourio", name: "Jackson Chourio (MIL)", votes: 680 },
  { id: "ohtani", name: "Shohei Ohtani (LAD)", votes: 412 },
  { id: "caminero", name: "Junior Caminero (TB)", votes: 215 },
  { id: "ramirez", name: "José Ramírez (CLE)", votes: 210 }
];

function renderPoll() {
  const box = document.getElementById("mvp-poll-container");
  if (!box) return;
  const voted = localStorage.getItem("votedMVP");
  const total = poll.reduce((s, c) => s + c.votes, 0);
  box.innerHTML = "";

  poll.forEach(c => {
    const pct = ((c.votes / total) * 100).toFixed(1);
    if (voted) {
      box.innerHTML += `
        <div style="margin-bottom:12px;">
          <div class="prob-label-row">
            <span>${c.name} ${voted === c.id ? "⭐ Your pick" : ""}</span>
            <strong>${pct}% (${c.votes})</strong>
          </div>
          <div class="prob-track"><div class="prob-fill" style="width:${pct}%;background:var(--primary-blue);"></div></div>
        </div>`;
    } else {
      box.innerHTML += `
        <div class="poll-option-row" onclick="voteMVP('${c.id}')">
          <span style="font-weight:700;">${c.name}</span>
          <button class="poll-btn-action">Vote</button>
        </div>`;
    }
  });
  if (voted) {
    box.innerHTML += `<p style="font-size:12px;color:var(--text-muted);text-align:center;margin-top:10px;">✓ Thanks for voting!</p>`;
  }
}

function voteMVP(id) {
  const c = poll.find(x => x.id === id);
  if (c) {
    c.votes++;
    localStorage.setItem("votedMVP", id);
    renderPoll();
  }
}

// ---------- Teams Page Logic ----------
function renderTeamGrid(filter = "ALL") {
  const grid = document.getElementById("team-picker-grid");
  if (!grid) return;
  grid.innerHTML = "";
  Object.keys(teams).forEach(key => {
    const t = teams[key];
    if (filter === "ALL" || t.league === filter) {
      const btn = document.createElement("button");
      btn.className = `team-btn ${key === selectedTeam ? "active" : ""}`;
      btn.textContent = t.name;
      btn.onclick = () => selectTeam(key);
      grid.appendChild(btn);
    }
  });
}

function filterTeams(league, e) {
  document.querySelectorAll(".div-tab-btn").forEach(b => b.classList.remove("active"));
  if (e && e.target) e.target.classList.add("active");
  renderTeamGrid(league);
}

function searchTeams(q) {
  const grid = document.getElementById("team-picker-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const query = q.toLowerCase();
  Object.keys(teams).forEach(key => {
    if (teams[key].name.toLowerCase().includes(query)) {
      const btn = document.createElement("button");
      btn.className = `team-btn ${key === selectedTeam ? "active" : ""}`;
      btn.textContent = teams[key].name;
      btn.onclick = () => selectTeam(key);
      grid.appendChild(btn);
    }
  });
}

function selectTeam(key) {
  selectedTeam = key;
  const t = teams[key];
  if (!t) return;
  renderTeamGrid();
  setText("spotlight-title", t.name);
  setText("spotlight-badge", t.pos.includes("Champion") ? "NL Champions" : t.pos.split(" ")[0]);
  setText("spotlight-desc", t.desc);
  setText("spotlight-rec", t.rec);
  setText("spotlight-pos", t.pos);
  setText("spotlight-star", t.star);
  setText("spotlight-ws", t.ws + " Titles");
  const img = document.getElementById("spotlight-img");
  if (img) img.src = t.img;
}

function setFavorite() {
  localStorage.setItem("favTeam", selectedTeam);
  const btn = document.getElementById("fav-btn");
  if (btn) btn.textContent = `❤️ Favorited (${teams[selectedTeam].name})`;
  alert(`⭐ ${teams[selectedTeam].name} saved as your favorite team!`);
}

function initCompare() {
  const s1 = document.getElementById("compare-select-1");
  const s2 = document.getElementById("compare-select-2");
  if (!s1 || !s2) return;
  s1.innerHTML = ""; s2.innerHTML = "";
  Object.keys(teams).forEach(key => {
    s1.innerHTML += `<option value="${key}">${teams[key].name}</option>`;
    s2.innerHTML += `<option value="${key}">${teams[key].name}</option>`;
  });
  s1.value = "brewers";
  s2.value = "guardians";
  runComparison();
}

function runComparison() {
  const s1 = document.getElementById("compare-select-1");
  const s2 = document.getElementById("compare-select-2");
  const box = document.getElementById("compare-result-box");
  if (!s1 || !s2 || !box) return;
  const t1 = teams[s1.value];
  const t2 = teams[s2.value];
  box.innerHTML = `
    <div class="compare-grid-2col">
      <div class="compare-team-card">
        <h4>${t1.name}</h4>
        <p><strong>Record:</strong> ${t1.rec}</p>
        <p><strong>Status:</strong> ${t1.pos}</p>
        <p><strong>Star:</strong> ${t1.star}</p>
        <p><strong>WS Titles:</strong> ${t1.ws}</p>
      </div>
      <div class="compare-team-card">
        <h4>${t2.name}</h4>
        <p><strong>Record:</strong> ${t2.rec}</p>
        <p><strong>Status:</strong> ${t2.pos}</p>
        <p><strong>Star:</strong> ${t2.star}</p>
        <p><strong>WS Titles:</strong> ${t2.ws}</p>
      </div>
    </div>`;
}

// ---------- Bracket Predictor ----------
function togglePredictorMode() {
  isPredictorMode = !isPredictorMode;
  const btn = document.getElementById("predictor-toggle-btn");
  const banner = document.getElementById("predictor-status-banner");
  if (btn) {
    btn.textContent = isPredictorMode ? "🎯 Predictor: ON" : "🎯 Predictor: OFF";
    btn.classList.toggle("active", isPredictorMode);
  }
  if (banner) banner.style.display = isPredictorMode ? "flex" : "none";
}

function pickTeam(node, team, e) {
  if (e) e.stopPropagation();
  if (!isPredictorMode) return;
  if (node === "ALCS") {
    setText("pred-al-champ", "AL: " + team);
  }
  if (node === "WS") {
    const box = document.getElementById("champ-crown-box");
    const name = document.getElementById("champ-team-name");
    if (box && name) {
      name.textContent = team;
      box.style.display = "block";
    }
  }
  alert(`🎯 You picked ${team}!`);
}

function resetPredictorPicks() {
  setText("pred-al-champ", "AL Champion (TBD)");
  const box = document.getElementById("champ-crown-box");
  if (box) box.style.display = "none";
  alert("🔄 Picks reset");
}

function filterBracket(league, e) {
  document.querySelectorAll(".filter-tab").forEach(b => {
    if (!b.classList.contains("predictor-tab")) b.classList.remove("active");
  });
  if (e && e.target && !e.target.classList.contains("predictor-tab")) {
    e.target.classList.add("active");
  }
}

// ---------- Matchup Modal ----------
const matchupData = {
  ALCS: {
    title: "ALCS: Guardians vs Rays (CLE leads 2-1)",
    summary: "Cleveland leads the series 2-1 after a 3-2 win in Game 3.",
    games: ["Game 1: CLE 7, TB 3", "Game 2: TB 3, CLE 1", "Game 3: CLE 3, TB 2", "Game 4: Tonight 8 PM ET"]
  },
  NLCS: {
    title: "NLCS: Brewers vs Dodgers (MIL wins 4-0)",
    summary: "Milwaukee swept Los Angeles to win the National League Pennant.",
    games: ["Game 1: MIL 2, LAD 1", "Game 2: MIL 7, LAD 4", "Game 3: MIL 6, LAD 2", "Game 4: MIL 6, LAD 4"]
  },
  WS: {
    title: "2026 World Series",
    summary: "Begins October 23 at American Family Field. Milwaukee hosts Games 1 & 2.",
    games: ["Game 1: Oct 23 – FOX", "Game 2: Oct 24 – FOX"]
  }
};

function openMatchup(key) {
  const modal = document.getElementById("matchup-modal");
  const content = document.getElementById("modal-content");
  if (!modal || !content) return;
  const d = matchupData[key] || { title: key, summary: "Series details", games: [] };
  content.innerHTML = `
    <h3 style="font-family:'Space Grotesk',sans-serif;font-size:1.4rem;margin-bottom:0.75rem;">${d.title}</h3>
    <p style="color:var(--text-muted);margin-bottom:1rem;">${d.summary}</p>
    <div style="background:var(--bg-dark);padding:1rem;border-radius:10px;border:1px solid var(--border-color);">
      <strong style="color:var(--primary-blue);font-size:0.85rem;">Game Log</strong>
      <ul style="list-style:none;margin-top:0.5rem;font-size:0.9rem;line-height:1.8;">
        ${d.games.map(g => `<li>⚾ ${g}</li>`).join("")}
      </ul>
    </div>`;
  modal.style.display = "flex";
}

function closeModal(e) {
  if (e.target.id === "matchup-modal") closeModalDirect();
}
function closeModalDirect() {
  const modal = document.getElementById("matchup-modal");
  if (modal) modal.style.display = "none";
}

// ---------- Helpers ----------
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function refreshTicker() {
  const el = document.getElementById("ticker-content");
  if (el) {
    el.textContent = "🔄 Scores refreshed • Brewers win NLCS 4-0 • Guardians lead ALCS 2-1 • Game 4 tonight 8 PM ET on TBS";
  }
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  // Restore theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    const icon = document.getElementById("theme-toggle");
    if (icon) icon.textContent = "☀️";
  }

  startCountdown();
  renderPoll();
  renderTeamGrid();
  initCompare();

  // Restore favorite
  const fav = localStorage.getItem("favTeam");
  if (fav && teams[fav]) {
    selectTeam(fav);
    const btn = document.getElementById("fav-btn");
    if (btn) btn.textContent = `❤️ Favorited (${teams[fav].name})`;
  }
});
