<script>
  export let props;
  
  let selectedFilters = {
    priceRange: [400000, 800000],
    bedrooms: [],
    bathrooms: [],
    homeTypes: [],
    features: []
  };
  
  let sortBy = "price-low";
  let filteredHomes = props.availableHomes;
  
  function filterHomes() {
    filteredHomes = props.availableHomes.filter(home => {
      // Price filter
      if (home.price < selectedFilters.priceRange[0] || home.price > selectedFilters.priceRange[1]) {
        return false;
      }
      
      // Bedrooms filter
      if (selectedFilters.bedrooms.length > 0 && !selectedFilters.bedrooms.includes(home.bedrooms)) {
        return false;
      }
      
      // Bathrooms filter
      if (selectedFilters.bathrooms.length > 0 && !selectedFilters.bathrooms.includes(home.bathrooms)) {
        return false;
      }
      
      // Features filter
      if (selectedFilters.features.length > 0) {
        const hasFeatures = selectedFilters.features.every(feature => 
          home.features.includes(feature)
        );
        if (!hasFeatures) return false;
      }
      
      return true;
    });
    
    // Apply sorting
    sortHomes();
  }
  
  function sortHomes() {
    switch (sortBy) {
      case "price-low":
        filteredHomes.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredHomes.sort((a, b) => b.price - a.price);
        break;
      case "size-large":
        filteredHomes.sort((a, b) => b.squareFeet - a.squareFeet);
        break;
      case "newest":
        filteredHomes.sort((a, b) => b.yearBuilt - a.yearBuilt);
        break;
    }
  }
  
  function toggleFilter(category, value) {
    if (selectedFilters[category].includes(value)) {
      selectedFilters[category] = selectedFilters[category].filter(item => item !== value);
    } else {
      selectedFilters[category] = [...selectedFilters[category], value];
    }
    filterHomes();
  }
  
  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  }
  
  // Initialize filters
  $: if (props) {
    filterHomes();
  }
</script>

<svelte:head>
  <title>Available Homes | Heritage at Stonebridge</title>
  <meta name="description" content="Browse available homes in Heritage at Stonebridge, Summerlin. Find your dream home with our advanced search filters." />
</svelte:head>

<main class="homes-page">
  <!-- Header -->
  <section class="page-header">
    <div class="container">
      <h1>Available Homes</h1>
      <p>Find your perfect home in Heritage at Stonebridge</p>
    </div>
  </section>

  <!-- Filters & Sort -->
  <section class="filters-section">
    <div class="container">
      <div class="filters-container">
        <!-- Price Range -->
        <div class="filter-group">
          <h3>Price Range</h3>
          <div class="price-range">
            <span>{formatPrice(selectedFilters.priceRange[0])}</span>
            <input 
              type="range" 
              min={props.filters.priceRange.min} 
              max={props.filters.priceRange.max} 
              bind:value={selectedFilters.priceRange[0]}
              on:input={filterHomes}
            />
            <input 
              type="range" 
              min={props.filters.priceRange.min} 
              max={props.filters.priceRange.max} 
              bind:value={selectedFilters.priceRange[1]}
              on:input={filterHomes}
            />
            <span>{formatPrice(selectedFilters.priceRange[1])}</span>
          </div>
        </div>

        <!-- Bedrooms -->
        <div class="filter-group">
          <h3>Bedrooms</h3>
          <div class="filter-options">
            {#each props.filters.bedrooms as bedrooms}
              <button 
                class="filter-btn"
                class:active={selectedFilters.bedrooms.includes(bedrooms)}
                on:click={() => toggleFilter('bedrooms', bedrooms)}
              >
                {bedrooms}+
              </button>
            {/each}
          </div>
        </div>

        <!-- Features -->
        <div class="filter-group">
          <h3>Features</h3>
          <div class="filter-options">
            {#each props.filters.features as feature}
              <button 
                class="filter-btn"
                class:active={selectedFilters.features.includes(feature)}
                on:click={() => toggleFilter('features', feature)}
              >
                {feature}
              </button>
            {/each}
          </div>
        </div>

        <!-- Sort -->
        <div class="filter-group">
          <h3>Sort By</h3>
          <select bind:value={sortBy} on:change={filterHomes}>
            {#each props.sortOptions as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
        </div>
      </div>
      
      <div class="results-count">
        Showing {filteredHomes.length} of {props.availableHomes.length} homes
      </div>
    </div>
  </section>

  <!-- Homes Grid -->
  <section class="homes-grid-section">
    <div class="container">
      {#if filteredHomes.length > 0}
        <div class="homes-grid">
          {#each filteredHomes as home}
            <div class="home-card">
              <div class="home-image">
                <img src={home.images[0]} alt={home.address} />
                <div class="home-status">{home.status}</div>
              </div>
              <div class="home-content">
                <div class="home-price">{formatPrice(home.price)}</div>
                <div class="home-address">{home.address}</div>
                <div class="home-details">
                  <span>{home.bedrooms} bed</span>
                  <span>{home.bathrooms} bath</span>
                  <span>{home.squareFeet.toLocaleString()} sq ft</span>
                </div>
                <div class="home-features">
                  {#each home.features.slice(0, 3) as feature}
                    <span class="feature-tag">{feature}</span>
                  {/each}
                </div>
                <div class="home-description">{home.description}</div>
                <a href="/{home.id}" class="view-details-btn">View Details</a>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <div class="no-results">
          <h3>No homes match your current filters</h3>
          <p>Try adjusting your search criteria to see more results.</p>
        </div>
      {/if}
    </div>
  </section>
</main>

<style>
  .homes-page {
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

  .filters-section {
    background: #f8f9fa;
    padding: 2rem 0;
    border-bottom: 1px solid #dee2e6;
  }

  .filters-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 1rem;
  }

  .filter-group h3 {
    margin-bottom: 1rem;
    color: #333;
    font-size: 1.1rem;
  }

  .price-range {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .price-range input[type="range"] {
    flex: 1;
  }

  .filter-options {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    background: white;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .filter-btn:hover {
    border-color: #667eea;
  }

  .filter-btn.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
  }

  .filter-group select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .results-count {
    text-align: center;
    color: #666;
    font-weight: 500;
  }

  .homes-grid-section {
    padding: 3rem 0;
  }

  .homes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .home-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .home-card:hover {
    transform: translateY(-5px);
  }

  .home-image {
    position: relative;
    height: 250px;
    overflow: hidden;
  }

  .home-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .home-status {
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

  .home-content {
    padding: 1.5rem;
  }

  .home-price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 0.5rem;
  }

  .home-address {
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 1rem;
  }

  .home-details {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    color: #666;
  }

  .home-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .feature-tag {
    background: #f8f9fa;
    color: #667eea;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.8rem;
  }

  .home-description {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .view-details-btn {
    display: inline-block;
    background: #667eea;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.3s ease;
  }

  .view-details-btn:hover {
    background: #5a67d8;
  }

  .no-results {
    text-align: center;
    padding: 3rem;
    color: #666;
  }

  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2rem;
    }
    
    .filters-container {
      grid-template-columns: 1fr;
    }
    
    .homes-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
