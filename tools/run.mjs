import { chromium } from 'playwright';
import fs from 'fs';
const [,, out, ...names] = process.argv;
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage();
p.on('pageerror', (e) => console.log('ERR', e.message)); p.on('console', (m) => m.type() === 'error' && console.log('CONSOLE', m.text()));
await p.goto('http://localhost:4500/scene.html'); await p.waitForFunction(() => window.ready, null, { timeout: 60000 });
for (const n of names) {
  const t = Date.now();
  const url = await p.evaluate((n) => window.shots[n](), n);
  fs.writeFileSync(`${out}/${n}.webp`, Buffer.from(url.split(',')[1], 'base64'));
  console.log(n, ((Date.now() - t) / 1000).toFixed(1) + 's', Math.round(fs.statSync(`${out}/${n}.webp`).size / 1024) + 'KB');
}
await b.close();
