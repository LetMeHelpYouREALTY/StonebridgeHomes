<script>
  export let props;
  
  const { marketData, priceStatistics, marketTrends, neighborhoodComparison, marketInsights } = props;
  
  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  }
  
  function formatPercentage(value) {
    return `${value}%`;
  }
</script>

<svelte:head>
  <title>Market Report | Heritage Stonebridge Real Estate Market Analysis</title>
  <meta name="description" content="Comprehensive market analysis for Heritage Stonebridge, Summerlin. Current market trends, pricing statistics, and neighborhood comparisons." />
</svelte:head>

<main class="market-report-page">
  <!-- Header -->
  <section class="page-header">
    <div class="container">
      <h1>Market Report</h1>
      <p>Heritage at Stonebridge - {marketData.currentMonth}</p>
      <div class="report-date">Last Updated: {new Date().toLocaleDateString()}</div>
    </div>
  </section>

  <!-- Market Overview -->
  <section class="market-overview">
    <div class="container">
      <h2>Market Overview</h2>
      <div class="overview-grid">
        <div class="overview-card">
          <div class="card-value">{marketData.totalListings}</div>
          <div class="card-label">Active Listings</div>
        </div>
        <div class="overview-card">
          <div class="card-value">{marketData.newListings}</div>
          <div class="card-label">New This Month</div>
        </div>
        <div class="overview-card">
          <div class="card-value">{marketData.pendingSales}</div>
          <div class="card-label">Pending Sales</div>
        </div>
        <div class="overview-card">
          <div class="card-value">{marketData.closedSales}</div>
          <div class="card-label">Closed Sales</div>
        </div>
        <div class="overview-card">
          <div class="card-value">{marketData.averageDaysOnMarket}</div>
          <div class="card-label">Days on Market</div>
        </div>
        <div class="overview-card">
          <div class="card-value">{marketData.monthsOfInventory}</div>
          <div class="card-label">Months of Inventory</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Price Statistics -->
  <section class="price-statistics">
    <div class="container">
      <h2>Price Statistics</h2>
      <div class="price-grid">
        <div class="price-card">
          <h3>Average List Price</h3>
          <div class="price-value">{formatPrice(marketData.averageListPrice)}</div>
        </div>
        <div class="price-card">
          <h3>Average Sold Price</h3>
          <div class="price-value">{formatPrice(marketData.averageSoldPrice)}</div>
        </div>
        <div class="price-card">
          <h3>List to Sale Ratio</h3>
          <div class="price-value">{formatPercentage(marketData.listToSaleRatio)}</div>
        </div>
        <div class="price-card">
          <h3>Price per Sq Ft</h3>
          <div class="price-value">${priceStatistics.averagePricePerSqFt}</div>
        </div>
        <div class="price-card">
          <h3>Median Price</h3>
          <div class="price-value">{formatPrice(priceStatistics.medianPrice)}</div>
        </div>
        <div class="price-card">
          <h3>Price Range</h3>
          <div class="price-value">{formatPrice(priceStatistics.lowestPrice)} - {formatPrice(priceStatistics.highestPrice)}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Market Trends Chart -->
  <section class="market-trends">
    <div class="container">
      <h2>6-Month Market Trends</h2>
      <div class="trends-chart">
        <div class="chart-header">
          <div class="chart-title">Average Sold Price</div>
          <div class="chart-legend">
            <span class="legend-item">
              <span class="legend-color price"></span>
              Price Trend
            </span>
          </div>
        </div>
        <div class="chart-container">
          {#each marketTrends as trend, index}
            <div class="chart-bar" style="height: {(trend.averagePrice / 600000) * 100}%">
              <div class="bar-value">{formatPrice(trend.averagePrice)}</div>
              <div class="bar-label">{trend.month}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Price Distribution -->
  <section class="price-distribution">
    <div class="container">
      <h2>Price Distribution</h2>
      <div class="distribution-chart">
        {#each Object.entries(priceStatistics.priceRange) as [range, count]}
          <div class="distribution-bar">
            <div class="bar-fill" style="height: {(count / 28) * 100}%"></div>
            <div class="bar-label">{range === 'under400k' ? 'Under $400K' : range === 'over700k' ? 'Over $700K' : `$${range}`}</div>
            <div class="bar-count">{count}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Neighborhood Comparison -->
  <section class="neighborhood-comparison">
    <div class="container">
      <h2>Neighborhood Comparison</h2>
      <div class="comparison-table">
        <div class="table-header">
          <div class="table-cell">Neighborhood</div>
          <div class="table-cell">Avg Price</div>
          <div class="table-cell">Price Change</div>
          <div class="table-cell">Days on Market</div>
          <div class="table-cell">Sales Volume</div>
        </div>
        {#each neighborhoodComparison as neighborhood}
          <div class="table-row" class:highlight={neighborhood.neighborhood === 'Heritage Stonebridge'}>
            <div class="table-cell">{neighborhood.neighborhood}</div>
            <div class="table-cell">{formatPrice(neighborhood.averagePrice)}</div>
            <div class="table-cell price-change" class:positive={neighborhood.priceChange.startsWith('+')}>
              {neighborhood.priceChange}
            </div>
            <div class="table-cell">{neighborhood.daysOnMarket}</div>
            <div class="table-cell">{neighborhood.salesVolume}</div>
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
        {#each marketInsights as insight}
          <div class="insight-card">
            <div class="insight-header">
              <h3>{insight.title}</h3>
              <div class="impact-badge" class:high={insight.impact === 'High'} class:positive={insight.impact === 'Positive'}>
                {insight.impact}
              </div>
            </div>
            <p class="insight-description">{insight.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
</main>

<style>
  .market-report-page {
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

  .report-date {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 1rem;
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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .overview-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .card-value {
    font-size: 2.5rem;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 0.5rem;
  }

  .card-label {
    color: #666;
    font-size: 0.9rem;
  }

  .price-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .price-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .price-card h3 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .price-value {
    font-size: 1.8rem;
    font-weight: bold;
    color: #28a745;
  }

  .trends-chart {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .chart-title {
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #666;
  }

  .legend-color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
  }

  .legend-color.price {
    background: #667eea;
  }

  .chart-container {
    display: flex;
    align-items: end;
    gap: 1rem;
    height: 300px;
    padding: 1rem 0;
  }

  .chart-bar {
    flex: 1;
    background: #667eea;
    border-radius: 4px 4px 0 0;
    position: relative;
    min-height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
  }

  .bar-value {
    color: white;
    font-size: 0.8rem;
    font-weight: 500;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  .bar-label {
    color: #666;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  .distribution-chart {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: end;
    gap: 1rem;
    height: 300px;
  }

  .distribution-bar {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .bar-fill {
    background: #28a745;
    width: 100%;
    border-radius: 4px 4px 0 0;
    min-height: 20px;
  }

  .bar-label {
    color: #666;
    font-size: 0.8rem;
    margin: 0.5rem 0;
    text-align: center;
  }

  .bar-count {
    color: #333;
    font-weight: 500;
    font-size: 1.2rem;
  }

  .comparison-table {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .table-header {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    background: #667eea;
    color: white;
    font-weight: 500;
  }

  .table-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    border-bottom: 1px solid #eee;
  }

  .table-row.highlight {
    background: #f8f9fa;
  }

  .table-cell {
    padding: 1rem;
    display: flex;
    align-items: center;
  }

  .price-change {
    font-weight: 500;
  }

  .price-change.positive {
    color: #28a745;
  }

  .insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .insight-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .insight-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .insight-card h3 {
    color: #333;
    margin: 0;
    flex: 1;
  }

  .impact-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    background: #6c757d;
    color: white;
  }

  .impact-badge.high {
    background: #dc3545;
  }

  .impact-badge.positive {
    background: #28a745;
  }

  .insight-description {
    color: #666;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2rem;
    }
    
    .chart-container {
      flex-direction: column;
      height: auto;
      gap: 0.5rem;
    }
    
    .chart-bar {
      height: 60px;
      flex-direction: row;
      justify-content: space-between;
    }
    
    .bar-value {
      writing-mode: initial;
      text-orientation: initial;
    }
    
    .table-header, .table-row {
      grid-template-columns: 1fr;
    }
    
    .distribution-chart {
      flex-direction: column;
      height: auto;
    }
  }
</style>
