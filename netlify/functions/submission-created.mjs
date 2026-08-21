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
const SIGN_OFF = 'James\nRainy Peaks\nWebsites that win work, Manchester & the North West';

/** Forms that should get an auto-reply, and how to describe what happens next. */
const REPLIES = {
  review: {
    subject: 'Got it, your free Website Review is on its way',
    opening: (site) =>
      site
        ? `Thanks for getting in touch. I've got your details and I'll take a proper look at ${site}.`
        : "Thanks for getting in touch. I've got your details and I'll take a proper look at your site.",
    steps: [
      "I'll reply personally, usually the same working day. If anything needs clarifying I'll ask, or suggest a quick 15-minute call.",
      'Your Website Review follows within 3 working days: your top fixes ranked by effort and payoff, speed and mobile scores in plain English, an honest answer on rebuild versus repair, and a simple 90-day plan.',
    ],
  },
  booking: {
    subject: 'Got it, I’ll confirm your call shortly',
    opening: () => "Thanks for getting in touch. I've got your details and your preferred time.",
    steps: [
      "I'll come back with a time that suits, usually the same working day. The call is 15 relaxed minutes about how your business runs, with no preparation needed.",
      'Your Website Review follows within 3 working days: your top fixes ranked by effort and payoff, speed and mobile scores in plain English, an honest answer on rebuild versus repair, and a simple 90-day plan.',
    ],
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

const buildText = ({ greeting, opening, steps }) =>
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
  ].join('\n');

const buildHtml = ({ greeting, opening, steps }) => `<!doctype html>
<html lang="en-GB">
  <body style="margin:0;padding:24px;background:#eff6ff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#0b1e33;line-height:1.6;">
    <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;padding:28px;">
      <p style="margin:0 0 16px;">${escapeHtml(greeting)}</p>
      <p style="margin:0 0 20px;">${escapeHtml(opening)}</p>
      <p style="margin:0 0 8px;font-weight:600;">What happens next</p>
      <ol style="margin:0 0 20px;padding-left:20px;">
        ${steps.map((step) => `<li style="margin-bottom:10px;">${escapeHtml(step)}</li>`).join('')}
      </ol>
      <p style="margin:0 0 24px;color:#456080;font-size:14px;">${escapeHtml(CLOSING)}</p>
      <p style="margin:0;">
        James<br />
        <span style="color:#456080;font-size:14px;">
          Rainy Peaks · Websites that win work<br />
          Manchester &amp; the North West
        </span>
      </p>
    </div>
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
    greeting: name ? `Hi ${name},` : 'Hello,',
    opening: template.opening(String(data.website ?? '').trim()),
    steps: template.steps,
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
        text: buildText(parts),
        html: buildHtml(parts),
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
