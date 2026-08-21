/**
 * Auto-reply to whoever filled in a form.
 *
 * Netlify runs a function with this exact name on every non-spam form
 * submission, so there is nothing to wire up beyond the environment
 * variables below. Spam-flagged submissions never reach here.
 *
 * Required environment variable (Netlify → Site configuration →
 * Environment variables):
 *
 *   RESEND_API_KEY   from resend.com/api-keys
 *
 * Optional:
 *
 *   REPLY_FROM       sender, must be on a domain verified in Resend.
 *                    Defaults to the studio address; until the DNS records
 *                    are in place, set it to onboarding@resend.dev to test.
 *   REPLY_TO         where replies land. Defaults to the studio address.
 *
 * A missing key is not an error: the visitor's submission is already saved
 * and the notification email still reaches the inbox, so this logs and
 * exits rather than failing the submission.
 *
 * Uses the classic handler signature, which is what Netlify's
 * event-triggered functions expect.
 */

const STUDIO_EMAIL = 'hello@rainypeaks.co.uk';
const SITE_URL = 'https://rainypeaks.co.uk';
const SITE_HOST = 'rainypeaks.co.uk';
const SIGN_OFF = 'James\nRainy Peaks\nWebsites that win work, Manchester & the North West';

/**
 * The site's brand tokens, from src/styles/global.css. Email clients strip
 * external stylesheets and custom properties, so the values are repeated
 * here and inlined on every element.
 */
const BRAND = {
  midnight: '#0b1e33',
  slate: '#1e3a5f',
  actionDeep: '#1d4ed8',
  drizzle: '#bfdbfe',
  ice: '#eff6ff',
  mist: '#dbeafe',
  steel: '#456080',
  line: '#dce8f9',
  white: '#ffffff',
};

/** Fraunces and Inter are self-hosted on the site, so email falls back the same way. */
const FONT_DISPLAY = "Georgia, 'Times New Roman', serif";
const FONT_BODY = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

/** Forms that should get an auto-reply, and how to describe what happens next. */
const REPLIES = {
  review: {
    subject: 'Got it, your free Website Review is on its way',
    // Shown after the subject in most inboxes. Without one, clients preview
    // the first line of the email instead.
    preview: 'I have your details. Here is exactly what happens next, and when.',
    opening: (site) =>
      site
        ? `Thanks for getting in touch. I've got your details and I'll take a proper look at ${site}.`
        : "Thanks for getting in touch. I've got your details and I'll take a proper look at your site.",
    steps: [
      "I'll reply personally, usually the same working day. If anything needs clarifying I'll ask, or suggest a quick 15-minute call.",
      'Your Website Review follows within 3 working days: your top fixes ranked by effort and payoff, speed and mobile scores in plain English, an honest answer on rebuild versus repair, and a simple 90-day plan.',
    ],
    reason: 'You are getting this because you asked for a free Website Review at rainypeaks.co.uk.',
  },
  booking: {
    subject: 'Got it, I’ll confirm your call shortly',
    preview: 'I have your details and your preferred time. Here is what happens next.',
    opening: () => "Thanks for getting in touch. I've got your details and your preferred time.",
    steps: [
      "I'll come back with a time that suits, usually the same working day. The call is 15 relaxed minutes about how your business runs, with no preparation needed.",
      'Your Website Review follows within 3 working days: your top fixes ranked by effort and payoff, speed and mobile scores in plain English, an honest answer on rebuild versus repair, and a simple 90-day plan.',
    ],
    reason: 'You are getting this because you asked for a call at rainypeaks.co.uk.',
  },
};

const CLOSING = 'The plan is yours to keep whatever you decide, and there is no obligation at any point.';

const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
  );

/** First name only, so the greeting reads like a person wrote it. */
const firstName = (full) => {
  const trimmed = String(full ?? '').trim();
  if (!trimmed) return null;
  return trimmed.split(/\s+/)[0];
};

const buildText = ({ greeting, opening, steps, reason }) =>
  [
    greeting,
    '',
    opening,
    '',
    'What happens next:',
    ...steps.map((step, i) => `${i + 1}. ${step}`),
    '',
    CLOSING,
    '',
    SIGN_OFF,
    '',
    STUDIO_EMAIL,
    SITE_URL,
    '',
    reason,
  ].join('\n');

/**
 * Table-based layout with everything inlined: Outlook ignores <div> widths and
 * Gmail strips <style> blocks other than media queries, so this is the shape
 * that survives both. Deliberately image-free, since a blocked logo would leave
 * a hole at the top and image-heavy mail scores worse with spam filters.
 */
const buildHtml = ({ subject, preview, greeting, opening, steps, reason }) => `<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <title>${escapeHtml(subject)}</title>
    <style>
      /* Clients that honour it get the brand's dark surfaces rather than an
         automatic inversion of the light ones. */
      @media (prefers-color-scheme: dark) {
        .rp-page { background: #071624 !important; }
        .rp-card { background: #0f2942 !important; }
        .rp-ink, .rp-ink a { color: ${BRAND.ice} !important; }
        .rp-muted { color: ${BRAND.drizzle} !important; }
        .rp-rule { border-top-color: ${BRAND.slate} !important; }
        .rp-badge { background: ${BRAND.slate} !important; color: ${BRAND.ice} !important; }
      }
      @media only screen and (max-width: 600px) {
        .rp-pad { padding: 24px !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;width:100%;background:${BRAND.ice};-webkit-font-smoothing:antialiased;">
    <!-- Inbox preview text, hidden in the body itself. -->
    <div style="display:none;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${BRAND.ice};">
      ${escapeHtml(preview)}
    </div>
    <table role="presentation" class="rp-page" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.ice};border-collapse:collapse;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:560px;border-collapse:collapse;">

            <!-- Wordmark as live text: renders with images blocked, and matches
                 the Georgia fallback the site itself uses for Fraunces. -->
            <tr>
              <td style="padding:0 4px 18px;">
                <span class="rp-ink" style="font-family:${FONT_DISPLAY};font-size:22px;color:${BRAND.slate};"><span style="font-style:italic;">rainy</span><span style="font-weight:700;">PEAKS</span></span>
                <span class="rp-muted" style="font-family:${FONT_BODY};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${BRAND.steel};">&nbsp; Web Design</span>
              </td>
            </tr>

            <tr>
              <td class="rp-card rp-pad" style="background:${BRAND.white};border-radius:14px;padding:32px;font-family:${FONT_BODY};font-size:16px;line-height:1.6;color:${BRAND.midnight};">
                <p class="rp-ink" style="margin:0 0 16px;color:${BRAND.midnight};">${escapeHtml(greeting)}</p>
                <p class="rp-ink" style="margin:0 0 24px;color:${BRAND.midnight};">${escapeHtml(opening)}</p>

                <p class="rp-ink" style="margin:0 0 14px;font-family:${FONT_DISPLAY};font-size:18px;font-weight:700;color:${BRAND.slate};">What happens next</p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                  ${steps
                    .map(
                      (step, i) => `<tr>
                    <td width="34" valign="top" style="padding:0 12px 14px 0;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                        <tr>
                          <td class="rp-badge" align="center" width="24" height="24" style="width:24px;height:24px;background:${BRAND.mist};border-radius:12px;font-family:${FONT_BODY};font-size:13px;font-weight:700;color:${BRAND.actionDeep};">${i + 1}</td>
                        </tr>
                      </table>
                    </td>
                    <td valign="top" class="rp-ink" style="padding:0 0 14px;font-family:${FONT_BODY};font-size:15px;line-height:1.6;color:${BRAND.midnight};">${escapeHtml(step)}</td>
                  </tr>`
                    )
                    .join('')}
                </table>

                <p class="rp-muted rp-rule" style="margin:14px 0 0;padding-top:20px;border-top:1px solid ${BRAND.line};font-size:14px;color:${BRAND.steel};">${escapeHtml(CLOSING)}</p>

                <p class="rp-ink" style="margin:24px 0 0;color:${BRAND.midnight};">
                  James<br />
                  <span class="rp-muted" style="font-size:14px;color:${BRAND.steel};">
                    Rainy Peaks · Websites that win work<br />
                    Manchester &amp; the North West
                  </span>
                </p>
              </td>
            </tr>

            <!-- A real address, a working reply address and a plain reason for
                 the email: all three are things spam filters look for. -->
            <tr>
              <td style="padding:20px 4px 0;font-family:${FONT_BODY};font-size:12px;line-height:1.6;color:${BRAND.steel};">
                <p class="rp-muted" style="margin:0 0 6px;color:${BRAND.steel};">
                  <a href="mailto:${STUDIO_EMAIL}" style="color:${BRAND.actionDeep};text-decoration:none;">${STUDIO_EMAIL}</a>
                  &nbsp;·&nbsp;
                  <a href="${SITE_URL}" style="color:${BRAND.actionDeep};text-decoration:none;">${SITE_HOST}</a>
                  &nbsp;·&nbsp; Manchester, UK
                </p>
                <p class="rp-muted" style="margin:0;color:${BRAND.steel};">${escapeHtml(reason)} Reply to this email and it comes straight to me.</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export const handler = async (event) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log('submission-created: RESEND_API_KEY not set, skipping the auto-reply.');
    return { statusCode: 200, body: 'skipped' };
  }

  let submission;
  try {
    submission = JSON.parse(event.body ?? '{}').payload ?? {};
  } catch {
    console.error('submission-created: could not parse the submission payload.');
    return { statusCode: 200, body: 'skipped' };
  }

  const formName = submission.form_name;
  const template = REPLIES[formName];
  if (!template) {
    console.log(`submission-created: no auto-reply configured for form "${formName}".`);
    return { statusCode: 200, body: 'skipped' };
  }

  const data = submission.data ?? {};
  const recipient = String(data.email ?? '').trim();
  if (!recipient.includes('@')) {
    console.log('submission-created: submission has no usable email address.');
    return { statusCode: 200, body: 'skipped' };
  }

  const name = firstName(data.name);
  const parts = {
    subject: template.subject,
    preview: template.preview,
    greeting: name ? `Hi ${name},` : 'Hello,',
    opening: template.opening(String(data.website ?? '').trim()),
    steps: template.steps,
    reason: template.reason,
  };

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.REPLY_FROM ?? `Rainy Peaks <${STUDIO_EMAIL}>`,
        to: [recipient],
        reply_to: process.env.REPLY_TO ?? STUDIO_EMAIL,
        subject: template.subject,
        // Sending both parts is what a real person's mail client does, and a
        // HTML-only message scores worse with filters.
        text: buildText(parts),
        html: buildHtml(parts),
        headers: {
          // Stops Gmail collapsing same-subject replies into one thread and
          // hiding the body behind "show trimmed content".
          'X-Entity-Ref-ID': String(submission.id ?? `${formName}-${Date.now()}`),
        },
        tags: [{ name: 'form', value: formName }],
      }),
    });

    if (!res.ok) {
      // Log the provider's reason, never the visitor's details.
      console.error(`submission-created: Resend returned ${res.status}: ${await res.text()}`);
      return { statusCode: 200, body: 'send failed' };
    }

    console.log(`submission-created: auto-reply sent for form "${formName}".`);
    return { statusCode: 200, body: 'sent' };
  } catch (error) {
    console.error('submission-created: auto-reply request failed:', error.message);
    return { statusCode: 200, body: 'send failed' };
  }
};
