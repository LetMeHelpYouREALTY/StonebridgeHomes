/* Minimal types for Maps JavaScript API + Places (New) used by AmenityMap */

declare const google: {
  maps: typeof google.maps;
};

declare namespace google.maps {
  // biome-ignore lint/suspicious/noShadowRestrictedNames: Google Maps API type name
  class Map {
    constructor(el: HTMLElement, opts: MapOptions);
    setCenter(latLng: LatLngLiteral): void;
    setZoom(z: number): void;
  }

  class Marker {
    constructor(opts: MarkerOptions);
    addListener(event: string, handler: () => void): void;
    setMap(map: Map | null): void;
  }

  class InfoWindow {
    constructor(opts?: { content?: string });
    open(opts: { map: Map; anchor?: Marker }): void;
    close(): void;
  }

  interface MapOptions {
    center: LatLngLiteral;
    zoom: number;
    mapId?: string;
    disableDefaultUI?: boolean;
  }

  interface MarkerOptions {
    map?: Map;
    position: LatLngLiteral;
    title?: string;
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  function importLibrary(name: 'maps' | 'places'): Promise<unknown>;
}

declare namespace google.maps.places {
  class Place {
    static searchNearby(request: SearchNearbyRequest): Promise<{ places: Place[] }>;
    fetchFields(options: { fields: string[] }): Promise<void>;
    displayName?: string;
    formattedAddress?: string;
    location?: google.maps.LatLngLiteral;
    rating?: number;
    id?: string;
  }

  interface SearchNearbyRequest {
    fields: string[];
    locationRestriction: {
      center: google.maps.LatLngLiteral;
      radius: number;
    };
    includedPrimaryTypes: string[];
    maxResultCount?: number;
  }
}

interface Window {
  google?: typeof google;
}
