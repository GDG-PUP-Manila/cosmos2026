# AGENTS.md

COSMOS 2026 official event website for GDG on Campus PUP Manila.

## Read order (every session)

1. [docs/state.md](docs/state.md) - Operate / archive position.
2. [docs/index.md](docs/index.md) - inventory of docs that exist.
3. [FLAGS.md](FLAGS.md) - open improvement register.
4. [README.md](README.md) - stack, structure, contributors.

Do not auto-load archive folders (none present beyond treating the live site itself as event archive).

## Operating mode

**Event is over** (March 24, 2026). **Operate mode.** The site remains live as an archive. Do not rebuild as a launch campaign unless asked.

Owner: GDG PUP Technology (incoming CTO). Handover 2026-09-02.

## Pinned stack (from package.json)

| Piece | Version / notes |
| ----- | --------------- |
| Next.js | 16.1.6 (App Router; static export via `output: "export"` in `next.config.ts`) |
| React | 19.2.3 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 (`@tailwindcss/postcss`) |
| Framer Motion | ^12.36.0 |
| Lenis | ^1.3.19 |
| Lucide React | ^0.577.0 |
| Package manager | pnpm (`pnpm-lock.yaml`) |

Commands: `pnpm run dev` · `pnpm run lint` · `pnpm run build` (writes static `out/`) · `pnpm run analyze`

## Structure

See [README.md](README.md) Project Structure. Entry: `app/page.tsx` assembles sections under `components/sections/`. Shared effects/UI under `components/ui/`. Layout/nav in `components/layouts/`. Assets in `public/assets/`.

## Notes for agents

- Prefer state, FLAGS, this file, and README. There is no PRD, SDD, DSD, QAD, or OPS doc set for this repo.
- Keep contributor credits; CTO line uses Chief Technology Officer (2025-2026).
- Do not introduce an FMD engine or suite into this repository.

## FMD

**Built on FMD philosophy (v1.31.0)** - INDEX / STATE / FLAGS control plane for humans and AI; no FMD engine install.

Read order stays: docs/state.md then docs/index.md then FLAGS.md then task docs.
