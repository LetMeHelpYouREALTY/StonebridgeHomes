import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

// Production canonical origin. Canonical + site-wide entity schema are pinned to
// this domain so preview/deploy hosts (e.g. *.vercel.app) never leak into SEO.
const SITE_ORIGIN = 'https://heritagestonebridge.com';

// Single authoritative RealEstateAgent entity for the whole site, @id-anchored so
// every page references the same node instead of emitting duplicate agents.
const realEstateAgent = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SITE_ORIGIN}/#realestateagent`,
  name: 'Dr. Jan Duffy',
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/images/logo.png`,
  image: `${SITE_ORIGIN}/images/heritage-stonebridge-og.jpg`,
  description:
    "Premier luxury homes in Heritage at Stonebridge, Summerlin's most prestigious gated community",
  telephone: '+1-702-222-1964',
  email: 'jan.duffy@heritagestonebridge.com',
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Heritage at Stonebridge',
    addressLocality: 'Summerlin',
    addressRegion: 'NV',
    postalCode: '89144',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Summerlin, Las Vegas, NV',
  },
  sameAs: [
    'https://www.facebook.com/heritagestonebridge',
    'https://www.linkedin.com/in/dr-jan-duffy',
    'https://twitter.com/DrJanDuffy',
  ],
};

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  // Self-referencing canonical, pinned to the production origin and query-stripped.
  const canonical = `${SITE_ORIGIN}${loc.url.pathname}`;

  return (
    <>
      <title>{head.title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Per-page metadata driven by each route's `head` export */}
      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}
      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}
      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...{ dangerouslySetInnerHTML: s.style }}
        />
      ))}

      {/* Site-wide constants (not page-varying) */}
      <meta name="twitter:site" content="@DrJanDuffy" />

      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Preconnect to external font hosts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Authoritative site-wide entity */}
      <script
        type="application/ld+json"
        {...{ dangerouslySetInnerHTML: JSON.stringify(realEstateAgent) }}
      />
    </>
  );
});
