/**
 * Service × area landing pages, e.g. "AI Training Manchester".
 * Training and workshops are deliberately combined into one strong page per
 * area (they target the same search intent) to avoid thin duplicate pages.
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
    slug: 'ai-training-manchester',
    serviceSlug: 'ai-essentials-workshop',
    areaName: 'Manchester',
    h1: 'AI Training & Workshops in Manchester',
    metaTitle: 'AI Training Manchester - Practical Workshops for Teams | Delveinai',
    metaDescription:
      'Hands-on AI training in Manchester for small business teams. Half-day workshops using your real work, ChatGPT, Claude, Copilot. Delivered at your office by a local specialist.',
    intro:
      'Most AI training is a webinar someone half-watches. This is different: a half-day, in-person workshop at your Manchester office where your team completes real work with AI, your documents, your emails, your workflows, and leaves with skills they use that same afternoon. No slides about the future of work; just practical capability, built in a morning.',
    localAngle:
      'Being Manchester based means this isn’t a trainer with a train ticket. I can visit before the session to understand how your team works, run the workshop anywhere from Ancoats to Didsbury without travel costs, and come back for the follow-up in person. Manchester’s mix of agencies, practices and growing SMEs also means the exercises draw on genuinely local, relevant examples rather than Silicon Valley case studies.',
    faqs: [
      {
        q: 'Where in Manchester do you run workshops?',
        a: 'At your premises anywhere in Greater Manchester, city centre, MediaCity, the suburbs. If you don’t have a suitable space, I can arrange a city-centre meeting room.',
      },
      {
        q: 'How many people can attend?',
        a: 'Three to twenty works best. Larger Manchester teams usually split into two focused sessions, often by function, so every exercise stays relevant to the room.',
      },
    ],
    locationSlugs: ['manchester', 'salford', 'trafford', 'stockport'],
  },
  {
    slug: 'ai-automation-manchester',
    serviceSlug: 'workflow-automation',
    areaName: 'Manchester',
    h1: 'AI Automation in Manchester',
    metaTitle: 'AI Automation Manchester - Workflow Automation for SMEs | Delveinai',
    metaDescription:
      'Workflow and AI automation for Manchester small businesses: quotes, invoicing, enquiries, reporting. Built with tools you already own, by a local independent specialist.',
    intro:
      'Every Manchester business I meet has the same shape of problem: skilled people spending hours moving information between inboxes, spreadsheets and systems. Automation fixes that permanently: enquiries answered in minutes, orders processed without re-keying, reports that assemble themselves. It all runs on dependable tools like Zapier, Make and Power Automate, with AI added where it genuinely earns its place.',
    localAngle:
      'Manchester’s economy runs on agencies, professional practices and fast-growing SMEs, businesses where response speed wins work. The automations I build most often here are enquiry handling for agencies competing on turnaround, document workflows for Spinningfields-style practices, and quote automation for the trades and industrial firms ringing the city. Being local means mapping your workflow at your desk, not over a discovery questionnaire.',
    faqs: [
      {
        q: 'What does automation typically cost for a Manchester SME?',
        a: 'Fixed price per project, agreed after the free review, most first automations land in the hundreds to low thousands, with running costs of £20–60 a month. The report includes the expected payback before you commit.',
      },
      {
        q: 'Can you work with our existing Manchester IT support?',
        a: 'Yes, and I prefer to: I build the workflows, and your IT provider keeps doing what they do. Everything is documented and handed over, so you’re never dependent on me.',
      },
    ],
    locationSlugs: ['manchester', 'trafford', 'salford', 'bury'],
  },
  {
    slug: 'ai-implementation-manchester',
    serviceSlug: 'ai-setup-implementation',
    areaName: 'Manchester',
    h1: 'AI Implementation in Manchester',
    metaTitle: 'AI Implementation Manchester - Setup Done Properly | Delveinai',
    metaDescription:
      'AI setup and implementation for Manchester businesses: tool selection, secure configuration, GDPR-aware data settings and team onboarding. Fixed prices, local specialist.',
    intro:
      'There’s a gap between signing up for AI tools and actually getting value from them, and most Manchester businesses I meet are stuck in it: a scatter of personal ChatGPT accounts, default privacy settings, and no shared way of working. Implementation closes that gap: the right tools chosen for your business, configured securely, connected to where your work lives, and a team that actually uses them.',
    localAngle:
      'Working across Manchester’s professional and creative economy means the security conversation is never theoretical, client confidentiality, GDPR and professional obligations come up in almost every engagement, and every setup I deliver is built around them. It also means I can be at your office within the hour when implementation hits the inevitable “can you just look at this?” moment.',
    faqs: [
      {
        q: 'How long does implementation take for a typical Manchester business?',
        a: 'One to three weeks for most 5–50 person businesses, tool setup and security configuration in week one, workflows and templates in week two, team onboarding to finish. You keep working normally throughout.',
      },
      {
        q: 'We already have Microsoft 365 through a Manchester IT provider. Does that change things?',
        a: 'It often makes things easier, Copilot within your existing 365 tenancy can be the most cost-effective and secure route, and I’ll work alongside your provider to switch it on properly rather than selling you something new.',
      },
    ],
    locationSlugs: ['manchester', 'stockport', 'altrincham', 'salford'],
  },

  // ── Liverpool ─────────────────────────────────────────────────────────
  {
    slug: 'ai-training-liverpool',
    serviceSlug: 'ai-essentials-workshop',
    areaName: 'Liverpool',
    h1: 'AI Training & Workshops in Liverpool',
    metaTitle: 'AI Training Liverpool - Hands-On Workshops for Teams | Delveinai',
    metaDescription:
      'Practical AI training in Liverpool for small business teams. Half-day hands-on workshops at your office using your real work. ChatGPT, Claude and Copilot covered.',
    intro:
      'Liverpool teams don’t need another generic AI webinar, they need a morning where everyone actually gets hands-on: drafting real emails, summarising real documents, automating a real weekly task, and agreeing sensible ground rules as a team. That’s what this workshop delivers, at your office, pitched for people who’ve never touched AI as much as for the quiet enthusiasts already using it.',
    localAngle:
      'I run workshops across Liverpool regularly, from Baltic Triangle studios to commercial-district firms and hospitality teams. The exercises flex to the room: creative teams work on briefs and research, professional firms on correspondence and summarising, hospitality on enquiries and reviews. And because Liverpool is a 45-minute trip, follow-up visits and repeat sessions are simple to arrange, not an annual event.',
    faqs: [
      {
        q: 'Do you charge travel for Liverpool workshops?',
        a: 'No, Liverpool is inside my standard area, and workshop pricing is the same across the North West.',
      },
      {
        q: 'Can you train mixed teams, office and front-of-house together?',
        a: 'Yes, and for hospitality and visitor businesses it often works brilliantly: front-of-house sees where enquiries go, office sees what guests actually ask. Shared understanding is half the value.',
      },
    ],
    locationSlugs: ['liverpool', 'wirral', 'sefton', 'knowsley'],
  },
  {
    slug: 'ai-automation-liverpool',
    serviceSlug: 'workflow-automation',
    areaName: 'Liverpool',
    h1: 'AI Automation in Liverpool',
    metaTitle: 'AI Automation Liverpool - Workflow Automation for SMEs | Delveinai',
    metaDescription:
      'Workflow and AI automation for Liverpool businesses: enquiry handling, bookings, freight admin and reporting. Practical builds with a month of included support.',
    intro:
      'Liverpool businesses lose hours in predictable places: hospitality enquiries flooding in around the clock, freight and shipping paperwork re-keyed between portals, agencies assembling the same reports every month. These are exactly the workflows automation removes, reliably, affordably, and without replacing any system you already run.',
    localAngle:
      'The Liverpool builds I’m asked for most reflect the city’s economy: booking and enquiry automation for the visitor economy, document extraction for maritime and logistics offices around the port, and proposal-and-reporting workflows for the Baltic Triangle’s creative firms. Every build is tested against your real data, documented, and supported for a month after go-live, and I’m up the M62 when on-site help is needed.',
    faqs: [
      {
        q: 'Our booking platform is quite locked down. Can you still automate around it?',
        a: 'Almost always, even closed platforms send emails and export data, and that’s enough to automate confirmations, follow-ups and reporting around them. The free review will map what’s realistically possible before you spend anything.',
      },
      {
        q: 'How quickly could a Liverpool business have its first automation live?',
        a: 'Typically within two weeks of starting: one week to build against your real examples, a few days of parallel testing, then go-live with alerts watching for anything unusual.',
      },
    ],
    locationSlugs: ['liverpool', 'knowsley', 'st-helens', 'wirral'],
  },
  {
    slug: 'ai-implementation-liverpool',
    serviceSlug: 'ai-setup-implementation',
    areaName: 'Liverpool',
    h1: 'AI Implementation in Liverpool',
    metaTitle: 'AI Implementation Liverpool - Secure AI Setup for SMEs | Delveinai',
    metaDescription:
      'AI setup and implementation for Liverpool businesses: tool selection, secure GDPR-aware configuration, and team onboarding. Independent, fixed-price, hands-on.',
    intro:
      'Plenty of Liverpool businesses have “tried AI”, a few ChatGPT experiments, maybe a Copilot licence, without ever getting a proper setup: business accounts with the right privacy settings, tools connected to actual workflows, and a team trained on the result. Implementation is that missing step, done hands-on and handed over documented, so the capability belongs to your business rather than to me.',
    localAngle:
      'Liverpool implementations tend to have strong sector flavours, confidentiality-first setups for the commercial district’s professional firms, multi-channel enquiry handling for hospitality groups, and data-heavy workflows for freight and maritime businesses. I deliver on site across the city and the wider region, with the same fixed-price, no-lock-in approach everywhere.',
    faqs: [
      {
        q: 'Can you implement AI for a multi-site Liverpool hospitality group?',
        a: 'Yes, multi-site groups are ideal candidates, because one properly built setup (enquiry handling, review responses, menus as a single source of truth) rolls out across every venue at almost no extra cost.',
      },
      {
        q: 'Who owns the setup afterwards?',
        a: 'You do, entirely: your accounts, your automations, your documentation. Ongoing support is available if you want it, but nothing is designed to require it.',
      },
    ],
    locationSlugs: ['liverpool', 'sefton', 'wirral', 'st-helens'],
  },

  // ── Cheshire ──────────────────────────────────────────────────────────
  {
    slug: 'ai-training-cheshire',
    serviceSlug: 'ai-essentials-workshop',
    areaName: 'Cheshire',
    h1: 'AI Training & Workshops in Cheshire',
    metaTitle: 'AI Training Cheshire - Workshops in Chester, Wilmslow & Beyond | Delveinai',
    metaDescription:
      'Hands-on AI training across Cheshire, Chester, Wilmslow, Macclesfield, Northwich, Crewe. Half-day workshops for small business teams using your real work.',
    intro:
      'Cheshire’s businesses are disproportionately professional, advisers, agents, consultants, specialist suppliers, which makes team AI training unusually valuable here: language-heavy work is exactly what AI accelerates. The workshop is a half day at your premises, hands-on from the first ten minutes, and finishes with your team owning a prompt library and a usage policy written for your firm.',
    localAngle:
      'I deliver across the county, Chester’s professional quarter, Wilmslow and Alderley Edge’s advisory firms, Macclesfield’s life-sciences suppliers, and the industrial and logistics businesses around Northwich, Winsford and Crewe. Cheshire sessions often lean into data protection (fittingly, with the ICO based in Wilmslow), so confident, compliant use of client data is a standing theme rather than a footnote.',
    faqs: [
      {
        q: 'Can you run a joint session for a few small Cheshire firms together?',
        a: 'Yes, two or three non-competing firms sharing a session works well and splits the cost. Several Cheshire accountants and advisers have done exactly this.',
      },
      {
        q: 'Do you cover rural Cheshire businesses?',
        a: 'Yes, anywhere in the county. Land agents, rural enterprises and village-based firms have the same drafting and admin burdens as anyone, and often the smallest teams to carry them.',
      },
    ],
    locationSlugs: ['chester', 'wilmslow', 'macclesfield', 'northwich', 'crewe'],
  },
  {
    slug: 'ai-automation-cheshire',
    serviceSlug: 'workflow-automation',
    areaName: 'Cheshire',
    h1: 'AI Automation in Cheshire',
    metaTitle: 'AI Automation Cheshire - Practical Workflow Automation | Delveinai',
    metaDescription:
      'Workflow and AI automation for Cheshire businesses, client onboarding, quoting, compliance paperwork and reporting. Fixed prices, built on tools you already own.',
    intro:
      'Across Cheshire, the automation opportunities cluster around client work: onboarding sequences for advisers and agents, quoting for engineering and industrial suppliers, compliance documentation for regulated firms, and the eternal re-keying between email and systems. All of it is automatable with dependable tools, and the payback maths for professional firms, where saved hours are billable hours, is usually the best I see anywhere.',
    localAngle:
      'Cheshire engagements range from Chester law firms automating client-care correspondence to mid-Cheshire industrial suppliers automating order paperwork, with plenty of Wilmslow and Macclesfield advisory practices between. The county’s high concentration of regulated businesses means every build starts with data handling, what may flow where, before a single workflow is switched on.',
    faqs: [
      {
        q: 'Our Cheshire practice is regulated, can automation still apply?',
        a: 'Yes; regulation shapes the design rather than preventing it. Automations handle drafting, routing and chasing, while approvals and judgement stay with qualified people, and the whole flow is documented for your compliance file.',
      },
      {
        q: 'Do you support automations after they go live?',
        a: 'Every build includes a month of support, and ongoing monthly support is available after that. Builds also include error alerts, so problems announce themselves rather than hiding.',
      },
    ],
    locationSlugs: ['chester', 'northwich', 'crewe', 'macclesfield', 'wilmslow'],
  },
  {
    slug: 'ai-implementation-cheshire',
    serviceSlug: 'ai-setup-implementation',
    areaName: 'Cheshire',
    h1: 'AI Implementation in Cheshire',
    metaTitle: 'AI Implementation Cheshire - Secure Setup for Professional Firms | Delveinai',
    metaDescription:
      'AI implementation for Cheshire businesses: tool selection, secure GDPR-aware setup and team onboarding for professional firms and SMEs across the county.',
    intro:
      'Cheshire firms tend to ask the right first question about AI: not “what can it do?” but “how do we use it without risking client data?” Implementation answers it in practice, business-grade tools with training opt-outs and retention controls, written rules your team actually follows, workflows configured for your real work, and onboarding that makes it stick.',
    localAngle:
      'The typical Cheshire implementation is a professional practice of five to thirty people, advisers, solicitors, accountants, agents, moving from informal personal-account AI use to a governed setup. With the ICO headquartered in the county, Cheshire firms are noticeably alert to data protection, and the documentation pack every implementation includes (what’s configured, what’s permitted, who approved it) is written with exactly that scrutiny in mind.',
    faqs: [
      {
        q: 'How do you handle firms spread across Cheshire offices?',
        a: 'One setup, rolled out per office, configuration is done once, then each office gets its onboarding session. Chester plus a Wilmslow branch is a very normal shape for this work.',
      },
      {
        q: 'What if we decide AI isn’t for us after the review?',
        a: 'Then you’ve spent fifteen minutes and gained a free report saying so honestly. Implementation only makes sense where the review shows genuine, valuable use, I’d rather say “not yet” than deliver something that gathers dust.',
      },
    ],
    locationSlugs: ['wilmslow', 'chester', 'macclesfield', 'northwich', 'crewe'],
  },

  // ── Warrington ────────────────────────────────────────────────────────
  {
    slug: 'ai-training-warrington',
    serviceSlug: 'ai-essentials-workshop',
    areaName: 'Warrington',
    h1: 'AI Training & Workshops in Warrington',
    metaTitle: 'AI Training Warrington - Practical Team Workshops | Delveinai',
    metaDescription:
      'Hands-on AI training in Warrington for small business teams, logistics offices, consultancies and professional firms. Half-day workshops using your real work.',
    intro:
      'Warrington teams work in fast, structured environments, transport offices, engineering consultancies, professional firms, where a vague “introduction to AI” is useless but a hands-on session using the team’s actual bookings, bids and correspondence changes how the office runs. That’s the workshop: half a day, at your premises, real work from the start, ground rules agreed by the end.',
    localAngle:
      'Twenty-five minutes down the M62 from my base, Warrington is one of my most regular destinations. Sessions here often split by function, a transport-office group working on booking emails and status updates, a consultancy group on bid drafting and report summaries, because Warrington businesses usually know exactly which team is drowning. Birchwood consultancies should note: data-classification rules are built into the exercises, not bolted on.',
    faqs: [
      {
        q: 'Can you run the workshop across two shifts for our transport office?',
        a: 'Yes, a morning and an afternoon session covering the same ground works well for offices that can’t all step away at once.',
      },
      {
        q: 'Is the workshop relevant for our warehouse staff too?',
        a: 'The office side benefits most, but team leaders who write handovers, incident reports and rotas get real value, several Warrington clients include them, and the voice-note-to-report exercise is usually their favourite.',
      },
    ],
    locationSlugs: ['warrington', 'wigan', 'st-helens', 'manchester'],
  },
  {
    slug: 'ai-automation-warrington',
    serviceSlug: 'workflow-automation',
    areaName: 'Warrington',
    h1: 'AI Automation in Warrington',
    metaTitle: 'AI Automation Warrington - Logistics & Business Automation | Delveinai',
    metaDescription:
      'Workflow and AI automation for Warrington businesses: transport bookings, PODs, customer updates, bids and reports. Fixed-price builds by a nearby specialist.',
    intro:
      'If there’s a UK town built for automation payback, it’s Warrington: high-volume logistics operations where every booking, POD and status query is a repetitive touchpoint, next to consultancies producing structured documents to demanding standards. Automation takes the volume; AI handles the messy formats; your team handles the exceptions and the judgement.',
    localAngle:
      'The signature Warrington build is transport-office automation, booking emails parsed into jobs, proactive delivery updates replacing inbound status calls, POD paperwork filed and flagged automatically. For Birchwood’s consultancies it’s bid libraries and report assembly. Both benefit from proximity: workflow mapping happens at your desk, watching how work actually moves, which beats any remote discovery call.',
    faqs: [
      {
        q: 'Our TMS is central to everything. Do you integrate with it?',
        a: 'Where it allows, yes, most transport management systems accept email, imports or API connections, and the automation feeds it rather than replacing it. Where a TMS is fully closed, we automate around its edges: the inbox, the confirmations, the customer updates.',
      },
      {
        q: 'How measurable are the results?',
        a: 'Very, bookings processed per hour, status calls per day, and time-to-invoice are all countable before and after. Warrington clients tend to like numbers; the builds are designed to produce them.',
      },
    ],
    locationSlugs: ['warrington', 'st-helens', 'wigan', 'manchester'],
  },
  {
    slug: 'ai-implementation-warrington',
    serviceSlug: 'ai-setup-implementation',
    areaName: 'Warrington',
    h1: 'AI Implementation in Warrington',
    metaTitle: 'AI Implementation Warrington - Secure AI Setup for SMEs | Delveinai',
    metaDescription:
      'AI setup and implementation for Warrington businesses: secure configuration, data rules, workflow templates and team onboarding. Fixed prices, local delivery.',
    intro:
      'Warrington businesses considering AI usually have two constraints that matter: operational tempo (nothing can disrupt the daily run) and, for the engineering and nuclear-adjacent sector, serious data-handling obligations. Implementation respects both, everything is built and tested alongside your live operation, switched over only when proven, with data rules drawn clearly enough that speed never comes at the cost of a breach.',
    localAngle:
      'Implementations here range from logistics firms wanting enquiry and booking workflows configured properly, to Birchwood consultancies needing governed, classification-aware AI setups their clients and auditors will accept. Warrington’s position, my nearest major patch outside Greater Manchester, means on-site days are easy to schedule at short notice when a project needs them.',
    faqs: [
      {
        q: 'Can you work within our existing information-security policies?',
        a: 'Yes, send them over and the setup is designed inside them. For consultancies with client-imposed security requirements, the tool choices and configurations are documented against each requirement so your compliance story is ready-made.',
      },
      {
        q: 'What does a typical Warrington implementation cost?',
        a: 'Fixed price after the free review, typically in the low thousands for a 10–50 person business including onboarding. The review report includes the quote, so the decision is made with full information.',
      },
    ],
    locationSlugs: ['warrington', 'manchester', 'st-helens', 'northwich'],
  },
];

export function getServiceAreaPage(slug: string): ServiceAreaPage | undefined {
  return serviceAreaPages.find((p) => p.slug === slug);
}
