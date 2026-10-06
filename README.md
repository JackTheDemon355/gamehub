# 🎮 Game Hub

> **We Code, You Game.**

A neon-styled arcade collection of self-contained browser games — no installs, no servers, no frameworks. Open `index.html` and play.

![Games](https://img.shields.io/badge/games-17%20live-39ff14?style=flat-square)
![Version](https://img.shields.io/badge/version-3.0-00fff2?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-ff2fd0?style=flat-square)
![Built with](https://img.shields.io/badge/built%20with-HTML%20%2B%20JS-ffe600?style=flat-square)

**Live at:** https://jackthedemon355.github.io/gamehub/

---

## 🕹️ Live Games (17)

| # | Game | File | Category | Made by | Highlights |
|---|------|------|----------|---------|-----------|
| 1 | 🏃 **Neon Runner** | `neonrunner.html` | Platformer | Jack | 25 levels, double jump, wall-slide/jump, saws, drones, pause |
| 2 | 🚀 **Galaxia** | `galaxia.html` | Shooter | Jack | 80 waves, 8 enemy types, boss every 10 waves, power indicator |
| 3 | 🐍 **Neon Snake** | `snake.html` | Arcade | Jack | Classic/Walls Kill/Maze modes, boost bar, buffered input |
| 4 | 🧱 **Brick Breaker** | `brickbreaker.html` | Arcade | Jack | Mouse/touch/keyboard, 5 power-ups, multi-ball, fireball |
| 5 | 🧩 **Block Fall** | `blockfall.html` | Puzzle | Jack | Full Tetris — 7-bag, wall kicks, ghost, hold, combos, hi-score |
| 6 | 🏓 **Pong Arena** | `pong.html` | Arcade | Jack | 1P vs CPU (3 difficulties) or 2P local, 5 power-ups, series wins |
| 7 | ☄️ **Asteroid Storm** | `asteroids.html` | Action | Jack | Thrust/rotate/shoot, UFOs, bombs, infinite waves |
| 8 | 🃏 **Memory Match** | `memorymatch.html` | Puzzle | Jack | 3-second preview, 5 themes, 5 grid sizes, sound feedback |
| 9 | 🔤 **Word Jump** | `wordjump.html` | Word | Jack | Neon Wordle — 4/5/6 letters, clues, custom word mode, streaks |
| 10 | 🔦 **Stranger Things Clicker** | `strangerthingsclicker.html` | Idle | Oscar | Click the Gate, upgrades, boss fights, Tales From '85 mode |
| 11 | 🗼 **Tower Defense** | `towerdefense.html` | Strategy | Jack | 30 waves, 4 tower types (Gun/Cannon/Laser/Frost), upgrade L3 |
| 12 | 🧟 **Zombie Apocalypse** | `zombieapocalypse.html` | Action | Oscar | Top-down survival, WASD+mouse, 4 guns, XP levelling, waves |
| 13 | 🏀 **Hoop Shot** | `hoopshot.html` | Arcade | Edison | Moving hoop, power meter, trajectory guide, combos |
| 14 | 🌍 **GeoGuessr** | `geoguessr.html` | Puzzle | Jack | 20 world landmarks, click-to-guess map, 60s timer, haversine scoring |
| 15 | 🪐 **Planet Maker** | `planetmaker.html` | Creative | Jack | Build planets — size, mass, water, temp, atm, rings, moons, export JSON |
| 16 | 🏷️ **Guess the Logo** | `guessthelogo.html` | Puzzle | Jack | 32 brand logos, blur reveal, timer, 4 categories, combo streaks |
| 17 | 🤖 **Mech Defender** | `mechdefender.html` | Action | Kiko | Giant mech, 4 weapons (cannon/laser/missiles/shield), alien waves |

---

## 🚀 Coming Soon

| Game | Description | Credit |
|------|-------------|--------|
| ⚽ **Ball Course** | Roll a ball through obstacle courses | Peter |
| 🕳️ **Stick Burrow** | Dig tunnels, evade predators | Carter |

---

## ✨ Features

- **Zero dependencies** — pure HTML + CSS + vanilla JS. No npm, no build step.
- **Offline-ready** — every game works without internet after first load.
- **Neon arcade aesthetic** — scan lines, glows, particles, full neon palette, CRT vibes.
- **Lock system** — `lock.json` controls access. Manual lock (`locked: true`) or auto school-hours lock (Mon–Fri 8:15am–3:15pm AWST). SHIFT + key → password prompt. 3 passwords accepted.
- **Auth** — Supabase email/password + Google OAuth + Discord OAuth. Guest saves 4 games, signed-in saves all, Pro saves all + perks.
- **Pro tier** — $2.99/mo via Stripe. Stripe webhook → Supabase Edge Function → `profiles.is_pro = true`.
- **Search & filter** — find by name or category (Action / Puzzle / Arcade / Word / Idle / Strategy / Creative).
- **Settings** — Neon Mode, Scan Lines, Card Glow, Animations, Retro Mode. Saved to localStorage.
- **Newsletter** — subscribe to get emailed when new games drop (via Formspree).
- **Staff panel** — `staff.html` — lock control, Pro management, remote access codes, feature flags.
- **GeoSEO** — Google site verification meta tag on all pages.
- **Favicon** — local `favicon.ico` with GitHub raw URL + OneCompiler fallbacks.

---

## 📁 File Structure

```
gamehub/
├── index.html                 ← Hub — selector, settings, search, newsletter, auth badge
├── login.html                 ← Auth — email, Google, Discord, Pro upgrade
├── staff.html                 ← Staff panel — lock, Pro, remote access, features
├── contact.html               ← Contact / bug report (Formspree)
├── auth.js                    ← Shared Supabase auth helper
├── lock.json                  ← Lock config — locked, school_hours_lock, message
├── favicon.ico                ← Site favicon
├── README.md                  ← This file
│
├── neonrunner.html            ← 25-level precision platformer
├── galaxia.html               ← Space shooter (80 waves)
├── snake.html                 ← Neon Snake (3 modes)
├── brickbreaker.html          ← Brick Breaker
├── blockfall.html             ← Block Fall (Tetris)
├── pong.html                  ← Pong Arena (1P/2P)
├── asteroids.html             ← Asteroid Storm
├── memorymatch.html           ← Memory Match
├── wordjump.html              ← Word Jump (Wordle)
├── strangerthingsclicker.html ← Stranger Things Clicker
├── towerdefense.html          ← Tower Defense (30 waves)
├── zombieapocalypse.html      ← Zombie Apocalypse (top-down)
├── hoopshot.html              ← Hoop Shot (basketball)
├── geoguessr.html             ← GeoGuessr (landmark guessing)
├── planetmaker.html           ← Planet Maker (interactive builder)
├── guessthelogo.html          ← Guess the Logo (brand recognition)
└── mechdefender.html          ← Mech Defender (alien waves)
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/JackTheDemon355/gamehub.git
cd gamehub
# Open index.html directly in browser — no server needed
open index.html
```

Or visit: **https://jackthedemon355.github.io/gamehub/**

---

## 🔒 Lock System

Edit `lock.json` to control access:

```json
{
  "locked": false,
  "school_hours_lock": true,
  "message": "Games are locked during school hours (8:15am–3:15pm AWST, Mon–Fri)."
}
```

| Setting | Effect |
|---------|--------|
| `locked: true` | All games locked always |
| `locked: false` | Manual lock off |
| `school_hours_lock: true` | Auto-lock Mon–Fri 8:15am–3:15pm AWST |

**Passwords** (case-insensitive): `gamehub234` · `oscarmccumstie` · `user13579`

---

## 🔐 Auth & Pro Setup

**Supabase project:** `rxdkdylcfspmiljicwdd`
**Auth providers:** Email · Google · Discord

**Supabase URL Config** (Dashboard → Auth → URL Configuration):
- Site URL: `https://jackthedemon355.github.io/gamehub`
- Redirect URLs: `https://jackthedemon355.github.io/gamehub/login.html`

**profiles table:**
```sql
create table profiles (
  id uuid references auth.users primary key,
  email text,
  display_name text,
  is_pro boolean default false,
  pro_since timestamptz,
  updated_at timestamptz
);
alter table profiles enable row level security;
create policy "Users read own" on profiles for select using (auth.uid() = id);
create policy "Users update own" on profiles for update using (auth.uid() = id);
```

**Stripe webhook:** `https://rxdkdylcfspmiljicwdd.supabase.co/functions/v1/stripe-webhook`

**Edge Function secrets** (Supabase → Settings → Edge Functions → Secrets):
- `STRIPE_SECRET_KEY` — `sk_live_...`
- `STRIPE_WEBHOOK_SECRET` — `whsec_...`
- `SERVICE_ROLE_KEY` — service_role JWT (no `SUPABASE_` prefix — Supabase blocks it)

**After payment redirect:** Set in Stripe → Payment Links → your link → After payment → set to `https://jackthedemon355.github.io/gamehub/login.html`

---

## 🎮 Controls Quick Reference

| Game | Controls |
|------|---------|
| Neon Runner | `A`/`D` move · `Space`/`W` jump · `ESC` pause · `R` restart |
| Galaxia | `A`/`D` move · `Space` fire · `Shift` bomb · `P` pause |
| Neon Snake | `WASD`/arrows · `P` pause |
| Brick Breaker | Mouse/`←→`/touch to move paddle |
| Block Fall | `←→` move · `↑`/`Z` rotate · `Space` hard drop · `C` hold · `P` pause |
| Pong | `W`/`S` (P1) · `↑`/`↓` (P2 or CPU) |
| Asteroid Storm | `←→` rotate · `↑` thrust · `Space` fire · `Shift` bomb · `P` pause |
| Memory Match | Click cards · 3s preview at start |
| Word Jump | On-screen or physical keyboard · `Enter` submit |
| ST Clicker | Click the Gate · buy upgrades |
| Tower Defense | Click to place/upgrade · `R` sell · `ESC` deselect |
| Zombie Apocalypse | `WASD` move · mouse aim · click shoot · `R` reload · `1-4` guns · `B` barricade |
| Hoop Shot | Hold mouse/space to charge · release to shoot |
| GeoGuessr | Click map to guess · submit before timer |
| Planet Maker | Sliders + presets · Export/Import JSON · Save to browser |
| Guess the Logo | Click the correct brand name · faster = more points |
| Mech Defender | `A`/`D` move · mouse aim · click fire · `1-4` weapons · `Shift` boost · `P` pause |

---

## 🐛 Bug Reports

- **Email:** jvanwijk.business@outlook.com
- **Contact form:** [contact.html](contact.html)
- **GitHub Issues:** https://github.com/JackTheDemon355/gamehub/issues

---

## 🐾 Mascot

**Jasper** — the Game Hub dog. Featured in the logo. Approves all commits while napping.

---

## 📄 License

MIT — free to use, modify, and distribute.

---

<div align="center">

**We Code, You Game** · Built by Jack · 17 games and counting

⭐ Star the repo if you enjoy it!

</div>
