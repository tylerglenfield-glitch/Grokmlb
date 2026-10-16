/* ============================================================
   2026 MLB POSTSEASON PORTAL — script.js
   ============================================================ */

// -------------------- FULL 30-TEAM DATABASE --------------------
const TEAMS = {
  // AL EAST
  yankees:   { name:"New York Yankees",     div:"AL_EAST",    league:"AL", rec:"93-69",  pos:"Eliminated in ALDS",     star:"Aaron Judge",        ws:"27", desc:"Strong regular season behind Aaron Judge, but swept by the Rays in the ALDS.", img:"https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80" },
  rays:      { name:"Tampa Bay Rays",       div:"AL_EAST",    league:"AL", rec:"98-64",  pos:"ALCS Trail 1-2",          star:"Junior Caminero",    ws:"0",  desc:"AL-best 98 wins and swept the Yankees. Trail 1-2 in the ALCS and must win Game 4 tonight.", img:"https://images.unsplash.com/photo-1529763807622-491b1bb86698?auto=format&fit=crop&w=800&q=80" },
  redsox:    { name:"Boston Red Sox",       div:"AL_EAST",    league:"AL", rec:"89-73",  pos:"Eliminated in WC",       star:"Rafael Devers",      ws:"9",  desc:"Earned a Wild Card berth but fell in the opening round.", img:"https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80" },
  orioles:   { name:"Baltimore Orioles",    div:"AL_EAST",    league:"AL", rec:"86-76",  pos:"Missed Playoffs",        star:"Gunnar Henderson",   ws:"3",  desc:"Solid season led by Gunnar Henderson but finished just outside the postseason.", img:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80" },
  bluejays:  { name:"Toronto Blue Jays",    div:"AL_EAST",    league:"AL", rec:"82-80",  pos:"Missed Playoffs",        star:"Vladimir Guerrero Jr.", ws:"2", desc:"Vladimir Guerrero Jr. carried the offense in a .500 season.", img:"https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80" },

  // AL CENTRAL
  guardians: { name:"Cleveland Guardians",  div:"AL_CENTRAL", league:"AL", rec:"88-74",  pos:"ALCS Lead 2-1",          star:"José Ramírez",       ws:"2",  desc:"Came back from 0-2 in the ALDS and now lead the Rays 2-1 in the ALCS.", img:"https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80" },
  tigers:    { name:"Detroit Tigers",       div:"AL_CENTRAL", league:"AL", rec:"86-76",  pos:"Eliminated in WC",       star:"Tarik Skubal",       ws:"4",  desc:"Tarik Skubal dominated but Detroit was eliminated in the Wild Card round.", img:"https://images.unsplash.com/photo-1529763807622-491b1bb86698?auto=format&fit=crop&w=800&q=80" },
  whitesox:  { name:"Chicago White Sox",    div:"AL_CENTRAL", league:"AL", rec:"84-78",  pos:"Eliminated in ALDS",     star:"Luis Robert Jr.",    ws:"3",  desc:"Pushed Cleveland to five games in the ALDS before falling.", img:"https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80" },
  twins:     { name:"Minnesota Twins",      div:"AL_CENTRAL", league:"AL", rec:"84-78",  pos:"Missed Playoffs",        star:"Carlos Correa",      ws:"3",  desc:"Finished just outside the postseason picture.", img:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80" },
  royals:    { name:"Kansas City Royals",   div:"AL_CENTRAL", league:"AL", rec:"83-79",  pos:"Missed Playoffs",        star:"Bobby Witt Jr.",     ws:"2",  desc:"Bobby Witt Jr. posted another 30-30 season for Kansas City.", img:"https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80" },

  // AL WEST
  mariners:  { name:"Seattle Mariners",     div:"AL_WEST",    league:"AL", rec:"85-77",  pos:"Missed Playoffs",        star:"Julio Rodríguez",    ws:"0",  desc:"Julio Rodríguez led a competitive but ultimately short season.", img:"https://images.unsplash.com/photo-1529763807622-491b1bb86698?auto=format&fit=crop&w=800&q=80" },
  astros:    { name:"Houston Astros",       div:"AL_WEST",    league:"AL", rec:"81-81",  pos:"Eliminated in WC",       star:"Yordan Alvarez",     ws:"2",  desc:"Reached the Wild Card but were eliminated early.", img:"https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80" },
  rangers:   { name:"Texas Rangers",        div:"AL_WEST",    league:"AL", rec:"80-82",  pos:"Missed Playoffs",        star:"Corey Seager",       ws:"1",  desc:"Corey Seager provided power in a rebuilding year.", img:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80" },
  athletics: { name:"Athletics",            div:"AL_WEST",    league:"AL", rec:"69-93",  pos:"Missed Playoffs",        star:"Lawrence Butler",    ws:"9",  desc:"Young core continues to develop in Sacramento.", img:"https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80" },
  angels:    { name:"Los Angeles Angels",   div:"AL_WEST",    league:"AL", rec:"66-96",  pos:"Missed Playoffs",        star:"Mike Trout",         ws:"1",  desc:"Mike Trout remains the face of the franchise.", img:"https://images.unsplash.com/photo-1529763807622-491b1bb86698?auto=format&fit=crop&w=800&q=80" },

  // NL EAST
  mets:      { name:"New York Mets",        div:"NL_EAST",    league:"NL", rec:"89-73",  pos:"Eliminated in NLDS",     star:"Juan Soto",          ws:"2",  desc:"Juan Soto’s first year in Queens produced 43 home runs and a playoff berth.", img:"https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80" },
  braves:    { name:"Atlanta Braves",       div:"NL_EAST",    league:"NL", rec:"94-68",  pos:"Eliminated in NLDS",     star:"Ronald Acuña Jr.",   ws:"4",  desc:"Won 94 games but fell to the Dodgers in the NLDS.", img:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80" },
  phillies:  { name:"Philadelphia Phillies",div:"NL_EAST",    league:"NL", rec:"88-74",  pos:"Eliminated in WC",       star:"Bryce Harper",       ws:"2",  desc:"Bryce Harper and Zack Wheeler led another competitive season.", img:"https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80" },
  nationals: { name:"Washington Nationals", div:"NL_EAST",    league:"NL", rec:"71-91",  pos:"Missed Playoffs",        star:"CJ Abrams",          ws:"1",  desc:"Young core continues to grow in the nation’s capital.", img:"https://images.unsplash.com/photo-1529763807622-491b1bb86698?auto=format&fit=crop&w=800&q=80" },
  marlins:   { name:"Miami Marlins",        div:"NL_EAST",    league:"NL", rec:"62-100", pos:"Missed Playoffs",        star:"Eury Pérez",         ws:"2",  desc:"Rebuilding year focused on pitching development.", img:"https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80" },

  // NL CENTRAL
  brewers:   { name:"Milwaukee Brewers",    div:"NL_CENTRAL", league:"NL", rec:"103-59", pos:"NL Champions (4-0)",     star:"Jackson Chourio",    ws:"0",  desc:"Best record in baseball. Swept the Dodgers 4-0 in the NLCS and advance to the World Series for the first time since 1982.", img:"https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80" },
  cubs:      { name:"Chicago Cubs",         div:"NL_CENTRAL", league:"NL", rec:"89-73",  pos:"Eliminated in WC",       star:"Pete Crow-Armstrong",ws:"3",  desc:"Reached the Wild Card but were eliminated by San Diego.", img:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80" },
  cardinals: { name:"St. Louis Cardinals",  div:"NL_CENTRAL", league:"NL", rec:"81-81",  pos:"Missed Playoffs",        star:"Nolan Arenado",      ws:"11", desc:"Finished .500 with strong defense from Nolan Arenado.", img:"https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80" },
  reds:      { name:"Cincinnati Reds",      div:"NL_CENTRAL", league:"NL", rec:"77-85",  pos:"Missed Playoffs",        star:"Elly De La Cruz",    ws:"5",  desc:"Elly De La Cruz stole 67 bases in an exciting season.", img:"https://images.unsplash.com/photo-1529763807622-491b1bb86698?auto=format&fit=crop&w=800&q=80" },
  pirates:   { name:"Pittsburgh Pirates",   div:"NL_CENTRAL", league:"NL", rec:"76-86",  pos:"Missed Playoffs",        star:"Paul Skenes",        ws:"5",  desc:"Paul Skenes dominated with a sub-2.00 ERA.", img:"https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80" },

  // NL WEST
  dodgers:   { name:"Los Angeles Dodgers",  div:"NL_WEST",    league:"NL", rec:"100-62", pos:"Eliminated in NLCS",     star:"Shohei Ohtani",      ws:"8",  desc:"Two-time defending champions were swept 0-4 by Milwaukee in the NLCS.", img:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80" },
  padres:    { name:"San Diego Padres",     div:"NL_WEST",    league:"NL", rec:"91-71",  pos:"Eliminated in NLDS",     star:"Fernando Tatis Jr.", ws:"0",  desc:"Won 91 games and reached the NLDS before falling to the Brewers.", img:"https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80" },
  diamondbacks:{ name:"Arizona Diamondbacks",div:"NL_WEST",   league:"NL", rec:"84-78",  pos:"Missed Playoffs",        star:"Corbin Carroll",     ws:"1",  desc:"Competitive season led by Corbin Carroll.", img:"https://images.unsplash.com/photo-1529763807622-491b1bb86698?auto=format&fit=crop&w=800&q=80" },
  giants:    { name:"San Francisco Giants", div:"NL_WEST",    league:"NL", rec:"80-82",  pos:"Missed Playoffs",        star:"Matt Chapman",       ws:"8",  desc:"Matt Chapman provided Gold Glove defense at third base.", img:"https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80" },
  rockies:   { name:"Colorado Rockies",     div:"NL_WEST",    league:"NL", rec:"61-101", pos:"Missed Playoffs",        star:"Ezequiel Tovar",     ws:"0",  desc:"Rebuilding year at high altitude in Denver.", img:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80" }
};

let selectedKey = "brewers";
let predictorOn = false;

// -------------------- THEME --------------------
function toggleTheme() {
  document.body.classList.toggle("light");
  const btn = document.getElementById("themeBtn");
  const isLight = document.body.classList.contains("light");
  if (btn) btn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

// -------------------- COUNTDOWN --------------------
function startCountdown() {
  const target = new Date("2026-10-23T20:00:00-04:00").getTime();
  function tick() {
    const el = document.getElementById("countdown");
    if (!el) return;
    const diff = target - Date.now();
    if (diff <= 0) { el.textContent = "WORLD SERIES LIVE!"; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = `${d}D ${String(h).padStart(2,"0")}H ${String(m).padStart(2,"0")}M ${String(s).padStart(2,"0")}S`;
  }
  tick();
  setInterval(tick, 1000);
}

// -------------------- POLL --------------------
const POLL = [
  { id:"chourio",  name:"Jackson Chourio (MIL)", votes:680 },
  { id:"ohtani",   name:"Shohei Ohtani (LAD)",   votes:412 },
  { id:"caminero", name:"Junior Caminero (TB)",  votes:215 },
  { id:"ramirez",  name:"José Ramírez (CLE)",    votes:210 }
];

function renderPoll() {
  const box = document.getElementById("pollBox");
  if (!box) return;
  const voted = localStorage.getItem("votedMVP");
  const total = POLL.reduce((s,c) => s + c.votes, 0);
  box.innerHTML = "";
  POLL.forEach(c => {
    const pct = ((c.votes / total) * 100).toFixed(1);
    if (voted) {
      box.innerHTML += `
        <div style="margin-bottom:12px;">
          <div class="prob-row"><span>${c.name} ${voted===c.id?"⭐":""}</span><strong>${pct}% (${c.votes})</strong></div>
          <div class="prob-bar"><div class="prob-fill" style="width:${pct}%;background:var(--blue);"></div></div>
        </div>`;
    } else {
      box.innerHTML += `
        <div class="poll-opt" onclick="vote('${c.id}')">
          <span style="font-weight:700;">${c.name}</span>
          <button class="poll-vote">Vote</button>
        </div>`;
    }
  });
  if (voted) box.innerHTML += `<p style="font-size:12px;color:var(--muted);text-align:center;margin-top:8px;">✓ Thanks for voting!</p>`;
}

function vote(id) {
  const c = POLL.find(x => x.id === id);
  if (c) { c.votes++; localStorage.setItem("votedMVP", id); renderPoll(); }
}

// -------------------- TEAMS --------------------
function renderGrid(filter = "ALL") {
  const grid = document.getElementById("teamGrid");
  if (!grid) return;
  grid.innerHTML = "";
  Object.keys(TEAMS).forEach(key => {
    const t = TEAMS[key];
    const match = filter === "ALL" || t.league === filter || t.div === filter;
    if (!match) return;
    const btn = document.createElement("button");
    btn.className = `team-btn ${key === selectedKey ? "active" : ""}`;
    btn.textContent = t.name;
    btn.onclick = () => selectTeam(key);
    grid.appendChild(btn);
  });
}

function filterTeams(f, e) {
  document.querySelectorAll(".div-tab").forEach(b => b.classList.remove("active"));
  if (e && e.target) e.target.classList.add("active");
  renderGrid(f);
}

function searchTeams(q) {
  const grid = document.getElementById("teamGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const query = q.toLowerCase().trim();
  Object.keys(TEAMS).forEach(key => {
    if (TEAMS[key].name.toLowerCase().includes(query)) {
      const btn = document.createElement("button");
      btn.className = `team-btn ${key === selectedKey ? "active" : ""}`;
      btn.textContent = TEAMS[key].name;
      btn.onclick = () => selectTeam(key);
      grid.appendChild(btn);
    }
  });
}

function selectTeam(key) {
  selectedKey = key;
  const t = TEAMS[key];
  if (!t) return;
  renderGrid();
  setText("spotName", t.name);
  setText("spotBadge", t.pos.includes("Champion") ? "NL Champions" : t.pos.split(" ").slice(0,2).join(" "));
  setText("spotDesc", t.desc);
  setText("spotRec", t.rec);
  setText("spotPos", t.pos);
  setText("spotStar", t.star);
  setText("spotWS", t.ws + " Titles");
  const img = document.getElementById("spotImg");
  if (img) img.src = t.img;
}

function setFavorite() {
  localStorage.setItem("favTeam", selectedKey);
  const btn = document.getElementById("favBtn");
  if (btn) btn.textContent = `❤️ ${TEAMS[selectedKey].name}`;
  alert(`⭐ ${TEAMS[selectedKey].name} saved as your favorite!`);
}

function initCompare() {
  const s1 = document.getElementById("cmp1");
  const s2 = document.getElementById("cmp2");
  if (!s1 || !s2) return;
  s1.innerHTML = s2.innerHTML = "";
  Object.keys(TEAMS).forEach(key => {
    s1.innerHTML += `<option value="${key}">${TEAMS[key].name}</option>`;
    s2.innerHTML += `<option value="${key}">${TEAMS[key].name}</option>`;
  });
  s1.value = "brewers";
  s2.value = "guardians";
  runCompare();
}

function runCompare() {
  const s1 = document.getElementById("cmp1");
  const s2 = document.getElementById("cmp2");
  const box = document.getElementById("cmpResult");
  if (!s1 || !s2 || !box) return;
  const t1 = TEAMS[s1.value];
  const t2 = TEAMS[s2.value];
  box.innerHTML = `
    <div class="compare-grid">
      <div class="compare-card">
        <h4>${t1.name}</h4>
        <p><strong>Record:</strong> ${t1.rec}</p>
        <p><strong>Status:</strong> ${t1.pos}</p>
        <p><strong>Star:</strong> ${t1.star}</p>
        <p><strong>WS Titles:</strong> ${t1.ws}</p>
      </div>
      <div class="compare-card">
        <h4>${t2.name}</h4>
        <p><strong>Record:</strong> ${t2.rec}</p>
        <p><strong>Status:</strong> ${t2.pos}</p>
        <p><strong>Star:</strong> ${t2.star}</p>
        <p><strong>WS Titles:</strong> ${t2.ws}</p>
      </div>
    </div>`;
}

// -------------------- BRACKET --------------------
function togglePredictor() {
  predictorOn = !predictorOn;
  const btn = document.getElementById("predBtn");
  const banner = document.getElementById("predBanner");
  if (btn) {
    btn.textContent = predictorOn ? "🎯 Predictor: ON" : "🎯 Predictor: OFF";
    btn.classList.toggle("active", predictorOn);
  }
  if (banner) banner.style.display = predictorOn ? "flex" : "none";
}

function pick(node, team, e) {
  if (e) e.stopPropagation();
  if (!predictorOn) return;
  if (node === "ALCS") setText("alChamp", "AL: " + team);
  if (node === "WS") {
    const box = document.getElementById("champBox");
    const name = document.getElementById("champName");
    if (box && name) { name.textContent = team; box.style.display = "block"; }
  }
  alert(`🎯 You picked ${team}!`);
}

function resetPicks() {
  setText("alChamp", "AL Champion (TBD)");
  const box = document.getElementById("champBox");
  if (box) box.style.display = "none";
  alert("🔄 Picks reset");
}

function filterBracket(league, e) {
  document.querySelectorAll(".tab").forEach(b => {
    if (!b.classList.contains("pred")) b.classList.remove("active");
  });
  if (e && e.target && !e.target.classList.contains("pred")) e.target.classList.add("active");
}

// -------------------- MODAL --------------------
const MATCHUPS = {
  alcs: { title:"ALCS: Guardians vs Rays (CLE leads 2-1)", summary:"Cleveland leads 2-1 after a 3-2 win in Game 3.", games:["Game 1: CLE 7, TB 3","Game 2: TB 3, CLE 1","Game 3: CLE 3, TB 2","Game 4: Tonight 8 PM ET"] },
  nlcs: { title:"NLCS: Brewers vs Dodgers (MIL wins 4-0)", summary:"Milwaukee swept Los Angeles to win the NL Pennant.", games:["Game 1: MIL 2, LAD 1","Game 2: MIL 7, LAD 4","Game 3: MIL 6, LAD 2","Game 4: MIL 6, LAD 4"] },
  ws:   { title:"2026 World Series", summary:"Begins October 23 at American Family Field. Milwaukee hosts Games 1 & 2.", games:["Game 1: Oct 23 – FOX","Game 2: Oct 24 – FOX"] },
  wc:   { title:"Wild Card Round", summary:"Best-of-three series that opened the 2026 postseason.", games:["Multiple series completed"] },
  alds: { title:"AL Division Series", summary:"Rays swept Yankees; Guardians beat White Sox 3-2.", games:["ALDS results finalized"] },
  nlds: { title:"NL Division Series", summary:"Brewers beat Padres 3-1; Dodgers beat Braves 3-1.", games:["NLDS results finalized"] }
};

function openMatchup(key) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");
  if (!modal || !content) return;
  const d = MATCHUPS[key] || { title:key, summary:"Series details", games:[] };
  content.innerHTML = `
    <h3 style="font-family:'Space Grotesk',sans-serif;font-size:1.3rem;margin-bottom:0.6rem;">${d.title}</h3>
    <p style="color:var(--muted);margin-bottom:1rem;font-size:0.92rem;">${d.summary}</p>
    <div style="background:var(--bg);padding:0.9rem;border-radius:9px;border:1px solid var(--border);">
      <strong style="color:var(--blue);font-size:0.8rem;">Game Log</strong>
      <ul style="list-style:none;margin-top:0.4rem;font-size:0.88rem;line-height:1.75;">
        ${d.games.map(g => `<li>⚾ ${g}</li>`).join("")}
      </ul>
    </div>
    <div style="margin-top:1rem;">
      <a href="https://www.stubhub.com/mlb-tickets" target="_blank" rel="noopener" class="btn btn-sm btn-gold">Buy Tickets 🎟️</a>
    </div>`;
  modal.style.display = "flex";
}

function closeModal(e) { if (e.target.id === "modal") closeModalDirect(); }
function closeModalDirect() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
}

// -------------------- HELPERS --------------------
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function refreshTicker() {
  const el = document.getElementById("tickerText");
  if (el) el.textContent = "🔄 Updated • Brewers win NLCS 4-0 • Guardians lead ALCS 2-1 • Game 4 tonight 8 PM ET on TBS";
}

// -------------------- INIT --------------------
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    const btn = document.getElementById("themeBtn");
    if (btn) btn.textContent = "☀️";
  }

  startCountdown();
  renderPoll();
  renderGrid();
  initCompare();

  const fav = localStorage.getItem("favTeam");
  if (fav && TEAMS[fav]) {
    selectTeam(fav);
    const btn = document.getElementById("favBtn");
    if (btn) btn.textContent = `❤️ ${TEAMS[fav].name}`;
  }
});
