/**
 * Generates static PNG assets (OG image, apple-touch-icon) from SVG sources.
 * Run with: node scripts/generate-images.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="glow1" cx="85%" cy="10%" r="70%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="8%" cy="95%" r="60%">
      <stop offset="0%" stop-color="#7eb3e8" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#7eb3e8" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="mark" cx="32%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#7eb3e8"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#eff6ff"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <circle cx="120" cy="130" r="26" fill="url(#mark)"/>
  <text x="170" y="146" font-family="Georgia, serif" font-size="44" font-weight="600" fill="#0b1e33">Rainy <tspan font-style="italic" fill="#1d4ed8">Peaks</tspan></text>
  <text x="100" y="330" font-family="Georgia, serif" font-size="76" font-weight="600" fill="#0b1e33" letter-spacing="-1">Websites that win</text>
  <text x="100" y="420" font-family="Georgia, serif" font-size="76" font-weight="600" font-style="italic" fill="#1d4ed8" letter-spacing="-1">work.</text>
  <text x="100" y="520" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#456080">A northern web design studio · Manchester &amp; the North West</text>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="42" fill="#0b1e33"/>
  <g stroke="#7eb3e8" stroke-width="8" stroke-linecap="round">
    <path d="M68 37 59 60"/>
    <path d="M93 31 84 54"/>
    <path d="M118 40 109 63"/>
  </g>
  <g fill="none" stroke="#eff6ff" stroke-width="8" stroke-linejoin="round" stroke-linecap="round">
    <path d="M48 141V99h22V85h20V71h22v28h20v42"/>
    <path d="M37 141h106"/>
  </g>
</svg>`;

await mkdir('public', { recursive: true });
await sharp(Buffer.from(og)).png().toFile('public/og-default.png');
await sharp(Buffer.from(icon)).png().toFile('public/apple-touch-icon.png');
console.log('Generated public/og-default.png and public/apple-touch-icon.png');
