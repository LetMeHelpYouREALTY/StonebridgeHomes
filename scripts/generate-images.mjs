/**
 * Builds every image the site serves:
 *  - photos: assets/photos/<name>.jpg  ->  public/images/<name>{,-960}.{webp,jpg}
 *  - Open Graph card composited over the homepage hero photo
 *  - logo, favicons and PWA icons from an SVG mark
 * Re-run with `npm run images` after adding or replacing a photo in assets/photos.
 */
import sharp from 'sharp';
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(execFile);
const C = { slate: '#1F2A33', sand: '#F4EFE6', copper: '#C9733E', gold: '#F4C27A' };

const logoMark = (size = 512, fg = C.sand, bg = C.slate, pad = true) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="${size}" height="${size}">
  ${pad ? `<rect width="512" height="512" rx="96" fill="${bg}"/>` : ''}
  <g fill="none" stroke="${fg}" stroke-width="30" stroke-linecap="round">
    <path d="M96 352 Q256 120 416 352"/>
    <path d="M150 352 Q256 200 362 352"/>
  </g>
  <rect x="80" y="352" width="352" height="34" rx="8" fill="${fg}"/>
  <g fill="${C.copper}">
    <rect x="96" y="402" width="64" height="30" rx="4"/><rect x="176" y="402" width="64" height="30" rx="4"/><rect x="256" y="402" width="64" height="30" rx="4"/><rect x="336" y="402" width="80" height="30" rx="4"/>
  </g>
  <path d="M190 150 L256 96 L322 150 Z" fill="${C.copper}"/>
</svg>`;

const ogOverlay = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#16202A" stop-opacity="0.15"/>
      <stop offset="0.55" stop-color="#16202A" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#16202A" stop-opacity="0.92"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g transform="translate(70 390) scale(0.17)">${logoMark(512, C.sand, C.slate)}</g>
  <text x="175" y="430" font-family="Georgia, serif" font-size="52" fill="${C.sand}" font-weight="bold">Stonebridge Las Vegas Homes</text>
  <text x="175" y="476" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="${C.gold}" letter-spacing="1.5">Summerlin West · 89138 · Homes for Sale, Prices &amp; Floor Plans</text>
  <text x="70" y="570" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="${C.sand}">Dr. Jan Duffy · Berkshire Hathaway HomeServices Nevada Properties</text>
</svg>`;

async function photos() {
  const files = (await readdir('assets/photos')).filter((f) => /\.jpe?g$/i.test(f));
  for (const f of files) {
    const name = f.replace(/\.jpe?g$/i, '');
    const src = sharp(`assets/photos/${f}`).rotate();
    for (const w of [1600, 960]) {
      const suffix = w === 1600 ? '' : `-${w}`;
      await src.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`public/images/${name}${suffix}.webp`);
      await src.clone().resize({ width: w, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true, progressive: true }).toFile(`public/images/${name}${suffix}.jpg`);
    }
  }
  return files.length;
}

async function ogCard() {
  const base = await sharp('assets/photos/home-exterior-golden-hour.jpg').resize(1200, 630, { fit: 'cover', position: 'attention' }).toBuffer();
  const overlay = await sharp(Buffer.from(ogOverlay), { density: 144 }).resize(1200, 630).png().toBuffer();
  const composed = sharp(base).composite([{ input: overlay }]);
  await composed.clone().png().toFile('public/images/og-stonebridge-las-vegas-homes.png');
  await composed.clone().jpeg({ quality: 85 }).toFile('public/images/og-stonebridge-las-vegas-homes.jpg');
}

async function icons() {
  await writeFile('public/images/logo.svg', logoMark(512, C.slate, C.sand, false).trim());
  await writeFile('public/images/logo-light.svg', logoMark(512, C.sand, C.slate, false).trim());
  await sharp(Buffer.from(logoMark(512))).png().toFile('public/images/logo.png');
  for (const s of [72, 96, 128, 144, 152, 192, 384, 512]) {
    await sharp(Buffer.from(logoMark(s))).resize(s, s).png().toFile(`public/icons/icon-${s}x${s}.png`);
  }
  await sharp(Buffer.from(logoMark(180))).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp(Buffer.from(logoMark(32))).resize(32, 32).png().toFile('public/favicon-32x32.png');
  await sharp(Buffer.from(logoMark(16))).resize(16, 16).png().toFile('public/favicon-16x16.png');
  await writeFile('public/favicon.svg', logoMark(64).trim());
  await exec('convert', ['public/favicon-16x16.png', 'public/favicon-32x32.png', 'public/favicon.ico']);
}

async function main() {
  await mkdir('public/images', { recursive: true });
  await mkdir('public/icons', { recursive: true });
  const n = await photos();
  await ogCard();
  await icons();
  console.log(`processed ${n} photos, OG card, logo, favicons, icons`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
