# Game Hub

> **We Code, You Game.**

A neon-styled arcade collection of self-contained browser games — no installs, no servers, no frameworks. Just open `index.html` and play.

![Version](https://img.shields.io/badge/version-2.1-00fff2?style=flat-square)
![Games](https://img.shields.io/badge/games-12%20live-39ff14?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-ff2fd0?style=flat-square)
![HTML](https://img.shields.io/badge/built%20with-HTML%20%2B%20JS-ffe600?style=flat-square)

---

## 🕹️ Live Games

| # | Game | File | Category | Highlights |
|---|------|------|----------|-----------|
| 1 | 🏃 **Neon Runner** | `platformer.html` | Platformer | 25 levels, double jump, wall-slide/jump, pause + full settings |
| 2 | 🚀 **Galaxia** | `galaxia.html` | Space Shooter | 80 waves, 8 enemy types, boss every 10 waves, pause, power indicator |
| 3 | 🐍 **Neon Snake** | `snake.html` | Arcade | Classic/Walls Kill/Maze, boost bar, buffered input, pause |
| 4 | 🧱 **Brick Breaker** | `brickbreaker.html` | Arcade | Mouse/touch/keyboard paddle, 5 power-ups, level complete flash |
| 5 | 🧩 **Block Fall** | `blockfall.html` | Puzzle | Full Tetris — 7-bag, wall kicks, ghost, hold, combos, hi-score, settings |
| 6 | 🏓 **Pong Arena** | `pong.html` | Arcade | 1P vs CPU (3 difficulties) or 2P local, 5 power-ups, series tracking |
| 7 | ☄️ **Asteroid Storm** | `asteroids.html` | Action | Thrust/rotate/shoot, UFOs, bombs, pause, settings, hi-score |
| 8 | 🃏 **Memory Match** | `memorymatch.html` | Puzzle | 3-second card preview, 5 themes, 5 grid sizes, sound, best score |
| 9 | 🔤 **Word Jump** | `wordjump.html` | Word | Neon Wordle — 4/5/6 letters, clues, custom word mode, streaks |
| 10 | 🔦 **Stranger Things Clicker** | `strangerthingsclicker.html` | Idle | Click the Gate, upgrades, boss fights, Tales From '85 mode. By a friend! |
| 11 | 🗼 **Tower Defense** | `towerdefense.html` | Strategy | 30 waves, 4 tower types (Gun/Cannon/Laser/Frost), upgrade to level 3 |

---

## 🚀 Coming Soon

| Game | Description | Credit |
|------|-------------|--------|
| 🧟 **Zombie Survival** | Top-down zombie waves, weapons, barricades | Oscar |
| 🤖 **Mech Defender** | Giant mech vs alien planet invasion | Kiko |
| 🏀 **Hoop Shot** | Moving basket shooting game | Edison |
| ⚽ **Ball Course** | Ball obstacle course | Peter |
| 🏷️ **Guess the Logo** | Identify logos from blurry images | Jack |
| 🕳️ **Stick Burrow** | Dig tunnels, evade predators | Carter |
| 🪐 **Planet Maker** | Adjust stats, watch planet update live | — |

---

## ✨ Features

- **Zero dependencies** — pure HTML, CSS and vanilla JavaScript. No npm, no build step.
- **Offline-ready** — every game works without internet once downloaded.
- **Neon arcade aesthetic** — scan lines, glows, particles, full neon palette.
- **Hub Settings** — Neon Mode, Scan Lines, Card Glow, Animations, Retro Mode. Saved to `localStorage`.
- **Search & Filter** — find games by name or category (Action / Puzzle / Arcade / Word / Idle / Strategy).
- **Newsletter** — subscribe to get emailed when new games are added (via Formspree).
- **Contact page** — `contact.html` with bug report form.
- **Logo** — `Game_Hub-modified.png` — "We Code, You Game" with Jasper the mascot dog.

---

## 📁 File Structure

```
gamehub/
├── index.html                    ← Hub — game selector, settings, search, newsletter
├── contact.html                  ← Contact / bug report form
├── platformer.html               ← Neon Runner (25 levels)
├── galaxia.html                  ← Galaxia: Star Assault (80 waves)
├── snake.html                    ← Neon Snake (3 modes)
├── brickbreaker.html             ← Brick Breaker
├── blockfall.html                ← Block Fall (Tetris)
├── pong.html                     ← Pong Arena
├── asteroids.html                ← Asteroid Storm
├── memorymatch.html              ← Memory Match
├── wordjump.html                 ← Word Jump
├── strangerthingsclicker.html    ← Stranger Things Clicker
├── towerdefense.html             ← Tower Defense
├── README.md                     ← This file
└── Game_Hub-modified.png         ← Logo
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/JackTheDemon355/gamehub.git
cd gamehub
open index.html
```

Or download as ZIP and open `index.html` directly. No server needed.

**Free hosting options:**
- **GitHub Pages** — Settings → Pages → source: `main` branch → live at `yourusername.github.io/gamehub`
- **Netlify Drop** — drag folder to netlify.com/drop, instantly live
- **Cloudflare Pages** — connect GitHub repo, free unlimited bandwidth

---

## 🎮 Controls

| Game | Move | Action |
|------|------|--------|
| Neon Runner | `A`/`D` or `← →` | `Space`/`W` jump · `ESC` pause · `R` restart |
| Galaxia | `A`/`D` or `← →` | `Space` fire · `Shift` bomb · `P` pause |
| Neon Snake | `WASD` / arrows | `P` pause |
| Brick Breaker | Mouse / `← →` / touch | Click/tap to launch |
| Block Fall | `← →` move · `↑`/`Z` rotate | `Space` hard drop · `C` hold · `P` pause |
| Pong | `W`/`S` (P1) · `↑`/`↓` (P2) | — |
| Asteroid Storm | `← →` rotate · `↑` thrust | `Space` fire · `Shift` bomb · `P` pause |
| Memory Match | Click cards | 3s preview at start |
| Word Jump | On-screen / physical keyboard | `Enter` submit · `Backspace` delete |
| ST Clicker | Click the Gate button | Buy upgrades · defeat bosses |
| Tower Defense | Click grid to place | R sell · ESC deselect |

---

## 🐛 Bug Reports & Contact

- 📧 **Email:** [jvanwijk.business@outlook.com](mailto:jvanwijk.business@outlook.com)
- 🌐 **Contact page:** [contact.html](contact.html)
- 🐙 **GitHub Issues:** [Open an issue](https://github.com/JackTheDemon355/gamehub/issues)

---

## 🐾 Mascot

**Jasper** — the Game Hub mascot dog. Appears in the logo. Approves all bug fixes while sleeping.

---

## 📄 License

MIT — free to use, modify, distribute.

---

<div align="center">

**We Code, You Game** · Built by Jack · All games offline-ready

⭐ Star the repo if you enjoy it!

</div>
