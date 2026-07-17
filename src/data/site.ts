/**
 * Central site configuration.
 * Update contact details, booking links and form endpoints here.
 */
export const site = {
  name: 'Delveinai',
  tagline: 'Helping small businesses take their first confident step into AI.',
  // Canonical domain. delveinai.com and the old aiiscurious.netlify.app URL
  // 301-redirect here (see netlify.toml). Deploy this only once the domain is
  // connected in Netlify, so canonical/OG tags match the live site.
  url: 'https://www.delveinai.co.uk',
  founder: 'James',
  // TODO: set up email hosting (MX records) for delveinai.co.uk so this
  // inbox actually receives mail.
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
