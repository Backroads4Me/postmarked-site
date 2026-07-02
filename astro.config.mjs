import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://postmarked.io',
  output: 'static',
  integrations: [sitemap()],
});
