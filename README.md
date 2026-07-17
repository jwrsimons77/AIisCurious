# Delveinai

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

## Deploying on Netlify

`netlify.toml` is included: build command `npm run build`, publish directory `dist`,
Node 22, immutable caching for hashed assets, and sensible security headers.
Connect the repo in Netlify and it deploys with no further configuration.

**Booking form**: the form uses **Netlify Forms** (form name `booking`) with a honeypot.
Netlify detects it automatically on first deploy. To receive submissions by email, go to
**Site configuration → Forms → Form notifications** and add an email notification. To send
the visitor an automatic confirmation email, connect the form to your email tool via a
Netlify Forms webhook or Zapier's Netlify integration.

## Meta (Facebook/Instagram) ads

The site has dedicated ad infrastructure:

- **`/free-ai-report/`** — distraction-free landing page (no nav, one message, one form).
  Point all Meta ads here, with UTM tags, e.g.
  `https://delveinai.co.uk/free-ai-report/?utm_source=meta&utm_medium=paid&utm_campaign=trades-quotes`
- **`/book/thanks/`** — thank-you page every successful form submission redirects to.
  This is your conversion page.
- **Meta Pixel** — set `metaPixelId` in `src/data/site.ts` (from Meta Events Manager).
  The pixel only loads after the visitor accepts the cookie banner (UK GDPR/PECR),
  fires PageView site-wide once consented, and fires a **Lead** event on `/book/thanks/`.
  Leave `metaPixelId` empty and no banner or pixel ever appears.
- Both ad pages are `noindex` and excluded from the sitemap, so paid pages never
  compete with organic ones.

**In Ads Manager**: optimise the campaign for the Lead event, target the North West by
geography, and let broad targeting + pain-led creative do the audience selection.

## Analytics & Google Ads

`src/components/ConsentPixel.astro` gates Meta Pixel, GA4 and Google Ads behind one shared
cookie banner (PECR covers analytics cookies, not just ad ones). All three are opt-in via
`src/data/site.ts` — leave any ID blank to disable it entirely:

- **`ga4MeasurementId`** (`G-XXXXXXXXXX`) — from Google Analytics → Admin → Data streams.
- **`googleAdsId`** (`AW-XXXXXXXXX`) + **`googleAdsConversionLabel`** — from Google Ads →
  Tools → Conversions → your conversion action → "Use Google tag". Fires a `conversion`
  event on `/book/thanks/`.
- **`metaPixelId`** — unchanged from above.

Once a visitor consents, all configured scripts load together and a `tracking:ready` event
fires so any page can send its own conversion event.

## Lead attribution (UTMs)

`src/layouts/Base.astro` captures `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`,
`utm_term`, `gclid` and `fbclid` from the URL on first landing and stores them in
`localStorage` (`lead-attribution`, first-touch, kept until a lead converts).
`BookingForm.astro` injects them as hidden fields, so every Netlify Forms submission is
tagged with the channel/campaign that produced it.

## Google Search Console (do this at launch)

1. Add the site as a property in [Google Search Console](https://search.google.com/search-console)
   (domain property is best; verify via DNS).
2. Submit the sitemap: `https://delveinai.co.uk/sitemap-index.xml`
   (also referenced in `robots.txt`, and linked from every page's `<head>`).
3. Request indexing for the homepage and a handful of key pages to speed up first crawl.
4. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters) - it can import
   directly from Search Console.

## Before launch — replace these

1. **Domain** — `src/data/site.ts`, `astro.config.mjs` and `public/robots.txt` all point
   at the live domain `https://delveinai.co.uk`. `www.` already 301-redirects to it, but
   `aiiscurious.netlify.app` still serves the site directly — in Netlify go to
   Site → Domain management and confirm `delveinai.co.uk` is set as the **primary domain**
   so the netlify.app URL redirects too. Then submit the sitemap in Search Console for the
   new domain, and set up email (MX records) for `hello@delveinai.co.uk` so the contact
   address in `src/data/site.ts` actually receives mail.
2. **Form notifications** — enable Netlify Forms email notifications (see above) so
   submissions reach your inbox.
3. **Tracking IDs** — `metaPixelId`, `ga4MeasurementId`, `googleAdsId` and
   `googleAdsConversionLabel` in `src/data/site.ts` are all blank; nothing loads or fires
   until you add the ones you actually use (see Analytics & Google Ads, above).
4. **Scheduling link** — `site.calendlyUrl` is a placeholder Calendly URL. Swap for your live
   Calendly / Microsoft Bookings / Google appointment link.
5. **Email & LinkedIn** — `site.email` and `site.social.linkedin`.
6. **Testimonials** — the homepage testimonials are clearly-marked **placeholder copy**.
   Replace with genuine client quotes (with permission) before launch — never publish
   fabricated reviews.
7. **OG images** — regenerate after any brand change: `node scripts/generate-images.mjs`.

## Image credits

Photos live in `src/assets/images/` and are optimised to responsive WebP at build time.

- `hero-consult.jpg`, `meeting-table.jpg`, `planning-desk.jpg`, `team-workshop.jpg`, `writing-laptop.jpg` —
  [Unsplash](https://unsplash.com) (Unsplash License: free for commercial use, no
  attribution required).
- `manchester-skyline.jpg` — ["Manchester skyline" by palomoduarte on Flickr](https://www.flickr.com/photos/31044991@N04/11149492264),
  CC BY 2.0. **Attribution is required** and is displayed in the caption on the Locations
  page — keep the credit if you move the image.

## SEO notes

- Location and industry pages are deliberately data-driven with fully unique copy per page —
  no templated doorway content. Keep that standard when adding pages.
- Service×area pages intentionally merge "training" and "workshops" intent into one strong
  page per area to avoid thin near-duplicates.
- The Knowledge Centre lists upcoming topic clusters (ChatGPT Guides, Claude Guides,
  Copilot, etc.) — each cluster is designed to hold long-tail articles that interlink with
  services, industries and locations. Write articles into `src/content/blog/` with the
  matching `cluster` value.
