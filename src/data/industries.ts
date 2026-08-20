export interface Industry {
  slug: string;
  /** e.g. "Accountants" */
  name: string;
  /** Page H1, e.g. "Web Design for Accountants" */
  title: string;
  metaDescription: string;
  intro: string;
  painPoints: string[];
  opportunities: { title: string; text: string }[];
  /** A concrete example project, step by step */
  workflow: { title: string; steps: string[] };
  tools: string[];
  roi: string;
  faqs: { q: string; a: string }[];
  related: string[];
}

export const industries: Industry[] = [
  {
    slug: 'accountants',
    name: 'Accountants',
    title: 'Web Design for Accountants',
    metaDescription:
      'Website design for accountancy practices: attract better-fit clients, explain your services clearly and win advisory work. Independent web designer based in Manchester.',
    intro:
      'Most accountancy websites read like a compliance checklist: tax returns, payroll, bookkeeping, VAT. That’s fine for a practice competing on price. If you want advisory clients, the site has to do something harder, show that you understand a business owner’s problems before they’ve explained them. The practices winning good clients online aren’t the ones with the flashiest sites; they’re the ones whose sites sound like a conversation with a partner.',
    painPoints: [
      'Your site lists services but never says who you’re actually for',
      'Price shoppers ring constantly; the advisory clients you want don’t',
      'The design looks like every other practice within ten miles',
      'Onboarding still means printing, signing and posting forms',
      'Nobody has updated the site since a partner left three years ago',
    ],
    opportunities: [
      {
        title: 'Position for the clients you want',
        text: 'A site built around a specific audience, contractors, dental practices, growing ecommerce brands, filters out price shoppers before they call and makes the right clients feel understood immediately.',
      },
      {
        title: 'Make fees a filter, not a mystery',
        text: 'Publishing indicative fee ranges or a simple package structure loses you the wrong enquiries and wins the right ones, because serious buyers dislike ringing to find out whether they can afford you.',
      },
      {
        title: 'Show the people, not the stock photos',
        text: 'Accountancy is bought on trust. Real photos, named partners and short, human bios consistently outperform another picture of a calculator on a spreadsheet.',
      },
      {
        title: 'Turn deadlines into visibility',
        text: 'Genuinely useful pages on Making Tax Digital, dividends, or the tax year end attract searches all year, and give existing clients a reason to send people your way.',
      },
    ],
    workflow: {
      title: 'Example: a practice website that filters enquiries',
      steps: [
        'Discovery session identifies the two client types worth pursuing and the two worth deflecting',
        'Homepage leads with the problem those clients have, not with a list of compliance services',
        'Each service page carries an indicative fee range and a clear description of who it suits',
        'An onboarding form captures turnover, sector and current software before the first call',
        'Enquiries arrive pre-qualified, so partners spend calls advising rather than triaging',
      ],
    },
    tools: [
      'A fast static site or WordPress, depending on how your team publishes',
      'Structured data for your practice, services and reviews',
      'A secure enquiry form with proper handling of client details',
      'Your existing practice software, linked from the site rather than replaced',
    ],
    roi: 'A practice that converts even one extra advisory client a quarter usually covers the cost of a new site within the first year. The larger, quieter gain is time: fewer unsuitable enquiries reaching partners, and less repetition of the same qualifying questions.',
    faqs: [
      {
        q: 'Should we publish our fees?',
        a: 'Indicative ranges, usually yes. It costs you enquiries you’d have declined anyway and wins ones that were quietly worried you’d be out of reach. Exact fixed pricing works well for compliance packages, less so for advisory.',
      },
      {
        q: 'Do we need a client portal?',
        a: 'Most practices already have one in their practice software; the website just needs to link to it clearly and securely. Building a second one is usually money spent twice.',
      },
      {
        q: 'Is a blog worth the effort?',
        a: 'Only if someone will genuinely write it. Six substantial pages answering the questions clients actually ask beat forty rewritten HMRC press releases, and they keep working for years.',
      },
    ],
    related: ['financial-services', 'solicitors', 'professional-services'],
  },
  {
    slug: 'solicitors',
    name: 'Solicitors',
    title: 'Web Design for Solicitors',
    metaDescription:
      'Website design for law firms: clear practice-area pages, credible profiles and enquiry forms that convert. SRA-aware, accessible builds from a Manchester web designer.',
    intro:
      'People choosing a solicitor are usually anxious, often in a hurry, and almost always comparing three firms at once. They aren’t reading your site for pleasure; they’re looking for proof you handle their exact situation and a way to start the conversation quickly. Firms that make those two things easy win work from firms with far bigger reputations.',
    painPoints: [
      'Practice-area pages read as legal definitions rather than answers',
      'The enquiry form asks for too much and gets abandoned',
      'Fee transparency requirements are met in a PDF nobody can find',
      'Individual solicitor profiles are a name, a photo and a phone number',
      'The site is unusable on a phone, which is where distressed clients are',
    ],
    opportunities: [
      {
        title: 'Practice-area pages that answer the real question',
        text: 'Someone searching “how long does probate take” wants an answer, not a definition of probate. Pages that answer directly, then offer help, outrank and outconvert the ones that don’t.',
      },
      {
        title: 'Transparent costs, properly presented',
        text: 'The SRA requires price transparency for certain work; treating that as a selling point rather than a compliance chore reassures clients and reduces unsuitable enquiries.',
      },
      {
        title: 'Solicitor profiles that build confidence',
        text: 'Real photographs, plain-English specialisms and the kinds of matters someone handles turn a directory listing into a reason to ask for that person by name.',
      },
      {
        title: 'Accessible by design',
        text: 'Legal clients disproportionately include older and disabled users. A WCAG 2.2 AA build is both an obligation you can evidence and a straightforward conversion improvement.',
      },
    ],
    workflow: {
      title: 'Example: rebuilding a firm’s private client section',
      steps: [
        'The top twenty questions clients ask on first calls are collected from fee earners',
        'Each becomes a section on a practice-area page, written in plain English and reviewed for compliance',
        'Price transparency information is built into the page itself rather than hidden in a PDF',
        'A short, three-field enquiry form sits at the top and bottom of every page',
        'Enquiries route to the right team automatically, with a same-day acknowledgement',
      ],
    },
    tools: [
      'A fast, accessible build meeting WCAG 2.2 AA',
      'Structured data for legal services, people and reviews',
      'A secure enquiry form with sensible retention and no third-party leakage',
      'Your case management system, connected where its API allows',
    ],
    roi: 'For most firms a single additional instruction a month covers the annual cost of the site several times over. The bigger effect is usually mix: clearer pages attract more of the work you want and fewer enquiries you have to politely decline.',
    faqs: [
      {
        q: 'Does the site need to meet SRA transparency rules?',
        a: 'If you do the reserved activities the rules cover, yes, including displaying your SRA number and the digital badge. It’s built in as standard rather than bolted on afterwards.',
      },
      {
        q: 'Can we use client testimonials?',
        a: 'Carefully, and only with genuine, documented consent and no confidentiality issues. Anonymised outcomes and case summaries are often safer and just as persuasive.',
      },
      {
        q: 'Should each solicitor have their own page?',
        a: 'Yes, for anyone client-facing. Individual profiles rank for name searches, get shared by referrers, and reassure someone deciding whether to trust you with something difficult.',
      },
    ],
    related: ['accountants', 'professional-services', 'estate-agents'],
  },
  {
    slug: 'recruitment',
    name: 'Recruitment',
    title: 'Web Design for Recruitment Agencies',
    metaDescription:
      'Website design for recruitment agencies: fast job boards, strong client pages and applications that work on a phone. Built for consultancies across the North West.',
    intro:
      'A recruitment website has to serve two audiences who want opposite things. Candidates want to find a relevant role and apply in under two minutes, usually on a phone, often on a break. Clients want proof you understand their sector before they’ll consider paying a fee. Most agency sites do one of those adequately and the other badly.',
    painPoints: [
      'The job board is slow, unfilterable and looks like a spreadsheet',
      'Applying requires an account, a CV upload and eleven form fields',
      'Client-facing pages are three paragraphs of generic partnership language',
      'Job listings never appear in Google for Jobs',
      'Consultants have no personal pages, so their networks land nowhere',
    ],
    opportunities: [
      {
        title: 'A job board built for phones',
        text: 'Fast filtering, clear salary and location, and a two-field application with CV upload. Every unnecessary field costs applications, and the drop-off is steeper than most agencies realise.',
      },
      {
        title: 'Get listings into Google for Jobs',
        text: 'Proper job posting structured data puts your roles directly into Google’s jobs widget, which is free traffic most agency sites simply never claim.',
      },
      {
        title: 'Client pages that prove sector knowledge',
        text: 'Salary guides, market commentary and honest hiring advice for your niche do more to win retained work than any amount of copy about your partnership approach.',
      },
      {
        title: 'Consultant profiles as landing pages',
        text: 'Consultants build the relationships; giving each a real page with their specialism, roles and contact details gives their LinkedIn activity somewhere useful to send people.',
      },
    ],
    workflow: {
      title: 'Example: a job board that actually converts',
      steps: [
        'Roles sync automatically from your ATS, so nobody re-types a job twice',
        'Each listing publishes with job posting structured data for Google for Jobs',
        'Candidates filter by sector, location and salary without a page reload',
        'Applying takes a name, an email and a CV, everything else comes later',
        'Applications land in the ATS against the right consultant, with an instant acknowledgement',
      ],
    },
    tools: [
      'Your existing ATS or CRM, integrated rather than replaced',
      'Job posting structured data for Google for Jobs',
      'Fast search and filtering that works without heavy JavaScript',
      'Analytics tracking applications per role, not just page views',
    ],
    roi: 'Agencies typically see applications per role rise sharply once the form is shortened and listings reach Google for Jobs, often enough to reduce job board spend. On the client side, one retained assignment usually pays for the build.',
    faqs: [
      {
        q: 'Can the site pull jobs from our ATS automatically?',
        a: 'Almost always. Bullhorn, JobAdder, Vincere and most modern systems have APIs or feeds. We confirm yours before the build rather than discovering a gap halfway through.',
      },
      {
        q: 'Do we need candidate logins?',
        a: 'Usually not, and they cost you applications. A simple apply-with-CV flow converts far better; save accounts for cases where candidates genuinely need to track multiple applications.',
      },
      {
        q: 'Should client and candidate content be separated?',
        a: 'Yes, from the homepage onward. They want different things, and trying to speak to both in one message tends to persuade neither.',
      },
    ],
    related: ['professional-services', 'marketing-agencies', 'financial-services'],
  },
  {
    slug: 'estate-agents',
    name: 'Estate Agents',
    title: 'Web Design for Estate Agents',
    metaDescription:
      'Website design for estate agents: fast property search, strong valuation pages and local area content that ranks. Built for independent agents in the North West.',
    intro:
      'Buyers start on Rightmove; that isn’t changing. Which is exactly why your own site shouldn’t try to beat it at property search. Its real job is winning instructions from vendors, and vendors are choosing between three local agents based on how credible each one looks and how easy it is to book a valuation.',
    painPoints: [
      'The site tries to out-portal Rightmove and loses',
      'Booking a valuation means a generic contact form and a wait',
      'Property pages load slowly and look poor on a phone',
      'No local area content, so you never rank for the streets you dominate',
      'Sold listings vanish, taking your best evidence with them',
    ],
    opportunities: [
      {
        title: 'A valuation page that earns instructions',
        text: 'The single highest-value page on an agency site. It needs social proof, a clear explanation of what happens next, and a booking flow that takes under a minute.',
      },
      {
        title: 'Area guides that rank for your patch',
        text: 'Genuinely useful guides to the neighbourhoods you know, schools, transport, price trends, attract exactly the people about to move, and portals can’t compete on local knowledge.',
      },
      {
        title: 'Keep your sold evidence visible',
        text: 'A well-organised archive of recent sales with prices and timescales is the most persuasive thing on your site. Deleting it every quarter throws away your best argument.',
      },
      {
        title: 'Fast, clean property pages',
        text: 'Property pages are image-heavy by nature. Modern image formats and lazy loading are the difference between a page that opens instantly on 4G and one that gets abandoned.',
      },
    ],
    workflow: {
      title: 'Example: turning valuation traffic into instructions',
      steps: [
        'Listings feed automatically from your CRM, so the site never falls behind the portals',
        'Every property page links to a valuation booking with a nearby sold-price comparison',
        'The booking form asks for a postcode, a name and a phone number, and nothing else',
        'Bookings land in the diary and the CRM instantly, with an immediate confirmation',
        'Sold properties move into a permanent archive that keeps ranking for local searches',
      ],
    },
    tools: [
      'Your agency CRM (Reapit, Alto, Jupix and similar), fed straight into the site',
      'Optimised image handling for large photo sets',
      'Structured data for listings, reviews and your branch',
      'Online booking connected to your team’s real availability',
    ],
    roi: 'Instructions are high-value enough that one additional listing a month transforms the economics of a site. Most independents find valuation bookings rise once that page is rebuilt in isolation, before any other change.',
    faqs: [
      {
        q: 'Should we bother with property search if buyers use Rightmove?',
        a: 'Include it, but don’t centre the site on it. Buyers do land on your listings from search and social; your homepage, though, should be selling to vendors.',
      },
      {
        q: 'Can listings update automatically?',
        a: 'Yes. Most agency CRMs export a feed the site can consume, so a price change or a new instruction appears without anyone re-typing it.',
      },
      {
        q: 'Are area guides really worth writing?',
        a: 'They’re the most reliable local ranking asset an agent has. One properly researched guide per area you genuinely dominate beats twenty thin postcode pages.',
      },
    ],
    related: ['solicitors', 'financial-services', 'trades'],
  },
  {
    slug: 'construction',
    name: 'Construction',
    title: 'Web Design for Construction Companies',
    metaDescription:
      'Website design for construction firms: project portfolios, accreditations and tender-ready credibility. Built for contractors across Manchester and the North West.',
    intro:
      'Construction websites get judged in about eight seconds by two different people: a homeowner deciding whether you’re a real company, and a commercial buyer checking whether you’re credible enough to invite to tender. Both want the same evidence, real projects, real accreditations, real people, and most sector sites bury all three.',
    painPoints: [
      'Project photos are phone snaps in a gallery with no context',
      'Accreditations (CHAS, SafeContractor, Constructionline) are mentioned nowhere',
      'The site doesn’t distinguish domestic work from commercial contracting',
      'No case studies, so every tender starts by proving you exist',
      'Recruitment is invisible, despite it being a constant problem',
    ],
    opportunities: [
      {
        title: 'Case studies instead of galleries',
        text: 'A project page with the brief, the constraints, the value, the duration and the outcome does more for a tender than fifty untitled photographs.',
      },
      {
        title: 'Put your accreditations to work',
        text: 'CHAS, Constructionline, ISO certifications and insurance levels are exactly what a buyer scans for. Displayed clearly with numbers and expiry dates, they shorten the qualification process.',
      },
      {
        title: 'Separate domestic and commercial paths',
        text: 'An extension client and a facilities manager want completely different information. One clear split near the top of the site serves both far better than a compromise.',
      },
      {
        title: 'A careers section that actually recruits',
        text: 'With skilled trades in short supply, a real careers page with current vacancies and honest content about the company often repays the site on its own.',
      },
    ],
    workflow: {
      title: 'Example: a project page built for tenders',
      steps: [
        'Site managers submit photos and a few lines from their phone as work completes',
        'Each project publishes with sector, value band, duration and the challenge overcome',
        'Accreditations and insurance details appear alongside, ready for a buyer checking credentials',
        'Projects filter by sector so a buyer sees comparable work in two clicks',
        'A short pre-qualification pack downloads from the same page',
      ],
    },
    tools: [
      'A simple project publishing flow your site team can use from a phone',
      'Optimised image handling for large photo sets',
      'Structured data for your company, projects and accreditations',
      'A careers section linked to however you currently handle applications',
    ],
    roi: 'One additional tender invitation, or one skilled hire made without an agency fee, typically covers the cost of the site outright. Domestic enquiry quality also improves markedly once project values are visible.',
    faqs: [
      {
        q: 'Our clients find us by word of mouth. Do we need a website?',
        a: 'Referred buyers still look you up before calling, and commercial ones check credentials online before adding you to a tender list. The site’s job is confirming the recommendation rather than generating it.',
      },
      {
        q: 'We can’t show some projects for confidentiality reasons.',
        a: 'That’s common. Anonymised case studies with sector, value band and outcome work almost as well, and clients rarely need the name to be persuaded.',
      },
      {
        q: 'How do we keep the project section up to date?',
        a: 'By making it a two-minute job from a phone on site. If updating requires a laptop and a login nobody remembers, it will be out of date within a quarter.',
      },
    ],
    related: ['trades', 'manufacturing', 'professional-services'],
  },
  {
    slug: 'trades',
    name: 'Trades',
    title: 'Web Design for Trades',
    metaDescription:
      'Website design for plumbers, electricians, joiners, roofers and builders. Fast mobile sites that turn local searches into phone calls. North West based designer.',
    intro:
      'A trades website has one job, and it’s not to be impressive. Someone with a leak is on a phone, one-handed, comparing three tradespeople, and they will ring whichever one makes it easiest. Fast loading, a phone number they can tap immediately, proof you’re local and qualified, and recent photos of real work. That’s it, and it beats an expensive site that takes six seconds to load.',
    painPoints: [
      'The site takes five seconds to load on mobile data',
      'The phone number isn’t tappable and sits at the bottom of the page',
      'No sign of Gas Safe, NICEIC or insurance details',
      'You only rank for your business name, not for “plumber in Stockport”',
      'Your Google Business Profile is more complete than your website',
    ],
    opportunities: [
      {
        title: 'Speed and a tappable phone number',
        text: 'The two highest-return changes on any trades site. A page that opens in a second with a call button in the header converts dramatically better than anything a redesign alone achieves.',
      },
      {
        title: 'Show your certifications',
        text: 'Gas Safe, NICEIC, FENSA, Which? Trusted Trader, plus public liability cover, are the reassurance that separates you from an unqualified competitor with cheaper prices.',
      },
      {
        title: 'A page per service and area',
        text: 'Honest pages for the jobs you want, boiler installations, rewires, bathroom fitting, in the towns you actually cover, are how you rank beyond your own name.',
      },
      {
        title: 'Recent work, photographed on a phone',
        text: 'Before-and-after photos from real jobs beat stock imagery every time. A simple way to upload them from site is worth more than any design flourish.',
      },
    ],
    workflow: {
      title: 'Example: from search to phone call in thirty seconds',
      steps: [
        'A homeowner searches “emergency plumber Stockport” on a phone',
        'Your service page loads in about a second with a call button already visible',
        'The first screen states the area you cover, your Gas Safe number and today’s availability',
        'Recent local jobs and reviews sit immediately below, with prices where you can give them',
        'They tap to call, or send an enquiry with a photo of the problem attached',
      ],
    },
    tools: [
      'A fast, lightweight build, no heavy page builders',
      'Google Business Profile properly set up and matched to the site',
      'Structured data for your services, areas covered and reviews',
      'A simple job-photo upload your team can use from a van',
    ],
    roi: 'For most trades one extra job a month covers the site several times over. The compounding gain is ranking for job-type searches instead of relying entirely on directories that charge per lead.',
    faqs: [
      {
        q: 'Isn’t a Google Business Profile enough?',
        a: 'It’s the most important single thing, but it needs a fast, credible website behind it. Google leans on your site to judge your profile, and customers check it before ringing.',
      },
      {
        q: 'Should we publish prices?',
        a: 'Where you sensibly can, yes, “from” prices or typical ranges for common jobs. It cuts out time-wasting calls and customers appreciate the honesty.',
      },
      {
        q: 'Do we need a page for every town we cover?',
        a: 'For the towns you genuinely work in and can write honestly about, yes. Thirty near-identical pages for places you rarely visit will do more harm than good.',
      },
    ],
    related: ['construction', 'estate-agents', 'retail'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    title: 'Web Design for Manufacturers',
    metaDescription:
      'Website design for manufacturers and engineering firms: technical specifications, capability pages and RFQ forms that produce qualified enquiries. North West based.',
    intro:
      'Manufacturing websites are usually written for people who already know the company, and read by people who don’t. A buyer sourcing a component wants tolerances, materials, capacity and lead times, and they want them without filling in a form first. Give them that and you get qualified enquiries; hide it and they go to the competitor who published a spec sheet.',
    painPoints: [
      'Capability pages describe values and heritage but not what you can actually make',
      'No specifications, tolerances or materials anywhere on the site',
      'The only contact route is a general enquiry form that goes to an inbox nobody owns',
      'Product photography is twenty years old and taken on a factory floor',
      'You’re invisible for the technical terms buyers actually search',
    ],
    opportunities: [
      {
        title: 'Publish real capability data',
        text: 'Machine list, envelope sizes, tolerances, materials, certifications and typical lead times. Buyers self-qualify against it, so the enquiries that arrive are ones you can actually serve.',
      },
      {
        title: 'An RFQ form built for engineers',
        text: 'Drawing upload, quantity, material, tolerance and target date. A proper RFQ flow turns a vague enquiry into something your estimator can price the same day.',
      },
      {
        title: 'Rank for technical searches',
        text: 'Buyers search by process and material, not by company name. Pages built around those terms reach people at the exact moment they’re sourcing.',
      },
      {
        title: 'Certifications front and centre',
        text: 'ISO 9001, AS9100, IATF and industry approvals are qualification gates. Displayed clearly with scope and dates, they get you onto shortlists automatically.',
      },
    ],
    workflow: {
      title: 'Example: an RFQ flow that reaches the estimator ready to price',
      steps: [
        'A buyer finds a process page while searching for a specific material and tolerance',
        'Capability data confirms you can make the part before they contact anyone',
        'The RFQ form takes a drawing, quantity, material and target date',
        'The submission routes straight to estimating with everything attached',
        'An automatic acknowledgement sets a realistic quoting timescale',
      ],
    },
    tools: [
      'A structured capability and specification section, easy to keep current',
      'Secure file upload for drawings, with sensible size limits and retention',
      'Structured data for your organisation, products and certifications',
      'Your ERP or quoting system, connected where an integration exists',
    ],
    roi: 'A single new production customer generally dwarfs the cost of the site. The immediate operational win is estimator time: fewer unsuitable enquiries and fewer rounds of email establishing what a buyer actually needs.',
    faqs: [
      {
        q: 'We don’t want competitors seeing our capabilities.',
        a: 'Competitors already know roughly what your machines can do; buyers don’t. Withholding specifications costs you far more in missed enquiries than it protects. Commercial detail like pricing is a different matter.',
      },
      {
        q: 'Our customers are all long-standing. Does this matter?',
        a: 'It matters most when a long-standing customer changes procurement staff, or when you need to replace lost volume. A credible site is the cheapest business development you can have ready in advance.',
      },
      {
        q: 'Can the site handle drawing uploads securely?',
        a: 'Yes, with encrypted transfer, access limited to your team and a defined retention period. It’s a standard part of any RFQ build.',
      },
    ],
    related: ['construction', 'trades', 'professional-services'],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    title: 'Web Design for Hospitality',
    metaDescription:
      'Website design for restaurants, pubs, cafés and guest houses: fast menus, direct bookings and fewer commission fees. Built for hospitality across the North West.',
    intro:
      'Hospitality websites fail on the basics far more often than on design. Someone is standing on a street looking for somewhere to eat tonight; they want the menu, the opening hours and a table, in that order, in under a minute, on a phone with poor signal. Every booking that goes through your own site instead of a platform keeps the commission in your business.',
    painPoints: [
      'The menu is a PDF that opens sideways and pinch-zoomed on a phone',
      'Opening hours are wrong, or only on Facebook',
      'All bookings arrive through a platform taking a cut of every cover',
      'Photos are dark, old, and not of your current food or rooms',
      'The site takes six seconds to load on a phone in the city centre',
    ],
    opportunities: [
      {
        title: 'Ditch the PDF menu',
        text: 'A proper HTML menu loads instantly, works on any phone, can be updated in a minute, and lets Google show your dishes in search. PDFs do none of that.',
      },
      {
        title: 'Push bookings direct',
        text: 'A prominent booking widget on your own site, with a reason to book direct, quietly moves covers away from commission platforms without upsetting anyone.',
      },
      {
        title: 'Get the practical details right',
        text: 'Hours, parking, accessibility, dog policy, dietary options. These are the questions that decide where a group eats, and most sites answer none of them clearly.',
      },
      {
        title: 'Photography that reflects today',
        text: 'Current, well-lit photos of the room and the food are the single highest-impact investment in hospitality web design, ahead of any layout change.',
      },
    ],
    workflow: {
      title: 'Example: a direct booking that skips the commission',
      steps: [
        'Someone searches for dinner nearby and lands on your site from the map pack',
        'The homepage loads in about a second with tonight’s hours and a book button',
        'The menu is readable immediately, with allergen and dietary information built in',
        'Booking takes date, covers, time and a phone number, and confirms instantly',
        'A confirmation and a reminder go out automatically, cutting no-shows',
      ],
    },
    tools: [
      'A booking system that suits your covers and confirms in real time',
      'Structured data for your menu, hours, location and reviews',
      'Google Business Profile kept in step with the site',
      'A menu editor that takes minutes, so specials actually get published',
    ],
    roi: 'Moving even a fifth of bookings from a commission platform to direct usually covers a hospitality site within months. Accurate hours and menus also cut the volume of phone calls asking the same three questions.',
    faqs: [
      {
        q: 'Should we still list on booking platforms?',
        a: 'Yes, they bring genuinely new customers. The aim is to stop paying commission on people who already knew your name and would have booked direct if it were easy.',
      },
      {
        q: 'Our menu changes weekly. Isn’t a PDF simpler?',
        a: 'It feels simpler and costs you customers. A proper menu editor takes about the same effort to update and works far better on the phones your guests are holding.',
      },
      {
        q: 'How important are photos?',
        a: 'More than the design. A day with a good food photographer typically changes results more than anything else in a hospitality budget.',
      },
    ],
    related: ['retail', 'estate-agents', 'trades'],
  },
  {
    slug: 'retail',
    name: 'Retail',
    title: 'Web Design for Retailers',
    metaDescription:
      'Website design for independent retailers: fast online shops, click and collect, and stock that stays in sync with the shop floor. North West based designer.',
    intro:
      'Independent retail competes with national chains on personality, expertise and service, none of which survive a generic template. The winning setup is usually simpler than people expect: fast product pages, an honest reason to buy from you rather than Amazon, and stock that agrees with what’s on the shelf.',
    painPoints: [
      'Product pages load slowly and shoppers leave before they finish',
      'Website stock and shop stock disagree, so customers get disappointed',
      'Adding a product takes twenty minutes, so half the range never goes online',
      'Baskets are abandoned at a checkout that feels untrustworthy',
      'Nothing on the site explains why you rather than a chain',
    ],
    opportunities: [
      {
        title: 'One stock figure everywhere',
        text: 'Connecting your EPOS to the website means a sale on the shop floor updates the site immediately. It prevents the worst customer experience in independent retail: paying for something that isn’t there.',
      },
      {
        title: 'Click and collect',
        text: 'Reserve online, pay in store. It brings people through the door, avoids postage entirely, and plays to the advantage a chain’s warehouse can’t match.',
      },
      {
        title: 'Sell the expertise, not just the product',
        text: 'Buying guides, fitting advice and honest comparisons are why people choose an independent. They also rank, which is the part most retailers overlook.',
      },
      {
        title: 'A checkout that doesn’t leak sales',
        text: 'Guest checkout, the payment methods your customers expect, visible delivery costs early, and no surprises at the last step.',
      },
    ],
    workflow: {
      title: 'Example: a click and collect order',
      steps: [
        'A customer finds a product page through a local search on their phone',
        'Live stock shows the item is in the shop today',
        'They reserve it in three steps, paying now or on collection',
        'The order prints behind the counter and stock is decremented immediately',
        'They collect the same day, and usually leave having bought something else',
      ],
    },
    tools: [
      'Shopify or an equivalent, chosen for your catalogue and how you dispatch',
      'EPOS integration for genuine stock sync',
      'Product structured data so prices and availability show in search results',
      'Simple product editing that takes a minute per item, not twenty',
    ],
    roi: 'Speed and checkout improvements usually lift conversion on traffic you already have, which is cheaper than buying more. Click and collect tends to raise average basket size because people buy extras when they come in.',
    faqs: [
      {
        q: 'We only have a few hundred products. Is a shop worth it?',
        a: 'Often yes, especially with click and collect. For very small or highly bespoke ranges, a fast catalogue with enquiries can work better, and I’ll tell you which your numbers support.',
      },
      {
        q: 'Can the website really sync with our till?',
        a: 'With most modern EPOS systems, yes. We confirm yours specifically at the start, because retrofitting this later is the expensive way to do it.',
      },
      {
        q: 'How do we compete with Amazon on price?',
        a: 'You don’t. You compete on knowing the product, getting it today, and being someone to talk to when it goes wrong. The site’s job is making all three obvious.',
      },
    ],
    related: ['hospitality', 'trades', 'marketing-agencies'],
  },
  {
    slug: 'marketing-agencies',
    name: 'Marketing Agencies',
    title: 'Web Design for Marketing Agencies',
    metaDescription:
      'Website design for marketing and creative agencies: case studies that win pitches, clear positioning and fast, credible builds. North West based web designer.',
    intro:
      'Your website is your most scrutinised piece of work. Prospects assume that whatever you did for yourself is the ceiling of what you’d do for them, which is why the cobbler’s-children problem is so expensive in this sector. The agencies winning good clients aren’t the ones with the most elaborate sites; they’re the ones whose positioning is unmistakable in the first ten seconds.',
    painPoints: [
      'The site is three years old and predates half your best work',
      'Positioning is “full service”, which reads as “no particular strength”',
      'Case studies are pretty pictures with no numbers or context',
      'It’s beautiful and takes seven seconds to load, which clients notice',
      'Client work is never published because approvals stall',
    ],
    opportunities: [
      {
        title: 'Narrow the positioning',
        text: 'Agencies that say who they’re for and what they’re best at win better-fit work at better margins. Full service is a description of capacity, not a reason to hire you.',
      },
      {
        title: 'Case studies with actual numbers',
        text: 'Brief, constraint, what you did, what changed. A case study with real figures does more in a pitch than a gallery of visuals ever will.',
      },
      {
        title: 'Practise what you sell',
        text: 'If you sell performance marketing, your own Core Web Vitals should be green. Prospects and competitors both check, and a slow agency site undercuts every claim on it.',
      },
      {
        title: 'Make publishing frictionless',
        text: 'Most agency sites go stale because updating them competes with billable work. A publishing flow that takes minutes is worth more than any design feature.',
      },
    ],
    workflow: {
      title: 'Example: a case study built to win pitches',
      steps: [
        'Client approval for publication is agreed at project kick-off, not chased afterwards',
        'The case study opens with the result, not the process',
        'Brief, constraints and approach follow, in enough detail to be credible',
        'Real metrics appear with context, so they’re persuasive rather than decorative',
        'Related services link directly, so a convinced reader can act immediately',
      ],
    },
    tools: [
      'A fast build with genuinely green Core Web Vitals',
      'A case study structure your team can populate in under an hour',
      'Structured data for your organisation, work and reviews',
      'Analytics that track enquiries and proposal requests, not just sessions',
    ],
    roi: 'One additional retained client typically pays for an agency site many times over. The less obvious return is pricing: sharper positioning and evidenced results make it far easier to hold your rates in a pitch.',
    faqs: [
      {
        q: 'Shouldn’t we build our own site?',
        a: 'Plenty of agencies should. The problem is that it always loses to client work, which is why so many agency sites are years out of date. Bringing someone in gives it a deadline and someone accountable.',
      },
      {
        q: 'How often should we refresh it?',
        a: 'Case studies continuously, the design every three to four years. Constant redesigns are usually a substitute for fixing unclear positioning.',
      },
      {
        q: 'Clients won’t let us publish their work.',
        a: 'Agree publication rights at kick-off, when goodwill is highest. Where that fails, anonymised case studies with real numbers still work; unnamed results beat no results.',
      },
    ],
    related: ['recruitment', 'professional-services', 'retail'],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    title: 'Web Design for Financial Services',
    metaDescription:
      'Website design for IFAs, mortgage brokers and wealth managers: FCA-aware, accessible builds that build trust and generate qualified enquiries. North West based.',
    intro:
      'Financial services websites carry an unusual double burden: they have to build trust with someone about to hand over their savings, and satisfy a compliance regime that governs how you describe what you do. Done badly, that produces a site made entirely of disclaimers. Done well, the compliance becomes part of the reassurance.',
    painPoints: [
      'The site is so hedged with caveats that nothing on it is persuasive',
      'Nothing distinguishes you from every other local firm',
      'No indication of who you work with or what a minimum engagement looks like',
      'Enquiry forms collect sensitive information without a clear privacy basis',
      'Accessibility is poor, though your clients skew older',
    ],
    opportunities: [
      {
        title: 'Say who you’re for',
        text: 'Retirees, business owners, professionals mid-career, each needs different reassurance. Naming your audience is the fastest way to sound like the obvious choice for them.',
      },
      {
        title: 'Compliance as reassurance',
        text: 'FCA registration, your firm reference number, professional indemnity cover and clear risk statements build trust when presented deliberately rather than buried in a footer.',
      },
      {
        title: 'Explain what actually happens',
        text: 'A clear description of the first meeting, what you’ll ask for and how you’re paid removes the main reason people delay picking up the phone.',
      },
      {
        title: 'Accessible, larger-type design',
        text: 'A WCAG 2.2 AA build with generous type serves an older client base directly, and is increasingly expected of regulated firms.',
      },
    ],
    workflow: {
      title: 'Example: turning a cautious visitor into a first meeting',
      steps: [
        'A visitor lands on a page written for their situation, such as approaching retirement',
        'It explains the decisions they face in plain English, without pitching',
        'Your fee structure and FCA details are stated openly on the same page',
        'A short form books an initial conversation, collecting only what’s needed to prepare',
        'A confirmation sets out what to bring and what will happen, reducing no-shows',
      ],
    },
    tools: [
      'An accessible build meeting WCAG 2.2 AA',
      'A secure enquiry form with a documented lawful basis and retention period',
      'Structured data for your firm, services and reviews',
      'Compliance sign-off built into the publishing flow rather than bolted on',
    ],
    roi: 'Given typical client lifetime values in advice, a single additional client usually covers the site comfortably. Clearer positioning also cuts time spent on initial meetings that were never going to fit.',
    faqs: [
      {
        q: 'Does the site need compliance sign-off?',
        a: 'Financial promotions do, and much of a public site counts. It’s built into the process: your compliance reviewer sees the copy before anything goes live, and the same applies to future changes.',
      },
      {
        q: 'Can we publish client testimonials?',
        a: 'With care, genuine, consented, no performance claims and no implication of guaranteed outcomes. Your compliance team should approve each one, and the site should make that straightforward.',
      },
      {
        q: 'Should we show our fees?',
        a: 'Structure, yes; exact figures often can’t be given honestly in advance. Explaining how you charge, and roughly what an engagement involves, removes the biggest barrier to a first call.',
      },
    ],
    related: ['accountants', 'solicitors', 'professional-services'],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    title: 'Web Design for Professional Services',
    metaDescription:
      'Website design for consultancies, surveyors, architects and professional firms: clear positioning, credible expertise and enquiries worth having. North West based.',
    intro:
      'Professional services firms sell judgement, and judgement is hard to photograph. That’s why so many firms in this sector end up with sites full of abstract imagery and sentences that could belong to anyone. The fix isn’t a better design; it’s being specific, about who you help, what you’ve solved, and what working with you actually involves.',
    painPoints: [
      'The copy could be lifted onto a competitor’s site without anyone noticing',
      'Expertise is asserted rather than demonstrated',
      'Enquiries arrive from businesses far too small to serve profitably',
      'Individual consultants have no presence, though clients buy them personally',
      'Nothing published since the site launched, so it looks dormant',
    ],
    opportunities: [
      {
        title: 'Be specific about who you serve',
        text: 'Naming your ideal client size and sector filters out the enquiries you decline anyway, and makes the right prospect feel the site was written for them.',
      },
      {
        title: 'Demonstrate, don’t assert',
        text: 'A page working through a real problem, with the reasoning shown, proves expertise in a way that a list of credentials never can.',
      },
      {
        title: 'Give consultants their own pages',
        text: 'Clients hire people. Individual profiles with genuine specialisms rank for name searches and give your team something worth sharing.',
      },
      {
        title: 'Set expectations early',
        text: 'Indicative engagement sizes and a clear description of how you work stop mismatched enquiries before they consume a partner’s afternoon.',
      },
    ],
    workflow: {
      title: 'Example: an enquiry that arrives already qualified',
      steps: [
        'A prospect finds a page addressing the specific problem they’re facing',
        'The page works through the issue honestly, showing how you think about it',
        'Indicative engagement sizes make clear whether they’re the right fit',
        'The enquiry form asks about their situation, sector and timescale',
        'It routes to the right partner with enough context to make the first call useful',
      ],
    },
    tools: [
      'A fast, accessible build with strong typography, since text is the product',
      'A publishing flow that makes updating content genuinely easy',
      'Structured data for your organisation, people and services',
      'Analytics tracking enquiry quality, not just volume',
    ],
    roi: 'In a sector where a single engagement can run to five figures, one better-fit client covers the site outright. The recurring gain is partner time protected from enquiries that were never going to convert.',
    faqs: [
      {
        q: 'Our work is confidential. How do we show it?',
        a: 'Anonymised case studies, sector plus problem plus outcome, work well. Clients care that you’ve solved something like their problem, not who else you solved it for.',
      },
      {
        q: 'Do we need to publish regularly?',
        a: 'Not constantly, but a site that hasn’t changed in three years reads as a firm that isn’t busy. A few substantial pieces a year is plenty if they’re genuinely good.',
      },
      {
        q: 'How do we stop unsuitable enquiries?',
        a: 'Say what a typical engagement involves and roughly what it costs. Most firms find both the volume and the frustration drop within weeks.',
      },
    ],
    related: ['accountants', 'solicitors', 'marketing-agencies'],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
