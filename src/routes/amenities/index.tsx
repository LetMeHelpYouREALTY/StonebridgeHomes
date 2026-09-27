import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { AmenityMap } from '~/components/hyperlocal/AmenityMap';
import { StructuredData } from '~/components/StructuredData';
import { AGENT, COMMUNITY } from '~/lib/community/config';
import { CURATED_PLACES } from '~/lib/community/curatedPlaces';
import { communityPlaceSchema, heritageRealEstateAgentSchema } from '~/lib/schema/realEstateAgent';

const FAQ_ITEMS = [
  {
    question: `What grocery stores are near ${COMMUNITY.name}?`,
    answer:
      "Whole Foods Market and Smith's Food and Drug on West Charleston Boulevard serve Summerlin, roughly a short drive west from the Heritage at Stonebridge gate.",
  },
  {
    question: `How far is ${COMMUNITY.name} from the Las Vegas Strip?`,
    answer:
      'Drive time to the central Las Vegas Strip is typically about 20–30 minutes via Summerlin Parkway and I-15, depending on traffic (approximate).',
  },
  {
    question: `Are there hospitals near ${COMMUNITY.name}?`,
    answer:
      'Summerlin Hospital Medical Center on Town Center Drive and Centennial Hills Hospital on North Durango Drive are established full-service hospitals serving west Las Vegas.',
  },
  {
    question: `What recreation is available at ${COMMUNITY.name}?`,
    answer:
      'Residents use the on-site Heritage at Stonebridge clubhouse with pool, fitness, and pickleball, plus nearby Angel Park and TPC Las Vegas golf and Red Rock Canyon trails.',
  },
  {
    question: `How far is Harry Reid International Airport from ${COMMUNITY.name}?`,
    answer:
      'Harry Reid International Airport is commonly reached in roughly 25–35 minutes by car via the 215 Beltway and I-15, traffic-dependent (approximate).',
  },
  {
    question: `Where do residents shop and dine near ${COMMUNITY.name}?`,
    answer:
      'Downtown Summerlin on Festival Plaza Drive offers major retailers and restaurants, with additional dining at Red Rock Casino Resort on Resort Vista Drive.',
  },
  {
    question: `Is ${COMMUNITY.name} in Summerlin or Henderson?`,
    answer:
      'Heritage at Stonebridge is in Summerlin West, within the City of Las Vegas (Clark County), not Henderson.',
  },
];

function buildSchemas() {
  const baseUrl = COMMUNITY.siteUrl;
  const pageUrl = `${baseUrl}/amenities`;

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Nearby amenities near ${COMMUNITY.name}`,
    itemListElement: CURATED_PLACES.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': place.schemaType,
        name: place.name,
        address: place.address,
      },
    })),
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nearby Amenities',
        item: pageUrl,
      },
    ],
  };

  return [heritageRealEstateAgentSchema(), communityPlaceSchema(), faqPage, itemList, breadcrumbs];
}

export default component$(() => {
  const schemas = buildSchemas();

  return (
    <div class="min-h-screen bg-heritage-light">
      {schemas.map((schema) => (
        <StructuredData
          key={(schema as { '@type': string })['@type']}
          data={schema}
        />
      ))}

      <div class="hero-section">
        <div class="container-max text-center">
          <h1 class="text-4xl font-bold mb-4">
            Nearby Amenities in {COMMUNITY.name}, {COMMUNITY.city}
          </h1>
          <p class="text-xl max-w-3xl mx-auto">
            Hyperlocal guide to healthcare, golf, parks, grocery, and shopping around Summerlin —
            from the guard-gated Heritage at Stonebridge clubhouse.
          </p>
        </div>
      </div>

      <section class="section-padding">
        <div class="container-max">
          <h2 class="text-2xl font-bold text-heritage-primary mb-6">Interactive amenity map</h2>
          <AmenityMap />
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="container-max prose prose-lg max-w-none text-gray-700">
          <h2 class="text-2xl font-bold text-heritage-primary">
            Dining near Heritage at Stonebridge
          </h2>
          <p>
            Downtown Summerlin ({CURATED_PLACES.find((p) => p.id === 'downtown-summerlin')?.address}
            ) clusters national and local restaurants. Craftsteak at Red Rock Casino Resort (
            {CURATED_PLACES.find((p) => p.id === 'craftsteak-red-rock')?.address}) is a well-known
            steakhouse option a few minutes from the community.
          </p>

          <h2 class="text-2xl font-bold text-heritage-primary mt-10">Parks &amp; recreation</h2>
          <p>
            On-site, the Heritage at Stonebridge clubhouse at 930 Silverfir Court offers pool,
            fitness, and pickleball for residents. Red Rock Canyon National Conservation Area
            provides hiking and scenic drives west of Summerlin.
          </p>

          <h2 class="text-2xl font-bold text-heritage-primary mt-10">Golf</h2>
          <p>
            Angel Park Golf Club and TPC Las Vegas are established public courses in west Las Vegas,
            both within a typical short drive from Stonebridge village.
          </p>

          <h2 class="text-2xl font-bold text-heritage-primary mt-10">Healthcare</h2>
          <p>
            Summerlin Hospital Medical Center on Town Center Drive and Centennial Hills Hospital on
            North Durango Drive are full-service hospitals serving west Las Vegas families and
            active-adult residents.
          </p>

          <h2 class="text-2xl font-bold text-heritage-primary mt-10">Shopping &amp; grocery</h2>
          <p>
            Downtown Summerlin anchors regional shopping. Smith&apos;s and Whole Foods on West
            Charleston Boulevard are common grocery stops for Summerlin households.
          </p>

          <h2 class="text-2xl font-bold text-heritage-primary mt-10">
            Commute &amp; key destinations
          </h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>
              <strong>Downtown Summerlin:</strong> often about 5–10 minutes by car (approximate).
            </li>
            <li>
              <strong>Las Vegas Strip:</strong> often about 20–30 minutes via Summerlin Parkway and
              I-15 (approximate, traffic-dependent).
            </li>
            <li>
              <strong>Harry Reid International Airport:</strong> often about 25–35 minutes via the
              215 Beltway (approximate).
            </li>
            <li>
              <strong>Red Rock Canyon:</strong> often about 15–20 minutes west on Charleston
              Boulevard / SR-159 (approximate).
            </li>
          </ul>
        </div>
      </section>

      <section class="section-padding" aria-labelledby="amenities-faq">
        <div class="container-max max-w-3xl">
          <h2 id="amenities-faq" class="text-2xl font-bold text-heritage-primary mb-8">
            Frequently asked questions
          </h2>
          <dl class="space-y-6">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question} class="heritage-card p-6">
                <dt class="font-semibold text-lg text-heritage-primary">{item.question}</dt>
                <dd class="mt-2 text-gray-700">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section class="section-padding bg-heritage-primary text-white">
        <div class="container-max text-center max-w-2xl mx-auto">
          <h2 class="text-3xl font-bold mb-4">Work with a local Summerlin expert</h2>
          <p class="mb-6 text-lg">
            {AGENT.name} helps buyers and sellers navigate Heritage at Stonebridge and surrounding
            Summerlin villages with data-backed guidance.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={AGENT.telephoneHref}
              class="bg-white text-heritage-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
            >
              Call {AGENT.telephone}
            </a>
            <a href="/contact" class="heritage-button-secondary">
              Contact form
            </a>
          </div>
          <p class="text-sm mt-6 opacity-90">
            {AGENT.brokerage} · {AGENT.email}
          </p>
        </div>
      </section>
    </div>
  );
});

const pageTitle = `Nearby Amenities in ${COMMUNITY.name}, Las Vegas | Summerlin Map`;
const pageDescription =
  'Interactive map and local guide to restaurants, healthcare, golf, parks, and shopping near Heritage at Stonebridge in Summerlin, Las Vegas. Dr. Jan Duffy, local REALTOR®.';

export const head: DocumentHead = {
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    {
      property: 'og:url',
      content: `${COMMUNITY.siteUrl}/amenities`,
    },
    {
      property: 'og:image',
      content: `${COMMUNITY.siteUrl}/images/heritage-stonebridge-og.jpg`,
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
  ],
  links: [
    {
      rel: 'canonical',
      href: `${COMMUNITY.siteUrl}/amenities`,
    },
  ],
};
