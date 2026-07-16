/**
 * Generates the "AI Readiness Checklist" lead-magnet PDF as a plain,
 * dependency-free PDF (no headless browser, no PDF library) — just enough
 * PDF syntax for one page of Helvetica text. Run with:
 *   node scripts/generate-checklist-pdf.mjs
 * Output: public/ai-readiness-checklist.pdf
 */
import { writeFile } from 'node:fs/promises';

const escape = (text) => text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

/** One line of text, positioned with a Td move relative to the previous line. */
const line = (text, { font = 'F1', size = 11, dx = 0, dy = 0 } = {}) =>
  `/${font} ${size} Tf ${dx} ${dy} Td (${escape(text)}) Tj`;

const checklistItems = [
  'Write down the 3 tasks that eat the most time each week - AI is only worth it if it removes real hours.',
  "Check whether the tool ever sends your data to train someone else's model (read the privacy page, not the marketing page).",
  'Confirm the tool has a UK/EU data option or a clear GDPR position before any customer data goes near it.',
  'Ask "what happens if it is wrong?" for each task - low-stakes tasks (drafts, summaries) are safe first steps; anything customer-facing needs a human check.',
  'Set a monthly budget cap before you start - most useful tools cost under GBP 30/month per person.',
  'Pick ONE tool and ONE task to start with. Trying five tools at once is how AI projects stall.',
  'Give it two real weeks before judging it - the first few days are always slower while you learn the prompts that work.',
  'Write down the prompts that worked well - a shared "prompt library" saves the whole team relearning it.',
  "Tell your team what it's for (and what it isn't for) - unclear AI policies cause more problems than the tools themselves.",
  'Review after 90 days: did it save the time you hoped? If not, stop paying for it - no shame in that.',
];

const lines = [];
lines.push(line('The AI Readiness Checklist', { font: 'F2', size: 22, dx: 56, dy: 760 }));
lines.push(
  line('12 quick checks before you spend a penny on AI tools', { font: 'F1', size: 12, dx: 0, dy: -22 })
);
lines.push(line('AIisCurious - aiiscurious.netlify.app', { font: 'F1', size: 10, dx: 0, dy: -16 }));

let y = -46;
for (const [i, item] of checklistItems.entries()) {
  const wrapped = wrap(item, 88);
  lines.push(line(`[ ] ${wrapped[0]}`, { font: 'F1', size: 11, dx: 0, dy: y }));
  y = -18;
  for (const extra of wrapped.slice(1)) {
    lines.push(line(`   ${extra}`, { font: 'F1', size: 11, dx: 0, dy: y }));
  }
}

lines.push(
  line('Want a second opinion on your specific business? Book a free 15-minute call:', {
    font: 'F1',
    size: 11,
    dx: 0,
    dy: -28,
  })
);
lines.push(line('aiiscurious.netlify.app/book/', { font: 'F2', size: 11, dx: 0, dy: -16 }));

/** Naive word-wrap for a fixed-width monospace-ish estimate — good enough at 11pt Helvetica. */
function wrap(text, maxChars) {
  const words = text.split(' ');
  const out = [];
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxChars) {
      out.push(current.trim());
      current = word;
    } else {
      current = `${current} ${word}`;
    }
  }
  if (current.trim()) out.push(current.trim());
  return out;
}

const content = `BT\n${lines.join('\n')}\nET`;

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
  `<< /Length ${Buffer.byteLength(content, 'latin1')} >>\nstream\n${content}\nendstream`,
];

let pdf = '%PDF-1.4\n';
const offsets = [0];
objects.forEach((obj, i) => {
  offsets.push(Buffer.byteLength(pdf, 'latin1'));
  pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
});

const xrefStart = Buffer.byteLength(pdf, 'latin1');
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += '0000000000 65535 f \n';
for (let i = 1; i <= objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

await writeFile(new URL('../public/ai-readiness-checklist.pdf', import.meta.url), pdf, 'latin1');
console.log('Wrote public/ai-readiness-checklist.pdf');
