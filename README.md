# Zendesk Demo Engineering — Demo Studio Microsite (Nuxt 3 + Vue 3 + TS)

Purpose:
- Front-and-center access to the Demo Studio tool (opens inside a user’s Zendesk instance).
- About the Demo Engineering organization (from the Overview deck).
- Resources hub linking to internal tooling and channels.

Tech:
- Nuxt 3, Vue 3, TypeScript, Tailwind CSS
- Radix Vue (accessible primitives)
- “shadcn-inspired” styling (soft shadows, rounded radii, focus rings)

Quick Start
1) Install
   - pnpm i
2) Configure links
   - Copy .env.example to .env and set:
     - NUXT_PUBLIC_DEMO_STUDIO_URL
     - NUXT_PUBLIC_REQUEST_ACCESS_URL
3) Dev
   - pnpm dev
4) Build
   - pnpm build && pnpm preview

Project Structure
- pages/index.vue: Landing layout (Hero, About, Resources)
- components/: Reusable, documented components (Hero, cards, section headers, CTA)
- data/resources.ts: Single source of truth for resource links
- composables/useRuntimeLinks.ts: Runtime config access (Demo Studio + Access)

Content Notes
- About content is summarized from the attached “Demo Engineering - MASTER OVERVIEW DECK.”
- If you provide “Demo Engineering HomepageWelcome to Demo.md,” we’ll map those links into data/resources.ts.

Design System
- Colors, radii, and motion align to demo_studio_small_apps_ui.txt:
  - Primary #1B263B, Secondary #415A77, Accent #778DA9, Success #1B7F75, Warning #D67E3B, Danger #C62D42, Info #2856A3.
  - Subtle focus rings and elevation for a shadcn-like feel.
- Motion: 0.2–0.3s ease for interactive states; hero blobs animate slowly (tasteful!).

Shadcn Vue (Optional Enhancement)
- If you want true shadcn-vue components:
  1) Install libs
     - pnpm add shadcn-vue tailwind-variants class-variance-authority
  2) Initialize shadcn-vue
     - npx shadcn-vue@latest init
     - npx shadcn-vue@latest add button card badge
  3) Replace Button/Card implementations with generated ones, or map our components to those.

Nuxt/Vue Best Practices Followed
- <script setup lang="ts"> with type-safe props
- Reusable, composable-driven patterns
- SEO with useSeoMeta/useHead
- Mobile-first, responsive Tailwind design
- Clear comments and small, focused components

Accessibility
- Semantics for headers/sections
- Visible focus states, adequate contrast
- Radix Vue primitives available if needed

Deployment
- Static hosting or Node runtime:
  - Output: .output/ after build
  - Any static host that supports Nuxt 3 output is fine

Enjoy! And if you want this in your house style (design-guideslines.md), share that file and I’ll tune spacing, typography, and theming precisely

Run locally (npm or pnpm)
-------------------------

This project was developed with Nuxt 3 + Vue 3 + TypeScript. You can use either pnpm (recommended in the original notes) or npm. Example commands for macOS / zsh:

Install dependencies

```bash
# using pnpm (recommended)
pnpm install

# or using npm
npm install
```

Set runtime env vars

```bash
# copy example env and edit
cp .env.example .env
# then open .env and set NUXT_PUBLIC_DEMO_STUDIO_URL and NUXT_PUBLIC_REQUEST_ACCESS_URL
```

Run the dev server

```bash
# pnpm
pnpm dev

# or npm
npm run dev
```

Build & preview

```bash
# build
npm run build

# preview production build locally
npm run preview
```

Troubleshooting notes
- Node: Use a recent Node.js LTS (18.x or newer) for best compatibility with Nuxt 3.
- If you see errors about missing `vue-tsc` or Volar types, run `npm install` (or `pnpm install`) to ensure devDependencies are present. The project includes `vue-tsc` and `@volar/typescript` to support type-checking.
- If TypeScript/vite shows stale errors after dependency changes, try removing `node_modules/.vite` or restarting the dev server.
- Nuxt prints a warning if `postcss.config.cjs` is present; the project includes Tailwind integration — you can ignore that warning or migrate PostCSS config into `nuxt.config.ts`'s `postcss` option.

Verification
- After `npm run dev` you should see the Vite and Nuxt servers start and a local URL like `http://localhost:3000` in the terminal. Open that URL in your browser to view the site.

If you prefer, I can add a tiny troubleshooting script or cross-check Node/npm versions automatically—tell me your preference and I’ll add it.

Generate PNG favicons (optional)
--------------------------------
If you want PNG fallbacks for the SVG favicon, a small node script is included at `scripts/generate-favicons.js` which uses `sharp` to generate 16x16, 32x32, and 180x180 PNGs into `public/`.

Install sharp and run the script:

```bash
# install sharp locally (requires a supported Node toolchain)
npm install sharp --save-dev

# or with pnpm
pnpm add -D sharp

# run the generator
node scripts/generate-favicons.js
```

This will create `public/favicon-16x16.png`, `public/favicon-32x32.png`, and `public/apple-touch-icon.png`.





