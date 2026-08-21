/**
 * Service × area landing pages, e.g. "Web Design Manchester".
 * One strong page per service per area (they target the same search intent)
 * to avoid thin duplicate pages.
 */
export interface ServiceAreaPage {
  slug: string;
  /** Underlying service this page sells */
  serviceSlug: string;
  areaName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localAngle: string;
  faqs: { q: string; a: string }[];
  /** Location slugs to interlink */
  locationSlugs: string[];
}

export const serviceAreaPages: ServiceAreaPage[] = [
  // ── Manchester ────────────────────────────────────────────────────────
  {
    slug: 'web-design-manchester',
    serviceSlug: 'website-design-build',
    areaName: 'Manchester',
    h1: 'Web Design in Manchester',
    metaTitle: 'Web Design Manchester - Websites for Small Businesses | Rainy Peaks',
    metaDescription:
      'Web design in Manchester for small businesses. Fast, mobile-first, accessible websites built to win enquiries. Fixed prices, no lock-in, designed and built locally.',
    intro:
      'Most Manchester businesses don’t need a showreel-worthy website. They need one that loads quickly on a phone, explains what they do in the first ten seconds, and makes getting in touch obvious. That’s what I build: custom designs, hand-built for speed, with a fixed price agreed before we start.',
    localAngle:
      'Being Manchester based means I can sit down with you in Ancoats or Didsbury rather than run the whole project through a ticketing system. It also means I know the market you’re selling into: an agency in the Northern Quarter needs to look sharp beside its competitors, while a trades business in Wythenshawe needs a phone number visible before anything else. Same craft, very different design decisions.',
    faqs: [
      {
        q: 'Do you meet clients in person in Manchester?',
        a: 'Yes. Kick-off and design review usually work best face to face, anywhere in Greater Manchester. The rest normally runs over email and short calls so you’re not losing days to meetings.',
      },
      {
        q: 'How much does a website cost in Manchester?',
        a: 'A small business brochure site is typically a low four-figure fixed price; larger sites with many service or location pages cost more. You get the full number up front, from a written scope, before any work starts.',
      },
    ],
    locationSlugs: ['manchester', 'salford', 'trafford', 'stockport'],
  },
  {
    slug: 'ecommerce-web-design-manchester',
    serviceSlug: 'ecommerce-websites',
    areaName: 'Manchester',
    h1: 'Ecommerce Web Design in Manchester',
    metaTitle: 'Ecommerce Web Design Manchester - Online Shops That Sell | Rainy Peaks',
    metaDescription:
      'Ecommerce web design in Manchester: fast product pages, short checkouts and stock that stays in sync. Shopify and custom builds for independent retailers and makers.',
    intro:
      'An online shop lives or dies on two things: how fast a product page loads on a phone, and how few steps stand between wanting something and paying for it. I build Manchester shops that get both right, then connect them to the stock and accounting systems you already run.',
    localAngle:
      'Manchester has one of the strongest independent retail and maker scenes outside London, and most of those businesses sell in two places at once, a shop or market stall and a website that disagrees with it about stock. Working locally means I can see how you actually pack and dispatch orders before deciding what the admin side should look like.',
    faqs: [
      {
        q: 'We sell in a Manchester shop as well as online. Can stock stay in sync?',
        a: 'Yes, and it should. Most EPOS systems connect to the major ecommerce platforms so one sale updates both. We check yours specifically in the first session rather than assuming.',
      },
      {
        q: 'Can you move our shop from another platform?',
        a: 'Yes. Products, customers, order history and URLs all migrate, with redirects so your search rankings and customer bookmarks survive the move.',
      },
    ],
    locationSlugs: ['manchester', 'trafford', 'salford', 'bury'],
  },
  {
    slug: 'local-seo-manchester',
    serviceSlug: 'local-seo',
    areaName: 'Manchester',
    h1: 'Local SEO in Manchester',
    metaTitle: 'Local SEO Manchester - Get Found by Nearby Customers | Rainy Peaks',
    metaDescription:
      'Local SEO in Manchester for small businesses: Google Business Profile, map pack visibility, local landing pages and technical fixes. Honest monthly reporting.',
    intro:
      'Ranking in Manchester is genuinely competitive, and that’s exactly why the fundamentals still win: a properly built Google Business Profile, pages that answer what people actually search for, a technically sound site and a steady flow of real reviews. No tricks, no thousand-page doorway sites.',
    localAngle:
      'Manchester searches are rarely city-wide. Someone in Chorlton looking for a plumber gets very different map results from someone in Ashton, so a single “Manchester” page is not enough. I build around the districts you genuinely serve and the neighbouring towns your customers travel from, which is a different plan for a city-centre law firm than for a business covering the whole M60 ring.',
    faqs: [
      {
        q: 'How long before we appear in the Manchester map pack?',
        a: 'Profile and technical work often moves things within weeks. Competitive Manchester terms usually take three to six months of steady effort. Anyone promising faster in this market isn’t being straight with you.',
      },
      {
        q: 'Do you need to have built our website?',
        a: 'No. I work with your existing site and tell you honestly if it’s the thing holding your rankings back.',
      },
    ],
    locationSlugs: ['manchester', 'stockport', 'altrincham', 'salford'],
  },

  // ── Liverpool ─────────────────────────────────────────────────────────
  {
    slug: 'web-design-liverpool',
    serviceSlug: 'website-design-build',
    areaName: 'Liverpool',
    h1: 'Web Design in Liverpool',
    metaTitle: 'Web Design Liverpool - Websites for Small Businesses | Rainy Peaks',
    metaDescription:
      'Web design in Liverpool for small businesses. Fast, mobile-first websites built to win enquiries, with fixed prices, full ownership and no lock-in.',
    intro:
      'A good Liverpool website does the same job as a good salesperson: it says who you help, proves you’ve done it before, and makes the next step obvious. I design and build sites that do that quickly on a phone, then hand you the keys, code, content and domain all yours.',
    localAngle:
      'Liverpool businesses tend to sell on relationships and reputation, and a website should carry that rather than flatten it into stock photography. I build with real photos, real names and real work wherever possible. Being an hour down the M62 means visiting for kick-off and photography is straightforward, not a line item.',
    faqs: [
      {
        q: 'Do you actually work with Liverpool businesses, or just remotely?',
        a: 'Both. I visit Liverpool for kick-off meetings, photography and design reviews; the build itself runs remotely, which keeps the cost down without losing the personal side.',
      },
      {
        q: 'Can you rebuild our site without losing our Google rankings?',
        a: 'Yes, that’s a standard part of every rebuild. Existing URLs are mapped and redirected, titles carried over or improved, and I watch search performance for a month after launch.',
      },
    ],
    locationSlugs: ['liverpool', 'wirral', 'sefton', 'knowsley'],
  },
  {
    slug: 'ecommerce-web-design-liverpool',
    serviceSlug: 'ecommerce-websites',
    areaName: 'Liverpool',
    h1: 'Ecommerce Web Design in Liverpool',
    metaTitle: 'Ecommerce Web Design Liverpool - Online Shops That Sell | Rainy Peaks',
    metaDescription:
      'Ecommerce web design in Liverpool: fast product pages, trusted checkouts and stock synced with your shop floor. Shopify and custom builds for independent retailers.',
    intro:
      'If shoppers are reaching your basket and leaving, the problem is almost never the products. It’s a slow product page, a checkout that asks for too much, or a site that doesn’t look trustworthy on a phone. Those are all fixable, and fixing them is usually cheaper than buying more traffic.',
    localAngle:
      'Liverpool’s independent retail scene sells as much on personality as on price, and a generic template strips exactly that out. I build shops that still sound like you, while keeping the technical side, speed, payments, stock, boring and dependable.',
    faqs: [
      {
        q: 'We’re a small Liverpool independent. Is a proper online shop worth it?',
        a: 'It depends on your margins and how you dispatch. For some businesses a simple, fast catalogue with enquiries beats a full shop. I’ll tell you honestly which one your numbers support before we build anything.',
      },
      {
        q: 'Which platform will you recommend?',
        a: 'Usually Shopify, for reliability and payments. WooCommerce if you’re already committed to WordPress. Custom only where unusual products or pricing rules genuinely demand it.',
      },
    ],
    locationSlugs: ['liverpool', 'knowsley', 'st-helens', 'wirral'],
  },
  {
    slug: 'local-seo-liverpool',
    serviceSlug: 'local-seo',
    areaName: 'Liverpool',
    h1: 'Local SEO in Liverpool',
    metaTitle: 'Local SEO Liverpool - Get Found by Nearby Customers | Rainy Peaks',
    metaDescription:
      'Local SEO in Liverpool for small businesses: Google Business Profile, map pack rankings, local pages and technical fixes. Reporting tied to enquiries, not vanity metrics.',
    intro:
      'Most Liverpool businesses rank beautifully for their own name and nowhere near the searches that actually bring work. Local SEO closes that gap: the right categories on your Google profile, pages built around what customers type, a fast site, and reviews arriving steadily rather than in occasional panics.',
    localAngle:
      'Liverpool and the Wirral behave like separate search markets even though they’re minutes apart, and Sefton and Knowsley behave like two more. A single city page rarely covers all of it. I map which of those areas genuinely bring you profitable work and build for those, rather than spraying thin pages across Merseyside.',
    faqs: [
      {
        q: 'We serve Liverpool and the Wirral. Do we need separate pages?',
        a: 'Usually yes, because they rank separately, but only where you can say something genuinely different on each. Two useful pages beat six padded ones, and Google increasingly agrees.',
      },
      {
        q: 'A previous agency sent reports but no enquiries. How is this different?',
        a: 'Reporting leads with calls and enquiries, then rankings. If a month is quiet, you’ll get told what I’m changing rather than a chart selected to look reassuring.',
      },
    ],
    locationSlugs: ['liverpool', 'sefton', 'wirral', 'st-helens'],
  },

  // ── Cheshire ──────────────────────────────────────────────────────────
  {
    slug: 'web-design-cheshire',
    serviceSlug: 'website-design-build',
    areaName: 'Cheshire',
    h1: 'Web Design in Cheshire',
    metaTitle: 'Web Design Cheshire - Websites for Small Businesses | Rainy Peaks',
    metaDescription:
      'Web design across Cheshire: Chester, Wilmslow, Macclesfield, Crewe and Northwich. Fast, well-crafted websites for businesses selling on quality rather than price.',
    intro:
      'Cheshire businesses are often selling on craftsmanship, expertise or service quality, and a cheap-looking website quietly undermines all three. I build sites that match the standard of the work: considered design, proper typography, fast loading, and enquiry paths that don’t make people hunt.',
    localAngle:
      'A lot of Cheshire trade is high-value and referral-led, which changes what the website has to do. It’s less about volume traffic and more about reassuring someone who has already heard your name and is checking you’re real. That means visible credentials, genuine project photography and clear pricing signals, rather than a homepage carousel.',
    faqs: [
      {
        q: 'Which parts of Cheshire do you cover?',
        a: 'All of it, most often Chester, Wilmslow, Alderley Edge, Knutsford, Macclesfield, Northwich and Crewe. Most of the work happens remotely with visits for kick-off and design reviews.',
      },
      {
        q: 'We rely on referrals rather than search. Do we still need a good site?',
        a: 'Arguably more so. A referred customer almost always looks you up before calling, and that visit is where you either confirm the recommendation or undo it.',
      },
    ],
    locationSlugs: ['chester', 'wilmslow', 'macclesfield', 'northwich', 'crewe'],
  },
  {
    slug: 'ecommerce-web-design-cheshire',
    serviceSlug: 'ecommerce-websites',
    areaName: 'Cheshire',
    h1: 'Ecommerce Web Design in Cheshire',
    metaTitle: 'Ecommerce Web Design Cheshire - Online Shops That Sell | Rainy Peaks',
    metaDescription:
      'Ecommerce web design across Cheshire: fast, well-photographed product pages and short checkouts for boutiques, makers, farm shops and specialist retailers.',
    intro:
      'Selling a considered product online is a different job from selling a cheap one. Photography has to earn trust, descriptions have to answer the questions a shop assistant would, and the checkout has to feel as safe as handing over a card in person. I build Cheshire shops around exactly that.',
    localAngle:
      'Cheshire’s independent retailers, boutiques, farm shops, galleries, specialist food and drink, compete against national chains on quality rather than price, and their websites need to show it. That usually means investing in product photography and page layout before spending anything on ads.',
    faqs: [
      {
        q: 'Do you help with product photography?',
        a: 'I don’t shoot it myself, but I’ll tell you exactly what shots the site needs and can recommend photographers locally. Good product photos change conversion more than almost any design change.',
      },
      {
        q: 'We also sell at markets and events. Can the site handle that?',
        a: 'Yes. Stock can sync with most portable EPOS systems so a market sale updates the website immediately, which saves the awkward call about an item you sold on Saturday.',
      },
    ],
    locationSlugs: ['chester', 'northwich', 'crewe', 'macclesfield', 'wilmslow'],
  },
  {
    slug: 'local-seo-cheshire',
    serviceSlug: 'local-seo',
    areaName: 'Cheshire',
    h1: 'Local SEO in Cheshire',
    metaTitle: 'Local SEO Cheshire - Get Found by Nearby Customers | Rainy Peaks',
    metaDescription:
      'Local SEO across Cheshire: Google Business Profile, map pack visibility and local landing pages for Chester, Wilmslow, Macclesfield, Northwich and Crewe.',
    intro:
      'Cheshire’s towns each have their own search market, and the businesses that win are the ones that treat them that way. That means a well-built Google Business Profile, a genuinely useful page for each town you serve, a fast site underneath, and a review habit your team can actually maintain.',
    localAngle:
      'Because Cheshire searches are spread across many smaller towns rather than one city, the competition per town is often lower than in Manchester or Liverpool. That makes local SEO unusually good value here: a well-built page for Knutsford or Northwich can start producing enquiries in months rather than a year.',
    faqs: [
      {
        q: 'We cover several Cheshire towns. How many pages do we need?',
        a: 'One per town you genuinely serve and can write honestly about, usually three to eight. Beyond that they get thin and stop working, which is the point most agencies keep selling past.',
      },
      {
        q: 'Is local SEO worth it for a high-value, referral-led business?',
        a: 'Often yes, because referred customers still search your name plus your town, and what they find at that moment decides whether they call.',
      },
    ],
    locationSlugs: ['wilmslow', 'chester', 'macclesfield', 'northwich', 'crewe'],
  },

  // ── Warrington ────────────────────────────────────────────────────────
  {
    slug: 'web-design-warrington',
    serviceSlug: 'website-design-build',
    areaName: 'Warrington',
    h1: 'Web Design in Warrington',
    metaTitle: 'Web Design Warrington - Websites for Small Businesses | Rainy Peaks',
    metaDescription:
      'Web design in Warrington for small businesses. Fast, mobile-first websites for trades, logistics, manufacturing and professional services. Fixed prices, no lock-in.',
    intro:
      'Warrington businesses are usually competing for work that’s decided quickly, a quote, a call, a site visit. So the website’s job is simple: prove you’re credible and make contact effortless, on a phone, in a couple of seconds. Everything else is decoration.',
    localAngle:
      'Sitting between Manchester and Liverpool, Warrington businesses regularly compete for work in both cities as well as at home. That changes the site structure: you need pages that stand up for “Warrington” searches without looking parochial to a Manchester buyer comparing three quotes.',
    faqs: [
      {
        q: 'We serve Warrington but also Manchester and Liverpool. How should the site handle that?',
        a: 'With a clear main site that sells the business, plus a small number of honest location pages for the areas you genuinely cover. Not thirty near-identical pages, they stopped working years ago.',
      },
      {
        q: 'How quickly can a new site be live?',
        a: 'Typically three to six weeks from kick-off, and the main variable is usually how quickly content and photos come back from your side.',
      },
    ],
    locationSlugs: ['warrington', 'wigan', 'st-helens', 'manchester'],
  },
  {
    slug: 'ecommerce-web-design-warrington',
    serviceSlug: 'ecommerce-websites',
    areaName: 'Warrington',
    h1: 'Ecommerce Web Design in Warrington',
    metaTitle: 'Ecommerce Web Design Warrington - Online Shops That Sell | Rainy Peaks',
    metaDescription:
      'Ecommerce web design in Warrington: fast product pages, trade accounts and stock synced with your systems. Built for retailers, wholesalers and distributors.',
    intro:
      'Not every online shop sells to the public. Plenty of Warrington businesses sell to trade customers who reorder the same items monthly and want it to take thirty seconds. Whichever you are, the build is the same discipline: fast pages, obvious pricing, and a checkout that doesn’t get in the way.',
    localAngle:
      'Warrington’s logistics and distribution weight means a lot of local ecommerce is trade rather than retail: account pricing, bulk reordering, delivery scheduling. Those need building deliberately, not bolting onto a consumer theme and hoping.',
    faqs: [
      {
        q: 'Can we show different prices to trade customers?',
        a: 'Yes. Account-based pricing, minimum order quantities and quick reordering are all standard, though the platform choice matters more here than for a consumer shop.',
      },
      {
        q: 'Will it connect to our stock and accounting systems?',
        a: 'Usually. Xero, QuickBooks, Sage and the common warehouse systems all connect. We confirm yours in the first session rather than discovering a gap halfway through.',
      },
    ],
    locationSlugs: ['warrington', 'st-helens', 'wigan', 'manchester'],
  },
  {
    slug: 'local-seo-warrington',
    serviceSlug: 'local-seo',
    areaName: 'Warrington',
    h1: 'Local SEO in Warrington',
    metaTitle: 'Local SEO Warrington - Get Found by Nearby Customers | Rainy Peaks',
    metaDescription:
      'Local SEO in Warrington for small businesses: Google Business Profile, map pack rankings and local landing pages that bring calls, not just impressions.',
    intro:
      'For a Warrington business, the map pack is often worth more than the rest of the first page combined, because someone searching for a local supplier usually calls one of the top three and stops. Getting there is unglamorous work: a complete profile, a fast site, real reviews and pages worth ranking.',
    localAngle:
      'Warrington’s position between two big cities cuts both ways. You can realistically compete for work in Manchester and Liverpool, but you’re also competing against firms based in both. The practical answer is to own Warrington and its immediate neighbours properly first, then push outward from a position of strength.',
    faqs: [
      {
        q: 'Should we target Manchester and Liverpool too?',
        a: 'Eventually, but not first. Those are far more competitive markets. Owning Warrington, Widnes, Runcorn and St Helens usually produces enquiries months sooner and funds the rest.',
      },
      {
        q: 'How do you report on results?',
        a: 'Monthly, leading with calls and form enquiries, then map pack positions, then traffic. If something isn’t working you’ll hear what I’m changing rather than which chart looked best.',
      },
    ],
    locationSlugs: ['warrington', 'manchester', 'st-helens', 'northwich'],
  },
];
