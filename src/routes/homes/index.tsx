import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen bg-heritage-light">
      <div class="hero-section">
        <div class="container-max text-center">
          <h1 class="text-4xl font-bold mb-4">Available Properties</h1>
          <p class="text-xl">Discover luxury homes in Heritage at Stonebridge</p>
        </div>
      </div>

      <section class="section-padding">
        <div class="container-max">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div class="heritage-card">
              <div class="h-48 bg-heritage-neutral flex items-center justify-center text-4xl">
                🏠
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">123 Heritage Way</h3>
                <div class="text-2xl font-bold text-heritage-primary mb-4">$525,000</div>
                <div class="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <div class="font-semibold">4</div>
                    <div>Bedrooms</div>
                  </div>
                  <div>
                    <div class="font-semibold">3</div>
                    <div>Bathrooms</div>
                  </div>
                  <div>
                    <div class="font-semibold">2,450</div>
                    <div>Sq Ft</div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-green-600 font-semibold">Available</span>
                  <a href="/homes/123-heritage-way" class="text-heritage-primary hover:text-heritage-secondary font-semibold">
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div class="heritage-card">
              <div class="h-48 bg-heritage-neutral flex items-center justify-center text-4xl">
                🏠
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">456 Stonebridge Dr</h3>
                <div class="text-2xl font-bold text-heritage-primary mb-4">$485,000</div>
                <div class="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <div class="font-semibold">3</div>
                    <div>Bedrooms</div>
                  </div>
                  <div>
                    <div class="font-semibold">2.5</div>
                    <div>Bathrooms</div>
                  </div>
                  <div>
                    <div class="font-semibold">2,100</div>
                    <div>Sq Ft</div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-green-600 font-semibold">Available</span>
                  <a href="/homes/456-stonebridge-dr" class="text-heritage-primary hover:text-heritage-secondary font-semibold">
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div class="heritage-card">
              <div class="h-48 bg-heritage-neutral flex items-center justify-center text-4xl">
                🏠
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">789 Heritage Lane</h3>
                <div class="text-2xl font-bold text-heritage-primary mb-4">$675,000</div>
                <div class="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <div class="font-semibold">5</div>
                    <div>Bedrooms</div>
                  </div>
                  <div>
                    <div class="font-semibold">4</div>
                    <div>Bathrooms</div>
                  </div>
                  <div>
                    <div class="font-semibold">3,200</div>
                    <div>Sq Ft</div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-green-600 font-semibold">Available</span>
                  <a href="/homes/789-heritage-lane" class="text-heritage-primary hover:text-heritage-secondary font-semibold">
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Available Properties - Heritage at Stonebridge | Las Vegas Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Browse luxury homes for sale in Heritage at Stonebridge, Summerlin. Custom homes with resort-style amenities and A-rated schools.',
    },
  ],
};