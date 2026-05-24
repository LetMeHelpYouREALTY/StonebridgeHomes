import { component$ } from '@builder.io/qwik';
import { Form, routeAction$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';

export const useContactAction = routeAction$(async (values) => {
  // This would typically send an email or save to a database
  console.log('Contact form submitted:', values);
  return {
    success: true,
    message: 'Thank you for your message! We will get back to you soon.'
  };
});

export default component$(() => {
  const contactAction = useContactAction();

  return (
    <div class="min-h-screen bg-heritage-light">
      <div class="hero-section">
        <div class="container-max text-center">
          <h1 class="text-4xl font-bold mb-4">Contact Dr. Jan Duffy</h1>
          <p class="text-xl">Your Heritage at Stonebridge real estate expert</p>
        </div>
      </div>

      <section class="section-padding">
        <div class="container-max">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 class="text-3xl font-bold mb-6 text-heritage-primary">Get In Touch</h2>
              <div class="space-y-6">
                <div class="heritage-card p-6">
                  <h3 class="text-xl font-semibold mb-4">Dr. Jan Duffy</h3>
                  <div class="space-y-3">
                    <div class="flex items-center">
                      <span class="text-2xl mr-3">📞</span>
                      <a href="tel:702-222-1964" class="text-heritage-primary hover:text-heritage-secondary">
                        (702) 222-1964
                      </a>
                    </div>
                    <div class="flex items-center">
                      <span class="text-2xl mr-3">📧</span>
                      <a href="mailto:jan.duffy@heritagestonebridge.com" class="text-heritage-primary hover:text-heritage-secondary">
                        jan.duffy@heritagestonebridge.com
                      </a>
                    </div>
                    <div class="flex items-start">
                      <span class="text-2xl mr-3">📍</span>
                      <div>
                        <div>Heritage at Stonebridge</div>
                        <div>Summerlin, Las Vegas, NV 89144</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="heritage-card p-6">
                  <h3 class="text-xl font-semibold mb-4">Office Hours</h3>
                  <div class="space-y-2">
                    <div class="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Sunday:</span>
                      <span>By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 class="text-3xl font-bold mb-6 text-heritage-primary">Send a Message</h2>
              <div class="heritage-card p-6">
                {contactAction.value?.success && (
                  <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    {contactAction.value.message}
                  </div>
                )}
                
                <Form action={contactAction} class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-primary"
                        required
                      />
                    </div>
                    <div>
                      <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-primary"
                      required
                    />
                  </div>

                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-primary"
                    />
                  </div>

                  <div>
                    <label for="interest" class="block text-sm font-medium text-gray-700 mb-1">
                      I'm interested in:
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-primary"
                    >
                      <option value="">Select an option</option>
                      <option value="buying">Buying a Home</option>
                      <option value="selling">Selling a Home</option>
                      <option value="community">Learning about the Community</option>
                      <option value="investment">Real Estate Investment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-primary"
                      placeholder="Tell us about your real estate needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    class="w-full heritage-button"
                  >
                    Send Message
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Contact Dr. Jan Duffy - Heritage at Stonebridge Real Estate Expert',
  meta: [
    {
      name: 'description',
      content: 'Contact Dr. Jan Duffy for luxury real estate in Heritage at Stonebridge, Summerlin. Call (702) 222-1964 or email for personalized service.',
    },
  ],
};