<script>
  export let props;
  
  const { soldProperties, marketTrends, recentActivity } = props;
  
  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  }
  
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  function calculatePriceChange(original, sold) {
    const change = ((sold - original) / original) * 100;
    return change.toFixed(1);
  }
</script>

<svelte:head>
  <title>Sold Properties | Heritage at Stonebridge Market Report</title>
  <meta name="description" content="Recent sales data and market trends for Heritage at Stonebridge, Summerlin. View sold properties and market statistics." />
</svelte:head>

<main class="sold-page">
  <!-- Header -->
  <section class="page-header">
    <div class="container">
      <h1>Sold Properties & Market Trends</h1>
      <p>Recent sales data and market activity in Heritage at Stonebridge</p>
    </div>
  </section>

  <!-- Market Overview -->
  <section class="market-overview">
    <div class="container">
      <h2>Market Overview</h2>
      <div class="market-stats">
        <div class="stat-card">
          <div class="stat-value">{formatPrice(marketTrends.averageSoldPrice)}</div>
          <div class="stat-label">Average Sold Price</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{marketTrends.averageDaysOnMarket}</div>
          <div class="stat-label">Days on Market</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${marketTrends.averagePricePerSqFt}</div>
          <div class="stat-label">Price per Sq Ft</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{marketTrends.totalSoldLastYear}</div>
          <div class="stat-label">Sold Last Year</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">+{marketTrends.priceAppreciation}%</div>
          <div class="stat-label">Price Appreciation</div>
        </div>
        <div class="stat-card">
          <div class="stat-value market-activity">{marketTrends.marketActivity}</div>
          <div class="stat-label">Market Activity</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Recent Activity -->
  <section class="recent-activity">
    <div class="container">
      <h2>Recent Market Activity</h2>
      <div class="activity-list">
        {#each recentActivity as activity}
          <div class="activity-item">
            <div class="activity-date">{formatDate(activity.date)}</div>
            <div class="activity-type" class:sale={activity.type === 'Sale'} class:listing={activity.type === 'Listing'}>
              {activity.type}
            </div>
            <div class="activity-address">{activity.address}</div>
            <div class="activity-price">{formatPrice(activity.price)}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Sold Properties -->
  <section class="sold-properties">
    <div class="container">
      <h2>Recent Sales</h2>
      <div class="sold-grid">
        {#each soldProperties as property}
          <div class="sold-card">
            <div class="sold-image">
              <img src={property.images[0]} alt={property.address} />
              <div class="sold-badge">Sold</div>
            </div>
            <div class="sold-content">
              <div class="sold-address">{property.address}</div>
              <div class="sold-price">{formatPrice(property.soldPrice)}</div>
              {#if property.originalPrice !== property.soldPrice}
                <div class="price-change">
                  Original: {formatPrice(property.originalPrice)} 
                  ({calculatePriceChange(property.originalPrice, property.soldPrice)}%)
                </div>
              {/if}
              <div class="sold-details">
                <span>{property.bedrooms} bed</span>
                <span>{property.bathrooms} bath</span>
                <span>{property.squareFeet.toLocaleString()} sq ft</span>
              </div>
              <div class="sold-info">
                <div class="sold-date">Sold: {formatDate(property.soldDate)}</div>
                <div class="days-on-market">{property.daysOnMarket} days on market</div>
              </div>
              <div class="sold-features">
                {#each property.features.slice(0, 3) as feature}
                  <span class="feature-tag">{feature}</span>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Market Insights -->
  <section class="market-insights">
    <div class="container">
      <h2>Market Insights</h2>
      <div class="insights-grid">
        <div class="insight-card">
          <h3>🏠 Strong Demand</h3>
          <p>The Heritage at Stonebridge community continues to see strong buyer demand with properties selling in an average of {marketTrends.averageDaysOnMarket} days.</p>
        </div>
        <div class="insight-card">
          <h3>📈 Price Growth</h3>
          <p>Home values have appreciated {marketTrends.priceAppreciation}% over the past year, indicating a healthy and growing market.</p>
        </div>
        <div class="insight-card">
          <h3>🎯 Competitive Pricing</h3>
          <p>Properties are selling close to asking price, with minimal negotiation required in most transactions.</p>
        </div>
        <div class="insight-card">
          <h3>🌟 Premium Location</h3>
          <p>Summerlin's premier location and excellent amenities continue to attract buyers seeking quality of life.</p>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .sold-page {
    min-height: 100vh;
  }

  .page-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }

  .page-header h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
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

  .market-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .stat-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: #666;
    font-size: 0.9rem;
  }

  .market-activity {
    background: #28a745;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 1rem;
    display: inline-block;
  }

  .activity-list {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .activity-item {
    display: grid;
    grid-template-columns: 1fr 100px 2fr 1fr;
    gap: 2rem;
    padding: 1.5rem;
    border-bottom: 1px solid #eee;
    align-items: center;
  }

  .activity-item:last-child {
    border-bottom: none;
  }

  .activity-date {
    color: #666;
    font-size: 0.9rem;
  }

  .activity-type {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    text-align: center;
  }

  .activity-type.sale {
    background: #28a745;
    color: white;
  }

  .activity-type.listing {
    background: #007bff;
    color: white;
  }

  .activity-address {
    font-weight: 500;
  }

  .activity-price {
    font-weight: bold;
    color: #667eea;
    text-align: right;
  }

  .sold-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .sold-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .sold-image {
    position: relative;
    height: 200px;
    overflow: hidden;
  }

  .sold-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .sold-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #28a745;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .sold-content {
    padding: 1.5rem;
  }

  .sold-address {
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .sold-price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #28a745;
    margin-bottom: 0.5rem;
  }

  .price-change {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
  }

  .sold-details {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    color: #666;
  }

  .sold-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: #666;
  }

  .sold-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .feature-tag {
    background: #f8f9fa;
    color: #667eea;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.8rem;
  }

  .insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .insight-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .insight-card h3 {
    color: #667eea;
    margin-bottom: 1rem;
  }

  .insight-card p {
    color: #666;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2rem;
    }
    
    .activity-item {
      grid-template-columns: 1fr;
      gap: 0.5rem;
      text-align: center;
    }
    
    .sold-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
