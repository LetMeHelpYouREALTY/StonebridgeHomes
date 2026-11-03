import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import { CtaBand } from '~/components/ui/CtaBand';
import { DataNote } from '~/components/ui/DataNote';
import { Faq } from '~/components/ui/Faq';
import { RealScoutHomeValue } from '~/components/ui/RealScout';
import { StatGrid } from '~/components/ui/StatGrid';
import { HERITAGE_MARKET, STONEBRIDGE_MARKET } from '~/lib/data';
import { money, pageHead } from '~/lib/seo';
import { AGENT } from '~/lib/site';

const sb = STONEBRIDGE_MARKET;
const hb = HERITAGE_MARKET;

const faqs = [
  {
    q: 'How accurate is the instant home value?',
    a: 'It is an automated estimate from the MLS feed and public records. In a village with twelve builder neighborhoods and a 55+ section, automated values often miss by 5% or more. Use it as a starting point, then get a plan-specific comp sheet.',
  },
  {
    q: 'What do Stonebridge sellers net after costs?',
    a: 'Plan on about 1% for title, escrow, and transfer tax (Clark County charges $2.55 per $500 of price), plus whatever buyer concessions and agent compensation you agree to. Dr. Duffy provides a net sheet with every pricing consult.',
  },
  {
    q: 'Should I finish the backyard before listing?',
    a: 'Usually not. Buyers tend to price an unfinished yard at roughly its cost, so you rarely recover more than you spend. Clean, lit, and weed-free beats a rushed install. Interior paint and flooring touch-ups return more.',
  },
];

export default component$(() => {
  return (
    <>
      <section class="bg-stone-slate py-16 text-white">
        <div class="container-max">
          <p class="eyebrow text-stone-gold">Sellers</p>
          <h1 class="mt-3 font-serif text-4xl font-bold text-white md:text-5xl">What is your Stonebridge home worth?</h1>
          <p class="mt-4 max-w-2xl text-lg text-stone-sand">
            Village-wide, homes sold at {sb.pctOfOriginalList}% of original list in a median of {sb.medianDaysToSell} days
            through {sb.asOf}. Get the instant number, then the real one.
          </p>
        </div>
      </section>
      <Breadcrumbs items={[{ name: 'Home Value', path: '/home-value' }]} />

      <RealScoutHomeValue />

      <section class="section bg-white">
        <div class="container-max">
          <h2 class="text-3xl font-bold md:text-4xl">The market you are selling into</h2>
          <div class="mt-8">
            <StatGrid
              stats={[
                { value: money(sb.medianSold), label: 'Village median sold' },
                { value: money(hb.medianSold), label: 'Heritage median sold' },
                { value: `${sb.monthsOfSupply} mo`, label: 'Village months of supply' },
                { value: `${hb.monthsOfSupply} mo`, label: 'Heritage months of supply' },
              ]}
            />
          </div>
          <DataNote asOf={sb.asOf} source={sb.source} />
        </div>
      </section>

      <section class="section">
        <div class="container-max prose-site">
          <h2 class="text-3xl font-bold md:text-4xl">How Dr. Duffy prices a Stonebridge home</h2>
          <ul>
            <li>Pulls the last five closed sales of your exact floor plan, not your square footage range.</li>
            <li>Adjusts for lot position, view direction, backyard completion, and builder-installed versus owner upgrades.</li>
            <li>Reads the active competition: which listings have sat past 30 days and why.</li>
            <li>Sets a launch price for the first two weekends, when showings peak, and a plan if offers do not arrive by day 14.</li>
          </ul>
          <p>
            Call or text {AGENT.phoneDisplay} with your address. The comp sheet and net sheet usually come back the same day.
          </p>
        </div>
      </section>

      <Faq faqs={faqs} heading="Seller questions" />

      <CtaBand
        heading="Get the sold-price comp sheet for your plan"
        body="No obligation, no automated follow-up sequence. One sheet, one conversation."
        primaryLabel="Book a pricing call"
        campaign="home-value"
      />
    </>
  );
});

export const head = pageHead({
  title: `Stonebridge Summerlin Home Value | Sold ${sb.pctOfOriginalList}% of List in ${sb.medianDaysToSell} Days`,
  description: `Find out what your Stonebridge Summerlin home is worth. Instant estimate plus a floor-plan comp sheet from Dr. Jan Duffy. Village median sold ${money(sb.medianSold)}, Heritage ${money(hb.medianSold)}, ${sb.monthsOfSupply} months of supply as of ${sb.asOf}.`,
  path: '/home-value',
});
