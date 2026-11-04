# AitorOS

Portfolio of **Aitor Gómez**, Cybersecurity student at EUNEIZ, built as a macOS-style desktop that runs in the browser. Vanilla HTML, CSS and JavaScript — no build step, no dependencies.

## What's inside

- **Boot screen**, translucent **menu bar** with live clock and battery, and a **Dock** with magnification.
- **Windows** with traffic-light buttons: drag, resize, minimise to the Dock, maximise (double-click the title bar). Positions are remembered.
- **About Me** — profile, education, experience and languages.
- **Projects** — Finder-style list of completed and in-progress work.
- **Certifications** — Cisco badges linked to Credly.
- **Contact** — email, LinkedIn, GitHub and Credly.
- **Terminal** — interactive shell with a fake file system. Type `help`.
- **CTF** — five beginner challenges (recon, crypto, web, Linux privesc) hidden in the system. Type `ctf` in the Terminal or open the app.
- **Spotlight-style search** with `Ctrl` + `K`, and four wallpapers (logo menu or `wallpaper` command).
- Works on mobile: windows open full-screen and the Dock stays at the bottom.

## Terminal commands

`help`, `about`, `projects`, `certs`, `contact`, `open <app>`, `neofetch`, `ls [-a]`, `cd`, `cat`, `pwd`, `whoami`, `id`, `date`, `echo`, `history`, `clear`, `base64 [-d]`, `rot13`, `grep`, `sudo`, `ctf`, `submit <flag>`, `hint <n>`, `wallpaper [name]`, `reboot`

Tab autocompletes, ↑/↓ browse history, and pipes work (`cat file | base64 -d`).

## Running it

Open `index.html` in a browser, or serve the folder with any static server (for example `python -m http.server`). It works as-is on GitHub Pages.

## Editing the content

Everything is at the top of `script.js`:

- `CONFIG` — name, email, **LinkedIn URL**, **GitHub username** (detected automatically on `<user>.github.io`), Credly link and an optional photo.
- `EDUCATION`, `EXPERIENCE`, `LANGUAGES`, `INTERESTS` — the About Me window.
- `BADGES` — certifications.
- `PROJECTS` — add new projects at the top of the list.

> Spoiler warning: the CTF solutions are in `script.js` (lightly obfuscated). Please don't publish write-ups.
