<script>
  export let title;
  export let description;
  export let canonical;
  export let openGraph = {};
  export let jsonLd = {};
  export let twitterCard = {};
  export let keywords = [];
  export let author = 'Dr. Jan Duffy';
  export let siteName = 'Heritage at Stonebridge';
  export let image = '/images/heritage-stonebridge-og.jpg';
  export let type = 'website';
  export let locale = 'en_US';
  export let robots = 'index, follow';
  export let lastModified = new Date().toISOString();

  // Default values
  $: finalTitle = title ? `${title} | ${siteName}` : siteName;
  $: finalDescription = description || 'Premier luxury homes in Heritage at Stonebridge, Summerlin\'s most prestigious gated community. Find your dream home with Dr. Jan Duffy.';
  $: finalCanonical = canonical || '';
  $: finalImage = openGraph.image || image;
  $: finalType = openGraph.type || type;
  
  // Open Graph defaults
  $: ogTitle = openGraph.title || finalTitle;
  $: ogDescription = openGraph.description || finalDescription;
  $: ogUrl = openGraph.url || finalCanonical;
  
  // Twitter Card defaults
  $: twitterTitle = twitterCard.title || ogTitle;
  $: twitterDescription = twitterCard.description || ogDescription;
  $: twitterImage = twitterCard.image || finalImage;
  $: twitterSite = twitterCard.site || '@DrJanDuffy';
  $: twitterCreator = twitterCard.creator || '@DrJanDuffy';

  // Structured Data for Real Estate
  $: defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy",
    "description": "Premier real estate professional specializing in Heritage at Stonebridge, Summerlin",
    "url": finalCanonical,
    "telephone": "+1-702-222-1964",
    "email": "jan.duffy@heritagestonebridge.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Summerlin, Las Vegas, NV"
    },
    "serviceType": ["Real Estate Sales", "Property Management", "Market Analysis"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Heritage at Stonebridge Properties",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstateListing",
            "name": "Luxury Homes in Heritage at Stonebridge"
          }
        }
      ]
    }
  };

  $: finalJsonLd = jsonLd && Object.keys(jsonLd).length > 0 ? jsonLd : defaultJsonLd;
</script>

<svelte:head>
  <!-- Basic Meta Tags -->
  <title>{finalTitle}</title>
  <meta name="description" content={finalDescription} />
  <meta name="keywords" content={keywords.join(', ')} />
  <meta name="author" content={author} />
  <meta name="robots" content={robots} />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />
  <meta name="last-modified" content={lastModified} />
  
  <!-- Canonical URL -->
  {#if finalCanonical}
    <link rel="canonical" href={finalCanonical} />
  {/if}
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={finalType} />
  <meta property="og:url" content={ogUrl} />
  <meta property="og:title" content={ogTitle} />
  <meta property="og:description" content={ogDescription} />
  <meta property="og:image" content={finalImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={ogTitle} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:locale" content={locale} />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={twitterSite} />
  <meta name="twitter:creator" content={twitterCreator} />
  <meta name="twitter:title" content={twitterTitle} />
  <meta name="twitter:description" content={twitterDescription} />
  <meta name="twitter:image" content={twitterImage} />
  <meta name="twitter:image:alt" content={twitterTitle} />
  
  <!-- Additional Meta Tags -->
  <meta name="theme-color" content="#8B4513" />
  <meta name="msapplication-TileColor" content="#8B4513" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content={siteName} />
  
  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify(finalJsonLd, null, 2)}</script>`}
  
  <!-- Additional Structured Data for Real Estate -->
  {#if type === 'article' || title?.includes('Property') || title?.includes('Home')}
    {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": "${ogTitle}",
      "description": "${ogDescription}",
      "url": "${ogUrl}",
      "image": "${finalImage}",
      "datePosted": "${lastModified}",
      "validThrough": "${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()}",
      "offers": {
        "@type": "Offer",
        "price": "Contact for Pricing",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "RealEstateAgent",
          "name": "Dr. Jan Duffy"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "addressCountry": "US"
      }
    }
    </script>`}
  {/if}
  
  <!-- Local Business Schema for Contact Pages -->
  {#if title?.includes('Contact') || type === 'contact'}
    {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Dr. Jan Duffy",
      "image": "/images/agent/jan-duffy.jpg",
      "telephone": "+1-702-222-1964",
      "email": "jan.duffy@heritagestonebridge.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Summerlin, Las Vegas, NV"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Real Estate Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Home Buying"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Home Selling"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Market Analysis"
            }
          }
        ]
      },
      "openingHours": "Mo-Fr 09:00-18:00,Sa 10:00-16:00",
      "priceRange": "$$"
    }
    </script>`}
  {/if}
</svelte:head>

<!-- SEO Component - No visual output, only meta tags -->
