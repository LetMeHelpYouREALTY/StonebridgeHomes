/**
 * Renders the site's artwork (heroes, OG card, logo, favicons, PWA icons)
 * from SVG definitions using sharp. Re-run with `npm run images`.
 */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(execFile);
const W = 1920;
const H = 1080;
const C = {
  night: '#16202A',
  slate: '#1F2A33',
  dusk: '#5B4A6B',
  sunset: '#E08A5A',
  gold: '#F4C27A',
  sand: '#F4EFE6',
  rock1: '#B5542D',
  rock2: '#8E3F22',
  rock3: '#5A2A18',
  copper: '#C9733E',
  green: '#4F7A4A',
  turf: '#5E8F57',
  pool: '#4FA3C7',
};

const defs = (extra = '') => `
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${C.night}"/>
    <stop offset="0.45" stop-color="${C.dusk}"/>
    <stop offset="0.8" stop-color="${C.sunset}"/>
    <stop offset="1" stop-color="${C.gold}"/>
  </linearGradient>
  <linearGradient id="day" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2E5D8A"/>
    <stop offset="0.7" stop-color="#9CC3DE"/>
    <stop offset="1" stop-color="#F1E3CF"/>
  </linearGradient>
  <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#FFF1D6" stop-opacity="0.95"/>
    <stop offset="0.5" stop-color="${C.gold}" stop-opacity="0.5"/>
    <stop offset="1" stop-color="${C.gold}" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3A2A22"/>
    <stop offset="1" stop-color="#1B1512"/>
  </linearGradient>
  <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#F7F2E8"/>
    <stop offset="1" stop-color="#EADFCB"/>
  </linearGradient>
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M40 0H0V40" fill="none" stroke="#B5542D" stroke-opacity="0.12" stroke-width="1"/>
  </pattern>
  ${extra}
</defs>`;

const stars = (n = 90, seed = 7) => {
  let s = seed;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  let out = '';
  for (let i = 0; i < n; i++) {
    const x = rnd() * W;
    const y = rnd() * H * 0.45;
    const r = 0.6 + rnd() * 1.4;
    out += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(1)}" fill="#fff" opacity="${(0.3 + rnd() * 0.6).toFixed(2)}"/>`;
  }
  return out;
};

const ridges = (base = 620) => `
<path d="M0 ${base + 60} L120 ${base - 40} L260 ${base + 10} L420 ${base - 120} L560 ${base - 30} L700 ${base - 90} L880 ${base + 20} L1040 ${base - 140} L1200 ${base - 60} L1380 ${base - 150} L1520 ${base - 40} L1700 ${base - 110} L1920 ${base + 30} L1920 ${H} L0 ${H} Z" fill="${C.rock3}"/>
<path d="M0 ${base + 150} L180 ${base + 60} L330 ${base + 120} L520 ${base + 20} L700 ${base + 110} L900 ${base + 40} L1100 ${base + 130} L1300 ${base + 50} L1480 ${base + 120} L1680 ${base + 60} L1920 ${base + 140} L1920 ${H} L0 ${H} Z" fill="${C.rock2}"/>
<path d="M0 ${base + 240} L200 ${base + 190} L400 ${base + 230} L620 ${base + 170} L840 ${base + 240} L1060 ${base + 180} L1280 ${base + 250} L1500 ${base + 190} L1720 ${base + 240} L1920 ${base + 200} L1920 ${H} L0 ${H} Z" fill="${C.rock1}"/>
<rect x="0" y="${base + 300}" width="${W}" height="${H - base - 300}" fill="url(#ground)"/>`;

const house = (x, y, w, h, roofH, win = 3) => {
  let wins = '';
  const gap = w / (win + 1);
  for (let i = 1; i <= win; i++) {
    wins += `<rect x="${x + gap * i - 14}" y="${y + h * 0.35}" width="28" height="34" rx="2" fill="${C.gold}" opacity="0.9"/>`;
  }
  return `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#241A16"/>
  <path d="M${x - 14} ${y} L${x + w / 2} ${y - roofH} L${x + w + 14} ${y} Z" fill="#2E211B"/>
  ${wins}`;
};

const scenes = {
  'hero-stonebridge': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${defs()}
  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  ${stars()}
  <circle cx="1460" cy="700" r="260" fill="url(#sun)"/>
  ${ridges(600)}
  ${house(160, 850, 360, 130, 60, 4)}
  ${house(620, 880, 300, 100, 50, 3)}
  ${house(1060, 860, 380, 120, 56, 4)}
  ${house(1540, 890, 280, 90, 46, 3)}
  <g stroke="#F4C27A" stroke-opacity="0.35" stroke-width="2">
    <path d="M0 1010 H1920"/>
  </g>
</svg>`,

  'stonebridge-village': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${defs()}
  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  ${stars(60, 11)}
  ${ridges(520)}
  <g fill="none" stroke="#F4C27A" stroke-opacity="0.55" stroke-width="10" stroke-linecap="round">
    <path d="M-50 1040 C 300 980, 500 1060, 820 960 S 1300 900, 1980 980"/>
    <path d="M200 1080 C 420 940, 700 980, 960 880 S 1500 820, 1700 880"/>
  </g>
  <g fill="#F4C27A" opacity="0.85">
    ${Array.from({ length: 70 }, (_, i) => {
      const x = 60 + ((i * 97) % 1800);
      const y = 880 + ((i * 53) % 170);
      return `<rect x="${x}" y="${y}" width="22" height="12" rx="2"/>`;
    }).join('')}
  </g>
  <rect x="760" y="900" width="400" height="120" rx="12" fill="${C.turf}" opacity="0.9"/>
  <g stroke="#fff" stroke-opacity="0.7" stroke-width="3" fill="none"><rect x="790" y="915" width="340" height="90"/><line x1="960" y1="915" x2="960" y2="1005"/><circle cx="960" cy="960" r="22"/></g>
</svg>`,

  'stonebridge-park': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${defs()}
  <rect width="${W}" height="${H}" fill="url(#day)"/>
  ${ridges(560).replace(/url\(#ground\)/, C.green)}
  <rect x="0" y="800" width="${W}" height="280" fill="${C.turf}"/>
  <g stroke="#fff" stroke-width="4" fill="none" opacity="0.9">
    <rect x="200" y="840" width="760" height="200"/>
    <line x1="580" y1="840" x2="580" y2="1040"/>
    <circle cx="580" cy="940" r="60"/>
    <rect x="200" y="890" width="90" height="100"/><rect x="870" y="890" width="90" height="100"/>
  </g>
  <g>
    <rect x="1120" y="850" width="300" height="170" rx="6" fill="#2F6E8F"/>
    <g stroke="#fff" stroke-width="3" fill="none"><rect x="1140" y="865" width="260" height="140"/><line x1="1140" y1="935" x2="1400" y2="935" stroke-dasharray="8 6"/><line x1="1270" y1="865" x2="1270" y2="1005"/></g>
  </g>
  <g>
    <rect x="1500" y="850" width="300" height="170" rx="6" fill="#B75E3A"/>
    <g stroke="#fff" stroke-width="3" fill="none"><rect x="1520" y="865" width="260" height="140"/><circle cx="1650" cy="935" r="36"/></g>
  </g>
  <g fill="#1D3B2A"><ellipse cx="120" cy="790" rx="70" ry="40"/><ellipse cx="1020" cy="800" rx="60" ry="36"/><ellipse cx="1880" cy="790" rx="70" ry="40"/></g>
</svg>`,

  'heritage-clubhouse': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${defs()}
  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  ${stars(40, 5)}
  <circle cx="420" cy="640" r="220" fill="url(#sun)"/>
  ${ridges(560)}
  <rect x="1120" y="700" width="640" height="200" fill="#2A1E19"/>
  <rect x="1120" y="660" width="640" height="40" fill="#3B2B24"/>
  ${Array.from({ length: 6 }, (_, i) => `<rect x="${1150 + i * 102}" y="740" width="70" height="110" fill="${C.gold}" opacity="0.85"/>`).join('')}
  <rect x="180" y="880" width="820" height="150" rx="40" fill="${C.pool}"/>
  <rect x="180" y="880" width="820" height="150" rx="40" fill="none" stroke="#DCE9EE" stroke-width="10"/>
  <g stroke="#fff" stroke-opacity="0.5" stroke-width="3"><line x1="240" y1="920" x2="940" y2="920"/><line x1="240" y1="955" x2="940" y2="955"/><line x1="240" y1="990" x2="940" y2="990"/></g>
  <circle cx="1120" cy="960" r="60" fill="${C.pool}" stroke="#DCE9EE" stroke-width="10"/>
  <circle cx="1560" cy="985" r="26" fill="#F26B2B"/><circle cx="1560" cy="985" r="12" fill="#FFD36B"/>
</svg>`,

  'floor-plans': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${defs()}
  <rect width="${W}" height="${H}" fill="url(#paper)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <g fill="none" stroke="${C.rock2}" stroke-width="10" stroke-linejoin="round">
    <rect x="360" y="180" width="1200" height="720"/>
    <line x1="360" y1="560" x2="900" y2="560"/>
    <line x1="900" y1="180" x2="900" y2="900"/>
    <line x1="1240" y1="180" x2="1240" y2="620"/>
    <line x1="900" y1="620" x2="1560" y2="620"/>
    <line x1="1240" y1="620" x2="1240" y2="900"/>
  </g>
  <g fill="none" stroke="${C.rock2}" stroke-width="4">
    <path d="M620 560 a80 80 0 0 1 80 -80" /><line x1="700" y1="480" x2="700" y2="560"/>
    <path d="M900 760 a80 80 0 0 1 80 80" /><line x1="980" y1="840" x2="900" y2="840"/>
    <rect x="400" y="600" width="260" height="120" rx="4"/>
    <rect x="420" y="220" width="200" height="140" rx="4"/>
    <rect x="1280" y="220" width="240" height="140" rx="4"/>
    <rect x="1300" y="700" width="220" height="90" rx="4"/>
    <rect x="960" y="260" width="240" height="90"/>
  </g>
  <g font-family="Georgia, serif" font-size="30" fill="${C.rock3}" letter-spacing="3">
    <text x="420" y="430">PRIMARY SUITE</text>
    <text x="440" y="860">GREAT ROOM</text>
    <text x="930" y="430">KITCHEN</text>
    <text x="1290" y="430">BEDROOM 2</text>
    <text x="970" y="760">COVERED PATIO</text>
    <text x="1265" y="880">2-CAR GARAGE</text>
  </g>
  <text x="360" y="990" font-family="Georgia, serif" font-size="34" fill="${C.rock1}" letter-spacing="6">SINGLE-STORY  ·  OPEN GREAT ROOM  ·  ISLAND KITCHEN</text>
</svg>`,

  'prices': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${defs()}
  <rect width="${W}" height="${H}" fill="${C.slate}"/>
  ${stars(50, 3)}
  ${ridges(620)}
  <g opacity="0.95">
    ${[300, 360, 330, 420, 470, 450, 520, 560, 540, 600, 640, 620].map((h, i) => `<rect x="${260 + i * 120}" y="${1000 - h}" width="70" height="${h}" rx="6" fill="${i % 3 === 2 ? C.gold : C.sand}" opacity="${0.55 + (i / 12) * 0.45}"/>`).join('')}
  </g>
  <path d="M295 700 L415 640 L535 670 L655 580 L775 530 L895 550 L1015 480 L1135 440 L1255 460 L1375 400 L1495 360 L1615 380" fill="none" stroke="${C.copper}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
};

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

const ogCard = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">${defs()}
  <rect width="1200" height="630" fill="url(#sky)"/>
  ${stars(40, 9).replace(/cx="(\d+)"/g, (m, x) => `cx="${Math.round(x * 0.625)}"`)}
  <g transform="scale(0.625)">${ridges(620)}</g>
  <g transform="translate(70 70) scale(0.28)">${logoMark(512, C.sand, C.slate)}</g>
  <text x="240" y="130" font-family="Georgia, serif" font-size="50" fill="${C.sand}" font-weight="bold">Stonebridge Las Vegas Homes</text>
  <text x="240" y="186" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="${C.gold}" letter-spacing="2">Summerlin West · 89138 · Homes for Sale, Prices &amp; Floor Plans</text>
  <text x="70" y="560" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="${C.sand}">Dr. Jan Duffy · Berkshire Hathaway HomeServices Nevada Properties</text>
</svg>`;

async function render(svg, outBase, widths = [1600, 960]) {
  const buf = Buffer.from(svg);
  for (const w of widths) {
    const suffix = w === widths[0] ? '' : `-${w}`;
    await sharp(buf, { density: 144 }).resize({ width: w }).webp({ quality: 82 }).toFile(`${outBase}${suffix}.webp`);
    await sharp(buf, { density: 144 }).resize({ width: w }).jpeg({ quality: 82, mozjpeg: true }).toFile(`${outBase}${suffix}.jpg`);
  }
}

async function main() {
  await mkdir('public/images', { recursive: true });
  await mkdir('public/icons', { recursive: true });

  for (const [name, svg] of Object.entries(scenes)) {
    await render(svg, `public/images/${name}`);
  }

  await sharp(Buffer.from(ogCard), { density: 144 }).resize(1200, 630).png().toFile('public/images/og-stonebridge-las-vegas-homes.png');
  await sharp(Buffer.from(ogCard), { density: 144 }).resize(1200, 630).jpeg({ quality: 85 }).toFile('public/images/og-stonebridge-las-vegas-homes.jpg');

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
  console.log('images rendered');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
