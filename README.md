# Zelcodes — SwiftUI animation library · website

> 500+ production-ready SwiftUI animations, transitions and UI effects.
> Browse the showcase → unlock the source on Patreon → ship polished iOS apps faster.

**Live**: https://akashkottil.github.io/zelcodes-web/
**Brand & designer assets**: https://github.com/akashkottil/Zelcodes-Graphic_Designer

---

## What this repo is

The marketing website for **Zelcodes**, a curated SwiftUI animation library by Akash Kottil. It's a fully static Next.js site that:

- Showcases every animation in the library with a bespoke in-browser preview (no GIFs, no videos — pure Framer Motion re-creations of each real SwiftUI project)
- Funnels viewers to Patreon, where subscribers get access to the actual Xcode project sources
- Doubles as the public face of the Zelcodes brand — logo, wordmark, typography, mesh backgrounds, glassmorphism surfaces

---

## Features

- **Swipeable hero carousel** — drag / arrow / auto-advance through 7 featured animations with a spring tuned deck
- **27 bespoke animation previews** — each card mirrors what the real SwiftUI project actually does (Apple Store tab scroll, Dynamic Island toast, Photos grid-to-detail, Morphing tab bar, …)
- **Category filtering** on the animation library
- **Per-animation detail pages** (prerendered statically)
- **Blog scaffold** ready for SwiftUI tutorials
- **Liquid Orbit animated logo** (Framer Motion SVG — dark glass orb with a living mesh gradient and a photon tracing a diagonal elliptical orbit)
- **Liquid-glass wordmark** with a continuous diagonal colour gradient clipped across the whole word
- **Light + dark mode** via `next-themes` (system-aware)
- **SEO**: metadata, OpenGraph, sitemap, robots, semantic headings
- **Privacy + Terms** pages
- **Animated favicon** using SMIL (works in Chrome / Edge / Safari)
- **Accessible**: proper ARIA labels, semantic HTML, `prefers-reduced-motion` throughout

---

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router) — static export for Pages deployment
- **[React 19](https://react.dev)**
- **[Tailwind CSS 4](https://tailwindcss.com)** (CSS-first `@theme` config)
- **[Framer Motion](https://www.framer.com/motion/)** for all animations
- **[next-themes](https://github.com/pacocoursey/next-themes)** for light/dark
- **[lucide-react](https://lucide.dev)** for UI icons; custom SVGs for brand icons
- **Inter + JetBrains Mono** via `next/font/google`
- **TypeScript** throughout

---

## Getting started

```bash
# install
npm install

# run the dev server at http://localhost:3000
npm run dev

# production build (static export → ./out)
npm run build

# lint
npm run lint
```

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server at `localhost:3000` (basePath disabled in dev) |
| `npm run build` | Builds a static export into `./out` |
| `npm start` | Serves the prod bundle |
| `npm run lint` | Runs ESLint |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              Root layout, fonts, ThemeProvider
│   ├── page.tsx                Landing page
│   ├── globals.css             Tailwind + CSS vars, liquid keyframes
│   ├── icon.svg                SMIL-animated favicon
│   ├── sitemap.ts / robots.ts
│   ├── privacy/page.tsx        Privacy policy
│   ├── terms/page.tsx          Terms of service
│   ├── blog/page.tsx           Blog index (placeholder posts)
│   └── animations/[slug]/      Per-animation detail (27 static pages)
│
├── components/
│   ├── Hero.tsx                Hero section with HeroCarousel
│   ├── HeroCarousel.tsx        Swipeable deck of featured animations
│   ├── AnimationShowcase.tsx   Filterable grid of all 27
│   ├── AnimationCard.tsx       Card with preview + tags
│   ├── HowItWorks.tsx / PatreonSection.tsx / CredibilitySection.tsx / CTASection.tsx
│   ├── Navbar.tsx / Footer.tsx
│   ├── Logotype.tsx            "zelc{orb}des" inline-orb liquid-glass lockup
│   ├── Wordmark.tsx            Standalone wordmark (gradient)
│   ├── AnimatedLogo.tsx        Liquid Orbit mark — Framer Motion SVG
│   ├── MeshGradient.tsx        Animated background mesh
│   ├── ThemeProvider.tsx / ThemeToggle.tsx
│   ├── BrandIcons.tsx          GitHub / X / YouTube inline SVGs
│   └── previews/
│       └── AnimationPreview.tsx  ← 27 bespoke previews (one per slug)
│
└── lib/
    ├── animations.ts           Metadata for all 27 animations
    ├── blog.ts                 Blog post metadata
    └── links.ts                Patreon / GitHub / social URLs
```

---

## Design system

The brand language (colours, typography, Liquid Orbit construction, glass recipes, motion easings, poster rules) is documented in a separate repo:

**https://github.com/akashkottil/Zelcodes-Graphic_Designer**

That repo contains:

- `graphicdesigner.md` — full written design spec
- `logos/` — every lockup variant as SVG + PNG (+ animated GIFs)
- `posters/` — source posters (SVG + PNG) for the launch campaign

---

## Deployment — GitHub Pages

This site is configured for static deployment to GitHub Pages via GitHub Actions.

### How it works

- `next.config.ts` uses `output: "export"` to produce a fully static site in `./out`.
- `basePath` and `assetPrefix` are set from the `NEXT_PUBLIC_BASE_PATH` env var (only in production) — so **dev** still runs at `/`, while the **deployed** build is served from `/zelcodes-web/`.
- A workflow at `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.
- `public/.nojekyll` disables Jekyll processing so Pages serves the `_next/` asset directory correctly.

### One-time setup

1. Push this repo to `https://github.com/akashkottil/zelcodes-web`.
2. In the GitHub repo → **Settings → Pages → Source**, choose **GitHub Actions**.
3. Push any commit to `main` — the workflow builds and deploys automatically.
4. Site will be live at **https://akashkottil.github.io/zelcodes-web/** (~1-2 min after the workflow finishes).

### Custom URL

If you want the site at `https://akashkottil.github.io/zelcodes` instead of `/zelcodes-web`, either:

- **Rename the repo** to `zelcodes`, and update the `NEXT_PUBLIC_BASE_PATH` in `.github/workflows/deploy.yml` to `/zelcodes`. Or
- **Add a custom domain** via `CNAME` and point it at `akashkottil.github.io`.

---

## Writing new animations

1. Add metadata to `src/lib/animations.ts` (slug, title, description, tags, difficulty, accent colours).
2. Add a bespoke preview to `src/components/previews/AnimationPreview.tsx` — a new `case "<slug>":` in the `Dispatcher` switch, plus a new component that visually mirrors what the real SwiftUI project does.
3. Build — the detail page `/animations/<slug>/` is generated automatically via `generateStaticParams`.

---

## Credits

- **Design + code** — [Akash Kottil](https://github.com/akashkottil)
- **Brand** — Zelcodes (see the [Zelcodes-Graphic_Designer](https://github.com/akashkottil/Zelcodes-Graphic_Designer) repo)
- Built with ❤️ for the SwiftUI community

---

## License

Code in this repository is under the terms in [LICENSE](LICENSE) (if present). The **Zelcodes brand, logo, wordmark, typography lockups, and poster artwork** are the property of Akash Kottil and are **not** covered by any OSS licence — see the [Terms of Service](src/app/terms/page.tsx) for details.

The **animation library source code** (the actual Xcode projects shown on the site) is distributed separately via Patreon and governed by its own licence described on [patreon.com/zelcodes](https://www.patreon.com/zelcodes).
