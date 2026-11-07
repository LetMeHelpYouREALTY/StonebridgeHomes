import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import { CtaBand } from '~/components/ui/CtaBand';
import { Faq } from '~/components/ui/Faq';
import { Figure, PhotoStrip } from '~/components/ui/Figure';

import { PageHero } from '~/components/ui/PageHero';
import { HERITAGE_PLANS, NEIGHBORHOODS } from '~/lib/data';
import { pageHead } from '~/lib/seo';

const collections = ['Cromwell', 'Stirling', 'Evander'] as const;

const faqs = [
  {
    q: 'What floor plans are in Heritage at Stonebridge?',
    a: 'Lennar built nine single-story plans in three collections. Cromwell: Carson (1,232 sq ft), Claremont (1,237), Connery (1,422). Stirling: three plans from 1,747 to 2,236 sq ft including the Sloan. Evander: Everly (2,515, with a Next Gen suite), Ethan (about 2,700), and Elizabeth (2,873, with a 14-foot RV garage).',
  },
  {
    q: 'Are there single-story homes in Stonebridge outside Heritage?',
    a: 'Yes, but fewer. Every Heritage home is single story. The other neighborhoods mix one- and two-story plans, with two-story designs more common. Filter the live listings by "single story" or ask Dr. Duffy for the current single-story inventory.',
  },
  {
    q: 'What is the biggest floor plan in Stonebridge?',
    a: 'Builder plans topped out near 4,500 square feet in the Toll Brothers collections. Richmond American\'s Scots Pine plans reach about 4,000 square feet; a 4,017 sq ft Scots Pine home at 12439 Sky Bluff Ct listed at $2,787,750 in July 2026.',
  },
  {
    q: 'Can I get the original builder floor plan drawings?',
    a: 'Often. The builders no longer sell in Stonebridge, but Dr. Duffy keeps the Lennar Heritage brochures and can request plan sheets from most sellers. Verify room dimensions in person; builder drawings are approximate.',
  },
];

export default component$(() => {
  return (
    <>
      <PageHero
        eyebrow="Every builder, every collection"
        title="Stonebridge Summerlin floor plans"
        intro="From 1,232 square feet in Heritage's Cromwell collection to about 4,500 square feet in the Toll Brothers collections. Square footage, bedrooms, garages, and which plans resell fastest."
        image="floor-plan-rendering"
        imageAlt="Top-down rendering of a furnished single-story floor plan with great room, island kitchen, primary suite, and two-car garage"
      >
        <a href="#heritage-plans" class="btn-primary">
          Heritage 55+ plans
        </a>
        <a href="#village-plans" class="btn-outline">
          Other neighborhoods
        </a>
      </PageHero>
      <Breadcrumbs items={[{ name: 'Floor Plans', path: '/floor-plans' }]} />

      <section class="section pt-6" id="heritage-plans">
        <div class="container-max">
          <p class="eyebrow">Heritage at Stonebridge · Lennar · single story</p>
          <h2 class="mt-2 text-3xl font-bold md:text-4xl">Nine plans, three collections</h2>
          <p class="mt-3 max-w-3xl text-lg text-stone-ink/85">
            All 421 Heritage homes are one story with two-car or larger garages. Every plan came with Lennar's
            Everything's Included package: quartz counters, stainless appliances, and smart-home controls.
          </p>
          <PhotoStrip
            items={[
              { name: 'great-room-interior', alt: 'Open great room with island kitchen and a wide sliding glass wall to a covered patio', caption: 'Great room and island kitchen, the core of every Heritage plan' },
              { name: 'open-kitchen-island', alt: 'Kitchen island with white quartz counters, bar seating, and stainless appliances', caption: 'Quartz counters and stainless appliances came standard' },
              { name: 'primary-suite', alt: 'Primary bedroom with a mountain view window and an open door to a bathroom with a freestanding tub', caption: 'Primary suites sit at the back of the plan, away from the street' },
            ]}
          />
          {collections.map((c) => (
            <div key={c} class="mt-10">
              <h3 class="text-2xl font-bold">{c} collection</h3>
              <div class="mt-4 overflow-x-auto">
                <table class="table-site bg-white">
                  <thead>
                    <tr>
                      <th scope="col">Plan</th>
                      <th scope="col">Sq ft</th>
                      <th scope="col">Beds</th>
                      <th scope="col">Baths</th>
                      <th scope="col">Garage</th>
                      <th scope="col">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HERITAGE_PLANS.filter((p) => p.collection === c).map((p) => (
                      <tr key={p.name}>
                        <td class="font-semibold">{p.name}</td>
                        <td>{p.sqft.toLocaleString()}</td>
                        <td>{p.beds}</td>
                        <td>{p.baths}</td>
                        <td>{p.garage}</td>
                        <td class="text-stone-mist">{p.note ?? ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <p class="mt-6 text-sm text-stone-mist">
            Square footages are Lennar's approximate figures. Two Stirling plan names are not consistently published;
            they are listed by size. Confirm the plan name on the listing or the recorded plat.
          </p>
        </div>
      </section>

      <section class="section bg-white" id="village-plans">
        <div class="container-max">
          <p class="eyebrow">Entry-gated neighborhoods</p>
          <h2 class="mt-2 text-3xl font-bold md:text-4xl">Plans by builder across the village</h2>
          <p class="mt-3 max-w-3xl text-lg text-stone-ink/85">
            Summerlin's developer, Howard Hughes Holdings, lists Stonebridge plans from about 1,600 to more than 4,500
            square feet across one- and two-story designs. Builder plan names varied by phase; the neighborhood tells you
            the builder, and the listing tells you the plan.
          </p>
          <div class="mt-8">
            <Figure
              name="two-story-contemporary"
              alt="Two-story contemporary home with a courtyard entry, black-framed windows, and a three-car garage"
              caption="Two-story plans from 2,000 to about 4,500 sq ft make up most of the village outside Heritage."
              sizes="100vw"
            />
          </div>
          <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {NEIGHBORHOODS.filter((n) => n.slug !== 'heritage-at-stonebridge').map((n) => (
              <a key={n.slug} href={`/neighborhoods#${n.slug}`} class="card p-6">
                <p class="eyebrow">{n.builder}</p>
                <h3 class="mt-2 text-xl font-bold">{n.name}</h3>
                <p class="mt-1 text-sm text-stone-mist">{n.sizes}</p>
                <p class="mt-2 text-base text-stone-ink/80">{n.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container-max grid gap-10 lg:grid-cols-2 lg:items-center">
          <Figure
            name="covered-patio-sunset"
            alt="Covered back patio with outdoor seating, fire pit, and turf, looking over a block wall to red rock mountains at sunset"
            caption="A finished backyard with a view is the upgrade buyers pay for first."
          />
          <div class="prose-site">
          <h2 class="text-3xl font-bold md:text-4xl">Which plans resell fastest</h2>
          <p>
            In Heritage, the Cromwell two-bedroom plans are the lowest-priced new-era single-story homes in Summerlin West,
            which keeps buyer demand for them steady. The Evander Elizabeth, with the only RV garage in
            the community, has sold just twice, so there is no reliable comp for it yet.
          </p>
          <p>
            Outside Heritage, single-story plans and homes with finished backyards and views draw the most showings.
            Unfinished backyards, which some builders left to the owner, are a frequent price negotiation point.
          </p>
          </div>
        </div>
      </section>

      <Faq faqs={faqs} heading="Floor plan questions" />

      <CtaBand
        heading="Want the plan sheet for a specific home?"
        body="Book a call with the address. Dr. Duffy will match it to the builder plan, pull the last sales of that plan, and tell you what to look for on the walkthrough."
        primaryLabel="Book a plan call"
        campaign="floor-plans"
      />
    </>
  );
});

export const head = pageHead({
  title: 'Stonebridge Summerlin Floor Plans | 1,232 to 4,500 Sq Ft, All Builders',
  description:
    'Every Stonebridge Summerlin floor plan: Lennar\'s nine single-story Heritage at Stonebridge plans (Cromwell, Stirling, Evander) with square footage and garages, plus KB Home, Pulte, Woodside, Richmond American, and Toll Brothers plans up to 4,500 sq ft.',
  path: '/floor-plans',
});
