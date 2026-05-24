<script>
  export let props;
  
  const { contactInfo, officeHours, services, testimonials } = props;
  
  let formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'buying',
    timeframe: 'immediate'
  };
  
  let formSubmitted = false;
  
  function handleSubmit(event) {
    event.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    formSubmitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      formSubmitted = false;
      formData = {
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'buying',
        timeframe: 'immediate'
      };
    }, 3000);
  }
</script>

<svelte:head>
  <title>Contact Dr. Jan Duffy | Heritage Stonebridge Real Estate Agent</title>
  <meta name="description" content="Contact Dr. Jan Duffy for expert real estate services in Heritage at Stonebridge, Summerlin. Professional buying and selling assistance." />
</svelte:head>

<main class="contact-page">
  <!-- Header -->
  <section class="page-header">
    <div class="container">
      <h1>Contact Dr. Jan Duffy</h1>
      <p>Your trusted real estate professional in Heritage at Stonebridge</p>
    </div>
  </section>

  <!-- Contact Form & Info -->
  <section class="contact-main">
    <div class="container">
      <div class="contact-grid">
        <!-- Contact Form -->
        <div class="contact-form-section">
          <h2>Get In Touch</h2>
          {#if formSubmitted}
            <div class="success-message">
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. I'll get back to you within 24 hours.</p>
            </div>
          {:else}
            <form on:submit={handleSubmit} class="contact-form">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  bind:value={formData.name} 
                  required 
                />
              </div>
              
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  bind:value={formData.email} 
                  required 
                />
              </div>
              
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  bind:value={formData.phone} 
                />
              </div>
              
              <div class="form-group">
                <label for="interest">I'm interested in:</label>
                <select id="interest" bind:value={formData.interest}>
                  <option value="buying">Buying a Home</option>
                  <option value="selling">Selling a Home</option>
                  <option value="both">Buying & Selling</option>
                  <option value="investment">Investment Property</option>
                  <option value="market">Market Information</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="timeframe">Timeframe:</label>
                <select id="timeframe" bind:value={formData.timeframe}>
                  <option value="immediate">Immediately</option>
                  <option value="1-3months">1-3 Months</option>
                  <option value="3-6months">3-6 Months</option>
                  <option value="6-12months">6-12 Months</option>
                  <option value="exploring">Just Exploring</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  bind:value={formData.message} 
                  rows="4"
                  placeholder="Tell me about your real estate needs..."
                ></textarea>
              </div>
              
              <button type="submit" class="submit-btn">Send Message</button>
            </form>
          {/if}
        </div>

        <!-- Contact Information -->
        <div class="contact-info-section">
          <div class="agent-card">
            <div class="agent-info">
              <h3>{contactInfo.agentName}</h3>
              <p class="agent-title">{contactInfo.title}</p>
              <p class="agent-office">{contactInfo.office}</p>
              <p class="agent-license">{contactInfo.license}</p>
            </div>
            
            <div class="contact-details">
              <div class="contact-item">
                <span class="contact-icon">📞</span>
                <a href="tel:{contactInfo.phone}">{contactInfo.phone}</a>
              </div>
              <div class="contact-item">
                <span class="contact-icon">✉️</span>
                <a href="mailto:{contactInfo.email}">{contactInfo.email}</a>
              </div>
            </div>
          </div>

          <!-- Office Hours -->
          <div class="office-hours">
            <h3>Office Hours</h3>
            {#each officeHours as schedule}
              <div class="hours-item">
                <span class="day">{schedule.day}</span>
                <span class="hours">{schedule.hours}</span>
              </div>
            {/each}
          </div>

          <!-- Services -->
          <div class="services">
            <h3>Services</h3>
            <ul>
              {#each services as service}
                <li>{service}</li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="testimonials">
    <div class="container">
      <h2>What Clients Say</h2>
      <div class="testimonials-grid">
        {#each testimonials as testimonial}
          <div class="testimonial-card">
            <div class="testimonial-rating">
              {#each Array(testimonial.rating) as star}
                ⭐
              {/each}
            </div>
            <p class="testimonial-text">"{testimonial.text}"</p>
            <div class="testimonial-author">- {testimonial.name}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</main>

<style>
  .contact-page {
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

  .contact-main {
    padding: 4rem 0;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
  }

  .contact-form-section h2, .contact-info-section h3 {
    color: #333;
    margin-bottom: 2rem;
  }

  .contact-form {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #667eea;
  }

  .submit-btn {
    background: #667eea;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;
    width: 100%;
  }

  .submit-btn:hover {
    background: #5a67d8;
  }

  .success-message {
    background: #d4edda;
    color: #155724;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    border: 1px solid #c3e6cb;
  }

  .success-message h3 {
    color: #155724;
    margin-bottom: 1rem;
  }

  .agent-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }

  .agent-info h3 {
    color: #667eea;
    margin-bottom: 0.5rem;
  }

  .agent-title {
    color: #333;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .agent-office {
    color: #666;
    margin-bottom: 0.5rem;
  }

  .agent-license {
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .contact-icon {
    font-size: 1.2rem;
  }

  .contact-item a {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
  }

  .contact-item a:hover {
    text-decoration: underline;
  }

  .office-hours {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }

  .hours-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
  }

  .hours-item:last-child {
    border-bottom: none;
  }

  .day {
    font-weight: 500;
    color: #333;
  }

  .hours {
    color: #666;
  }

  .services {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .services ul {
    list-style: none;
    padding: 0;
  }

  .services li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
    color: #666;
  }

  .services li:last-child {
    border-bottom: none;
  }

  .services li:before {
    content: "✓";
    color: #667eea;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .testimonials {
    background: #f8f9fa;
    padding: 4rem 0;
  }

  .testimonials h2 {
    text-align: center;
    color: #333;
    margin-bottom: 3rem;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .testimonial-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .testimonial-rating {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .testimonial-text {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-style: italic;
  }

  .testimonial-author {
    color: #333;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2rem;
    }
    
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
