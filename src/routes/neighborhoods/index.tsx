import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import { CtaBand } from '~/components/ui/CtaBand';
import { Faq } from '~/components/ui/Faq';
import { PhotoStrip } from '~/components/ui/Figure';

import { PageHero } from '~/components/ui/PageHero';
import { NEIGHBORHOODS } from '~/lib/data';
import { pageHead } from '~/lib/seo';

const faqs = [
  {
    q: 'How many neighborhoods are in Stonebridge Summerlin?',
    a: 'Twelve named neighborhoods from eight builders: Caledonia and Bristle Vale (KB Home), Westcott and Graycliff (Lennar), Foxtail and Starling (Pulte), Bixby Creek (Woodside), Scots Pine and Skye Knoll (Richmond American), Sandalwood, the Toll Brothers collections, and Heritage at Stonebridge (Lennar, 55+). Pardee also built in the village.',
  },
  {
    q: 'Which Stonebridge neighborhoods are gated?',
    a: 'Heritage at Stonebridge has a staffed guard gate. Several other neighborhoods have an unstaffed entry gate. The main village roads, Stonebridge Park, and Doral Academy Red Rock are open. Each listing states its gate type; confirm it on the showing.',
  },
  {
    q: 'Which neighborhood has the best Red Rock views?',
    a: 'The village rises toward the west. Streets on the western edge, where the Toll Brothers and Richmond American collections sit, face the red sandstone escarpment most directly. East-facing lots across the village look over the valley and the Strip skyline at night.',
  },
];

export default component$(() => {
  return (
    <>
      <PageHero
        eyebrow="502 acres · Summerlin Village 24"
        title="Stonebridge neighborhoods"
        intro="Stonebridge is not one builder community. It is twelve neighborhoods from eight builders, sold from 2018 to 2025, wrapped around an 11-acre village park. Here is who built what, and what each one is known for."
        image="neighborhood-street"
        imageAlt="Quiet residential street in a newer Summerlin West neighborhood with sidewalks, street trees, and mountains at the end"
      >
        <a href="/homes-for-sale" class="btn-primary">
          Homes for sale by neighborhood
        </a>
      </PageHero>
      <Breadcrumbs items={[{ name: 'Neighborhoods', path: '/neighborhoods' }]} />

      <section class="section pt-6">
        <div class="container-max">
          <PhotoStrip
            items={[
              { name: 'village-aerial-dusk', alt: 'Aerial view of the village at dusk with the park in the center', caption: 'The village from above: park in the middle, Heritage behind its gate to the west' },
              { name: 'staffed-gatehouse', alt: 'Stone gatehouse with wrought iron gates at a community entrance', caption: 'Heritage has the only staffed gate; other neighborhoods use an entry gate' },
            ]}
          />
          <div class="mt-10 grid gap-6 md:grid-cols-2">
            {NEIGHBORHOODS.map((n) => (
              <article key={n.slug} id={n.slug} class="card scroll-mt-24 p-6">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p class="eyebrow">{n.builder}</p>
                    <h2 class="mt-1 text-2xl font-bold">{n.name}</h2>
                  </div>
                  <span class="rounded-full bg-stone-sand px-3 py-1 text-xs font-semibold text-stone-slate">{n.gated}</span>
                </div>
                <dl class="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt class="text-stone-mist">Home type</dt>
                    <dd class="font-medium">{n.type}</dd>
                  </div>
                  <div>
                    <dt class="text-stone-mist">Sizes</dt>
                    <dd class="font-medium">{n.sizes}</dd>
                  </div>
                </dl>
                <p class="mt-4 text-base leading-7 text-stone-ink/85">{n.blurb}</p>
                {n.slug === 'heritage-at-stonebridge' && (
                  <a href="/heritage-at-stonebridge" class="mt-4 inline-block font-semibold text-stone-rock">
                    Heritage at Stonebridge guide
                  </a>
                )}
              </article>
            ))}
          </div>
          <p class="mt-8 text-sm text-stone-mist">
            Builder attributions from Summerlin's village records and MLS subdivision names. Neighborhood size ranges
            vary by phase; the listing's recorded square footage is authoritative.
          </p>
        </div>
      </section>

      <Faq faqs={faqs} heading="Neighborhood questions" />

      <CtaBand
        heading="Not sure which neighborhood fits?"
        body="Tell Dr. Duffy your budget, single-story or two, and whether a staffed gate matters. You get a shortlist of two or three neighborhoods with recent sold prices."
        primaryLabel="Book a 15-minute call"
        campaign="neighborhoods"
      />
    </>
  );
});

export const head = pageHead({
  title: 'Stonebridge Summerlin Neighborhoods: 12 Communities, 8 Builders | 89138',
  description:
    'Guide to every Stonebridge Summerlin neighborhood: Caledonia, Bristle Vale, Westcott, Graycliff, Foxtail, Starling, Bixby Creek, Scots Pine, Skye Knoll, Sandalwood, Toll Brothers, and 55+ Heritage at Stonebridge. Builders, gates, sizes, and what each is known for.',
  path: '/neighborhoods',
});
