import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import { CtaBand } from '~/components/ui/CtaBand';
import { DataNote } from '~/components/ui/DataNote';
import { Faq } from '~/components/ui/Faq';
import { PageHero } from '~/components/ui/PageHero';
import { RealScoutListings } from '~/components/ui/RealScout';
import { EXAMPLE_LISTINGS, HERITAGE_MARKET, STONEBRIDGE_MARKET } from '~/lib/data';
import { money, pageHead } from '~/lib/seo';
import { AGENT } from '~/lib/site';

const faqs = [
  {
    q: 'How many homes are for sale in Stonebridge Summerlin?',
    a: `${STONEBRIDGE_MARKET.activeListings} homes were listed for sale in Stonebridge as of ${STONEBRIDGE_MARKET.asOf}, about ${STONEBRIDGE_MARKET.monthsOfSupply} months of supply at the current sales pace. ${HERITAGE_MARKET.activeListings} of them were inside Heritage at Stonebridge.`,
  },
  {
    q: 'Are there new construction homes for sale in Stonebridge?',
    a: 'No. The builders finished the village in 2025, so every Stonebridge home for sale is a resale. Many are under five years old and still carry transferable builder warranties on structure and systems; ask for the warranty paperwork with the resale package.',
  },
  {
    q: 'What is the cheapest home in Stonebridge?',
    a: `The lowest-priced listings are the two-bedroom Cromwell plans in Heritage at Stonebridge. On ${STONEBRIDGE_MARKET.asOf}, ${EXAMPLE_LISTINGS[2].address.split(',')[0]} was listed at ${money(EXAMPLE_LISTINGS[2].price)} and ${EXAMPLE_LISTINGS[0].address.split(',')[0]} at ${money(EXAMPLE_LISTINGS[0].price)}. Outside Heritage, entry prices start around $750,000.`,
  },
  {
    q: 'How do I see a Stonebridge home that is behind a gate?',
    a: `Call or text ${AGENT.phoneDisplay}. Dr. Duffy registers you with the Heritage gatehouse ahead of time and has codes for the entry-gated neighborhoods, so a showing takes one call, not three.`,
  },
];

export default component$(() => {
  const sb = STONEBRIDGE_MARKET;
  return (
    <>
      <PageHero
        eyebrow="Live MLS feed · Summerlin West 89138"
        title="Stonebridge Summerlin homes for sale"
        intro={`${sb.activeListings} homes on the market from about $500,000 to $3 million, median list price ${money(sb.medianListPrice)}. Every listing below is pulled from the Las Vegas REALTORS® MLS and refreshes as sellers change prices.`}
        image="hero-stonebridge"
        imageAlt="Illustration of single-story homes at dusk below the red rock ridges west of Summerlin"
      >
        <a href="#listings-heading" class="btn-primary">
          Jump to listings
        </a>
        <a href={`tel:${AGENT.phoneTel}`} class="btn-outline">
          Call {AGENT.phoneDisplay}
        </a>
      </PageHero>
      <Breadcrumbs items={[{ name: 'Homes for Sale', path: '/homes-for-sale' }]} />

      <section class="section pt-6">
        <div class="container-max">
          <h2 class="text-3xl font-bold md:text-4xl">Where the {sb.activeListings} listings fall by price</h2>
          <div class="mt-6 overflow-x-auto">
            <table class="table-site">
              <thead>
                <tr>
                  <th scope="col">Price band</th>
                  <th scope="col">Homes for sale</th>
                  <th scope="col">What you typically get</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$500K to $600K</td>
                  <td>{sb.priceBands[0].count}</td>
                  <td>Two-bedroom Cromwell plans in Heritage at Stonebridge, 1,232 to 1,422 sq ft, single story</td>
                </tr>
                <tr>
                  <td>$600K to $750K</td>
                  <td>{sb.priceBands[1].count}</td>
                  <td>Stirling plans in Heritage, 1,747 to 2,236 sq ft</td>
                </tr>
                <tr>
                  <td>$750K to $1M</td>
                  <td>{sb.priceBands[2].count}</td>
                  <td>Evander plans in Heritage and the smaller KB Home, Lennar, and Pulte neighborhoods</td>
                </tr>
                <tr>
                  <td>$1M to $1.5M</td>
                  <td>{sb.priceBands[3].count}</td>
                  <td>Larger two-story plans from Lennar, Pulte, Woodside, and Richmond American</td>
                </tr>
                <tr>
                  <td>$1.5M to $2M</td>
                  <td>{sb.priceBands[4].count}</td>
                  <td>Toll Brothers and Richmond American plans on view lots</td>
                </tr>
                <tr>
                  <td>$2M to $3M</td>
                  <td>{sb.priceBands[5].count}</td>
                  <td>Scots Pine and Toll Brothers homes near 4,000 sq ft on the elevated west edge</td>
                </tr>
              </tbody>
            </table>
          </div>
          <DataNote asOf={sb.asOf} source={sb.source} />
        </div>
      </section>

      <RealScoutListings heading="Every Stonebridge home for sale" />

      <section class="section">
        <div class="container-max grid gap-8 md:grid-cols-3">
          {EXAMPLE_LISTINGS.map((l) => (
            <article key={l.address} class="card p-6">
              <p class="eyebrow">{l.neighborhood}</p>
              <h3 class="mt-2 text-xl font-bold">{l.address.split(',')[0]}</h3>
              <p class="mt-1 font-serif text-3xl text-stone-rock">{money(l.price)}</p>
              {l.sqft && (
                <p class="mt-2 text-base text-stone-ink/80">
                  {l.beds} bed · {l.baths} bath · {l.sqft.toLocaleString()} sq ft{l.plan ? ` · ${l.plan}` : ''}
                </p>
              )}
              <p class="mt-2 text-sm text-stone-mist">Listed {l.listed}. {l.note}</p>
            </article>
          ))}
        </div>
        <p class="container-max mt-6 text-sm text-stone-mist">
          Example listings are a snapshot from {sb.asOf}. Status and price may have changed; the live feed above is
          authoritative.
        </p>
      </section>

      <Faq faqs={faqs} heading="Buying in Stonebridge: quick answers" />

      <CtaBand
        heading="Want to walk one of these this week?"
        body="Showings inside the gates take one call. Dr. Duffy handles gate registration and pulls the HOA file before you tour."
      />
    </>
  );
});

export const head = pageHead({
  title: `Stonebridge Summerlin Homes for Sale | ${STONEBRIDGE_MARKET.activeListings} Live Listings, $500K to $3M`,
  description: `Browse every Stonebridge Summerlin home for sale, updated from the Las Vegas MLS. ${STONEBRIDGE_MARKET.activeListings} listings as of ${STONEBRIDGE_MARKET.asOf}, median list ${money(STONEBRIDGE_MARKET.medianListPrice)}. Price bands, 55+ Heritage homes, and gate-registered showings with Dr. Jan Duffy.`,
  path: '/homes-for-sale',
});
