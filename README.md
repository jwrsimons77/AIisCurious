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
   records it gives you into DNS — see [DNS for rainypeaks.co.uk](#dns-for-rainypeaksco.uk)
   below, which covers how they sit alongside the site and mailbox records. Sending as
   `hello@rainypeaks.co.uk` fails until the domain verifies.
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
and HTML versions are both generated from it. Each form has a `subject`, a `preview` (the
line inboxes show after the subject), an `opening`, numbered `steps` and a `reason` for the
footer.

#### How the email is built

The template mirrors the site's brand tokens (`src/styles/global.css`), repeated as the
`BRAND` object because email clients strip custom properties and external stylesheets:
midnight ink on white cards, an ice page background, mist step badges, and the Georgia
fallback the site uses for Fraunces on the wordmark and headings.

Three deliberate choices worth keeping if you edit it:

- **Tables, everything inlined.** Outlook ignores `<div>` widths and Gmail drops `<style>`
  blocks apart from media queries.
- **One image, and it degrades.** The masthead is `public/email-logo.png`, generated by
  `node scripts/generate-images.mjs` from the same peaks mark the site uses. Images are
  blocked by default in Outlook and for unknown senders in Gmail, so the midnight band is a
  real table cell rather than part of the image, and the `alt` text is styled to sit on it
  legibly when the PNG never loads. Keep it to this one image: image-heavy mail scores worse
  with filters.
- **The logo's background is baked into the PNG.** Some clients invert an email wholesale
  for dark mode. If the band flipped to white with a transparent light-ink logo on it, the
  mark would vanish; with midnight baked in, it always has its own backdrop.
- **Both a text and an HTML part.** HTML-only mail scores worse with filters. `buildText`
  and `buildHtml` read the same `REPLIES` entry, so keep them in step.

A `prefers-color-scheme: dark` block gives Apple Mail the brand's dark surfaces instead of
an automatic inversion.

The masthead is loaded from the live site, so it needs the site deployed to resolve. The
function reads Netlify's `URL` environment variable, which means it also works on a
`*.netlify.app` subdomain while the custom domain is still being set up.

### Staying out of junk mail

Filters score the *sender*, not the design, so most of this is DNS and habit rather than
markup.

**Authentication, all three (non-negotiable since the 2024 Gmail/Yahoo sender rules):**

1. **SPF and DKIM** come from verifying the domain in Resend. Do not skip the `send.`
   subdomain records; they are what makes the return path align with the From address.
2. **DMARC** at `_dmarc` is now expected of every sender, not just bulk ones. Start at
   `v=DMARC1; p=none; rua=mailto:hello@rainypeaks.co.uk`, read the reports for a fortnight,
   then move to `p=quarantine`.
3. **Verify in Resend → Domains** before switching `REPLY_FROM` off `onboarding@resend.dev`.
   Sending unauthenticated from your own domain is the fastest route into junk.

**Sender habits:**

- Keep `From` stable: always `Rainy Peaks <hello@rainypeaks.co.uk>`. A changing From address
  or display name resets the reputation you are building.
- `REPLY_TO` must be a mailbox you actually read. Replies to a dead address bounce, and
  bounce rate feeds the score.
- `hello@` needs real `MX` records *before* you send anything; see the DNS table below.
- Warm up gently. A brand new domain sending a handful of transactional replies a day is
  the ideal pattern, which is what this is. Do not send a bulk campaign from the same
  domain in its first few weeks.
- Keep the subject plain. No all-caps, no exclamation marks, no "FREE!!!", no emoji.
- Few links, all first-party. Never a link shortener, and never a bare tracking domain.
- Leave the footer alone: a working reply address, a real location and a plain sentence
  saying why the person is getting the email are all things filters look for.

**Check it, don't assume:**

- Send a real submission to a [mail-tester.com](https://www.mail-tester.com) address. Aim
  for 9/10 or better; it names the exact record if SPF, DKIM or DMARC is off.
- Add the domain to [Google Postmaster Tools](https://postmaster.google.com) once live, and
  watch the spam rate stay under 0.1%.
- Test the real thing into a Gmail, an Outlook.com and an iCloud address, then check the
  junk folder in each, not just the inbox.
- Resend → Emails shows delivered, bounced and complained per send.

One thing outside your control: Netlify's *own* notification to you comes from Netlify's
servers, not Resend, so it authenticates against their domain. If those land in junk,
allowlist them in your mailbox; it says nothing about the visitor's copy.

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

## DNS for rainypeaks.co.uk

Three separate jobs share this zone. Netlify serves the site, a mailbox provider receives
mail at `hello@`, and Resend sends the automatic replies. They do not conflict as long as
each keeps to its own records.

| Purpose | Record | Notes |
| --- | --- | --- |
| Site | `A` / `CNAME` on the root and `www` | Netlify gives you the exact values under Domain management. Easiest is to point the nameservers at Netlify DNS and let it manage the zone |
| Receiving mail | `MX` on the **root** | From your mailbox provider (Google Workspace, Fastmail, Zoho…). This is what makes `hello@rainypeaks.co.uk` a real inbox |
| Sending — DKIM | `TXT` at `resend._domainkey` | From Resend, signs the outgoing mail |
| Sending — return path | `MX` and `TXT` (SPF) on a **`send.`** subdomain | Resend scopes these to a subdomain so the root `MX` stays free for your mailbox provider. Do not put Resend's `MX` on the root — it would break receiving |
| Alignment | `TXT` at `_dmarc` | Optional but worth adding: start at `v=DMARC1; p=none; rua=mailto:hello@rainypeaks.co.uk` and tighten later |

Copy the sending records from what Resend actually shows you when you add the domain —
values differ by account region. Verification usually lands in minutes, occasionally an
hour.

**Sending and receiving are independent jobs.** Resend sends *as* `hello@rainypeaks.co.uk`
on the strength of the DKIM and SPF records alone: no mailbox has to exist for that address,
and the auto-reply works fine without one. A mailbox is only what makes `hello@` able to
*receive*. So the mailbox is never a blocker on getting the auto-reply live; it only decides
where a customer's reply lands.

Order that avoids dead ends:

1. Add the Resend records, verify the domain, then set `RESEND_API_KEY` in Netlify. This
   alone is enough for the auto-reply to send.
2. Point `REPLY_TO` at an inbox you actually read. The auto-reply defaults to
   `Reply-To: hello@rainypeaks.co.uk`, so if that address cannot receive yet, every customer
   who hits reply gets a bounce. Setting `REPLY_TO` to any working address (a personal
   inbox is fine, and costs nothing) closes that hole immediately.
3. Set up `hello@` receiving when you are ready: a mailbox provider's `MX` on the root, or
   free forwarding to an inbox you already have. Then drop the `REPLY_TO` override.
4. Submit a real form on the live site and check Netlify → Functions →
   `submission-created` and Resend → Emails.

Until step 1 is done you can still test the whole chain by setting
`REPLY_FROM=onboarding@resend.dev`, which sends from Resend's own verified domain and needs
no DNS at all.

## Before launch — replace these

1. **Domain** — `rainypeaks.co.uk` is registered. `src/data/site.ts`, `astro.config.mjs`
   and `public/robots.txt` all point at `https://rainypeaks.co.uk`. Add it in Netlify under
   Site → Domain management and set it as the **primary domain** so both `www.` and
   `aiiscurious.netlify.app` 301-redirect to it. Add a 301 from the previous domain
   `delveinai.co.uk` as well so any indexed URLs and existing ad links pass their equity
   across rather than dying. Then submit the sitemap in Search Console for the new domain,
   and work through the DNS records below.
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
