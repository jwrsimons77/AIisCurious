# AIisCurious

**Helping small businesses take their first confident step into AI.**

A production-ready, SEO-first marketing website for an independent AI consultant based in
Manchester, serving small businesses across the North West. Built with
[Astro](https://astro.build) — fully static output, no client framework, excellent Core Web
Vitals by default.

## Quick start

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build to ./dist
npm run preview   # preview the production build
npm run check     # type-check all .astro/.ts files
```

Deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, S3+CloudFront).

## What's here

| Area | Pages |
|---|---|
| Core | Home, About, FAQ, Contact, Book (lead form), 404 |
| Services | 5 productised services + 12 service×area landing pages |
| Locations | 27 unique local pages across Greater Manchester, Merseyside, Cheshire, Lancashire |
| Industries | 12 industry guides (accountants → trades) |
| Knowledge Centre | Topic-cluster hub + markdown blog (6 starter articles) |

**73 static pages**, every one with unique H1, title, meta description, canonical URL,
OpenGraph/Twitter cards, and JSON-LD (LocalBusiness sitewide; Service, FAQPage,
BreadcrumbList, Article and Person schema where relevant). Sitemap and robots.txt included.

## Architecture

- `src/data/*.ts` — **all structured content lives here**: services, locations, industries,
  service-area pages, FAQs, and site config. Add a new town or industry by adding one object;
  the page, sitemap entry and internal links generate automatically.
- `src/content/blog/*.md` — CMS-ready blog via Astro content collections. Add a markdown file
  with frontmatter (`title`, `description`, `pubDate`, `cluster`, `tags`) and it appears in
  the blog and Knowledge Centre automatically.
- `src/components/` — reusable sections (CTA, FAQ accordion with schema, booking form,
  breadcrumbs, sticky mobile CTA, theme toggle…).
- `src/styles/global.css` — the design system: fluid type scale, spacing tokens, light/dark
  themes, WCAG-AA-checked colour tokens, reduced-motion support.
- Fonts (Inter + Fraunces variable) are self-hosted via Fontsource — no third-party requests
  anywhere on the site.

## Before launch — replace these

1. **Domain** — `src/data/site.ts` and `astro.config.mjs` assume `https://www.aiiscurious.co.uk`.
2. **Form endpoint** — `site.formEndpoint` in `src/data/site.ts` is a Formspree placeholder.
   Create a form at formspree.io (or Basin/your own endpoint) and paste the URL. Confirmation
   emails: enable Formspree's auto-response, or connect the endpoint to your email tool.
3. **Scheduling link** — `site.calendlyUrl` is a placeholder Calendly URL. Swap for your live
   Calendly / Microsoft Bookings / Google appointment link.
4. **Email & LinkedIn** — `site.email` and `site.social.linkedin`.
5. **Testimonials** — the homepage testimonials are clearly-marked **placeholder copy**.
   Replace with genuine client quotes (with permission) before launch — never publish
   fabricated reviews.
6. **OG images** — regenerate after any brand change: `node scripts/generate-images.mjs`.

## SEO notes

- Location and industry pages are deliberately data-driven with fully unique copy per page —
  no templated doorway content. Keep that standard when adding pages.
- Service×area pages intentionally merge "training" and "workshops" intent into one strong
  page per area to avoid thin near-duplicates.
- The Knowledge Centre lists upcoming topic clusters (ChatGPT Guides, Claude Guides,
  Copilot, etc.) — each cluster is designed to hold long-tail articles that interlink with
  services, industries and locations. Write articles into `src/content/blog/` with the
  matching `cluster` value.
