export interface FAQEntry {
  q: string;
  a: string;
}

/** Site-wide FAQ — the real questions small business owners actually ask. */
export const siteFaqs: FAQEntry[] = [
  {
    q: 'Is AI actually suitable for a business like mine?',
    a: 'If your business involves emails, quotes, documents, enquiries or repetitive admin — and almost every business does — then yes, there will be somewhere AI can genuinely help. Whether it’s worth doing right now depends on your volumes and priorities, which is exactly what the free AI Opportunity Review works out. Sometimes the honest answer is “start small” or even “not yet”, and if that’s your answer, the report will say so.',
  },
  {
    q: 'Do I need ChatGPT? Which AI tool should we use?',
    a: 'It depends on your business, not on the hype cycle. ChatGPT, Claude and Microsoft Copilot are all excellent; the right choice comes down to what software you already use, what kind of work you do, and how you handle data. If you run on Microsoft 365, Copilot is often the natural fit. I’m independent — no reseller commissions — so the recommendation is whatever genuinely suits you.',
  },
  {
    q: 'Can we use Microsoft Copilot instead of separate AI tools?',
    a: 'Often, yes — and for Microsoft-centric businesses it can be the most cost-effective and secure option, because it works inside the tenancy where your data already lives. It isn’t automatically the best answer for every task, though, which is why tool selection is part of the review rather than an assumption.',
  },
  {
    q: 'Is AI secure? What happens to our data?',
    a: 'It can be secure, but the defaults often aren’t. The essentials: use business-tier accounts, switch off training on your data, set retention sensibly, and give staff clear rules about what never gets pasted into which tool. Every implementation I do starts with this configuration, and your AI Opportunity Report includes security notes specific to your setup.',
  },
  {
    q: 'What about GDPR?',
    a: 'AI tools can absolutely be used in line with UK GDPR — thousands of businesses do — but it requires deliberate choices: lawful basis, data minimisation, tools with proper data agreements, and not putting personal data into free consumer products. I take a security-first approach and put the rules in writing, so you can show your working if anyone ever asks.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Quick wins — better drafting, enquiry handling, meeting notes — typically land within days. A full setup (tools configured, workflows built, team trained) usually takes one to three weeks. Larger automation projects run four to eight weeks. You’ll have a realistic timeline in your report before anything starts.',
  },
  {
    q: 'How much does it cost?',
    a: 'The first step — the 15-minute call and your AI Opportunity Report — is completely free. Paid work is fixed price and agreed up front: workshops and first automations typically run from a few hundred to a low few thousand pounds, and the tools themselves usually cost £20–60 per user per month. No day rates, no open-ended engagements, no surprises.',
  },
  {
    q: 'Will AI replace my staff?',
    a: 'In small businesses, that’s rarely how it plays out. AI takes over the repetitive parts of jobs — the re-typing, the standard emails, the write-ups — and gives your existing team capacity to do more of the valuable work. Most of my clients use AI to grow without hiring for admin, not to reduce the team they have.',
  },
  {
    q: 'We’re not technical at all. Is that a problem?',
    a: 'Not remotely — you’re exactly who this is designed for. Everything is explained in plain English, set up for you, and taught using your own real work. If you can write an email and send a voice note, you have all the technical skill required.',
  },
  {
    q: 'What if we try it and it doesn’t work for us?',
    a: 'Then you stop, having risked very little — the review is free, tool subscriptions are monthly, and there are no long contracts anywhere in how I work. That said, the point of starting with a personalised report is to aim only at the uses with a strong chance of paying off for your specific business.',
  },
];
