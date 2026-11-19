// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tylermitic.com',
  trailingSlash: 'ignore',
  server: {
    // Lets the dev server load inside GitHub Codespaces.
    allowedHosts: ['.app.github.dev'],
  },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
