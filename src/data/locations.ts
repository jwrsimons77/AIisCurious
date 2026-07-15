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
  /** Common operational challenges */
  challenges: string[];
  /** Practical, locally relevant AI examples */
  aiExamples: string[];
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
      'Independent AI consultant in Manchester. Practical AI advice, training and implementation for small businesses, from the Northern Quarter to Spinningfields. Free AI Opportunity Report.',
    intro:
      'Manchester is where AIisCurious is based, and it’s a city that has always been quick to adopt what works, from the first railways to one of the UK’s largest tech scenes outside London. But away from the venture-funded startups, most Manchester businesses are agencies, practices, workshops and shops with the same question: what would AI actually do for us? That’s the question I answer, in plain English, over a brew.',
    businesses: [
      'Creative and marketing agencies around the Northern Quarter and Ancoats',
      'Law and accountancy firms in Spinningfields and around Deansgate',
      'Recruitment consultancies serving the city’s tech and professional sectors',
      'Independent retailers, cafés and hospitality across the city centre and suburbs',
    ],
    challenges: [
      'Competing for clients against bigger firms with bigger back-office teams',
      'Skilled staff spending hours on proposals, reports and admin instead of billable work',
      'High city-centre overheads making every hour of wasted time expensive',
      'Fast-moving clients who expect same-day responses',
    ],
    aiExamples: [
      'An agency using AI to turn client briefing calls into structured proposals in minutes, not days',
      'A small law firm summarising case documents and drafting first-pass letters with a properly configured, confidential setup',
      'A recruiter screening CVs against a role brief and drafting personalised outreach in a fraction of the time',
      'An independent café chain answering booking enquiries automatically outside opening hours',
    ],
    faqs: [
      {
        q: 'Do you meet in person in Manchester?',
        a: 'Yes, I’m Manchester based, so happy to meet at your office or a city-centre coffee shop. The initial 15-minute conversation is usually a call, but implementation and workshops often work best face to face.',
      },
      {
        q: 'We’re a small Manchester agency, not a tech company. Is AI relevant to us?',
        a: 'Agencies are honestly among the biggest beneficiaries. Research, first drafts, proposals, reporting, the unbillable work that eats agency margins is exactly what AI handles well. Your ideas stay yours; the drudge work gets faster.',
      },
      {
        q: 'How much does an AI consultant in Manchester cost?',
        a: 'The first step, the AI Opportunity Review, is free. Paid work is fixed-price and agreed up front, scoped so a 5–50 person business can afford it. No day rates, no open-ended engagements.',
      },
    ],
    nearby: ['salford', 'trafford', 'stockport', 'bury', 'oldham'],
  },
  {
    slug: 'salford',
    name: 'Salford',
    county: 'Greater Manchester',
    metaDescription:
      'Practical AI consulting for Salford businesses, from MediaCityUK production companies to Eccles trades. Independent, jargon-free advice and hands-on implementation.',
    intro:
      'Salford runs from the glass studios of MediaCityUK to family firms in Eccles, Swinton and Walkden that have traded for generations. That mix means AI questions here come in two flavours: media and digital businesses asking how to use AI without losing their craft, and established local firms asking where on earth to start. Both deserve straight answers rather than hype.',
    businesses: [
      'TV, video and audio production companies around MediaCityUK and Salford Quays',
      'Digital and design studios spilling over from Manchester city centre',
      'Construction firms and skilled trades serving Greater Manchester',
      'Long-established family businesses in Eccles, Swinton and Walkden',
    ],
    challenges: [
      'Production companies juggling transcription, logging and edit admin on tight turnarounds',
      'Trades losing evenings to quoting, invoicing and chasing paperwork',
      'Small teams where the owner is also the sales, admin and finance department',
      'Competing with city-centre rates while keeping Salford overheads',
    ],
    aiExamples: [
      'A production company auto-transcribing rushes and generating edit logs, saving hours per project',
      'A joinery firm turning site-visit voice notes into written quotes before the van leaves the street',
      'A design studio using AI for first-draft copy and research while keeping creative judgement human',
      'A building contractor summarising tender documents to decide quickly which jobs are worth bidding',
    ],
    faqs: [
      {
        q: 'We’re at MediaCityUK, do you understand media workflows?',
        a: 'Yes. Transcription, logging, subtitling, versioning and rights-adjacent admin are some of the clearest AI wins anywhere, and there are well-trodden tools for each. We’ll also cover what shouldn’t go near public AI tools, like unbroadcast material under embargo.',
      },
      {
        q: 'I’m a sole trader in Salford. Is this worth it for just me?',
        a: 'Often more than for anyone else, when you’re the only person in the business, every hour of admin is an hour you can’t earn. Most sole traders I work with start saving time in the first week with tools costing under £25 a month.',
      },
      {
        q: 'Can you run a workshop at our Salford office?',
        a: 'Yes, the AI Essentials Workshop is delivered at your premises anywhere in Greater Manchester, built around your team’s real work.',
      },
    ],
    nearby: ['manchester', 'trafford', 'bolton', 'wigan', 'bury'],
  },
  {
    slug: 'trafford',
    name: 'Trafford',
    county: 'Greater Manchester',
    metaDescription:
      'AI consulting for Trafford businesses, manufacturers and distributors in Trafford Park, and firms across Stretford, Urmston and Sale. Practical advice, free AI Opportunity Report.',
    intro:
      'Trafford is home to Trafford Park, one of Europe’s largest industrial estates, alongside busy town centres in Stretford, Urmston and Sale. The borough’s businesses tend to be practical operations, manufacturing, distribution, wholesale, engineering, where AI’s value isn’t chatbots, it’s shaving hours off quoting, scheduling, goods-in paperwork and customer updates.',
    businesses: [
      'Manufacturers and engineering firms across Trafford Park',
      'Distribution, wholesale and logistics operations near the motorway network',
      'Professional services and clinics in Sale and Urmston',
      'Food producers and packaging businesses supplying the North West',
    ],
    challenges: [
      'Quotes built by hand from spreadsheets, taking days when customers want hours',
      'Goods-in, delivery notes and PODs re-keyed into systems manually',
      'Customer service teams answering the same “where’s my order?” question all day',
      'Experienced staff nearing retirement with processes stored in their heads',
    ],
    aiExamples: [
      'A Trafford Park manufacturer generating consistent first-draft quotes from enquiry emails',
      'A wholesaler extracting order details from emailed purchase orders straight into their system',
      'A distributor answering delivery-status queries automatically from tracking data',
      'An engineering firm turning a retiring foreman’s know-how into a searchable knowledge base',
    ],
    faqs: [
      {
        q: 'Our work is physical, machines, pallets, deliveries. Where does AI fit?',
        a: 'Around the edges of the physical work, where the paperwork lives. Nobody’s suggesting AI drives the forklift. But every pallet has a delivery note, every job has a quote, and every customer wants an update, that’s the layer AI genuinely improves.',
      },
      {
        q: 'We run on Sage and old spreadsheets. Do we need new systems first?',
        a: 'No. Most automation and AI work connects to what you already have. Replacing core systems is expensive and disruptive; my job is usually to make your existing setup work harder.',
      },
      {
        q: 'Can you visit us in Trafford Park?',
        a: 'Yes, I’m 20 minutes away. Seeing how work actually flows through a site beats any questionnaire, so site visits are standard for implementation projects.',
      },
    ],
    nearby: ['manchester', 'altrincham', 'salford', 'stockport', 'warrington'],
  },
  {
    slug: 'stockport',
    name: 'Stockport',
    county: 'Greater Manchester',
    metaDescription:
      'Independent AI consultant for Stockport businesses, from Underbanks independents to engineering firms and professional practices. Plain-English advice and implementation.',
    intro:
      'Stockport is having a moment, the Underbanks revival, new employers moving in, and a wave of independent businesses choosing SK postcodes over city-centre rents. Behind that sits a solid base of engineering firms, accountants, solicitors and family businesses. For most of them, the AI question isn’t ambition, it’s time: which of the fifty tasks on the owner’s plate can be taken off it?',
    businesses: [
      'Independent shops, studios and food businesses around the Underbanks and Market Place',
      'Accountancy and law practices serving south Manchester and Cheshire',
      'Precision engineering and manufacturing firms with decades of history',
      'Digital and creative businesses relocating from Manchester for space and value',
    ],
    challenges: [
      'Owner-managers doing admin at 9pm because the working day went on customers',
      'Practices buried in client emails, chasing documents and deadline reminders',
      'Engineering firms quoting complex jobs from experience that lives in one person’s head',
      'Independents juggling social media, bookings and stock with no marketing team',
    ],
    aiExamples: [
      'An accountancy practice drafting client letters and summarising HMRC correspondence securely',
      'An engineering firm building a quoting assistant trained on ten years of past jobs',
      'An Underbanks independent generating a month of social posts from one photo session',
      'A solicitor’s office triaging enquiry emails so urgent matters surface first',
    ],
    faqs: [
      {
        q: 'Are you local to Stockport?',
        a: 'I’m Manchester based, about 20 minutes away, and work with Stockport businesses regularly. In-person workshops and site visits are no problem.',
      },
      {
        q: 'Our accountancy practice handles sensitive client data. Is AI safe for us?',
        a: 'It can be, with the right setup, business-tier tools, training-data opt-outs, and clear rules about what never gets pasted where. That security review is part of every implementation, and it’s covered honestly in your free report.',
      },
      {
        q: 'What does working together typically look like for a Stockport business?',
        a: 'It starts with the free 15-minute call and your AI Opportunity Report. Most Stockport clients then pick one or two quick wins, often quoting or email handling, and expand from there once the time savings show up.',
      },
    ],
    nearby: ['manchester', 'tameside', 'wilmslow', 'macclesfield', 'trafford'],
  },
  {
    slug: 'oldham',
    name: 'Oldham',
    county: 'Greater Manchester',
    metaDescription:
      'Practical AI help for Oldham businesses, manufacturers, distributors, trades and family firms. Independent advice, no jargon, free AI Opportunity Report.',
    intro:
      'Oldham built its name on textiles, and while the mills have changed hands the borough is still a place where things get made, moved and fixed, advanced materials, food production, distribution, and a deep bench of skilled trades. These are businesses that don’t buy hype. The AI conversation in Oldham starts with a fair question: prove it saves us time or money, or don’t bother.',
    businesses: [
      'Manufacturers in textiles, materials and engineering across the borough',
      'Food producers and wholesalers serving Greater Manchester',
      'Distribution and haulage firms near the M60 and M62',
      'Family-run trades and construction businesses',
    ],
    challenges: [
      'Thin margins where wasted admin hours translate directly into lost profit',
      'Orders, specs and delivery paperwork handled by phone, paper and memory',
      'Long-serving staff retiring and taking process knowledge with them',
      'No spare headcount for “projects”, improvements must fit around real work',
    ],
    aiExamples: [
      'A manufacturer converting emailed enquiries into structured quote requests automatically',
      'A food wholesaler taking repeat orders by email overnight without a human touching them',
      'A haulage firm summarising POD paperwork and flagging exceptions instead of filing everything by hand',
      'A building firm producing job sheets and RAMS first drafts from a voice note',
    ],
    faqs: [
      {
        q: 'We’ve seen tech fads come and go. Why is this different?',
        a: 'Healthy scepticism is fair. The difference with current AI is that it handles ordinary language, emails, quotes, paperwork, which is where small-business time actually goes. And you can test it for under £25 before committing to anything.',
      },
      {
        q: 'Our team isn’t office-based. Does AI still help?',
        a: 'Yes, often more. Voice notes from site turned into quotes, job sheets or emails mean the paperwork happens in the van, not at the kitchen table at 9pm.',
      },
      {
        q: 'Do you work with Oldham businesses directly?',
        a: 'Yes, regularly, I’m based in Manchester, 25 minutes away. The free AI Opportunity Review works the same wherever you are: one call, then a written report specific to your business.',
      },
    ],
    nearby: ['rochdale', 'tameside', 'manchester', 'bury', 'stockport'],
  },
  {
    slug: 'tameside',
    name: 'Tameside',
    county: 'Greater Manchester',
    metaDescription:
      'AI consulting for Tameside businesses in Ashton-under-Lyne, Hyde, Stalybridge and beyond. Practical automation and AI advice for manufacturers, trades and local firms.',
    intro:
      'Tameside’s towns, Ashton-under-Lyne, Hyde, Stalybridge, Denton and their neighbours, are full of the kind of businesses that keep Greater Manchester running: engineering shops, food producers, trades, hauliers and high-street firms. Most don’t need an “AI strategy”. They need three or four repetitive jobs taken off someone’s plate, done safely, at a sensible price.',
    businesses: [
      'Precision engineering and fabrication firms in Hyde and Denton',
      'Food production and packaging businesses',
      'Trades, plumbers, electricians and small construction firms',
      'High-street professional services in Ashton-under-Lyne and Stalybridge',
    ],
    challenges: [
      'Quoting and job admin done evenings and weekends by the owner',
      'Phone-heavy businesses missing calls (and work) while on jobs',
      'Paper-based processes nobody has time to modernise',
      'Recruitment struggles making time savings more valuable than headcount',
    ],
    aiExamples: [
      'A fabrication firm drafting quotes from drawings and emailed specs in a consistent format',
      'An electrician using an AI-drafted response to every missed-call enquiry within minutes',
      'A food producer auto-generating allergen and spec sheets from recipe data',
      'A Stalybridge accountant summarising client records ahead of year-end meetings',
    ],
    faqs: [
      {
        q: 'How quickly would a Tameside business see results?',
        a: 'Quick wins, voice-note quoting, email drafting, enquiry handling, usually land within the first fortnight. The free report tells you which of these actually apply to your business before you spend anything.',
      },
      {
        q: 'We can’t afford big consultancy fees. What does this cost?',
        a: 'The review is free, and paid projects are fixed-price and scoped for small businesses. Most first projects cost less than a month of one employee’s wages and save time permanently.',
      },
      {
        q: 'Do you cover all of Tameside?',
        a: 'Yes, Ashton, Hyde, Stalybridge, Denton, Droylsden, Mossley and everywhere between. I’m based in Manchester so site visits are easy to arrange.',
      },
    ],
    nearby: ['oldham', 'stockport', 'manchester', 'rochdale', 'bury'],
  },
  {
    slug: 'bolton',
    name: 'Bolton',
    county: 'Greater Manchester',
    metaDescription:
      'Independent AI consultant for Bolton businesses, manufacturers, logistics firms, trades and professional practices. Honest advice, practical implementation, free report.',
    intro:
      'Bolton is one of the biggest towns in the country, with a business base to match: manufacturers that survived every downturn since the mills, logistics operators on the M61 corridor, a strong professional quarter, and thousands of trades and independents. Businesses here tend to be direct, they want to know what AI costs, what it saves, and who’s accountable when it goes wrong. Good questions, all three.',
    businesses: [
      'Manufacturing and engineering firms with deep local roots',
      'Logistics and distribution businesses along the M61',
      'Accountants, solicitors and financial advisers in the town centre',
      'Construction firms and skilled trades across the borough',
    ],
    challenges: [
      'Long-established processes that work, but eat far more hours than they should',
      'Customer enquiries arriving by phone, email and Facebook with no single system',
      'Tender and compliance paperwork consuming days per bid',
      'Owners wanting to grow without adding office headcount',
    ],
    aiExamples: [
      'A Bolton manufacturer answering technical product questions with an assistant trained on their own catalogue',
      'A logistics firm turning emailed booking requests into system entries automatically',
      'A solicitor’s practice producing first-draft client care letters in their house style',
      'A roofing firm converting photos and voice notes from site into written quotes the same day',
    ],
    faqs: [
      {
        q: 'Who’s accountable if AI gets something wrong?',
        a: 'You are, which is exactly why every setup I build keeps a human in the loop for anything customer-facing or financial. AI drafts; your team approves. That principle is non-negotiable in my implementations.',
      },
      {
        q: 'Is Bolton too far for in-person work?',
        a: 'Not at all, it’s half an hour from my base in Manchester. Workshops, site visits and implementation days in Bolton are all standard.',
      },
      {
        q: 'What’s the most common first project for Bolton businesses?',
        a: 'Quoting and enquiry handling, by some distance. They’re high-volume, repetitive, and the time savings are visible within days, which builds the confidence to do more.',
      },
    ],
    nearby: ['bury', 'wigan', 'salford', 'manchester', 'rochdale'],
  },
  {
    slug: 'bury',
    name: 'Bury',
    county: 'Greater Manchester',
    metaDescription:
      'Practical AI advice for Bury businesses, food producers, market traders, professional services and trades. Independent consultant, plain English, free AI Opportunity Report.',
    intro:
      'Bury punches above its weight, a market famous across the North, a strong food industry around it, and a borough full of family firms in Ramsbottom, Radcliffe, Prestwich and Whitefield. Many are second- or third-generation businesses where everyone already works flat out. The point of AI here isn’t transformation, it’s breathing room: fewer evenings on paperwork, faster responses to customers, less re-typing.',
    businesses: [
      'Food producers and wholesalers built around Bury’s market heritage',
      'Independent retail and hospitality in Ramsbottom and Prestwich',
      'Accountancy, legal and property firms serving the borough',
      'Manufacturing and trades businesses in Radcliffe and beyond',
    ],
    challenges: [
      'Seasonal peaks (markets, Christmas, events) that swamp small teams',
      'Wholesale orders arriving by phone, text and email in every possible format',
      'Family businesses where nobody has time to evaluate new tools',
      'Marketing done in stolen moments between real work',
    ],
    aiExamples: [
      'A food wholesaler standardising messy incoming orders into pick lists automatically',
      'A Ramsbottom restaurant answering booking and menu questions out of hours',
      'A property firm drafting listing descriptions and tenant correspondence in minutes',
      'A family manufacturer summarising supplier price changes across hundreds of emails',
    ],
    faqs: [
      {
        q: 'We’re a family business, will AI change how we feel to customers?',
        a: 'Only if you let it, and you shouldn’t. AI works best behind the scenes: drafting, sorting, summarising. The voice your customers hear should stay yours, I’ll show you how to keep it that way, including teaching tools to write like you.',
      },
      {
        q: 'How do we find time to even start?',
        a: 'That’s exactly what the process is designed around: one 15-minute call, then a report you can read in ten minutes. If you go ahead, I do the setup work, your team’s involvement is measured in hours, not days.',
      },
      {
        q: 'Do you work with businesses in Ramsbottom and Prestwich too?',
        a: 'Yes, the whole borough, from Bury town centre to Tottington. Distance is never the issue; most support happens by call and screen-share anyway, with site visits where they add value.',
      },
    ],
    nearby: ['bolton', 'rochdale', 'manchester', 'salford', 'oldham'],
  },
  {
    slug: 'rochdale',
    name: 'Rochdale',
    county: 'Greater Manchester',
    metaDescription:
      'AI consulting for Rochdale businesses, manufacturers, logistics firms on Kingsway, trades and local services. Practical, honest, fixed-price help. Free AI report.',
    intro:
      'Rochdale gave the world the co-operative movement, practical people organising to get a fair deal. That spirit suits AI adoption well, because the businesses that win with AI aren’t the flashiest, they’re the ones that methodically remove wasted effort. From Kingsway Business Park logistics to town-centre firms and valley manufacturers, Rochdale businesses have plenty of wasted effort worth removing.',
    businesses: [
      'Distribution and logistics operations at Kingsway Business Park',
      'Textile, flooring and materials manufacturers in the valleys',
      'Engineering and fabrication firms',
      'Local professional services, trades and retailers',
    ],
    challenges: [
      'High-volume, low-margin operations where admin costs bite hard',
      'Warehouse and transport paperwork processed by hand',
      'Quoting complex manufactured products from tribal knowledge',
      'Little time or budget for experimentation that might not pay off',
    ],
    aiExamples: [
      'A Kingsway logistics firm auto-processing booking confirmations and PODs',
      'A flooring manufacturer answering distributor stock and spec queries instantly',
      'A fabricator drafting quotes from emailed drawings with consistent margins',
      'A local services firm summarising and prioritising the day’s enquiries each morning',
    ],
    faqs: [
      {
        q: 'How do we know AI will pay for itself?',
        a: 'You estimate before you spend: the free report includes realistic time-savings figures for your specific tasks. If the numbers don’t stack up, the report says so, recommending AI where it doesn’t fit helps nobody, least of all me.',
      },
      {
        q: 'Our data is in old systems. Is that a problem?',
        a: 'Rarely. If your system can export a spreadsheet or send an email, it can usually feed an automation. The review will map exactly what’s possible with what you have.',
      },
      {
        q: 'Can you train our office team in Rochdale?',
        a: 'Yes, the half-day AI Essentials Workshop runs at your premises, using your team’s actual work as the exercises. Rochdale is an easy trip from Manchester.',
      },
    ],
    nearby: ['oldham', 'bury', 'tameside', 'bolton', 'manchester'],
  },
  {
    slug: 'wigan',
    name: 'Wigan',
    county: 'Greater Manchester',
    metaDescription:
      'Practical AI help for Wigan businesses, food manufacturers, logistics, warehousing and trades. Independent AI consultant covering Wigan and Leigh. Free AI report.',
    intro:
      'Wigan sits at the crossroads of the North West, M6 one way, M61 the other, which is why food manufacturing, warehousing and distribution anchor its economy, alongside a big base of trades and family firms across Wigan and Leigh. These are operational businesses. The AI that matters here is unglamorous and effective: paperwork that writes itself, orders that process themselves, customers who get answers straight away.',
    businesses: [
      'Food manufacturers and processors with national customers',
      'Warehousing, haulage and distribution firms near the motorway network',
      'Engineering and industrial services businesses',
      'Trades and construction firms across Wigan and Leigh',
    ],
    challenges: [
      'Supermarket and national customers demanding fast, accurate paperwork',
      'Transport offices juggling bookings by phone and email all day',
      'Compliance documentation (audits, specs, H&S) consuming office hours',
      'Recruitment difficulties putting pressure on existing staff',
    ],
    aiExamples: [
      'A food manufacturer generating customer spec sheets and audit documents from a master data set',
      'A haulier turning emailed booking requests into planned jobs automatically',
      'An industrial services firm producing RAMS and method-statement first drafts in minutes',
      'A Leigh trades business answering every enquiry within five minutes, even mid-job',
    ],
    faqs: [
      {
        q: 'We supply supermarkets, accuracy is everything. Can we trust AI output?',
        a: 'You should trust it exactly as far as you’d trust a new starter: check everything at first. AI drafts against your master data, then a human verifies. Errors typically drop compared with manual re-keying, because re-typing is where most mistakes come from.',
      },
      {
        q: 'Is AI worth it for a transport office of three people?',
        a: 'Three-person offices often see the biggest relative gains, if AI handles booking admin and status updates, that can be equivalent to adding a person without adding a salary.',
      },
      {
        q: 'Do you cover Leigh as well as Wigan?',
        a: 'Yes, the whole borough, Wigan, Leigh, Atherton, Standish and everywhere between.',
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
      'Independent AI consultant for Liverpool businesses, from Baltic Triangle creatives to city-centre professionals, hospitality and maritime firms. Free AI Opportunity Report.',
    intro:
      'Liverpool’s economy is wonderfully varied: creative and digital studios in the Baltic Triangle, professional firms around the commercial district, one of the UK’s busiest visitor economies, and a maritime and logistics sector that still moves the world through the port. What these businesses share is pace and personality, and AI, used well, protects both by clearing the admin that slows everything down.',
    businesses: [
      'Creative, digital and games studios in the Baltic Triangle',
      'Law, accountancy and shipping firms in the commercial district',
      'Hotels, restaurants, bars and visitor attractions across the city',
      'Maritime, freight and logistics businesses connected to the port',
    ],
    challenges: [
      'Hospitality teams handling floods of bookings, reviews and enquiries',
      'Professional firms drowning in documents while clients expect instant responses',
      'Freight businesses re-keying shipment data between systems and portals',
      'Creative studios spending unbillable hours on proposals and reporting',
    ],
    aiExamples: [
      'A Baltic Triangle studio automating research, first-draft copy and post-project case studies',
      'A city-centre law firm summarising bundles and drafting standard correspondence securely',
      'A hotel group responding to every review and enquiry in its own voice, around the clock',
      'A freight forwarder extracting shipment details from emails straight into their system',
    ],
    faqs: [
      {
        q: 'You’re Manchester based, do you actually cover Liverpool?',
        a: 'Yes, properly. Liverpool is 45 minutes away and I’m there regularly. Workshops and implementation happen on site; day-to-day support works by call and screen-share just like it does for Manchester clients.',
      },
      {
        q: 'Our hospitality business is seasonal. Can AI flex with that?',
        a: 'That’s one of its best features, AI tools don’t need recruiting in June and letting go in November. Enquiry handling, review responses and rota admin scale up and down with demand at the same monthly cost.',
      },
      {
        q: 'Is there support after setup for Liverpool businesses?',
        a: 'Yes, the Ongoing AI Support service works identically across the North West: monthly calls, email support between them, and updates when something that affects you changes.',
      },
    ],
    nearby: ['wirral', 'sefton', 'knowsley', 'st-helens', 'warrington'],
  },
  {
    slug: 'wirral',
    name: 'Wirral',
    county: 'Merseyside',
    metaDescription:
      'AI consulting for Wirral businesses, from Birkenhead industry to Heswall and West Kirby professional services. Practical advice, training and implementation.',
    intro:
      'The Wirral packs remarkable variety into one peninsula: shipbuilding and advanced manufacturing heritage around Birkenhead and Cammell Laird, professional and financial services in Heswall and West Kirby, visitor businesses from New Brighton to Hoylake, and hundreds of independents in between. AI adoption here follows the same pattern, different businesses, same goal of getting hours back.',
    businesses: [
      'Manufacturing, marine and engineering firms around Birkenhead',
      'Financial advisers, solicitors and accountants in Heswall, West Kirby and Bebington',
      'Hospitality and leisure businesses along the coast',
      'Health, care and clinic businesses across the peninsula',
    ],
    challenges: [
      'Professional practices managing heavy client correspondence with small teams',
      'Engineering firms quoting from experience that isn’t written down anywhere',
      'Seasonal coastal businesses stretched thin in summer',
      'Care and clinic providers buried in compliance documentation',
    ],
    aiExamples: [
      'A Heswall financial adviser drafting suitability letters and meeting summaries in-house style',
      'A Birkenhead engineering firm capturing senior estimators’ knowledge into a quoting assistant',
      'A Hoylake restaurant handling bookings and dietary queries automatically at peak times',
      'A care provider generating first-draft care plans and audit paperwork for human review',
    ],
    faqs: [
      {
        q: 'Financial services is heavily regulated. Can we use AI at all?',
        a: 'Yes, carefully. AI for drafting and summarising, with an adviser reviewing everything, is increasingly standard, and business-tier tools with data controls make it defensible. What you must not do is paste client data into free consumer tools, and that line is exactly what a proper setup draws.',
      },
      {
        q: 'Do you come out to the Wirral?',
        a: 'Yes, about an hour from Manchester and a regular trip. Reviews are done by call; workshops and implementation happen at your premises.',
      },
      {
        q: 'What do Wirral businesses usually start with?',
        a: 'Professional practices start with document drafting and meeting summaries; hospitality starts with enquiry handling; engineering starts with quoting. The free report identifies which applies to you and in what order.',
      },
    ],
    nearby: ['liverpool', 'chester', 'sefton', 'knowsley', 'st-helens'],
  },
  {
    slug: 'st-helens',
    name: 'St Helens',
    county: 'Merseyside',
    metaDescription:
      'Practical AI advice for St Helens businesses, manufacturers, logistics firms and trades. Independent consultant, plain English, fixed prices, free AI report.',
    intro:
      'St Helens made glass for the world, and manufacturing is still in the town’s blood, alongside a fast-growing logistics sector positioned neatly between Liverpool and Manchester. Businesses here run lean, which means the case for AI is straightforward: if a tool can’t demonstrably save hours or win work, it doesn’t belong. That’s a standard I’m happy to be held to.',
    businesses: [
      'Glass, materials and industrial manufacturers',
      'Warehousing and distribution firms along the M62 corridor',
      'Engineering and industrial-services businesses',
      'Construction firms and trades serving the region',
    ],
    challenges: [
      'Quoting industrial work accurately without tying up senior staff',
      'Order and delivery paperwork processed manually at volume',
      'Compliance and quality documentation consuming office days',
      'Difficulty recruiting office staff, putting pressure on small teams',
    ],
    aiExamples: [
      'A manufacturer answering technical spec queries from an assistant trained on its own product data',
      'A distribution firm auto-confirming bookings and sending proactive delivery updates',
      'An industrial services company drafting quality and H&S documents from templates plus job details',
      'A trades firm sending polished quotes from site photos and a voice note',
    ],
    faqs: [
      {
        q: 'What does “AI” actually mean for a manufacturer like us?',
        a: 'In practice: paperwork that drafts itself, enquiries answered from your own data, and knowledge captured from experienced staff. Not robots, your machines and operators carry on exactly as they are. The gains are in the office.',
      },
      {
        q: 'How disruptive is implementation?',
        a: 'Minimal by design. Everything is built and tested alongside your current process, and you switch over only when it’s proven. No big-bang changes, no downtime.',
      },
      {
        q: 'Do you cover the wider borough?',
        a: 'Yes, St Helens, Haydock, Newton-le-Willows, Rainford and everywhere between. It’s an easy reach from Manchester along the M62.',
      },
    ],
    nearby: ['wigan', 'warrington', 'knowsley', 'liverpool', 'sefton'],
  },
  {
    slug: 'knowsley',
    name: 'Knowsley',
    county: 'Merseyside',
    metaDescription:
      'AI consulting for Knowsley businesses, manufacturers and logistics operators around Knowsley Industrial Park, Huyton, Kirkby and Prescot. Free AI Opportunity Report.',
    intro:
      'Knowsley is one of the North West’s industrial engines, Knowsley Industrial Park alone hosts hundreds of manufacturing and distribution businesses, with automotive supply chains, food production and logistics well represented across Kirkby, Huyton and Prescot. In businesses like these, small per-order time savings multiply across thousands of orders. That’s where AI and automation earn their keep.',
    businesses: [
      'Manufacturers and processors on Knowsley Industrial Park',
      'Automotive supply-chain and component businesses',
      'Food production and packaging operations',
      'Distribution, fulfilment and transport firms',
    ],
    challenges: [
      'High order volumes with manual touchpoints at every step',
      'Customer schedules and forecasts arriving in a dozen different formats',
      'Quality and traceability paperwork demanded by major customers',
      'Office teams stretched across phones, emails and portals all day',
    ],
    aiExamples: [
      'A component supplier reading customer schedules automatically into production planning',
      'A food producer generating certificates of analysis and spec documents from batch data',
      'A fulfilment operation answering “where’s my order?” automatically from live tracking',
      'A manufacturer summarising supplier communications and flagging risk items daily',
    ],
    faqs: [
      {
        q: 'Our big customers dictate our systems. Where’s the room for AI?',
        a: 'In the gap between their systems and yours, the re-keying, reformatting and chasing your team does to feed those portals. That translation layer is repetitive, rule-based and ideal for automation with AI handling the messy formats.',
      },
      {
        q: 'Can this work alongside our ERP?',
        a: 'Yes, the approach is to feed and read your existing systems, not replace them. Most builds connect via exports, email or APIs your ERP already supports.',
      },
      {
        q: 'What’s the first step for a Knowsley business?',
        a: 'The free 15-minute call. For operational businesses I’ll usually ask about volumes, orders per day, documents per order, because that’s where the savings math gets compelling quickly.',
      },
    ],
    nearby: ['liverpool', 'st-helens', 'sefton', 'wirral', 'warrington'],
  },
  {
    slug: 'sefton',
    name: 'Sefton',
    county: 'Merseyside',
    metaDescription:
      'Practical AI help for Sefton businesses, Southport hospitality and tourism, Bootle offices, and firms across Crosby and Formby. Independent advice, free AI report.',
    intro:
      'Sefton stretches from Bootle’s docks and office quarter up the coast through Crosby and Formby to Southport, one of the North’s classic resort towns. That geography shapes its businesses: visitor economy and hospitality in the north, maritime and back-office operations in the south, and prosperous villages full of professional services between. Different businesses, one common gain from AI: faster responses and lighter admin.',
    businesses: [
      'Hotels, restaurants, cafés and attractions in and around Southport',
      'Maritime, freight and office-based businesses in Bootle',
      'Professional services and clinics in Crosby, Formby and Maghull',
      'Events, weddings and leisure businesses along the coast',
    ],
    challenges: [
      'Seasonal demand swings that small hospitality teams struggle to staff',
      'Enquiries arriving at all hours from booking platforms, email and social media',
      'Professional practices with heavy correspondence and small support teams',
      'Event businesses juggling dozens of supplier and client threads at once',
    ],
    aiExamples: [
      'A Southport hotel answering availability and event enquiries instantly, day and night',
      'A wedding venue drafting personalised proposals from enquiry details in minutes',
      'A Crosby accountancy practice summarising client records ahead of every meeting',
      'A Bootle freight office extracting shipment details from emails into its systems',
    ],
    faqs: [
      {
        q: 'Our Southport business lives and dies by summer season. When should we set AI up?',
        a: 'Off-season, ideally, set up and test when it’s quiet so everything is proven before the rush. Several hospitality clients describe their AI enquiry handling as “an extra member of staff who works nights, weekends and bank holidays”.',
      },
      {
        q: 'We get review bombs and complaints too. Can AI help there?',
        a: 'Yes, drafting measured, on-brand responses to reviews is something AI does surprisingly well, with you approving before anything posts. Faster, calmer responses protect ratings.',
      },
      {
        q: 'Do you travel to Southport?',
        a: 'Yes, reviews happen by call, and workshops or setup visits anywhere in Sefton are straightforward to arrange.',
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
      'Independent AI consultant for Chester businesses, law firms, financial services, tourism and independents. Practical AI advice and implementation. Free AI report.',
    intro:
      'Chester blends a historic visitor economy with a serious professional and financial services sector, from the law firms around the city centre to the major employers at Chester Business Park. For the city’s smaller businesses, AI offers a way to deliver big-firm responsiveness with boutique headcount: faster drafting, instant enquiry handling, and admin that mostly does itself.',
    businesses: [
      'Law firms, accountants and wealth managers in and around the city',
      'Financial services businesses near Chester Business Park',
      'Hotels, restaurants, tour operators and attractions serving year-round visitors',
      'Independent retailers within the Rows and beyond',
    ],
    challenges: [
      'Professional firms balancing client confidentiality with pressure to modernise',
      'Visitor businesses handling international enquiries across time zones',
      'Boutique firms competing with national brands’ response times',
      'Independents managing e-commerce alongside physical shops',
    ],
    aiExamples: [
      'A Chester law firm summarising documents and drafting standard letters within a secure, opted-out setup',
      'A tour operator answering enquiries in multiple languages automatically',
      'A wealth management boutique producing meeting summaries and follow-ups the same hour',
      'A Rows retailer writing product descriptions and web copy at scale',
    ],
    faqs: [
      {
        q: 'Client confidentiality is everything for our firm. How does AI square with that?',
        a: 'Through setup, not abstinence. Business-grade tools can be configured so your data isn’t used for training and is retained on your terms; paired with clear staff rules about what goes where, firms adopt AI defensibly. That configuration is precisely what the implementation service does.',
      },
      {
        q: 'Do you work in Chester regularly?',
        a: 'Yes, Chester and West Cheshire are firmly inside my patch. Around an hour from Manchester, easy for workshops and on-site work.',
      },
      {
        q: 'What should a Chester visitor business automate first?',
        a: 'Enquiry response, almost always. Visitor businesses lose bookings to slow replies more than to anything else, and out-of-hours enquiry handling is one of the fastest paybacks in AI.',
      },
    ],
    nearby: ['wirral', 'warrington', 'northwich', 'crewe', 'liverpool'],
  },
  {
    slug: 'warrington',
    name: 'Warrington',
    county: 'Cheshire',
    metaDescription:
      'AI consulting for Warrington businesses, logistics, engineering, nuclear supply chain and professional services. Practical automation and AI advice. Free AI report.',
    intro:
      'Sat between Manchester and Liverpool at the heart of the motorway network, Warrington is a natural home for logistics and distribution, and, around Birchwood, one of the UK’s biggest clusters of nuclear and engineering consultancy. Both ends of that spectrum share a need: precise, timely paperwork at volume. That’s AI’s home turf.',
    businesses: [
      'Distribution and logistics operations serving the whole country',
      'Nuclear, energy and engineering consultancies around Birchwood',
      'Professional services firms in the town centre and Stockton Heath',
      'Manufacturers and wholesalers across the borough',
    ],
    challenges: [
      'Transport offices processing bookings, PODs and status queries manually',
      'Consultancies producing large volumes of structured reports and bids',
      'Competition for skilled staff with two big cities half an hour away',
      'Documentation standards that make drafting slow and checking slower',
    ],
    aiExamples: [
      'A logistics firm auto-processing booking emails and answering delivery queries from live data',
      'A Birchwood consultancy drafting bid responses from a library of past submissions',
      'An engineering firm summarising technical standards changes relevant to live projects',
      'A professional practice automating meeting notes, actions and follow-up letters',
    ],
    faqs: [
      {
        q: 'Our consultancy handles sensitive project data. Can AI be used safely?',
        a: 'Yes, with a properly governed setup, enterprise tools, no-training data agreements, and clear rules on classification. Some material should never touch external AI, and part of my job is drawing that boundary clearly so everything else can speed up.',
      },
      {
        q: 'Are you close enough to Warrington for on-site work?',
        a: 'Very, 25 minutes down the M62. Warrington is one of my most regular patches, and site visits or workshops are easy to arrange.',
      },
      {
        q: 'What results do Warrington logistics businesses typically see?',
        a: 'The common pattern: booking admin cut by half or more, customer status calls dropping sharply once proactive updates go out, and office teams handling more volume without extra heads.',
      },
    ],
    nearby: ['manchester', 'st-helens', 'wigan', 'northwich', 'liverpool'],
  },
  {
    slug: 'macclesfield',
    name: 'Macclesfield',
    county: 'Cheshire',
    metaDescription:
      'Practical AI advice for Macclesfield businesses, life sciences suppliers, professional services and independents. Independent AI consultant, free AI Opportunity Report.',
    intro:
      'Macclesfield grew up on silk and now anchors one of Europe’s significant life-sciences corridors, with AstraZeneca’s campus shaping a whole ecosystem of suppliers, consultancies and skilled professionals. Add a lively independent scene in the town centre and villages, and you get a distinctive mix: businesses that are comfortable with rigour, and ready for tools that respect it.',
    businesses: [
      'Life-sciences suppliers, labs and specialist consultancies',
      'Professional services firms serving east Cheshire',
      'Independent retailers, cafés and studios in the town centre',
      'Engineering and precision manufacturing businesses',
    ],
    challenges: [
      'Suppliers to pharma facing documentation standards few small firms are staffed for',
      'Specialist consultants spending evenings writing up what they said in meetings',
      'Independents competing with chains on presence but not headcount',
      'Quoting specialist work that requires senior time for every estimate',
    ],
    aiExamples: [
      'A lab supplier generating quality documentation and tender responses from master content',
      'A consultancy turning recorded meetings into structured reports for review',
      'A precision engineer drafting quotes from technical drawings and past-job data',
      'A town-centre independent running its newsletter and social presence in an hour a week',
    ],
    faqs: [
      {
        q: 'We supply regulated industries. Doesn’t that rule AI out?',
        a: 'It rules out sloppy AI. Regulated supply chains actually reward well-documented, consistent processes, which AI-assisted drafting with human sign-off improves. Every implementation includes documenting exactly what AI does and doesn’t touch, which auditors tend to like.',
      },
      {
        q: 'Is Macclesfield within your normal travel area?',
        a: 'Yes, half an hour from Manchester. East Cheshire, including Macclesfield, Bollington and the surrounding villages, is well within regular range.',
      },
      {
        q: 'I’m a one-person consultancy. What’s realistic for me?',
        a: 'A lot: meeting transcription and write-ups, proposal drafting, research summaries and invoice chasing can hand a solo consultant back a working day per week. Tools cost £20–40 a month, the free report will show your specific quick wins.',
      },
    ],
    nearby: ['stockport', 'wilmslow', 'crewe', 'northwich', 'manchester'],
  },
  {
    slug: 'crewe',
    name: 'Crewe',
    county: 'Cheshire',
    metaDescription:
      'AI consulting for Crewe businesses, engineering, automotive supply chain, logistics and local firms. Plain-English advice and hands-on implementation. Free AI report.',
    intro:
      'Crewe was built by the railway works and refined by Bentley, a town with engineering excellence in its DNA and a big logistics footprint thanks to its position on the West Coast Main Line and the M6. Its businesses tend to be makers and movers, plus the professional firms that serve them. For all of them, AI’s promise is the same: skilled people spending their time on skilled work, not paperwork.',
    businesses: [
      'Engineering and automotive supply-chain firms',
      'Rail-sector suppliers and maintenance businesses',
      'Logistics and distribution operators around Basford and the M6',
      'Professional services and trades serving south Cheshire',
    ],
    challenges: [
      'Quality and compliance documentation demanded by automotive and rail customers',
      'Quotes for engineered work bottlenecked on a few senior estimators',
      'Transport planning handled across phones, whiteboards and inboxes',
      'Skilled-labour shortages making every wasted hour more expensive',
    ],
    aiExamples: [
      'An automotive supplier generating PPAP-adjacent paperwork drafts from build data',
      'A rail maintenance firm summarising standards updates against live contracts',
      'An engineering shop capturing estimator experience in an AI-assisted quoting process',
      'A south Cheshire haulier automating booking confirmations and customer updates',
    ],
    faqs: [
      {
        q: 'Automotive customers audit us. How does AI look to an auditor?',
        a: 'Fine, often favourable, when it’s documented. Auditors care that outputs are checked and processes are consistent. “AI drafts, qualified human approves, log kept” is a stronger story than “whoever had time wrote it from memory”.',
      },
      {
        q: 'How long before we’d see benefits?',
        a: 'Quick wins (drafting, summarising, enquiry handling) land in weeks. Deeper quoting or documentation systems typically take 4–8 weeks to build and prove. The report sequences it so savings fund the next step.',
      },
      {
        q: 'Do you cover Nantwich and the surrounding villages too?',
        a: 'Yes, Crewe, Nantwich, Sandbach, Middlewich and across south Cheshire.',
      },
    ],
    nearby: ['northwich', 'macclesfield', 'chester', 'wilmslow', 'warrington'],
  },
  {
    slug: 'wilmslow',
    name: 'Wilmslow',
    county: 'Cheshire',
    metaDescription:
      'AI advice for Wilmslow businesses, financial advisers, estate agents, professional services and independents. Security-first AI adoption; the ICO is our neighbour. Free report.',
    intro:
      'Wilmslow is one of the North West’s most prosperous business communities, thick with financial advisers, wealth managers, estate agents, law firms and premium independents. It’s also, fittingly, home to the Information Commissioner’s Office. Adopting AI a few streets from the UK’s data-protection regulator concentrates the mind wonderfully: everything here starts with doing it properly.',
    businesses: [
      'Financial advisers, wealth managers and accountants',
      'Estate and letting agents serving the “Golden Triangle” property market',
      'Law firms and specialist consultancies',
      'Premium retailers, clinics and hospitality independents',
    ],
    challenges: [
      'High-value clients expecting immediate, polished, personal responses',
      'Compliance and suitability documentation swallowing adviser time',
      'Property details, valuations and vendor updates produced under time pressure',
      'Small support teams behind client-facing professionals',
    ],
    aiExamples: [
      'An adviser practice drafting meeting summaries and suitability letters for adviser sign-off',
      'An estate agent producing listing copy, brochure drafts and vendor updates in minutes',
      'A law firm triaging enquiries and drafting engagement letters in house style',
      'A clinic answering treatment and availability questions instantly, in its own tone',
    ],
    faqs: [
      {
        q: 'With the ICO on our doorstep, is AI GDPR-compliant?',
        a: 'AI tools can absolutely be used in line with UK GDPR; what matters is how. Lawful basis, data minimisation, business-tier tools with no-training agreements, and staff rules about client data. The ICO itself publishes pragmatic AI guidance, a properly configured setup follows it, and yours will.',
      },
      {
        q: 'Our clients pay for the personal touch. Won’t AI cheapen that?',
        a: 'Used badly, yes. Used well, it buys back the hours that make the personal touch possible, the adviser spends the saved admin time with clients, and every AI draft goes out only after a human makes it theirs.',
      },
      {
        q: 'Do you cover Alderley Edge and Handforth too?',
        a: 'Yes, Wilmslow, Alderley Edge, Handforth, Prestbury and the surrounding villages are all comfortably in range from Manchester.',
      },
    ],
    nearby: ['macclesfield', 'stockport', 'altrincham', 'manchester', 'northwich'],
  },
  {
    slug: 'altrincham',
    name: 'Altrincham',
    county: 'Greater Manchester',
    metaDescription:
      'Practical AI consulting for Altrincham businesses, food and hospitality independents, professional services and agencies. Independent advice, free AI Opportunity Report.',
    intro:
      'Altrincham wrote the playbook for market-town reinvention, the Market House turned it into one of the North’s best food destinations, and a wave of independents, agencies and professional firms followed. It’s a town of owner-operators with high standards and no spare time, which is precisely the profile that gets the most from well-chosen AI: hours back each week without compromising on quality.',
    businesses: [
      'Restaurants, food halls, cafés and bars around the market quarter',
      'Boutique agencies, consultancies and studios',
      'Accountants, solicitors and financial planners serving south Manchester',
      'Independent retailers, clinics and wellness businesses',
    ],
    challenges: [
      'Hospitality independents managing bookings, reviews and socials on top of service',
      'Boutique firms where the founder does the selling, delivery and admin',
      'Standing out in a crowded, quality-conscious local market',
      'Evening-and-weekend admin eroding the work-life balance owners moved here for',
    ],
    aiExamples: [
      'A restaurant answering booking, menu and allergen questions automatically between services',
      'A boutique agency producing research, proposals and reporting drafts in a fraction of the time',
      'A financial planner turning meeting recordings into notes, actions and follow-up letters',
      'A wellness clinic filling last-minute cancellations with automated waitlist messages',
    ],
    faqs: [
      {
        q: 'Everyone in Altrincham competes on quality. Won’t AI make us generic?',
        a: 'Generic AI output comes from generic effort. Set up properly, trained on your voice, your menus, your style, AI drafts sound like you on a good day. And the final say always stays with you.',
      },
      {
        q: 'How does the free review work for a hospitality business?',
        a: 'Same as anyone: a 15-minute call about how your week actually runs, covers, enquiries, no-shows, admin. The report then maps your specific wins, which for hospitality usually start with out-of-hours enquiry handling.',
      },
      {
        q: 'Are you nearby?',
        a: 'Twenty minutes away, Altrincham, Hale and Bowdon are effectively home turf. In-person sessions are easy.',
      },
    ],
    nearby: ['trafford', 'manchester', 'wilmslow', 'stockport', 'warrington'],
  },
  {
    slug: 'northwich',
    name: 'Northwich',
    county: 'Cheshire',
    metaDescription:
      'AI consulting for Northwich businesses, chemical and engineering suppliers, distribution firms and town-centre independents. Practical, plain-English help. Free report.',
    intro:
      'Northwich has been an industrial town since salt was king, and the chemical and engineering heritage still shapes its economy, alongside distribution operations drawn by mid-Cheshire’s connectivity and a determined independent scene in the town centre. Businesses here appreciate straight talk, which suits me: AI explained plainly, costed honestly, and implemented only where it earns its place.',
    businesses: [
      'Chemical, engineering and industrial-services suppliers',
      'Distribution and logistics firms across mid-Cheshire',
      'Trades and construction businesses',
      'Independent retail and hospitality in the town centre',
    ],
    challenges: [
      'Industrial suppliers producing safety and compliance documents at volume',
      'Quoting and tendering processes reliant on a couple of experienced heads',
      'Transport and warehouse admin handled manually',
      'Independents wearing five hats with no admin support',
    ],
    aiExamples: [
      'An industrial supplier drafting COSHH-adjacent documentation and datasheets for expert review',
      'An engineering firm answering distributor technical queries from its own product data',
      'A mid-Cheshire haulier automating booking confirmations and daily run sheets',
      'A town-centre independent handling enquiries and socials in one planned hour a week',
    ],
    faqs: [
      {
        q: 'Safety documentation has to be right. Is AI appropriate there?',
        a: 'As a drafter, yes; as an authority, never. AI accelerates the writing; your competent person reviews and approves, same as they would a junior’s draft. The time saving is real and the accountability is unchanged.',
      },
      {
        q: 'We’re a small team, is this over-engineered for us?',
        a: 'The whole approach scales down: many Northwich-sized businesses start with nothing more than two well-configured AI tools and one automation, costing less per month than a night out. The report is honest about how little you actually need.',
      },
      {
        q: 'Do you cover Winsford and Middlewich too?',
        a: 'Yes, Northwich, Winsford, Middlewich and across mid-Cheshire.',
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
      'Independent AI consultant for Preston businesses, professional services, aerospace supply chain, and city firms. Practical advice and implementation. Free AI report.',
    intro:
      'Preston is Lancashire’s administrative and commercial heart, a city of law firms, accountants and agencies, ringed by the advanced manufacturing that supplies the aerospace giants at Samlesbury and Warton. It’s also a university city with a young workforce that already uses AI personally. The opportunity for Preston businesses is turning that scattered personal use into something deliberate, safe and genuinely productive.',
    businesses: [
      'Law, accountancy and professional firms across the city centre',
      'Aerospace and advanced-manufacturing suppliers around the city',
      'Marketing, digital and creative agencies',
      'Retail, hospitality and student-economy businesses',
    ],
    challenges: [
      'Staff quietly using personal ChatGPT accounts with no policy in place',
      'Professional firms balancing modernisation against confidentiality',
      'Manufacturers meeting aerospace-grade documentation requirements with small teams',
      'Agencies under margin pressure from clients expecting AI-speed turnaround',
    ],
    aiExamples: [
      'A Preston law firm adopting a governed AI setup that replaces risky personal-account use',
      'An aerospace supplier drafting quality documentation against customer specs for expert sign-off',
      'An agency cutting proposal and reporting time in half while keeping strategy human',
      'An accountancy practice summarising client bookkeeping queries and drafting responses',
    ],
    faqs: [
      {
        q: 'Our staff already use ChatGPT unofficially. Is that a problem?',
        a: 'It’s the most common situation I find, and yes, unmanaged, it’s a data-protection risk. The fix isn’t banning it (that never works); it’s giving people a proper business setup with clear rules. Usage goes up, risk goes down.',
      },
      {
        q: 'Do you cover Preston from Manchester?',
        a: 'Yes, 45 minutes up the M61, and Lancashire is a core part of my patch. Calls for reviews, on-site for workshops and implementation.',
      },
      {
        q: 'What should a Preston professional firm do first?',
        a: 'Usually: adopt business-tier AI accounts, set a simple usage policy, and train the team on three or four core workflows. That foundation is quick, affordable, and removes the risk of the informal usage that’s almost certainly already happening.',
      },
    ],
    nearby: ['blackburn', 'blackpool', 'wigan', 'bolton', 'lancaster'],
  },
  {
    slug: 'blackburn',
    name: 'Blackburn',
    county: 'Lancashire',
    metaDescription:
      'Practical AI help for Blackburn and Darwen businesses, manufacturers, engineering firms, trades and local services. Plain-English advice, fixed prices, free AI report.',
    intro:
      'Blackburn and Darwen make things, from textiles heritage to today’s engineering, food production and a growing digital cluster. Businesses here are hands-on and cost-conscious, often family-run, and rightly wary of consultants selling transformation. What lands in Blackburn is specifics: this task, automated; this paperwork, drafted; these hours, saved; this price, fixed.',
    businesses: [
      'Engineering and manufacturing firms across Blackburn and Darwen',
      'Food producers and wholesalers',
      'Construction firms and skilled trades',
      'Accountants, brokers and local professional services',
    ],
    challenges: [
      'Quoting engineered and manufactured work quickly enough to win it',
      'Order paperwork and delivery notes processed by hand',
      'Owners doing quotes and invoices at night after a day on the tools',
      'Little slack in small office teams for anything new',
    ],
    aiExamples: [
      'An engineering firm drafting quotes from emailed drawings with consistent pricing logic',
      'A food wholesaler processing repeat orders from email to pick list automatically',
      'A trades business turning site voice notes into same-day written quotes',
      'A local brokerage summarising policy documents into plain-English client comparisons',
    ],
    faqs: [
      {
        q: 'What does this cost for a small Blackburn firm?',
        a: 'The review and report are free. Typical first projects run a few hundred to a low few thousand pounds, fixed price, chosen because the time saved pays it back within months. You’ll see the numbers before deciding anything.',
      },
      {
        q: 'We’re not techy at all. How hands-on are you?',
        a: 'Completely, I set things up, test them with your real work, and train your team in person. You never get a report telling you to go and do complicated things yourself unless that’s what you want.',
      },
      {
        q: 'Do you cover Darwen, Accrington and the Ribble Valley?',
        a: 'Yes, Blackburn, Darwen, Accrington, Clitheroe and the wider East Lancashire area.',
      },
    ],
    nearby: ['burnley', 'preston', 'bolton', 'bury', 'blackpool'],
  },
  {
    slug: 'blackpool',
    name: 'Blackpool',
    county: 'Lancashire',
    metaDescription:
      'AI consulting for Blackpool and Fylde coast businesses, hotels, attractions, hospitality and local services. Practical help with seasonal demand. Free AI report.',
    intro:
      'Blackpool runs one of the UK’s great visitor economies, millions of guests, thousands of beds, and a season that compresses a year’s trading into months. For hotels, attractions and hospitality businesses on the Fylde coast, AI isn’t abstract: it’s the enquiry answered at 11pm that wins the booking, the review responded to before breakfast, and the admin done during service rather than after midnight.',
    businesses: [
      'Hotels, guest houses and holiday lets across the resort',
      'Attractions, entertainment venues and event businesses',
      'Restaurants, cafés and bars along the front and beyond',
      'Local services and trades supporting the visitor economy',
    ],
    challenges: [
      'Enquiries flooding in around the clock during season, from a dozen channels',
      'Skeleton staffing off-season with everything falling to owners',
      'Review volume that outpaces anyone’s time to respond',
      'Seasonal recruitment making consistent customer communication hard',
    ],
    aiExamples: [
      'A promenade hotel answering availability, parking and accessibility questions instantly, 24/7',
      'A guest house responding to every review, glowing or grumpy, in its own warm voice',
      'An attraction handling group-booking enquiries with drafted quotes for manager approval',
      'A holiday-let operator automating guest messaging from booking to checkout',
    ],
    faqs: [
      {
        q: 'We barely break even off-season. Can we afford this?',
        a: 'The tools themselves cost £20–50 a month, and the free report tells you whether they’re worth even that for your operation. For most accommodation businesses, one extra booking a month from faster enquiry response covers everything.',
      },
      {
        q: 'When’s the best time to set this up?',
        a: 'Off-season, set up in the quiet months, test on lower volume, and have it proven before Easter. That timing is exactly when I do most Fylde coast implementation work.',
      },
      {
        q: 'Do you cover Lytham, St Annes and Fleetwood?',
        a: 'Yes, the whole Fylde coast, from Fleetwood through Blackpool to Lytham St Annes.',
      },
    ],
    nearby: ['preston', 'lancaster', 'blackburn', 'wigan', 'bolton'],
  },
  {
    slug: 'burnley',
    name: 'Burnley',
    county: 'Lancashire',
    metaDescription:
      'AI consulting for Burnley businesses, aerospace and advanced manufacturing suppliers, digital firms and trades. Practical, plain-English implementation. Free AI report.',
    intro:
      'Burnley has quietly become one of the North’s advanced-manufacturing success stories, aerospace supply chains and precision engineering alongside an award-winning digital sector on its doorstep. It’s a town that proves “traditional” and “high-tech” aren’t opposites. The same is true inside its small businesses: the best AI adoption here pairs decades of engineering judgement with tools that remove the paperwork around it.',
    businesses: [
      'Aerospace and precision-engineering suppliers',
      'Advanced manufacturing and materials firms',
      'Digital and software businesses',
      'Trades, construction and local services across the borough',
    ],
    challenges: [
      'Aerospace-grade documentation and traceability with SME-sized office teams',
      'Quoting precision work without monopolising senior engineers',
      'Digital firms needing to demonstrate AI fluency to their own clients',
      'Recruiting skilled staff in a competitive regional market',
    ],
    aiExamples: [
      'A precision engineer drafting FAIR-adjacent and quality documents from build records',
      'A supplier answering technical delivery queries automatically from live job status',
      'A digital agency productising AI-assisted services with proper internal governance',
      'A construction firm generating tender summaries to pick winnable bids faster',
    ],
    faqs: [
      {
        q: 'Aerospace customers demand traceability. How does AI fit that?',
        a: 'Traceability is about records and sign-off, and AI changes neither, a qualified person still approves every document. What changes is drafting speed. Documented properly (and I document everything), it strengthens rather than weakens your audit story.',
      },
      {
        q: 'How does the free review work for a Burnley manufacturer?',
        a: 'A 15-minute call about your order-to-invoice flow, then a written report identifying where hours leak, usually quoting, documentation and customer updates, with realistic savings estimates and costs.',
      },
      {
        q: 'Do you cover Padiham, Nelson and Colne?',
        a: 'Yes, Burnley, Padiham, Nelson, Colne and across Pendle and East Lancashire.',
      },
    ],
    nearby: ['blackburn', 'preston', 'bury', 'rochdale', 'bolton'],
  },
  {
    slug: 'lancaster',
    name: 'Lancaster',
    county: 'Lancashire',
    metaDescription:
      'AI advice for Lancaster and Morecambe Bay businesses, professional services, university spin-outs, tourism and rural firms. Independent, practical help. Free AI report.',
    intro:
      'Lancaster combines a historic county town, a top university, and a wide rural and coastal hinterland running up to Morecambe Bay, which makes its business community unusually varied: professional practices, spin-outs and research-adjacent firms, tourism and hospitality, and rural businesses serving north Lancashire and south Cumbria. For all of them, distance from the big cities makes “doing more with the team you have” especially valuable.',
    businesses: [
      'Solicitors, accountants and professional practices in the city centre',
      'University spin-outs and knowledge businesses',
      'Tourism, hospitality and events businesses around Morecambe Bay',
      'Rural, agricultural and land-based businesses across north Lancashire',
    ],
    challenges: [
      'Small professional teams serving a large geographic client base',
      'Tourism businesses with sharp seasonal peaks and lean shoulder seasons',
      'Rural firms managing compliance and grant paperwork without office staff',
      'Distance from city talent pools making efficiency gains more valuable',
    ],
    aiExamples: [
      'A Lancaster solicitor drafting standard correspondence and summarising files securely',
      'A Morecambe Bay hotel answering enquiries and reviews around the clock',
      'A land agent drafting grant applications and compliance summaries for review',
      'A knowledge business turning research into client-ready reports faster',
    ],
    faqs: [
      {
        q: 'We’re a long way from Manchester. How does support work?',
        a: 'Mostly by call and screen-share, which is how most support works regardless of distance. For workshops and implementation I come to you, Lancaster is a straightforward trip, and it’s my gateway to clients further into Cumbria.',
      },
      {
        q: 'Is AI relevant to rural and land-based businesses?',
        a: 'Surprisingly so, grant applications, compliance records, tenancy correspondence and diversified-business marketing are all document-heavy work that AI drafts well. The judgement stays with people who know the land.',
      },
      {
        q: 'Do you cover Morecambe, Carnforth and into Cumbria?',
        a: 'Yes, Lancaster, Morecambe, Carnforth, and south Cumbria including Kendal and Barrow by arrangement. The North West is the patch, and that includes its northern end.',
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
