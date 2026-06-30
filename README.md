# chrisjames-zd.github.io

Personal profile site for **Chris James** — Demo Architect @ Zendesk.

Built with [Nuxt 3](https://nuxt.com), [Vue 3](https://vuejs.org), TypeScript, and [Tailwind CSS](https://tailwindcss.com). Deployed as a static site to GitHub Pages via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run preview  # preview the production build locally
npm run generate # static export for GitHub Pages (.output/public)
```

Requires Node.js 20.19+ (or 22.12+).

## Editing content

All copy, stack chips, focus areas, and contact links live in a single file:

- [data/profile.ts](data/profile.ts) — name, role, tagline, bio, stack, focus areas, and contact links.

Edit values there and the page updates automatically. To change layout or section order, edit [pages/index.vue](pages/index.vue).

## Project structure

- [app.vue](app.vue) — root layout (nav + page + footer)
- [pages/index.vue](pages/index.vue) — single-page layout (Hero, About, Stack, Focus, Contact)
- [components/](components) — small, focused Vue components per section
- [data/profile.ts](data/profile.ts) — all editable content
- [assets/css/tailwind.css](assets/css/tailwind.css) — design tokens and global styles
- [tailwind.config.ts](tailwind.config.ts) — Tailwind theme (colors, shadows, fonts, motion)

## Design system

- Palette: deep navy primary (`#1B263B`), slate accents, soft surface backgrounds.
- Typography: Inter for UI, JetBrains Mono for the hero terminal block.
- Motion: subtle fade-in, slow floating gradient blobs, gentle hover lifts.

## Favicons

A simple `public/favicon.svg` is referenced in `nuxt.config.ts`. To generate PNG fallbacks from it:

```bash
npm install sharp --save-dev
node scripts/generate-favicons.js
```

## Deploy

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which runs `nuxi generate` and publishes `.output/public` to the `gh-pages` branch.
