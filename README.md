## KAYABA LABS Website

Blockchain R&D lab based in Accra, Ghana — building, training, and incubating for a decentralized future. This repository contains our public website built with Next.js and React, featuring GSAP-powered motion and a modular component system.

### What we do
- Research & Innovation: Applied blockchain research and experimentation
- Training & Capacity Building: Hands-on Web and blockchain education programs
- Project Incubation: Technical mentorship and go-to-market guidance for Web3 startups
- Community: Open workshops, meetups, and developer initiatives across Ghana and globally

---

## Tech stack
- Next.js 13.2.x, React 18
- GSAP for animations
- Bootstrap/Sass styling
- Image assets served from `public/assets`

## Project structure
Key folders at a glance:

- `src/pages/` — Next.js routes (landing page at `/home`)
- `src/components/` — UI components (hero, about, services, workflow, footer, etc.)
- `src/data/navData.json` — Navigation configuration
- `public/assets/` — Images, videos, fonts

Note: The template’s multiple demo routes (e.g., design-studio, digital-agency, dark variants) are hidden and redirected to canonical routes to keep focus on Blockchain R&D.

## Routing and redirects
- Landing page: `/home` (see `src/pages/home.jsx`)
- Legacy: `/digital-marketing` → `/home`
- Template/variant routes (dark, v2–v6, details, demo pages) → redirected to canonical pages (see `next.config.js`).

---

## Getting started (Windows PowerShell)

### Prerequisites
- Node.js 18+ recommended

### Install dependencies
```powershell
npm install
```

### Run the development server
```powershell
npm run dev
```

By default the app serves on http://localhost:3000. If port 3000 is busy, Next.js will use the next available port (e.g., 3001) and log it in the terminal.

### Build for production
```powershell
npm run build
npm start
```

---

## Content and SEO
The site content reflects our mission and Ghana HQ with international reach. Page `<Head>` metadata is updated across core pages (Home, About, Services, Portfolio, Blog, Team, Careers, FAQ).

Image placeholders and motion graphics suggestions are documented in `BLOCKCHAIN_IMAGES_TODO.md`. A high-level change log and messaging coverage summary is available in `CONTENT_UPDATE_SUMMARY.md`.

---

## Branching model
- `main` — active default branch with current website
- `template` — preserved original template source
- `john-dev`, `yini-dev`, `bernie-dev` — feature/developer branches

Create a new feature branch from `main`, open a PR, and request review before merging.

---

## Contributing
1. Create a branch: `git checkout -b feature/your-feature`
2. Install and run locally, make changes
3. Write clear commit messages
4. Open a Pull Request targeting `main`

Coding notes:
- Prefer updating content in components and page metadata first
- Keep navigation in sync via `src/data/navData.json`
- Use existing image filenames when replacing assets to avoid code changes

---

## Troubleshooting
- “Port 3000 in use”: Next.js will automatically try the next port (e.g., 3001)
- After editing `next.config.js`, restart the dev server to apply redirects
- If images don’t appear, confirm paths under `public/assets/...` and case sensitivity

---

## License
© 2022–2025 KAYABA LABS. All rights reserved.
