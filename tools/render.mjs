// Render src/frontpage.html to entry.png at exactly 1024x1024.
// Run from ~/workspace/makefun so Playwright resolves from its node_modules:
//   node news-image-20261123-entry/tools/render.mjs
import { chromium } from 'playwright';
import { statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const entryRoot = join(scriptDir, '..');
const sourceHtml = join(entryRoot, 'src', 'frontpage.html');
const targetPng = join(entryRoot, 'entry.png');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await page.goto('file://' + sourceHtml);
await page.waitForLoadState('load');
await page.waitForTimeout(400);

const fit = await page.evaluate(() => {
  const tail = document.querySelector('.footnote');
  const box = tail ? tail.getBoundingClientRect() : null;
  return {
    docHeight: document.documentElement.scrollHeight,
    footnoteBottom: box ? Math.round(box.bottom) : null,
  };
});
console.log('layout:', JSON.stringify(fit));
if (fit.docHeight > 1024) {
  throw new Error('page is taller than the frame: scrollHeight ' + fit.docHeight);
}
if (fit.footnoteBottom !== null && fit.footnoteBottom > 1024) {
  throw new Error('footnote runs past the bottom edge: ' + fit.footnoteBottom);
}

await page.screenshot({ path: targetPng });
await browser.close();

const bytes = statSync(targetPng).size;
console.log(`rendered ${targetPng} — ${bytes} bytes (limit 1048576)`);
if (bytes > 1048576) throw new Error('entry.png is over the 1 MiB limit');
