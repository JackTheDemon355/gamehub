# 🎮 Game Hub

> A neon-styled arcade collection of self-contained browser games — no installs, no servers, no frameworks. Just open `index.html` and play.

![Version](https://img.shields.io/badge/version-2.0-00fff2?style=flat-square)
![Games](https://img.shields.io/badge/games-9%20live-39ff14?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-ff2fd0?style=flat-square)
![HTML](https://img.shields.io/badge/built%20with-HTML%20%2B%20JS-ffe600?style=flat-square)

---

## 🕹️ Games

| Game | File | Type | Highlights |
|------|------|------|-----------|
| 🏃 **Neon Runner** | `platformer.html` | Platformer | 25 levels, double jump, wall-slide, wall-jump, pause & settings |
| 🚀 **Galaxia** | `galaxia.html` | Space Shooter | 80 waves, 8 enemy types, boss every 10 waves, 5 power-ups |
| 🐍 **Neon Snake** | `snake.html` | Arcade | Classic / Walls Kill / Maze modes, special pickups, pause |
| 🧱 **Brick Breaker** | `brickbreaker.html` | Arcade | Multi-HP bricks, 5 power-ups, keyboard + mouse/touch |
| 🧩 **Block Fall** | `blockfall.html` | Puzzle | Full Tetris — 7-bag, wall kicks, ghost, hold, DAS/ARR, combos |
| 🏓 **Pong Arena** | `pong.html` | Arcade | 1P vs CPU (Easy/Medium/Hard) or local 2P, 5 power-ups |
| ☄️ **Asteroid Storm** | `asteroids.html` | Action | Thrust/rotate/shoot, asteroids split, UFOs from wave 3 |
| 🃏 **Memory Match** | `memorymatch.html` | Puzzle | 4 grid sizes (4×4 → 6×8), timed, move-scored, 3D flip cards |
| 🔤 **Word Jump** | `wordjump.html` | Word | Neon Wordle — 5-letter words, 6 guesses, clues, streak scoring |

---

## ✨ Features

- **Zero dependencies** — pure HTML, CSS and vanilla JavaScript. No npm, no build step.
- **Offline-ready** — every game runs without an internet connection once downloaded.
- **Neon arcade aesthetic** — scan lines, glows, particle effects, neon colour palette throughout.
- **Hub Settings** — toggle Neon Mode, Scan Lines, Card Glow, Animations, or switch to full Retro Mode (plain colours, no glow) from the hub's ⚙ settings panel. Preferences saved to `localStorage`.
- **Search & filter** — find games instantly by name or category (Action / Puzzle / Arcade / Word).
- **Per-game settings** — Neon Runner has its own in-game settings: Retro Mode, Low Motion, Accessibility (slow hazards), and a full pause menu.
- **Hi-scores** — Galaxia, Snake, Brick Breaker, Block Fall, Asteroid Storm all save high scores to `localStorage`.
- **Mobile / touch** — every game has on-screen touch controls and a responsive layout.
- **Contact page** — `contact.html` with a Formspree form for bug reports and feature requests.
- **Custom logo** — `gamehub-logo.svg` featuring Jasper the dog.

---

## 📁 File Structure

```
gamehub/
├── index.html          ← Hub — game selector, settings, search
├── contact.html        ← Contact / bug report form
├── platformer.html     ← Neon Runner
├── galaxia.html        ← Galaxia: Star Assault
├── snake.html          ← Neon Snake
├── brickbreaker.html   ← Brick Breaker
├── blockfall.html      ← Block Fall (Tetris)
├── pong.html           ← Pong Arena
├── asteroids.html      ← Asteroid Storm
├── memorymatch.html    ← Memory Match
├── wordjump.html       ← Word Jump
└── gamehub-logo.svg    ← Project logo (self-contained, includes Jasper)
```

All files are **self-contained** — every game is a single `.html` file with no external dependencies beyond a few CDN fonts loaded inside the hub.

---

## 🚀 Getting Started

### Option 1 — Just open it
Download the repo as a ZIP, extract it, and open `index.html` in any modern browser. Done.

### Option 2 — Clone
```bash
git clone https://github.com/JackTheDemon355/gamehub.git
cd gamehub
open index.html   # macOS
# or: start index.html   (Windows)
# or: xdg-open index.html (Linux)
```

### Option 3 — Host it (GitHub Pages, Netlify, Cloudflare Pages)
Push the folder to a GitHub repo, go to **Settings → Pages**, set source to `main` branch. Your hub will be live at `https://yourusername.github.io/gamehub` — free forever.

---

## 🎮 Controls Quick Reference

| Game | Move | Action |
|------|------|--------|
| Neon Runner | `A` `D` / `← →` | `Space` / `W` / `↑` jump · `ESC` pause · `R` restart |
| Galaxia | `A` `D` / `← →` | `Space` fire · `Shift` bomb |
| Neon Snake | `WASD` / `← ↑ → ↓` | `P` pause |
| Brick Breaker | Mouse / `← →` / Touch | Click / tap to launch |
| Block Fall | `← →` move · `↑`/`Z` rotate | `Space` hard drop · `C` hold · `P` pause |
| Pong Arena | `W` `S` (P1) · `↑` `↓` (P2) | — |
| Asteroid Storm | `← →` rotate · `↑` thrust | `Space` fire · `Shift` bomb |
| Memory Match | Click / tap cards | — |
| Word Jump | On-screen keyboard / physical keyboard | `Enter` submit · `⌫` delete |

---

## 🗺️ Roadmap

| Game | Status |
|------|--------|
| Tower Defense | 🔜 Coding... |
| Pixel Invaders | 🔜 Coming Soon |
| Slide Puzzle | 🔜 Coming Soon |
| Void Dash (endless runner) | 🔜 Coming Soon |
| Beat Smash (rhythm) | 🔜 Coming Soon |

---

## 🐛 Bug Reports & Contact

Found a bug or want to suggest a new game?

- 📧 **Email:** [jvanwijk.business@outlook.com](mailto:jvanwijk.business@outlook.com)
- 🌐 **Contact page:** `contact.html` (in-hub form, powered by Formspree)
- 🐙 **GitHub Issues:** [Open an issue](https://github.com/JackTheDemon355/gamehub/issues)

---

## 📸 Mascot

Meet **Jasper** — the official Game Hub mascot. He appears in the logo and approves of all bug fixes (while sleeping).

---

## 📄 License

MIT License — free to use, modify, and distribute. See `LICENSE` for details.

---

<div align="center">

**Built by Jack** &nbsp;•&nbsp; All games run offline &nbsp;•&nbsp; No frameworks, no nonsense

⭐ Star the repo if you enjoy it!

</div>
