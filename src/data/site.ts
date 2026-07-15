/**
 * Central site configuration.
 * Update contact details, booking links and form endpoints here.
 */
export const site = {
  name: 'AIisCurious',
  tagline: 'Helping small businesses take their first confident step into AI.',
  url: 'https://www.aiiscurious.co.uk',
  founder: 'James',
  email: 'hello@aiiscurious.co.uk',
  region: 'Manchester & the North West',
  address: {
    locality: 'Manchester',
    region: 'Greater Manchester',
    country: 'GB',
  },
  geo: {
    latitude: 53.4808,
    longitude: -2.2426,
  },
  /**
   * Scheduling link, replace with your live Calendly / Microsoft Bookings /
   * Google Calendar appointment link. Every "book a call" button uses this.
   */
  bookingUrl: '/book/',
  calendlyUrl: 'https://calendly.com/jwrsimons/30min',
  // The booking form uses Netlify Forms (form name: "booking").
  // Configure notification emails in Netlify: Site → Forms → Notifications.
  social: {
    linkedin: 'https://www.linkedin.com/company/aiiscurious',
  },
} as const;

export const ctaPrimary = 'Get My Free AI Opportunity Report';
export const ctaSecondary = 'See How It Works';
