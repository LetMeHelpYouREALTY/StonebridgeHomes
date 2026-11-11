import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import { CtaBand } from '~/components/ui/CtaBand';
import { DataNote } from '~/components/ui/DataNote';
import { Faq } from '~/components/ui/Faq';
import { Figure, PhotoStrip } from '~/components/ui/Figure';
import { PageHero } from '~/components/ui/PageHero';
import { RealScoutListings } from '~/components/ui/RealScout';
import { StatGrid } from '~/components/ui/StatGrid';
import { STONEBRIDGE_MARKET } from '~/lib/data';
import { money, pageHead } from '~/lib/seo';
import { AGENT } from '~/lib/site';

const sb = STONEBRIDGE_MARKET;
const overOneMillion = sb.priceBands.slice(3).reduce((n, b) => n + b.count, 0);

/** Highest-priced Stonebridge listings seen in the MLS feed, with the dates they were observed. */
const LUXURY_EXAMPLES = [
  { address: '779 Bolide Street', price: 2_900_000, beds: 4, sqft: 3_255, neighborhood: 'Summerlin Village 24, Parcel 1', seen: 'July 2026' },
  { address: '12439 Sky Bluff Court', price: 2_787_750, beds: 3, sqft: 4_017, neighborhood: 'Scots Pine', seen: 'July 2026' },
  { address: '12556 Lilac Trail Avenue', price: 2_695_000, neighborhood: 'Stonebridge', seen: 'July 2026' },
];

const faqs = [
  {
    q: 'How many luxury homes are for sale in Stonebridge?',
    a: `${overOneMillion} Stonebridge homes were listed above $1 million as of ${sb.asOf}: ${sb.priceBands[3].count} between $1M and $1.5M, ${sb.priceBands[4].count} between $1.5M and $2M, and ${sb.priceBands[5].count} between $2M and $3M.`,
  },
  {
    q: 'What is the most expensive home in Stonebridge?',
    a: 'Recent asking prices have topped out just under $3 million. In July 2026, 779 Bolide Street listed at $2,900,000 (4 bedrooms, 3,255 sq ft) and a 4,017 sq ft Scots Pine home at 12439 Sky Bluff Court listed at $2,787,750. Confirm current status on the live feed; these are reference points, not active offers.',
  },
  {
    q: 'Which builders built the luxury homes in Stonebridge?',
    a: 'Toll Brothers built the largest collections, to about 4,500 square feet, and Richmond American\'s Scots Pine plans reach about 4,000 square feet. Lennar\'s Graycliff and Pulte\'s Starling supply most of the $1M to $1.5M band.',
  },
  {
    q: 'How does Stonebridge compare with The Ridges or Red Rock Country Club?',
    a: 'Stonebridge homes were built from 2018, so they are newer than most of The Ridges and Red Rock Country Club, and they sit on comparable elevation with the same Red Rock views. The trade is the amenity package: Stonebridge has no golf or private club, which is why its price per square foot runs below those two.',
  },
  {
    q: 'Does Dr. Duffy handle luxury sales in Stonebridge?',
    a: `Yes. Dr. Duffy prices from closed sales of the same plan on the same side of the village, coordinates showings through the entry gates, and markets through ${AGENT.brokerage}'s luxury network. Call ${AGENT.phoneDisplay} for a confidential conversation.`,
  },
];

export default component$(() => {
  return (
    <>
      <PageHero
        eyebrow="Over $1 million · Summerlin West"
        title="Luxury homes in Stonebridge"
        intro={`${overOneMillion} homes above $1 million on the elevated west side of the village, most built since 2020 by Toll Brothers, Richmond American, Lennar, and Pulte, with Red Rock Canyon at the end of the street.`}
        image="luxury-estate-twilight"
        imageAlt="Contemporary luxury estate at twilight with an infinity pool reflecting the house and Red Rock Canyon behind"
      >
        <a href="#listings-heading" class="btn-primary">
          See the listings
        </a>
        <a href={`tel:${AGENT.phoneTel}`} class="btn-outline">
          Private showing {AGENT.phoneDisplay}
        </a>
      </PageHero>
      <Breadcrumbs items={[{ name: 'Luxury Homes', path: '/luxury-homes' }]} />

      <section class="section pt-8">
        <div class="container-max">
          <p class="eyebrow">The top of the village</p>
          <h2 class="mt-3 text-3xl md:text-4xl">Where the luxury inventory sits</h2>
          <div class="mt-10">
            <StatGrid
              stats={[
                { value: `${overOneMillion}`, label: 'Listings over $1M' },
                { value: `${sb.priceBands[5].count}`, label: 'Listings $2M to $3M' },
                { value: `$${sb.listPricePerSqFt}`, label: 'Village list price per sq ft' },
                { value: '4,500', label: 'Largest plan, sq ft' },
              ]}
            />
          </div>
          <DataNote asOf={sb.asOf} source={sb.source} />
        </div>
      </section>

      <section class="section bg-white pt-0">
        <div class="container-max grid gap-12 lg:grid-cols-2 lg:items-center">
          <Figure
            name="luxury-great-room"
            alt="Double-height great room with beamed ceiling, linear fireplace, waterfall island, and glass walls open to a pool"
            caption="Toll Brothers and Scots Pine plans bring double-height great rooms and glass walls to the patio."
          />
          <div class="prose-site">
            <p class="eyebrow">What $1M to $3M buys</p>
            <h2 class="mt-3">Newer than The Ridges, same mountain</h2>
            <p>
              The luxury band in Stonebridge is the elevated west and south edge: Toll Brothers collections to about
              4,500 square feet, Richmond American's Scots Pine and Skye Knoll, and the largest Lennar Graycliff and
              Pulte Starling plans. Most closed between 2020 and 2025, so warranties, roofs, and mechanicals are young.
            </p>
            <p>
              Three reference points from the MLS feed:{' '}
              {LUXURY_EXAMPLES.map((l, i) => (
                <span key={l.address}>
                  {l.address} at {money(l.price)}
                  {l.sqft ? ` (${l.sqft.toLocaleString()} sq ft)` : ''}
                  {i < LUXURY_EXAMPLES.length - 1 ? ', ' : ''}
                </span>
              ))}
              , all listed in July 2026. Status changes; the live feed below is authoritative.
            </p>
          </div>
        </div>
      </section>

      <section class="section bg-stone-sand">
        <div class="container-max">
          <p class="eyebrow">The setting</p>
          <h2 class="mt-3 text-3xl md:text-4xl">Views, elevation, and privacy</h2>
          <PhotoStrip
            items={[
              { name: 'valley-lights-blue-hour', alt: 'Elevated street at blue hour over the lights of the Las Vegas valley', caption: 'East-facing lots look over the valley and the Strip skyline' },
              { name: 'red-rock-canyon-trail', alt: 'Trail leading toward the Red Rock Canyon escarpment', caption: 'West-facing lots face the escarpment, five minutes away' },
              { name: 'covered-patio-sunset', alt: 'Covered patio with fire pit facing red rock mountains at sunset', caption: 'Finished outdoor rooms carry the premium at this price point' },
            ]}
          />
        </div>
      </section>

      <RealScoutListings heading="Stonebridge homes over $1 million" priceMin="1000000" priceMax="5000000" />

      <Faq faqs={faqs} heading="Luxury buyer questions" />

      <CtaBand
        heading="Arrange a private showing"
        body="Gate access, plan sheets, and a sold-price comp for the exact street are handled before you arrive."
        primaryLabel="Book a private showing"
        campaign="luxury-homes"
      />
    </>
  );
});

export const head = pageHead({
  title: `Stonebridge Luxury Homes | ${overOneMillion} Listings Over $1M in Summerlin West`,
  description: `Luxury homes for sale in Stonebridge, Summerlin West: ${overOneMillion} listings over $1 million as of ${sb.asOf}, from Toll Brothers, Scots Pine, Graycliff, and Starling, up to about 4,500 sq ft with Red Rock views. Private showings with Dr. Jan Duffy, Berkshire Hathaway HomeServices.`,
  path: '/luxury-homes',
});
