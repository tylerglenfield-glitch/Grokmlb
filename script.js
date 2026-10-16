/* ============================================================
   2026 MLB POSTSEASON PORTAL — script.js
   ============================================================ */

const PHOTOS = {
  stadium: "https://images.unsplash.com/photo-1566577739112-ce2c1e0d1d5f?auto=format&fit=crop&w=1200&q=80",
  field:   "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80",
  batter:  "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1200&q=80",
  night:   "https://images.unsplash.com/photo-1529763807622-491b1bb86698?auto=format&fit=crop&w=1200&q=80"
};

// -------------------- FULL 30-TEAM DATABASE --------------------
const TEAMS = {
  // AL EAST
  yankees: {
    name:"New York Yankees", div:"AL_EAST", league:"AL", rec:"93-69",
    pos:"Eliminated in ALDS", shape:"Contending", star:"Aaron Judge", ws:"27",
    desc:"The Yankees posted 93 wins behind another monster season from Aaron Judge, but ran into a hot Tampa Bay Rays club in the ALDS and were swept. The core remains strong, though questions linger about starting depth heading into the offseason.",
    games:["ALDS G3: L 1-5 vs TB","ALDS G2: L 2-4 vs TB","ALDS G1: L 3-6 vs TB"],
    players:["Aaron Judge — .322, 53 HR","Juan Soto — .288, 35 HR","Gerrit Cole — 15-7, 3.12 ERA"],
    img: PHOTOS.batter, url:"https://www.mlb.com/yankees"
  },
  rays: {
    name:"Tampa Bay Rays", div:"AL_EAST", league:"AL", rec:"98-64",
    pos:"ALCS Trail 1-2", shape:"Peak Contender", star:"Junior Caminero", ws:"0",
    desc:"Tampa Bay put together the best record in the American League and looked nearly unstoppable in October — until Cleveland stole Game 3. With elite pitching and opportunistic hitting, the Rays remain dangerous and can still force this series back to Tropicana Field.",
    games:["ALCS G3: L 2-3 @ CLE","ALCS G2: W 3-1 vs CLE","ALCS G1: L 3-7 @ CLE"],
    players:["Junior Caminero — .290, 31 HR, 3 PS HR","Shane Baz — 14-6, 2.95 ERA","Randy Arozarena — Clutch October performer"],
    img: PHOTOS.night, url:"https://www.mlb.com/rays"
  },
  redsox: {
    name:"Boston Red Sox", div:"AL_EAST", league:"AL", rec:"89-73",
    pos:"Eliminated in WC", shape:"Contending", star:"Rafael Devers", ws:"9",
    desc:"Boston returned to the postseason after a solid 89-win campaign led by Rafael Devers, but were bounced in the Wild Card round. The foundation is competitive, though the rotation still needs another arm.",
    games:["WC G2: L 2-5 vs NYY","WC G1: L 3-4 vs NYY"],
    players:["Rafael Devers — .282, 34 HR","Triston Casas — Emerging power bat","Brayan Bello — Rotation anchor"],
    img: PHOTOS.stadium, url:"https://www.mlb.com/redsox"
  },
  orioles: {
    name:"Baltimore Orioles", div:"AL_EAST", league:"AL", rec:"86-76",
    pos:"Missed Playoffs", shape:"Rising", star:"Gunnar Henderson", ws:"3",
    desc:"Baltimore stayed competitive most of the year behind Gunnar Henderson’s MVP-caliber production, but faded down the stretch and missed October. The young core remains one of the most promising in baseball.",
    games:["Regular season finale","Missed postseason"],
    players:["Gunnar Henderson — .281, 37 HR","Adley Rutschman — Elite catcher","Grayson Rodriguez — Frontline starter"],
    img: PHOTOS.field, url:"https://www.mlb.com/orioles"
  },
  bluejays: {
    name:"Toronto Blue Jays", div:"AL_EAST", league:"AL", rec:"82-80",
    pos:"Missed Playoffs", shape:"Transition", star:"Vladimir Guerrero Jr.", ws:"2",
    desc:"Toronto hovered around .500 all year. Vladimir Guerrero Jr. remained a middle-of-the-order force, but inconsistent pitching kept the Jays on the outside looking in.",
    games:["Regular season","Missed postseason"],
    players:["Vladimir Guerrero Jr. — .323, 30 HR","Bo Bichette — Contact machine","Kevin Gausman — Veteran arm"],
    img: PHOTOS.batter, url:"https://www.mlb.com/bluejays"
  },

  // AL CENTRAL
  guardians: {
    name:"Cleveland Guardians", div:"AL_CENTRAL", league:"AL", rec:"88-74",
    pos:"ALCS Lead 2-1", shape:"Peak Contender", star:"José Ramírez", ws:"2",
    desc:"Few teams embody October resilience like these Guardians. After dropping the first two games of the ALDS, Cleveland stormed back and now sit 2-1 in the ALCS. José Ramírez continues to be the heartbeat of a club built on pitching, defense, and timely hitting.",
    games:["ALCS G3: W 3-2 vs TB","ALCS G2: L 1-3 vs TB","ALCS G1: W 7-3 vs TB"],
    players:["José Ramírez — .279, 38 HR, 115 RBI","Steven Kwan — .312, elite defense","Emmanuel Clase — Shutdown closer"],
    img: PHOTOS.stadium, url:"https://www.mlb.com/guardians"
  },
  tigers: {
    name:"Detroit Tigers", div:"AL_CENTRAL", league:"AL", rec:"86-76",
    pos:"Eliminated in WC", shape:"Rising", star:"Tarik Skubal", ws:"4",
    desc:"Tarik Skubal was the best pitcher in the American League and dragged Detroit into the postseason conversation. The supporting cast is improving, but the Wild Card exit showed they still need more offense.",
    games:["WC G2: L vs CLE","WC G1: L vs CLE"],
    players:["Tarik Skubal — 18-4, 2.39 ERA","Riley Greene — Breakout bat","Spencer Torkelson — Power potential"],
    img: PHOTOS.batter, url:"https://www.mlb.com/tigers"
  },
  whitesox: {
    name:"Chicago White Sox", div:"AL_CENTRAL", league:"AL", rec:"84-78",
    pos:"Eliminated in ALDS", shape:"Contending", star:"Luis Robert Jr.", ws:"3",
    desc:"Chicago pushed the Guardians to five games in the ALDS and proved they belong. Luis Robert Jr. remains a five-tool force when healthy.",
    games:["ALDS G5: L vs CLE","ALDS G4: W vs CLE"],
    players:["Luis Robert Jr. — .270, 26 HR","Garrett Crochet — Emerging ace","Andrew Vaughn — Steady bat"],
    img: PHOTOS.night, url:"https://www.mlb.com/whitesox"
  },
  twins: {
    name:"Minnesota Twins", div:"AL_CENTRAL", league:"AL", rec:"84-78",
    pos:"Missed Playoffs", shape:"Transition", star:"Carlos Correa", ws:"3",
    desc:"Minnesota stayed in the race most of the summer but ultimately fell short. Carlos Correa’s leadership and glove remain valuable pieces.",
    games:["Regular season","Missed postseason"],
    players:["Carlos Correa — .290, 22 HR","Byron Buxton — Speed & power","Pablo López — Rotation leader"],
    img: PHOTOS.field, url:"https://www.mlb.com/twins"
  },
  royals: {
    name:"Kansas City Royals", div:"AL_CENTRAL", league:"AL", rec:"83-79",
    pos:"Missed Playoffs", shape:"Rising", star:"Bobby Witt Jr.", ws:"2",
    desc:"Bobby Witt Jr. continues to look like a future face of the league. Kansas City is building something real around him.",
    games:["Regular season","Missed postseason"],
    players:["Bobby Witt Jr. — .332, 32 HR, 31 SB","Vinnie Pasquantino — Pure hitter","Cole Ragans — Frontline starter"],
    img: PHOTOS.stadium, url:"https://www.mlb.com/royals"
  },

  // AL WEST
  mariners: {
    name:"Seattle Mariners", div:"AL_WEST", league:"AL", rec:"85-77",
    pos:"Missed Playoffs", shape:"Contending", star:"Julio Rodríguez", ws:"0",
    desc:"Julio Rodríguez remains one of the most exciting players in baseball, but Seattle’s pitching depth wasn’t quite enough to push them into October.",
    games:["Regular season","Missed postseason"],
    players:["Julio Rodríguez — .285, 30 HR, 30 SB","Cal Raleigh — Power-hitting catcher","Luis Castillo — Ace"],
    img: PHOTOS.night, url:"https://www.mlb.com/mariners"
  },
  astros: {
    name:"Houston Astros", div:"AL_WEST", league:"AL", rec:"81-81",
    pos:"Eliminated in WC", shape:"Transition", star:"Yordan Alvarez", ws:"2",
    desc:"The dynasty years appear to be winding down. Houston still has talent, led by Yordan Alvarez, but the supporting pieces are aging.",
    games:["WC: Eliminated"],
    players:["Yordan Alvarez — .308, 35 HR","Jose Altuve — Veteran leader","Framber Valdez — Workhorse"],
    img: PHOTOS.batter, url:"https://www.mlb.com/astros"
  },
  rangers: {
    name:"Texas Rangers", div:"AL_WEST", league:"AL", rec:"80-82",
    pos:"Missed Playoffs", shape:"Transition", star:"Corey Seager", ws:"1",
    desc:"After their recent title, Texas took a step back. Corey Seager remains a middle-of-the-order force.",
    games:["Regular season","Missed postseason"],
    players:["Corey Seager — .278, 30 HR","Adolis García — Power bat","Nathan Eovaldi — Veteran arm"],
    img: PHOTOS.field, url:"https://www.mlb.com/rangers"
  },
  athletics: {
    name:"Athletics", div:"AL_WEST", league:"AL", rec:"69-93",
    pos:"Missed Playoffs", shape:"Rebuild", star:"Lawrence Butler", ws:"9",
    desc:"The Athletics are deep in a rebuild as they transition to a new home. Young talent is starting to surface.",
    games:["Regular season","Missed postseason"],
    players:["Lawrence Butler — Emerging outfielder","Zack Gelof — Speedy infielder","Mason Miller — Electric arm"],
    img: PHOTOS.stadium, url:"https://www.mlb.com/athletics"
  },
  angels: {
    name:"Los Angeles Angels", div:"AL_WEST", league:"AL", rec:"66-96",
    pos:"Missed Playoffs", shape:"Rebuild", star:"Mike Trout", ws:"1",
    desc:"Another difficult season in Anaheim. Mike Trout remains one of the greatest of his generation, but the supporting cast has not been enough.",
    games:["Regular season","Missed postseason"],
    players:["Mike Trout — Still elite when healthy","Taylor Ward — Solid corner bat","Patrick Sandoval — Rotation piece"],
    img: PHOTOS.batter, url:"https://www.mlb.com/angels"
  },

  // NL EAST
  mets: {
    name:"New York Mets", div:"NL_EAST", league:"NL", rec:"89-73",
    pos:"Eliminated in NLDS", shape:"Contending", star:"Juan Soto", ws:"2",
    desc:"Juan Soto’s first season in Queens lived up to the hype — 43 home runs and elite on-base skills. The Mets made October but couldn’t get past the Division Series.",
    games:["NLDS: Eliminated","WC: Advanced"],
    players:["Juan Soto — .288, 43 HR, .421 OBP","Francisco Lindor — Switch-hitting star","Kodai Senga — High-upside arm"],
    img: PHOTOS.night, url:"https://www.mlb.com/mets"
  },
  braves: {
    name:"Atlanta Braves", div:"NL_EAST", league:"NL", rec:"94-68",
    pos:"Eliminated in NLDS", shape:"Peak Contender", star:"Ronald Acuña Jr.", ws:"4",
    desc:"Atlanta remains one of the most talented rosters in baseball, but a tough NLDS loss to the Dodgers ended their season earlier than expected.",
    games:["NLDS: L vs LAD","Regular season 94 wins"],
    players:["Ronald Acuña Jr. — Dynamic force","Austin Riley — Middle-order power","Spencer Strider — Ace when healthy"],
    img: PHOTOS.stadium, url:"https://www.mlb.com/braves"
  },
  phillies: {
    name:"Philadelphia Phillies", div:"NL_EAST", league:"NL", rec:"88-74",
    pos:"Eliminated in WC", shape:"Contending", star:"Bryce Harper", ws:"2",
    desc:"Bryce Harper and a strong rotation kept Philadelphia competitive, but the Wild Card exit was a disappointment for a team built to win now.",
    games:["WC: Eliminated"],
    players:["Bryce Harper — Still a force","Zack Wheeler — Ace","Trea Turner — Speed and contact"],
    img: PHOTOS.field, url:"https://www.mlb.com/phillies"
  },
  nationals: {
    name:"Washington Nationals", div:"NL_EAST", league:"NL", rec:"71-91",
    pos:"Missed Playoffs", shape:"Rebuild", star:"CJ Abrams", ws:"1",
    desc:"Washington continues its rebuild with a young, exciting core led by CJ Abrams. Wins are secondary to development right now.",
    games:["Regular season","Missed postseason"],
    players:["CJ Abrams — Speedy shortstop","James Wood — Top prospect impact","MacKenzie Gore — Young arm"],
    img: PHOTOS.batter, url:"https://www.mlb.com/nationals"
  },
  marlins: {
    name:"Miami Marlins", div:"NL_EAST", league:"NL", rec:"62-100",
    pos:"Missed Playoffs", shape:"Rebuild", star:"Eury Pérez", ws:"2",
    desc:"Miami is focused on the future. Eury Pérez and a wave of young pitching give the organization hope.",
    games:["Regular season","Missed postseason"],
    players:["Eury Pérez — Frontline potential","Jazz Chisholm Jr. — Flashy talent","Jesús Luzardo — Left-handed starter"],
    img: PHOTOS.night, url:"https://www.mlb.com/marlins"
  },

  // NL CENTRAL
  brewers: {
    name:"Milwaukee Brewers", div:"NL_CENTRAL", league:"NL", rec:"103-59",
    pos:"NL Champions (4-0)", shape:"Peak Contender", star:"Jackson Chourio", ws:"0",
    desc:"The Milwaukee Brewers put together one of the most complete seasons in recent memory. With an MLB-best 103-59 record, elite starting pitching, and a lockdown bullpen, they steamrolled through the National League and completed a stunning 4-0 sweep of the defending champion Dodgers in the NLCS. Now they wait for the ALCS winner with home-field advantage in the World Series — their first appearance since 1982.",
    games:["NLCS G4: W 6-4 @ LAD","NLCS G3: W 6-2 @ LAD","NLCS G2: W 7-4 vs LAD","NLCS G1: W 2-1 vs LAD"],
    players:["Jackson Chourio — .288, 26 HR, 6 PS HR","Christian Yelich — .392 Playoff BA","Freddy Peralta — 17-6, 2.85 ERA"],
    img: PHOTOS.stadium, url:"https://www.mlb.com/brewers"
  },
  cubs: {
    name:"Chicago Cubs", div:"NL_CENTRAL", league:"NL", rec:"89-73",
    pos:"Eliminated in WC", shape:"Contending", star:"Pete Crow-Armstrong", ws:"3",
    desc:"Chicago returned to relevance with a strong young core and a solid pitching staff, but were eliminated in the Wild Card round.",
    games:["WC: Eliminated by SD"],
    players:["Pete Crow-Armstrong — Dynamic CF","Shota Imanaga — Excellent starter","Cody Bellinger — Veteran bat"],
    img: PHOTOS.field, url:"https://www.mlb.com/cubs"
  },
  cardinals: {
    name:"St. Louis Cardinals", div:"NL_CENTRAL", league:"NL", rec:"81-81",
    pos:"Missed Playoffs", shape:"Transition", star:"Nolan Arenado", ws:"11",
    desc:"A .500 season for a proud franchise. Nolan Arenado’s defense remains elite, but the supporting cast needs refreshing.",
    games:["Regular season","Missed postseason"],
    players:["Nolan Arenado — Gold Glove 3B","Masyn Winn — Rising shortstop","Sonny Gray — Veteran starter"],
    img: PHOTOS.batter, url:"https://www.mlb.com/cardinals"
  },
  reds: {
    name:"Cincinnati Reds", div:"NL_CENTRAL", league:"NL", rec:"77-85",
    pos:"Missed Playoffs", shape:"Rising", star:"Elly De La Cruz", ws:"5",
    desc:"Elly De La Cruz is a generational talent. The Reds are still building around him, but the future is bright.",
    games:["Regular season","Missed postseason"],
    players:["Elly De La Cruz — .260, 25 HR, 67 SB","Hunter Greene — High-velocity arm","Matt McLain — Young middle infielder"],
    img: PHOTOS.night, url:"https://www.mlb.com/reds"
  },
  pirates: {
    name:"Pittsburgh Pirates", div:"NL_CENTRAL", league:"NL", rec:"76-86",
    pos:"Missed Playoffs", shape:"Rising", star:"Paul Skenes", ws:"5",
    desc:"Paul Skenes looks like an ace for the next decade. Pittsburgh is slowly assembling a competitive roster around its young pitching.",
    games:["Regular season","Missed postseason"],
    players:["Paul Skenes — 12-4, 1.96 ERA","Oneil Cruz — Power/speed threat","Jared Jones — Young starter"],
    img: PHOTOS.stadium, url:"https://www.mlb.com/pirates"
  },

  // NL WEST
  dodgers: {
    name:"Los Angeles Dodgers", div:"NL_WEST", league:"NL", rec:"100-62",
    pos:"Eliminated in NLCS", shape:"Peak Contender", star:"Shohei Ohtani", ws:"8",
    desc:"Even in defeat, the Dodgers were one of the best teams in baseball. Shohei Ohtani’s historic season kept them among the favorites until Milwaukee’s complete NLCS domination. Los Angeles will reload and remain dangerous for years.",
    games:["NLCS G4: L 4-6 vs MIL","NLCS G3: L 2-6 vs MIL","NLCS G2: L 4-7 @ MIL","NLCS G1: L 1-2 @ MIL"],
    players:["Shohei Ohtani — .310, 54 HR, 5 PS HR","Mookie Betts — Superstar utility","Freddie Freeman — Consistent force"],
    img: PHOTOS.batter, url:"https://www.mlb.com/dodgers"
  },
  padres: {
    name:"San Diego Padres", div:"NL_WEST", league:"NL", rec:"91-71",
    pos:"Eliminated in NLDS", shape:"Contending", star:"Fernando Tatis Jr.", ws:"0",
    desc:"San Diego won 91 games and reached the NLDS, but ultimately fell to the Brewers. Fernando Tatis Jr. remains the centerpiece of a talented roster.",
    games:["NLDS: L vs MIL 1-3"],
    players:["Fernando Tatis Jr. — .278, 28 HR","Manny Machado — Veteran leader","Yu Darvish — Rotation anchor"],
    img: PHOTOS.field, url:"https://www.mlb.com/padres"
  },
  diamondbacks: {
    name:"Arizona Diamondbacks", div:"NL_WEST", league:"NL", rec:"84-78",
    pos:"Missed Playoffs", shape:"Contending", star:"Corbin Carroll", ws:"1",
    desc:"Arizona stayed competitive behind Corbin Carroll and a strong pitching staff, but ultimately missed the postseason by a narrow margin.",
    games:["Regular season","Missed postseason"],
    players:["Corbin Carroll — Dynamic outfielder","Ketel Marte — Switch-hitting force","Zac Gallen — Ace"],
    img: PHOTOS.night, url:"https://www.mlb.com/dbacks"
  },
  giants: {
    name:"San Francisco Giants", div:"NL_WEST", league:"NL", rec:"80-82",
    pos:"Missed Playoffs", shape:"Transition", star:"Matt Chapman", ws:"8",
    desc:"Matt Chapman’s elite defense at third base was a bright spot in an otherwise average season for San Francisco.",
    games:["Regular season","Missed postseason"],
    players:["Matt Chapman — Gold Glove 3B","Logan Webb — Workhorse starter","Jung Hoo Lee — Contact hitter"],
    img: PHOTOS.stadium, url:"https://www.mlb.com/giants"
  },
  rockies: {
    name:"Colorado Rockies", div:"NL_WEST", league:"NL", rec:"61-101",
    pos:"Missed Playoffs", shape:"Rebuild", star:"Ezequiel Tovar", ws:"0",
    desc:"Colorado is in full rebuild mode. Ezequiel Tovar is one of the few bright spots as the organization looks toward the future.",
    games:["Regular season","Missed postseason"],
    players:["Ezequiel Tovar — Young shortstop","Brenton Doyle — Center field defense","Cal Quantrill — Veteran arm"],
    img: PHOTOS.field, url:"https://www.mlb.com/rockies"
  }
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

// -------------------- FAVORITE TEAM --------------------
function updateHeaderFav() {
  const fav = localStorage.getItem("favTeam");
  const btn = document.getElementById("headerFavBtn");
  const label = document.getElementById("headerFavLabel");
  if (!btn || !label) return;
  if (fav && TEAMS[fav]) {
    label.textContent = TEAMS[fav].name;
    btn.classList.add("has-fav");
  } else {
    label.textContent = "My Team";
    btn.classList.remove("has-fav");
  }
}

function goToFavorite() {
  const fav = localStorage.getItem("favTeam");
  if (fav && TEAMS[fav]) {
    window.location.href = `teams.html?team=${fav}`;
  } else {
    window.location.href = "teams.html";
    alert("Pick a favorite team on the Teams page first!");
  }
}

function setFavorite() {
  localStorage.setItem("favTeam", selectedKey);
  const btn = document.getElementById("favBtn");
  if (btn) btn.textContent = `❤️ ${TEAMS[selectedKey].name}`;
  updateHeaderFav();
  alert(`⭐ ${TEAMS[selectedKey].name} is now your favorite team!`);
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
  setText("spotBadge", t.pos);
  setText("spotShape", `${t.shape} • ${t.rec}`);
  setText("spotDesc", t.desc);
  setText("spotRec", t.rec);
  setText("spotPos", t.pos);
  setText("spotShapeStat", t.shape);
  setText("spotWS", t.ws + " Titles");

  const img = document.getElementById("spotImg");
  if (img) img.src = t.img;

  const mlb = document.getElementById("spotMlb");
  if (mlb) mlb.href = t.url;

  const gamesEl = document.getElementById("spotGames");
  if (gamesEl) {
    gamesEl.innerHTML = t.games.map(g => `<li>⚾ ${g}</li>`).join("");
  }

  const playersEl = document.getElementById("spotPlayers");
  if (playersEl) {
    playersEl.innerHTML = t.players.map(p => {
      const parts = p.split(" — ");
      return `<li><strong>${parts[0]}</strong> — ${parts[1] || ""}</li>`;
    }).join("");
  }
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
        <p><strong>Shape:</strong> ${t1.shape}</p>
        <p><strong>Star:</strong> ${t1.star}</p>
        <p><strong>WS Titles:</strong> ${t1.ws}</p>
      </div>
      <div class="compare-card">
        <h4>${t2.name}</h4>
        <p><strong>Record:</strong> ${t2.rec}</p>
        <p><strong>Status:</strong> ${t2.pos}</p>
        <p><strong>Shape:</strong> ${t2.shape}</p>
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
  updateHeaderFav();

  // Deep link from favorite button
  const params = new URLSearchParams(window.location.search);
  const teamParam = params.get("team");
  if (teamParam && TEAMS[teamParam]) {
    selectTeam(teamParam);
  } else {
    const fav = localStorage.getItem("favTeam");
    if (fav && TEAMS[fav]) selectTeam(fav);
    else selectTeam("brewers");
  }

  const favBtn = document.getElementById("favBtn");
  const fav = localStorage.getItem("favTeam");
  if (favBtn && fav && TEAMS[fav] && fav === selectedKey) {
    favBtn.textContent = `❤️ ${TEAMS[fav].name}`;
  }
});
