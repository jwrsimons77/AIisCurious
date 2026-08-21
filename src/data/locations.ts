export interface LocationFAQ {
  q: string;
  a: string;
}

export interface Location {
  slug: string;
  name: string;
  county: string;
  metaDescription: string;
  /** Unique local introduction, 2–4 sentences */
  intro: string;
  /** Typical businesses in the area */
  businesses: string[];
  /** Common website and visibility challenges */
  challenges: string[];
  /** Practical, locally relevant web design examples */
  webExamples: string[];
  faqs: LocationFAQ[];
  /** Slugs of nearby locations for internal linking */
  nearby: string[];
}

export const locations: Location[] = [
  // ── Greater Manchester ────────────────────────────────────────────────
  {
    slug: 'manchester',
    name: 'Manchester',
    county: 'Greater Manchester',
    metaDescription:
      'Web design in Manchester for small businesses. Fast, mobile-first websites that win enquiries, from the Northern Quarter to Didsbury. Free website review, no obligation.',
    intro:
      'Manchester is where Rainy Peaks is based, and it’s a city with no shortage of web designers. What’s harder to find is someone who’ll tell you honestly that your site doesn’t need rebuilding, it needs three fixes and better photographs. Most Manchester businesses aren’t venture-funded startups; they’re agencies, practices, workshops and shops that need a website to earn its keep. That’s what I build.',
    businesses: [
      'Creative and marketing agencies around the Northern Quarter and Ancoats',
      'Law and accountancy firms in Spinningfields and around Deansgate',
      'Recruitment consultancies serving the city’s tech and professional sectors',
      'Independent retailers, cafés and hospitality across the city centre and suburbs',
    ],
    challenges: [
      'Competing for attention against firms with far bigger marketing budgets',
      'Sites built years ago by someone who has since moved on',
      'Ranking in a city where every search term is contested',
      'High city-centre overheads making every wasted enquiry expensive',
    ],
    webExamples: [
      'An agency rebuilding its site around three case studies with real numbers, and winning bigger pitches with it',
      'A city-centre law firm publishing plain-English practice-area pages and doubling online enquiries',
      'A recruiter putting job listings into Google for Jobs and cutting job board spend',
      'An independent café group replacing PDF menus with fast, readable pages that Google can index',
    ],
    faqs: [
      {
        q: 'Do you meet in person in Manchester?',
        a: 'Yes, I’m Manchester based, so happy to meet at your office or a city-centre coffee shop. The initial 15-minute conversation is usually a call, but kick-off and design reviews often work best face to face.',
      },
      {
        q: 'How much does a website cost in Manchester?',
        a: 'A small business site is typically a low four-figure fixed price, more if there’s a shop or booking system attached. You get the full number from a written scope before anything starts.',
      },
    ],
    nearby: ['salford', 'trafford', 'stockport', 'bury', 'oldham'],
  },
  {
    slug: 'salford',
    name: 'Salford',
    county: 'Greater Manchester',
    metaDescription:
      'Web design in Salford for small businesses. Fast, mobile-first websites for firms from MediaCity to Eccles and Worsley. Free website review, no obligation.',
    intro:
      'Salford covers an unusual spread, from the media and tech businesses clustered at MediaCity to long-established trades, manufacturers and family firms in Eccles, Swinton and Walkden. What they share is proximity to Manchester and the need to look every bit as credible as a competitor with a city-centre postcode. A good website closes that gap entirely.',
    businesses: [
      'Media, production and digital businesses around MediaCity and Salford Quays',
      'Manufacturers and engineering firms along the Trafford Park and Eccles corridors',
      'Trades and construction businesses serving Salford and west Manchester',
      'Independent shops, gyms and services in Swinton, Worsley and Monton',
    ],
    challenges: [
      'Being overlooked in favour of firms with a Manchester city-centre address',
      'Ranking for Salford searches when Manchester results dominate',
      'Sites that look fine on a laptop and fall apart on a phone',
      'No clear way to show recent work to prospective customers',
    ],
    webExamples: [
      'A production company replacing a slow showreel homepage with a fast one that keeps the reel',
      'An Eccles engineering firm publishing capability data and receiving properly specified enquiries',
      'A Worsley trades business ranking for its services rather than only its own name',
      'A Monton salon taking bookings directly instead of paying commission on every one',
    ],
    faqs: [
      {
        q: 'Do you work with businesses at MediaCity?',
        a: 'Regularly. It’s a short journey, and the mix of production, tech and creative businesses there tends to need fast, visual sites that still load quickly on a phone.',
      },
      {
        q: 'Should our site target Salford or Manchester?',
        a: 'Usually both, honestly. Lead with what you do and where you actually are, then build a Manchester page if you genuinely serve the city. Pretending to be somewhere you aren’t rarely ends well.',
      },
    ],
    nearby: ['manchester', 'trafford', 'bolton', 'wigan', 'bury'],
  },
  {
    slug: 'trafford',
    name: 'Trafford',
    county: 'Greater Manchester',
    metaDescription:
      'Web design in Trafford for small businesses. Websites for firms across Sale, Urmston, Stretford and Trafford Park. Fast, accessible builds and free website reviews.',
    intro:
      'Trafford packs a lot of very different business into a small area: the industrial weight of Trafford Park, the professional and retail districts of Sale and Urmston, and a large population of well-off households who buy locally when they’re given a reason to. Websites here have to work for both B2B buyers and demanding local consumers.',
    businesses: [
      'Manufacturing, logistics and distribution across Trafford Park',
      'Professional services and consultancies in Sale and Altrincham’s fringes',
      'Independent retail, restaurants and personal services in Urmston and Stretford',
      'Trades and home improvement businesses serving affluent residential areas',
    ],
    challenges: [
      'Serving both trade buyers and consumers from a single website',
      'Standing out in an area where customers have plenty of local choice',
      'Old sites that predate mobile browsing entirely',
      'Enquiries arriving with no way of knowing which page produced them',
    ],
    webExamples: [
      'A Trafford Park manufacturer adding an RFQ form that reaches the estimator ready to price',
      'A Sale consultancy naming its ideal client size and halving unsuitable enquiries',
      'An Urmston restaurant moving bookings from a commission platform to its own site',
      'A home improvement firm publishing project photos with prices and winning better-fit work',
    ],
    faqs: [
      {
        q: 'We sell to both businesses and consumers. Can one site do both?',
        a: 'Yes, with a clear split near the top of the site so each audience gets its own path. Trying to speak to both in one message usually persuades neither.',
      },
      {
        q: 'Do you cover Sale, Urmston and Stretford?',
        a: 'All of Trafford, and it’s close enough that in-person meetings are straightforward rather than a favour.',
      },
    ],
    nearby: ['manchester', 'altrincham', 'salford', 'stockport', 'warrington'],
  },
  {
    slug: 'stockport',
    name: 'Stockport',
    county: 'Greater Manchester',
    metaDescription:
      'Web design in Stockport for small businesses. Fast, modern websites for firms across the town centre, Bramhall, Cheadle and Marple. Free website review.',
    intro:
      'Stockport has spent the last few years being rediscovered, with the town centre and Underbanks attracting exactly the sort of independent businesses that live or die on being findable. Add the established professional and trades businesses across Bramhall, Cheadle, Hazel Grove and Marple, and it’s one of the strongest small business markets in Greater Manchester.',
    businesses: [
      'Independent retail, food and creative businesses in the town centre and Underbanks',
      'Professional services and consultancies serving south Manchester and Cheshire',
      'Trades and home improvement firms working across the affluent suburbs',
      'Health, wellbeing and clinical practices in Bramhall, Cheadle and Marple',
    ],
    challenges: [
      'Competing with Manchester firms for the same south Manchester customers',
      'Getting found for suburb searches, not just the town name',
      'Booking and enquiry systems bolted on rather than designed in',
      'Sites that don’t reflect how much the business has grown',
    ],
    webExamples: [
      'An Underbanks independent adding click and collect and keeping stock in step with the shop',
      'A Bramhall clinic taking bookings directly and cutting no-shows with automatic reminders',
      'A Cheadle trades business ranking for each suburb it genuinely covers',
      'A Marple consultancy publishing indicative fees and stopping mismatched enquiries at source',
    ],
    faqs: [
      {
        q: 'Should we have separate pages for Bramhall, Cheadle and Marple?',
        a: 'For the suburbs you genuinely work in and can write honestly about, yes, they rank separately. Three good pages beat ten padded ones.',
      },
      {
        q: 'Do you visit Stockport businesses?',
        a: 'Yes, regularly. It’s a short trip from Manchester, so kick-off meetings and design reviews in person are easy to arrange.',
      },
    ],
    nearby: ['manchester', 'tameside', 'wilmslow', 'macclesfield', 'trafford'],
  },
  {
    slug: 'oldham',
    name: 'Oldham',
    county: 'Greater Manchester',
    metaDescription:
      'Web design in Oldham for small businesses. Practical, fast websites for trades, manufacturers, shops and services across Oldham, Chadderton and Royton.',
    intro:
      'Oldham businesses tend to be practical about marketing, and rightly sceptical of anyone selling a five-figure website to a firm that mainly needs the phone to ring. Most of the value here comes from unglamorous work: a site that loads in a second, a Google profile filled in properly, and honest pages for the jobs you actually want.',
    businesses: [
      'Trades, construction and home improvement firms across the borough',
      'Small manufacturers and engineering businesses with long local histories',
      'Independent retail and food businesses in Oldham, Chadderton and Royton',
      'Care, health and community services serving the local population',
    ],
    challenges: [
      'Marketing budgets that have to justify themselves quickly',
      'Ranking against Manchester firms advertising into the same postcodes',
      'Sites that were cheap to build and cost enquiries every week',
      'No easy way to keep photos and prices up to date',
    ],
    webExamples: [
      'A Chadderton trades business getting a one-second mobile site with a tap-to-call button',
      'An Oldham manufacturer publishing what it can actually make, and receiving usable enquiries',
      'A Royton shop replacing a Facebook-only presence with a site that ranks',
      'A care provider making its recruitment pages the busiest part of the site',
    ],
    faqs: [
      {
        q: 'We’re a small firm. Is a website really worth the money?',
        a: 'It has to pay for itself, which is why I’ll tell you if a few fixes and a proper Google profile would do the job instead of a rebuild. The free review exists precisely to answer this.',
      },
      {
        q: 'Can we start small and add to it later?',
        a: 'Yes, and for many Oldham businesses that’s the sensible route: a fast core site first, then a shop, booking system or extra pages once it’s earning.',
      },
    ],
    nearby: ['rochdale', 'tameside', 'manchester', 'bury', 'stockport'],
  },
  {
    slug: 'tameside',
    name: 'Tameside',
    county: 'Greater Manchester',
    metaDescription:
      'Web design in Tameside for small businesses. Fast websites for firms in Ashton-under-Lyne, Hyde, Denton, Stalybridge and Droylsden. Free website review.',
    intro:
      'Tameside is really nine towns, and customers think in those terms rather than the borough. A business in Ashton is competing for different searches from one in Hyde or Stalybridge, even though they’re minutes apart. Websites that acknowledge that outperform ones that address the borough as a single place.',
    businesses: [
      'Trades and construction firms working across Tameside and east Manchester',
      'Small manufacturers and engineering businesses in Ashton, Dukinfield and Hyde',
      'Independent shops, salons and food businesses across the nine towns',
      'Professional and financial services serving local families and firms',
    ],
    challenges: [
      'Customers searching by town, not by borough',
      'Being invisible outside your immediate area',
      'Websites that haven’t changed since before smartphones',
      'Relying on paid directory leads that get sold to competitors too',
    ],
    webExamples: [
      'An Ashton trades firm getting pages for the specific towns it serves',
      'A Hyde manufacturer replacing a brochure homepage with real capability information',
      'A Stalybridge salon taking bookings on its own site instead of a platform',
      'A Denton professional firm making its phone number the most obvious thing on the page',
    ],
    faqs: [
      {
        q: 'Should we target Tameside or the individual towns?',
        a: 'The towns, mainly. Almost nobody searches for a supplier in “Tameside”, they search for one in Ashton or Hyde. Cover the borough as a whole, but rank on the towns.',
      },
      {
        q: 'Is it worth leaving lead-generation directories?',
        a: 'Often, once your own site brings steady enquiries. The mistake is stopping the directories before the site has proved it can replace them.',
      },
    ],
    nearby: ['oldham', 'stockport', 'manchester', 'rochdale', 'bury'],
  },
  {
    slug: 'bolton',
    name: 'Bolton',
    county: 'Greater Manchester',
    metaDescription:
      'Web design in Bolton for small businesses. Fast, mobile-first websites for manufacturers, trades, professional services and shops across the borough.',
    intro:
      'Bolton has a strong base of established, family-run businesses, many of them second or third generation, and a website is often the first place a new customer meets a firm that’s traded locally for fifty years. Getting that impression right matters more here than any amount of design fashion.',
    businesses: [
      'Long-established manufacturers and engineering firms',
      'Trades, construction and home improvement businesses',
      'Professional services, accountants and solicitors serving the town',
      'Independent retail and hospitality in the town centre and villages',
    ],
    challenges: [
      'Decades of reputation invisible on a two-page website',
      'Competing with Manchester firms for the same regional work',
      'Younger customers who judge entirely on how the site looks on a phone',
      'Nobody in the business responsible for keeping the site current',
    ],
    webExamples: [
      'A family manufacturer turning fifty years of history into credibility rather than clutter',
      'A Bolton contractor publishing project case studies and getting onto tender lists',
      'An accountancy practice publishing fee ranges and filtering out price shoppers',
      'A town-centre retailer adding click and collect to bring people through the door',
    ],
    faqs: [
      {
        q: 'We’ve traded here for decades and never needed a website.',
        a: 'You probably still get most work by referral, and that won’t change. But referred customers look you up first, and what they find either confirms the recommendation or quietly undoes it.',
      },
      {
        q: 'Do you visit Bolton?',
        a: 'Yes, kick-off and design reviews in person are straightforward from Manchester.',
      },
    ],
    nearby: ['bury', 'wigan', 'salford', 'manchester', 'rochdale'],
  },
  {
    slug: 'bury',
    name: 'Bury',
    county: 'Greater Manchester',
    metaDescription:
      'Web design in Bury for small businesses. Websites for retailers, trades, professional services and food businesses across Bury, Ramsbottom and Prestwich.',
    intro:
      'Bury has two quite different business stories running at once: the market town and its famous market, and the independent food, retail and lifestyle scene that has grown up around Ramsbottom and Prestwich. Both depend heavily on people finding them at short notice, on a phone, usually while deciding where to spend an afternoon.',
    businesses: [
      'Independent retail and food businesses around the market and Ramsbottom',
      'Restaurants, bars and hospitality across Prestwich and Whitefield',
      'Trades and home improvement firms serving the borough',
      'Professional services and clinics serving north Manchester',
    ],
    challenges: [
      'Being found by visitors deciding where to go this weekend',
      'Menus and opening hours stuck in PDFs or only on Facebook',
      'Bookings arriving through platforms that take a cut of every one',
      'Photography that doesn’t reflect the current offer',
    ],
    webExamples: [
      'A Ramsbottom restaurant replacing a PDF menu with fast pages Google can index',
      'A market trader getting a simple site that ranks for what they actually sell',
      'A Prestwich clinic taking bookings directly and cutting no-shows with reminders',
      'A trades firm publishing recent local jobs with honest prices',
    ],
    faqs: [
      {
        q: 'We get most of our customers through Facebook and Instagram. Do we need a site?',
        a: 'Social brings people who already follow you. A site catches everyone searching for what you do, and you own it, which matters when a platform changes its rules.',
      },
      {
        q: 'Can you help move bookings away from commission platforms?',
        a: 'Yes, and it’s usually the fastest payback in hospitality. Keep the platforms for genuinely new customers, and give regulars an easy direct route.',
      },
    ],
    nearby: ['bolton', 'rochdale', 'manchester', 'salford', 'oldham'],
  },
  {
    slug: 'rochdale',
    name: 'Rochdale',
    county: 'Greater Manchester',
    metaDescription:
      'Web design in Rochdale for small businesses. Practical, fast websites for trades, manufacturers, shops and services across Rochdale, Heywood and Middleton.',
    intro:
      'Rochdale businesses generally want a website that works rather than one that wins awards, and that’s a perfectly good brief. The wins here are usually straightforward: load fast, say clearly what you do and where, make contact obvious, and get the Google profile right. Done properly that beats a far more expensive site.',
    businesses: [
      'Manufacturers and industrial businesses across the borough',
      'Trades and construction firms serving Rochdale, Heywood and Middleton',
      'Independent retail and food businesses in the town centres',
      'Care, health and community organisations',
    ],
    challenges: [
      'Budgets that need to produce a return quickly',
      'Ranking for the towns you serve rather than only your own name',
      'Sites that are slow on the mobile connections customers actually use',
      'Recruitment struggles that a website could be helping with',
    ],
    webExamples: [
      'A Heywood manufacturer publishing capability data and getting properly specified enquiries',
      'A trades firm ranking for job-type searches across all three towns',
      'A Middleton shop replacing a slow template with a one-second mobile site',
      'A care provider building a careers section that fills vacancies without agency fees',
    ],
    faqs: [
      {
        q: 'What’s the cheapest useful thing we could do?',
        a: 'Usually two things: make the existing site fast on mobile, and fill in the Google Business Profile properly. The free review tells you which of your fixes matter most, in order.',
      },
      {
        q: 'Can a website help us recruit?',
        a: 'Often more than it helps sell. A real careers page with current vacancies and honest content about the job frequently pays for the site on its own.',
      },
    ],
    nearby: ['oldham', 'bury', 'tameside', 'bolton', 'manchester'],
  },
  {
    slug: 'wigan',
    name: 'Wigan',
    county: 'Greater Manchester',
    metaDescription:
      'Web design in Wigan for small businesses. Fast websites for trades, manufacturers, logistics and independent retail across Wigan, Leigh and Standish.',
    intro:
      'Wigan sits between Manchester, Liverpool and Warrington, and plenty of local businesses realistically compete for work in all three. That makes the website’s job slightly harder than usual: it has to be convincingly local without looking too small for a customer in a bigger city comparing quotes.',
    businesses: [
      'Manufacturing, distribution and logistics businesses along the M6 corridor',
      'Trades and construction firms working across the North West',
      'Independent retail and hospitality in Wigan, Leigh and Standish',
      'Professional services and financial advisers serving local firms',
    ],
    challenges: [
      'Competing for work in Manchester and Liverpool from a Wigan base',
      'Ranking for both Wigan and Leigh, which behave as separate markets',
      'Websites that undersell the scale of the operation',
      'Enquiries that can’t be traced back to a page or campaign',
    ],
    webExamples: [
      'A logistics firm publishing capacity and coverage instead of a generic about page',
      'A trades business with honest pages for each town it genuinely serves',
      'A Standish retailer adding a fast online shop with click and collect',
      'A professional firm making enquiry sources traceable for the first time',
    ],
    faqs: [
      {
        q: 'Should we target Manchester and Liverpool too?',
        a: 'Eventually, but own Wigan and Leigh first. They’re far less contested, so they produce enquiries sooner and fund the push into the cities.',
      },
      {
        q: 'Do Wigan and Leigh need separate pages?',
        a: 'Usually yes. Customers search by town and the results genuinely differ, so one combined page tends to underperform in both.',
      },
    ],
    nearby: ['bolton', 'st-helens', 'warrington', 'salford', 'preston'],
  },

  // ── Merseyside ────────────────────────────────────────────────────────
  {
    slug: 'liverpool',
    name: 'Liverpool',
    county: 'Merseyside',
    metaDescription:
      'Web design in Liverpool for small businesses. Fast, mobile-first websites that win enquiries, from the Baltic Triangle to Allerton. Free website review.',
    intro:
      'Liverpool businesses tend to sell on relationship and reputation, and a stock-photo website flattens exactly the thing that makes them worth choosing. The sites that work here keep the personality, real names, real faces, real work, while being quietly excellent underneath: fast, accessible and easy to update.',
    businesses: [
      'Creative, digital and media businesses around the Baltic Triangle',
      'Professional services and law firms in the commercial district',
      'Independent retail, bars and restaurants across the city and suburbs',
      'Tourism, events and hospitality businesses serving a large visitor economy',
    ],
    challenges: [
      'A crowded market where every sector has strong local competition',
      'Visitors making decisions on a phone with patchy city-centre signal',
      'Sites that look good and load far too slowly',
      'Bookings and enquiries disappearing into third-party platforms',
    ],
    webExamples: [
      'A Baltic Triangle agency rebuilding around three case studies with real numbers',
      'A city-centre law firm publishing plain-English practice-area pages that convert',
      'A restaurant moving a third of its bookings off a commission platform',
      'An independent retailer adding click and collect and lifting average basket size',
    ],
    faqs: [
      {
        q: 'Do you actually work with Liverpool businesses?',
        a: 'Regularly. I visit for kick-off meetings, photography and design reviews; the build runs remotely, which keeps costs sensible without losing the personal side.',
      },
      {
        q: 'Can you rebuild our site without losing our rankings?',
        a: 'Yes, and it’s standard practice: URLs mapped and redirected, titles carried over or improved, and Search Console watched for a month after launch.',
      },
    ],
    nearby: ['wirral', 'sefton', 'knowsley', 'st-helens', 'warrington'],
  },
  {
    slug: 'wirral',
    name: 'Wirral',
    county: 'Merseyside',
    metaDescription:
      'Web design on the Wirral for small businesses. Websites for firms in Birkenhead, West Kirby, Heswall and Wallasey. Fast, accessible builds and free reviews.',
    intro:
      'The Wirral behaves like its own search market despite being minutes from Liverpool, and businesses that treat it as a Liverpool suburb usually rank for neither. It also spans a wide range of customers, from the affluent western villages to the industrial and commercial base around Birkenhead, and websites need to be honest about which they’re for.',
    businesses: [
      'Professional services and financial advisers in Heswall, West Kirby and Hoylake',
      'Marine, engineering and industrial businesses around Birkenhead',
      'Independent retail, hospitality and wellbeing across the peninsula',
      'Trades and home improvement firms serving affluent residential areas',
    ],
    challenges: [
      'Being lumped in with Liverpool searches and ranking for neither',
      'Serving very different customer types across one small peninsula',
      'Older websites that don’t reflect the quality of the work',
      'Seasonal visitor traffic that the site does nothing with',
    ],
    webExamples: [
      'A Heswall adviser publishing pages written for people approaching retirement',
      'A Birkenhead engineering firm publishing specifications buyers can qualify against',
      'A West Kirby shop adding a fast online catalogue with local collection',
      'A trades business ranking separately for the Wirral rather than competing in Liverpool',
    ],
    faqs: [
      {
        q: 'Should we target Wirral or Liverpool?',
        a: 'Wirral first, almost always. It’s a distinct and less contested market, and pages for it start producing enquiries far sooner than a fight for Liverpool terms.',
      },
      {
        q: 'Do you travel to the Wirral?',
        a: 'Yes, for kick-off and design reviews. Most of the build then runs over email and short calls.',
      },
    ],
    nearby: ['liverpool', 'chester', 'sefton', 'knowsley', 'st-helens'],
  },
  {
    slug: 'st-helens',
    name: 'St Helens',
    county: 'Merseyside',
    metaDescription:
      'Web design in St Helens for small businesses. Fast, practical websites for manufacturers, trades and independent businesses across the borough.',
    intro:
      'St Helens sits between Liverpool, Warrington and Wigan, which means local businesses regularly compete for work in all three. A well-built site here does two jobs at once: dominate the home market, where competition is lighter, and look credible to a buyer in a bigger town comparing three quotes.',
    businesses: [
      'Manufacturing and industrial businesses with long local roots',
      'Trades, construction and plant hire firms serving the North West',
      'Logistics and distribution businesses using the motorway network',
      'Independent retail and services in the town centre and villages',
    ],
    challenges: [
      'Competing against firms based in larger neighbouring towns',
      'Websites that make an established business look smaller than it is',
      'Relying on paid directory leads sold to competitors as well',
      'No case studies or project evidence to support a quote',
    ],
    webExamples: [
      'A manufacturer publishing capability data and receiving properly specified enquiries',
      'A plant hire firm listing its fleet clearly enough to be shortlisted',
      'A trades business ranking across St Helens, Widnes and Warrington',
      'A local retailer adding a simple shop with click and collect',
    ],
    faqs: [
      {
        q: 'Is it worth targeting Liverpool and Warrington as well?',
        a: 'Yes, once St Helens is working. Home turf is cheaper to win and funds the more competitive push outward.',
      },
      {
        q: 'How do we look bigger without overclaiming?',
        a: 'Evidence rather than adjectives: real project photos, values, timescales and accreditations. Buyers believe specifics and discount superlatives.',
      },
    ],
    nearby: ['wigan', 'warrington', 'knowsley', 'liverpool', 'sefton'],
  },
  {
    slug: 'knowsley',
    name: 'Knowsley',
    county: 'Merseyside',
    metaDescription:
      'Web design in Knowsley for small businesses. Websites for firms in Huyton, Kirkby, Prescot and Halewood. Fast, accessible builds with free website reviews.',
    intro:
      'Knowsley has a heavy concentration of manufacturing, logistics and distribution alongside the local service businesses that support it. Much of that trade is won on credibility and capacity rather than marketing polish, which means the website’s job is to prove you can do the work, quickly and without a phone call.',
    businesses: [
      'Manufacturing and logistics businesses across Kirkby and Knowsley Industrial Park',
      'Automotive and supply chain firms around Halewood',
      'Trades and facilities businesses serving commercial clients',
      'Independent retail and services in Huyton, Prescot and Kirkby',
    ],
    challenges: [
      'Winning B2B work from buyers who never make a phone call first',
      'Being overshadowed by Liverpool in local search results',
      'Websites with no specifications, capacity or accreditation information',
      'Recruitment pressure with no careers presence to help',
    ],
    webExamples: [
      'A Kirkby manufacturer adding an RFQ form that reaches estimating ready to price',
      'A logistics business publishing fleet, capacity and coverage clearly',
      'A Prescot service business ranking for its own town rather than Liverpool',
      'An employer building a careers section that reduces agency spend',
    ],
    faqs: [
      {
        q: 'Our customers are all long-standing. Does the website matter?',
        a: 'It matters most when procurement staff change or you need to replace lost volume. A credible site is the cheapest business development you can have ready in advance.',
      },
      {
        q: 'Should we publish our capabilities publicly?',
        a: 'Usually yes. Competitors already know roughly what you can do; buyers don’t, and withholding it costs far more in missed enquiries than it protects.',
      },
    ],
    nearby: ['liverpool', 'st-helens', 'sefton', 'wirral', 'warrington'],
  },
  {
    slug: 'sefton',
    name: 'Sefton',
    county: 'Merseyside',
    metaDescription:
      'Web design in Sefton for small businesses. Websites for firms in Southport, Formby, Crosby, Bootle and Maghull. Fast, accessible builds and free reviews.',
    intro:
      'Sefton stretches from the docks at Bootle to the resort economy of Southport, which is an unusually wide range for one borough. A Southport hotel and a Bootle industrial supplier need completely different websites, but both need to be found by people who are searching for their town rather than for Merseyside.',
    businesses: [
      'Hospitality, tourism and events businesses in Southport',
      'Professional services and clinics in Formby, Crosby and Maghull',
      'Industrial, port and logistics businesses around Bootle',
      'Independent retail across Southport’s Lord Street and the villages',
    ],
    challenges: [
      'Seasonal visitor demand the website does little to capture',
      'Very different customer types across a single borough',
      'Booking commission eating into hospitality margins',
      'Sites that only rank for the business name',
    ],
    webExamples: [
      'A Southport hotel moving direct bookings up and commission costs down',
      'A Formby clinic taking online bookings with automatic reminders',
      'A Crosby professional firm publishing pages written for its actual clients',
      'A Bootle supplier publishing stock and delivery information buyers can act on',
    ],
    faqs: [
      {
        q: 'Should we target Southport or Sefton?',
        a: 'Southport, and the other towns individually. Almost nobody searches for a supplier in “Sefton”, so build for the places customers actually name.',
      },
      {
        q: 'Can a website help with seasonal trade?',
        a: 'Yes, if it captures details rather than just taking this week’s booking. Even a simple mailing list turns a summer visitor into an autumn one.',
      },
    ],
    nearby: ['liverpool', 'knowsley', 'wirral', 'st-helens', 'preston'],
  },

  // ── Cheshire ──────────────────────────────────────────────────────────
  {
    slug: 'chester',
    name: 'Chester',
    county: 'Cheshire',
    metaDescription:
      'Web design in Chester for small businesses. Well-crafted, fast websites for professional firms, independent retail and hospitality across the city.',
    intro:
      'Chester businesses often compete on quality rather than price, and the website is where that claim is either supported or quietly contradicted. A tourist choosing where to eat, a client choosing a solicitor, a buyer choosing a supplier, all of them are forming a judgement about standards within a few seconds of the page loading.',
    businesses: [
      'Professional services, law and financial firms in and around the city centre',
      'Independent retail and galleries in the Rows and surrounding streets',
      'Hotels, restaurants and tourism businesses serving a large visitor economy',
      'Consultancies and B2B firms serving Cheshire and North Wales',
    ],
    challenges: [
      'Visitors deciding on a phone, quickly, often on poor signal',
      'Premium positioning undermined by a dated website',
      'Bookings routed through platforms taking a share of every one',
      'Serving both a local market and a cross-border North Wales one',
    ],
    webExamples: [
      'A city-centre restaurant replacing PDF menus with fast, indexable pages',
      'A law firm publishing plain-English guides that rank and reassure',
      'An independent gallery adding an online shop with proper photography',
      'A consultancy naming its ideal client and cutting unsuitable enquiries',
    ],
    faqs: [
      {
        q: 'We serve North Wales as well as Chester. How should the site handle that?',
        a: 'With honest pages for the areas you genuinely cover. Cross-border search behaves differently, so it’s worth being explicit rather than assuming people will infer it.',
      },
      {
        q: 'Do you travel to Chester?',
        a: 'Yes, for kick-off and design reviews. The rest of the build runs remotely to keep the cost sensible.',
      },
    ],
    nearby: ['wirral', 'warrington', 'northwich', 'crewe', 'liverpool'],
  },
  {
    slug: 'warrington',
    name: 'Warrington',
    county: 'Cheshire',
    metaDescription:
      'Web design in Warrington for small businesses. Fast, mobile-first websites for trades, logistics, manufacturing and professional services. Free website review.',
    intro:
      'Warrington’s position between Manchester and Liverpool means local firms compete in three markets at once, and win a lot of work on responsiveness. The website that suits that reality is straightforward: quick to load, obvious to contact, and specific enough about capability that a buyer can shortlist you without ringing first.',
    businesses: [
      'Logistics, distribution and warehousing along the M6 and M62',
      'Manufacturing and engineering businesses across the borough',
      'Professional services and consultancies serving both cities',
      'Trades and commercial services covering a wide catchment',
    ],
    challenges: [
      'Competing against firms based in Manchester and Liverpool',
      'Covering a wide area without producing thin location pages',
      'Websites that undersell the size and capability of the business',
      'Enquiries with no traceable source, so marketing spend is guesswork',
    ],
    webExamples: [
      'A distributor publishing coverage, capacity and lead times buyers can act on',
      'A manufacturer adding an RFQ flow that reaches estimating ready to price',
      'A professional firm building a small set of honest location pages that rank',
      'A trades business making its phone number the most obvious element on mobile',
    ],
    faqs: [
      {
        q: 'How many location pages should we have?',
        a: 'One for each area you genuinely serve and can write honestly about, usually four to eight. Thirty near-identical pages stopped working years ago and now do harm.',
      },
      {
        q: 'How quickly can a new site be live?',
        a: 'Typically three to six weeks from kick-off. The usual variable is how fast content and photos come back from your side.',
      },
    ],
    nearby: ['manchester', 'st-helens', 'wigan', 'northwich', 'liverpool'],
  },
  {
    slug: 'macclesfield',
    name: 'Macclesfield',
    county: 'Cheshire',
    metaDescription:
      'Web design in Macclesfield for small businesses. Fast, well-crafted websites for professional firms, trades, retail and specialist businesses across the area.',
    intro:
      'Macclesfield mixes a strong science and pharmaceutical presence with a substantial base of independent professional firms, trades and retailers serving an affluent local population. Much of the work here is referral-led, which means the website’s main job is confirming a recommendation rather than generating cold enquiries.',
    businesses: [
      'Science, pharmaceutical and technical businesses and their suppliers',
      'Professional services and consultancies serving east Cheshire',
      'Trades and home improvement firms working across affluent villages',
      'Independent retail, hospitality and wellbeing in the town and Bollington',
    ],
    challenges: [
      'Referred customers checking you out before making contact',
      'Ranking across several small towns rather than one big one',
      'Technical businesses whose sites explain nothing technical',
      'Sites that undersell high-quality, high-value work',
    ],
    webExamples: [
      'A technical supplier publishing specifications rather than corporate language',
      'A trades firm with pages for each village it genuinely covers',
      'A consultancy publishing indicative engagement sizes to filter enquiries',
      'A town-centre retailer adding a fast shop with local collection',
    ],
    faqs: [
      {
        q: 'We work mainly on referrals. Do we need a good website?',
        a: 'Arguably more than firms who don’t. Almost every referred customer looks you up first, and that visit either confirms the recommendation or costs you the job.',
      },
      {
        q: 'Should we have pages for the surrounding villages?',
        a: 'For the ones you genuinely work in, yes. Competition per village is low here, so a well-written page can start producing enquiries within months.',
      },
    ],
    nearby: ['stockport', 'wilmslow', 'crewe', 'northwich', 'manchester'],
  },
  {
    slug: 'crewe',
    name: 'Crewe',
    county: 'Cheshire',
    metaDescription:
      'Web design in Crewe for small businesses. Practical, fast websites for manufacturers, engineering firms, trades and independent businesses across south Cheshire.',
    intro:
      'Crewe’s engineering and rail heritage still shapes the local business base, and much of the trade is B2B, technical and won on capability rather than marketing. That suits a very particular kind of website: specification-led, quick to load, and built so a buyer can qualify you without picking up the phone.',
    businesses: [
      'Engineering, rail and manufacturing businesses across south Cheshire',
      'Logistics and distribution using the town’s transport links',
      'Trades and construction firms serving Crewe, Nantwich and Sandbach',
      'Independent retail and services in the town centre and surrounding towns',
    ],
    challenges: [
      'Technical capability that appears nowhere on the website',
      'Ranking across Crewe, Nantwich and Sandbach as separate markets',
      'Sites built cheaply that now cost enquiries every week',
      'Recruitment difficulties with no careers presence to help',
    ],
    webExamples: [
      'An engineering firm publishing tolerances, materials and lead times',
      'A distributor listing coverage and capacity so buyers can shortlist quickly',
      'A trades business with genuine pages for Crewe, Nantwich and Sandbach',
      'A manufacturer using a careers page to cut recruitment agency costs',
    ],
    faqs: [
      {
        q: 'Our buyers already know us. Is a website worth it?',
        a: 'It earns its keep when buyers change jobs, when you need new volume, or when someone is checking three suppliers. Being credible online is cheap insurance against all three.',
      },
      {
        q: 'Do Nantwich and Sandbach need their own pages?',
        a: 'If you genuinely serve them, yes. They rank separately, and competition in each is light enough that a good page works quickly.',
      },
    ],
    nearby: ['northwich', 'macclesfield', 'chester', 'wilmslow', 'warrington'],
  },
  {
    slug: 'wilmslow',
    name: 'Wilmslow',
    county: 'Cheshire',
    metaDescription:
      'Web design in Wilmslow for small businesses. Well-crafted websites for professional firms, clinics, trades and retail across Wilmslow, Alderley Edge and Knutsford.',
    intro:
      'Wilmslow, Alderley Edge and Knutsford form one of the most affluent markets in the North West, and customers here have plenty of choice. That raises the bar on presentation considerably: a website that looks cheap doesn’t just fail to impress, it actively suggests the work will be cheap too.',
    businesses: [
      'Professional services, financial advisers and consultancies',
      'Private clinics, dental and cosmetic practices',
      'High-end trades, interiors and home improvement firms',
      'Independent boutiques, restaurants and wellbeing businesses',
    ],
    challenges: [
      'A discerning local market with high expectations of presentation',
      'Premium pricing that a dated website quietly undermines',
      'Competing with Manchester firms marketing into the same postcodes',
      'Bookings and enquiries handled through generic third-party tools',
    ],
    webExamples: [
      'A private clinic taking bookings directly with proper before-and-after galleries',
      'An interiors firm publishing project photography that justifies its pricing',
      'A financial adviser publishing pages written for a specific client stage',
      'A boutique adding a fast online shop that matches the in-store experience',
    ],
    faqs: [
      {
        q: 'Does design quality really affect what we can charge?',
        a: 'In this market, noticeably. Customers use the site as a proxy for standards, so a dated one makes premium pricing a harder conversation than it needs to be.',
      },
      {
        q: 'Do you cover Alderley Edge and Knutsford?',
        a: 'Yes, and they’re worth separate pages if you genuinely serve them. They behave as distinct search markets despite being close together.',
      },
    ],
    nearby: ['macclesfield', 'stockport', 'altrincham', 'manchester', 'northwich'],
  },
  {
    slug: 'altrincham',
    name: 'Altrincham',
    county: 'Greater Manchester',
    metaDescription:
      'Web design in Altrincham for small businesses. Fast, well-crafted websites for independent retail, hospitality, clinics and professional firms across the town.',
    intro:
      'Altrincham’s revival, led by the market and the independents around it, has produced one of the most competitive small-business scenes in Greater Manchester. Standing out here isn’t about being louder; it’s about being findable at the moment someone is deciding where to spend an afternoon or which local firm to call.',
    businesses: [
      'Independent food, drink and retail businesses around the market quarter',
      'Professional services and consultancies serving south Manchester',
      'Clinics, wellbeing and personal services',
      'Trades and home improvement firms working across affluent suburbs',
    ],
    challenges: [
      'A crowded independent scene where everyone is competing for attention',
      'Customers deciding on a phone, minutes before they choose',
      'Bookings and covers lost to commission platforms',
      'Sites that look fine but load too slowly to hold attention',
    ],
    webExamples: [
      'A market-quarter independent replacing a PDF menu with fast, indexable pages',
      'A clinic taking bookings directly and cutting no-shows with reminders',
      'A retailer adding click and collect that brings people into the shop',
      'A professional firm publishing pages built around its ideal client',
    ],
    faqs: [
      {
        q: 'We’re mostly on Instagram. Do we need a website?',
        a: 'Social reaches people who already follow you. A site catches everyone searching for what you do, and you own it, which matters whenever a platform changes the rules.',
      },
      {
        q: 'Do you visit Altrincham?',
        a: 'Yes, it’s straightforward from Manchester, so in-person kick-off and design reviews are easy to arrange.',
      },
    ],
    nearby: ['trafford', 'manchester', 'wilmslow', 'stockport', 'warrington'],
  },
  {
    slug: 'northwich',
    name: 'Northwich',
    county: 'Cheshire',
    metaDescription:
      'Web design in Northwich for small businesses. Fast, practical websites for manufacturers, trades, professional firms and independent retail across mid Cheshire.',
    intro:
      'Northwich sits in the middle of Cheshire with a business base that runs from chemical and manufacturing operations to the independent shops and professional firms serving the surrounding towns and villages. Competition per search term is lower here than in the cities, which makes a well-built site unusually good value.',
    businesses: [
      'Chemical, manufacturing and industrial businesses across mid Cheshire',
      'Trades and construction firms serving Northwich, Winsford and the villages',
      'Professional services and clinics serving the local population',
      'Independent retail and hospitality in the town centre',
    ],
    challenges: [
      'Covering a spread of small towns and villages rather than one centre',
      'Sites that were built cheaply and now hold the business back',
      'Technical businesses whose websites say nothing technical',
      'Little evidence of recent work for prospective customers to judge',
    ],
    webExamples: [
      'A manufacturer publishing capability data buyers can qualify against',
      'A trades firm with real pages for Northwich, Winsford and the villages',
      'A clinic adding straightforward online booking with reminders',
      'A retailer moving from a Facebook-only presence to a site that ranks',
    ],
    faqs: [
      {
        q: 'Is local SEO worth it in a smaller town?',
        a: 'Often more so. Competition per term is much lower than in Manchester or Liverpool, so a well-built page can start producing enquiries in months rather than a year.',
      },
      {
        q: 'How many village pages should we have?',
        a: 'Only for the places you genuinely work and can write honestly about, typically three to eight. Beyond that they go thin and stop earning.',
      },
    ],
    nearby: ['warrington', 'chester', 'crewe', 'macclesfield', 'wilmslow'],
  },

  // ── Lancashire ────────────────────────────────────────────────────────
  {
    slug: 'preston',
    name: 'Preston',
    county: 'Lancashire',
    metaDescription:
      'Web design in Preston for small businesses. Fast, mobile-first websites for professional firms, manufacturers, trades and retail across central Lancashire.',
    intro:
      'Preston is the commercial centre of Lancashire, with a business base broad enough to include professional practices, manufacturers, a large student population and everything that serves it. It’s competitive by Lancashire standards but far less contested than Manchester, which makes proper local SEO genuinely achievable here.',
    businesses: [
      'Professional services, accountants and solicitors serving central Lancashire',
      'Manufacturing and engineering businesses across the area',
      'Retail, hospitality and services around the city centre and university',
      'Trades and construction firms covering Preston and the surrounding towns',
    ],
    challenges: [
      'Serving both a city and a wide rural catchment',
      'Websites that haven’t kept pace with how the business has grown',
      'Ranking for services rather than only the business name',
      'Enquiries that can’t be attributed to any particular page',
    ],
    webExamples: [
      'A professional practice publishing fee ranges and filtering out price shoppers',
      'A manufacturer adding an RFQ flow that produces properly specified enquiries',
      'A trades business ranking across Preston, Chorley and Leyland',
      'A retailer adding a fast online shop with click and collect',
    ],
    faqs: [
      {
        q: 'Do you work with businesses in Lancashire?',
        a: 'Yes, regularly. Most of the build runs remotely with visits for kick-off and design reviews, which keeps travel out of your budget.',
      },
      {
        q: 'Is ranking easier here than in Manchester?',
        a: 'Generally yes. Competition for most Preston terms is lighter, so a well-built site with proper local SEO tends to show results sooner.',
      },
    ],
    nearby: ['blackburn', 'blackpool', 'wigan', 'bolton', 'lancaster'],
  },
  {
    slug: 'blackburn',
    name: 'Blackburn',
    county: 'Lancashire',
    metaDescription:
      'Web design in Blackburn for small businesses. Practical, fast websites for manufacturers, trades, wholesalers and independent businesses across the borough.',
    intro:
      'Blackburn has a deep manufacturing and textile heritage that has evolved into a diverse base of engineering, wholesale and distribution businesses, alongside a strong independent retail and food scene. A lot of local trade is B2B and price-sensitive, so websites here need to justify themselves quickly.',
    businesses: [
      'Manufacturers, engineering and textile businesses',
      'Wholesalers and distributors serving the North West',
      'Trades and construction firms across Blackburn and Darwen',
      'Independent retail, food and services in the town centre',
    ],
    challenges: [
      'Marketing budgets that must show a return quickly',
      'Websites that make an established firm look smaller than it is',
      'Trade customers who need specifications, not brand language',
      'Ranking across Blackburn and Darwen as separate markets',
    ],
    webExamples: [
      'A manufacturer publishing capability data instead of a generic about page',
      'A wholesaler adding trade account pricing and quick reordering',
      'A trades business ranking for both Blackburn and Darwen',
      'An independent retailer adding a fast shop with local collection',
    ],
    faqs: [
      {
        q: 'What’s the quickest win for our site?',
        a: 'Usually mobile speed and a properly completed Google Business Profile. The free review tells you which fixes matter most for your site, in order.',
      },
      {
        q: 'Can we sell to trade customers online?',
        a: 'Yes. Account-based pricing, minimum orders and quick reordering are all standard, though the platform choice matters more than for a consumer shop.',
      },
    ],
    nearby: ['burnley', 'preston', 'bolton', 'bury', 'blackpool'],
  },
  {
    slug: 'blackpool',
    name: 'Blackpool',
    county: 'Lancashire',
    metaDescription:
      'Web design in Blackpool for small businesses. Fast websites for hotels, guest houses, attractions, trades and independent businesses along the Fylde coast.',
    intro:
      'Blackpool’s visitor economy means an unusual number of local businesses depend on being chosen by someone who is standing outside on a phone, deciding right now. Speed, clear pricing and direct booking matter more here than almost anywhere else in the region, and every booking taken through a platform gives away margin you can’t get back.',
    businesses: [
      'Hotels, guest houses and self-catering accommodation',
      'Attractions, entertainment and events businesses',
      'Independent retail, food and drink along the coast',
      'Trades and services supporting a large hospitality sector',
    ],
    challenges: [
      'Heavy dependence on booking platforms and their commission',
      'Sharp seasonal swings the website does little to smooth',
      'Slow, image-heavy sites on visitors’ mobile connections',
      'Photography that doesn’t reflect recent refurbishment',
    ],
    webExamples: [
      'A guest house moving a third of bookings direct and keeping the commission',
      'An attraction publishing prices and opening times Google can read directly',
      'A restaurant replacing PDF menus with fast, indexable pages',
      'A hotel capturing email addresses to fill quiet weeks out of season',
    ],
    faqs: [
      {
        q: 'Should we stop using booking platforms?',
        a: 'No, they bring genuinely new customers. The aim is to stop paying commission on guests who already knew your name and would have booked direct if it were easy.',
      },
      {
        q: 'How much difference does site speed make here?',
        a: 'A lot. Many of your visitors are on congested mobile networks in the town centre, and a site that takes six seconds simply loses them to the next result.',
      },
    ],
    nearby: ['preston', 'lancaster', 'blackburn', 'wigan', 'bolton'],
  },
  {
    slug: 'burnley',
    name: 'Burnley',
    county: 'Lancashire',
    metaDescription:
      'Web design in Burnley for small businesses. Practical, fast websites for manufacturers, aerospace suppliers, trades and independent businesses in east Lancashire.',
    intro:
      'Burnley has quietly become one of the region’s strongest advanced manufacturing centres, particularly in aerospace and precision engineering, alongside the trades and independents serving east Lancashire. Much of that work is won on certification and capability, which a website can communicate far better than most local firms currently do.',
    businesses: [
      'Aerospace and precision engineering businesses and their suppliers',
      'Manufacturers and industrial firms across east Lancashire',
      'Trades and construction businesses serving Burnley, Nelson and Colne',
      'Independent retail, food and services in the town centre',
    ],
    challenges: [
      'Certifications and capabilities invisible on the website',
      'Competing for national contracts from a small-town base',
      'Recruitment pressure in a tight engineering labour market',
      'Sites that undersell genuinely high-specification work',
    ],
    webExamples: [
      'An aerospace supplier publishing AS9100 scope and capability data clearly',
      'A precision engineer adding a drawing-upload RFQ flow',
      'A manufacturer building a careers section that cuts agency spend',
      'A trades firm ranking across Burnley, Nelson and Colne',
    ],
    faqs: [
      {
        q: 'Will publishing our capabilities help with national contracts?',
        a: 'Usually yes. Buyers shortlist from what they can verify quickly, and a clear capability and certification section is often what gets you onto the list at all.',
      },
      {
        q: 'Can a website really help us recruit engineers?',
        a: 'It frequently pays for itself that way. A real careers page with current vacancies and honest content about the work reaches people agencies charge you thousands to find.',
      },
    ],
    nearby: ['blackburn', 'preston', 'bury', 'rochdale', 'bolton'],
  },
  {
    slug: 'lancaster',
    name: 'Lancaster',
    county: 'Lancashire',
    metaDescription:
      'Web design in Lancaster for small businesses. Fast, well-crafted websites for independents, professional firms and tourism businesses across Lancaster and Morecambe.',
    intro:
      'Lancaster combines a historic city centre, two universities and a substantial tourism trade around Morecambe Bay and the edge of the Lakes. That mix produces a lot of small, independent, quality-led businesses whose customers are frequently visitors searching on a phone with no prior knowledge of who’s good.',
    businesses: [
      'Independent retail, food and drink in the city centre',
      'Tourism, accommodation and hospitality across Lancaster and Morecambe',
      'Professional services and consultancies serving north Lancashire',
      'Creative, education-adjacent and knowledge businesses',
    ],
    challenges: [
      'Visitor customers deciding quickly with no local knowledge',
      'Distance from the region’s bigger commercial centres',
      'Booking commission taking a share of every stay',
      'Seasonal trade with quiet periods the site could help fill',
    ],
    webExamples: [
      'A guest house taking direct bookings and keeping the commission',
      'A city-centre independent adding an online shop with national delivery',
      'A professional firm publishing pages written for its actual clients',
      'A tourism business building a mailing list to fill out-of-season weeks',
    ],
    faqs: [
      {
        q: 'Do you work this far north?',
        a: 'Yes. Most of the build runs remotely with a visit for kick-off, so distance doesn’t change the price or the process.',
      },
      {
        q: 'How do we compete with the Lake District for visitors?',
        a: 'By being specific and findable. People search for what they want to do rather than for a region, so pages built around those searches beat general destination copy.',
      },
    ],
    nearby: ['preston', 'blackpool', 'blackburn', 'burnley', 'wigan'],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export const locationsByCounty = locations.reduce<Record<string, Location[]>>((acc, loc) => {
  (acc[loc.county] ??= []).push(loc);
  return acc;
}, {});
