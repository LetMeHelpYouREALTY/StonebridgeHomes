import { component$ } from '@builder.io/qwik';
import { COMMUNITY } from '~/lib/community/config';
import { AmenityMap } from './AmenityMap';

type WhatsNearbySectionProps = {
  compact?: boolean;
  id?: string;
};

export const WhatsNearbySection = component$<WhatsNearbySectionProps>(
  ({ compact = true, id = 'whats-nearby' }) => {
    return (
      <section id={id} class="section-padding bg-white" aria-labelledby={`${id}-heading`}>
        <div class="container-max">
          <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 id={`${id}-heading`} class="text-3xl font-bold text-heritage-primary">
                Life Near {COMMUNITY.name}
              </h2>
              <p class="text-gray-600 mt-2 max-w-2xl">
                Explore dining, healthcare, golf, parks, and shopping around {COMMUNITY.areaLabel} —
                centered on the Heritage at Stonebridge clubhouse in Las Vegas.
              </p>
            </div>
            <a href="/amenities" class="heritage-button text-sm shrink-0">
              Full amenities guide →
            </a>
          </div>
          <AmenityMap compact={compact} />
        </div>
      </section>
    );
  }
);
