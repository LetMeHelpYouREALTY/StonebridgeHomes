import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { StructuredData } from '../components/StructuredData';
import { ExclusiveServices } from '../components/sections/ExclusiveServices';
import { FaqSection } from '../components/sections/FaqSection';
import { NapBlock } from '../components/sections/NapBlock';
import {
  COLLECTIONS,
  SITE,
  faqSchema,
  localBusinessSchema,
} from '../config/site';

export default component$(() => {
  return (
    <div>
      <StructuredData data={localBusinessSchema()} />
      <StructuredData data={faqSchema()} />

      <section class="luxury-hero">
        <div class="hero-media" aria-hidden="true">
          <img
            src={SITE.heroImage}
            alt=""
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div class="hero-veil" />
        </div>
        <div class="hero-content">
          <div class="container-max">
            <h1 class="hero-brand">{SITE.shortBrand}</h1>
            <p class="hero-headline">
              Exclusive Stonebridge services by {SITE.agent}
            </p>
            <p class="hero-support">
              421 guard-gated 55+ homes in Summerlin West {SITE.zip}. Floor-plan
              advising, Heritage-only comps, and tours inside the staffed gate.
            </p>
            <div class="hero-ctas">
              <a href="/services/" class="btn-on-dark">
                Exclusive Services
              </a>
              <a href={`tel:${SITE.phoneTel}`} class="btn-outline-light">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ExclusiveServices
        heading="Built only for this community"
        intro="Dr. Jan Duffy works Heritage at Stonebridge every week — nine plans, recent closings, gate logistics, and HOA details before you write."
        limit={4}
      />

      <section class="collections-section">
        <div class="container-max">
          <div class="section-intro">
            <p class="section-kicker">Lennar collections</p>
            <h2>Three collections. Nine single-story plans.</h2>
            <p class="section-lede">
              From compact Cromwell layouts to Evander homes with RV garages and
              Next Gen suites — compare what resells inside Stonebridge, not
              across Summerlin.
            </p>
          </div>
          <div class="collection-grid">
            {COLLECTIONS.map((collection) => (
              <article key={collection.name} class="collection-item">
                <h3>{collection.name}</h3>
                <div class="collection-sqft">{collection.sqft}</div>
                <p>{collection.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section class="agent-band">
        <div class="container-max agent-grid">
          <div>
            <p class="section-kicker">Your Stonebridge specialist</p>
            <h2>{SITE.agent}</h2>
            <p>
              Licensed since 2008 · {SITE.license} · {SITE.brokerage}. She prices
              from Heritage sales, holds weekend open houses behind the gate, and
              answers HOA and clubhouse questions within the hour.
            </p>
            <div class="hero-ctas" style={{ marginTop: '1.5rem' }}>
              <a href="/contact/" class="btn-primary">
                Request a market snapshot
              </a>
              <a href="/homes/" class="btn-ghost">
                View homes for sale
              </a>
            </div>
          </div>
          <div class="stat-row">
            <div class="stat">
              <strong>{SITE.communityHomes}</strong>
              <span>Homes in community</span>
            </div>
            <div class="stat">
              <strong>55+</strong>
              <span>Age-qualified living</span>
            </div>
            <div class="stat">
              <strong>8,000</strong>
              <span>Clubhouse sq ft</span>
            </div>
            <div class="stat">
              <strong>89138</strong>
              <span>Summerlin West ZIP</span>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
      <NapBlock />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Heritage at Stonebridge | Exclusive Services by Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content:
        'Luxury realtor for Heritage at Stonebridge in Summerlin West 89138. Exclusive services: nine floor-plan advising, Heritage-only comps, gate tours, and inside-the-gate resales with Dr. Jan Duffy. Call (702) 789-6561.',
    },
    {
      name: 'keywords',
      content:
        'Heritage at Stonebridge, Stonebridge Homes Summerlin, 55+ Summerlin West, Dr. Jan Duffy, exclusive realtor services, Lennar Stonebridge',
    },
    { name: 'author', content: 'Dr. Jan Duffy' },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:title',
      content: 'Heritage at Stonebridge | Exclusive Services by Dr. Jan Duffy',
    },
    {
      property: 'og:description',
      content:
        'Hyperlocal Stonebridge representation — floor plans, comps, gate tours, and resales exclusive to this 421-home community.',
    },
    { property: 'og:image', content: SITE.ogImage },
    { property: 'og:url', content: `${SITE.origin}/` },
    { property: 'og:site_name', content: SITE.brand },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Heritage at Stonebridge | Exclusive Services by Dr. Jan Duffy',
    },
    {
      name: 'twitter:description',
      content:
        'Exclusive Stonebridge services in Summerlin West with Dr. Jan Duffy. Call (702) 789-6561.',
    },
    { name: 'twitter:image', content: SITE.ogImage },
  ],
};
