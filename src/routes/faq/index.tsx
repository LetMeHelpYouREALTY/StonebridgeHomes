import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import { CtaBand } from '~/components/ui/CtaBand';
import { Faq } from '~/components/ui/Faq';
import { HERITAGE_MARKET, SITE_FAQS, STONEBRIDGE_MARKET } from '~/lib/data';
import { money, pageHead } from '~/lib/seo';
import { AGENT } from '~/lib/site';

const buying = [
  {
    q: 'How much do I need to put down on a Stonebridge home?',
    a: `A conventional loan on a ${money(STONEBRIDGE_MARKET.medianSold)} purchase at 5% down is about $41,000 plus closing costs of roughly 2% to 3%. Jumbo pricing starts above the 2026 conforming limit for Clark County. VA-eligible buyers can purchase with zero down.`,
  },
  {
    q: 'Do sellers in Stonebridge pay buyer agent commissions?',
    a: 'Since the 2024 industry settlement, buyer agent compensation is negotiated in the offer rather than set by the listing. Many Stonebridge sellers still offer a concession toward it. Dr. Duffy puts her buyer agreement in writing before the first showing, as Nevada law requires.',
  },
  {
    q: 'How long does it take to close on a Stonebridge home?',
    a: 'Financed purchases typically close in 30 to 35 days. Cash closes in 10 to 14 days. Gated neighborhoods add one step: the HOA resale package, which Nevada law requires sellers to deliver and which gives you a five-day review right.',
  },
  {
    q: 'What inspections matter most on a newer Stonebridge home?',
    a: 'Even on 2022 to 2025 construction, order a full home inspection plus a roof walk and a sewer scope. Check that any builder warranty is transferable, that the solar lease (if any) is assumable, and that unpermitted backyard work, common after builder closings, is disclosed.',
  },
];

const selling = [
  {
    q: 'How do I find out what my Stonebridge home is worth?',
    a: `Start with the instant estimate on the home value page, then ask Dr. Duffy for a comp sheet of the last five sales of your floor plan. Village-wide, homes sold at ${STONEBRIDGE_MARKET.pctOfOriginalList}% of original list in a median of ${STONEBRIDGE_MARKET.medianDaysToSell} days; Heritage homes at ${HERITAGE_MARKET.pctOfOriginalList}% in ${HERITAGE_MARKET.medianDaysToSell} days.`,
  },
  {
    q: 'How are showings handled behind the gate?',
    a: 'For Heritage, the gatehouse pre-registers buyer agents from a list Dr. Duffy maintains. For entry-gated neighborhoods, temporary codes cover photographers, inspectors, and agents. You never hand out your personal code.',
  },
  {
    q: 'When is the best time to list in Stonebridge?',
    a: 'Las Vegas showings typically peak February through May and again in September and October, when out-of-state buyers tour. Heritage inventory moves year-round because the 55+ buyer pool is less tied to school calendars.',
  },
];

export default component$(() => {
  return (
    <>
      <section class="bg-stone-slate py-16 text-white">
        <div class="container-max">
          <p class="eyebrow text-stone-gold">Answers, not scripts</p>
          <h1 class="mt-3 font-serif text-4xl font-bold text-white md:text-5xl">Stonebridge Summerlin questions</h1>
          <p class="mt-4 max-w-2xl text-lg text-stone-sand">
            Everything buyers and sellers ask about the village, with the numbers and the dates behind them. Call{' '}
            {AGENT.phoneDisplay} if your question is not here.
          </p>
        </div>
      </section>
      <Breadcrumbs items={[{ name: 'FAQ', path: '/faq' }]} />
      <Faq id="village" faqs={SITE_FAQS} heading="About the village" />
      <Faq id="buying" faqs={buying} heading="Buying in Stonebridge" />
      <Faq id="selling" faqs={selling} heading="Selling in Stonebridge" />
      <CtaBand
        heading="Still have a question?"
        body="Text it. Short questions get short answers, usually within the hour during business hours."
        primaryLabel="Send a question"
        primaryHref="/contact"
      />
    </>
  );
});

export const head = pageHead({
  title: 'Stonebridge Summerlin FAQ | Prices, HOA, Gates, Schools, Buying & Selling',
  description:
    'Answers to the questions buyers and sellers ask about Stonebridge, Summerlin West: where it is, what homes cost, HOA fees, which neighborhoods are gated, schools, floor plans, down payments, showings behind the gate, and when to list.',
  path: '/faq',
});
