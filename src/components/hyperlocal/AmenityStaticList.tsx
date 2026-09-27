import { component$ } from '@builder.io/qwik';
import type { AmenityCategoryId } from '~/lib/community/amenityCategories';
import { CURATED_PLACES, type CuratedPlace, directionsUrl } from '~/lib/community/curatedPlaces';

type AmenityStaticListProps = {
  category?: AmenityCategoryId;
  limit?: number;
  class?: string;
};

export const AmenityStaticList = component$<AmenityStaticListProps>(
  ({ category, limit, class: className = '' }) => {
    let places: CuratedPlace[] = CURATED_PLACES;
    if (category) {
      places = places.filter((p) => p.category === category);
    }
    if (limit !== undefined) {
      places = places.slice(0, limit);
    }

    return (
      <ul class={`space-y-3 ${className}`} aria-label="Nearby places">
        {places.map((place) => (
          <li key={place.id} class="heritage-card p-4 border border-gray-200">
            <h3 class="font-semibold text-heritage-primary">{place.name}</h3>
            <p class="text-sm text-gray-600 mt-1">{place.address}</p>
            {place.note && <p class="text-sm text-gray-500 mt-1">{place.note}</p>}
            <a
              href={directionsUrl(place.address)}
              class="text-sm text-heritage-secondary font-medium mt-2 inline-block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions in Google Maps
            </a>
          </li>
        ))}
      </ul>
    );
  }
);
