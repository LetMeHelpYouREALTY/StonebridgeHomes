/**
 * Heritage at Stonebridge — hyperlocal map center.
 * Clubhouse: 930 Silverfir Ct, Las Vegas, NV 89138 (official community contact address).
 * Coordinates: neighbor parcel on Silverfir Ct (929 Silverfir Ct per public listing records), ~clubhouse location.
 */
export const COMMUNITY = {
  name: 'Heritage at Stonebridge',
  shortName: 'Heritage at Stonebridge',
  city: 'Las Vegas',
  region: 'NV',
  areaLabel: 'Summerlin',
  postalCode: '89138',
  clubhouseAddress: '930 Silverfir Ct, Las Vegas, NV 89138',
  siteUrl: 'https://stonebridge-homes.vercel.app',
  /** Active adult 55+ guard-gated community — drives amenity category ordering */
  communityType: 'active-adult-55' as const,
  center: {
    lat: 36.15881,
    lng: -115.379177,
  },
  defaultMapZoom: 14,
  searchRadiusMeters: 8000,
} as const;

export const AGENT = {
  name: 'Dr. Jan Duffy',
  title: 'Real Estate Agent',
  telephone: '(702) 222-1964',
  telephoneHref: 'tel:702-222-1964',
  email: 'jan.duffy@heritagestonebridge.com',
  brokerage: 'BHHS Nevada Properties',
} as const;

export function getGoogleMapsApiKey(): string | undefined {
  const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return typeof key === 'string' && key.trim().length > 0 ? key.trim() : undefined;
}

export function getGoogleMapsMapId(): string | undefined {
  const id = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;
  return typeof id === 'string' && id.trim().length > 0 ? id.trim() : undefined;
}

export function embedMapUrl(): string {
  const { lat, lng } = COMMUNITY.center;
  return `https://www.google.com/maps?q=${lat},${lng}&z=${COMMUNITY.defaultMapZoom}&output=embed`;
}
