import { component$ } from '@builder.io/qwik';
import { StructuredData } from '~/components/StructuredData';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import { CtaBand } from '~/components/ui/CtaBand';
import { Faq } from '~/components/ui/Faq';
import { PhotoStrip } from '~/components/ui/Figure';

import { PageHero } from '~/components/ui/PageHero';
import { pageHead } from '~/lib/seo';
import { AREA, SITE_ORIGIN, abs } from '~/lib/site';

const park = AREA.park;

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Park',
  '@id': `${SITE_ORIGIN}/stonebridge-park#park`,
  name: park.name,
  description:
    'About 11-acre village park in Stonebridge, Summerlin West, with lighted soccer fields, a lighted basketball court, pickleball courts, a shaded playground, picnic pavilions, and an exercise area. Opened April 2021.',
  address: { '@type': 'PostalAddress', streetAddress: '870 Crossbridge Road', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89138', addressCountry: 'US' },
  openingHours: 'Mo-Su 06:00-23:00',
  isAccessibleForFree: true,
  publicAccess: true,
  containedInPlace: { '@id': `${SITE_ORIGIN}/#stonebridge` },
  amenityFeature: ['Lighted soccer fields', 'Lighted basketball court', 'Pickleball courts', 'Shaded playground', 'Picnic pavilions', 'Exercise area'].map((n) => ({ '@type': 'LocationFeatureSpecification', name: n, value: true })),
  image: abs('/images/park-fields-courts.jpg'),
};

const faqs = [
  { q: 'Where is Stonebridge Park?', a: `${park.address}, in the middle of the Stonebridge village of Summerlin West, just east of the Heritage at Stonebridge gate and next to Doral Academy Red Rock.` },
  { q: 'What are Stonebridge Park hours?', a: `${park.hours}. The park is operated by the ${park.operator}, which runs all Summerlin community parks.` },
  { q: 'Does Stonebridge Park have pickleball courts?', a: 'Yes. Stonebridge Park has public pickleball courts open to anyone, no membership required. Heritage at Stonebridge residents also have private courts inside their clubhouse grounds.' },
  { q: 'Is Stonebridge Park free to use?', a: 'Yes. It is a public Summerlin community park. Field reservations for organized leagues go through the Summerlin Council.' },
  { q: 'What trails connect to Stonebridge Park?', a: 'The park links to the Summerlin trail system. The first mile of the paved Red Rock Legacy Trail opened in April 2026 at Charleston Boulevard and Sky Vista Drive, a short ride from the park toward Red Rock Canyon.' },
];

export default component$(() => {
  return (
    <>
      <StructuredData data={schema} />
      <PageHero
        eyebrow="Open to everyone · 6 AM to 11 PM"
        title="Stonebridge Park"
        intro={`About ${park.acres} acres at ${park.address.split(',')[0]} with lighted soccer fields, pickleball, basketball, a shaded playground, and picnic pavilions. Opened ${park.opened} and run by the ${park.operator}.`}
        image="park-fields-courts"
        imageAlt="Lighted soccer field, shaded playground, pavilions, and pickleball courts at a desert park with red rock mountains behind"
      >
        <a href="/homes-for-sale" class="btn-primary">
          Homes near the park
        </a>
      </PageHero>
      <Breadcrumbs items={[{ name: 'Stonebridge Park', path: '/stonebridge-park' }]} />

      <section class="section pt-6">
        <div class="container-max grid gap-10 lg:grid-cols-2">
          <div class="prose-site">
            <h2 class="text-3xl font-bold md:text-4xl">What is at the park</h2>
            <ul>
              <li>Lighted soccer fields, reservable through the Summerlin Council for leagues</li>
              <li>A lighted basketball court and pickleball courts</li>
              <li>A shaded playground and picnic pavilions with ramadas</li>
              <li>An outdoor exercise area</li>
              <li>Connections to the Summerlin trail network</li>
            </ul>
            <p>
              The park opened in {park.opened} as the village's shared green space. It sits at the village's center, so
              most Stonebridge homes are within a ten-minute walk. Doral Academy Red Rock, a public charter school, is on
              Crossbridge Drive beside it.
            </p>
          </div>
          <div class="card p-6">
            <h2 class="text-2xl font-bold">Park facts</h2>
            <dl class="mt-4 space-y-3 text-base">
              <div class="flex justify-between gap-4 border-b border-stone-dune pb-2">
                <dt class="text-stone-mist">Address</dt>
                <dd class="text-right font-medium">{park.address}</dd>
              </div>
              <div class="flex justify-between gap-4 border-b border-stone-dune pb-2">
                <dt class="text-stone-mist">Size</dt>
                <dd class="font-medium">About {park.acres} acres</dd>
              </div>
              <div class="flex justify-between gap-4 border-b border-stone-dune pb-2">
                <dt class="text-stone-mist">Hours</dt>
                <dd class="font-medium">{park.hours}</dd>
              </div>
              <div class="flex justify-between gap-4 border-b border-stone-dune pb-2">
                <dt class="text-stone-mist">Opened</dt>
                <dd class="font-medium">{park.opened}</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt class="text-stone-mist">Operated by</dt>
                <dd class="font-medium">{park.operator}</dd>
              </div>
            </dl>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Stonebridge+Park+870+Crossbridge+Road+Las+Vegas+NV+89138"
              rel="noopener"
              class="mt-5 inline-block font-semibold text-stone-rock"
            >
              Directions on Google Maps
            </a>
          </div>
        </div>
      </section>

      <section class="section bg-white">
        <div class="container-max">
          <PhotoStrip
            items={[
              { name: 'shaded-playground', alt: 'Playground under sail shade canopies with picnic ramadas and red rock mountains behind', caption: 'Shaded playground and picnic ramadas' },
              { name: 'red-rock-canyon-trail', alt: 'Paved trail curving toward the red and cream sandstone cliffs of Red Rock Canyon', caption: 'The trail network links the park toward Red Rock Canyon' },
            ]}
          />
        </div>
      </section>

      <section class="section">
        <div class="container-max prose-site">
          <h2 class="text-3xl font-bold md:text-4xl">Why the park matters when you buy</h2>
          <p>
            Homes on the streets that border the park, Crossbridge Road and the loops off it, trade on the walk, and the
            lighted fields mean evening activity and light until 11 PM. Buyers who want quiet after dark usually prefer
            the elevated streets to the west. Stonebridge Park is the public amenity; the clubhouse, pools, and courts
            inside Heritage at Stonebridge are private to that neighborhood.
          </p>
        </div>
      </section>

      <Faq faqs={faqs} heading="Stonebridge Park questions" />

      <CtaBand
        heading="See the homes within a walk of the park"
        body="Dr. Duffy can map every current listing by distance to the park and to the Heritage gate."
        primaryLabel="Book a park-side tour"
        campaign="stonebridge-park"
      />
    </>
  );
});

export const head = pageHead({
  title: 'Stonebridge Park, Summerlin West | 870 Crossbridge Rd, Hours, Pickleball & Fields',
  description:
    'Stonebridge Park in Summerlin West, Las Vegas 89138: about 11 acres at 870 Crossbridge Road with lighted soccer fields, pickleball, basketball, a shaded playground, and pavilions. Open 6 AM to 11 PM daily. Opened April 2021. Homes for sale nearby.',
  path: '/stonebridge-park',
});
