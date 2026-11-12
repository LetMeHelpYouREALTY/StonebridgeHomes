import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { StructuredData } from '../../components/StructuredData';
import { NapBlock } from '../../components/sections/NapBlock';
import { AMENITIES, SITE, localBusinessSchema, siteUrl } from '../../config/site';

export default component$(() => {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('/') },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Community',
        item: siteUrl('/community/'),
      },
    ],
  };

  return (
    <div>
      <StructuredData data={localBusinessSchema()} />
      <StructuredData data={breadcrumb} />

      <section class="page-hero">
        <div class="container-max">
          <h1>Heritage at Stonebridge community</h1>
          <p>
            Guard-gated, age-qualified 55+ living in the village of Stonebridge,
            Summerlin West — {SITE.communityHomes} single-story Lennar homes with
            an 8,000 sq ft clubhouse behind a staffed gate.
          </p>
        </div>
      </section>

      <section class="content-panel">
        <div class="container-max">
          <div class="section-intro">
            <p class="section-kicker">Summerlin West · {SITE.zip}</p>
            <h2>Life inside the gate</h2>
            <p class="section-lede">
              Visitors check in at the gatehouse — access is not a shared code.
              The clubhouse at {SITE.clubhouseAddress} anchors pools, fitness,
              pickleball, and bocce. There is no on-site golf course in published
              amenity lists.
            </p>
          </div>

          <div class="amenity-grid">
            {AMENITIES.map((amenity) => (
              <article key={amenity.title} class="amenity-item">
                <h3>{amenity.title}</h3>
                <p>{amenity.detail}</p>
              </article>
            ))}
          </div>

          <div class="listing-note" style={{ marginTop: '3rem' }}>
            <p class="section-kicker">Clubhouse</p>
            <h2 style={{ fontSize: '1.75rem', marginTop: 0 }}>
              930 Silverfir Court, Suite A
            </h2>
            <p style={{ color: 'var(--ink-muted)', marginBottom: '0.5rem' }}>
              Posted hours Monday–Sunday, 7:00 AM–7:00 PM. Clubhouse phone{' '}
              {SITE.clubhousePhone}. Confirm before you go.
            </p>
            <p style={{ color: 'var(--ink-muted)', margin: 0 }}>
              Nearby context buyers ask about first: Red Rock Canyon National
              Conservation Area, Downtown Summerlin, and the Summerlin Library.
            </p>
          </div>

          <div class="stat-row" style={{ marginTop: '2.5rem' }}>
            <div class="stat">
              <strong>{SITE.communityHomes}</strong>
              <span>Single-story homes</span>
            </div>
            <div class="stat">
              <strong>9</strong>
              <span>Floor plans</span>
            </div>
            <div class="stat">
              <strong>24/7</strong>
              <span>Staffed gate</span>
            </div>
            <div class="stat">
              <strong>55+</strong>
              <span>Age-qualified</span>
            </div>
          </div>

          <p class="section-more">
            <a href="/services/" class="text-link">
              Tour with exclusive Stonebridge services →
            </a>
          </p>
        </div>
      </section>

      <NapBlock />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Heritage at Stonebridge Community | Summerlin West 55+ | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content:
        'Heritage at Stonebridge in Summerlin West 89138: 421 guard-gated 55+ Lennar homes, 8,000 sq ft clubhouse, heated pools, pickleball, bocce, and a staffed gate. Guided by Dr. Jan Duffy.',
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:title',
      content: 'Heritage at Stonebridge Community | Summerlin West 55+',
    },
    {
      property: 'og:description',
      content:
        'Guard-gated 55+ community amenities, clubhouse details, and location context for Stonebridge Summerlin.',
    },
    { property: 'og:image', content: SITE.ogImage },
    { property: 'og:url', content: siteUrl('/community/') },
    { property: 'og:site_name', content: SITE.brand },
  ],
};
