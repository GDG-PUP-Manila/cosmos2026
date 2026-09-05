<div align="center">

# COSMOS 2026

**GDG PUP's Biggest Tech Event of the Year**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status: Archive](https://img.shields.io/badge/Status-Archive-lightgrey)](docs/state.md)
[![FMD philosophy: 1.31.0](https://img.shields.io/badge/FMD%20philosophy-1.31.0-blue)](AGENTS.md)

**[cosmos.gdgpup.org](https://cosmos.gdgpup.org)**

</div>

## Table of Contents

- [About](#about)
- [Start here](#start-here)
- [Status / Handover](#status--handover)
- [Highlights](#highlights)
- [Quick start](#quick-start)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Connect with GDG PUP](#connect-with-gdg-pup)
- [License](#license)

## About

**COSMOS** is the flagship technology conference organized by **Google Developer Group (GDG) on Campus Polytechnic University of the Philippines, Manila**. This repository contains the source code for the official event website.

The conference bridges the gap between academic learning and real-world industry practice, bringing together students, professionals, and industry speakers for a day of talks, networking, and hands-on experiences.

|                 | Details                                                       |
| --------------- | ------------------------------------------------------------- |
| **Date**     | March 24, 2026 (completed)                                    |
| **Venue**    | PUP Bulawagang Balagtas                                       |
| **Register** | [GDG Community Platform](https://gdg.community.dev/e/my7pyr/) (registration closed) |

Live archive: [cosmos.gdgpup.org](https://cosmos.gdgpup.org)

## Start here

- **Humans:** this README, then [docs/state.md](docs/state.md)
- **Agents:** [AGENTS.md](AGENTS.md) (state → index → FLAGS)
- **Contributors:** table below

## Status / Handover

**Operate mode.** COSMOS 2026 ran on **March 24, 2026**. The site remains live at [cosmos.gdgpup.org](https://cosmos.gdgpup.org) as an archive of the event. Do not treat this as an upcoming launch.

Owner: **GDG PUP Technology** (incoming CTO). Handover **2026-09-02**.

## Highlights

- **Cosmic-Themed Design**: A fully immersive dark-space aesthetic with neon glows, radial gradients, and twinkling constellations
- **Custom Mascots**: _Sparky_ and _Cirby_ are rendered as animated SVG constellations in the hero section
- **Interactive 3D Flip Cards**: Speaker cards use CSS 3D transforms with a Framer Motion flip animation on hover
- **Fluid Cursor Effects**: A WebGL-powered splash cursor and a custom dot-follower cursor for a premium feel
- **Smooth Scrolling**: Powered by [Lenis](https://github.com/darkroomengineering/lenis) for buttery-smooth page navigation
- **Parallax & Glare Effects**: Custom hooks provide tilt-on-hover and glare lighting to interactive elements
- **Ambient Starfield**: A procedurally generated, randomly twinkling background layer spanning the entire page
- **Responsive Countdown**: Real-time, animated countdown to the event date (historical; event has passed)
- **Fully Static Export**: The site builds to a static bundle via Next.js `output: "export"` for fast, CDN-friendly deployment

## Quick start

### Prerequisites

- **Node.js** ≥ 18.x
- **pnpm** ≥ 9.x (recommended). Install with `npm install -g pnpm`

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/GDG-PUP-Manila/cosmos2026.git
   cd cosmos2026
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm run dev
   ```

4. **Open your browser** at [http://localhost:3000](http://localhost:3000)

### Other Scripts

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `pnpm run build`   | Production build (static export to `out/`)       |
| `pnpm run start`   | Serve the production build                       |
| `pnpm run lint`    | Run ESLint                                       |
| `pnpm run analyze` | Bundle size analysis (opens analyzer in browser) |

### Environment Variables

| Variable               | Default                     | Description                         |
| ---------------------- | --------------------------- | ----------------------------------- |
| `NEXT_PUBLIC_BASE_URL` | `https://cosmos.gdgpup.org` | Base URL for OpenGraph and metadata |

## Tech Stack

| Category            | Technology                                                                   |
| ------------------- | ---------------------------------------------------------------------------- |
| **Framework**       | [Next.js 16](https://nextjs.org/) (App Router, Static Export)                |
| **UI Library**      | [React 19](https://react.dev/)                                               |
| **Language**        | [TypeScript 5](https://www.typescriptlang.org/)                              |
| **Styling**         | [Tailwind CSS 4](https://tailwindcss.com/) + Custom CSS Keyframes            |
| **Animations**      | [Framer Motion 12](https://www.framer.com/motion/)                           |
| **Smooth Scroll**   | [Lenis](https://github.com/darkroomengineering/lenis)                        |
| **Icons**           | [Lucide React](https://lucide.dev/)                                          |
| **Bundle Analysis** | [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) |
| **Package Manager** | [pnpm](https://pnpm.io/)                                                     |

## Project Structure

```
cosmos2026/
├── app/                        # Next.js App Router
│   ├── globals.css             # Global styles & CSS custom properties
│   ├── layout.tsx              # Root HTML layout, metadata, fonts, providers
│   └── page.tsx                # Main page (assembles all sections)
├── components/
│   ├── layouts/                # Page-level layout wrappers
│   │   └── RootLayout.tsx      # Navigation bar + content wrapper
│   ├── providers/              # React context providers
│   │   └── smooth-scroll-provider.tsx
│   ├── sections/               # Page sections (rendered top-to-bottom)
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── speakers-section.tsx
│   │   ├── program-flow-section.tsx
│   │   ├── location-section.tsx
│   │   ├── sponsors-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── cta-section.tsx
│   │   └── footer-section.tsx
│   └── ui/                     # Reusable UI primitives & effects
│       ├── ambient-starfield.tsx
│       ├── custom-cursor.tsx
│       ├── custom-effect.tsx
│       ├── glare-hover.tsx
│       ├── parallax-tilt.tsx
│       ├── splash-cursor.tsx
│       └── tracing-beam.tsx
├── lib/                        # Shared utilities
│   └── utils.ts                # Classname merging (clsx + tailwind-merge)
├── public/
│   └── assets/                 # Images, SVGs, and optimized WebP files
├── next.config.ts
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```

## Documentation

| Doc | Purpose |
|-----|---------|
| [State](docs/state.md) | Operate position, ownership, cold start |
| [Index](docs/index.md) | Document manifest |
| [FLAGS](FLAGS.md) | Improvement register |
| [AGENTS](AGENTS.md) | Agent read order |

## Contributing

We welcome contributions! If you'd like to help improve the COSMOS 2026 website:

1. **Fork** the repository
2. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes** with clear, descriptive commit messages
4. **Push** to your fork and **open a Pull Request**

> [!NOTE]
> Please ensure your code passes linting (`pnpm run lint`) before opening a PR.

## Contributors

This project is made possible by the GDG PUP community.

| Name | Role | GitHub |
| --- | --- | --- |
| [Carlos Jerico Dela Torre](https://www.linkedin.com/in/delatorrecj) | Chief Technology Officer (2025-2026) | [@delatorrecj](https://github.com/delatorrecj) |
| [Aurold John Sadullo](https://www.linkedin.com/in/ajsadullo) | DCTO for Infrastructure and Intelligence | [@iamaoii](https://github.com/iamaoii) |
| [Erwin Daguinotas](https://www.linkedin.com/in/erwin-daguinotas) | Web Development Lead | [@SauceCode01](https://github.com/SauceCode01) |
| [Gerald Berongoy](https://www.linkedin.com/in/geraldberongoy) | Senior Backend Developer / Web Development Learning Head | [@geraldsberongoy](https://github.com/geraldsberongoy) |
| [Rhandie Sales](https://www.linkedin.com/in/rhandie-sales) | Senior Frontend Developer / Web Development Co Lead | [@r0undy](https://github.com/r0undy) |

## Connect with GDG PUP

<div align="center">

[![GDG Community](https://img.shields.io/badge/GDG_Community-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://gdg.community.dev/gdg-on-campus-polytechnic-university-of-the-philippines-manila-philippines/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/gdgpup/)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/gdg.pupmnl/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/gdg.pupmnl/)
[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@gdg.pupmnl/)

</div>

## License

This project is licensed under the [MIT License](LICENSE).

<div align="center">

_Built with care by **GDG PUP**_

</div>
