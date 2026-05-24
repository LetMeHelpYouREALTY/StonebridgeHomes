import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export const RouterHead = component$(() => {
  return (
    <>
      <title>Heritage at Stonebridge - Premier Summerlin Community | Las Vegas Real Estate</title>
      <meta name="description" content="Discover luxury living at Heritage at Stonebridge in Summerlin, Las Vegas. Custom homes, resort-style amenities, and A-rated schools. Your Dr. Jan Duffy, local expert." />
      <meta name="keywords" content="Heritage Stonebridge, Summerlin homes, Las Vegas real estate, luxury homes, Dr. Jan Duffy, gated community, custom homes, resort amenities, A-rated schools" />
      <meta name="author" content="Dr. Jan Duffy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Heritage at Stonebridge - Premier Summerlin Community" />
      <meta property="og:description" content="Luxury homes in exclusive Summerlin community with resort amenities" />
      <meta property="og:image" content="https://heritagestonebridge.com/images/heritage-stonebridge-og.jpg" />
      <meta property="og:url" content="https://heritagestonebridge.com" />
      <meta property="og:site_name" content="Heritage at Stonebridge" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Heritage at Stonebridge - Premier Summerlin Community" />
      <meta name="twitter:description" content="Luxury homes in exclusive Summerlin community with resort amenities" />
      <meta name="twitter:image" content="https://heritagestonebridge.com/images/heritage-stonebridge-og.jpg" />
      <meta name="twitter:site" content="@DrJanDuffy" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Dr. Jan Duffy",
          "url": "https://heritagestonebridge.com",
          "logo": "https://heritagestonebridge.com/images/logo.png",
          "image": "https://heritagestonebridge.com/images/heritage-stonebridge-og.jpg",
          "description": "Premier luxury homes in Heritage at Stonebridge, Summerlin's most prestigious gated community",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Heritage at Stonebridge",
            "addressLocality": "Summerlin",
            "addressRegion": "NV",
            "postalCode": "89144",
            "addressCountry": "US"
          },
          "areaServed": {
            "@type": "City",
            "name": "Summerlin, Las Vegas, NV"
          },
          "telephone": "+1-702-222-1964",
          "email": "jan.duffy@heritagestonebridge.com",
          "sameAs": [
            "https://www.facebook.com/heritagestonebridge",
            "https://www.linkedin.com/in/dr-jan-duffy",
            "https://twitter.com/DrJanDuffy"
          ]
        })}
      </script>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Heritage at Stonebridge - Premier Summerlin Community',
  meta: [
    {
      name: 'description',
      content: 'Discover luxury living at Heritage at Stonebridge in Summerlin, Las Vegas. Custom homes, resort-style amenities, and A-rated schools.',
    },
  ],
};