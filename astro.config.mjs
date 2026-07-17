import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Matches src/data/site.ts — the canonical Delveinai domain.
  site: 'https://www.delveinai.co.uk',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Ad landing + conversion pages are noindex and stay out of the sitemap
      filter: (page) => !page.includes('/free-ai-report/') && !page.includes('/book/thanks/'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
