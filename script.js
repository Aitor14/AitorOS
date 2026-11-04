/* AitorOS — portfolio of Aitor Gómez as a macOS-style desktop in the browser.
   Vanilla JavaScript, no build step. Edit CONFIG and the data arrays below to update the content. */
(function () {
  "use strict";

  /* =====================================================================
     1. CONFIG — edit these values
     ===================================================================== */
  var CONFIG = {
    name: "Aitor Gómez",
    shortName: "Aitor",
    user: "aitor",
    host: "aitoros",
    role: "Cybersecurity student · EUNEIZ",
    email: "aitorgomezpelaez@gmail.com",
    // Paste the full LinkedIn profile URL here. While empty, the LinkedIn row is hidden.
    linkedin: "",
    // GitHub username. If left empty and the site runs on <user>.github.io, it is detected automatically.
    github: "",
    credly: "https://www.credly.com/users/aitor-gomez.899d901a/badges",
    // Optional: put a square photo next to index.html (e.g. "photo.jpg"). While empty, initials are shown.
    photo: ""
  };
  if (!CONFIG.github && /\.github\.io$/i.test(location.hostname)) CONFIG.github = location.hostname.split(".")[0];
  var GITHUB_URL = CONFIG.github ? "https://github.com/" + CONFIG.github : "";

  /* =====================================================================
     2. CONTENT
     ===================================================================== */
  var EDUCATION = [
    { when: "2025 – now", title: "BSc in Cybersecurity", where: "EUNEIZ University · Vitoria-Gasteiz", text: "Second year. Focus on offensive security, vulnerability analysis and system protection." },
    { when: "2023 – 2025", title: "Technological Baccalaureate", where: "Salesianos · Barakaldo", text: "Science and technology track." }
  ];
  var EXPERIENCE = [
    { when: "Dec 2023 – Jan 2024", title: "Volunteer", where: "Salesianos · Barakaldo", text: "Supported activities of the school community: teamwork, responsibility and commitment." }
  ];
  var LANGUAGES = [["Spanish", 100, "Native"], ["Basque", 72, "B2"], ["English", 72, "B2"]];
  var INTERESTS = ["Ethical hacking", "Penetration testing", "Vulnerability assessment", "Access control", "Information security", "Kali Linux"];

  var BADGES = [
    { name: "Ethical Hacker", issuer: "Cisco Networking Academy", date: "Feb 2026",
      text: "Scoping, vulnerability assessment, network and application exploitation, social engineering and reporting. Up to 34 hands-on labs with Kali Linux and WebSploit.",
      img: "https://images.credly.com/images/242902b5-f527-42ad-865e-977c9e1b5b58/image.png",
      url: "https://www.credly.com/badges/4b0e7805-0cc6-4f59-bd6b-b63b93b2bfec" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "Feb 2026",
      text: "Threats and vulnerabilities, threat detection and defence, privacy and data confidentiality.",
      img: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
      url: "https://www.credly.com/badges/e8cf3380-1a9b-43f0-aa04-415494872156" }
  ];

  // Projects: only real work. Add new entries at the top as they are published.
  // kind: "course" | "build"   status: "done" | "wip"
  var PROJECTS = [
    { kind: "build", icon: "ic-terminal", title: "AitorOS", sub: "This portfolio · HTML, CSS, JavaScript", status: "done",
      text: "A desktop that runs in the browser: window manager, dock, a terminal with a fake file system and a five-challenge CTF.",
      link: GITHUB_URL ? GITHUB_URL : "", linkText: "Source on GitHub" },
    { kind: "course", icon: "ic-ctf", title: "Ethical Hacker", sub: "Cisco Networking Academy · Feb 2026", status: "done",
      text: "Full pentest workflow: legal scoping, reconnaissance, vulnerability scanning, exploitation of networks and web apps, and reporting with mitigations. Labs in Kali Linux and WebSploit.",
      link: BADGES[0].url, linkText: "Verify on Credly" },
    { kind: "course", icon: "ic-about", title: "Introduction to Cybersecurity", sub: "Cisco Networking Academy · Feb 2026", status: "done",
      text: "Foundations of threats, attacks and defence, and how organisations protect their data.",
      link: BADGES[1].url, linkText: "Verify on Credly" },
    { kind: "course", icon: "ic-certs", title: "BSc in Cybersecurity", sub: "EUNEIZ · 2025 – now", status: "wip",
      text: "Degree with an offensive security focus: vulnerability analysis, networks, systems and secure development.",
      link: "", linkText: "" }
  ];

  /* =====================================================================
     3. ICONS
     ===================================================================== */
  var SVG = {
    about: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
    projects: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
    certs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7l5 5-5 5M12 18h7"/></svg>',
    ctf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
    contact: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.9A8 8 0 1 1 21 12z"/></svg>',
    readme: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 3h9l4 4v14H6z"/><path d="M9 11h7M9 15h7M9 7h3"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 9h3v10H5zM6.5 4.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM10 9h2.9v1.4c.4-.8 1.4-1.6 3-1.6 3.1 0 3.6 2 3.6 4.6V19h-3v-4.9c0-1.2 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v5H10z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.8-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>',
    credly: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M17 7.5A6.5 6.5 0 1 0 17 16.5"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    school: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
    folder: '<svg viewBox="0 0 64 56"><defs><linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6cc3ff"/><stop offset="1" stop-color="#2f8df5"/></linearGradient></defs><path d="M2 8a5 5 0 0 1 5-5h16l5 5h29a5 5 0 0 1 5 5v36a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z" fill="#2a7be0"/><path d="M2 16a5 5 0 0 1 5-5h50a5 5 0 0 1 5 5v33a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z" fill="url(#fg)"/></svg>',
    x: '<svg viewBox="0 0 10 10"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    minus: '<svg viewBox="0 0 10 10"><path d="M2 5h6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    plus: '<svg viewBox="0 0 10 10"><path d="M2.6 7.4V3.8l3.6 3.6zM7.4 2.6v3.6L3.8 2.6z" fill="currentColor"/></svg>'
  };

  /* =====================================================================
     4. UTILITIES
     ===================================================================== */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function store(key, val) { try { if (val === undefined) return JSON.parse(localStorage.getItem("aitoros-" + key) || "null"); localStorage.setItem("aitoros-" + key, JSON.stringify(val)); } catch (e) { return null; } }
  function un(s) { try { return decodeURIComponent(escape(atob(s.split("").reverse().join("")))); } catch (e) { return ""; } }
  function rot13(s) { return s.replace(/[a-z]/gi, function (c) { var b = c <= "Z" ? 65 : 97; return String.fromCharCode((c.charCodeAt(0) - b + 13) % 26 + b); }); }
  function isSmall() { return window.matchMedia("(max-width: 720px)").matches; }
  function iconHTML(cls, svg) { return '<span class="app-icon ' + cls + '">' + svg + "</span>"; }
  var bootTime = Date.now();

  var toastTimer;
  function toast(title, text, ms) {
    var t = $("#toast");
    t.innerHTML = "<b>" + esc(title) + "</b>" + esc(text || "");
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, ms || 4200);
  }

  /* =====================================================================
     5. CTF STATE
     ===================================================================== */
  var CHALLENGES = [
    { title: "Hidden in plain sight", cat: "recon", pts: 100,
      text: "Something in Aitor's home folder doesn't show up with a normal listing. Open the Terminal and look around.",
      hint: "Files whose names start with a dot are hidden. Try ls -a, then cat the file you find." },
    { title: "Intercepted", cat: "crypto", pts: 100,
      text: "~/challenges/intercepted.txt was captured on the wire. It looks scrambled, but is it really encrypted?",
      hint: "The = at the end gives it away. Try: cat challenges/intercepted.txt | base64 -d" },
    { title: "Caesar's notes", cat: "crypto", pts: 150,
      text: "~/challenges/notes.txt is a note Aitor left for himself. The letters have been shifted.",
      hint: "'synt' is 'flag' shifted by 13 places. There is a rot13 command in the terminal." },
    { title: "View source", cat: "web", pts: 150,
      text: "Developers sometimes leave comments where they think nobody will look.",
      hint: "Right-click the page and choose View Page Source (or press Ctrl+U)." },
    { title: "Privilege escalation", cat: "linux", pts: 250,
      text: "/root/flag.txt is only readable by root. Find a misconfiguration that lets you read it.",
      hint: "Check what you can run as root with sudo -l, then look up 'find' on GTFOBins." }
  ];
  var FLAGS = ["=0nbzQGZxg2X0BjbfNjc081czwWMmRHMkt3ZhxmZ", "95GMxQHc5J3YuNzX0BjbfNXMfRjNzMHNit3ZhxmZ", "9t2Y0I2XzNDd0QHMy91MxQHMyt3ZhxmZ", "9NXe0cHb081MjJXdwM3X3NTM2t3ZhxmZ", "9N2czYXMyB3Xk5WMm91cuFjYwYGdnt3ZhxmZ"];
  var solved = store("ctf") || [false, false, false, false, false];

  function ctfScore() { return CHALLENGES.reduce(function (s, c, i) { return s + (solved[i] ? c.pts : 0); }, 0); }
  function ctfTotal() { return CHALLENGES.reduce(function (s, c) { return s + c.pts; }, 0); }
  function submitFlag(raw) {
    var f = String(raw || "").trim();
    if (!f) return { ok: false, msg: "Type a flag first, like flag{...}." };
    for (var i = 0; i < FLAGS.length; i++) {
      if (un(FLAGS[i]) === f) {
        if (solved[i]) return { ok: true, msg: "Already solved: " + CHALLENGES[i].title + "." };
        solved[i] = true; store("ctf", solved);
        renderCTF();
        var all = solved.every(Boolean);
        if (all) setTimeout(function () { toast("All flags captured", "5/5 — " + ctfTotal() + " points. Nice work. Want to talk? Open Contact."); }, 300);
        else toast("Flag accepted", CHALLENGES[i].title + " · +" + CHALLENGES[i].pts + " pts");
        return { ok: true, msg: "Correct! " + CHALLENGES[i].title + " solved (+" + CHALLENGES[i].pts + " pts)." };
      }
    }
    return { ok: false, msg: "Wrong flag. Keep trying." };
  }

  /* =====================================================================
     6. APPS
     ===================================================================== */
  var APPS = {
    about:    { title: "About Me", icon: "ic-about", svg: SVG.about, w: 760, h: 520, render: renderAbout },
    projects: { title: "Projects", icon: "ic-projects", svg: SVG.projects, w: 780, h: 500, render: renderProjects },
    certs:    { title: "Certifications", icon: "ic-certs", svg: SVG.certs, w: 640, h: 540, render: renderCerts },
    terminal: { title: CONFIG.user + "@" + CONFIG.host + ": ~", icon: "ic-terminal", svg: SVG.terminal, w: 680, h: 420, render: renderTerminal, label: "Terminal" },
    ctf:      { title: "CTF", icon: "ic-ctf", svg: SVG.ctf, w: 620, h: 580, render: renderCTFApp },
    contact:  { title: "Contact", icon: "ic-contact", svg: SVG.contact, w: 460, h: 440, render: renderContact },
    readme:   { title: "Read Me.txt", icon: "ic-readme", svg: SVG.readme, w: 520, h: 440, render: renderReadme, noDock: true }
  };
  var DOCK_ORDER = ["about", "projects", "certs", "terminal", "ctf", "contact"];

  function renderAbout(body) {
    var avatar = CONFIG.photo ? '<img src="' + esc(CONFIG.photo) + '" alt="' + esc(CONFIG.name) + '">' : "AG";
    var tl = function (list) {
      return '<ul class="timeline">' + list.map(function (x) {
        return '<li><span class="when">' + esc(x.when) + '</span><div><b>' + esc(x.title) + '</b><span>' + esc(x.where) + "<br>" + esc(x.text) + "</span></div></li>";
      }).join("") + "</ul>";
    };
    body.innerHTML =
      '<div class="about">' +
        '<aside class="about-side">' +
          '<div class="avatar">' + avatar + '</div>' +
          '<div class="name">' + esc(CONFIG.name) + '</div>' +
          '<div class="role">Cybersecurity student<br>Offensive security</div>' +
          '<ul class="side-list">' +
            '<li>' + SVG.school + 'EUNEIZ · 2nd year</li>' +
            '<li>' + SVG.pin + 'Basque Country, Spain</li>' +
            '<li>' + SVG.globe + 'ES · EU · EN</li>' +
            '<li>' + SVG.mail + '<a href="mailto:' + esc(CONFIG.email) + '">Email me</a></li>' +
          '</ul>' +
        '</aside>' +
        '<div class="pad">' +
          '<h1 class="h1">Hi, I\'m ' + esc(CONFIG.shortName) + '.</h1>' +
          '<p class="p">I\'m a second-year Cybersecurity student at EUNEIZ in Vitoria-Gasteiz, focused on offensive security: ethical hacking, vulnerability assessment and access control.</p>' +
          '<p class="p">I completed Cisco\'s Ethical Hacker course, working through hands-on labs in Kali Linux, and I\'m looking for a <b>summer 2027 internship</b> in Europe where I can learn from a real security team.</p>' +
          '<div class="chips">' + INTERESTS.map(function (i) { return '<span class="chip mint">' + esc(i) + "</span>"; }).join("") + '</div>' +
          '<h2 class="h2">Education</h2>' + tl(EDUCATION) +
          '<h2 class="h2">Experience</h2>' + tl(EXPERIENCE) +
          '<h2 class="h2">Languages</h2>' +
          LANGUAGES.map(function (l) { return '<div class="lang"><span>' + l[0] + '</span><span class="bar"><i style="width:' + l[1] + '%"></i></span><span class="lv">' + l[2] + "</span></div>"; }).join("") +
        '</div>' +
      '</div>';
  }

  function renderProjects(body) {
    var filter = "all";
    function draw() {
      var list = PROJECTS.filter(function (p) { return filter === "all" || p.kind === filter; });
      body.innerHTML =
        '<div class="finder">' +
          '<nav class="f-side" aria-label="Filter">' +
            '<h4>Favourites</h4>' +
            [["all", "All work"], ["build", "Builds"], ["course", "Coursework"]].map(function (f) {
              return '<button data-f="' + f[0] + '" aria-current="' + (filter === f[0]) + '">' + SVG.projects + f[1] + "</button>";
            }).join("") +
          '</nav>' +
          '<div class="f-main"><div class="cards">' +
            list.map(function (p) {
              return '<article class="card"><div class="top">' + iconHTML(p.icon, APPS[p.icon.replace("ic-", "")] ? APPS[p.icon.replace("ic-", "")].svg : SVG.projects) +
                '<div><h3>' + esc(p.title) + '</h3><div class="sub">' + esc(p.sub) + "</div></div></div>" +
                '<span class="status ' + p.status + '">' + (p.status === "done" ? "Completed" : "In progress") + "</span>" +
                "<p>" + esc(p.text) + "</p>" +
                (p.link ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.linkText) + " ↗</a>" : "") +
                "</article>";
            }).join("") +
          '</div><p class="empty-note">Write-ups and security tools will appear here as I publish them on GitHub.</p></div>' +
        '</div>';
      body.querySelectorAll("[data-f]").forEach(function (b) { b.addEventListener("click", function () { filter = b.dataset.f; draw(); }); });
    }
    draw();
  }

  function renderCerts(body) {
    body.innerHTML =
      '<div class="pad">' +
        '<h1 class="h1">Certifications</h1>' +
        '<p class="p muted">Verified badges, each linked to its record on Credly.</p>' +
        '<div class="badges">' + BADGES.map(function (b) {
          return '<a class="badge" href="' + esc(b.url) + '" target="_blank" rel="noopener">' +
            '<img src="' + esc(b.img) + '" alt="' + esc(b.name) + ' badge" loading="lazy">' +
            '<b>' + esc(b.name) + '</b><span class="sub">' + esc(b.issuer) + '</span>' +
            '<span class="date">' + esc(b.date) + '</span><span class="sub">' + esc(b.text) + "</span></a>";
        }).join("") + '</div>' +
        '<p style="margin-top:18px"><a class="btn" href="' + esc(CONFIG.credly) + '" target="_blank" rel="noopener">View full Credly profile ↗</a></p>' +
      '</div>';
  }

  function renderContact(body) {
    var rows = [
      { cls: "ic-mail", svg: SVG.mail, title: "Email", value: CONFIG.email, url: "mailto:" + CONFIG.email },
      { cls: "ic-in", svg: SVG.linkedin, title: "LinkedIn", value: CONFIG.linkedin.replace(/^https?:\/\/(www\.)?/, ""), url: CONFIG.linkedin },
      { cls: "ic-gh", svg: SVG.github, title: "GitHub", value: CONFIG.github ? "github.com/" + CONFIG.github : "", url: GITHUB_URL },
      { cls: "ic-credly", svg: SVG.credly, title: "Credly", value: "Verified badges", url: CONFIG.credly }
    ].filter(function (r) { return r.url; });
    body.innerHTML =
      '<div class="pad">' +
        '<h1 class="h1">Let\'s talk</h1>' +
        '<p class="p muted">Open to summer 2027 internships in cybersecurity or software across Europe.</p>' +
        '<div class="contact-list">' + rows.map(function (r) {
          var ext = r.url.indexOf("mailto:") === 0 ? "" : ' target="_blank" rel="noopener"';
          return '<a class="contact-row" href="' + esc(r.url) + '"' + ext + ">" + iconHTML(r.cls, r.svg) +
            "<div><b>" + r.title + "</b><span>" + esc(r.value) + '</span></div><span class="go">›</span></a>';
        }).join("") + "</div>" +
      "</div>";
  }

  function renderReadme(body) {
    body.innerHTML =
      '<div class="pad readme">' +
        '<h1 class="h1">Welcome to AitorOS</h1>' +
        '<p class="p">This is the portfolio of ' + esc(CONFIG.name) + ', a cybersecurity student, built as a desktop that runs in your browser.</p>' +
        '<ul>' +
          '<li>Open apps from the <b>Dock</b> or double-click the desktop icons.</li>' +
          '<li>Drag windows by the title bar; double-click it to maximise.</li>' +
          '<li>Press <kbd>Ctrl</kbd> + <kbd>K</kbd> to search apps.</li>' +
          '<li>Open the <b>Terminal</b> and type <code>help</code>.</li>' +
          '<li>Feeling curious? There are <b>5 flags</b> hidden in this system. Open the <b>CTF</b> app to play.</li>' +
        '</ul>' +
        '<p style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-open="ctf">Start the CTF</button><button class="btn ghost" data-open="about">About me</button></p>' +
      '</div>';
  }

  /* ---------- CTF app ---------- */
  var ctfBodies = [];
  function renderCTFApp(body) { ctfBodies = [body]; drawCTF(body); }
  function renderCTF() { ctfBodies.forEach(function (b) { if (b.isConnected) drawCTF(b); }); }
  function drawCTF(body) {
    var score = ctfScore(), total = ctfTotal(), n = solved.filter(Boolean).length;
    body.innerHTML =
      '<div class="pad">' +
        '<div class="ctf-head"><div><h1 class="h1">Capture the Flag</h1><p class="p muted" style="margin:0">Find the flags hidden in AitorOS. They look like <code>flag{...}</code>.</p></div>' +
        '<span class="score">' + n + '/5 · ' + score + '/' + total + ' pts</span></div>' +
        '<div class="progress"><i style="width:' + (score / total * 100) + '%"></i></div>' +
        '<div class="chall">' + CHALLENGES.map(function (c, i) {
          return '<div class="ch' + (solved[i] ? " solved" : "") + '" data-i="' + i + '">' +
            '<span class="num">' + (solved[i] ? "✓" : i + 1) + '</span>' +
            '<div><b>' + esc(c.title) + '</b><span class="cat">' + c.cat + '</span><p>' + esc(c.text) + '</p>' +
            (solved[i] ? "" : '<button class="hint-btn" data-hint="' + i + '">Show hint</button><div class="hint">' + esc(c.hint) + '</div>') +
            '</div><span class="pts">' + c.pts + '</span></div>';
        }).join("") + '</div>' +
        '<form class="submit"><input type="text" placeholder="flag{...}" aria-label="Flag" autocomplete="off" spellcheck="false"><button class="btn" type="submit">Submit</button></form>' +
        '<div class="ctf-msg" role="status"></div>' +
        '<p class="p muted" style="font-size:12px;margin-top:6px">You can also submit from the Terminal with <code>submit flag{...}</code>. Progress is saved in this browser. <button class="hint-btn" data-reset>Reset progress</button></p>' +
      '</div>';
    body.querySelectorAll("[data-hint]").forEach(function (b) {
      b.addEventListener("click", function () { var ch = b.closest(".ch"); ch.classList.toggle("show-hint"); b.textContent = ch.classList.contains("show-hint") ? "Hide hint" : "Show hint"; });
    });
    var form = body.querySelector("form"), msg = body.querySelector(".ctf-msg");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var r = submitFlag(form.querySelector("input").value);
      var m = body.querySelector(".ctf-msg");
      if (m) { m.textContent = r.msg; m.style.color = r.ok ? "#6ee77d" : "#ff6b6b"; }
    });
    body.querySelector("[data-reset]").addEventListener("click", function () {
      solved = [false, false, false, false, false]; store("ctf", solved); renderCTF();
    });
    void msg;
  }

  /* =====================================================================
     7. TERMINAL
     ===================================================================== */
  var HOME = "/home/" + CONFIG.user;
  function file(content) { return { type: "file", content: content }; }
  function dir(children) { return { type: "dir", children: children }; }
  var FS = dir({
    home: dir({
      aitor: dir({
        "about.txt": file(function () {
          return CONFIG.name + "\n" + CONFIG.role + "\n\n" +
            "Second-year Cybersecurity student focused on offensive security:\nethical hacking, vulnerability assessment and access control.\n" +
            "Looking for a summer 2027 internship in Europe.\n";
        }),
        "contact.txt": file(function () {
          return "email     " + CONFIG.email + "\n" + (CONFIG.linkedin ? "linkedin  " + CONFIG.linkedin + "\n" : "") +
            (GITHUB_URL ? "github    " + GITHUB_URL + "\n" : "") + "credly    " + CONFIG.credly + "\n";
        }),
        "certs.txt": file(function () {
          return BADGES.map(function (b) { return "[✓] " + b.name + " — " + b.issuer + " (" + b.date + ")\n    " + b.url; }).join("\n") + "\n";
        }),
        projects: dir({
          "README.md": file(function () {
            return PROJECTS.map(function (p) { return "# " + p.title + "  [" + (p.status === "done" ? "completed" : "in progress") + "]\n" + p.sub + "\n" + p.text + "\n"; }).join("\n");
          })
        }),
        challenges: dir({
          "README.txt": file("Two files were recovered from an old laptop.\nOne was captured on the wire, the other is a personal note.\nNeither is really encrypted.\n\nTools: base64 -d, rot13 (pipes work: cat file | tool)\nSubmit flags with: submit flag{...}\n"),
          "intercepted.txt": file(function () { return un("==gCLBjbidXRER2ds52YqVjMNZmUI1Ud5EzY4hjROJTT6NGMJJTZuZ0Ri1GcnxUd5cVYwIEWllnTtJGbCNEZ2VzRJN3YtJGcSJjYqVzVadGNXl1ZNhVYnFlaOxmTYl1QCl2T5ZVbZRnVXJGbKZUSolkMiFnQDpld5IjU"); }),
          "notes.txt": file(function () { return un("=oQf4BHNv9lZzcGNnBTZfNTMnBTZ7Rnb5NnCuMTMgMnYgc2c2VnZgUmbmJnbQBibgU3Z2pGI05WezBic1dGIyFnd1BiOzlncmBiYnBicnJWQ"); })
        }),
        ".secret": file(function () { return un("=oQfuNDZkFDafRHMu91MyRzXzNDbxYGdwQ2enFGbmpgLh1CIzxGIoRXa3Byc0JXY0NHIzlXY3xWYg42bjVmcgwWYlJFIuUGbpZGIuVGZklGagEGIk5WdvZGI19WW"); }),
        ".bash_history": file("ls\ncd challenges\ncat notes.txt\nsudo -l\nexit\n")
      })
    }),
    root: dir({ "flag.txt": file(function () { return un("K03YzNjdxIHcfRmbxY2Xz5WMiBjZ0d2enFGbmpgLjNXZ2lmcwByculmQPZEVHByYpN3chx2YgUGa0BCLk5WamBibvBSZsVncg8GZ1NHIhBCZlNXdiFGI19WWgECdv9mU"); }) }),
    etc: dir({
      passwd: file("root:x:0:0:root:/root:/bin/sh\n" + CONFIG.user + ":x:1000:1000:" + CONFIG.name + ":" + HOME + ":/bin/ash\n"),
      hostname: file(CONFIG.host + "\n"),
      motd: file("Welcome to AitorOS. Unauthorized access is... actually encouraged here. Try the CTF.\n")
    }),
    usr: dir({ bin: dir({ find: file("ELF binary"), sudo: file("ELF binary"), base64: file("ELF binary"), rot13: file("ELF binary") }) }),
    tmp: dir({})
  });

  function resolve(cwd, p) {
    if (!p || p === "~") return HOME;
    if (p.indexOf("~/") === 0) p = HOME + p.slice(1);
    var parts = (p[0] === "/" ? p : cwd + "/" + p).split("/"), out = [];
    parts.forEach(function (s) { if (!s || s === ".") return; if (s === "..") out.pop(); else out.push(s); });
    return "/" + out.join("/");
  }
  function getNode(path) {
    if (path === "/") return FS;
    var node = FS, parts = path.split("/").filter(Boolean);
    for (var i = 0; i < parts.length; i++) {
      if (!node || node.type !== "dir" || !node.children[parts[i]]) return null;
      node = node.children[parts[i]];
    }
    return node;
  }
  function readFile(node) { return typeof node.content === "function" ? node.content() : node.content; }
  function short(path) { return path === HOME ? "~" : path.indexOf(HOME + "/") === 0 ? "~" + path.slice(HOME.length) : path; }

  var NEOFETCH_ART = [
    "      .----------.     ",
    "     /  .------.  \\    ",
    "    |  /        \\  |   ",
    "    |  |   /\\   |  |   ",
    "    |  |  /  \\  |  |   ",
    "    |  |  \\  /  |  |   ",
    "     \\  \\  \\/  /  /    ",
    "      \\  '----'  /     ",
    "       '.______.'      "
  ];

  function renderTerminal(body, win) {
    var state = { cwd: HOME, root: false, hist: store("hist") || [], hi: -1 };
    body.innerHTML = '<div class="term"><pre class="out"></pre><div class="line"><span class="ps"></span><input type="text" aria-label="Terminal input" autocomplete="off" autocapitalize="off" spellcheck="false"></div></div>';
    var term = body.querySelector(".term"), out = body.querySelector(".out"), input = body.querySelector("input"), ps = body.querySelector(".ps");

    function prompt() { return (state.root ? "root" : CONFIG.user) + "@" + CONFIG.host + " " + short(state.cwd) + (state.root ? " #" : " %"); }
    function setPrompt() {
      ps.textContent = prompt(); ps.classList.toggle("root", state.root);
      if (win) win.setTitle((state.root ? "root" : CONFIG.user) + "@" + CONFIG.host + ": " + short(state.cwd));
    }
    function print(html) { out.insertAdjacentHTML("beforeend", html + "\n"); term.scrollTop = term.scrollHeight; }
    function text(s, cls) { print(cls ? '<span class="' + cls + '">' + esc(s) + "</span>" : esc(s)); }

    var COMMANDS = {
      help: function () {
        return '<span class="t-acc">AitorOS shell — available commands</span>\n' +
          [["about", "who is Aitor"], ["projects", "list projects"], ["certs", "list certifications"], ["contact", "how to reach Aitor"],
           ["open <app>", "about, projects, certs, ctf, contact"], ["neofetch", "system info"], ["ls [-a] [path]", "list files"], ["cd <dir>", "change directory"],
           ["cat <file>", "print a file"], ["pwd, whoami, id, date, echo, history, clear", ""], ["base64 [-d] <text>", "encode / decode"], ["rot13 <text>", "rotate letters by 13"],
           ["sudo <cmd>", "run as root (if allowed)"], ["ctf", "CTF progress"], ["submit <flag>", "submit a CTF flag"], ["hint <1-5>", "hint for a challenge"],
           ["wallpaper [name]", "dusk, ocean, ember, grid"], ["reboot", "restart AitorOS"]]
          .map(function (c) { return "  " + esc(c[0]).padEnd(46, " ").replace(/^(\s+\S+)/, '<span class="t-mint">$1</span>') + '<span class="t-dim">' + esc(c[1]) + "</span>"; }).join("\n") +
          '\n\n<span class="t-dim">Tip: Tab autocompletes, ↑/↓ browse history, pipes work (cat file | base64 -d).</span>';
      },
      about: function () { return esc(readFile(getNode(HOME + "/about.txt"))); },
      projects: function () { openApp("projects"); return esc(readFile(getNode(HOME + "/projects/README.md"))); },
      certs: function () { return esc(readFile(getNode(HOME + "/certs.txt"))); },
      contact: function () { return esc(readFile(getNode(HOME + "/contact.txt"))); },
      whoami: function () { return state.root ? "root" : CONFIG.user; },
      id: function () { return state.root ? "uid=0(root) gid=0(root) groups=0(root)" : "uid=1000(" + CONFIG.user + ") gid=1000(" + CONFIG.user + ") groups=1000(" + CONFIG.user + "),27(sudo)"; },
      hostname: function () { return CONFIG.host; },
      uname: function (a) { return a[0] === "-a" ? "AitorOS " + CONFIG.host + " 1.0.0 JavaScript " + navigator.platform : "AitorOS"; },
      pwd: function () { return state.cwd; },
      date: function () { return new Date().toString(); },
      echo: function (a) { return esc(a.join(" ")); },
      clear: function () { out.innerHTML = ""; return null; },
      history: function () { return state.hist.map(function (h, i) { return String(i + 1).padStart(4, " ") + "  " + esc(h); }).join("\n"); },
      exit: function () { if (state.root) { state.root = false; setPrompt(); return null; } if (win) win.close(); return null; },
      reboot: function () { location.reload(); return null; },
      open: function (a) {
        var id = (a[0] || "").toLowerCase();
        if (!APPS[id]) return '<span class="t-err">open: unknown app \'' + esc(id) + "'. Try: about, projects, certs, ctf, contact</span>";
        openApp(id); return '<span class="t-dim">Opening ' + APPS[id].title + "…</span>";
      },
      wallpaper: function (a) {
        if (!a[0]) return "Wallpapers: " + WALLS.join(", ") + "  (current: " + document.body.dataset.wall + ")";
        if (WALLS.indexOf(a[0]) < 0) return '<span class="t-err">wallpaper: unknown \'' + esc(a[0]) + "'</span>";
        setWall(a[0]); return '<span class="t-dim">Wallpaper set to ' + esc(a[0]) + ".</span>";
      },
      ls: function (a) {
        var all = a.indexOf("-a") >= 0 || a.indexOf("-la") >= 0 || a.indexOf("-al") >= 0, long = /^-\w*l/.test(a.join(" "));
        var target = a.filter(function (x) { return x[0] !== "-"; })[0];
        var path = resolve(state.cwd, target || "."), node = getNode(path);
        if (!node) return '<span class="t-err">ls: ' + esc(target) + ": No such file or directory</span>";
        if (path.indexOf("/root") === 0 && !state.root) return '<span class="t-err">ls: ' + esc(target || path) + ": Permission denied</span>";
        if (node.type === "file") return esc(target);
        var names = Object.keys(node.children).filter(function (n) { return all || n[0] !== "."; }).sort();
        if (all) names = [".", ".."].concat(names);
        var fmt = function (n) { var c = node.children[n]; return c && c.type === "dir" || n === "." || n === ".." ? '<span class="t-acc">' + esc(n) + "/</span>" : esc(n); };
        if (long) return names.map(function (n) { var c = node.children[n]; var d = !c || c.type === "dir"; return (d ? "drwxr-xr-x" : "-rw-r--r--") + "  " + (state.root ? "root " : CONFIG.user) + "  " + fmt(n); }).join("\n");
        return names.map(fmt).join("   ");
      },
      cd: function (a) {
        var path = resolve(state.cwd, a[0] || "~"), node = getNode(path);
        if (!node) return '<span class="t-err">cd: no such file or directory: ' + esc(a[0]) + "</span>";
        if (node.type !== "dir") return '<span class="t-err">cd: not a directory: ' + esc(a[0]) + "</span>";
        if (path.indexOf("/root") === 0 && !state.root) return '<span class="t-err">cd: permission denied: ' + esc(a[0]) + "</span>";
        state.cwd = path; setPrompt(); return null;
      },
      cat: function (a) {
        if (!a.length) return '<span class="t-err">cat: missing file operand</span>';
        return a.map(function (f) {
          var path = resolve(state.cwd, f), node = getNode(path);
          if (!node) return '<span class="t-err">cat: ' + esc(f) + ": No such file or directory</span>";
          if (node.type === "dir") return '<span class="t-err">cat: ' + esc(f) + ": Is a directory</span>";
          if (path.indexOf("/root") === 0 && !state.root) return '<span class="t-err">cat: ' + esc(f) + ": Permission denied</span>";
          return esc(readFile(node)).replace(/\n$/, "");
        }).join("\n");
      },
      base64: function (a, stdin) {
        var dec = a[0] === "-d" || a[0] === "--decode", rest = a.filter(function (x) { return x[0] !== "-"; }).join(" "), s = stdin != null ? stdin : rest;
        if (!s) return '<span class="t-err">usage: base64 [-d] &lt;text&gt;  or  cat file | base64 -d</span>';
        try { return esc(dec ? decodeURIComponent(escape(atob(s.replace(/\s+/g, "")))).replace(/\n$/, "") : btoa(unescape(encodeURIComponent(s)))); }
        catch (e) { return '<span class="t-err">base64: invalid input</span>'; }
      },
      rot13: function (a, stdin) { var s = stdin != null ? stdin : a.join(" "); return s ? esc(rot13(s)) : '<span class="t-err">usage: rot13 &lt;text&gt;</span>'; },
      grep: function (a, stdin) {
        if (!a[0]) return '<span class="t-err">usage: grep &lt;pattern&gt;</span>';
        var src = stdin != null ? stdin : (a[1] ? (getNode(resolve(state.cwd, a[1])) || {}).content : "");
        if (typeof src === "function") src = src();
        return esc((src || "").split("\n").filter(function (l) { return l.indexOf(a[0]) >= 0; }).join("\n"));
      },
      sudo: function (a) {
        if (!a.length) return "usage: sudo -l | sudo &lt;command&gt;";
        if (state.root) return run(a.join(" "));
        if (a[0] === "-l") return "Matching Defaults entries for " + CONFIG.user + " on " + CONFIG.host + ":\n    env_reset, secure_path=/usr/bin\n\nUser " + CONFIG.user + " may run the following commands on " + CONFIG.host + ':\n    (root) NOPASSWD: <span class="t-yel">/usr/bin/find</span>';
        if (a[0] === "su" || a[0] === "-i" || a[0] === "-s" || a[0] === "bash" || a[0] === "sh") return '<span class="t-err">Sorry, user ' + CONFIG.user + " is not allowed to execute '" + esc(a.join(" ")) + "' as root on " + CONFIG.host + ".</span>";
        if (a[0] === "find" || a[0] === "/usr/bin/find") {
          var execAt = a.indexOf("-exec");
          if (execAt < 0) return ". \n./about.txt\n./contact.txt\n./certs.txt\n./projects\n./challenges";
          var cmd = a.slice(execAt + 1).filter(function (x) { return x !== "\\;" && x !== ";" && x !== "{}" && x !== "+"; });
          var bin = (cmd[0] || "").replace(/^\/(usr\/)?bin\//, "");
          if (bin === "sh" || bin === "bash" || bin === "ash" || bin === "zsh") {
            state.root = true; setPrompt();
            return '<span class="t-dim"># spawned a root shell through find -exec. Type exit to drop privileges.</span>';
          }
          if (bin === "cat" && cmd[1]) { var was = state.root; state.root = true; var r = COMMANDS.cat(cmd.slice(1)); state.root = was; return r; }
          if (cmd.length) { var prev = state.root; state.root = true; var res = run(cmd.join(" ")); state.root = prev; return res; }
          return '<span class="t-err">find: missing argument to `-exec\'</span>';
        }
        return '<span class="t-err">Sorry, user ' + CONFIG.user + " is not allowed to execute '" + esc(a.join(" ")) + "' as root on " + CONFIG.host + ".</span>";
      },
      su: function () { return '<span class="t-err">su: Authentication failure</span>'; },
      ctf: function () {
        openApp("ctf");
        return CHALLENGES.map(function (c, i) { return (solved[i] ? '<span class="t-ok">[✓]</span> ' : '<span class="t-dim">[ ]</span> ') + (i + 1) + ". " + esc(c.title) + ' <span class="t-dim">(' + c.cat + ", " + c.pts + " pts)</span>"; }).join("\n") +
          "\n\nScore: " + ctfScore() + "/" + ctfTotal() + '  <span class="t-dim">· submit flag{...} · hint &lt;n&gt;</span>';
      },
      submit: function (a) { var r = submitFlag(a.join(" ")); return '<span class="' + (r.ok ? "t-ok" : "t-err") + '">' + esc(r.msg) + "</span>"; },
      hint: function (a) { var n = parseInt(a[0], 10); if (!(n >= 1 && n <= 5)) return "usage: hint &lt;1-5&gt;"; return '<span class="t-yel">Hint ' + n + ":</span> " + esc(CHALLENGES[n - 1].hint); },
      neofetch: function () {
        var up = Math.max(1, Math.round((Date.now() - bootTime) / 60000));
        var info = [
          '<span class="t-mint">' + (state.root ? "root" : CONFIG.user) + "</span>@<span class=\"t-mint\">" + CONFIG.host + "</span>",
          "-------------------",
          '<span class="t-acc">OS</span>: AitorOS 1.0 (browser edition)',
          '<span class="t-acc">Host</span>: ' + esc(CONFIG.name),
          '<span class="t-acc">Kernel</span>: JavaScript',
          '<span class="t-acc">Uptime</span>: ' + up + " min",
          '<span class="t-acc">Shell</span>: ash 1.0',
          '<span class="t-acc">Resolution</span>: ' + window.innerWidth + "x" + window.innerHeight,
          '<span class="t-acc">Study</span>: BSc Cybersecurity, EUNEIZ',
          '<span class="t-acc">Focus</span>: Offensive security',
          '<span class="t-acc">Languages</span>: ES, EU, EN',
          '<span class="t-acc">CTF</span>: ' + solved.filter(Boolean).length + "/5 flags"
        ];
        var lines = [];
        for (var i = 0; i < Math.max(NEOFETCH_ART.length, info.length); i++) {
          lines.push('<span class="t-mint">' + esc(NEOFETCH_ART[i] || "                       ") + "</span>" + (info[i] || ""));
        }
        return lines.join("\n");
      }
    };
    COMMANDS.ll = function (a) { return COMMANDS.ls(["-la"].concat(a)); };
    COMMANDS.man = function (a) { return a[0] && COMMANDS[a[0]] ? "Try: help" : "What manual page do you want?"; };
    COMMANDS.rm = function (a) { return /-rf?\s*\/?$/.test(a.join(" ")) || a.join(" ") === "-rf /" ? '<span class="t-err">Nice try. This system is read-only.</span>' : '<span class="t-err">rm: read-only file system</span>'; };

    function tokenize(s) { return (s.match(/"[^"]*"|'[^']*'|\S+/g) || []).map(function (t) { return t.replace(/^["']|["']$/g, ""); }); }
    function strip(html) { var d = document.createElement("div"); d.innerHTML = html == null ? "" : html; return d.textContent; }
    function run(line, stdin) {
      var t = tokenize(line), name = (t.shift() || "").toLowerCase();
      if (!name) return null;
      var fn = COMMANDS[name];
      if (!fn) return '<span class="t-err">ash: command not found: ' + esc(name) + "</span>";
      return fn(t, stdin);
    }
    function exec(line) {
      var stages = line.split("|").map(function (s) { return s.trim(); }).filter(Boolean), result = null;
      for (var i = 0; i < stages.length; i++) result = run(stages[i], i ? strip(result) : undefined);
      return result;
    }

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var line = input.value; input.value = "";
        print('<span class="ps' + (state.root ? " root" : "") + '">' + esc(prompt()) + "</span> " + esc(line));
        if (line.trim()) { state.hist.push(line); if (state.hist.length > 100) state.hist.shift(); store("hist", state.hist); }
        state.hi = -1;
        var r = exec(line);
        if (r != null && r !== "") print(r);
      } else if (e.key === "ArrowUp") {
        e.preventDefault(); if (!state.hist.length) return;
        state.hi = state.hi < 0 ? state.hist.length - 1 : Math.max(0, state.hi - 1); input.value = state.hist[state.hi];
      } else if (e.key === "ArrowDown") {
        e.preventDefault(); if (state.hi < 0) return;
        state.hi++; if (state.hi >= state.hist.length) { state.hi = -1; input.value = ""; } else input.value = state.hist[state.hi];
      } else if (e.key === "Tab") {
        e.preventDefault(); complete();
      } else if (e.key.toLowerCase() === "l" && e.ctrlKey) {
        e.preventDefault(); out.innerHTML = "";
      } else if (e.key.toLowerCase() === "c" && e.ctrlKey && !window.getSelection().toString()) {
        print('<span class="ps' + (state.root ? " root" : "") + '">' + esc(prompt()) + "</span> " + esc(input.value) + "^C"); input.value = "";
      }
    });
    function complete() {
      var v = input.value, parts = v.split(" "), last = parts[parts.length - 1], options;
      if (parts.length === 1) options = Object.keys(COMMANDS);
      else if (parts[0] === "open") options = Object.keys(APPS);
      else if (parts[0] === "wallpaper") options = WALLS;
      else {
        var slash = last.lastIndexOf("/"), base = slash >= 0 ? last.slice(0, slash + 1) : "", node = getNode(resolve(state.cwd, base || "."));
        options = node && node.type === "dir" ? Object.keys(node.children).map(function (n) { return base + n + (node.children[n].type === "dir" ? "/" : ""); }) : [];
        if (last.indexOf(base + ".") !== 0) options = options.filter(function (o) { return o.slice(base.length)[0] !== "."; });
      }
      var m = options.filter(function (o) { return o.indexOf(last) === 0; });
      if (m.length === 1) { parts[parts.length - 1] = m[0] + (parts.length === 1 || m[0].slice(-1) !== "/" ? " " : ""); input.value = parts.join(" "); }
      else if (m.length > 1) {
        print('<span class="ps' + (state.root ? " root" : "") + '">' + esc(prompt()) + "</span> " + esc(v));
        print('<span class="t-dim">' + esc(m.join("   ")) + "</span>");
        var pre = m.reduce(function (a, b) { var i = 0; while (i < a.length && a[i] === b[i]) i++; return a.slice(0, i); });
        parts[parts.length - 1] = pre; input.value = parts.join(" ");
      }
    }
    term.addEventListener("mouseup", function () { if (!window.getSelection().toString()) input.focus(); });

    print('<span class="t-dim">Last login: ' + new Date().toDateString() + " on ttys000</span>");
    print(esc(readFile(getNode("/etc/motd")).trim()));
    print('Type <span class="t-mint">help</span> to see what you can do.');
    setPrompt();
    setTimeout(function () { input.focus(); }, 60);
    return { focus: function () { input.focus(); } };
  }

  /* =====================================================================
     8. WINDOW MANAGER
     ===================================================================== */
  var wins = {}, zTop = 10, focused = null;
  var saved = store("win") || {};

  function openApp(id) {
    var app = APPS[id]; if (!app) return;
    if (wins[id]) { var w = wins[id]; if (w.minimized) restore(id); focusWin(id); return; }
    bounceDock(id);
    var area = $("#windows").getBoundingClientRect();
    var n = Object.keys(wins).length, pos = saved[id];
    var w0 = Math.min(app.w, area.width - 24), h0 = Math.min(app.h, area.height - 100);
    var x = pos ? pos.x : Math.max(12, (area.width - w0) / 2 + n * 26 - 40);
    var y = pos ? pos.y : Math.max(10, (area.height - 90 - h0) / 2 + n * 22 - 20);
    var ww = pos ? pos.w : w0, hh = pos ? pos.h : h0;
    x = Math.min(Math.max(0, x), Math.max(0, area.width - 120)); y = Math.min(Math.max(0, y), Math.max(0, area.height - 80));

    var win = el("section", "win");
    win.setAttribute("role", "dialog"); win.setAttribute("aria-label", app.title);
    win.style.cssText = "left:" + x + "px;top:" + y + "px;width:" + ww + "px;height:" + hh + "px";
    win.innerHTML =
      '<div class="titlebar"><div class="traffic">' +
        '<button class="t-close" aria-label="Close">' + SVG.x + '</button>' +
        '<button class="t-min" aria-label="Minimise">' + SVG.minus + '</button>' +
        '<button class="t-max" aria-label="Maximise">' + SVG.plus + '</button>' +
      '</div><span class="wtitle"></span></div><div class="wbody"></div><div class="resize" aria-hidden="true"></div>';
    $("#windows").appendChild(win);
    var title = win.querySelector(".wtitle"); title.textContent = app.title;

    var rec = { id: id, el: win, minimized: false, max: false, prev: null,
      setTitle: function (t) { title.textContent = t; },
      close: function () { closeWin(id); } };
    wins[id] = rec;
    var api = app.render(win.querySelector(".wbody"), rec);
    rec.api = api;

    win.addEventListener("pointerdown", function () { focusWin(id); }, true);
    win.querySelector(".t-close").addEventListener("click", function (e) { e.stopPropagation(); closeWin(id); });
    win.querySelector(".t-min").addEventListener("click", function (e) { e.stopPropagation(); minimize(id); });
    win.querySelector(".t-max").addEventListener("click", function (e) { e.stopPropagation(); toggleMax(id); });
    win.querySelector(".titlebar").addEventListener("dblclick", function (e) { if (!e.target.closest(".traffic")) toggleMax(id); });
    win.addEventListener("click", function (e) { var b = e.target.closest("[data-open]"); if (b) openApp(b.dataset.open); });
    makeDraggable(rec); makeResizable(rec);
    focusWin(id); updateDock();
  }

  function focusWin(id) {
    var r = wins[id]; if (!r) return;
    r.el.style.zIndex = ++zTop; focused = id;
    Object.keys(wins).forEach(function (k) { wins[k].el.classList.toggle("inactive", k !== id); });
    $("#active-app").textContent = APPS[id].label || APPS[id].title;
    if (r.api && r.api.focus) r.api.focus();
  }
  function topWindow() {
    var best = null, z = -1;
    Object.keys(wins).forEach(function (k) { var w = wins[k]; if (!w.minimized && +w.el.style.zIndex > z) { z = +w.el.style.zIndex; best = k; } });
    return best;
  }
  function afterHide() { var t = topWindow(); if (t) focusWin(t); else { focused = null; $("#active-app").textContent = "Finder"; } updateDock(); }
  function closeWin(id) {
    var r = wins[id]; if (!r) return;
    delete wins[id];
    r.el.classList.add("closing");
    setTimeout(function () { r.el.remove(); }, 160);
    afterHide();
  }
  function minimize(id) {
    var r = wins[id]; if (!r) return;
    r.minimized = true; r.el.classList.add("minimizing");
    setTimeout(function () { if (r.minimized) { r.el.style.display = "none"; r.el.classList.remove("minimizing"); } }, 320);
    afterHide();
  }
  function restore(id) { var r = wins[id]; r.minimized = false; r.el.style.display = ""; r.el.classList.remove("minimizing"); }
  function toggleMax(id) {
    var r = wins[id]; if (!r || isSmall()) return;
    var s = r.el.style;
    if (!r.max) {
      r.prev = { l: s.left, t: s.top, w: s.width, h: s.height };
      r.el.classList.add("max");
      s.left = "0px"; s.top = "0px"; s.width = "100%"; s.height = "calc(100% - 82px)";
    } else {
      s.left = r.prev.l; s.top = r.prev.t; s.width = r.prev.w; s.height = r.prev.h;
      setTimeout(function () { r.el.classList.remove("max"); }, 220);
    }
    r.max = !r.max;
  }
  function savePos(r) {
    if (r.max || isSmall()) return;
    var s = r.el.style;
    saved[r.id] = { x: parseFloat(s.left), y: parseFloat(s.top), w: parseFloat(s.width), h: parseFloat(s.height) };
    store("win", saved);
  }
  function makeDraggable(r) {
    var bar = r.el.querySelector(".titlebar");
    bar.addEventListener("pointerdown", function (e) {
      if (e.button !== 0 || e.target.closest(".traffic") || isSmall()) return;
      if (r.max) toggleMax(r.id);
      var sx = e.clientX, sy = e.clientY, ox = r.el.offsetLeft, oy = r.el.offsetTop;
      var area = $("#windows").getBoundingClientRect();
      bar.setPointerCapture(e.pointerId);
      function move(ev) {
        var nx = ox + ev.clientX - sx, ny = oy + ev.clientY - sy;
        nx = Math.min(Math.max(nx, 60 - r.el.offsetWidth), area.width - 60);
        ny = Math.min(Math.max(ny, 0), area.height - 40);
        r.el.style.left = nx + "px"; r.el.style.top = ny + "px";
      }
      function up() { bar.removeEventListener("pointermove", move); bar.removeEventListener("pointerup", up); savePos(r); }
      bar.addEventListener("pointermove", move); bar.addEventListener("pointerup", up);
    });
  }
  function makeResizable(r) {
    var h = r.el.querySelector(".resize");
    h.addEventListener("pointerdown", function (e) {
      e.preventDefault(); e.stopPropagation();
      var sx = e.clientX, sy = e.clientY, ow = r.el.offsetWidth, oh = r.el.offsetHeight;
      h.setPointerCapture(e.pointerId);
      function move(ev) { r.el.style.width = Math.max(300, ow + ev.clientX - sx) + "px"; r.el.style.height = Math.max(200, oh + ev.clientY - sy) + "px"; }
      function up() { h.removeEventListener("pointermove", move); h.removeEventListener("pointerup", up); savePos(r); }
      h.addEventListener("pointermove", move); h.addEventListener("pointerup", up);
    });
  }

  /* =====================================================================
     9. DOCK, DESKTOP, MENUS, SPOTLIGHT
     ===================================================================== */
  function buildDock() {
    var inner = $("#dock-inner");
    DOCK_ORDER.forEach(function (id, i) {
      if (i === 5) inner.appendChild(el("span", "dock-sep"));
      var a = APPS[id], b = el("button", "dock-item");
      b.dataset.app = id; b.setAttribute("aria-label", a.label || a.title);
      b.innerHTML = '<span class="label">' + esc(a.label || a.title) + "</span>" + iconHTML(a.icon, a.svg) + '<span class="dot"></span>';
      b.addEventListener("click", function () {
        var w = wins[id];
        if (w && !w.minimized && focused === id) minimize(id); else openApp(id);
      });
      inner.appendChild(b);
    });
    // Magnification
    var dock = $("#dock");
    dock.addEventListener("mousemove", function (e) {
      if (isSmall()) return;
      dock.querySelectorAll(".dock-item").forEach(function (it) {
        var ic = it.querySelector(".app-icon"), r = it.getBoundingClientRect();
        var d = Math.abs(e.clientX - (r.left + r.width / 2)), s = Math.max(0, 1 - d / 130);
        var size = 52 + 26 * s * s;
        ic.style.width = ic.style.height = size + "px";
      });
    });
    dock.addEventListener("mouseleave", function () { dock.querySelectorAll(".dock-item .app-icon").forEach(function (ic) { ic.style.width = ic.style.height = ""; }); });
  }
  function updateDock() { document.querySelectorAll(".dock-item").forEach(function (b) { b.classList.toggle("running", !!wins[b.dataset.app]); }); }
  function bounceDock(id) {
    var b = document.querySelector('.dock-item[data-app="' + id + '"]'); if (!b) return;
    b.classList.remove("bounce"); void b.offsetWidth; b.classList.add("bounce");
    setTimeout(function () { b.classList.remove("bounce"); }, 1150);
  }

  function buildDesktop() {
    var box = $("#desk-icons");
    [["readme", "Read Me.txt", iconHTML("ic-readme", SVG.readme)], ["projects", "Projects", '<span class="app-icon ic-folder">' + SVG.folder + "</span>"], ["ctf", "CTF", iconHTML("ic-ctf", SVG.ctf)]]
      .forEach(function (d) {
        var b = el("button", "desk-icon"); b.innerHTML = d[2].replace("app-icon", "app-icon glyph") + "<span>" + d[1] + "</span>";
        b.addEventListener("click", function (e) {
          e.stopPropagation(); box.querySelectorAll(".desk-icon").forEach(function (x) { x.classList.remove("sel"); }); b.classList.add("sel");
          if (e.pointerType === "touch") openApp(d[0]);
        });
        b.addEventListener("dblclick", function () { openApp(d[0]); });
        b.addEventListener("keydown", function (e) { if (e.key === "Enter") openApp(d[0]); });
        box.appendChild(b);
      });
    $("#desktop").addEventListener("click", function (e) {
      if (e.target.id === "desktop" || e.target.id === "windows" || e.target.id === "desk-icons") box.querySelectorAll(".desk-icon").forEach(function (x) { x.classList.remove("sel"); });
    });
  }

  var WALLS = ["dusk", "ocean", "ember", "grid"];
  function setWall(w) { document.body.dataset.wall = w; store("wall", w); }

  var MENUS = {
    logo: function () { return [["About AitorOS", function () { toast("AitorOS 1.0", "Portfolio of " + CONFIG.name + ". Built with HTML, CSS and JavaScript, no frameworks."); }], "-",
      ["Change Wallpaper", function () { setWall(WALLS[(WALLS.indexOf(document.body.dataset.wall) + 1) % WALLS.length]); }],
      ["Reset Window Positions", function () { saved = {}; store("win", saved); toast("Done", "Windows will open in their default place."); }], "-",
      ["Restart…", function () { location.reload(); }]]; },
    file: function () { return [["New Terminal", function () { openApp("terminal"); }, "⌃T"], ["Close Window", function () { if (focused) closeWin(focused); }, "⌃W"]]; },
    go: function () { return DOCK_ORDER.concat(["readme"]).map(function (id) { return [APPS[id].label || APPS[id].title, function () { openApp(id); }]; }); },
    help: function () { return [["How to use AitorOS", function () { openApp("readme"); }], ["Start the CTF", function () { openApp("ctf"); }], ["Search apps", openSpot, "⌃K"]]; }
  };
  var openMenuBtn = null;
  function showMenu(btn, key) {
    var pop = $("#menu-pop");
    if (openMenuBtn === btn) { hideMenu(); return; }
    hideMenu();
    pop.innerHTML = "";
    MENUS[key]().forEach(function (m) {
      if (m === "-") { pop.appendChild(el("hr")); return; }
      var b = el("button", null, "<span>" + esc(m[0]) + '</span><span class="k">' + (m[2] || "") + "</span>");
      b.setAttribute("role", "menuitem");
      b.addEventListener("click", function () { hideMenu(); m[1](); });
      pop.appendChild(b);
    });
    var r = btn.getBoundingClientRect();
    pop.style.left = Math.min(r.left, window.innerWidth - 240) + "px"; pop.style.top = r.bottom + 4 + "px";
    pop.hidden = false; btn.setAttribute("aria-expanded", "true"); openMenuBtn = btn;
  }
  function hideMenu() { $("#menu-pop").hidden = true; if (openMenuBtn) openMenuBtn.setAttribute("aria-expanded", "false"); openMenuBtn = null; }

  var spotSel = 0;
  function openSpot() { $("#spotlight").hidden = false; var i = $("#spot-input"); i.value = ""; drawSpot(); i.focus(); }
  function closeSpot() { $("#spotlight").hidden = true; }
  function spotMatches() {
    var q = $("#spot-input").value.trim().toLowerCase();
    return Object.keys(APPS).filter(function (id) { var t = (APPS[id].label || APPS[id].title).toLowerCase(); return !q || t.indexOf(q) >= 0 || id.indexOf(q) >= 0; });
  }
  function drawSpot() {
    var list = $("#spot-results"), m = spotMatches(); list.innerHTML = "";
    if (spotSel >= m.length) spotSel = 0;
    m.forEach(function (id, i) {
      var li = el("li", null, iconHTML(APPS[id].icon, APPS[id].svg) + "<span>" + esc(APPS[id].label || APPS[id].title) + "</span>");
      li.setAttribute("role", "option"); li.setAttribute("aria-selected", i === spotSel ? "true" : "false");
      li.addEventListener("click", function () { closeSpot(); openApp(id); });
      list.appendChild(li);
    });
  }

  /* =====================================================================
     10. MENU BAR CLOCK + BATTERY
     ===================================================================== */
  function tick() {
    var d = new Date();
    $("#clock").textContent = d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }) + "  " + d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  }
  function battery() {
    var fill = $("#battery-fill");
    if (navigator.getBattery) navigator.getBattery().then(function (b) {
      function set() { fill.setAttribute("width", Math.max(2, 20 * b.level)); $("#battery").title = "Battery " + Math.round(b.level * 100) + "%"; }
      set(); b.addEventListener("levelchange", set);
    }).catch(function () {});
  }

  /* =====================================================================
     11. INIT
     ===================================================================== */
  function init() {
    setWall(store("wall") || "dusk");
    buildDock(); buildDesktop(); tick(); setInterval(tick, 15000); battery();

    $("#logo-btn").addEventListener("click", function (e) { e.stopPropagation(); showMenu(this, "logo"); });
    document.querySelectorAll("[data-menu]").forEach(function (b) { b.addEventListener("click", function (e) { e.stopPropagation(); showMenu(b, b.dataset.menu); }); });
    document.addEventListener("click", function (e) { if (!e.target.closest("#menu-pop")) hideMenu(); });
    $("#spot-btn").addEventListener("click", function (e) { e.stopPropagation(); openSpot(); });
    $("#spotlight").addEventListener("click", function (e) { if (e.target.id === "spotlight") closeSpot(); });
    $("#spot-input").addEventListener("input", function () { spotSel = 0; drawSpot(); });
    $("#spot-input").addEventListener("keydown", function (e) {
      var m = spotMatches();
      if (e.key === "ArrowDown") { e.preventDefault(); spotSel = (spotSel + 1) % Math.max(1, m.length); drawSpot(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); spotSel = (spotSel - 1 + m.length) % Math.max(1, m.length); drawSpot(); }
      else if (e.key === "Enter" && m[spotSel]) { closeSpot(); openApp(m[spotSel]); }
      else if (e.key === "Escape") closeSpot();
    });
    document.addEventListener("keydown", function (e) {
      var k = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && (k === "k" || k === " ")) { e.preventDefault(); $("#spotlight").hidden ? openSpot() : closeSpot(); }
      else if (e.key === "Escape") { hideMenu(); if (!$("#spotlight").hidden) closeSpot(); else if (focused && !(focused === "terminal" && document.activeElement && document.activeElement.closest(".term"))) closeWin(focused); }
      else if (e.ctrlKey && e.altKey && k === "t") { e.preventDefault(); openApp("terminal"); }
    });

    var boot = $("#boot"), firstRun = !sessionStorageGet();
    function finishBoot() {
      if (boot.classList.contains("done")) return;
      boot.classList.add("done"); setTimeout(function () { boot.remove(); }, 600);
      sessionStorageSet();
      openApp("about");
      if (!isSmall()) setTimeout(function () { openApp("readme"); }, 250);
      setTimeout(function () { toast("5 flags are hidden in AitorOS", "Open the CTF app or type ctf in the Terminal."); }, 1400);
    }
    if (!firstRun) { boot.style.display = "none"; finishBoot(); }
    else {
      setTimeout(finishBoot, 2400);
      window.addEventListener("keydown", finishBoot, { once: true });
      boot.addEventListener("click", finishBoot);
    }
  }
  function sessionStorageGet() { try { return sessionStorage.getItem("aitoros-booted"); } catch (e) { return null; } }
  function sessionStorageSet() { try { sessionStorage.setItem("aitoros-booted", "1"); } catch (e) {} }

  init();
})();
