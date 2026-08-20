export interface FAQEntry {
  q: string;
  a: string;
}

/** Site-wide FAQ, the real questions small business owners actually ask. */
export const siteFaqs: FAQEntry[] = [
  {
    q: 'How much does a small business website cost?',
    a: 'A brochure site for a small business is typically a low four-figure fixed price; sites with online shops, booking systems or many location pages cost more. You get the full number up front, from a written scope, before anything starts. No day rates, no open-ended engagements, and no invoice at the end that’s bigger than the quote at the start. Hosting and care afterwards is a modest monthly cost, and you’re never tied into it.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Three to six weeks is typical for a small business site, four to eight if there’s a shop attached. The honest bottleneck is usually content: photos, staff bios and product details coming back from your side. I’ll give you a short, specific list of what I need at kick-off so it doesn’t drift.',
  },
  {
    q: 'Do you use WordPress, Squarespace or something else?',
    a: 'Whatever genuinely suits you, not whatever I prefer to build. Most small business sites end up faster, cheaper to run and much safer as static sites with a simple editor on top. WordPress makes sense when you need a specific plugin or already have a team using it. Shopify is usually right for selling products. I’ll explain the trade-offs in plain English and you decide.',
  },
  {
    q: 'Will I be able to update the website myself?',
    a: 'Yes, and without ringing me first. You get an editor built for normal people, plus a recorded walkthrough for your team. Most clients handle their own text, photos and posts, and keep me for the bigger changes. If you’d rather not touch it at all, the care plan includes an hour of edits a month.',
  },
  {
    q: 'Will a new website lose our Google rankings?',
    a: 'Not if the migration is done properly, and protecting them is part of every rebuild. Existing URLs are mapped and redirected, page titles are carried across or improved, structured data is rebuilt, and I watch Search Console for the first month after launch to catch anything that slips. Rankings usually improve, because the new site is faster and better organised.',
  },
  {
    q: 'Do I own the website when it’s finished?',
    a: 'Completely. The code, the content, the domain and the hosting account are all yours, in your name, and you can take them elsewhere whenever you like. No proprietary platform you can only rent, and no holding your domain hostage. If you leave, I hand everything over properly.',
  },
  {
    q: 'What about mobile phones and accessibility?',
    a: 'Both are built in, not added at the end. Every site is designed mobile-first and tested on real phones, because that’s where most of your visitors are. Accessibility is built to WCAG 2.2 AA: proper heading structure, keyboard navigation, real contrast ratios and alt text. It’s the right thing to do, it’s increasingly a legal expectation, and it happens to help your search rankings too.',
  },
  {
    q: 'Can you help us get found on Google?',
    a: 'Yes. Every build includes the on-page fundamentals: sensible titles, structured data, fast loading, a sitemap and a Google Business Profile that matches your site. Ongoing local SEO, ranking in the map pack for the towns you serve, is a separate service, because it’s continuing work rather than a one-off switch.',
  },
  {
    q: 'We’re not technical at all. Is that a problem?',
    a: 'Not remotely, you’re exactly who this is designed for. Nothing gets explained in jargon, nothing gets decided without you understanding the choice, and you’ll never be made to feel daft for asking what something means. If you can send an email, you can run the site I build you.',
  },
  {
    q: 'What if we don’t like the design?',
    a: 'You see the design before it gets built, and there are revision rounds written into the fixed price specifically so you can say “not quite” without it costing extra. The discovery session exists to get the direction right first, which is why genuine surprises at design stage are rare.',
  },
];
