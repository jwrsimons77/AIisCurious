/**
 * Central site configuration.
 * Update contact details, booking links and form endpoints here.
 */
export const site = {
  name: 'Delveinai',
  tagline: 'Helping small businesses take their first confident step into AI.',
  // TODO: switch to the new Delveinai domain (e.g. 'https://www.delveinai.co.uk')
  // once it's registered and its DNS is connected in Netlify. Until then the
  // real live site is the netlify.app URL, and canonical/OG tags must match it.
  url: 'https://aiiscurious.netlify.app',
  founder: 'James',
  // TODO: point at a working inbox on the new Delveinai domain once its email
  // (MX) records are set up.
  email: 'hello@delveinai.co.uk',
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
  /**
   * Meta (Facebook) Pixel ID for ad conversion tracking. Leave empty to
   * disable entirely. When set, the pixel loads ONLY after the visitor
   * accepts the cookie banner (UK GDPR/PECR requirement), and the
   * /book/thanks/ page fires a Lead event.
   * Find yours in Meta Events Manager: a 15-16 digit number.
   */
  metaPixelId: '',
  /**
   * Google Analytics 4 measurement ID (format "G-XXXXXXXXXX"), from
   * Google Analytics → Admin → Data streams. Leave empty to disable.
   * Loads via the same consent-gated gtag.js as Google Ads, below.
   */
  ga4MeasurementId: '',
  /**
   * Google Ads conversion ID (format "AW-XXXXXXXXX") and the conversion
   * label for the booking event, both from Google Ads → Tools → Conversions
   * → your conversion action → "Use Google tag" → event snippet. Leave
   * either empty to disable Google Ads conversion tracking. Fires a
   * "conversion" event on /book/thanks/, gated by the same consent banner.
   */
  googleAdsId: '',
  googleAdsConversionLabel: '',
  // The booking form uses Netlify Forms (form name: "booking").
  // Configure notification emails in Netlify: Site → Forms → Notifications.
  social: {
    // TODO: create/rename the LinkedIn company page to match the new brand.
    linkedin: 'https://www.linkedin.com/company/delveinai',
  },
} as const;

export const ctaPrimary = 'Get My Free AI Opportunity Report';
export const ctaSecondary = 'See How It Works';
