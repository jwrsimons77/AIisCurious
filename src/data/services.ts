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
    slug: 'ai-opportunity-review',
    name: 'AI Opportunity Review',
    shortName: 'Opportunity Review',
    tagline: 'Find out exactly where AI could save your business time, before you spend anything.',
    metaTitle: 'AI Opportunity Review for Small Businesses | Delveinai',
    metaDescription:
      'A free 15-minute conversation and a personalised report showing where AI could genuinely save your small business time. Manchester-based, no jargon, no obligation.',
    whoFor:
      'Business owners who know AI matters but don’t know where to start. If you’ve been meaning to “look into AI” for months and haven’t had time, this is the place to begin.',
    problems: [
      'You keep hearing about AI but can’t see how it applies to your business',
      'You don’t have time to research tools, and every article contradicts the last one',
      'You’ve tried ChatGPT once or twice but it didn’t stick',
      'You’re worried about wasting money on the wrong thing',
    ],
    deliverables: [
      'A relaxed 15-minute conversation about how your business actually runs',
      'A written AI Opportunity Report, personalised to your business',
      'Your top 3–5 AI opportunities, ranked by effort and payoff',
      'Recommended tools with realistic costs',
      'Security and GDPR notes for anything involving customer data',
      'A simple 90-day starting roadmap',
    ],
    outcomes: [
      'Complete clarity on whether AI is worth your time right now',
      'A short list of practical first steps instead of a vague sense you’re falling behind',
      'Confidence to act, on your own or with help',
    ],
    timescale: 'Report delivered within 3 working days of our conversation.',
    price: 'Free, genuinely. No card, no trial, no follow-up sales sequence.',
    faqs: [
      {
        q: 'Is the review really free?',
        a: 'Yes. It’s how most clients first work with me, and plenty of people take the report and run with it themselves. That’s a good outcome, some come back later when they’re ready for more.',
      },
      {
        q: 'Do I need to prepare anything?',
        a: 'No. Just be ready to talk about a typical week in your business, what eats your time, what gets put off, what frustrates you. I’ll do the rest.',
      },
      {
        q: 'Will you try to sell me something on the call?',
        a: 'No. The call is 15 minutes and it’s about your business, not my services. The report includes options if you want help implementing, but there’s no pitch and no follow-up pressure.',
      },
    ],
  },
  {
    slug: 'ai-essentials-workshop',
    name: 'AI Essentials Workshop',
    shortName: 'Essentials Workshop',
    tagline: 'Get your whole team confident with AI in half a day, using your real work, not demos.',
    metaTitle: 'AI Essentials Workshop - Practical AI Training for Teams | Delveinai',
    metaDescription:
      'A half-day, hands-on AI workshop for small business teams across Manchester and the North West. Your team leaves using ChatGPT, Claude or Copilot on real work the same day.',
    whoFor:
      'Teams of 3–20 people who want everyone working from the same page. Ideal when a few people dabble with AI, others are sceptical, and nobody is sure what’s allowed.',
    problems: [
      'A couple of people use ChatGPT in secret; nobody knows if that’s okay',
      'Training videos are generic and don’t use your industry’s examples',
      'Staff worry AI is coming for their jobs, so they avoid it',
      'You’ve got Microsoft Copilot licences nobody actually uses',
    ],
    deliverables: [
      'Half-day workshop at your office (or online), built around your real tasks',
      'Plain-English explanation of what AI can and can’t do',
      'Hands-on exercises using your actual documents and workflows',
      'A prompt library your team keeps, written for your business',
      'A simple, sensible AI usage policy you can adopt immediately',
      'Follow-up Q&A call two weeks later',
    ],
    outcomes: [
      'Everyone leaves having completed real work with AI, not watched a demo',
      'Shared ground rules, so nobody is guessing what’s allowed',
      'Typically 2–4 hours per person per week saved within the first month',
    ],
    timescale: 'One half-day session, usually booked 1–2 weeks out.',
    faqs: [
      {
        q: 'Our team isn’t technical. Will they keep up?',
        a: 'Yes, the workshop is designed for people who’ve never used AI. If your team can write an email, they can do everything in the session. The pace is set by the room, not a slide deck.',
      },
      {
        q: 'Which tools do you cover?',
        a: 'Whatever fits your business. If you’re a Microsoft shop, we build around Copilot. Otherwise usually ChatGPT or Claude. I’m independent, so I recommend what suits you, not what pays commission.',
      },
      {
        q: 'Can you run it for a specific team, like sales or admin?',
        a: 'Absolutely, focused sessions for one team often get the best results, because every exercise uses that team’s real work.',
      },
    ],
  },
  {
    slug: 'ai-setup-implementation',
    name: 'AI Setup & Implementation',
    shortName: 'Setup & Implementation',
    tagline: 'The right tools, set up properly and securely, with your team actually using them.',
    metaTitle: 'AI Setup & Implementation for Small Businesses | Delveinai',
    metaDescription:
      'Hands-on AI setup for small businesses: tool selection, secure configuration, data protection settings and team onboarding. Fixed prices, delivered across the North West.',
    whoFor:
      'Businesses that know what they want AI to do and want it done properly, accounts configured, data settings locked down, integrations working, team trained on the result.',
    problems: [
      'You signed up for AI tools but they’re configured with default (insecure) settings',
      'Nobody connected AI to the systems where your work actually lives',
      'Every employee uses a personal account, so there’s no control or consistency',
      'You don’t know whether your setup is GDPR-sound',
    ],
    deliverables: [
      'Tool selection based on your workflows, budget and existing software',
      'Business accounts set up with sensible security and data-privacy settings',
      'Data-protection review: what can and can’t go into each tool',
      'Custom instructions and templates for your most common tasks',
      'Team onboarding session so the setup gets used',
      'Handover document your business owns, no lock-in',
    ],
    outcomes: [
      'AI tools that are safe, consistent and actually adopted',
      'Clear rules about customer data everyone understands',
      'A setup you own and control, documented in plain English',
    ],
    timescale: 'Typically 1–3 weeks depending on scope.',
    faqs: [
      {
        q: 'We already pay for Microsoft 365. Can you work with that?',
        a: 'Yes, for many businesses, switching on and properly configuring Copilot within Microsoft 365 is the most cost-effective route, because your data already lives there. I’ll tell you honestly if that’s your best option.',
      },
      {
        q: 'What about our customer data and GDPR?',
        a: 'It’s central to every setup. We review what data each tool would touch, configure training-data opt-outs and retention settings, and document what must never be pasted into which tool. You get this in writing.',
      },
      {
        q: 'Do you charge day rates?',
        a: 'No, fixed prices agreed up front, based on a defined scope. You’ll know the full cost before we start.',
      },
    ],
  },
  {
    slug: 'workflow-automation',
    name: 'Workflow Automation',
    shortName: 'Automation',
    tagline: 'Hand your repetitive admin to software that never gets bored.',
    metaTitle: 'Workflow Automation for Small Businesses | Delveinai',
    metaDescription:
      'Practical workflow automation for small businesses in the North West: quotes, invoicing, email triage, data entry and reporting, built with tools you already pay for.',
    whoFor:
      'Businesses drowning in repetitive tasks: re-typing data between systems, sending the same emails, chasing the same documents, assembling the same reports every month.',
    problems: [
      'Information gets copied by hand between email, spreadsheets and your CRM',
      'Quotes and invoices take days because they sit in someone’s to-do pile',
      'Enquiries go unanswered overnight and leads go cold',
      'Month-end reporting swallows entire days',
    ],
    deliverables: [
      'A mapping session to find your most automatable workflows',
      'Automations built with dependable tools (Zapier, Make, Power Automate) plus AI where it earns its place',
      'Testing with your real data before anything goes live',
      'Documentation and a recorded walkthrough for your team',
      'A month of included support after go-live',
    ],
    outcomes: [
      'Hours of admin removed every week, permanently',
      'Faster responses to customers, often the same hour instead of the next day',
      'Fewer copy-paste errors and missed follow-ups',
    ],
    timescale: 'First automation usually live within 2 weeks.',
    faqs: [
      {
        q: 'Will automation break when our software updates?',
        a: 'The platforms I build on (Zapier, Make, Power Automate) maintain their integrations, which is exactly why I use them instead of fragile custom scripts. Every build includes error alerts, so if something does hiccup you know immediately.',
      },
      {
        q: 'We use quite niche industry software. Can you still help?',
        a: 'Usually, yes. Most niche tools have an export, an email trail, or an API somewhere. In the mapping session we’ll find the practical route, and if a workflow genuinely can’t be automated well, I’ll say so.',
      },
      {
        q: 'Is this the same as AI?',
        a: 'They overlap. Automation moves information between systems automatically; AI adds judgement, drafting the reply, summarising the document, categorising the enquiry. The best builds combine both, but only where each earns its keep.',
      },
    ],
  },
  {
    slug: 'ongoing-ai-support',
    name: 'Ongoing AI Support',
    shortName: 'Ongoing Support',
    tagline: 'A knowledgeable person to call as AI changes, without hiring anyone.',
    metaTitle: 'Ongoing AI Support & Advice for Small Businesses | Delveinai',
    metaDescription:
      'Monthly AI support for small businesses: a regular check-in, help when tools change, new opportunities spotted, and questions answered, without hiring anyone.',
    whoFor:
      'Businesses already using AI that want to keep improving. AI tools change monthly; this keeps you current without anyone on your team having to follow the news.',
    problems: [
      'Tools keep changing and nobody has time to keep up',
      'Questions pile up with nowhere sensible to ask them',
      'Your setup worked great six months ago and has quietly gone stale',
      'New starters never get shown how your business uses AI',
    ],
    deliverables: [
      'A monthly call to review what’s working and what’s changed',
      'Email support between calls for quick questions',
      'Updates when a tool change actually matters to you (and silence when it doesn’t)',
      'Small fixes and improvements included, not quoted separately',
      'Onboarding help for new team members',
    ],
    outcomes: [
      'Your AI setup improves over time instead of decaying',
      'Questions answered in hours, not left to fester',
      'One predictable monthly cost instead of surprise consultancy invoices',
    ],
    timescale: 'Monthly, rolling. Cancel any time, no long contracts.',
    faqs: [
      {
        q: 'Is there a minimum contract?',
        a: 'No. It rolls monthly and you can stop whenever you like. Support that’s worth paying for shouldn’t need a lock-in to keep you.',
      },
      {
        q: 'What counts as a “quick question”?',
        a: 'Anything you can ask in an email: “Is this tool safe to use?”, “Why did this prompt stop working?”, “Should we look at this new thing everyone’s talking about?” If something needs real project work, I’ll quote it separately and honestly.',
      },
      {
        q: 'We haven’t started with AI yet. Is this for us?',
        a: 'Probably not yet, start with the free AI Opportunity Review and get some quick wins in place first. Ongoing support makes sense once there’s something to support.',
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
