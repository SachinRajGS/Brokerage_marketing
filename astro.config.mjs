// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// IMPORTANT: change this to your real domain after you buy it (see README step 5).
// It is used for the sitemap, canonical URLs and Open Graph tags.
const SITE_URL = 'https://subbarajubrokerage.in';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
