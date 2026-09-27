import { $, component$, useComputed$, useId, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import {
  type AmenityCategoryId,
  defaultCategoryId,
  getAmenityCategories,
} from '~/lib/community/amenityCategories';
import { COMMUNITY, embedMapUrl, getGoogleMapsApiKey } from '~/lib/community/config';
import {
  createMapInstance,
  renderMapMarkers,
  searchNearbyPlaces,
} from '~/lib/community/googleMapsClient';
import type { MapPlaceResult } from '~/lib/community/mapTypes';
import { AmenityStaticList } from './AmenityStaticList';

type AmenityMapProps = {
  compact?: boolean;
};

const MAP_HEIGHT_CLASS = 'h-[min(70vh,480px)] min-h-[360px]';

export const AmenityMap = component$<AmenityMapProps>(({ compact = false }) => {
  const apiKey = getGoogleMapsApiKey();
  const useInteractive = Boolean(apiKey);
  const resolvedKey = apiKey ?? '';

  const categories = getAmenityCategories(COMMUNITY.communityType);
  const activeCategory = useSignal<AmenityCategoryId>(defaultCategoryId(COMMUNITY.communityType));
  const places = useSignal<MapPlaceResult[]>([]);
  const loading = useSignal(false);
  const mapError = useSignal(false);
  const mapContainerId = useId();
  const isInView = useSignal(false);
  const rootRef = useSignal<HTMLElement>();

  const activeLabel = useComputed$(() => {
    return categories.find((c) => c.id === activeCategory.value)?.label ?? 'Places';
  });

  const setCategory = $((id: AmenityCategoryId) => {
    activeCategory.value = id;
  });

  // Google Maps requires browser APIs; load when map enters viewport.
  // biome-ignore lint/correctness/noQwikUseVisibleTask: third-party map SDK
  useVisibleTask$(({ track }) => {
    track(() => activeCategory.value);
    track(() => isInView.value);

    if (!useInteractive || !isInView.value) {
      return;
    }

    const container = document.getElementById(mapContainerId);
    if (!container) {
      return;
    }

    let map: google.maps.Map | undefined;
    let markerCleanup: (() => void) | undefined;
    let cancelled = false;

    const refreshMarkers = (mapInstance: google.maps.Map, results: MapPlaceResult[]) => {
      markerCleanup?.();
      markerCleanup = renderMapMarkers(mapInstance, results).clear;
    };

    const fetchPlaces = async (mapInstance: google.maps.Map) => {
      loading.value = true;
      mapError.value = false;
      try {
        const cat = categories.find((c) => c.id === activeCategory.value);
        const types = cat?.placeTypes ?? ['restaurant'];
        const results = await searchNearbyPlaces(resolvedKey, activeCategory.value, types);
        if (cancelled) {
          return;
        }
        places.value = results;
        refreshMarkers(mapInstance, results);
      } catch {
        mapError.value = true;
        places.value = [];
        markerCleanup?.();
        if (map) {
          markerCleanup = renderMapMarkers(map, []).clear;
        }
      } finally {
        loading.value = false;
      }
    };

    const init = async () => {
      try {
        map = createMapInstance(container);
        await fetchPlaces(map);
      } catch {
        mapError.value = true;
      }
    };

    init();

    return () => {
      cancelled = true;
      markerCleanup?.();
    };
  });

  // biome-ignore lint/correctness/noQwikUseVisibleTask: intersection observer for lazy map load
  useVisibleTask$(({ cleanup }) => {
    const el = rootRef.value;
    if (!el || typeof IntersectionObserver === 'undefined') {
      isInView.value = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          isInView.value = true;
          observer.disconnect();
        }
      },
      { rootMargin: '120px' }
    );
    observer.observe(el);
    cleanup(() => observer.disconnect());
  });

  const showFallback = !useInteractive || mapError.value;

  return (
    <div ref={rootRef} class="w-full">
      <div class="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Amenity categories">
        {categories.map((cat) => {
          const selected = activeCategory.value === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={`Show ${cat.label} near ${COMMUNITY.name}`}
              class={`px-3 py-2 rounded-md text-sm font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-heritage-primary focus:ring-offset-2 ${
                selected
                  ? 'bg-heritage-primary text-white border-heritage-primary'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-heritage-secondary'
              }`}
              onClick$={() => setCategory(cat.id)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <p class="text-sm text-gray-600 mb-3 sr-only" aria-live="polite">
        {loading.value
          ? `Loading ${activeLabel.value}…`
          : `Showing ${activeLabel.value} near ${COMMUNITY.name}`}
      </p>

      <div
        class={`relative w-full rounded-lg overflow-hidden border border-gray-200 bg-gray-100 ${compact ? 'h-[min(55vh,400px)] min-h-[320px]' : MAP_HEIGHT_CLASS}`}
      >
        {showFallback ? (
          <iframe
            title={`Map of ${COMMUNITY.name} in ${COMMUNITY.areaLabel}`}
            src={embedMapUrl()}
            class="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div
            id={mapContainerId}
            class="w-full h-full"
            role="application"
            aria-label={`Interactive map of ${activeLabel.value} near ${COMMUNITY.name}`}
          />
        )}
      </div>

      {(showFallback || places.value.length === 0) && (
        <div class="mt-6">
          <h3 class="text-lg font-semibold text-heritage-primary mb-3">Featured places nearby</h3>
          <AmenityStaticList category={activeCategory.value} limit={6} />
        </div>
      )}

      {!apiKey && (
        <p class="text-xs text-gray-500 mt-3">
          Interactive search requires <code class="text-xs">VITE_GOOGLE_MAPS_API_KEY</code> in your
          environment. Map embed shown until configured.
        </p>
      )}
    </div>
  );
});
