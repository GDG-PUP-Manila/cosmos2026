# AGENTS.md

COSMOS 2026 official event website for GDG on Campus PUP Manila.

## Operating mode

**Event is over** (March 24, 2026). **Operate mode.** The site remains live as an archive. Do not rebuild as a launch campaign unless asked.

Owner: GDG PUP Technology (incoming CTO). Handover 2026-09-02. Outgoing CTO Carlos Jerico Dela Torre is credited historically in README Contributors.

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

- Prefer this file and README. There is no PRD, SDD, DSD, QAD, or OPS doc set for this repo.
- Keep contributor credits; the CTO listing is historical.
- Do not introduce an FMD engine or suite into this repository.
