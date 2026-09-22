# p5-template

A minimal [p5.js](https://p5js.org) + [TypeScript](https://www.typescriptlang.org) template, built with [Vite](https://vite.dev).

## Stack

- **p5.js 1.x** (instance mode) — canvas sketching
- **TypeScript** — strict mode, `tsc` type-checks before every build
- **Vite** — dev server with HMR + production bundling
- **ESLint + Prettier** — linting and formatting (`npm run check`)
- **GitHub Pages** — auto-deploy on push to `main` (see `.github/workflows/deploy.yml`)

## Getting started

```bash
npm install
npm run dev      # start dev server (HMR)
```

Your sketch lives in `src/main.ts` — edit it and save to see changes instantly.

## Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server                |
| `npm run build`   | Type-check + production build to `dist/` |
| `npm run preview` | Serve the production build locally       |
| `npm run lint`    | ESLint (auto-fix: `lint:fix`)            |
| `npm run format`  | Prettier (check: `format:check`)         |
| `npm run check`   | Lint + format check (CI gate)            |

## Deploying

Pushes to `main` build and deploy to **GitHub Pages** automatically.
Set the Pages source to **GitHub Actions** (Settings → Pages), and make sure
`base` in `vite.config.ts` matches your repository name.

> **Note:** p5 v2 is currently published without its TypeScript definitions,
> so this template pins p5 1.x + `@types/p5`.
