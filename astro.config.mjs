import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Matches src/data/site.ts.
  site: 'https://rainypeaks.co.uk',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // Ad landing + conversion pages are noindex and stay out of the sitemap
      // Exact path match, so /services/free-website-review/ still gets indexed
      filter: (page) =>
        new URL(page).pathname !== '/free-website-review/' && !page.includes('/book/thanks/'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
