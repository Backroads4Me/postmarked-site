# Postmarked Marketing Site

Static Astro landing page for [Postmarked](https://github.com/Backroads4Me/postmarked), designed to match the public app at [werehere.app](https://werehere.app).

## Develop

```bash
npm install
npm run dev
```

Astro serves the site locally at the URL printed by the dev server, usually `http://localhost:4321`.

## Build

```bash
npm run build
```

The static site is written to `dist/`. The build also generates `sitemap-index.xml` via `@astrojs/sitemap`; `public/robots.txt` is copied into `dist/`.

## Cloudflare Pages

Use these Cloudflare Pages settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: current Cloudflare Pages default or any active LTS release
- Production domain: `postmarked.io`

No server runtime or backend is required.

## Source Notes

- Product copy is condensed from the Postmarked README.
- Brand icons, fonts, and screenshots come from the Postmarked app repository.
- Extracted design tokens are documented in [docs/design-tokens.md](docs/design-tokens.md).
