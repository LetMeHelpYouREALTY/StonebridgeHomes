import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { StructuredData } from '../../components/StructuredData';
import { ExclusiveServices } from '../../components/sections/ExclusiveServices';
import { NapBlock } from '../../components/sections/NapBlock';
import { AgentPortrait } from '../../components/sections/AgentPortrait';
import { CalendlyEmbed } from '../../components/widgets/CalendlyEmbed';
import { SITE, localBusinessSchema, siteUrl } from '../../config/site';

export default component$(() => {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('/') },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Exclusive Services',
        item: siteUrl('/services/'),
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Exclusive Heritage at Stonebridge Real Estate Services',
    provider: { '@id': `${SITE.origin}/#localbusiness` },
    areaServed: {
      '@type': 'Place',
      name: 'Heritage at Stonebridge, Summerlin West, Las Vegas, NV 89138',
    },
    description:
      'Hyperlocal buyer and seller services exclusive to Heritage at Stonebridge: floor-plan advising, Heritage-only comps, gate and clubhouse tours, HOA review, and inside-the-gate resale marketing.',
  };

  return (
    <div>
      <StructuredData data={localBusinessSchema()} />
      <StructuredData data={breadcrumb} />
      <StructuredData data={serviceSchema} />

      <section class="page-hero">
        <div class="container-max">
          <h1>Exclusive services for Stonebridge Homes</h1>
          <p>
            {SITE.agent} focuses on Heritage at Stonebridge — not a valley-wide
            generic listing desk. Every service below is scoped to this
            guard-gated 55+ community in Summerlin West.
          </p>
        </div>
      </section>

      <ExclusiveServices
        heading="What you only get here"
        intro="Six services built for the 421 homes behind the Stonebridge gate — from first tour to closing and resale."
      />

      <section class="content-panel">
        <div class="container-max agent-band-copy">
          <AgentPortrait size="md" showName />
          <div class="listing-note" style={{ flex: 1, marginBottom: 0 }}>
            <p class="section-kicker">How engagements start</p>
            <h2 style={{ fontSize: '2rem', marginTop: 0 }}>
              A current market snapshot in one call
            </h2>
            <p style={{ color: 'var(--ink-muted)' }}>
              Expect straight answers on HOA fees, which collections are moving,
              clubhouse guest rules, and what comparable Heritage homes closed
              for. Call or text {SITE.phoneDisplay}, or book a strategy call below.
            </p>
            <div class="nap-actions">
              <a href={`tel:${SITE.phoneTel}`} class="btn-primary">
                Call {SITE.phoneDisplay}
              </a>
              <a href="/contact/" class="btn-ghost">
                Contact form
              </a>
            </div>
          </div>
        </div>
      </section>

      <CalendlyEmbed
        variant="strategy"
        heading="Book a free market strategy call"
        intro="15 minutes on Heritage at Stonebridge inventory, pricing, and your next step."
        utmMedium="services"
        utmCampaign="services"
      />

      <CalendlyEmbed
        variant="listing"
        heading="Selling inside the gate?"
        intro="Listing consultation with Heritage-only comps and open-house planning."
        utmMedium="services"
        utmCampaign="listing"
        compact
      />

      <NapBlock />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Exclusive Stonebridge Services | Dr. Jan Duffy | Heritage at Stonebridge',
  meta: [
    {
      name: 'description',
      content:
        'Services exclusive for Heritage at Stonebridge by Dr. Jan Duffy: nine floor-plan advisor, Heritage-only comps, gate & clubhouse tours, HOA review, and inside-the-gate resale marketing. Call (702) 789-6561.',
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:title',
      content: 'Exclusive Stonebridge Services | Dr. Jan Duffy',
    },
    {
      property: 'og:description',
      content:
        'Hyperlocal realtor services exclusive to Heritage at Stonebridge in Summerlin West 89138.',
    },
    { property: 'og:image', content: SITE.ogImage },
    { property: 'og:url', content: siteUrl('/services/') },
    { property: 'og:site_name', content: SITE.brand },
  ],
};
