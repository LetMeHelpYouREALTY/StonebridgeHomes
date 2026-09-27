import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { WhatsNearbySection } from '~/components/hyperlocal/WhatsNearbySection';
import { heritageRealEstateAgentSchema } from '~/lib/schema/realEstateAgent';
import { StructuredData } from '../components/StructuredData';

export default component$(() => {
  const structuredData = heritageRealEstateAgentSchema();

  return (
    <div class="min-h-screen bg-heritage-light">
      <StructuredData data={structuredData} />
      {/* Hero Section */}
      <section class="hero-section text-center">
        <div class="container-max">
          <h1 class="text-5xl font-bold mb-4">
            Welcome to <span class="text-heritage-light">Heritage at Stonebridge</span>
          </h1>
          <p class="text-xl mb-8 max-w-3xl mx-auto">
            Discover luxury living in the Heritage at Stonebridge community in Summerlin, Las Vegas
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/homes" class="heritage-button">
              View Available Properties →
            </a>
            <a href="/contact" class="heritage-button-secondary">
              Contact Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main class="section-padding">
        <div class="container-max">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Available Properties */}
            <div class="heritage-card p-6 text-center">
              <div class="text-4xl mb-4">🏠</div>
              <h2 class="text-xl font-semibold mb-3">Available Properties</h2>
              <p class="text-gray-600 mb-4">
                Browse our current listings in the Heritage at Stonebridge community.
              </p>
              <a href="/homes" class="heritage-button text-sm">
                View Listings →
              </a>
            </div>

            {/* Community Features */}
            <div class="heritage-card p-6 text-center">
              <div class="text-4xl mb-4">🏊‍♀️</div>
              <h2 class="text-xl font-semibold mb-3">Community Features</h2>
              <p class="text-gray-600 mb-4">
                Learn about the amenities and lifestyle at Heritage at Stonebridge.
              </p>
              <a href="/community" class="heritage-button text-sm">
                Explore Amenities →
              </a>
            </div>

            {/* Floor Plans */}
            <div class="heritage-card p-6 text-center">
              <div class="text-4xl mb-4">📐</div>
              <h2 class="text-xl font-semibold mb-3">Floor Plans</h2>
              <p class="text-gray-600 mb-4">Explore our available floor plans and home designs.</p>
              <a href="/homes" class="heritage-button text-sm">
                View Plans →
              </a>
            </div>

            {/* Contact Us */}
            <div class="heritage-card p-6 text-center">
              <div class="text-4xl mb-4">📞</div>
              <h2 class="text-xl font-semibold mb-3">Contact Us</h2>
              <p class="text-gray-600 mb-4">Schedule a tour or request more information.</p>
              <a href="/contact" class="heritage-button text-sm">
                Get In Touch →
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Agent Information */}
      <section class="py-16 bg-heritage-primary text-white">
        <div class="container-max">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6">Meet Your Local Expert</h2>
              <div class="text-lg mb-6">
                <h3 class="text-2xl font-semibold mb-4">Dr. Jan Duffy</h3>
                <p class="mb-4">Real Estate Professional</p>
                <p class="mb-6">
                  With extensive experience in the Summerlin real estate market, Dr. Jan Duffy
                  specializes in luxury homes and provides personalized service to help you find
                  your dream home in Heritage at Stonebridge.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:702-222-1964"
                    class="bg-white text-heritage-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                  >
                    📞 (702) 222-1964
                  </a>
                  <a
                    href="mailto:jan.duffy@heritagestonebridge.com"
                    class="bg-heritage-secondary text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    📧 Email Dr. Duffy
                  </a>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div class="w-64 h-64 bg-heritage-secondary rounded-full mx-auto flex items-center justify-center text-6xl">
                👨‍💼
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsNearbySection />

      {/* Community Stats */}
      <section class="py-16 bg-white">
        <div class="container-max">
          <h2 class="text-3xl font-bold text-center mb-12 text-heritage-primary">
            Community Overview
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-heritage-primary mb-2">847</div>
              <div class="text-lg text-gray-600">Total Homes</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-heritage-primary mb-2">$1.25M+</div>
              <div class="text-lg text-gray-600">Starting From</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-heritage-primary mb-2">2015-2023</div>
              <div class="text-lg text-gray-600">Year Built</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-heritage-primary mb-2">10/10</div>
              <div class="text-lg text-gray-600">Overall Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Heritage at Stonebridge - Premier Summerlin Community | Las Vegas Real Estate',
  meta: [
    {
      name: 'description',
      content:
        'Discover luxury living at Heritage at Stonebridge in Summerlin, Las Vegas. Custom homes, resort-style amenities, and A-rated schools. Your Dr. Jan Duffy, local expert.',
    },
    {
      name: 'keywords',
      content:
        'Heritage Stonebridge, Summerlin homes, Las Vegas real estate, luxury homes, Dr. Jan Duffy, gated community, custom homes, resort amenities, A-rated schools',
    },
    {
      name: 'author',
      content: 'Dr. Jan Duffy',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'Heritage at Stonebridge - Premier Summerlin Community',
    },
    {
      property: 'og:description',
      content: 'Luxury homes in exclusive Summerlin community with resort amenities',
    },
    {
      property: 'og:image',
      content: 'https://stonebridge-homes.vercel.app/images/heritage-stonebridge-og.jpg',
    },
    {
      property: 'og:url',
      content: 'https://stonebridge-homes.vercel.app',
    },
    {
      property: 'og:site_name',
      content: 'Heritage at Stonebridge',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Heritage at Stonebridge - Premier Summerlin Community',
    },
    {
      name: 'twitter:description',
      content: 'Luxury homes in exclusive Summerlin community with resort amenities',
    },
    {
      name: 'twitter:image',
      content: 'https://stonebridge-homes.vercel.app/images/heritage-stonebridge-og.jpg',
    },
  ],
};
