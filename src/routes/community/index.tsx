import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen bg-heritage-light">
      <div class="hero-section">
        <div class="container-max text-center">
          <h1 class="text-4xl font-bold mb-4">Heritage at Stonebridge Community</h1>
          <p class="text-xl">Discover luxury living in Summerlin's premier gated community</p>
        </div>
      </div>

      <section class="section-padding">
        <div class="container-max">
          {/* Community Overview */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-12 text-heritage-primary">
              Community Overview
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p class="text-lg mb-6">
                  Heritage at Stonebridge is a premier gated community offering luxury homes with stunning mountain and valley views. Located in the heart of Summerlin, this exclusive neighborhood provides residents with an unparalleled lifestyle experience.
                </p>
                <div class="space-y-4">
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">✓</span>
                    <span>847 luxury homes</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">✓</span>
                    <span>Gated community with 24/7 security</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">✓</span>
                    <span>Resort-style amenities</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">✓</span>
                    <span>A-rated schools nearby</span>
                  </div>
                </div>
              </div>
              <div class="bg-heritage-neutral h-64 flex items-center justify-center text-6xl rounded-lg">
                🏘️
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-12 text-heritage-primary">
              Resort-Style Amenities
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '🏊‍♀️', title: 'Resort-Style Pool & Spa', description: 'Luxurious pool area with spa, perfect for relaxation and entertaining' },
                { icon: '⛳', title: 'Championship Golf Course', description: 'Access to world-class golf courses designed by renowned architects' },
                { icon: '💪', title: 'Fitness Center', description: 'State-of-the-art fitness facilities with personal training available' },
                { icon: '🎾', title: 'Tennis Courts', description: 'Professional tennis courts for residents and guests' },
                { icon: '🔒', title: 'Gated Security', description: '24/7 security with controlled access for peace of mind' },
                { icon: '🚶‍♀️', title: 'Walking Trails', description: 'Scenic walking trails throughout the community' },
                { icon: '🌳', title: 'Parks & Recreation', description: 'Beautiful parks and recreational areas for families' },
                { icon: '🏛️', title: 'Community Clubhouse', description: 'Elegant clubhouse for events and community gatherings' }
              ].map((amenity) => (
                <div key={amenity.title} class="heritage-card p-6 text-center">
                  <div class="text-4xl mb-4">{amenity.icon}</div>
                  <h3 class="text-xl font-semibold mb-3">{amenity.title}</h3>
                  <p class="text-gray-600">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Schools */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-12 text-heritage-primary">
              Location & Schools
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div class="heritage-card p-6">
                <h3 class="text-2xl font-semibold mb-4">Prime Location</h3>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">📍</span>
                    <span>Located in Summerlin, Las Vegas</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">🛍️</span>
                    <span>Minutes from shopping and dining</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">🏥</span>
                    <span>Close to medical facilities</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">✈️</span>
                    <span>Easy access to McCarran Airport</span>
                  </div>
                </div>
              </div>

              <div class="heritage-card p-6">
                <h3 class="text-2xl font-semibold mb-4">Excellent Schools</h3>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">🏫</span>
                    <span>Clark County School District</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">⭐</span>
                    <span>A-rated elementary and high schools</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">🎓</span>
                    <span>Private school options nearby</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">📚</span>
                    <span>UNLV and other universities close</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Stats */}
          <div class="bg-white py-16 rounded-lg">
            <h2 class="text-3xl font-bold text-center mb-12 text-heritage-primary">
              Community Statistics
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div class="text-center">
                <div class="text-4xl font-bold text-heritage-primary mb-2">847</div>
                <div class="text-lg text-gray-600">Total Homes</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-heritage-primary mb-2">$1.25M</div>
                <div class="text-lg text-gray-600">Median Price</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-heritage-primary mb-2">2015-2020</div>
                <div class="text-lg text-gray-600">Year Built</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-heritage-primary mb-2">A+</div>
                <div class="text-lg text-gray-600">School Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Heritage at Stonebridge Community - Summerlin Luxury Living',
  meta: [
    {
      name: 'description',
      content: 'Discover Heritage at Stonebridge, a premier gated community in Summerlin with resort-style amenities, luxury homes, and A-rated schools.',
    },
  ],
};