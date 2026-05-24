<script>
  export let props;
  
  const { community, amenities, hoa, lifestyle } = props;
</script>

<svelte:head>
  <title>{community.name} - Community Details | Heritage Stonebridge</title>
  <meta name="description" content="{community.description}" />
</svelte:head>

<main class="community-page">
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>{community.name}</h1>
      <p class="location">{community.location}</p>
      <p class="description">{community.description}</p>
    </div>
  </section>

  <!-- Community Overview -->
  <section class="community-overview">
    <div class="container">
      <h2>Community Overview</h2>
      <div class="overview-grid">
        <div class="overview-item">
          <h3>Year Built</h3>
          <p>{community.yearBuilt}</p>
        </div>
        <div class="overview-item">
          <h3>Total Homes</h3>
          <p>{community.totalHomes}</p>
        </div>
        <div class="overview-item">
          <h3>Home Types</h3>
          <p>{community.homeTypes.join(", ")}</p>
        </div>
        <div class="overview-item">
          <h3>Price Range</h3>
          <p>{community.priceRange}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Amenities -->
  <section class="amenities">
    <div class="container">
      <h2>Community Amenities</h2>
      <div class="amenities-grid">
        {#each amenities as amenity}
          <div class="amenity-card">
            <div class="amenity-icon">{amenity.icon}</div>
            <h3>{amenity.name}</h3>
            <p>{amenity.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- HOA Information -->
  <section class="hoa-info">
    <div class="container">
      <h2>HOA Information</h2>
      <div class="hoa-content">
        <div class="hoa-fee">
          <h3>Monthly HOA Fee</h3>
          <div class="fee-amount">{hoa.monthlyFee}</div>
        </div>
        <div class="hoa-includes">
          <h3>Includes:</h3>
          <ul>
            {#each hoa.includes as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Lifestyle -->
  <section class="lifestyle">
    <div class="container">
      <h2>Lifestyle & Location</h2>
      <div class="lifestyle-grid">
        <div class="lifestyle-item">
          <h3>Demographics</h3>
          <p>{lifestyle.demographics}</p>
        </div>
        <div class="lifestyle-item">
          <h3>Pet Friendly</h3>
          <p>{lifestyle.petFriendly ? 'Yes' : 'No'}</p>
        </div>
        <div class="lifestyle-item">
          <h3>Schools</h3>
          <p>{lifestyle.schools}</p>
        </div>
        <div class="lifestyle-item">
          <h3>Shopping</h3>
          <p>{lifestyle.shopping}</p>
        </div>
        <div class="lifestyle-item">
          <h3>Dining</h3>
          <p>{lifestyle.dining}</p>
        </div>
        <div class="lifestyle-item">
          <h3>Recreation</h3>
          <p>{lifestyle.recreation}</p>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .community-page {
    min-height: 100vh;
  }

  .hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .location {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  .description {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.9;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  section {
    padding: 4rem 0;
  }

  section:nth-child(even) {
    background-color: #f8f9fa;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
  }

  .overview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .overview-item {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .overview-item h3 {
    color: #667eea;
    margin-bottom: 1rem;
  }

  .amenities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .amenity-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .amenity-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .amenity-card h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  .hoa-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    align-items: start;
  }

  .hoa-fee {
    text-align: center;
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .fee-amount {
    font-size: 3rem;
    font-weight: bold;
    color: #667eea;
    margin-top: 1rem;
  }

  .hoa-includes {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .hoa-includes ul {
    list-style: none;
    padding: 0;
  }

  .hoa-includes li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
  }

  .hoa-includes li:before {
    content: "✓";
    color: #667eea;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .lifestyle-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .lifestyle-item {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .lifestyle-item h3 {
    color: #667eea;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2rem;
    }
    
    .hoa-content {
      grid-template-columns: 1fr;
    }
  }
</style>
