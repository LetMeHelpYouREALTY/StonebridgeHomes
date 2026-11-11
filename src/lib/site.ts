/**
 * Single source of truth for site identity. Change a value here and every
 * page, schema block, sitemap entry, and CTA updates together.
 */
export const SITE_ORIGIN = 'https://www.stonebridgelasvegashomes.com';
export const SITE_NAME = 'Stonebridge Las Vegas Homes';
export const SITE_TAGLINE = 'Homes for sale, prices, and floor plans in the Stonebridge village of Summerlin West';

export const AGENT = {
  name: 'Dr. Jan Duffy',
  title: 'REALTOR®',
  license: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  licensedSince: 2008,
  yearsInLasVegas: 35,
  /**
   * Site-wide number, confirmed by Dr. Jan on 2026-11-11 (decision A).
   * The marketing line 702-222-1964 is reserved for client email/text and
   * must not appear on a website.
   */
  phoneDisplay: '(702) 500-1955',
  phoneTel: '+17025001955',
  calendly: 'https://calendly.com/drjanduffy/showing',
  realScoutPortal: 'https://drjanduffy.realscout.com/',
  realScoutAgentEncodedId: 'QWdlbnQtMjI1MDUw',
  /** Verified third-party rating shown on the site; re-check the date when updating. */
  rating: { value: '5.0', count: 50, source: 'Realtor.com', asOf: 'October 2026' },
  sameAs: [
    'https://www.linkedin.com/in/dr-jan-duffy',
    'https://www.facebook.com/heritagestonebridge',
    'https://heritagestonebridge.com',
  ],
};

export const AREA = {
  village: 'Stonebridge',
  masterPlan: 'Summerlin West',
  city: 'Las Vegas',
  state: 'NV',
  zip: '89138',
  county: 'Clark County',
  acres: 502,
  plat: 'Summerlin Village 24',
  firstHomes: 2018,
  park: {
    name: 'Stonebridge Park',
    address: '870 Crossbridge Road, Las Vegas, NV 89138',
    acres: 11,
    opened: 'April 2021',
    hours: '6:00 AM to 11:00 PM daily',
    operator: 'Summerlin Council',
  },
  geo: { lat: 36.1745, lng: -115.3585 },
};

export const NAV = [
  { href: '/homes-for-sale', label: 'Homes for Sale' },
  { href: '/luxury-homes', label: 'Luxury' },
  { href: '/prices', label: 'Prices' },
  { href: '/floor-plans', label: 'Floor Plans' },
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/heritage-at-stonebridge', label: '55+ Heritage' },
  { href: '/stonebridge-park', label: 'Park' },
  { href: '/community', label: 'Living Here' },
  { href: '/contact', label: 'Contact' },
];

export const FOOTER_LINKS = [
  { href: '/stonebridge-las-vegas', label: 'Stonebridge Las Vegas guide' },
  { href: '/luxury-homes', label: 'Luxury homes over $1M' },
  { href: '/home-value', label: 'What is my Stonebridge home worth?' },
  { href: '/heritage-at-stonebridge', label: 'Heritage at Stonebridge 55+' },
  { href: '/stonebridge-park', label: 'Stonebridge Park' },
  { href: '/faq', label: 'Questions buyers ask' },
  { href: '/prices', label: 'Price guide' },
  { href: '/sitemap.xml', label: 'Sitemap' },
];

/** Calendly booking link tagged with the page that sent the visitor. */
export const calendlyUrl = (campaign: string) =>
  `${AGENT.calendly}?hide_gdpr_banner=1&utm_source=stonebridgelasvegashomes.com&utm_medium=site&utm_campaign=${campaign}`;

export const abs = (path: string) => `${SITE_ORIGIN}${path === '/' ? '' : path}`;
