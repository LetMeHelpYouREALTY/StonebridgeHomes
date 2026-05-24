<script>
  export let props;
  
  const { property, relatedProperties } = props;
  
  let currentImageIndex = 0;
  
  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  }
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % property.images.length;
  }
  
  function prevImage() {
    currentImageIndex = currentImageIndex === 0 ? property.images.length - 1 : currentImageIndex - 1;
  }
  
  function goToImage(index) {
    currentImageIndex = index;
  }
</script>

<svelte:head>
  <title>{property.address} - {formatPrice(property.price)} | Heritage Stonebridge</title>
  <meta name="description" content="{property.description}" />
</svelte:head>

{#if props.notFound}
  <main class="not-found">
    <div class="container">
      <h1>Property Not Found</h1>
      <p>The property you're looking for doesn't exist or has been removed.</p>
      <a href="/homes" class="back-btn">View All Homes</a>
    </div>
  </main>
{:else}
  <main class="property-page">
    <!-- Property Header -->
    <section class="property-header">
      <div class="container">
        <div class="property-info">
          <h1>{property.address}</h1>
          <div class="property-price">{formatPrice(property.price)}</div>
          <div class="property-details">
            <span>{property.bedrooms} bed</span>
            <span>{property.bathrooms} bath</span>
            <span>{property.squareFeet.toLocaleString()} sq ft</span>
            <span>{property.lotSize} acres</span>
          </div>
          <div class="property-status">{property.status}</div>
        </div>
      </div>
    </section>

    <!-- Image Gallery -->
    <section class="image-gallery">
      <div class="container">
        <div class="gallery-container">
          <div class="main-image">
            <img src={property.images[currentImageIndex]} alt={property.address} />
            <button class="gallery-nav prev" on:click={prevImage}>‹</button>
            <button class="gallery-nav next" on:click={nextImage}>›</button>
            <div class="image-counter">{currentImageIndex + 1} / {property.images.length}</div>
          </div>
          <div class="thumbnail-grid">
            {#each property.images as image, index}
              <img 
                src={image} 
                alt="Property image {index + 1}"
                class="thumbnail"
                class:active={index === currentImageIndex}
                on:click={() => goToImage(index)}
              />
            {/each}
          </div>
        </div>
      </div>
    </section>

    <!-- Property Details -->
    <section class="property-details">
      <div class="container">
        <div class="details-grid">
          <!-- Main Details -->
          <div class="main-details">
            <h2>Property Details</h2>
            <p class="description">{property.description}</p>
            
            <div class="features-section">
              <h3>Features & Amenities</h3>
              <div class="features-grid">
                {#each property.features as feature}
                  <div class="feature-item">
                    <span class="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                {/each}
              </div>
            </div>

            <div class="community-amenities">
              <h3>Community Amenities</h3>
              <div class="amenities-list">
                {#each property.amenities as amenity}
                  <span class="amenity-tag">{amenity}</span>
                {/each}
              </div>
            </div>
          </div>

          <!-- Property Info Sidebar -->
          <div class="property-sidebar">
            <div class="info-card">
              <h3>Property Information</h3>
              <div class="info-list">
                <div class="info-item">
                  <span class="label">Year Built:</span>
                  <span class="value">{property.yearBuilt}</span>
                </div>
                <div class="info-item">
                  <span class="label">Square Feet:</span>
                  <span class="value">{property.squareFeet.toLocaleString()}</span>
                </div>
                <div class="info-item">
                  <span class="label">Lot Size:</span>
                  <span class="value">{property.lotSize} acres</span>
                </div>
                <div class="info-item">
                  <span class="label">School District:</span>
                  <span class="value">{property.schoolDistrict}</span>
                </div>
                <div class="info-item">
                  <span class="label">HOA Fee:</span>
                  <span class="value">${property.hoaFee}/month</span>
                </div>
                <div class="info-item">
                  <span class="label">Property Tax:</span>
                  <span class="value">${property.propertyTax}/year</span>
                </div>
              </div>
            </div>

            <div class="contact-card">
              <h3>Schedule a Showing</h3>
              <p>Contact Dr. Jan Duffy for a private showing or more information.</p>
              <div class="contact-info">
                <a href="tel:7025550123" class="contact-btn phone">📞 Call Now</a>
                <a href="mailto:jan.duffy@heritagestonebridge.com" class="contact-btn email">✉️ Email</a>
              </div>
            </div>

            <div class="utilities-card">
              <h3>Utilities</h3>
              <div class="utilities-list">
                {#each Object.entries(property.utilities) as [service, provider]}
                  <div class="utility-item">
                    <span class="utility-service">{service}:</span>
                    <span class="utility-provider">{provider}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Virtual Tour -->
    <section class="virtual-tour">
      <div class="container">
        <h2>Virtual Tour</h2>
        <div class="tour-container">
          <iframe 
            src={property.virtualTour}
            width="100%" 
            height="500"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Related Properties -->
    {#if relatedProperties.length > 0}
      <section class="related-properties">
        <div class="container">
          <h2>Similar Properties</h2>
          <div class="related-grid">
            {#each relatedProperties as related}
              <div class="related-card">
                <img src={related.images[0]} alt={related.address} />
                <div class="related-info">
                  <div class="related-price">{formatPrice(related.price)}</div>
                  <div class="related-address">{related.address}</div>
                  <div class="related-details">
                    {related.bedrooms} bed • {related.bathrooms} bath • {related.squareFeet.toLocaleString()} sq ft
                  </div>
                  <a href="/{related.id}" class="view-property-btn">View Property</a>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </section>
    {/if}
  </main>
{/if}

<style>
  .not-found {
    padding: 4rem 0;
    text-align: center;
  }

  .not-found h1 {
    color: #333;
    margin-bottom: 1rem;
  }

  .back-btn {
    display: inline-block;
    background: #667eea;
    color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 2rem;
  }

  .property-page {
    min-height: 100vh;
  }

  .property-header {
    background: #f8f9fa;
    padding: 2rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .property-info h1 {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .property-price {
    font-size: 2rem;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 1rem;
  }

  .property-details {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
    color: #666;
  }

  .property-status {
    display: inline-block;
    background: #28a745;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 500;
  }

  .image-gallery {
    padding: 2rem 0;
  }

  .gallery-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .main-image {
    position: relative;
    margin-bottom: 1rem;
  }

  .main-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
  }

  .gallery-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .gallery-nav:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .gallery-nav.prev {
    left: 1rem;
  }

  .gallery-nav.next {
    right: 1rem;
  }

  .image-counter {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }

  .thumbnail-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.5rem;
  }

  .thumbnail {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  .thumbnail.active {
    opacity: 1;
    border: 3px solid #667eea;
  }

  .thumbnail:hover {
    opacity: 1;
  }

  .property-details {
    padding: 4rem 0;
  }

  .details-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
  }

  .main-details h2 {
    color: #333;
    margin-bottom: 2rem;
  }

  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .features-section, .community-amenities {
    margin-bottom: 2rem;
  }

  .features-section h3, .community-amenities h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
  }

  .feature-check {
    color: #28a745;
    font-weight: bold;
  }

  .amenities-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .amenity-tag {
    background: #f8f9fa;
    color: #667eea;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }

  .property-sidebar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .info-card, .contact-card, .utilities-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .info-card h3, .contact-card h3, .utilities-card h3 {
    color: #333;
    margin-bottom: 1.5rem;
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
  }

  .info-item:last-child {
    border-bottom: none;
  }

  .label {
    color: #666;
  }

  .value {
    font-weight: 500;
    color: #333;
  }

  .contact-card p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .contact-info {
    display: flex;
    gap: 1rem;
  }

  .contact-btn {
    flex: 1;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    font-weight: 500;
    transition: background 0.3s ease;
  }

  .contact-btn.phone {
    background: #28a745;
    color: white;
  }

  .contact-btn.phone:hover {
    background: #218838;
  }

  .contact-btn.email {
    background: #667eea;
    color: white;
  }

  .contact-btn.email:hover {
    background: #5a67d8;
  }

  .utilities-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .utility-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .utility-service {
    color: #666;
    text-transform: capitalize;
  }

  .utility-provider {
    font-weight: 500;
    color: #333;
  }

  .virtual-tour {
    background: #f8f9fa;
    padding: 4rem 0;
  }

  .virtual-tour h2 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
  }

  .tour-container {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .related-properties {
    padding: 4rem 0;
  }

  .related-properties h2 {
    text-align: center;
    color: #333;
    margin-bottom: 3rem;
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .related-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .related-card:hover {
    transform: translateY(-5px);
  }

  .related-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .related-info {
    padding: 1.5rem;
  }

  .related-price {
    font-size: 1.3rem;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 0.5rem;
  }

  .related-address {
    font-weight: 500;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .related-details {
    color: #666;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .view-property-btn {
    display: inline-block;
    background: #667eea;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.3s ease;
  }

  .view-property-btn:hover {
    background: #5a67d8;
  }

  @media (max-width: 768px) {
    .property-info h1 {
      font-size: 2rem;
    }
    
    .property-details {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .details-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .contact-info {
      flex-direction: column;
    }
    
    .related-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
