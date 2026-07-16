import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Matches src/data/site.ts — see the TODO there re: the co.uk domain.
  site: 'https://aiiscurious.netlify.app',
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
