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
      <stop offset="0%" stop-color="#0e6f60" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#0e6f60" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="8%" cy="95%" r="60%">
      <stop offset="0%" stop-color="#e9a13b" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#e9a13b" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="mark" cx="32%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#e9a13b"/>
      <stop offset="100%" stop-color="#0e6f60"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#fbfaf7"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <circle cx="120" cy="130" r="26" fill="url(#mark)"/>
  <text x="170" y="146" font-family="Georgia, serif" font-size="44" font-weight="600" fill="#21201c">AI<tspan font-style="italic" fill="#0a564a">is</tspan>Curious</text>
  <text x="100" y="330" font-family="Georgia, serif" font-size="76" font-weight="600" fill="#21201c" letter-spacing="-1">AI doesn't have to be</text>
  <text x="100" y="420" font-family="Georgia, serif" font-size="76" font-weight="600" font-style="italic" fill="#0a564a" letter-spacing="-1">complicated.</text>
  <text x="100" y="520" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#6b675e">Practical AI for small businesses · Manchester &amp; the North West</text>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <defs>
    <radialGradient id="g" cx="32%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#e9a13b"/>
      <stop offset="100%" stop-color="#0e6f60"/>
    </radialGradient>
  </defs>
  <rect width="180" height="180" rx="42" fill="url(#g)"/>
  <text x="90" y="122" font-family="Georgia, serif" font-size="84" font-style="italic" font-weight="600" fill="#fffdf8" text-anchor="middle">ai</text>
</svg>`;

await mkdir('public', { recursive: true });
await sharp(Buffer.from(og)).png().toFile('public/og-default.png');
await sharp(Buffer.from(icon)).png().toFile('public/apple-touch-icon.png');
console.log('Generated public/og-default.png and public/apple-touch-icon.png');
