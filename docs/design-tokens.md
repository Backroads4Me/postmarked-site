# Postmarked Landing Page Design Tokens

Tokens were extracted from the public `https://werehere.app/` homepage markup and CSS on June 27, 2026, then cross-checked against `/home/ted/src/postmarked/web/src/styles/global.css` and `/home/ted/src/postmarked/style/STYLE_GUIDE.md`.

## Theme Behavior

- Dark variables are the `:root` fallback.
- Light mode is activated with `:root[data-theme="light"]`.
- The startup script reads `localStorage.postmarked-theme`; without a stored value it follows `prefers-color-scheme`.
- Theme color meta values: dark `#0D141C`, light `#E1D7BE`.

## Color Palette

Dark:
- Page `#0D141C`
- Surface `#151D27`
- Elevated surface `#202A35`
- Border `#3A4654`
- Soft border `#2B3542`
- Text `#F1E6C8`
- Muted text `#A7A091`
- Ember/action `#BD3325`
- Ember hover `#D85643`

Light:
- Page `#E1D7BE`
- Surface `#FBF4DF`
- Elevated surface `#E3D5B0`
- Border `#9A8A72`
- Soft border `#C0AE96`
- Text `#111827`
- Muted text `#484340`
- Ember/action `#BD3325`
- Ember hover `#D85643`

## Typography

- Display: Playfair Display, weight 600, no letter spacing, tight line height.
- Body: Source Serif 4, regular to bold, 1.55 base line height.
- Labels/buttons: IBM Plex Mono, uppercase, tracked labels.

## Components

- Cards use 8px radius, tokenized borders, `--shadow-card`, and a small hover lift.
- Buttons use 6px radius, IBM Plex Mono uppercase labels, ember primary styling, and 44px minimum hit height.
- Navigation uses a translucent tokenized surface with blur and a bottom border.
- Branding reuses the app favicon and ember Playfair wordmark treatment.
