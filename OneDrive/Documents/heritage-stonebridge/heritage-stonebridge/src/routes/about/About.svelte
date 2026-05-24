<script>
  import SEO from '../../components/SEO.svelte';

  export let data;

  const { community, history, amenities, location, schools, lifestyle } = data;
</script>

<SEO
  title="About Heritage at Stonebridge - Premier Summerlin Community | Las Vegas"
  description="Discover Heritage at Stonebridge, a premier gated community in Summerlin, Las Vegas. Luxury homes, resort amenities, and world-class location. Learn about our history and lifestyle."
  canonical="https://heritagestonebridge.com/about"
  keywords={['Heritage Stonebridge', 'Summerlin community', 'Las Vegas luxury homes', 'gated community', 'master planned community', 'resort amenities']}
  openGraph={{
    type: 'website',
    url: 'https://heritagestonebridge.com/about',
    title: 'About Heritage at Stonebridge - Premier Summerlin Community',
    description: 'Learn about Heritage at Stonebridge, Summerlin\'s premier gated community with luxury homes and resort amenities.',
    image: 'https://heritagestonebridge.com/images/heritage-community-about.jpg'
  }}
/>

<div class="hero-section text-center">
  <div class="container-max px-4">
    <h1 class="text-5xl font-bold mb-4">
      About {community.name}
    </h1>
    <p class="text-xl mb-6">
      Premier Luxury Living in {community.location}
    </p>
    <p class="text-lg text-heritage-primary max-w-3xl mx-auto">
      {community.description}
    </p>
  </div>
</div>

<section class="section-padding bg-white">
  <div class="container-content">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="heritage-heading text-3xl mb-6">{history.title}</h2>
        {#each history.content as paragraph}
          <p class="text-gray-700 mb-4 leading-relaxed">
            {paragraph}
          </p>
        {/each}
      </div>

      <div class="heritage-card p-8 bg-heritage-light">
        <h3 class="heritage-heading text-2xl mb-6">Community Highlights</h3>
        <div class="space-y-4">
          <div class="flex justify-between">
            <span class="font-semibold">Established:</span>
            <span>{community.established}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Total Homes:</span>
            <span>{community.totalHomes}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Location:</span>
            <span>{community.location}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Type:</span>
            <span>Gated Community</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-padding bg-heritage-light">
  <div class="container-content">
    <h2 class="heritage-heading text-center mb-12">Community Amenities</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each amenities as amenity}
        <div class="heritage-card p-6 text-center hover:shadow-lg transition-shadow duration-300">
          <div class="text-4xl mb-4">{amenity.icon}</div>
          <h3 class="font-semibold text-heritage-primary mb-2">{amenity.title}</h3>
          <p class="text-sm text-gray-600">{amenity.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section-padding bg-white">
  <div class="container-content">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h2 class="heritage-heading text-3xl mb-6">{location.title}</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">
          {location.description}
        </p>

        <h3 class="font-semibold text-lg mb-4">Location Highlights:</h3>
        <ul class="space-y-2 mb-8">
          {#each location.highlights as highlight}
            <li class="flex items-center space-x-2">
              <span class="text-heritage-primary">✓</span>
              <span class="text-gray-700">{highlight}</span>
            </li>
          {/each}
        </ul>

        <h3 class="font-semibold text-lg mb-4">Nearby Attractions:</h3>
        <ul class="space-y-2">
          {#each location.nearbyAttractions as attraction}
            <li class="flex items-center space-x-2">
              <span class="text-heritage-primary">📍</span>
              <span class="text-gray-700">{attraction}</span>
            </li>
          {/each}
        </ul>
      </div>

      <div class="heritage-card p-8">
        <h3 class="heritage-heading text-2xl mb-6">Community Vision</h3>
        <blockquote class="text-lg text-gray-700 italic leading-relaxed">
          "{community.vision}"
        </blockquote>
      </div>
    </div>
  </div>
</section>

<section class="section-padding bg-heritage-light">
  <div class="container-content">
    <h2 class="heritage-heading text-center mb-12">{schools.title}</h2>
    <p class="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
      {schools.description}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="heritage-card p-6">
        <h3 class="font-semibold text-heritage-primary mb-4">Elementary Schools</h3>
        <ul class="space-y-2">
          {#each schools.elementary as school}
            <li class="text-sm text-gray-700">• {school}</li>
          {/each}
        </ul>
      </div>

      <div class="heritage-card p-6">
        <h3 class="font-semibold text-heritage-primary mb-4">Middle Schools</h3>
        <ul class="space-y-2">
          {#each schools.middle as school}
            <li class="text-sm text-gray-700">• {school}</li>
          {/each}
        </ul>
      </div>

      <div class="heritage-card p-6">
        <h3 class="font-semibold text-heritage-primary mb-4">High Schools</h3>
        <ul class="space-y-2">
          {#each schools.high as school}
            <li class="text-sm text-gray-700">• {school}</li>
          {/each}
        </ul>
      </div>

      <div class="heritage-card p-6">
        <h3 class="font-semibold text-heritage-primary mb-4">Universities</h3>
        <ul class="space-y-2">
          {#each schools.universities as university}
            <li class="text-sm text-gray-700">• {university}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section-padding bg-white">
  <div class="container-content">
    <h2 class="heritage-heading text-center mb-12">{lifestyle.title}</h2>
    <p class="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
      {lifestyle.description}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each lifestyle.features as feature}
        <div class="flex items-center space-x-3 p-4 bg-heritage-light rounded-lg">
          <span class="text-heritage-primary text-xl">✓</span>
          <span class="text-gray-700">{feature}</span>
        </div>
      {/each}
    </div>

    <div class="text-center mt-12">
      <a href="/contact" class="heritage-button text-lg px-8 py-4">
        Learn More About Living Here
      </a>
    </div>
  </div>
</section>

<style>
  @import '../../assets/css/tailwind.css';
</style>
