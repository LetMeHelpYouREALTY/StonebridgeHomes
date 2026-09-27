import type { AmenityCategoryId } from './amenityCategories';
import { COMMUNITY, getGoogleMapsMapId } from './config';
import { curatedPlacesForCategory, directionsUrl } from './curatedPlaces';
import type { MapPlaceResult } from './mapTypes';

export function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('No window'));
  }
  if (window.google?.maps) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-amenity-map-loader]');
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Maps script failed')));
      return;
    }

    const script = document.createElement('script');
    script.dataset.amenityMapLoader = 'true';
    script.async = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&v=weekly&loading=async`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Maps script failed'));
    document.head.appendChild(script);
  });
}

function curatedFallback(category: AmenityCategoryId): MapPlaceResult[] {
  return curatedPlacesForCategory(category).map((c, i) => ({
    id: c.id,
    name: c.name,
    address: c.address,
    lat: COMMUNITY.center.lat + (i + 1) * 0.002,
    lng: COMMUNITY.center.lng + (i + 1) * 0.002,
  }));
}

export async function searchNearbyPlaces(
  apiKey: string,
  category: AmenityCategoryId,
  placeTypes: string[]
): Promise<MapPlaceResult[]> {
  await loadGoogleMapsScript(apiKey);
  await google.maps.importLibrary('places');

  const { places: nearby } = await google.maps.places.Place.searchNearby({
    fields: ['displayName', 'formattedAddress', 'location', 'rating', 'id'],
    locationRestriction: {
      center: COMMUNITY.center,
      radius: COMMUNITY.searchRadiusMeters,
    },
    includedPrimaryTypes: placeTypes.slice(0, 5),
    maxResultCount: 15,
  });

  const mapped: MapPlaceResult[] = [];
  for (const p of nearby) {
    await p.fetchFields({
      fields: ['displayName', 'formattedAddress', 'location', 'rating', 'id'],
    });
    const loc = p.location;
    if (!loc || !p.displayName) {
      continue;
    }
    mapped.push({
      id: p.id ?? p.displayName,
      name: p.displayName,
      address: p.formattedAddress ?? '',
      rating: p.rating,
      lat: loc.lat,
      lng: loc.lng,
    });
  }

  if (mapped.length === 0) {
    return curatedFallback(category);
  }
  return mapped;
}

export function createMapInstance(container: HTMLElement): google.maps.Map {
  const mapId = getGoogleMapsMapId();
  return new google.maps.Map(container, {
    center: COMMUNITY.center,
    zoom: COMMUNITY.defaultMapZoom,
    mapId,
    disableDefaultUI: false,
  });
}

export function renderMapMarkers(
  mapInstance: google.maps.Map,
  results: MapPlaceResult[]
): { clear: () => void } {
  const markers: google.maps.Marker[] = [];
  let infoWindow: google.maps.InfoWindow | undefined;

  const clear = () => {
    for (const m of markers) {
      m.setMap(null);
    }
    markers.length = 0;
    infoWindow?.close();
  };

  const communityMarker = new google.maps.Marker({
    map: mapInstance,
    position: COMMUNITY.center,
    title: COMMUNITY.name,
  });
  const communityIw = new google.maps.InfoWindow({
    content: `<strong>${COMMUNITY.name}</strong><br>${COMMUNITY.clubhouseAddress}`,
  });
  communityMarker.addListener('click', () => {
    communityIw.open({ map: mapInstance, anchor: communityMarker });
  });
  markers.push(communityMarker);

  for (const place of results) {
    const marker = new google.maps.Marker({
      map: mapInstance,
      position: { lat: place.lat, lng: place.lng },
      title: place.name,
    });
    const ratingLine = place.rating !== undefined ? `<br>Rating: ${place.rating.toFixed(1)}` : '';
    const dir = directionsUrl(place.address);
    const content = `<strong>${place.name}</strong>${ratingLine}<br>${place.address}<br><a href="${dir}" target="_blank" rel="noopener">Directions</a>`;
    const iw = new google.maps.InfoWindow({ content });
    marker.addListener('click', () => {
      infoWindow?.close();
      iw.open({ map: mapInstance, anchor: marker });
      infoWindow = iw;
    });
    markers.push(marker);
  }

  return { clear };
}
