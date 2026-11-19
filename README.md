# tylermitic.com

My personal website: one page of rainbow clay, no build step.

- **Edit text:** change the words inside `index.html` (the name, the tagline line, and the links are marked with comments). The clay letters are generated from that text automatically.
- **Preview:** double-click `index.html` to open it in your browser.
- **Publish:** push to `main`. GitHub Pages deploys it automatically within a minute or so.

## How the clay works

The page is laid out as normal HTML. A script then sculpts every letter, link and pebble in WebGL: it builds a height map with rolled-tube profiles, adds lumpy hand-made edges, fingerprints and colour mottling, and shades it as matte clay with ray-marched soft shadows and ambient occlusion. Browsers without WebGL 2 get a lighter SVG-filter version of the same look.

Font: [Sniglet](https://fonts.google.com/specimen/Sniglet) ExtraBold, licensed under the SIL Open Font License (`fonts/OFL.txt`).
