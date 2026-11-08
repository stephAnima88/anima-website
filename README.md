# Anima Business Consulting website

Plain HTML, CSS and a little JavaScript. No build step, no dependencies.

Preview locally:

    python3 -m http.server 8000

then open http://localhost:8000
(Links start with `/`, so serve from the repo root; opening files directly will not work.)

## Brand and fonts

- Logo files (SVG and transparent PNG) are in `brand/logo/`: full logo, reversed (for navy),
  one-colour dark and white, the mark on its own, and `anima-symbol` (navy square, 1024 px PNG)
  for app-store and profile images. `assets/favicon.svg` is the small-size symbol.
- Colours: navy #14233B, teal #1F6F78, light teal #7FC4CB, paper #FBFAF7, stone #F1EEE6.
- Fonts: Inter and Inter Display (SIL Open Font Licence, see `assets/fonts/LICENSE-Inter.txt`),
  served from `assets/fonts/` so the site makes no third-party requests. Labels use the system monospace font.
