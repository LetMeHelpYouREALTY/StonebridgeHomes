import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import { CtaBand } from '~/components/ui/CtaBand';
import { DataNote } from '~/components/ui/DataNote';
import { Faq } from '~/components/ui/Faq';
import { PageHero } from '~/components/ui/PageHero';
import { StatGrid } from '~/components/ui/StatGrid';
import { EXAMPLE_LISTINGS, HERITAGE_MARKET, STONEBRIDGE_MARKET } from '~/lib/data';
import { money, pageHead } from '~/lib/seo';

const sb = STONEBRIDGE_MARKET;
const hb = HERITAGE_MARKET;

const faqs = [
  {
    q: 'What is the average home price in Stonebridge Summerlin?',
    a: `The median sold price in Stonebridge was ${money(sb.medianSold)} over the 12 months ending ${sb.asOf}, from ${sb.closedSales12mo} closed sales. The median list price of active homes was higher, ${money(sb.medianListPrice)}, because the larger Toll Brothers and Richmond American homes are over-represented among current listings.`,
  },
  {
    q: 'How much is a home in Heritage at Stonebridge?',
    a: `Heritage at Stonebridge homes sold at a median of ${money(hb.medianSold)} in the 12 months ending ${hb.asOf}. The two-bedroom Cromwell plans list in the low-to-mid $500,000s; the largest Evander plans list from the low $800,000s to about $1.3 million.`,
  },
  {
    q: 'Do Stonebridge homes sell for asking price?',
    a: `Close to it. Stonebridge sales closed at ${sb.pctOfOriginalList}% of original list price on average, and Heritage sales at ${hb.pctOfOriginalList}%. Over the last six months, about one in five Stonebridge sales and one in three Heritage sales closed at or above the final asking price.`,
  },
  {
    q: 'What is the price per square foot in Stonebridge?',
    a: `Active listings averaged $${sb.listPricePerSqFt} per square foot village-wide and $${hb.listPricePerSqFt} in Heritage at Stonebridge as of ${sb.asOf}. Sold prices per foot run lower; ask for a sold-price comp sheet for your floor plan.`,
  },
  {
    q: 'Is Stonebridge a buyer\'s or seller\'s market?',
    a: `With ${sb.activeListings} homes for sale and about ${sb.monthsOfSupply} months of supply, Stonebridge leans toward sellers. Under four months of supply usually means well-priced homes draw multiple showings in the first two weekends. Heritage, at ${hb.monthsOfSupply} months, is tighter still.`,
  },
];

export default component$(() => {
  return (
    <>
      <PageHero
        eyebrow="Sold data, not estimates"
        title="Stonebridge Summerlin prices"
        intro={`What homes in Stonebridge actually sold for: median ${money(sb.medianSold)} village-wide and ${money(hb.medianSold)} inside Heritage at Stonebridge, from Las Vegas REALTORS® MLS closed sales through ${sb.asOf}.`}
        image="prices"
        imageAlt="Abstract bar and line chart over a red rock skyline representing Stonebridge home prices"
      >
        <a href="/home-value" class="btn-primary">
          Price my Stonebridge home
        </a>
        <a href="/homes-for-sale" class="btn-outline">
          See current listings
        </a>
      </PageHero>
      <Breadcrumbs items={[{ name: 'Prices', path: '/prices' }]} />

      <section class="section pt-6">
        <div class="container-max">
          <h2 class="text-3xl font-bold md:text-4xl">Stonebridge village, last 12 months</h2>
          <div class="mt-8">
            <StatGrid
              stats={[
                { value: money(sb.medianSold), label: 'Median sold price' },
                { value: `${sb.closedSales12mo}`, label: 'Closed sales' },
                { value: `${sb.medianDaysToSell} days`, label: 'Median days to sell' },
                { value: `${sb.pctOfOriginalList}%`, label: 'Sold vs. original list' },
              ]}
            />
          </div>
          <DataNote asOf={sb.asOf} source={sb.source} />
        </div>
      </section>

      <section class="section bg-white pt-0">
        <div class="container-max">
          <h2 class="text-3xl font-bold md:text-4xl">Heritage at Stonebridge (55+), last 12 months</h2>
          <div class="mt-8">
            <StatGrid
              stats={[
                { value: money(hb.medianSold), label: 'Median sold price' },
                { value: `${hb.medianDaysToSell} days`, label: 'Median days to sell' },
                { value: `${hb.pctOfOriginalList}%`, label: 'Sold vs. original list' },
                { value: `${hb.monthsOfSupply} mo`, label: 'Months of supply' },
              ]}
            />
          </div>
          <DataNote asOf={hb.asOf} source={hb.source} />
        </div>
      </section>

      <section class="section">
        <div class="container-max grid gap-10 lg:grid-cols-2">
          <div>
            <h2 class="text-3xl font-bold">Active listings by price band</h2>
            <table class="table-site mt-6">
              <thead>
                <tr>
                  <th scope="col">Band</th>
                  <th scope="col">Listings</th>
                </tr>
              </thead>
              <tbody>
                {sb.priceBands.map((b) => (
                  <tr key={b.band}>
                    <td>{b.band}</td>
                    <td>{b.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p class="mt-3 text-sm text-stone-mist">
              {sb.activeListings} active listings, {sb.asOf}. Median list price {money(sb.medianListPrice)}, ${sb.listPricePerSqFt}{' '}
              per square foot.
            </p>
          </div>
          <div class="prose-site">
            <h2 class="text-3xl font-bold">How to read these numbers</h2>
            <p>
              The median sold price ({money(sb.medianSold)}) sits well below the median list price ({money(sb.medianListPrice)}). That
              is not a sign of overpricing. The Heritage neighborhood supplies a large share of closed sales at lower price
              points, while the biggest Toll Brothers and Scots Pine homes stay listed longer and skew the active median up.
            </p>
            <p>
              The number that matters for your offer is the sold price of your specific floor plan in the last 90 days.
              Two Stonebridge homes with the same square footage can close $150,000 apart depending on lot, view, and
              whether the backyard and flooring were finished by the builder or the owner.
            </p>
            <p>
              Reference points from {sb.asOf}: {EXAMPLE_LISTINGS[0].address.split(',')[0]} at {money(EXAMPLE_LISTINGS[0].price)}{' '}
              ({EXAMPLE_LISTINGS[0].sqft?.toLocaleString()} sq ft, Heritage) and {EXAMPLE_LISTINGS[1].address.split(',')[0]} at{' '}
              {money(EXAMPLE_LISTINGS[1].price)} (entry-gated Stonebridge).
            </p>
          </div>
        </div>
      </section>

      <section class="section bg-stone-sand">
        <div class="container-max">
          <h2 class="text-3xl font-bold md:text-4xl">Monthly costs beyond the price</h2>
          <div class="mt-6 overflow-x-auto">
            <table class="table-site bg-white">
              <thead>
                <tr>
                  <th scope="col">Cost</th>
                  <th scope="col">Stonebridge (entry-gated neighborhoods)</th>
                  <th scope="col">Heritage at Stonebridge (55+)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Summerlin West master association</td>
                  <td>$69 a month (2026)</td>
                  <td>$69 a month (2026)</td>
                </tr>
                <tr>
                  <td>Neighborhood sub-association</td>
                  <td>Varies by neighborhood; confirm on the resale package</td>
                  <td>$350 a month, confirmed {hb.hoaConfirmed}</td>
                </tr>
                <tr>
                  <td>Clark County property tax</td>
                  <td colSpan={2}>Roughly 0.5% to 0.7% of purchase price per year for a primary residence under the 3% abatement cap; newer homes assess close to purchase price</td>
                </tr>
                <tr>
                  <td>Special improvement district (SID)</td>
                  <td colSpan={2}>Some Summerlin West parcels carry an SID balance on the tax bill. It shows on the preliminary title report; ask before you waive contingencies.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Faq faqs={faqs} heading="Stonebridge price questions" />

      <CtaBand
        heading="Get a sold-price comp sheet for one floor plan"
        body="Book a 15-minute call with the plan or address. You get the last five closed sales with days on market and concessions, usually the same day."
        primaryLabel="Book a comp-sheet call"
        campaign="prices"
      />
    </>
  );
});

export const head = pageHead({
  title: `Stonebridge Summerlin Price Guide: Median Sold ${money(sb.medianSold)} | Nov 2026`,
  description: `Stonebridge Summerlin prices from MLS closed sales: median ${money(sb.medianSold)} village-wide, ${money(hb.medianSold)} in 55+ Heritage at Stonebridge, ${sb.medianDaysToSell} median days to sell, ${sb.pctOfOriginalList}% of list. Price bands, HOA fees, taxes, and what moves an offer.`,
  path: '/prices',
});
