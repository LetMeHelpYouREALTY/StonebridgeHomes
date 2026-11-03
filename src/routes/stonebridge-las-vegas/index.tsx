import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import { CtaBand } from '~/components/ui/CtaBand';
import { Faq } from '~/components/ui/Faq';
import { PageHero } from '~/components/ui/PageHero';
import { STONEBRIDGE_MARKET } from '~/lib/data';
import { money, pageHead } from '~/lib/seo';
import { AREA } from '~/lib/site';

const faqs = [
  {
    q: 'What is Stonebridge in Las Vegas?',
    a: `Stonebridge is a ${AREA.acres}-acre village of Summerlin West on the far west edge of Las Vegas, ZIP ${AREA.zip}, platted as Summerlin Village 24. Home sales began in 2018 and the builders finished in 2025. It includes twelve neighborhoods, the 55+ Heritage at Stonebridge, Stonebridge Park, and Doral Academy Red Rock.`,
  },
  {
    q: 'Is Stonebridge Learning Academy in Stonebridge Summerlin?',
    a: 'No. Stone Bridge Learning Academy is a preschool and childcare provider for ages 6 weeks to 12 years with locations at 1951 S Rainbow Blvd (Las Vegas 89146), 3051 W Horizon Ridge Pkwy (Henderson), and 3760 E Sunset Rd (Las Vegas). None of them is in Summerlin, and the school is not affiliated with the Stonebridge village or this site. Its website is stonebridgelasvegas.com.',
  },
  {
    q: 'What is Stonebridge Hospitality?',
    a: 'Stonebridge Companies is a hotel management company headquartered in Denver, Colorado, founded in 1991. It manages more than 160 hotels in over 20 states under Marriott, Hilton, Hyatt, and IHG brands. It has no connection to the Stonebridge neighborhood in Summerlin, and this site is not affiliated with it.',
  },
  {
    q: 'How far is Stonebridge from the Las Vegas Strip and the airport?',
    a: 'About 20 miles to the center of the Strip, roughly 30 minutes without traffic by the 215 Beltway and Summerlin Parkway. Harry Reid International Airport is about 27 minutes by the 215. Downtown Summerlin is seven to eight minutes.',
  },
  {
    q: 'What is the weather like in Stonebridge compared with the rest of Las Vegas?',
    a: 'Stonebridge sits on elevated ground several hundred feet above the valley floor near the Red Rock escarpment. Summer afternoons typically run a few degrees cooler than the Strip, winter mornings occasionally see frost, and snow on the Red Rock peaks is visible from the village a few days each winter.',
  },
];

export default component$(() => {
  const sb = STONEBRIDGE_MARKET;
  return (
    <>
      <PageHero
        eyebrow="Orientation guide"
        title="Stonebridge, Las Vegas: the village, the park, and the name mix-ups"
        intro="There is one Stonebridge neighborhood in Las Vegas: the Summerlin West village in ZIP 89138. There is also a preschool and a hotel company that share the name and have nothing to do with it. This page sorts out which is which."
        image="stonebridge-village"
        imageAlt="Illustrated aerial view of Stonebridge's curving streets with the village park in the middle and red rock ridges behind"
      >
        <a href="/homes-for-sale" class="btn-primary">
          Stonebridge homes for sale
        </a>
      </PageHero>
      <Breadcrumbs items={[{ name: 'Stonebridge Las Vegas', path: '/stonebridge-las-vegas' }]} />

      <section class="section pt-6">
        <div class="container-max grid gap-10 lg:grid-cols-2">
          <div class="prose-site">
            <h2 class="text-3xl font-bold md:text-4xl">The neighborhood: Stonebridge, Summerlin West</h2>
            <p>
              Stonebridge is the westernmost village of Summerlin, on elevated ground north of Charleston Boulevard near
              Sky Vista Drive and west of the 215 Beltway. Howard Hughes planned it as Summerlin Village 24 across about{' '}
              {AREA.acres} acres with a Prairie Highland design theme meant to echo the Mojave landscape.
            </p>
            <p>
              KB Home opened the first neighborhood, Caledonia, in 2018. Lennar, Pulte, Woodside, Richmond American, Toll
              Brothers, Tri Pointe, and Pardee followed, and the last homes closed in 2025. Today every sale is a resale:{' '}
              {sb.closedSales12mo} closed in the last 12 months at a median of {money(sb.medianSold)}.
            </p>
            <p>
              Inside the village you will find Stonebridge Park (public, about 11 acres), Doral Academy Red Rock (public
              charter), and Heritage at Stonebridge (private 55+ neighborhood with its own clubhouse). Red Rock Canyon
              National Conservation Area is about five minutes west.
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="/neighborhoods" class="btn-dark">
                The 12 neighborhoods
              </a>
              <a href="/prices" class="btn-light">
                Prices
              </a>
            </div>
          </div>
          <div class="space-y-6">
            <article class="card p-6">
              <p class="eyebrow">Not the neighborhood</p>
              <h3 class="mt-2 text-2xl font-bold">Stone Bridge Learning Academy</h3>
              <p class="mt-3 text-base leading-7 text-stone-ink/85">
                A preschool and childcare provider for ages 6 weeks to 12 years. Locations: 1951 S Rainbow Blvd, Las Vegas
                89146; 3051 W Horizon Ridge Pkwy, Henderson; 3760 E Sunset Rd, Las Vegas. The Rainbow Boulevard campus is
                about a 20-minute drive from Stonebridge. Not affiliated with this site.
              </p>
            </article>
            <article class="card p-6">
              <p class="eyebrow">Not the neighborhood</p>
              <h3 class="mt-2 text-2xl font-bold">Stonebridge Companies (hospitality)</h3>
              <p class="mt-3 text-base leading-7 text-stone-ink/85">
                A Denver-based hotel management company founded in 1991 that operates more than 160 hotels in over 20
                states. It does not own or manage anything in the Summerlin village. Not affiliated with this site.
              </p>
            </article>
            <article class="card p-6">
              <p class="eyebrow">Same village</p>
              <h3 class="mt-2 text-2xl font-bold">Stonebridge Park and Heritage at Stonebridge</h3>
              <p class="mt-3 text-base leading-7 text-stone-ink/85">
                Both are inside the village. The park is public; Heritage is a gated 55+ neighborhood.{' '}
                <a href="/stonebridge-park" class="font-semibold text-stone-rock">
                  Park guide
                </a>{' '}
                ·{' '}
                <a href="/heritage-at-stonebridge" class="font-semibold text-stone-rock">
                  Heritage guide
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="section bg-white">
        <div class="container-max">
          <h2 class="text-3xl font-bold md:text-4xl">Getting around from Stonebridge</h2>
          <div class="mt-6 overflow-x-auto">
            <table class="table-site">
              <thead>
                <tr>
                  <th scope="col">Destination</th>
                  <th scope="col">Typical drive</th>
                  <th scope="col">Route</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Red Rock Canyon scenic loop entrance</td><td>About 5 to 8 minutes</td><td>Charleston Blvd west</td></tr>
                <tr><td>Downtown Summerlin</td><td>About 7 to 8 minutes</td><td>Charleston Blvd east to the 215</td></tr>
                <tr><td>Summerlin Hospital</td><td>About 10 minutes</td><td>215 Beltway south</td></tr>
                <tr><td>Las Vegas Strip (center)</td><td>About 30 minutes</td><td>Summerlin Parkway to US 95 or the 215</td></tr>
                <tr><td>Harry Reid International Airport</td><td>About 27 minutes</td><td>215 Beltway south</td></tr>
              </tbody>
            </table>
          </div>
          <p class="mt-3 text-sm text-stone-mist">Drive times are off-peak estimates. Charleston Boulevard is the only direct arterial, so weekday peaks add time.</p>
        </div>
      </section>

      <Faq faqs={faqs} heading="Stonebridge Las Vegas questions" />

      <CtaBand
        heading="Ready to see the real Stonebridge?"
        body="Call for a 20-minute driving tour of the village: the park, the gates, the view streets, and what each neighborhood sold for."
      />
    </>
  );
});

export const head = pageHead({
  title: 'Stonebridge Las Vegas Guide | Summerlin West Village, Park, 55+ Heritage & Name Mix-Ups',
  description:
    'Stonebridge Las Vegas explained: the 502-acre Summerlin West village in ZIP 89138, its twelve neighborhoods, Stonebridge Park, and 55+ Heritage at Stonebridge. Plus why Stone Bridge Learning Academy and Stonebridge Companies (hospitality) are different things.',
  path: '/stonebridge-las-vegas',
});
