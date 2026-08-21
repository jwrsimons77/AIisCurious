# Rainy Peaks

**A northern web design studio building websites that win work for small businesses.**

A production-ready, SEO-first marketing website for an independent web designer based in
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

**74 static pages**, every one with unique H1, title, meta description, canonical URL,
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
  themes, WCAG-AA-checked colour tokens, reduced-motion support. Colour starts from the six
  Rainy City brand tokens (`--rc-midnight` … `--rc-ice`) at the top of the file; every
  semantic token (`--bg`, `--ink`, `--accent`…) is derived from those, so re-tinting the
  whole site means editing one block.
- Fonts (Inter + Fraunces variable) are self-hosted via Fontsource — no third-party requests
  anywhere on the site.

## Deploying on Netlify

`netlify.toml` is included: build command `npm run build`, publish directory `dist`,
Node 22, immutable caching for hashed assets, and sensible security headers.
Connect the repo in Netlify and it deploys with no further configuration.

### Forms

Two **Netlify Forms**, both with a honeypot (`bot-field`) and both redirecting to
`/book/thanks/`, which fires the ad conversion events:

| Form name | Component | Appears on |
| --- | --- | --- |
| `review` | `ReviewForm.astro` | `/website-review/` and `/free-website-review/` — every "Get My Free Website Review" button |
| `booking` | `BookingForm.astro` | `/book/`, alongside the Calendly embed |

Each form submits over `fetch` as `application/x-www-form-urlencoded` with its `form-name`
in the body, and falls back to a native POST when JavaScript is unavailable. Netlify
captures both.

**After the first deploy, do these two things in the Netlify UI:**

1. **Site configuration → Forms → Form detection.** Netlify does not scan for forms on new
   sites unless this is enabled. Turn it on, then trigger a redeploy — detection happens at
   deploy time, so an already-built deploy will not pick the forms up retroactively.
2. **Site configuration → Forms → Form notifications.** Add an email notification *per
   form* (`review` and `booking`); without this nothing lands in your inbox.

Confirm both forms are listed under **Forms** in the Netlify dashboard before running ads
at the page.

### Automatic reply to the visitor

Netlify's notifications email *you*. The visitor's confirmation comes from
`netlify/functions/submission-created.mjs` — Netlify runs a function with that exact name
on every non-spam submission, so there is nothing to wire up beyond the environment
variables. It sends through [Resend](https://resend.com) and covers both forms, with
slightly different wording for a call request. If the key is missing or the send fails it
logs and returns cleanly: the submission is already saved either way.

Set up, once:

1. **Verify the sending domain.** In Resend → Domains, add `rainypeaks.co.uk` and copy the
   DKIM/SPF records into DNS. Sending as `hello@rainypeaks.co.uk` will fail until this is
   done — that is the same DNS work as the MX records for receiving mail.
2. **Add the environment variables** in Netlify → Site configuration → Environment
   variables:

   | Variable | Required | Notes |
   | --- | --- | --- |
   | `RESEND_API_KEY` | yes | From resend.com/api-keys |
   | `REPLY_FROM` | no | Defaults to `Rainy Peaks <hello@rainypeaks.co.uk>`. Before the domain is verified, set it to `onboarding@resend.dev` to test end to end |
   | `REPLY_TO` | no | Where replies land. Defaults to `hello@rainypeaks.co.uk` |

3. **Test it** by submitting the real form on the deployed site, then check Netlify →
   Functions → `submission-created` for the log line, and Resend → Emails for the send.

To change the wording, edit the `REPLIES` object at the top of the function; the plain-text
and HTML versions are both generated from it.

## Meta (Facebook/Instagram) ads

The site has dedicated ad infrastructure:

- **`/free-website-review/`** — distraction-free landing page (no nav, one message, one form).
  Point all Meta ads here, with UTM tags, e.g.
  `https://rainypeaks.co.uk/free-website-review/?utm_source=meta&utm_medium=paid&utm_campaign=trades-websites`
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
`ReviewForm.astro` and `BookingForm.astro` inject them as hidden fields, so every Netlify
Forms submission is tagged with the channel/campaign that produced it.

## Google Search Console (do this at launch)

1. Add the site as a property in [Google Search Console](https://search.google.com/search-console)
   (domain property is best; verify via DNS).
2. Submit the sitemap: `https://rainypeaks.co.uk/sitemap-index.xml`
   (also referenced in `robots.txt`, and linked from every page's `<head>`).
3. Request indexing for the homepage and a handful of key pages to speed up first crawl.
4. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters) - it can import
   directly from Search Console.

## Before launch — replace these

1. **Domain** — `src/data/site.ts`, `astro.config.mjs` and `public/robots.txt` now point
   at `https://rainypeaks.co.uk`. Register it if you haven't, add it in Netlify under
   Site → Domain management and set it as the **primary domain** so both `www.` and
   `aiiscurious.netlify.app` 301-redirect to it. Add a 301 from the previous domain
   `delveinai.co.uk` as well so any indexed URLs and existing ad links pass their equity
   across rather than dying. Then submit the sitemap in Search Console for the new domain,
   and set up email (MX records) for `hello@rainypeaks.co.uk` so the contact address in
   `src/data/site.ts` actually receives mail.
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
