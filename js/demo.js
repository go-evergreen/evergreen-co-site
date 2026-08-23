/* Interactive dummy hub — Evergreen Co First Seeds. Dummy data only. */
(function () {
  "use strict";

  var app = document.getElementById("demoApp");
  if (!app) return;

  var captions = {
    sprout: {
      kicker: "🌱 Sprout",
      title: "So you’re not guessing.",
      line: "Story, a few products, one post, who you tell, who grows with you."
    },
    calendar: {
      kicker: "📅 Calendar",
      title: "Dates that matter.",
      line: "Team zooms — and dates that are just for you."
    },
    learn: {
      kicker: "💡 Learn",
      title: "The product library.",
      line: "Products and ingredients — so you never have to guess."
    },
    resources: {
      kicker: "📎 Resources",
      title: "Share the hub. Grab a link.",
      line: "Your invite, curiosity images, the Facebook group, Ringana’s site."
    }
  };

  var sheets = {
    "step-story": {
      tab: "sprout",
      html:
        '<p class="demo-kicker">Your story</p>' +
        '<h2 class="demo-h1">Three quiet answers.</h2>' +
        '<p class="demo-p">Why this, why now, why you. Messy is fine. Everything you share later grows from this.</p>' +
        '<div class="demo-card" style="cursor:default"><strong>Done in this demo</strong><p>In the real hub, your words stay with you.</p></div>'
    },
    "step-products": {
      tab: "sprout",
      html:
        '<p class="demo-kicker">First few</p>' +
        '<h2 class="demo-h1">Heart 2–3 you’d talk about.</h2>' +
        '<p class="demo-p">Open Learn, peek at one product so you know where the facts live, then shortlist what you’re looking forward to.</p>' +
        '<button type="button" class="demo-btn" data-tab="learn">Open Learn →</button>'
    },
    "step-heart": {
      tab: "sprout",
      html:
        '<p class="demo-kicker">From the heart</p>' +
        '<h2 class="demo-h1">One true post.</h2>' +
        '<p class="demo-p">Use the story you crafted here. Curiosity, not a pitch. Nobody posts it for you.</p>' +
        '<p class="demo-lock">Demo peek. Your real draft stays in the hub.</p>'
    },
    "step-tell": {
      tab: "sprout",
      html:
        '<p class="demo-kicker">Who you tell</p>' +
        '<h2 class="demo-h1">Name who you’d tell.</h2>' +
        '<p class="demo-p">At least five people you’d actually tell about these products. The names live on this step.</p>' +
        '<div class="demo-card" style="cursor:default"><strong>Maya — sister</strong><p>Already asking what’s in my bathroom.</p></div>' +
        '<div class="demo-card" style="cursor:default"><strong>Jordan — neighbor</strong><p>Reads every label at the store.</p></div>' +
        '<p class="demo-lock">Demo list. Your real names live in your hub, not here.</p>'
    },
    "step-grow": {
      tab: "sprout",
      html:
        '<p class="demo-kicker">Who grows with you</p>' +
        '<h2 class="demo-h1">Name who you’d build with.</h2>' +
        '<p class="demo-p">At least three people. Hopeful is fine. Seeing names turns a vague wish into real people.</p>' +
        '<p class="demo-lock">Demo peek. Your real names live in the hub.</p>'
    },
    "step-dates": {
      tab: "sprout",
      html:
        '<p class="demo-kicker">Team dates</p>' +
        '<h2 class="demo-h1">Know your dates.</h2>' +
        '<p class="demo-p">Open Calendar and find the next team zoom. That’s the whole calendar here — dates that matter.</p>' +
        '<button type="button" class="demo-btn" data-tab="calendar">Open calendar →</button>'
    },
    "step-links": {
      tab: "sprout",
      html:
        '<p class="demo-kicker">Resources</p>' +
        '<h2 class="demo-h1">Grab your links.</h2>' +
        '<p class="demo-p">Curiosity images, the Facebook community, and Ringana’s official site. The rest lives outside this hub, on purpose.</p>' +
        '<button type="button" class="demo-btn" data-tab="resources">Open resources →</button>'
    },
    "event-zoom": {
      tab: "calendar",
      html:
        '<p class="demo-kicker">Weekly</p>' +
        '<h2 class="demo-h1">Team zoom</h2>' +
        '<p class="demo-p">Come when you can. No pressure to be on camera.</p>' +
        '<button type="button" class="demo-btn" data-toggle="going" id="demoGoing">I’ll try to be there</button>' +
        '<p class="demo-lock" id="demoGoingNote" hidden>Marked in this demo only — nothing is saved.</p>'
    },
    "add-event": {
      tab: "calendar",
      html:
        '<p class="demo-kicker">Yours</p>' +
        '<h2 class="demo-h1">Add a date that’s just for you</h2>' +
        '<p class="demo-p">Team zooms are already here. In the real hub you can drop in your own — a follow-up you promised, a reminder that belongs to you.</p>' +
        '<p class="demo-lock">Demo peek. Your real calendar stays in the hub.</p>'
    },
    "event-prereg": {
      tab: "calendar",
      html:
        '<p class="demo-kicker">Oct 1</p>' +
        '<h2 class="demo-h1">Partner pre-reg</h2>' +
        '<p class="demo-p">U.S. partner signup. $0 to reserve your spot. No obligation.</p>'
    },
    "prod-hydro": {
      tab: "learn",
      html:
        '<p class="demo-kicker">FRESH · hydration</p>' +
        '<h2 class="demo-h1">Hydro serum</h2>' +
        '<p class="demo-p demo-blur">A lightweight serum for skin that feels dry by lunch. Plant waters and humectants — not a trend list.</p>' +
        '<div class="demo-chip-row"><span class="demo-chip">Face</span><span class="demo-chip">Daily</span></div>' +
        '<p class="demo-lock">A peek. Full ingredient pages live in the real Learn tab.</p>'
    },
    "prod-cleanse": {
      tab: "learn",
      html:
        '<p class="demo-kicker">FRESH · cleanse</p>' +
        '<h2 class="demo-h1">Cleanser</h2>' +
        '<p class="demo-p demo-blur">Cleaning-milk energy: soft on skin, serious on dirt. Makeup comes off with a washcloth.</p>' +
        '<div class="demo-chip-row"><span class="demo-chip">Face</span><span class="demo-chip">PM</span></div>'
    },
    "prod-cream": {
      tab: "learn",
      html:
        '<p class="demo-kicker">FRESH · cream</p>' +
        '<h2 class="demo-h1">Skin perfection</h2>' +
        '<p class="demo-p demo-blur">Rich without heavy. Bakuchiol plus ceramides doing quiet work under the finish.</p>' +
        '<div class="demo-chip-row"><span class="demo-chip">Face</span><span class="demo-chip">Night</span></div>'
    },
    "lib-skincare": {
      tab: "learn",
      html:
        '<p class="demo-kicker">Category</p>' +
        '<h2 class="demo-h1">Skincare</h2>' +
        '<p class="demo-p demo-blur">Full face-care library — cleansers, toners, serums, creams, eye care, masks, ADDS, treatments & more.</p>' +
        '<button type="button" class="demo-prod-row" data-open="prod-cleanse"><span class="demo-prod-name">FRESH cleanser</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<button type="button" class="demo-prod-row" data-open="prod-hydro"><span class="demo-prod-name">FRESH hydro serum</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<button type="button" class="demo-prod-row" data-open="prod-cream"><span class="demo-prod-name">FRESH skin perfection</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<p class="demo-lock">A peek. Full fact sheets stay in the hub.</p>'
    },
    "lib-body": {
      tab: "learn",
      html:
        '<p class="demo-kicker">Category</p>' +
        '<h2 class="demo-h1">Body care</h2>' +
        '<p class="demo-p demo-blur">Full body library — wash, body milk, deodorant, hands, feet & legs, scrubs, and after-sun.</p>' +
        '<button type="button" class="demo-prod-row" data-locked><span class="demo-prod-name">FRESH body milk light</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<button type="button" class="demo-prod-row" data-locked><span class="demo-prod-name">FRESH body milk rich</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<button type="button" class="demo-prod-row" data-locked><span class="demo-prod-name">FRESH after sun &amp; tan booster</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<p class="demo-lock">A peek. Full fact sheets stay in the hub.</p>'
    },
    "lib-hair": {
      tab: "learn",
      html:
        '<p class="demo-kicker">Category</p>' +
        '<h2 class="demo-h1">Hair</h2>' +
        '<p class="demo-p demo-blur">Full FRESH hair library — from cleansing to treatment.</p>' +
        '<button type="button" class="demo-prod-row" data-locked><span class="demo-prod-name">FRESH volume shampoo</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<button type="button" class="demo-prod-row" data-locked><span class="demo-prod-name">FRESH repair shampoo</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<button type="button" class="demo-prod-row" data-locked><span class="demo-prod-name">FRESH hair treatment</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<p class="demo-lock">A peek. Full fact sheets stay in the hub.</p>'
    },
    "lib-baby": {
      tab: "learn",
      html:
        '<p class="demo-kicker">Category</p>' +
        '<h2 class="demo-h1">Baby</h2>' +
        '<p class="demo-p demo-blur">Full FRESH baby library — wash, bum care, cream, and oil.</p>' +
        '<button type="button" class="demo-prod-row" data-locked><span class="demo-prod-name">FRESH baby body &amp; hair wash</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<button type="button" class="demo-prod-row" data-locked><span class="demo-prod-name">FRESH baby cream</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<button type="button" class="demo-prod-row" data-locked><span class="demo-prod-name">FRESH baby oil</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<p class="demo-lock">A peek. Full fact sheets stay in the hub.</p>'
    },
    "lib-supplements": {
      tab: "learn",
      html:
        '<p class="demo-kicker">Category</p>' +
        '<h2 class="demo-h1">Supplements</h2>' +
        '<p class="demo-p demo-blur">Full nutritional library — CAPS &amp; BEYOND, drinks, PACKS, and SPORT, with named signature actives.</p>' +
        '<button type="button" class="demo-prod-row" data-locked><span class="demo-prod-name">CAPS beauty &amp; hair</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<button type="button" class="demo-prod-row" data-locked><span class="demo-prod-name">BEYOND biotic</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<button type="button" class="demo-prod-row" data-locked><span class="demo-prod-name">BEYOND omega</span><span class="demo-prod-hero demo-blur"><em>Heroes</em> a quiet line about who it’s for</span></button>' +
        '<p class="demo-lock">A peek. Full fact sheets stay in the hub.</p>'
    },
    faqs: {
      tab: "resources",
      html:
        '<p class="demo-kicker">Straight answers</p>' +
        '<h2 class="demo-h1">FAQs</h2>' +
        '<p class="demo-p">When someone asks about packs, bonuses, or “is this MLM.” Search lives in the real Resources tab.</p>' +
        '<div class="demo-fact"><b>Is this MLM?</b><p>Ringana is network marketing. We talk about it plainly in the hub — no fog, no hype.</p></div>' +
        '<div class="demo-fact"><b>What does it cost to start?</b><p>Pre-registration on October 1 is $0. A Founder Pack is optional.</p></div>' +
        '<p class="demo-lock">A peek. The searchable FAQ list stays in the hub.</p>'
    },
    invite: {
      tab: "resources",
      html:
        '<p class="demo-kicker">Share the hub</p>' +
        '<h2 class="demo-h1">Copy app invite</h2>' +
        '<p class="demo-p">When someone is ready to join our team. They create an account with that link and sit under you.</p>' +
        '<p class="demo-lock">Demo only. No live join code here — and don’t post the hub as a public link.</p>'
    },
    curiosity: {
      tab: "resources",
      html:
        '<p class="demo-kicker">Images &amp; ideas</p>' +
        '<h2 class="demo-h1">Curiosity images</h2>' +
        '<p class="demo-p">Visuals and ideas to spark curiosity — grab what fits, then make it yours. Opens in a new tab on purpose.</p>' +
        '<p class="demo-lock">The live board stays in the real Resources tab.</p>'
    },
    facebook: {
      tab: "resources",
      html:
        '<p class="demo-kicker">Community</p>' +
        '<h2 class="demo-h1">Facebook group</h2>' +
        '<p class="demo-p">Our community to invite people who are curious. Share the group when someone’s ready to look around.</p>' +
        '<p class="demo-lock">Opens outside this hub, on purpose.</p>'
    },
    ringana: {
      tab: "resources",
      html:
        '<p class="demo-kicker">Official</p>' +
        '<h2 class="demo-h1">Ringana</h2>' +
        '<p class="demo-p">The official site — products, the story, and what’s public.</p>' +
        '<p class="demo-lock">Not a Ringana corporate app. This hub is an Evergreen Co team resource.</p>'
    },
    videos: {
      tab: "resources",
      html:
        '<p class="demo-kicker">Coming soon</p>' +
        '<h2 class="demo-h1">Ringana intro videos</h2>' +
        '<p class="demo-p">Five shorts, most around 5 minutes — freshness, the mission, the products, and more.</p>' +
        '<span class="demo-soon">Coming soon</span>'
    },
    leaders: {
      tab: "resources",
      html:
        '<p class="demo-kicker">Private</p>' +
        '<h2 class="demo-h1">Evergreen Leaders</h2>' +
        '<p class="demo-p">Notes, docs, and links exclusively for Evergreen Leaders. Not to be shared outside of our leaders.</p>' +
        '<p class="demo-lock">Locked in this demo. The real room stays inside the hub.</p>'
    },
    messages: {
      html:
        '<p class="demo-kicker">From the hub</p>' +
        '<h2 class="demo-h1">Notes &amp; polls</h2>' +
        '<p class="demo-p">Team notes posted for everyone on Evergreen. How I Grow cards land here too.</p>' +
        '<p class="demo-lock">Demo only — no live notes here.</p>'
    },
    settings: {
      html:
        '<p class="demo-kicker">Settings</p>' +
        '<h2 class="demo-h1">Your hub, your pace.</h2>' +
        '<p class="demo-p">Notifications, display name, How I Grow, and your invite live here in the real app. This demo doesn’t save anything.</p>' +
        '<p class="demo-lock">© 2026 Evergreen Co. First Seeds demo — dummy data only.</p>'
    },
    roadmap: {
      html:
        '<p class="demo-kicker">Roadmap to launch</p>' +
        '<h2 class="demo-h1">The dates that matter.</h2>' +
        '<div class="demo-card" style="cursor:default"><strong>Oct 1</strong><p>Partner pre-reg opens — $0 to reserve your spot.</p></div>' +
        '<div class="demo-card" style="cursor:default"><strong>Nov 1</strong><p>Products launch in the U.S.</p></div>' +
        '<p class="demo-lock">Same countdown chips as the real hub. Details can still shift.</p>'
    }
  };

  var sheetSteps = {
    "step-story": "story",
    "step-products": "products",
    "step-heart": "heart",
    "step-tell": "tell",
    "step-grow": "grow",
    "step-dates": "dates",
    "step-links": "links"
  };

  var sheetEl = document.getElementById("demoSheet");
  var sheetBody = document.getElementById("demoSheetBody");
  var toastEl = document.getElementById("demoToast");
  var toastTimer = 0;
  var currentTab = "sprout";
  var plant = {
    roots: 0,
    checks: { products: false, heart: false, tell: false, grow: false, dates: false, links: false }
  };
  var introTimers = [];
  var introDone = false;
  var checkOrder = ["products", "heart", "tell", "grow", "dates", "links"];

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  function byId(id) { return document.getElementById(id); }

  function checkCount() {
    var n = 0;
    for (var i = 0; i < checkOrder.length; i++) {
      if (plant.checks[checkOrder[i]]) n++;
    }
    return n;
  }

  function sproutStage() {
    var done = checkCount();
    if (done <= 0) return 0;
    if (done >= 6) return 6;
    return Math.max(1, Math.min(5, Math.ceil((done / 6) * 5)));
  }

  function growthPct() {
    return Math.round((plant.roots / 3) * 40 + (checkCount() / 6) * 60);
  }

  function plantCaption() {
    if (plant.roots < 3) return "Roots growing · " + plant.roots + " of 3.";
    if (checkCount() <= 0) return "Roots are in. Heart a few products to sprout.";
    if (checkCount() >= 6) return "Full bloom — demo path is done.";
    return checkCount() + " of 6 checks — tap the plant to keep growing.";
  }

  function pulsePlant() {
    var box = byId("demoPlant");
    if (!box) return;
    box.classList.remove("sprout-pulse");
    void box.offsetWidth;
    box.classList.add("sprout-pulse");
    window.setTimeout(function () { box.classList.remove("sprout-pulse"); }, 900);
  }

  function nextStepId() {
    if (plant.roots < 3) return "story";
    for (var i = 0; i < checkOrder.length; i++) {
      if (!plant.checks[checkOrder[i]]) return checkOrder[i];
    }
    return "";
  }

  function updateToday() {
    var title = byId("demoTodayTitle");
    var body = byId("demoTodayBody");
    var go = byId("demoTodayGo");
    if (!title || !body || !go) return;
    go.removeAttribute("data-open");
    go.removeAttribute("data-tab");
    go.removeAttribute("data-grow");
    go.setAttribute("data-locked", "");
    if (plant.roots < 3) {
      title.textContent = "Plant your roots";
      body.textContent = "Three quiet story answers. That’s what grows the roots underground.";
      go.textContent = "Let’s go →";
    } else if (!plant.checks.products) {
      title.textContent = "Pick your first few.";
      body.textContent = "Open Learn, then heart 2–3 you’d actually talk about.";
      go.textContent = "Open Pick Your First Few →";
    } else if (!plant.checks.heart) {
      title.textContent = "Write from the heart.";
      body.textContent = "One true post from your story — something you’d actually say.";
      go.textContent = "Write from the heart →";
    } else if (!plant.checks.tell) {
      title.textContent = "Name who you tell.";
      body.textContent = "Five people you’d actually tell about these products.";
      go.textContent = "Name who you tell →";
    } else if (!plant.checks.grow) {
      title.textContent = "Name who grows with you.";
      body.textContent = "Three people you’d love building with. Hopeful is fine.";
      go.textContent = "Name who grows with you →";
    } else if (!plant.checks.dates) {
      title.textContent = "Know your dates.";
      body.textContent = "Open Calendar and find the next team zoom.";
      go.textContent = "Open calendar →";
    } else if (!plant.checks.links) {
      title.textContent = "Grab your links.";
      body.textContent = "Curiosity images, the Facebook group, Ringana’s site.";
      go.textContent = "Open resources →";
    } else {
      title.textContent = "Your path is done.";
      body.textContent = "When a team zoom is posted, it shows up here.";
      go.textContent = "Open calendar →";
    }
  }

  function renderPlant() {
    var box = byId("demoPlant");
    var fn = window.FS && window.FS.plantSVG;
    if (box && fn) box.innerHTML = fn(sproutStage(), plant.roots, 3, "dpl");
    var roots = byId("demoStatRoots");
    var checks = byId("demoStatChecks");
    var cap = byId("demoPlantCaption");
    var label = byId("demoGrowthLabel");
    var fill = byId("demoFill");
    if (roots) roots.innerHTML = "<em>Roots</em> " + plant.roots + "/3";
    if (checks) checks.innerHTML = "<em>Checks</em> " + checkCount() + "/6";
    if (cap) cap.textContent = plantCaption();
    if (label) label.textContent = "Growth " + growthPct() + "%";
    if (fill) fill.style.width = growthPct() + "%";
    updateSteps();
    updateToday();
  }

  function updateSteps() {
    var nums = { story: "1", products: "2", heart: "3", tell: "4", grow: "5", dates: "6", links: "7" };
    qsa(".fs-step[data-step]", app).forEach(function (el) {
      var id = el.getAttribute("data-step");
      var done = id === "story" ? plant.roots >= 3 : !!plant.checks[id];
      var nextId = nextStepId();
      var isNext = id === nextId && !done;
      el.classList.toggle("done", done);
      el.classList.toggle("next", isNext);
      el.classList.toggle("locked", !done && !isNext);
      el.setAttribute("data-locked", "");
      var num = el.querySelector(".fs-num");
      if (num) num.textContent = done ? "✓" : (nums[id] || "");
      var st = el.querySelector(".fs-status");
      if (st) st.textContent = done ? "Done" : (isNext ? "Up next" : "In the hub");
    });
  }

  function stopIntro() {
    introTimers.forEach(function (id) { window.clearTimeout(id); });
    introTimers = [];
    introDone = true;
  }

  function completeStep(id) {
    var grew = false;
    if (id === "story" && plant.roots < 3) {
      stopIntro();
      plant.roots = 3;
      grew = true;
    } else if (plant.checks.hasOwnProperty(id) && !plant.checks[id]) {
      stopIntro();
      plant.checks[id] = true;
      grew = true;
    }
    if (grew) {
      renderPlant();
      pulsePlant();
    }
    return grew;
  }

  function playIntro() {
    if (introDone) return;
    renderPlant();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      plant.roots = 3;
      plant.checks.products = true;
      renderPlant();
      introDone = true;
      return;
    }
    function later(ms, fn) {
      introTimers.push(window.setTimeout(fn, ms));
    }
    later(280, function () { if (!introDone) { plant.roots = 1; renderPlant(); pulsePlant(); } });
    later(620, function () { if (!introDone) { plant.roots = 2; renderPlant(); pulsePlant(); } });
    later(980, function () { if (!introDone) { plant.roots = 3; renderPlant(); pulsePlant(); } });
    later(1500, function () {
      if (introDone) return;
      plant.checks.products = true;
      renderPlant();
      pulsePlant();
      introDone = true;
    });
  }

  function setCountdown() {
    function daysUntil(y, m, d) {
      return Math.max(0, Math.ceil((Date.UTC(y, m, d) - Date.now()) / 86400000));
    }
    var pre = byId("demoCdPre");
    var launch = byId("demoCdLaunch");
    if (pre) pre.textContent = String(daysUntil(2026, 9, 1));
    if (launch) launch.textContent = String(daysUntil(2026, 10, 1));
  }

  function setCaption(tab) {
    var cap = captions[tab] || captions.sprout;
    var k = byId("demoGuideKicker");
    var t = byId("demoGuideTitle");
    var line = byId("demoGuideLine");
    if (k) k.textContent = cap.kicker;
    if (t) t.textContent = cap.title;
    if (line) {
      line.textContent = cap.line || "";
      line.hidden = !cap.line;
    }
  }

  var savedPaneTop = 0;
  var savedWinX = 0;
  var savedWinY = 0;

  function snapshotScroll() {
    var pane = app.querySelector(".demo-tab.on");
    savedPaneTop = pane ? pane.scrollTop : 0;
    savedWinX = window.scrollX;
    savedWinY = window.scrollY;
  }

  function restoreScroll() {
    var pane = app.querySelector(".demo-tab.on");
    if (pane) pane.scrollTop = savedPaneTop;
    var html = document.documentElement;
    var prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(savedWinX, savedWinY);
    html.style.scrollBehavior = prev;
  }

  function showTab(tab) {
    qsa(".demo-tab", app).forEach(function (el) {
      var on = el.getAttribute("data-tab") === tab;
      var wasOn = el.classList.contains("on");
      el.classList.toggle("on", on);
      if (on && !wasOn) el.scrollTop = 0;
    });
    qsa(".demo-nav button", app).forEach(function (btn) {
      btn.classList.toggle("on", btn.getAttribute("data-tab") === tab);
    });
  }

  function closeSheet() {
    if (!sheetEl) return;
    sheetEl.classList.remove("open");
    window.setTimeout(function () {
      if (!sheetEl.classList.contains("open")) {
        sheetEl.hidden = true;
        if (sheetBody) sheetBody.innerHTML = "";
        sheetEl.scrollTop = 0;
      }
    }, 320);
  }

  function gotoTab(tab) {
    if (!captions[tab]) tab = "sprout";
    currentTab = tab;
    showTab(tab);
    closeSheet();
    setCaption(tab);
    if (tab === "learn") setLibMode("products");
    var idx = tour.indexOf(tab);
    if (idx >= 0) {
      tourI = idx;
      setTourPos();
    }
  }

  function setLibMode(mode) {
    if (mode !== "ingredients") mode = "products";
    var title = byId("demoLibTitle");
    var sub = byId("demoLibSub");
    if (title) title.textContent = mode === "ingredients" ? "Ingredient guide" : "Learn the products";
    if (sub) {
      sub.textContent = mode === "ingredients"
        ? "Look up any ingredient to see which products use it — or browse by topic when you need the bigger picture."
        : "Skincare, body, hair, baby, and supplements — searchable and ready to learn.";
    }
    qsa("[data-lib-mode]", app).forEach(function (btn) {
      var on = btn.getAttribute("data-lib-mode") === mode;
      btn.classList.toggle("on", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    qsa("[data-lib-pane]", app).forEach(function (pane) {
      var on = pane.getAttribute("data-lib-pane") === mode;
      pane.classList.toggle("on", on);
      pane.hidden = !on;
    });
  }

  function openSheet(id) {
    pauseTour();
    if (sheetSteps[id]) completeStep(sheetSteps[id]);
    var spec = sheets[id];
    if (!spec || !sheetEl || !sheetBody) return;
    if (spec.tab && spec.tab !== currentTab) {
      currentTab = spec.tab;
      showTab(spec.tab);
      setCaption(spec.tab);
    }
    sheetBody.innerHTML = spec.html;
    sheetEl.hidden = false;
    sheetEl.scrollTop = 0;
    window.requestAnimationFrame(function () {
      sheetEl.classList.add("open");
    });
  }

  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("on");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toastEl.classList.remove("on");
    }, 2200);
  }

  app.addEventListener("pointerdown", function (e) {
    pauseTour();
    snapshotScroll();
    if (e.pointerType !== "mouse") return;
    var el = e.target.closest("button, a, input, [tabindex]");
    if (!el || !app.contains(el)) return;
    e.preventDefault();
    if (typeof el.focus === "function") el.focus({ preventScroll: true });
  }, true);
  app.addEventListener("focusin", function () {
    restoreScroll();
    window.requestAnimationFrame(restoreScroll);
  });

  app.addEventListener("click", function (e) {
    var tabBtn = e.target.closest("button[data-tab]");
    if (tabBtn && app.contains(tabBtn)) {
      e.preventDefault();
      pauseTour();
      gotoTab(tabBtn.getAttribute("data-tab"));
      return;
    }
    var libBtn = e.target.closest("[data-lib-mode]");
    if (libBtn && app.contains(libBtn)) {
      e.preventDefault();
      pauseTour();
      closeSheet();
      setLibMode(libBtn.getAttribute("data-lib-mode"));
      return;
    }
    var growBtn = e.target.closest("[data-grow]");
    if (growBtn && app.contains(growBtn)) {
      e.preventDefault();
      var nid = nextStepId();
      if (nid) completeStep(nid);
      return;
    }
    var locked = e.target.closest("[data-locked]");
    if (locked && app.contains(locked)) {
      e.preventDefault();
      toast("Connect with the person who sent you");
      if (typeof locked.blur === "function") locked.blur();
      restoreScroll();
      window.requestAnimationFrame(restoreScroll);
      return;
    }
    var stepBtn = e.target.closest("[data-step]");
    if (stepBtn && app.contains(stepBtn)) {
      completeStep(stepBtn.getAttribute("data-step"));
    }
    var openBtn = e.target.closest("[data-open]");
    if (openBtn && app.contains(openBtn) && !openBtn.hasAttribute("data-locked")) {
      e.preventDefault();
      openSheet(openBtn.getAttribute("data-open"));
      return;
    }
    var tog = e.target.closest("[data-toggle]");
    if (tog && tog.getAttribute("data-toggle") === "going") {
      e.preventDefault();
      var marked = tog.getAttribute("data-on") !== "1";
      tog.setAttribute("data-on", marked ? "1" : "0");
      tog.textContent = marked ? "You’re marked as coming" : "I’ll try to be there";
      tog.classList.toggle("ghost", marked);
      var note = document.getElementById("demoGoingNote");
      if (note) note.hidden = !marked;
      return;
    }
  });

  var back = document.getElementById("demoBack");
  if (back) back.addEventListener("click", function () { closeSheet(); });

  var tour = ["sprout", "calendar", "learn", "resources"];
  var tourI = 0;
  var tourTimer = 0;
  var tourPaused = false;
  var reduceTour = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setTourPos() {
    var el = byId("tourPos");
    if (el) el.textContent = (tourI + 1) + " / " + tour.length;
  }

  function pauseTour() {
    tourPaused = true;
    window.clearTimeout(tourTimer);
  }

  function scheduleTour() {
    window.clearTimeout(tourTimer);
    if (tourPaused || reduceTour) return;
    tourTimer = window.setTimeout(function () {
      tourI = (tourI + 1) % tour.length;
      gotoTab(tour[tourI]);
      scheduleTour();
    }, 5800);
  }

  function bindTour() {
    var guide = byId("demoGuide");
    if (!guide) return;
    guide.addEventListener("click", function () {
      pauseTour();
      tourI = (tourI + 1) % tour.length;
      gotoTab(tour[tourI]);
    });
  }

  setCaption("sprout");
  setTourPos();
  bindTour();
  setCountdown();
  renderPlant();

  var phone = document.getElementById("demoPhone");
  if (phone && "IntersectionObserver" in window) {
    var seen = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (seen || !entry.isIntersecting) return;
        seen = true;
        playIntro();
        scheduleTour();
        io.disconnect();
      });
    }, { threshold: 0.35 });
    io.observe(phone);
  } else {
    playIntro();
    scheduleTour();
  }
})();
