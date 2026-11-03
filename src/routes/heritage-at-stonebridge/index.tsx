import { component$ } from '@builder.io/qwik';
import { StructuredData } from '~/components/StructuredData';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import { CtaBand } from '~/components/ui/CtaBand';
import { DataNote } from '~/components/ui/DataNote';
import { Faq } from '~/components/ui/Faq';
import { PageHero } from '~/components/ui/PageHero';
import { RealScoutListings } from '~/components/ui/RealScout';
import { StatGrid } from '~/components/ui/StatGrid';
import { EXAMPLE_LISTINGS, HERITAGE_MARKET } from '~/lib/data';
import { money, pageHead } from '~/lib/seo';
import { SITE_ORIGIN, abs } from '~/lib/site';

const hb = HERITAGE_MARKET;

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Residence',
  '@id': `${SITE_ORIGIN}/heritage-at-stonebridge#place`,
  name: 'Heritage at Stonebridge',
  description:
    'Guard-gated, age-qualified 55+ Lennar neighborhood of 421 single-story homes in the Stonebridge village of Summerlin West, Las Vegas, NV 89138. Clubhouse at 930 Silverfir Court.',
  address: { '@type': 'PostalAddress', streetAddress: '930 Silverfir Court', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89138', addressCountry: 'US' },
  containedInPlace: { '@id': `${SITE_ORIGIN}/#stonebridge` },
  amenityFeature: ['8,000 sq ft clubhouse', 'Resort pool and spa', 'Heated lap pool', 'Fitness center', 'Pickleball courts', 'Bocce courts', 'Staffed gatehouse'].map((n) => ({ '@type': 'LocationFeatureSpecification', name: n, value: true })),
  image: abs('/images/heritage-clubhouse.jpg'),
};

const faqs = [
  {
    q: 'Is Heritage at Stonebridge a 55+ community?',
    a: 'Yes. It is age-qualified under the federal Housing for Older Persons Act, which requires at least 80 percent of occupied homes to have one resident 55 or older. The association\'s recorded governing documents set the exact occupancy rules; read them before you write an offer.',
  },
  {
    q: 'How much are HOA fees at Heritage at Stonebridge?',
    a: `$350 a month to the Heritage association plus $69 a month to the Summerlin West Community Association, $419 total, confirmed ${hb.hoaConfirmed}. The Heritage portion funds the staffed gate, the clubhouse, pools, courts, and common-area landscaping.`,
  },
  {
    q: 'What is in the Heritage at Stonebridge clubhouse?',
    a: 'About 8,000 square feet at 930 Silverfir Court with a fitness center, a resort pool and spa, a heated lap pool, pickleball courts, bocce courts, and a fire-pit terrace. It is for Heritage residents and their guests only; the rest of Stonebridge uses Stonebridge Park.',
  },
  {
    q: 'How does Heritage compare with Sun City Summerlin?',
    a: 'Heritage is smaller and newer: 421 homes built 2021 to 2025 versus roughly 7,800 homes built from 1989 in Sun City Summerlin. Heritage has one clubhouse and a staffed gate; Sun City has four recreation centers and three golf courses but no gate. Heritage resale prices typically run higher per square foot because the homes are newer.',
  },
  {
    q: 'Can I rent out a Heritage at Stonebridge home?',
    a: 'Leasing rules are in the association\'s governing documents and can change by vote. Ask for the current rules in the resale package before you buy as an investment.',
  },
];

export default component$(() => {
  const example = EXAMPLE_LISTINGS[0];
  return (
    <>
      <StructuredData data={schema} />
      <PageHero
        eyebrow="Age-qualified 55+ · guard gate · Lennar"
        title="Heritage at Stonebridge"
        intro={`421 single-story homes built 2021 to 2025 behind the only staffed gate in Stonebridge. Median sold ${money(hb.medianSold)}, ${hb.medianDaysToSell} median days to sell, HOA $419 a month all in.`}
        image="heritage-clubhouse"
        imageAlt="Illustration of a clubhouse with a lit lap pool, spa, and fire pit at dusk below red rock mountains"
      >
        <a href="#listings-heading" class="btn-primary">
          Heritage homes for sale
        </a>
        <a href="/floor-plans#heritage-plans" class="btn-outline">
          The nine floor plans
        </a>
      </PageHero>
      <Breadcrumbs items={[{ name: 'Heritage at Stonebridge', path: '/heritage-at-stonebridge' }]} />

      <section class="section pt-6">
        <div class="container-max">
          <h2 class="text-3xl font-bold md:text-4xl">Heritage resale market, last 12 months</h2>
          <div class="mt-8">
            <StatGrid
              stats={[
                { value: money(hb.medianSold), label: 'Median sold price' },
                { value: `${hb.medianDaysToSell} days`, label: 'Median days to sell' },
                { value: `${hb.activeListings}`, label: 'For sale now' },
                { value: `$${hb.listPricePerSqFt}`, label: 'List price per sq ft' },
              ]}
            />
          </div>
          <DataNote asOf={hb.asOf} source={hb.source} />
        </div>
      </section>

      <section class="section bg-white">
        <div class="container-max grid gap-10 lg:grid-cols-2">
          <div class="prose-site">
            <h2 class="text-3xl font-bold md:text-4xl">What you are buying</h2>
            <p>
              Lennar opened Heritage in 2021 with nine single-story plans in three collections, Cromwell (1,232 to 1,422
              sq ft), Stirling (1,747 to 2,236 sq ft), and Evander (2,515 to 2,873 sq ft), and finished the last homes in
              2025. Every home came with quartz counters, stainless appliances, and smart-home controls as standard.
            </p>
            <p>
              The clubhouse at 930 Silverfir Court is the center of the neighborhood: about 8,000 square feet with a
              fitness room, a resort pool and spa, a heated lap pool, pickleball, bocce, and a fire-pit terrace. Posted
              hours are 7:00 AM to 7:00 PM daily.
            </p>
            <p>
              Visitors check in at a staffed gatehouse rather than a shared keypad code. That changes how showings work:
              Dr. Duffy registers buyers ahead of time so the gate waves you through.
            </p>
          </div>
          <div class="card p-6">
            <p class="eyebrow">Example listing · {example.listed}</p>
            <h3 class="mt-2 text-2xl font-bold">{example.address.split(',')[0]}</h3>
            <p class="mt-1 font-serif text-3xl text-stone-rock">{money(example.price)}</p>
            <ul class="mt-4 space-y-1 text-base">
              <li>{example.plan} plan, built {example.yearBuilt}</li>
              <li>
                {example.beds} bedrooms, {example.baths} baths, {example.sqft?.toLocaleString()} sq ft
              </li>
              <li>MLS {example.mls}</li>
            </ul>
            <p class="mt-4 text-sm text-stone-mist">{example.note} Status may have changed; see the live listings below.</p>
            <a href="https://heritagestonebridge.com" rel="noopener" class="mt-4 inline-block font-semibold text-stone-rock">
              Full Heritage guide at heritagestonebridge.com
            </a>
          </div>
        </div>
      </section>

      <RealScoutListings heading="Heritage at Stonebridge homes for sale" priceMin="400000" priceMax="1500000" />

      <Faq faqs={faqs} heading="Heritage at Stonebridge questions" />

      <CtaBand
        heading="Tour Heritage with gate registration handled"
        body="Dr. Duffy pre-registers you at the gatehouse and brings the HOA summary so you can decide on the walkthrough."
        campaign="heritage"
      />
    </>
  );
});

export const head = pageHead({
  title: `Heritage at Stonebridge 55+ Homes | Median ${money(hb.medianSold)}, HOA $419 | Summerlin West`,
  description: `Heritage at Stonebridge: Lennar's guard-gated 55+ neighborhood of 421 single-story homes in Summerlin West 89138. Median sold ${money(hb.medianSold)}, ${hb.medianDaysToSell} days to sell, nine floor plans, 8,000 sq ft clubhouse, HOA $419 a month. Live listings and showings with Dr. Jan Duffy.`,
  path: '/heritage-at-stonebridge',
  image: abs('/images/og-stonebridge-las-vegas-homes.png'),
});
