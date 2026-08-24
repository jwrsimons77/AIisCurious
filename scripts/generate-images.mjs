/**
 * Generates static PNG assets (OG image, apple-touch-icon) from SVG sources.
 * Run with: node scripts/generate-images.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const peaks = (x, y, scale, rain, ridge, width) => `
  <g transform="translate(${x} ${y}) scale(${scale})" fill="none"
     stroke-linecap="round" stroke-linejoin="round" stroke-width="${width}">
    <g stroke="${rain}">
      <path d="M26.4 7.4 23.5 14.5"/>
      <path d="M36.3 5 34.6 12.7"/>
      <path d="M48 7.4 45.1 14.5"/>
      <path d="M19.9 17.5 17.6 24.6"/>
      <path d="M31.6 16.9 29.3 23.4"/>
      <path d="M42.8 17.5 40.4 24.3"/>
    </g>
    <g stroke="${ridge}">
      <path d="M10.8 56.6C13.6 51 19.4 42.4 21.8 39.6c.6-.6 1.4-.2 2 1c1.2 2.6 2.8 6 4.4 9.2"/>
      <path d="M24.5 56.5C27 52 34 38 39.2 28.8c.8-1.3 2.2-1 2.6.5c.8 2.7 2.6 5.1 4.4 6.9c1.2 1.4 1.8 4.4 2.2 8.2c1-3 2.6-5.8 4-5.4c1.4.6 2.8 9 4.2 17.4"/>
      <path d="M9.6 56.8c10.4-1.2 24.4.4 34.4-.2c5-.3 9 .3 13.4-.1"/>
    </g>
  </g>`;

/**
 * Default social sharing card. Chat apps (Instagram, Messenger, WhatsApp) crop a
 * 1200x630 card towards a square, so the composition is a centred logo lockup
 * held inside the middle 630x630: a hard crop loses background, never the name.
 */
const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="glow1" cx="82%" cy="12%" r="72%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="12%" cy="92%" r="65%">
      <stop offset="0%" stop-color="#7eb3e8" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#7eb3e8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0b1e33"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  ${peaks(506, 146, 2.8, "#7eb3e8", "#eff6ff", 1.5)}
  <text x="600" y="393" text-anchor="middle" font-family="Georgia, serif" font-size="72" fill="#eff6ff"><tspan font-style="italic">rainy</tspan><tspan font-weight="700">PEAKS</tspan></text>
  <path d="M555 428h90" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
  <text x="602" y="471" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600" letter-spacing="4.5" fill="#7eb3e8">WEB DESIGN &#183; MANCHESTER</text>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="40" fill="#0b1e33"/>
  ${peaks(8, 12, 2.5, "#7eb3e8", "#eff6ff", 2.6)}
</svg>`;

/**
 * Email header lockup for the auto-reply (netlify/functions/submission-created.mjs).
 * Drawn at 2x and displayed at 200x52, and the midnight background is baked in
 * rather than left transparent: clients that invert an email for dark mode then
 * flip the band behind it, and a light-ink logo on a flipped-white band would
 * disappear. Baked in, the mark keeps its own backdrop whatever the client does.
 */
const emailLogo = `
<svg xmlns="http://www.w3.org/2000/svg" width="352" height="104">
  <rect width="352" height="104" fill="#0b1e33"/>
  ${peaks(0, 10, 1.3, "#7eb3e8", "#eff6ff", 2.4)}
  <text x="88" y="57" font-family="Georgia, serif" font-size="38" fill="#eff6ff"><tspan font-style="italic">rainy</tspan><tspan font-weight="700">PEAKS</tspan></text>
  <text x="90" y="81" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="600" letter-spacing="3.4" fill="#7eb3e8">WEB DESIGN</text>
</svg>`;

await mkdir('public', { recursive: true });
await sharp(Buffer.from(og)).png().toFile('public/og-default.png');
await sharp(Buffer.from(icon)).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(emailLogo)).png().toFile('public/email-logo.png');
console.log('Generated public/og-default.png, public/apple-touch-icon.png and public/email-logo.png');
