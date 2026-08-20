export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  whoFor: string;
  problems: string[];
  deliverables: string[];
  outcomes: string[];
  timescale: string;
  price?: string;
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'free-website-review',
    name: 'Free Website Review',
    shortName: 'Website Review',
    tagline: 'Find out exactly why your website isn’t winning work, before you spend anything.',
    metaTitle: 'Free Website Review for Small Businesses | Delveinai',
    metaDescription:
      'A free 15-minute conversation and a personalised report showing exactly what is holding your website back. Manchester-based web designer, no jargon, no obligation.',
    whoFor:
      'Business owners who suspect their website is letting them down but can’t put their finger on why. If you’ve been meaning to “sort the website out” for months and haven’t had time, this is the place to begin.',
    problems: [
      'Your website looks dated next to competitors and you know it',
      'Plenty of people visit, but hardly any of them get in touch',
      'It looks fine on your laptop but falls apart on a phone',
      'You’re worried about paying thousands for the wrong thing',
    ],
    deliverables: [
      'A relaxed 15-minute conversation about your business and who you want it to attract',
      'A written Website Review, specific to your site rather than a generic checklist',
      'Your top 3–5 fixes, ranked by effort and payoff',
      'Speed, mobile and accessibility scores explained in plain English',
      'How you compare with two competitors ranking above you',
      'A simple 90-day plan for putting it right',
    ],
    outcomes: [
      'Complete clarity on whether your site needs a tidy-up or a rebuild',
      'A short list of practical first steps instead of a vague sense of embarrassment',
      'Confidence to act, on your own or with help',
    ],
    timescale: 'Review delivered within 3 working days of our conversation.',
    price: 'Free, genuinely. No card, no trial, no follow-up sales sequence.',
    faqs: [
      {
        q: 'Is the review really free?',
        a: 'Yes. It’s how most clients first work with me, and plenty of people take the review and fix things themselves. That’s a good outcome, some come back later when they’re ready for a proper rebuild.',
      },
      {
        q: 'Do I need to prepare anything?',
        a: 'No. Just be ready to talk about who your best customers are and how they normally find you. I’ll look at the site itself beforehand.',
      },
      {
        q: 'Will you try to sell me a new website on the call?',
        a: 'No. The call is 15 minutes and it’s about your business, not my services. The review includes options if you want help implementing, but there’s no pitch and no follow-up pressure.',
      },
    ],
  },
  {
    slug: 'website-design-build',
    name: 'Website Design & Build',
    shortName: 'Design & Build',
    tagline: 'A fast, professional website that turns visitors into enquiries, built in weeks not months.',
    metaTitle: 'Website Design & Build for Small Businesses | Delveinai',
    metaDescription:
      'Custom website design and build for small businesses across Manchester and the North West. Fast, mobile-first, accessible sites with fixed prices and no lock-in.',
    whoFor:
      'Businesses starting from scratch, or replacing a site that has quietly stopped earning its keep. Ideal when you want something designed around your customers rather than dropped into a template.',
    problems: [
      'Your current site was built years ago by someone you can no longer reach',
      'The design says “small and struggling” when you’re neither',
      'Every content change means raising a ticket and waiting a week',
      'You’ve no idea whether anyone is actually filling the contact form',
    ],
    deliverables: [
      'A discovery session covering your customers, your competitors and the enquiries you want',
      'A custom design, not a stretched theme, in your brand’s colours and tone',
      'Copywriting support so each page argues your case instead of listing features',
      'Mobile-first build, tested on real phones, with Core Web Vitals in the green',
      'Accessible markup (WCAG 2.2 AA), proper heading structure and alt text throughout',
      'On-page SEO, structured data, sitemap and Google Business Profile alignment',
      'An editor you can actually use, plus a recorded walkthrough for your team',
    ],
    outcomes: [
      'A site that loads in about a second and looks right on any screen',
      'Enquiries you can trace, so you know which pages earn their place',
      'Full ownership of the code, content and domain, no lock-in',
    ],
    timescale: 'Typically 3–6 weeks from kick-off to launch.',
    price: 'Fixed price agreed up front from a defined scope. No day rates, no scope creep invoices.',
    faqs: [
      {
        q: 'Do you use WordPress?',
        a: 'Only when it genuinely suits you. Most small business sites are faster, cheaper to run and far safer built as static sites with a simple editor on top. If you need WordPress for a specific plugin or an existing team, I’ll build it properly and lock it down.',
      },
      {
        q: 'Who writes the words?',
        a: 'We do it together. You know your business; I know what a visitor needs to read before they pick up the phone. You’ll get first drafts to react to rather than an empty document and a deadline.',
      },
      {
        q: 'What happens to my old site’s Google rankings?',
        a: 'They’re protected deliberately. Every existing URL is mapped and redirected, page titles are carried across or improved, and I check search performance for the first month after launch to catch anything that slips.',
      },
    ],
  },
  {
    slug: 'ecommerce-websites',
    name: 'Ecommerce Websites',
    shortName: 'Ecommerce',
    tagline: 'An online shop that’s quick to buy from and quick for you to run.',
    metaTitle: 'Ecommerce Website Design for Small Businesses | Delveinai',
    metaDescription:
      'Ecommerce websites for small businesses in the North West: Shopify and headless builds, fast product pages, sensible checkouts and stock that stays in sync.',
    whoFor:
      'Retailers, makers and wholesalers selling online, or about to. Ideal when the shop side of your site was bolted on as an afterthought and now costs you sales every week.',
    problems: [
      'Product pages take five seconds to load and shoppers leave before they finish',
      'Baskets get abandoned at a confusing, untrusted checkout',
      'Stock levels on the website and in the shop disagree',
      'Adding a product is a twenty-minute job nobody wants to do',
    ],
    deliverables: [
      'Platform advice based on your catalogue, margins and how you actually pack orders',
      'Fast, clean product and category pages built for browsing on a phone',
      'A short checkout with the payment methods your customers expect',
      'Product schema so listings show prices and stock in Google results',
      'Stock, orders and accounting connected to the systems you already run',
      'Abandoned-basket and order emails written in your voice, not the platform default',
      'Team training on adding products, running offers and handling refunds',
    ],
    outcomes: [
      'More of the traffic you already pay for turning into orders',
      'Product updates that take a minute instead of an afternoon',
      'One accurate stock figure everywhere, shop floor included',
    ],
    timescale: 'Typically 4–8 weeks depending on catalogue size.',
    faqs: [
      {
        q: 'Shopify, WooCommerce or something custom?',
        a: 'For most small businesses Shopify wins on reliability and payments, and I’ll say so even though a custom build would bill more. WooCommerce makes sense if you’re already invested in WordPress. Custom is for genuinely unusual products or pricing rules.',
      },
      {
        q: 'Can you migrate our existing shop?',
        a: 'Yes. Products, customers, order history and URLs all come across, with redirects in place so your existing rankings and customer bookmarks keep working.',
      },
      {
        q: 'Will it work with our till or accounting software?',
        a: 'Usually, yes. Xero, QuickBooks, Sage and the common EPOS systems all connect. We check this in the first session rather than discovering it late.',
      },
    ],
  },
  {
    slug: 'local-seo',
    name: 'Local SEO & Google Visibility',
    shortName: 'Local SEO',
    tagline: 'Get found by the people searching for what you do, in the towns you actually serve.',
    metaTitle: 'Local SEO for Small Businesses in the North West | Delveinai',
    metaDescription:
      'Practical local SEO for small businesses: Google Business Profile, local landing pages, technical fixes and reviews. Honest reporting from a Manchester-based specialist.',
    whoFor:
      'Businesses that serve a defined area and want to appear when someone nearby searches. Ideal if you rank for your own company name and nothing else.',
    problems: [
      'You only appear on Google when someone already knows your name',
      'Competitors sit in the map pack and you don’t',
      'Your Google Business Profile is half-finished and years out of date',
      'A previous SEO agency sent colourful reports and no extra enquiries',
    ],
    deliverables: [
      'Keyword research based on what your customers type, not industry jargon',
      'Google Business Profile set up properly: categories, services, photos, posts',
      'Genuinely useful location and service pages, written to be read, not stuffed',
      'Technical fixes: speed, indexing, structured data, internal links, broken pages',
      'Consistent name, address and phone details across the directories that matter',
      'A simple review-request routine your team can keep up with',
      'Monthly reporting on calls, enquiries and rankings, in that order of importance',
    ],
    outcomes: [
      'Visibility in the map pack for the searches that bring paying work',
      'Steadier enquiries that don’t stop the moment you pause advertising',
      'Reporting you can understand, tied to enquiries rather than vanity metrics',
    ],
    timescale: 'Technical work in weeks; ranking movement usually shows across 3–6 months.',
    faqs: [
      {
        q: 'How long until we see results?',
        a: 'Profile and technical fixes can move things within weeks. Competitive local rankings usually take three to six months of steady work. Anyone promising page one in thirty days is selling you something else.',
      },
      {
        q: 'Do we need to blog constantly?',
        a: 'No. A handful of genuinely useful pages that answer real customer questions beats forty thin posts nobody reads. Publishing consistently helps, but only if there’s something worth saying.',
      },
      {
        q: 'Can you do this if you didn’t build our site?',
        a: 'Yes, that’s common. I work with what you have and tell you honestly if the underlying site is holding back everything else.',
      },
    ],
  },
  {
    slug: 'website-care-plan',
    name: 'Website Care Plan',
    shortName: 'Care Plan',
    tagline: 'Someone looking after your website every month, so it never quietly falls over.',
    metaTitle: 'Website Care, Hosting & Support Plans | Delveinai',
    metaDescription:
      'Monthly website care for small businesses: hosting, updates, backups, security, edits and improvements. One predictable cost, no long contracts.',
    whoFor:
      'Businesses with a website they depend on and nobody to look after it. Websites rot quietly: plugins age, forms break, certificates expire, and you find out from a customer.',
    problems: [
      'Nobody knows who hosts the site or where the domain is registered',
      'The contact form stopped emailing you and nobody noticed for weeks',
      'Small text changes wait months because it’s awkward to ask',
      'You’ve had a warning about an out-of-date plugin and ignored it',
    ],
    deliverables: [
      'Fast, monitored hosting with SSL and daily off-site backups',
      'Software, plugin and dependency updates applied and tested',
      'Uptime and form monitoring, so I know before your customers do',
      'An hour of content edits each month, no quibbling over what counts',
      'Quarterly speed, accessibility and broken-link checks with a short action list',
      'A named person to email, with replies in hours rather than days',
    ],
    outcomes: [
      'A site that stays fast, secure and online without you thinking about it',
      'Small changes made the same week you ask for them',
      'One predictable monthly cost instead of emergency call-out invoices',
    ],
    timescale: 'Monthly, rolling. Cancel any time, no long contracts.',
    faqs: [
      {
        q: 'Is there a minimum contract?',
        a: 'No. It rolls monthly and you can stop whenever you like. Support that’s worth paying for shouldn’t need a lock-in to keep you.',
      },
      {
        q: 'What counts as an included edit?',
        a: 'Anything you can describe in an email: new prices, updated opening hours, swapping photos, adding a team member, publishing a post. Bigger pieces of work, a new section or a booking system, get quoted separately and honestly.',
      },
      {
        q: 'You didn’t build our site. Can you still take it on?',
        a: 'Usually. I’ll do a short health check first, tell you what state it’s in, and be straight with you if it needs rebuilding rather than propping up.',
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
