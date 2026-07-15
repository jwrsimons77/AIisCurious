export interface Industry {
  slug: string;
  /** e.g. "Accountants" */
  name: string;
  /** Page H1, e.g. "AI for Accountants" */
  title: string;
  metaDescription: string;
  intro: string;
  painPoints: string[];
  opportunities: { title: string; text: string }[];
  /** A concrete example workflow, step by step */
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
    title: 'AI for Accountants',
    metaDescription:
      'Practical AI for accountancy practices: client correspondence, working papers, HMRC letters and advisory work. Independent advice from a Manchester-based AI consultant.',
    intro:
      'Accountancy practices sit on a goldmine of repetitive, language-heavy work — client emails, HMRC correspondence, working-paper summaries, chasing records — that AI handles remarkably well. The firms getting ahead aren’t replacing accountants; they’re freeing them to do the advisory work clients actually value (and pay more for).',
    painPoints: [
      'January (and every VAT quarter) swallowing the whole team',
      'Chasing clients for records over weeks of repetitive emails',
      'Writing similar letters and emails dozens of times a week',
      'Advisory ambitions permanently postponed by compliance workload',
      'Junior staff time consumed by summarising and formatting',
    ],
    opportunities: [
      {
        title: 'Client correspondence at speed',
        text: 'Draft record requests, deadline reminders, engagement letters and plain-English explanations of tax positions in seconds, each in your house style, each reviewed before sending.',
      },
      {
        title: 'Summarising and triage',
        text: 'Summarise HMRC letters, long email chains and client documents into action points, so qualified staff start at the decision, not page one.',
      },
      {
        title: 'Automated chasing',
        text: 'Automate the records-chasing sequence — polite, escalating, and tracked — so nothing depends on someone remembering to follow up.',
      },
      {
        title: 'Advisory groundwork',
        text: 'Turn a set of accounts into a first-draft commentary for the partner to refine, making regular advisory conversations economical for smaller clients.',
      },
    ],
    workflow: {
      title: 'Example: year-end records collection, automated',
      steps: [
        'Client list with year-ends syncs from your practice software to the automation',
        'Six weeks out, each client gets a personalised records request with their specific checklist',
        'Replies are scanned; received items are ticked off, missing items trigger tailored follow-ups',
        'Your team sees a live dashboard of who’s outstanding, with drafted chase emails ready to approve',
        'When records are complete, the job is flagged ready and a working-paper shell is prepared',
      ],
    },
    tools: [
      'Claude or ChatGPT (business tier) for drafting and summarising',
      'Microsoft Copilot if your practice runs on Microsoft 365',
      'Power Automate, Zapier or Make for chasing sequences',
      'Your existing practice software — connected, not replaced',
    ],
    roi: 'A typical 5–15 person practice recovers 15–30 hours a week across the team — most visibly in correspondence and chasing. Several practices fund their entire AI cost from one previously-unbillable advisory conversation a month becoming billable.',
    faqs: [
      {
        q: 'Is client financial data safe in AI tools?',
        a: 'Only with the right setup: business-tier accounts with training opt-outs, clear rules about what gets pasted where, and anonymisation habits for anything sensitive. That configuration is the first thing I put in place with any practice.',
      },
      {
        q: 'Will AI do the accounts themselves?',
        a: 'No — and be wary of anything claiming otherwise. AI is excellent with words (letters, summaries, explanations) and useless as an authority on numbers. Judgements, computations and sign-off stay with qualified humans and proper software.',
      },
      {
        q: 'How do we start without disrupting compliance season?',
        a: 'Start with correspondence drafting — it needs no integration, saves time from day one, and touches nothing in your workflow that could go wrong. Deeper automation waits for your quiet months.',
      },
    ],
    related: ['financial-services', 'solicitors', 'professional-services'],
  },
  {
    slug: 'solicitors',
    name: 'Solicitors',
    title: 'AI for Solicitors',
    metaDescription:
      'Practical, defensible AI for small law firms: document summarising, drafting, client updates and intake. Security-first advice from an independent Manchester consultant.',
    intro:
      'Law is language, and AI is the most capable language tool ever built — which makes it both a genuine opportunity for small firms and a genuine professional risk if adopted carelessly. The path that works is unglamorous: a properly governed setup, clear rules about client data, and AI applied to the drafting and summarising drudgery that keeps fee earners from fee earning.',
    painPoints: [
      'Fee earners spending hours on routine letters and standard documents',
      'Bundles and long documents that must be read before anything can happen',
      'Clients chasing for updates because nobody had time to send one',
      'New enquiries answered too slowly and lost to faster firms',
      'Staff experimenting with public AI tools without any policy',
    ],
    opportunities: [
      {
        title: 'First-draft everything',
        text: 'Standard letters, attendance notes, chronologies and client-care correspondence drafted in your precedents’ style, reviewed and owned by the fee earner.',
      },
      {
        title: 'Document summarising',
        text: 'Long leases, contracts and correspondence files summarised into issues lists — a starting point that cuts reading time dramatically, never a substitute for professional review.',
      },
      {
        title: 'Client communication',
        text: 'Proactive matter updates drafted automatically at key stages, so clients stop phoning to ask and start recommending you for responsiveness.',
      },
      {
        title: 'Intake and triage',
        text: 'New enquiries captured, conflict-check details gathered, and urgency flagged within minutes — around the clock.',
      },
    ],
    workflow: {
      title: 'Example: conveyancing client updates, automated',
      steps: [
        'Matter milestones in your case management system trigger the workflow',
        'At each stage (searches back, enquiries raised, exchange ready) a plain-English update is drafted',
        'The fee earner reviews and sends with one click — tone and accuracy stay theirs',
        'Common client questions get drafted replies from an approved knowledge base',
        'The file records every communication automatically',
      ],
    },
    tools: [
      'Claude (strong long-document handling) or ChatGPT, business tier',
      'Microsoft Copilot inside a 365-based practice',
      'Case-management integrations via Power Automate or native connectors',
      'A written AI-use policy — as important as any tool',
    ],
    roi: 'Small firms typically recover 5–10 hours per fee earner per week on drafting and reading, and see measurably fewer “any update?” calls. Faster enquiry response alone often wins enough new matters to cover costs.',
    faqs: [
      {
        q: 'What about client confidentiality and privilege?',
        a: 'The red line: no client data in consumer AI tools, ever. Business and enterprise tiers with contractual no-training terms, data-residency options and retention controls change the analysis — that governed setup, documented, is what I implement, alongside SRA-aware usage guidance.',
      },
      {
        q: 'Can AI-drafted documents be relied on?',
        a: 'As drafts, reviewed by a qualified person — yes, exactly like a trainee’s work. Unreviewed, no. Well-publicised court embarrassments all share one feature: nobody checked. Your process will check.',
      },
      {
        q: 'Where should a small firm start?',
        a: 'A governed tool setup plus a usage policy first (a week), then drafting and summarising training for fee earners. Case-management automation comes later, once habits are formed.',
      },
    ],
    related: ['accountants', 'professional-services', 'estate-agents'],
  },
  {
    slug: 'recruitment',
    name: 'Recruitment',
    title: 'AI for Recruitment',
    metaDescription:
      'Practical AI for recruitment agencies: candidate sourcing admin, CV formatting, job ads, outreach and interview notes. Independent advice, Manchester based.',
    intro:
      'Recruitment has always been a race, and AI has changed its pace: agencies using it well are formatting CVs, drafting outreach, writing job ads and preparing interview packs in a fraction of the old time. The judgement calls — who’s genuinely good, who fits, who to back — remain stubbornly human. Everything around those calls can be dramatically faster.',
    painPoints: [
      'Consultants spending evenings formatting CVs instead of speaking to people',
      'Job ads written in a rush that attract the wrong applicants',
      'Personalised outreach that isn’t actually personalised (and candidates can tell)',
      'Interview notes and client submissions written up hours after the conversation',
      'The database full of lapsed candidates nobody has time to re-engage',
    ],
    opportunities: [
      {
        title: 'CV formatting and submissions',
        text: 'Raw CVs reformatted into your agency template with a tailored summary against the specific brief — minutes per candidate, not half an hour.',
      },
      {
        title: 'Job ads that pull',
        text: 'Ads drafted from the client brief in your voice, with variants for job boards versus LinkedIn, and screening questions that filter early.',
      },
      {
        title: 'Genuinely personalised outreach',
        text: 'Messages that reference a candidate’s actual background and the specific role — drafted at scale, sanity-checked by the consultant, sent as them.',
      },
      {
        title: 'Interview intelligence',
        text: 'Call and interview notes structured automatically into candidate profiles and client-ready summaries while the consultant is already on the next call.',
      },
    ],
    workflow: {
      title: 'Example: from client brief to shortlist, accelerated',
      steps: [
        'Client briefing call is transcribed and turned into a structured role profile',
        'Job ad variants and a boolean search string are drafted from the profile',
        'Longlisted CVs are summarised against the brief with a suggested ranking for consultant review',
        'Selected candidates get personalised outreach drafts referencing their real experience',
        'Interview notes become formatted client submissions the same day',
      ],
    },
    tools: [
      'ChatGPT or Claude (business tier) for drafting and summarising',
      'Transcription tools for calls and interviews',
      'CRM/ATS automations via Zapier, Make or native integrations',
      'LinkedIn workflow tools used carefully within platform rules',
    ],
    roi: 'Agencies typically cut CV-to-submission time by 50–70% and give each consultant back 6–10 hours a week — time that goes into calls, the one activity that fills placements. One extra placement a quarter pays for everything many times over.',
    faqs: [
      {
        q: 'Will clients or candidates be put off by AI use?',
        a: 'They’ll be put off by lazy AI — generic messages and obviously templated ads. Used as a drafting layer under consultant judgement, nobody sees anything but faster, sharper service. Be transparent if asked; the answer “we use AI for admin so consultants spend time on people” lands well.',
      },
      {
        q: 'What about candidate data and GDPR?',
        a: 'Candidate data is personal data, so the same rules as your CRM apply: business-tier tools, no-training agreements, and defined retention. Also be careful with automated decision-making — AI can rank and summarise for a human decision, but a human should make it.',
      },
      {
        q: 'Our ATS is ancient. Does that block us?',
        a: 'Rarely — most gains (formatting, ads, outreach, notes) need no ATS integration at all. Start there; integrate later if the ATS allows.',
      },
    ],
    related: ['professional-services', 'marketing-agencies', 'financial-services'],
  },
  {
    slug: 'estate-agents',
    name: 'Estate Agents',
    title: 'AI for Estate Agents',
    metaDescription:
      'Practical AI for estate and letting agents: listing descriptions, enquiry handling, vendor updates and lettings admin. Independent advice from a North West consultant.',
    intro:
      'Estate agency runs on speed and communication — the listing that goes live tonight rather than Thursday, the enquiry answered in five minutes rather than five hours, the vendor who hears from you before they have to ask. Every one of those is a language task, which is why AI fits agency work so naturally.',
    painPoints: [
      'Listing descriptions written late at night, all starting to sound the same',
      'Portal enquiries arriving 24/7 with responses limited to office hours',
      'Vendors and landlords chasing for updates',
      'Lettings admin — references, renewals, compliance reminders — eating the week',
      'Valuation follow-ups slipping through the cracks',
    ],
    opportunities: [
      {
        title: 'Listings in minutes',
        text: 'Full property descriptions, portal summaries and social captions drafted from your notes and photos — in your agency voice, accurate to what you actually recorded.',
      },
      {
        title: 'Instant enquiry response',
        text: 'Every portal and email enquiry acknowledged with useful specifics and a viewing-booking link within minutes, at 9pm on Sunday as reliably as 10am Tuesday.',
      },
      {
        title: 'Proactive vendor updates',
        text: 'Weekly vendor and landlord updates drafted from actual activity data — viewings, feedback, portal stats — reviewed and sent in a fraction of the time.',
      },
      {
        title: 'Lettings paperwork',
        text: 'Tenancy correspondence, renewal reminders, compliance chase-ups and deposit communications automated with human oversight.',
      },
    ],
    workflow: {
      title: 'Example: new instruction to live listing, same day',
      steps: [
        'Valuer’s voice notes and photos from the property upload to a shared folder',
        'A full description, key features list and portal summary are drafted automatically',
        'The negotiator reviews, corrects any detail, and approves',
        'Social posts and the vendor’s “you’re live” email are generated alongside',
        'Enquiry auto-response is armed with property-specific details from day one',
      ],
    },
    tools: [
      'ChatGPT or Claude for descriptions and correspondence',
      'Enquiry automation via your portal/CRM integrations',
      'Zapier or Make to connect CRM, email and messaging',
      'Photo-enhancement tools used within portal rules',
    ],
    roi: 'Branches typically save 10–20 hours a week across negotiators and save entire evenings for valuers. Faster enquiry response converts measurably more viewings — the difference between five minutes and next morning is often the booking itself.',
    faqs: [
      {
        q: 'Could AI descriptions breach property misdescription rules?',
        a: 'AI drafts only from the details you give it, and a negotiator reviews before publishing — the same compliance obligation as always, with the same human accountable. Never let a tool invent selling points; the setup I build constrains it to your recorded facts.',
      },
      {
        q: 'Will automated enquiry replies annoy applicants?',
        a: 'Slow silence annoys applicants. A fast, specific, helpful reply — parking, EPC, next viewing slots — delights them, even when they suspect automation. The key is being useful, not pretending to be human.',
      },
      {
        q: 'We’re a two-branch independent. Is this overkill?',
        a: 'Independents benefit most — you’re competing with corporates’ response times without their headcount. A £50-a-month setup that answers every enquiry instantly is the cheapest negotiator you’ll ever hire.',
      },
    ],
    related: ['solicitors', 'financial-services', 'trades'],
  },
  {
    slug: 'construction',
    name: 'Construction',
    title: 'AI for Construction',
    metaDescription:
      'Practical AI for construction firms: tenders, RAMS, site reports, subcontractor admin and client updates. Plain-English advice from a Manchester-based consultant.',
    intro:
      'Construction generates staggering amounts of paperwork — tenders, RAMS, site diaries, variations, subcontractor chains, client updates — usually produced by people whose real job is building things. AI won’t pour concrete, but it will draft the method statement, summarise the tender pack and write up the site diary, which is where evenings currently go.',
    painPoints: [
      'Tender packs taking days to read before you can even decide whether to bid',
      'RAMS and H&S documentation written from scratch for every job',
      'Site progress living in phone photos and memory until someone types it up',
      'Variations and delays poorly documented until they become disputes',
      'Subcontractor chasing — documents, insurances, availability — never ending',
    ],
    opportunities: [
      {
        title: 'Tender triage',
        text: 'Tender packs summarised into scope, risks, key dates and bid/no-bid factors within the hour, so estimators spend time only on winnable work.',
      },
      {
        title: 'RAMS and H&S drafting',
        text: 'Method statements and risk assessments drafted from your previous jobs and the new job’s specifics — reviewed and signed off by your competent person, produced in a quarter of the time.',
      },
      {
        title: 'Site reporting from voice notes',
        text: 'Foreman voice notes and photos turned into structured site diaries, progress reports and client updates automatically.',
      },
      {
        title: 'Commercial protection',
        text: 'Variations, delay events and instructions logged and confirmed in writing the same day — the contemporaneous record that wins disputes before they start.',
      },
    ],
    workflow: {
      title: 'Example: site diary and client update, hands-free',
      steps: [
        'Site manager records a two-minute voice note and snaps photos at day’s end',
        'A structured diary entry is drafted: progress, labour, weather, deliveries, issues',
        'Anything flagged as a delay or variation generates a same-day written confirmation for review',
        'A weekly plain-English client update compiles automatically from the diaries',
        'Everything files against the job, searchable when you need history',
      ],
    },
    tools: [
      'ChatGPT or Claude for drafting and summarising',
      'Voice transcription on the phones your team already carries',
      'Zapier, Make or Power Automate to route notes, photos and documents',
      'Your existing job-management software, connected where it allows',
    ],
    roi: 'Firms typically save 8–15 office hours a week on documentation, bid on more (better-chosen) tenders, and — hardest to measure but most valuable — enter disputes with written records instead of recollections.',
    faqs: [
      {
        q: 'Can AI-drafted RAMS be trusted on site?',
        a: 'They must be reviewed and approved by your competent person, exactly as CDM expects — AI changes drafting speed, not responsibility. In practice, reviewed AI drafts are often more thorough than rushed human ones, because nothing gets skipped for time.',
      },
      {
        q: 'Our lads won’t type anything. Does that kill it?',
        a: 'The opposite — the whole design assumes nobody types. Voice notes and photos are the input; AI does the typing. If your site team can leave a WhatsApp voice message, they can feed this system.',
      },
      {
        q: 'What does a small contractor actually need to spend?',
        a: 'Typically £30–60 a month in tools once set up. Setup itself is a fixed-price project, scoped after the free review — for most small contractors it pays back within the first couple of tenders it helps win or avoid.',
      },
    ],
    related: ['trades', 'manufacturing', 'professional-services'],
  },
  {
    slug: 'trades',
    name: 'Trades',
    title: 'AI for Trades',
    metaDescription:
      'Practical AI for tradespeople: quotes from voice notes, missed-call follow-up, invoicing and job admin. Plain-English help for plumbers, electricians, joiners and builders.',
    intro:
      'If you run a trade business, your bottleneck usually isn’t the work — it’s everything around it. Quotes written at the kitchen table at 9pm. Calls missed because you were mid-job. Invoices sent late because paperwork waits for Sunday. AI attacks exactly that layer, and for trades it’s some of the fastest payback anywhere.',
    painPoints: [
      'Quoting at night after a full day on the tools',
      'Missed calls becoming missed jobs — callers just ring the next name',
      'Invoices going out days late (and getting paid later still)',
      'The same customer questions answered over and over',
      'No time for the reviews and photos that actually win local work',
    ],
    opportunities: [
      {
        title: 'Quotes from the van',
        text: 'Record a voice note walking the job — measurements, materials, labour — and a written, professional quote is drafted before you’ve left the street. Review, tweak, send.',
      },
      {
        title: 'Missed-call rescue',
        text: 'Every missed call gets an instant text: sorry I missed you, here’s what I do, reply with the job details or book a slot here. Callers stop ringing the next number.',
      },
      {
        title: 'Same-day invoicing',
        text: 'Job done becomes invoice sent automatically, with polite chasing after that. Cash flow improves without a single awkward phone call.',
      },
      {
        title: 'Reviews on autopilot',
        text: 'Completed jobs trigger a friendly review request; responses to reviews are drafted for you. Your Google profile compounds while you work.',
      },
    ],
    workflow: {
      title: 'Example: enquiry to paid invoice, minimal typing',
      steps: [
        'Missed call triggers an instant text with a link to describe the job or send photos',
        'You walk the job and leave a voice note; a written quote is drafted into your template',
        'You approve it from your phone; the customer gets it the same day',
        'Job completion triggers the invoice and a review request',
        'Unpaid invoices get polite automated reminders at 7, 14 and 21 days',
      ],
    },
    tools: [
      'ChatGPT or Claude on your phone for quotes and letters',
      'Missed-call-to-text services',
      'Your job app (Tradify, ServiceM8, Powered Now…) plus Zapier where useful',
      'Voice notes — the tool you already use — as the input for everything',
    ],
    roi: 'Most trades recover 4–8 hours a week and, more importantly, stop losing jobs to missed calls and slow quotes. One extra job a month covers the tool costs many times over; getting evenings back is the part people mention.',
    faqs: [
      {
        q: 'I’m not good with computers. Honestly, can I do this?',
        a: 'If you can send a WhatsApp voice note, yes — that’s the skill this is built on. I set everything up and show you on your own phone. Most of my trades clients would not describe themselves as techy.',
      },
      {
        q: 'Will customers get annoyed by automatic texts?',
        a: 'The data says the opposite: an instant, helpful text beats a ringing phone that goes nowhere. You’re not replacing conversation — you’re making sure the conversation happens with you and not the next name on Google.',
      },
      {
        q: 'What does it cost for a one-man band?',
        a: 'Typically £25–50 a month in tools. Setup is a small fixed-price job, and the free AI Opportunity Review will tell you honestly whether it’s worth it for your trade and volume before you spend anything.',
      },
    ],
    related: ['construction', 'estate-agents', 'retail'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    title: 'AI for Manufacturing',
    metaDescription:
      'Practical AI for small manufacturers: quoting, order processing, spec sheets, quality documentation and customer service. Independent North West consultant.',
    intro:
      'Small manufacturers live or die on the office as much as the shop floor — quotes that go out fast enough to win, orders processed without re-keying, spec and quality documents produced to customer standards. AI doesn’t touch your machines; it transforms the paperwork wrapped around them, which for most SME manufacturers is where the hidden hours are.',
    painPoints: [
      'Quotes bottlenecked on one or two experienced estimators',
      'Emailed purchase orders re-typed into the system by hand',
      'Spec sheets, CoCs and quality docs assembled manually for every order',
      'Customers phoning for order status because updates don’t go out',
      'Decades of know-how in the heads of people approaching retirement',
    ],
    opportunities: [
      {
        title: 'Faster, consistent quoting',
        text: 'Enquiries converted to structured quote requests, priced against your history and rules, drafted for estimator approval — hours become minutes, and pricing logic stops living in one head.',
      },
      {
        title: 'Order intake without re-keying',
        text: 'Emailed and PDF purchase orders read automatically into your system, with exceptions flagged for a human instead of everything handled by one.',
      },
      {
        title: 'Documentation on demand',
        text: 'Spec sheets, certificates and quality documents generated from master data per order — consistent, fast, and reviewed rather than assembled.',
      },
      {
        title: 'Knowledge capture',
        text: 'Interviews and job records with experienced staff turned into a searchable knowledge base, so thirty years of judgement survives retirement.',
      },
    ],
    workflow: {
      title: 'Example: enquiry to quote in under an hour',
      steps: [
        'Enquiry email (with drawings or specs attached) lands in the quotes inbox',
        'Key requirements are extracted into your quote template: material, dimensions, quantity, finish, deadline',
        'Similar past jobs and their actual costs are pulled up alongside',
        'A draft quote with suggested pricing goes to the estimator for judgement and approval',
        'The approved quote is sent and logged; a follow-up reminder schedules automatically',
      ],
    },
    tools: [
      'Claude or ChatGPT (business tier) for extraction and drafting',
      'Power Automate, Make or Zapier for order and document flows',
      'Your existing MRP/ERP — fed and read, not replaced',
      'Microsoft Copilot where the office runs on 365',
    ],
    roi: 'SME manufacturers typically halve quote turnaround, remove most order re-keying errors, and free 10–20 office hours a week. Faster quotes win work: several clients trace specific contract wins to being first back.',
    faqs: [
      {
        q: 'Is this the same as “Industry 4.0” and smart factories?',
        a: 'No — that’s capital-intensive machine-level tech. This is the office layer: quotes, orders, documents, communication. It costs hundreds, not hundreds of thousands, and pays back in weeks. Walk before running.',
      },
      {
        q: 'Our product knowledge is genuinely complex. Can AI cope?',
        a: 'AI doesn’t need to master your product — it needs to extract, structure and draft against the rules and history you give it, with your experts approving. Complexity is precisely why capturing that expertise matters.',
      },
      {
        q: 'What about customer data in quotes and orders?',
        a: 'Same principles as everywhere: business-tier tools, no-training agreements, and clear rules. Commercially sensitive pricing logic can stay entirely inside your own systems with the right architecture — that’s a design decision we make early.',
      },
    ],
    related: ['construction', 'trades', 'professional-services'],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    title: 'AI for Hospitality',
    metaDescription:
      'Practical AI for hotels, restaurants and venues: enquiry handling, review responses, bookings and marketing. Independent advice for North West hospitality businesses.',
    intro:
      'Hospitality is a people business interrupted by admin — enquiries at midnight, reviews demanding replies, menus to update, rotas to juggle, socials to feed. AI’s job here is protective: handle the interruptions so your people can look after the guests in front of them. The businesses doing this well feel more personal, not less, because their humans are less frazzled.',
    painPoints: [
      'Enquiries arriving 24/7 while responses wait for someone free',
      'Review volume outpacing anyone’s time to respond well',
      'Menus, allergen info and event packages needing constant rewriting',
      'Social media done at 1am or not at all',
      'Seasonal staffing making consistent guest communication hard',
    ],
    opportunities: [
      {
        title: 'Round-the-clock enquiry handling',
        text: 'Availability, parking, dietary, accessibility and event questions answered instantly and accurately from your own information — with bookings captured, not just conversations.',
      },
      {
        title: 'Review responses in your voice',
        text: 'Every review — five-star or furious — gets a considered draft response for approval. Response rate goes to 100%; ratings follow.',
      },
      {
        title: 'Menu and marketing copy',
        text: 'Menu descriptions, event packages, newsletters and social captions drafted from your notes and photos in your establishment’s voice.',
      },
      {
        title: 'Group and event quoting',
        text: 'Wedding, party and corporate enquiries turned into personalised proposal drafts for the manager to approve — the same day the enquiry lands.',
      },
    ],
    workflow: {
      title: 'Example: event enquiry to proposal, same day',
      steps: [
        'An enquiry arrives at 9pm via the website: 40 guests, June, dietary requirements',
        'An instant acknowledgement goes out with venue details and a date-check',
        'A personalised proposal draft — package, pricing, menu options — is prepared overnight',
        'The events manager reviews and sends it before 10am',
        'Follow-ups schedule automatically if there’s no reply within three days',
      ],
    },
    tools: [
      'ChatGPT or Claude for drafting and review responses',
      'Website chat/enquiry automation connected to your booking system',
      'Zapier or Make linking enquiries, calendar and email',
      'Your existing booking platform — extended, not replaced',
    ],
    roi: 'Venues typically save 8–15 hours a week, respond to 100% of reviews, and convert measurably more enquiries — out-of-hours response alone often adds several bookings a month. One recovered wedding enquiry can pay for a year of tooling.',
    faqs: [
      {
        q: 'Won’t guests hate talking to a bot?',
        a: 'Guests hate silence. A fast, accurate, warm answer at 11pm beats a form that promises a reply “within 48 hours”. Design matters: the AI answers what it truly knows, hands anything nuanced to a human gracefully, and never fakes being a person.',
      },
      {
        q: 'We change menus weekly. Won’t the AI give wrong answers?',
        a: 'Only if it’s fed stale data — so the setup makes your menu the single source the AI reads, and updating it is one document, not five platforms. Most venues find their information gets more accurate, not less.',
      },
      {
        q: 'Is this affordable for an independent restaurant?',
        a: 'Yes — typical running costs are £30–80 a month. The free review will tell you honestly whether your enquiry and review volume justifies it; for most venues over 20 covers it clearly does.',
      },
    ],
    related: ['retail', 'estate-agents', 'trades'],
  },
  {
    slug: 'retail',
    name: 'Retail',
    title: 'AI for Retail',
    metaDescription:
      'Practical AI for independent retailers: product descriptions, customer service, stock admin and marketing. Plain-English advice for North West shops and e-commerce.',
    intro:
      'Independent retail means competing with chains and marketplaces on service and character while running everything with a fraction of their staff. AI narrows that gap: product descriptions at catalogue speed, customer questions answered around the clock, marketing that actually goes out. The character stays yours — that’s the one thing the chains can’t copy.',
    painPoints: [
      'Hundreds of products needing descriptions, and no time to write them',
      'The same delivery, returns and sizing questions answered daily',
      'Online marketplace admin multiplying with every channel added',
      'Newsletters and socials perpetually postponed',
      'Buying decisions made on gut feel because analysing sales data takes too long',
    ],
    opportunities: [
      {
        title: 'Product content at scale',
        text: 'Descriptions, titles, SEO fields and variant copy generated from supplier data and your notes — in your shop’s voice, hundreds at a time, spot-checked rather than hand-written.',
      },
      {
        title: 'Customer service cover',
        text: 'Delivery, returns, stock and product questions answered instantly from your actual policies and inventory, with humans handling anything genuinely tricky.',
      },
      {
        title: 'Marketing that ships',
        text: 'Weekly newsletters and social posts drafted from what’s new, what’s selling and what’s seasonal — an hour of review instead of a day of writing.',
      },
      {
        title: 'Plain-English sales analysis',
        text: 'Sales exports summarised into what’s moving, what’s dying and what to reorder — the analysis you’d do if you ever had a quiet afternoon.',
      },
    ],
    workflow: {
      title: 'Example: new stock to selling online, same week',
      steps: [
        'Supplier spreadsheet and your quick voice notes about the range are uploaded',
        'Titles, descriptions, SEO fields and category placements are drafted per product',
        'You review in bulk, adjust the ones that matter most, approve the rest',
        'Listings publish to your site and marketplaces via your platform',
        'Launch newsletter and social posts are drafted from the same material',
      ],
    },
    tools: [
      'ChatGPT or Claude for product copy and analysis',
      'Your platform’s AI features (Shopify Magic and equivalents) where they’re good enough',
      'Customer-service automation connected to your policies and stock',
      'Zapier or Make for channel and inventory workflows',
    ],
    roi: 'Retailers typically cut product-listing time by 70–80% and reclaim the hours that make consistent marketing possible — which is where the revenue shows up. Faster answers also rescue abandoned purchases; “does it come in blue?” answered at 10pm is a sale.',
    faqs: [
      {
        q: 'Will AI product descriptions hurt our SEO?',
        a: 'Google’s position is that quality matters, not authorship. Thin, duplicated AI spam hurts; well-structured, accurate, distinctive descriptions help — and AI produces the latter when given real product detail and your voice. We set it up that way.',
      },
      {
        q: 'We’re a physical shop, barely online. Still relevant?',
        a: 'Yes — Google Business Profile posts, review responses, WhatsApp enquiries, supplier emails and rota admin are all shop-floor-relevant wins. Online expansion becomes easier later precisely because the content burden drops.',
      },
      {
        q: 'How do we keep our quirky voice?',
        a: 'By teaching it: examples of your best copy plus a style note make AI drafts sound like your shop, not a catalogue. You’ll still punch up the ones you love — the difference is the other two hundred exist.',
      },
    ],
    related: ['hospitality', 'trades', 'marketing-agencies'],
  },
  {
    slug: 'marketing-agencies',
    name: 'Marketing Agencies',
    title: 'AI for Marketing Agencies',
    metaDescription:
      'Practical AI for marketing agencies: research, first drafts, reporting and proposals — with governance clients can trust. Independent Manchester-based advice.',
    intro:
      'Agencies face AI from both sides: clients asking “are you using it?” and “why does this cost so much if AI exists?”, while margins depend on exactly the research, drafting and reporting work AI accelerates. The agencies winning this moment have a clear position — AI for leverage, humans for judgement, governance in writing — and charge for outcomes, not hours of typing.',
    painPoints: [
      'Unbillable proposal and pitch work eating margin',
      'Monthly reporting consuming the first week of every month',
      'Clients questioning fees “because ChatGPT could do that”',
      'Inconsistent, unofficial AI use across the team',
      'Research and audits taking days the fee doesn’t really cover',
    ],
    opportunities: [
      {
        title: 'Research and audits, compressed',
        text: 'Competitor reviews, content audits and market research structured in hours instead of days — with strategists interrogating findings rather than assembling them.',
      },
      {
        title: 'First drafts everywhere',
        text: 'Briefs, copy variants, outlines and social calendars drafted for creative refinement. The blank page disappears; the craft remains.',
      },
      {
        title: 'Reporting on rails',
        text: 'Monthly reports generated from live data with plain-English commentary drafted for account-manager review — days of the month returned to billable work.',
      },
      {
        title: 'A sellable AI position',
        text: 'A documented internal AI policy and workflow — what you use, what you never use it for, how client data is protected — that turns awkward client questions into a trust advantage.',
      },
    ],
    workflow: {
      title: 'Example: monthly client reporting, automated',
      steps: [
        'Analytics, ads and social data pull automatically at month end',
        'Performance summaries and anomaly flags are drafted per client against their KPIs',
        'Account managers add strategic commentary — the part clients pay for — and approve',
        'Branded reports go out the same week, not the same month',
        'Recurring client questions get drafted answers from the data, ready for the review call',
      ],
    },
    tools: [
      'Claude or ChatGPT (team tier) with shared prompts and projects',
      'Reporting automation (Looker Studio plus connectors, or your stack’s native tools)',
      'Zapier or Make for data and workflow plumbing',
      'A written AI policy — increasingly requested in procurement',
    ],
    roi: 'Agencies typically recover 20–30% of delivery time on research, drafting and reporting — either margin or capacity for new clients without hires. Faster proposals also lift win rates: first credible response still wins pitches.',
    faqs: [
      {
        q: 'Should we tell clients we use AI?',
        a: 'Yes — on your terms, before they ask. A one-page statement of how you use it (leverage, never judgement; their data protected; humans accountable) reads as maturity. Getting caught using it quietly reads as the opposite.',
      },
      {
        q: 'Is AI-assisted content bad for clients’ SEO?',
        a: 'Lazy AI content is. Well-briefed, edited, genuinely useful content performs regardless of how the first draft appeared — and your value shifts to strategy, briefing and editing, which is where it always really was.',
      },
      {
        q: 'How do we stop everyone using different tools chaotically?',
        a: 'A team setup: shared business-tier accounts, a prompt library, clear data rules, and a half-day of training. That’s precisely the AI Essentials Workshop plus implementation — most agencies sort it in a fortnight.',
      },
    ],
    related: ['recruitment', 'professional-services', 'retail'],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    title: 'AI for Financial Services',
    metaDescription:
      'Compliant, practical AI for financial advisers, mortgage brokers and planners: meeting notes, suitability drafting, client communication. Independent North West advice.',
    intro:
      'Advisers, planners and brokers spend astonishing amounts of regulated-professional time on documentation — meeting notes, suitability letters, annual reviews, chasing providers. AI can compress much of it, but this is a sector where “move fast” is terrible advice. The right approach is deliberate: compliant tools, documented processes, adviser sign-off on everything. Done that way, it’s transformative.',
    painPoints: [
      'Every client meeting generating an hour of write-up',
      'Suitability and review letters bottlenecking client capacity',
      'Provider chasing consuming paraplanner and admin time',
      'Annual reviews arriving in waves that swamp small teams',
      'Compliance anxiety blocking any AI adoption at all',
    ],
    opportunities: [
      {
        title: 'Meeting notes that write themselves',
        text: 'Recorded meetings (with client consent) become structured file notes, action lists and follow-up letter drafts — adviser-reviewed, compliance-friendly, done the same day.',
      },
      {
        title: 'Suitability drafting',
        text: 'First-draft suitability and review letters built from your templates, the client file and meeting outcomes — for adviser judgement and sign-off, in a fraction of the writing time.',
      },
      {
        title: 'Client communication',
        text: 'Plain-English explanations, update letters and newsletter content drafted in your firm’s voice, improving contact frequency without eating adviser time.',
      },
      {
        title: 'Admin automation',
        text: 'Provider chase sequences, document collection and review scheduling automated with clear audit trails.',
      },
    ],
    workflow: {
      title: 'Example: annual review, compressed',
      steps: [
        'Review meeting is recorded with the client’s documented consent',
        'A structured file note and action list are drafted within minutes of ending',
        'The review letter draft is generated against your template and the client’s file',
        'The adviser reviews, amends and signs off — judgement untouched, typing removed',
        'Actions route to admin automatically, with provider chases scheduled',
      ],
    },
    tools: [
      'Business/enterprise-tier Claude or ChatGPT with no-training agreements',
      'Adviser-focused meeting-note tools where they fit your back office',
      'Microsoft Copilot in 365-based firms',
      'Your back-office system — integrated where it allows, never bypassed',
    ],
    roi: 'Firms typically save 5–8 hours per adviser per week and materially increase client capacity without hiring paraplanners. Same-day file notes also strengthen compliance rather than weakening it — fresher records, consistent structure.',
    faqs: [
      {
        q: 'Is any of this acceptable to the FCA?',
        a: 'The FCA regulates outcomes, not tools: Consumer Duty, suitability and record-keeping obligations are unchanged. AI drafting with adviser review and sign-off, documented in your processes, is increasingly common across the sector — including at the networks. What’s unacceptable is unmanaged use, which is what a proper setup eliminates.',
      },
      {
        q: 'What about client data confidentiality?',
        a: 'Non-negotiable foundations: enterprise agreements with no-training clauses, UK/EU data handling, retention controls, and staff rules with teeth. If a tool can’t meet that bar, it doesn’t get used. This is the first workstream in any financial-services implementation I do.',
      },
      {
        q: 'Our network/compliance provider is cautious. How do we proceed?',
        a: 'With them, not around them — a documented proposal of tools, controls and processes to review. I’ve found compliance teams respond far better to a governed plan than to discovering informal usage later, which is the realistic alternative.',
      },
    ],
    related: ['accountants', 'solicitors', 'professional-services'],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    title: 'AI for Professional Services',
    metaDescription:
      'Practical AI for consultancies and professional firms: proposals, reports, meeting notes and knowledge management. Independent advice from a Manchester consultant.',
    intro:
      'Consultancies, surveyors, architects, engineers, HR and IT firms — professional services businesses sell expertise delivered through documents and conversations. AI is the biggest change to that delivery mechanism in decades: the expertise stays scarce and human, while the documents around it get dramatically cheaper to produce. Firms that grasp this pull ahead quietly.',
    painPoints: [
      'Proposals and bids consuming senior time the fee never repays',
      'Every engagement generating reports that take days to write',
      'Meeting follow-ups and actions slipping in busy weeks',
      'Firm knowledge trapped in old project folders nobody searches',
      'Utilisation targets squeezed by non-billable admin',
    ],
    opportunities: [
      {
        title: 'Proposals from precedent',
        text: 'New proposals drafted from your best past submissions plus the prospect’s specifics — senior review replaces senior authorship.',
      },
      {
        title: 'Report acceleration',
        text: 'Findings, notes and data structured into first-draft reports in your house style, cutting write-up time by half or more while keeping conclusions expert-owned.',
      },
      {
        title: 'Meetings handled',
        text: 'Recorded meetings become notes, actions and follow-up emails automatically — nothing dropped, nothing typed twice.',
      },
      {
        title: 'Living knowledge base',
        text: 'Past projects, methodologies and lessons made searchable in plain language, so the firm’s collective experience is available to everyone, not just whoever remembers.',
      },
    ],
    workflow: {
      title: 'Example: engagement report, halved',
      steps: [
        'Site notes, interview transcripts and data land in the project folder',
        'A structured draft is generated against your report template and house style',
        'The consultant reworks analysis and conclusions — the expertise layer',
        'Exec summary, client email and presentation outline are drafted from the final report',
        'The engagement’s lessons file into the searchable knowledge base',
      ],
    },
    tools: [
      'Claude (strong long-document work) or ChatGPT, business tier',
      'Microsoft Copilot for 365-centric firms',
      'Transcription tooling for meetings and interviews',
      'Knowledge-base tooling fitted to your document store',
    ],
    roi: 'Firms typically lift effective utilisation by 10–20% — through faster reports and proposals rather than longer hours. Proposal capacity often doubles, and win rates improve when responses arrive first with equal quality.',
    faqs: [
      {
        q: 'Our clients pay for OUR thinking. Isn’t AI a betrayal of that?',
        a: 'Clients pay for judgement, and judgement isn’t typing. Nobody feels betrayed that you use spreadsheets instead of ledger books. Be ready to explain your AI practice openly: leverage on production, humans on analysis and accountability. Framed that way, it builds trust.',
      },
      {
        q: 'What about professional indemnity implications?',
        a: 'Your PI position is strongest with documented process: AI drafts, qualified professional reviews and approves, records kept. That’s the standard I implement. Some insurers now ask about AI use at renewal — a written policy turns that question into a non-event.',
      },
      {
        q: 'Where should a 10-person consultancy start?',
        a: 'Meeting notes and proposal drafting — high pain, low risk, no integration required. Then reports, then knowledge base. The free AI Opportunity Review sequences it for your specific firm.',
      },
    ],
    related: ['accountants', 'solicitors', 'marketing-agencies'],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
