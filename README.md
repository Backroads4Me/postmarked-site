# Postmarked Website

The source for [Postmarked.io](https://postmarked.io/), the public website for
[Postmarked](https://github.com/Backroads4Me/postmarked)—a private, self-hosted
way to share travel photos, videos, and updates with family and friends.

[Visit the website](https://postmarked.io/) ·
[View the app source and installation guide](https://github.com/Backroads4Me/postmarked) ·
[Report a website problem](https://github.com/Backroads4Me/postmarked-site/issues/new)

This repository contains the static Astro marketing site. The application,
Docker deployment, documentation, and product screenshots live in the main
Postmarked repository.

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
