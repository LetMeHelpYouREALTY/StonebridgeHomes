import { component$ } from '@builder.io/qwik';
import { StructuredData } from '~/components/StructuredData';
import { CtaBand } from '~/components/ui/CtaBand';
import { DataNote } from '~/components/ui/DataNote';
import { Faq } from '~/components/ui/Faq';
import { PageHero } from '~/components/ui/PageHero';
import { RealScoutListings } from '~/components/ui/RealScout';
import { StatGrid } from '~/components/ui/StatGrid';
import { EXAMPLE_LISTINGS, HERITAGE_MARKET, NEIGHBORHOODS, SITE_FAQS, STONEBRIDGE_MARKET } from '~/lib/data';
import { money, pageHead } from '~/lib/seo';
import { AGENT, AREA, SITE_ORIGIN, abs } from '~/lib/site';

const placeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  '@id': `${SITE_ORIGIN}/#stonebridge`,
  name: 'Stonebridge, Summerlin West',
  alternateName: ['Stonebridge Summerlin', 'Stonebridge Las Vegas', 'Summerlin Village 24'],
  description:
    'A 502-acre village of Summerlin West on the far west edge of Las Vegas, NV 89138, built from 2018 by KB Home, Lennar, Pulte, Woodside, Richmond American, Toll Brothers, Tri Pointe, and Pardee. Includes the 55+ Heritage at Stonebridge neighborhood and Stonebridge Park.',
  address: { '@type': 'PostalAddress', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89138', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: AREA.geo.lat, longitude: AREA.geo.lng },
  containedInPlace: { '@type': 'Place', name: 'Summerlin, Las Vegas, NV' },
  url: SITE_ORIGIN,
  image: abs('/images/hero-stonebridge.jpg'),
};

export default component$(() => {
  const sb = STONEBRIDGE_MARKET;
  const hb = HERITAGE_MARKET;
  const featured = EXAMPLE_LISTINGS[0];

  return (
    <>
      <StructuredData data={placeSchema} />
      <PageHero
        tall
        eyebrow={`Summerlin West · Las Vegas, NV ${AREA.zip}`}
        title="Stonebridge Summerlin homes for sale"
        intro={`Resale homes from about $500,000 to $3 million in Summerlin's westernmost village, five minutes from Red Rock Canyon. Real sold prices, every floor plan, and the 55+ Heritage neighborhood, from the agent who works these streets every week.`}
        image="hero-stonebridge"
        imageAlt="Illustration of single-story homes at dusk below the red rock ridges west of Summerlin"
      >
        <a href="/homes-for-sale" class="btn-primary">
          See homes for sale
        </a>
        <a href="/prices" class="btn-outline">
          What homes sold for
        </a>
      </PageHero>

      <section class="section">
        <div class="container-max">
          <p class="eyebrow">Stonebridge at a glance</p>
          <h2 class="mt-2 text-3xl font-bold md:text-4xl">The numbers behind the village</h2>
          <div class="mt-8">
            <StatGrid
              stats={[
                { value: money(sb.medianSold), label: 'Median sold, last 12 months' },
                { value: `${sb.medianDaysToSell} days`, label: 'Median time to sell' },
                { value: `${sb.pctOfOriginalList}%`, label: 'Of original list price' },
                { value: `${sb.activeListings}`, label: 'Homes for sale now' },
              ]}
            />
          </div>
          <DataNote asOf={sb.asOf} source={sb.source} />
        </div>
      </section>

      <section class="section bg-white">
        <div class="container-max grid gap-10 lg:grid-cols-2 lg:items-center">
          <div class="prose-site">
            <p class="eyebrow">This week's example</p>
            <h2 class="mt-2 text-3xl font-bold md:text-4xl">A real Stonebridge price, not a guess</h2>
            <p>
              {featured.address.split(',')[0]} listed at {money(featured.price)} on {featured.listed}: a{' '}
              {featured.plan} plan, {featured.beds} bedrooms, {featured.baths} baths, {featured.sqft?.toLocaleString()} square feet,
              built {featured.yearBuilt}, inside the guard gate at Heritage at Stonebridge. MLS {featured.mls}.
            </p>
            <p>
              Across the whole village, {sb.closedSales12mo} homes closed in the last 12 months. Heritage homes went
              under contract in a median of {hb.medianDaysToSell} days; the rest of Stonebridge took about {sb.medianDaysToSell}.
              That gap is the single most useful thing to know before you write an offer here.
            </p>
            <p class="text-sm text-stone-mist">{featured.note}</p>
            <a href="/prices" class="btn-dark">
              Read the full price breakdown
            </a>
          </div>
          <figure class="card">
            <picture>
              <source srcset="/images/stonebridge-village-960.webp 960w, /images/stonebridge-village.webp 1600w" type="image/webp" />
              <img
                src="/images/stonebridge-village.jpg"
                srcset="/images/stonebridge-village-960.jpg 960w, /images/stonebridge-village.jpg 1600w"
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Illustrated aerial view of Stonebridge's curving streets with the village park in the middle and red rock ridges behind"
                width="1600"
                height="900"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <figcaption class="px-5 py-3 text-sm text-stone-mist">
              Stonebridge sits on elevated ground north of Charleston Boulevard, with Stonebridge Park at its center.
            </figcaption>
          </figure>
        </div>
      </section>

      <section class="section">
        <div class="container-max">
          <p class="eyebrow">Twelve neighborhoods, eight builders</p>
          <h2 class="mt-2 text-3xl font-bold md:text-4xl">Which part of Stonebridge fits you?</h2>
          <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {NEIGHBORHOODS.slice(0, 6).map((n) => (
              <a key={n.slug} href={`/neighborhoods#${n.slug}`} class="card p-6 transition hover:-translate-y-0.5">
                <p class="eyebrow">{n.builder}</p>
                <h3 class="mt-2 text-xl font-bold">{n.name}</h3>
                <p class="mt-2 text-base text-stone-ink/80">{n.blurb}</p>
              </a>
            ))}
          </div>
          <div class="mt-8">
            <a href="/neighborhoods" class="btn-light">
              See all 12 neighborhoods
            </a>
          </div>
        </div>
      </section>

      <section class="section bg-stone-sand">
        <div class="container-max grid gap-10 lg:grid-cols-3">
          <a href="/heritage-at-stonebridge" class="card p-6">
            <p class="eyebrow">55+ living</p>
            <h3 class="mt-2 text-2xl font-bold">Heritage at Stonebridge</h3>
            <p class="mt-3 text-base text-stone-ink/80">
              421 single-story Lennar homes behind a staffed gate. Median sold {money(hb.medianSold)}, HOA{' '}
              {money(hb.hoaMonthly + hb.masterMonthly)} a month all in.
            </p>
          </a>
          <a href="/floor-plans" class="card p-6">
            <p class="eyebrow">Floor plans</p>
            <h3 class="mt-2 text-2xl font-bold">1,232 to 4,500 square feet</h3>
            <p class="mt-3 text-base text-stone-ink/80">
              Nine single-story Lennar plans in Heritage plus the larger one- and two-story plans from KB, Pulte,
              Woodside, Richmond American, and Toll Brothers.
            </p>
          </a>
          <a href="/stonebridge-park" class="card p-6">
            <p class="eyebrow">Open to everyone</p>
            <h3 class="mt-2 text-2xl font-bold">Stonebridge Park</h3>
            <p class="mt-3 text-base text-stone-ink/80">
              About 11 acres at 870 Crossbridge Road with lighted soccer fields, pickleball, basketball, and a shaded
              playground. Open 6 AM to 11 PM.
            </p>
          </a>
        </div>
      </section>

      <RealScoutListings heading="Stonebridge homes for sale right now" />

      <section class="section">
        <div class="container-max grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div class="prose-site">
            <p class="eyebrow">Your Stonebridge agent</p>
            <h2 class="mt-2 text-3xl font-bold md:text-4xl">{AGENT.name}</h2>
            <p>
              {AGENT.yearsInLasVegas} years in Las Vegas, licensed since {AGENT.licensedSince}, {AGENT.brokerage}.
              Dr. Duffy lists and sells inside Stonebridge, which means her comps come from this village's closed
              sales, not a citywide average.
            </p>
            <p>
              Buying: she knows which Heritage plans resell fastest and what the entry-gated neighborhoods closed for
              last quarter. Selling: she prices from your floor plan's last five sales and markets across her Las Vegas
              neighborhood sites and social pages.
            </p>
            <div class="flex flex-wrap gap-3">
              <a href={`tel:${AGENT.phoneTel}`} class="btn-primary">
                Call or text {AGENT.phoneDisplay}
              </a>
              <a href="/contact" class="btn-light">
                Book a showing
              </a>
            </div>
          </div>
          <div class="card p-6">
            <p class="eyebrow">Also by Dr. Duffy</p>
            <p class="mt-2 text-lg">
              Looking only at the 55+ neighborhood? Her dedicated site,{' '}
              <a href="https://heritagestonebridge.com" rel="noopener" class="font-semibold text-stone-rock">
                heritagestonebridge.com
              </a>
              , covers Heritage HOA documents, the clubhouse, and gate procedures in depth.
            </p>
          </div>
        </div>
      </section>

      <Faq faqs={SITE_FAQS} heading="Stonebridge Summerlin questions, answered" />

      <CtaBand
        heading="Ready to walk a Stonebridge home?"
        body="Pick a showing time or a 15-minute call. Gate registration and the HOA file are handled before you arrive."
        primaryLabel="Book a showing"
        campaign="home"
      />
    </>
  );
});

export const head = pageHead({
  title: 'Stonebridge Summerlin Homes for Sale, Prices & Floor Plans | Las Vegas 89138',
  description: `Stonebridge Summerlin homes for sale from the $500Ks to $3M. Median sold ${money(STONEBRIDGE_MARKET.medianSold)} (LVR MLS, ${STONEBRIDGE_MARKET.asOf}). Floor plans, 55+ Heritage at Stonebridge, Stonebridge Park, and live listings from Dr. Jan Duffy.`,
  path: '/',
});
