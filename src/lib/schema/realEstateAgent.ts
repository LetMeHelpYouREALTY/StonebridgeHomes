import { AGENT, COMMUNITY } from '../community/config';

export function heritageRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: AGENT.name,
    jobTitle: AGENT.title,
    telephone: AGENT.telephone,
    email: AGENT.email,
    worksFor: {
      '@type': 'Organization',
      name: AGENT.brokerage,
    },
    areaServed: {
      '@type': 'Place',
      name: COMMUNITY.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '930 Silverfir Ct',
        addressLocality: COMMUNITY.city,
        addressRegion: COMMUNITY.region,
        postalCode: COMMUNITY.postalCode,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: COMMUNITY.center.lat,
        longitude: COMMUNITY.center.lng,
      },
    },
  };
}

export function communityPlaceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: COMMUNITY.name,
    description:
      'Guard-gated active adult community in Summerlin, Las Vegas, with resort-style on-site amenities.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '930 Silverfir Ct',
      addressLocality: COMMUNITY.city,
      addressRegion: COMMUNITY.region,
      postalCode: COMMUNITY.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMMUNITY.center.lat,
      longitude: COMMUNITY.center.lng,
    },
  };
}
