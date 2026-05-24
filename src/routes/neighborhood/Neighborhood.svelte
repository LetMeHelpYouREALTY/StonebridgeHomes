<script>
  export let props;
  
  const { neighborhood, schools, shopping, dining, recreation, transportation } = props;
</script>

<svelte:head>
  <title>Neighborhood | Summerlin, Las Vegas - Heritage Stonebridge</title>
  <meta name="description" content="Discover Summerlin, Las Vegas - a premier master-planned community with top schools, shopping, dining, and recreation near Heritage Stonebridge." />
</svelte:head>

<main class="neighborhood-page">
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>{neighborhood.name}</h1>
      <p class="location">{neighborhood.location}</p>
      <p class="description">{neighborhood.description}</p>
      <div class="neighborhood-stats">
        <div class="stat">
          <strong>{neighborhood.established}</strong>
          <span>Established</span>
        </div>
        <div class="stat">
          <strong>{neighborhood.population}</strong>
          <span>Population</span>
        </div>
        <div class="stat">
          <strong>{neighborhood.size}</strong>
          <span>Size</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Schools -->
  <section class="schools-section">
    <div class="container">
      <h2>🏫 Top-Rated Schools</h2>
      <div class="schools-grid">
        {#each schools as school}
          <div class="school-card">
            <div class="school-header">
              <h3>{school.name}</h3>
              <div class="school-rating rating-{school.rating.toLowerCase().replace('+', '-plus')}">
                {school.rating}
              </div>
            </div>
            <div class="school-type">{school.type}</div>
            <div class="school-distance">{school.distance}</div>
            <p class="school-description">{school.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Shopping -->
  <section class="shopping-section">
    <div class="container">
      <h2>🛍️ Shopping & Entertainment</h2>
      <div class="shopping-grid">
        {#each shopping as shop}
          <div class="shopping-card">
            <div class="shopping-header">
              <h3>{shop.name}</h3>
              <div class="shopping-type">{shop.type}</div>
            </div>
            <div class="shopping-distance">{shop.distance}</div>
            <p class="shopping-description">{shop.description}</p>
            {#if shop.highlights}
              <div class="shopping-highlights">
                <h4>Highlights:</h4>
                <ul>
                  {#each shop.highlights as highlight}
                    <li>{highlight}</li>
                  {/each}
                </ul>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Dining -->
  <section class="dining-section">
    <div class="container">
      <h2>🍽️ Dining & Restaurants</h2>
      <div class="dining-grid">
        {#each dining as restaurant}
          <div class="dining-card">
            <div class="dining-header">
              <h3>{restaurant.name}</h3>
              <div class="dining-rating">
                ⭐ {restaurant.rating}
              </div>
            </div>
            <div class="dining-cuisine">{restaurant.cuisine}</div>
            <div class="dining-type">{restaurant.type}</div>
            <div class="dining-distance">{restaurant.distance}</div>
            <p class="dining-description">{restaurant.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Recreation -->
  <section class="recreation-section">
    <div class="container">
      <h2>🏞️ Recreation & Activities</h2>
      <div class="recreation-grid">
        {#each recreation as activity}
          <div class="recreation-card">
            <div class="recreation-header">
              <h3>{activity.name}</h3>
              <div class="recreation-type">{activity.type}</div>
            </div>
            <div class="recreation-distance">{activity.distance}</div>
            <p class="recreation-description">{activity.description}</p>
            {#if activity.activities}
              <div class="recreation-activities">
                <h4>Activities:</h4>
                <div class="activity-tags">
                  {#each activity.activities as act}
                    <span class="activity-tag">{act}</span>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Transportation -->
  <section class="transportation-section">
    <div class="container">
      <h2>🚗 Transportation & Access</h2>
      <div class="transportation-content">
        <div class="transportation-destinations">
          <h3>Key Destinations</h3>
          <div class="destination-list">
            <div class="destination">
              <strong>Airport:</strong> {transportation.airport}
            </div>
            <div class="destination">
              <strong>Las Vegas Strip:</strong> {transportation.strip}
            </div>
            <div class="destination">
              <strong>Downtown Las Vegas:</strong> {transportation.downtown}
            </div>
          </div>
        </div>
        <div class="transportation-highways">
          <h3>Major Highways</h3>
          <div class="highway-list">
            {#each transportation.majorHighways as highway}
              <div class="highway">{highway}</div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .neighborhood-page {
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
    margin: 0 auto 2rem;
    opacity: 0.9;
  }

  .neighborhood-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 2rem;
  }

  .stat {
    text-align: center;
  }

  .stat strong {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .stat span {
    font-size: 0.9rem;
    opacity: 0.8;
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

  .schools-grid, .shopping-grid, .dining-grid, .recreation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .school-card, .shopping-card, .dining-card, .recreation-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .school-header, .shopping-header, .dining-header, .recreation-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .school-header h3, .shopping-header h3, .dining-header h3, .recreation-header h3 {
    color: #333;
    margin: 0;
    flex: 1;
  }

  .school-rating {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .rating-a-plus {
    background: #28a745;
    color: white;
  }

  .rating-a {
    background: #17a2b8;
    color: white;
  }

  .school-type, .shopping-type, .dining-type, .recreation-type {
    color: #667eea;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .dining-cuisine {
    color: #28a745;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .school-distance, .shopping-distance, .dining-distance, .recreation-distance {
    color: #666;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .school-description, .shopping-description, .dining-description, .recreation-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .shopping-highlights, .recreation-activities {
    margin-top: 1rem;
  }

  .shopping-highlights h4, .recreation-activities h4 {
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  .shopping-highlights ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .shopping-highlights li {
    padding: 0.25rem 0;
    color: #666;
    font-size: 0.9rem;
  }

  .shopping-highlights li:before {
    content: "•";
    color: #667eea;
    margin-right: 0.5rem;
  }

  .activity-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .activity-tag {
    background: #f8f9fa;
    color: #667eea;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.8rem;
  }

  .transportation-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .transportation-destinations h3, .transportation-highways h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  .destination-list, .highway-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .destination {
    color: #666;
    line-height: 1.6;
  }

  .destination strong {
    color: #333;
  }

  .highway {
    background: #f8f9fa;
    padding: 0.75rem;
    border-radius: 5px;
    color: #667eea;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2rem;
    }
    
    .neighborhood-stats {
      flex-direction: column;
      gap: 1rem;
    }
    
    .transportation-content {
      grid-template-columns: 1fr;
    }
  }
</style>
