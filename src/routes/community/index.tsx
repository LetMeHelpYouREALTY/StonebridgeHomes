import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import { CtaBand } from '~/components/ui/CtaBand';
import { Faq } from '~/components/ui/Faq';
import { PageHero } from '~/components/ui/PageHero';
import { pageHead } from '~/lib/seo';

const faqs = [
  {
    q: 'What schools are zoned for Stonebridge Summerlin?',
    a: 'Doral Academy Red Rock, a tuition-free public charter school, is inside the village on Crossbridge Drive. Clark County School District zoning for most Stonebridge addresses is Givens Elementary, Sig Rogich Middle, and Palo Verde High. Zoning follows the exact address and changes; confirm with CCSD before you buy.',
  },
  {
    q: 'Where do Stonebridge residents shop and eat?',
    a: 'Downtown Summerlin, about seven minutes east, has the main retail, dining, the Las Vegas Ballpark, and City National Arena. Closer in, the shopping centers at Charleston and Desert Foothills and at Far Hills and the 215 cover groceries, pharmacies, and everyday dining.',
  },
  {
    q: 'What outdoor recreation is near Stonebridge?',
    a: 'Red Rock Canyon National Conservation Area is about five minutes west, with the 13-mile scenic drive and more than 30 miles of hiking trails. Summerlin has more than 150 miles of interconnected trails and ten golf courses; the closest are Red Rock Country Club and TPC Las Vegas. The paved Red Rock Legacy Trail from Charleston and Sky Vista opened its first mile in April 2026.',
  },
  {
    q: 'Which hospital is closest to Stonebridge?',
    a: 'Summerlin Hospital Medical Center, about ten minutes by the 215 Beltway. Several urgent care clinics sit along Charleston Boulevard and in Downtown Summerlin.',
  },
];

export default component$(() => {
  return (
    <>
      <PageHero
        eyebrow="Living in Stonebridge"
        title="Life in Summerlin's westernmost village"
        intro="Elevation, Red Rock at the end of the street, an 11-acre park in the middle, and Downtown Summerlin seven minutes away. What daily life in Stonebridge looks like, with the facts you need to check."
        image="hero-stonebridge"
        imageAlt="Illustration of single-story homes at dusk below the red rock ridges west of Summerlin"
      >
        <a href="/homes-for-sale" class="btn-primary">
          Homes for sale
        </a>
      </PageHero>
      <Breadcrumbs items={[{ name: 'Living Here', path: '/community' }]} />

      <section class="section pt-6">
        <div class="container-max grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article class="card p-6">
            <p class="eyebrow">Recreation</p>
            <h2 class="mt-2 text-xl font-bold">Red Rock Canyon, five minutes west</h2>
            <p class="mt-2 text-base leading-7 text-stone-ink/85">
              The scenic loop entrance is at the end of Charleston Boulevard. Summerlin's 150-plus miles of trails
              connect through Stonebridge Park, and the new Red Rock Legacy Trail starts at Charleston and Sky Vista.
            </p>
          </article>
          <article class="card p-6">
            <p class="eyebrow">Shopping and dining</p>
            <h2 class="mt-2 text-xl font-bold">Downtown Summerlin, seven minutes east</h2>
            <p class="mt-2 text-base leading-7 text-stone-ink/85">
              More than 125 stores and restaurants, the Las Vegas Ballpark, and City National Arena. Groceries and
              pharmacies are closer at Charleston and Desert Foothills.
            </p>
          </article>
          <article class="card p-6">
            <p class="eyebrow">Schools</p>
            <h2 class="mt-2 text-xl font-bold">A charter school inside the village</h2>
            <p class="mt-2 text-base leading-7 text-stone-ink/85">
              Doral Academy Red Rock is on Crossbridge Drive next to the park. CCSD zoning for most addresses: Givens
              Elementary, Sig Rogich Middle, Palo Verde High. Verify by address with CCSD.
            </p>
          </article>
          <article class="card p-6">
            <p class="eyebrow">Health care</p>
            <h2 class="mt-2 text-xl font-bold">Summerlin Hospital, ten minutes</h2>
            <p class="mt-2 text-base leading-7 text-stone-ink/85">
              Summerlin Hospital Medical Center is south on the 215. Urgent care and specialist offices line Charleston
              Boulevard and Downtown Summerlin.
            </p>
          </article>
          <article class="card p-6">
            <p class="eyebrow">Golf</p>
            <h2 class="mt-2 text-xl font-bold">Ten Summerlin courses</h2>
            <p class="mt-2 text-base leading-7 text-stone-ink/85">
              Red Rock Country Club (private, two courses) and TPC Las Vegas are the closest. Stonebridge itself has no
              golf course; the village was built around the park and trails instead.
            </p>
          </article>
          <article class="card p-6">
            <p class="eyebrow">Getting out of town</p>
            <h2 class="mt-2 text-xl font-bold">Airport in about 27 minutes</h2>
            <p class="mt-2 text-base leading-7 text-stone-ink/85">
              Harry Reid International Airport by the 215 Beltway. Mount Charleston's ski area and Lee Canyon are about
              an hour north.
            </p>
          </article>
        </div>
      </section>

      <section class="section bg-white">
        <div class="container-max grid gap-10 lg:grid-cols-2 lg:items-center">
          <figure class="card">
            <picture>
              <source srcset="/images/stonebridge-park-960.webp 960w, /images/stonebridge-park.webp 1600w" type="image/webp" />
              <img
                src="/images/stonebridge-park.jpg"
                srcset="/images/stonebridge-park-960.jpg 960w, /images/stonebridge-park.jpg 1600w"
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Illustration of a soccer field, pickleball and basketball courts on green turf below red rock mountains"
                width="1600"
                height="900"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </figure>
          <div class="prose-site">
            <h2 class="text-3xl font-bold md:text-4xl">The master plan behind the address</h2>
            <p>
              Every Stonebridge home pays $69 a month to the Summerlin West Community Association, which funds the
              village parks, trails, and landscaping standards that keep resale values consistent. Summerlin's design
              review also governs exterior changes, so check the guidelines before planning a casita or a paint color.
            </p>
            <p>
              Most neighborhoods add a sub-association for their entry gate and front-yard landscaping. The sub-fee and
              the master fee together are what the MLS calls "HOA," and they are listed per address in the resale
              package.
            </p>
            <a href="/prices#faq" class="btn-dark">
              HOA and monthly costs
            </a>
          </div>
        </div>
      </section>

      <Faq faqs={faqs} heading="Living in Stonebridge: common questions" />

      <CtaBand
        heading="Relocating to Summerlin West?"
        body="Dr. Duffy works with buyers relocating from California and out of state. Ask for the relocation packet: commute times, utility averages, and the move-in checklist."
        primaryLabel="Book a relocation call"
        campaign="community"
      />
    </>
  );
});

export const head = pageHead({
  title: 'Living in Stonebridge Summerlin | Schools, Red Rock, Downtown Summerlin, HOA',
  description:
    'What daily life in Stonebridge, Summerlin West looks like: Doral Academy Red Rock and CCSD zoning, Red Rock Canyon five minutes away, Downtown Summerlin in seven, Summerlin Hospital, golf, trails, and the $69 master association that comes with every address.',
  path: '/community',
});
