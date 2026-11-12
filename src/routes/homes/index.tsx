import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { StructuredData } from '../../components/StructuredData';
import { NapBlock } from '../../components/sections/NapBlock';
import { RealScoutListings } from '../../components/widgets/RealScoutListings';
import { CalendlyEmbed } from '../../components/widgets/CalendlyEmbed';
import { COLLECTIONS, SITE, localBusinessSchema, siteUrl } from '../../config/site';

export default component$(() => {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Homes', item: siteUrl('/homes/') },
    ],
  };

  return (
    <div>
      <StructuredData data={localBusinessSchema()} />
      <StructuredData data={breadcrumb} />

      <section class="page-hero">
        <div class="container-max">
          <h1>Homes for sale in Heritage at Stonebridge</h1>
          <p>
            Current MLS inventory for this Summerlin West 55+ community moves with
            the market. {SITE.agent} pulls live listings and Heritage-only comps
            before you tour.
          </p>
        </div>
      </section>

      <RealScoutListings
        title="Current Heritage at Stonebridge listings"
        intro="Browse MLS homes for sale. Then book a showing with Dr. Jan Duffy."
      />

      <CalendlyEmbed
        variant="showing"
        heading="Schedule a Stonebridge showing"
        intro="30 minutes at the property — comps pulled before you walk in."
        utmMedium="homes"
        utmCampaign="homes"
      />

      <section class="content-panel">
        <div class="container-max">
          <div class="section-intro">
            <p class="section-kicker">What you are buying</p>
            <h2>Know the collection before you write</h2>
            <p class="section-lede">
              Homes range roughly 1,232–2,873 sq ft across Cromwell, Stirling, and
              Evander. Select plans offer four-bay or RV garages and Next Gen
              suites — differences that change demand on resale.
            </p>
          </div>

          <div class="collection-grid" style={{ color: 'inherit' }}>
            {COLLECTIONS.map((collection) => (
              <article
                key={collection.name}
                class="amenity-item"
                style={{ borderTopColor: 'rgba(15,20,25,0.12)' }}
              >
                <h3>{collection.name}</h3>
                <p style={{ color: 'var(--champagne)', marginBottom: '0.35rem' }}>
                  {collection.sqft}
                </p>
                <p>{collection.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NapBlock />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Homes for Sale | Heritage at Stonebridge Summerlin West | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content:
        'Homes for sale in Heritage at Stonebridge, Summerlin West 89138. Get live MLS listings, Heritage-only comps, and floor-plan guidance from Dr. Jan Duffy at (702) 789-6561.',
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:title',
      content: 'Homes for Sale | Heritage at Stonebridge Summerlin West',
    },
    {
      property: 'og:description',
      content:
        'Live MLS inventory and collection guidance for Heritage at Stonebridge with Dr. Jan Duffy.',
    },
    { property: 'og:image', content: SITE.ogImage },
    { property: 'og:url', content: siteUrl('/homes/') },
    { property: 'og:site_name', content: SITE.brand },
  ],
};
