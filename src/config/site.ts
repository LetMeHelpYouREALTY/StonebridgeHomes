/** Single source of truth for Heritage at Stonebridge NAP + exclusive services. */

export const SITE = {
  origin: 'https://www.heritagestonebridge.com',
  brand: 'Heritage Stonebridge | Homes By Dr. Jan Duffy',
  shortBrand: 'Heritage at Stonebridge',
  agent: 'Dr. Jan Duffy',
  license: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  phoneDisplay: '(702) 789-6561',
  phoneTel: '702-789-6561',
  phoneE164: '+17027896561',
  email: 'DrDuffySells@HeritageStonebridge.com',
  streetAddress: '930 Silverfir Court, Suite B',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89138',
  fullAddress: '930 Silverfir Court, Suite B, Las Vegas, NV 89138',
  hoursLabel: 'Open daily, 8:00 AM–8:00 PM',
  hoursSchema: ['Mo-Su 08:00-20:00'],
  clubhouseAddress: '930 Silverfir Court, Suite A, Las Vegas, NV 89138',
  clubhousePhone: '(725) 204-7908',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.2!2d-115.358!3d36.188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c0c0c0c0c0c0%3A0x0!2s930%20Silverfir%20Court%2C%20Las%20Vegas%2C%20NV%2089138!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=930+Silverfir+Court+Suite+B+Las+Vegas+NV+89138',
  googleReviewsUrl:
    'https://www.google.com/search?q=Heritage+Stonebridge+Homes+By+Dr.+Jan+Duffy+reviews',
  heroImage:
    'https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/34bde918-5f0a-4479-c146-d7914daee500/desktop',
  ogImage: 'https://www.heritagestonebridge.com/images/heritage-stonebridge-og.jpg',
  agentPhoto: '/images/dr-jan-duffy.png',
  realScoutAgentId: 'QWdlbnQtMjI1MDUw',
  calendlyShowing: 'https://calendly.com/drjanduffy/showing',
  calendlyStrategy: 'https://calendly.com/drjanduffy/15min',
  calendlyListing: 'https://calendly.com/drjanduffy/listing-consultation',
  communityHomes: 421,
  communityType: 'Guard-gated, age-qualified 55+ Lennar community',
  village: 'Village of Stonebridge, Summerlin West',
  zip: '89138',
} as const;

/** Qwik City trailing-slash canonical path helper. */
export function sitePath(path: string): string {
  if (path === '/' || path === '') {
    return '/';
  }
  const withLeading = path.startsWith('/') ? path : `/${path}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
}

export function siteUrl(path: string): string {
  const normalized = sitePath(path);
  return normalized === '/' ? `${SITE.origin}/` : `${SITE.origin}${normalized}`;
}

export const COLLECTIONS = [
  {
    name: 'Cromwell',
    sqft: '1,232–1,422 sq ft',
    note: 'Compact single-story plans with open great rooms',
  },
  {
    name: 'Stirling',
    sqft: '1,747–2,236 sq ft',
    note: 'Mid-size layouts for everyday living and guests',
  },
  {
    name: 'Evander',
    sqft: '2,515–2,873 sq ft',
    note: 'Largest plans — select RV garages and Next Gen suites',
  },
] as const;

/** Services exclusive to Heritage at Stonebridge buyers and sellers. */
export const EXCLUSIVE_SERVICES = [
  {
    slug: 'floor-plan-advisor',
    title: 'Nine Floor-Plan Advisor',
    summary:
      'Side-by-side guidance on all nine Lennar plans across Cromwell, Stirling, and Evander — which elevations and lots resell strongest inside the gate.',
    forWhom: 'Buyers comparing collections',
  },
  {
    slug: 'heritage-only-comps',
    title: 'Heritage-Only Comps Desk',
    summary:
      'Pricing built from recent Heritage at Stonebridge closings, not Summerlin averages. Your first offer uses this community’s real numbers.',
    forWhom: 'Buyers writing offers',
  },
  {
    slug: 'gate-and-clubhouse-tours',
    title: 'Gate & Clubhouse Concierge Tours',
    summary:
      'Visitor check-in at the staffed gate, clubhouse walk-throughs, and a measured walk from candidate homes to the 8,000 sq ft amenity center.',
    forWhom: 'Buyers touring 89138',
  },
  {
    slug: 'hoa-document-review',
    title: 'HOA Document Review Before Offer',
    summary:
      'Budget, age-qualification rules, guest policies for pools and courts, and dues clarity — reviewed with you before you write.',
    forWhom: 'Serious buyers',
  },
  {
    slug: 'inside-gate-resale',
    title: 'Inside-the-Gate Resale Marketing',
    summary:
      'Weekend open houses behind the gate, pricing from Heritage sales, and placement across Dr. Duffy’s 50+ Las Vegas neighborhood sites where Summerlin 55+ buyers already browse.',
    forWhom: 'Sellers inside Heritage',
  },
  {
    slug: 'collection-lot-intel',
    title: 'Collection & Lot Intelligence',
    summary:
      'Which lots catch Red Rock light, which elevations move faster, and how RV garages or Next Gen suites change demand on resale.',
    forWhom: 'Buyers and sellers',
  },
] as const;

export const AMENITIES = [
  {
    title: '8,000 sq ft clubhouse',
    detail: 'Lounge, kitchen, meeting rooms, and fitness at 930 Silverfir Court, Suite A',
  },
  {
    title: 'Heated pools & spa',
    detail: 'Resort pool, heated lap pool, outdoor spa, and shaded cabanas',
  },
  {
    title: 'Pickleball & bocce',
    detail: 'Lighted pickleball courts and bocce courts next to the clubhouse',
  },
  {
    title: 'Staffed gate',
    detail: 'Round-the-clock gatehouse check-in — not a shared gate code',
  },
  {
    title: 'Walking paths',
    detail: 'Desert landscaping paths with mountain views inside the community',
  },
  {
    title: 'Fitness center',
    detail: 'Equipment, group classes, and locker rooms on site',
  },
] as const;

export const FAQS = [
  {
    question: 'Where is Heritage at Stonebridge?',
    answer:
      'Heritage at Stonebridge is a guard-gated 55+ Lennar community in the village of Stonebridge, Summerlin West, Las Vegas, ZIP 89138. The agent office for Heritage Stonebridge | Homes By Dr. Jan Duffy is at 930 Silverfir Court, Suite B.',
  },
  {
    question: 'How many homes are in the community?',
    answer:
      'The community includes 421 single-story Lennar homes with a staffed gate and an on-site clubhouse.',
  },
  {
    question: 'What services does Dr. Jan Duffy offer exclusively for Stonebridge?',
    answer:
      'Exclusive services include the nine floor-plan advisor, Heritage-only comps, gate and clubhouse concierge tours, HOA document review before offer, inside-the-gate resale marketing, and collection/lot intelligence for 89138.',
  },
  {
    question: 'Is there a golf course in Heritage at Stonebridge?',
    answer:
      'No golf course appears in the amenity lists published by the HOA or the developer. Amenities center on the clubhouse, pools, pickleball, bocce, fitness, and walking paths.',
  },
  {
    question: 'How do I start with Dr. Jan Duffy?',
    answer:
      'Call or text (702) 789-6561. Office hours are open daily, 8:00 AM–8:00 PM. Email DrDuffySells@HeritageStonebridge.com for a current Heritage at Stonebridge market snapshot.',
  },
] as const;

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${SITE.origin}/#localbusiness`,
    name: SITE.brand,
    alternateName: SITE.shortBrand,
    url: SITE.origin,
    telephone: SITE.phoneE164,
    email: SITE.email,
    image: SITE.ogImage,
    logo: `${SITE.origin}/images/logo.png`,
    description:
      'Exclusive real estate services for Heritage at Stonebridge in Summerlin West — floor-plan advising, Heritage-only comps, gate tours, and inside-the-gate resales with Dr. Jan Duffy.',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.streetAddress,
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      postalCode: SITE.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.188,
      longitude: -115.358,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '20:00',
    },
    areaServed: [
      { '@type': 'PostalAddress', postalCode: '89138', addressLocality: 'Las Vegas', addressRegion: 'NV' },
      { '@type': 'Place', name: 'Heritage at Stonebridge, Summerlin West' },
    ],
    employee: {
      '@type': 'Person',
      name: SITE.agent,
      jobTitle: 'REALTOR®',
      telephone: SITE.phoneE164,
      email: SITE.email,
    },
    parentOrganization: {
      '@type': 'Organization',
      name: SITE.brokerage,
    },
  };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
