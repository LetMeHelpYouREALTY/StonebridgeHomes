import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { AGENT, AREA, SITE_NAME, SITE_ORIGIN, abs } from '~/lib/site';

/**
 * One authoritative RealEstateAgent node for the whole site. Every page's
 * schema references it by @id instead of emitting a second agent.
 */
const realEstateAgent = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SITE_ORIGIN}/#agent`,
  name: `${AGENT.name}, ${AGENT.title}`,
  alternateName: SITE_NAME,
  url: SITE_ORIGIN,
  logo: abs('/images/logo.png'),
  image: abs('/images/og-stonebridge-las-vegas-homes.png'),
  description: `${AGENT.name} represents buyers and sellers in the Stonebridge village of Summerlin West, Las Vegas, NV 89138, including the 55+ Heritage at Stonebridge neighborhood.`,
  telephone: AGENT.phoneTel,
  priceRange: '$500,000 - $3,000,000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: AREA.city,
    addressRegion: AREA.state,
    postalCode: AREA.zip,
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'Place', name: 'Stonebridge, Summerlin West, Las Vegas, NV 89138' },
    { '@type': 'Place', name: 'Summerlin, Las Vegas, NV' },
  ],
  memberOf: { '@type': 'Organization', name: AGENT.brokerage },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: `Nevada Real Estate License ${AGENT.license}`,
  },
  sameAs: AGENT.sameAs,
};

const webSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_ORIGIN}/#website`,
  name: SITE_NAME,
  url: SITE_ORIGIN,
  publisher: { '@id': `${SITE_ORIGIN}/#agent` },
  inLanguage: 'en-US',
};

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  // Self-referencing canonical pinned to the production origin, query-stripped.
  const canonical = abs(loc.url.pathname.replace(/\/$/, '') || '/');

  return (
    <>
      <title>{head.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonical} />
      <meta name="theme-color" content="#1F2A33" />
      <meta name="author" content={AGENT.name} />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}
      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}
      {head.styles.map((s) => (
        <style key={s.key} {...s.props} {...{ dangerouslySetInnerHTML: s.style }} />
      ))}

      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap"
      />

      {/* RealScout web components (office listings + home value widgets) */}
      <link rel="preconnect" href="https://em.realscout.com" />
      <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module" async />

      <script type="application/ld+json" {...{ dangerouslySetInnerHTML: JSON.stringify(realEstateAgent) }} />
      <script type="application/ld+json" {...{ dangerouslySetInnerHTML: JSON.stringify(webSite) }} />
    </>
  );
});
