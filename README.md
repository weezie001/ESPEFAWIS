# ESPEFAWIS Global Nig Ltd — Company Website

The official website for **ESPEFAWIS Global Nig Ltd**, a premier agro‑allied and multi‑sector
solutions firm bridging the gap between the farm and the wider economy through integrated,
sustainable supply chain solutions.

🌐 **Live site:** [www.espefawis.com](https://www.espefawis.com)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Editing Content](#editing-content)
- [Configuration](#configuration)
- [SEO](#seo)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

A fast, responsive, single‑page marketing site built with React + Vite and deployed as a static
SPA on Vercel. It presents the company's services, commodities, operations, gallery, and a working
contact channel, with full SEO and social‑share support.

## Features

- **Responsive homepage** — hero, about, services, "commodities we handle", why‑us / partnership
  band, operations strip, gallery preview, and CTA.
- **Dedicated pages** — About, Services, Gallery, Why Us, Contact, plus Privacy Policy, Terms of
  Service, and Cookie Policy.
- **Working contact form** — submissions are emailed to the company inbox via
  [FormSubmit](https://formsubmit.co) (no backend required).
- **WhatsApp click‑to‑chat** — floating button + contact card.
- **Responsive hero images** — separate desktop (wide) and mobile (tall) art via `<picture>`.
- **SEO‑ready** — per‑page titles/descriptions, canonical URLs, Open Graph & Twitter cards,
  JSON‑LD structured data, `sitemap.xml`, and `robots.txt`.
- **Cookie consent** banner with a documented cookie policy.
- **Smooth entrance animations** (Framer Motion) and active‑link navigation highlighting.
- **Optimized imagery** — all photos served as WebP.

## Tech Stack

| Area | Technology |
|------|------------|
| Framework | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) |
| Build tool | [Vite 7](https://vitejs.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Routing | [wouter](https://github.com/molefrog/wouter) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [lucide-react](https://lucide.dev) |
| UI primitives | [Radix UI](https://www.radix-ui.com) (shadcn‑style components) |
| Image processing | [sharp](https://sharp.pixelplumbing.com) (dev only) |
| Hosting | [Vercel](https://vercel.com) (static SPA) |

## Project Structure

```
espefawis-website/
├── client/
│   ├── public/
│   │   ├── images/            # Section & page photos (WebP)
│   │   │   └── gallery/        # Gallery image set (WebP)
│   │   ├── logo.png            # Brand logo (trimmed)
│   │   ├── robots.txt          # Crawler directives
│   │   ├── sitemap.xml         # Sitemap (submitted to Google)
│   │   └── google*.html        # Google Search Console verification
│   ├── src/
│   │   ├── components/         # Navigation, Footer, CookieConsent, WhatsAppButton, …
│   │   ├── hooks/
│   │   │   └── useSEO.ts        # Per‑page title/description/canonical/OG
│   │   ├── pages/              # Home, About, Services, Gallery, WhyUs, Contact, legal pages
│   │   ├── App.tsx             # Routes (wouter)
│   │   ├── main.tsx            # App entry
│   │   └── index.css           # Tailwind + brand design tokens
│   └── index.html             # HTML shell + static meta / JSON‑LD
├── server/                    # Optional Express server (not used by the static Vercel deploy)
├── vercel.json                # Build command, output dir, SPA rewrites
├── vite.config.ts
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) **20+** (the production deploy uses Node 24)
- npm (bundled with Node)

### Installation

```bash
git clone https://github.com/weezie001/ESPEFAWIS.git
cd ESPEFAWIS
npm install
```

### Run locally

```bash
npm run dev
```

Then open the printed URL (defaults to `http://localhost:5173`, or `:3000` depending on config).

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Production build (client → `dist/public`) |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Type‑check the project (`tsc --noEmit`) |
| `npm run format` | Format the codebase with Prettier |

## Editing Content

Most content lives in plain arrays at the top of each page component — no CMS required.

- **Services** → `services` array in `client/src/pages/Home.tsx`
- **Commodities** → `commodities` array in `client/src/pages/Home.tsx`
- **Homepage gallery preview** → `homeGallery` array in `client/src/pages/Home.tsx`
- **Full gallery** → `images` array in `client/src/pages/Gallery.tsx`
- **Operations strip** → `operations` array in `client/src/pages/Home.tsx`
- **Navigation links** → `navItems` in `client/src/components/Navigation.tsx`

> **Partners & Testimonials:** these sections were built but are currently removed pending real
> data. They can be restored from the project's git history (commit that introduced
> "Companies We've Worked With" / "What Our Partners Say") once real names and quotes are available.

To add an image: drop a WebP into `client/public/images/` (or `images/gallery/`) and reference it as
`/images/<file>.webp`.

## Configuration

### Contact form (FormSubmit)

The contact form posts to FormSubmit and is delivered to the company inbox. The endpoint is defined
in `client/src/pages/Contact.tsx`:

```ts
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/<company-email>';
```

The destination address must be activated once (FormSubmit emails a one‑time activation link on the
first submission).

### WhatsApp number

Set in `client/src/components/WhatsAppButton.tsx` (international format, no `+`):

```ts
const WHATSAPP_NUMBER = '2347037785676';
```

### Brand colors

Defined as CSS variables in `client/src/index.css`:

| Token | Value |
|-------|-------|
| Primary (green) | `#1A5C2A` |
| Accent (gold) | `#8B7D3A` |
| Highlight (orange) | `#F5A623` |

## SEO

- **Per‑page metadata** is set via the `useSEO` hook (`client/src/hooks/useSEO.ts`).
- **Static meta + JSON‑LD** (Organization schema) live in `client/index.html`.
- **`sitemap.xml`** and **`robots.txt`** are in `client/public/` and served at the site root.
- The site is verified in **Google Search Console**; the verification file is committed in
  `client/public/` and must not be removed.

Update `sitemap.xml` whenever a route is added or removed.

## Deployment

The site auto‑deploys to **Vercel** on every push to the `main` branch.

Build settings (see `vercel.json`):

| Setting | Value |
|---------|-------|
| Build command | `vite build` |
| Output directory | `dist/public` |
| Rewrites | All routes → `/index.html` (SPA) |

To deploy a change:

```bash
git add .
git commit -m "your message"
git push origin main
```

Vercel builds and publishes automatically; the production domain is `www.espefawis.com`.

## License

MIT © ESPEFAWIS Global Nig Ltd
