import { component$ } from '@builder.io/qwik';
import { Form, routeAction$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import { StructuredData } from '../../components/StructuredData';
import { NapBlock } from '../../components/sections/NapBlock';
import { SITE, localBusinessSchema, siteUrl } from '../../config/site';
import {
  CONTACT_ERROR_MESSAGE,
  getFollowUpBossApiKey,
  sendFollowUpBossEvent,
  validateContactPayload,
  type ContactFormPayload,
} from '~/lib/follow-up-boss';

export const useContactAction = routeAction$(async (values, event) => {
  const payload = values as ContactFormPayload;
  const fallbackSourceUrl =
    event.request.headers.get('referer') ?? `${event.url.origin}/contact`;
  const validation = validateContactPayload(payload, fallbackSourceUrl);

  if (!validation.ok) {
    return event.fail(validation.status, {
      success: false,
      message: validation.error,
    });
  }

  const apiKey = getFollowUpBossApiKey(event.env);
  const result = await sendFollowUpBossEvent(validation.data, { apiKey });

  if (!result.ok) {
    const message =
      result.status === 503 ? result.error : CONTACT_ERROR_MESSAGE;
    return event.fail(result.status, {
      success: false,
      message,
    });
  }

  return {
    success: true,
    message: 'Thank you. Dr. Duffy will reply with a Stonebridge market snapshot soon.',
  };
});

export default component$(() => {
  const contactAction = useContactAction();

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('/') },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: siteUrl('/contact/'),
      },
    ],
  };

  return (
    <div>
      <StructuredData data={localBusinessSchema()} />
      <StructuredData data={breadcrumb} />

      <section class="page-hero">
        <div class="container-max">
          <h1>Contact {SITE.agent}</h1>
          <p>
            Exclusive representation for Heritage at Stonebridge. {SITE.hoursLabel}.
            Call, text, or send a message for tours, listings, and seller pricing.
          </p>
        </div>
      </section>

      <section class="content-panel">
        <div class="container-max contact-grid">
          <div class="space-y-6">
            <div class="contact-card">
              <h2 style={{ marginTop: 0, fontSize: '1.75rem' }}>{SITE.brand}</h2>
              <p>
                <a href={`tel:${SITE.phoneTel}`} class="text-link">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} class="text-link">
                  {SITE.email}
                </a>
              </p>
              <p>
                {SITE.streetAddress}
                <br />
                {SITE.addressLocality}, {SITE.addressRegion} {SITE.postalCode}
              </p>
              <p>{SITE.hoursLabel}</p>
              <div class="nap-actions" style={{ marginBottom: 0 }}>
                <a href={`tel:${SITE.phoneTel}`} class="btn-primary">
                  Call
                </a>
                <a
                  href={SITE.mapsDirectionsUrl}
                  class="btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions
                </a>
                <a
                  href={SITE.googleReviewsUrl}
                  class="btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Google Reviews
                </a>
              </div>
            </div>
          </div>

          <div class="form-shell">
            <h2 style={{ fontSize: '1.75rem' }}>Send a message</h2>

            {contactAction.value?.success && (
              <div class="alert-ok">{contactAction.value.message}</div>
            )}

            {contactAction.value?.failed && (
              <div class="alert-err" role="alert">
                {contactAction.value.message}
              </div>
            )}

            <Form action={contactAction}>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
                <div>
                  <label for="firstName">First name</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div>
                  <label for="lastName">Last name</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>

              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />

              <label for="interest">I am interested in</label>
              <select id="interest" name="interest">
                <option value="">Select an option</option>
                <option value="buying">Buying in Heritage at Stonebridge</option>
                <option value="selling">Selling my Stonebridge home</option>
                <option value="floor-plans">Floor-plan advisor</option>
                <option value="tour">Gate & clubhouse tour</option>
                <option value="other">Other</option>
              </select>

              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell Dr. Duffy what you need in Stonebridge…"
              />

              <button
                type="submit"
                class="btn-primary"
                style={{ width: '100%' }}
                disabled={contactAction.isRunning}
              >
                {contactAction.isRunning ? 'Sending…' : 'Send message'}
              </button>
            </Form>
          </div>
        </div>
      </section>

      <NapBlock />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Contact Dr. Jan Duffy | Heritage at Stonebridge Summerlin West',
  meta: [
    {
      name: 'description',
      content:
        'Contact Dr. Jan Duffy for exclusive Heritage at Stonebridge services. Call (702) 789-6561 · 930 Silverfir Court, Suite B, Las Vegas, NV 89138 · Open daily 8:00 AM–8:00 PM.',
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:title',
      content: 'Contact Dr. Jan Duffy | Heritage at Stonebridge',
    },
    {
      property: 'og:description',
      content:
        'Call (702) 789-6561 or visit 930 Silverfir Court, Suite B, Las Vegas, NV 89138.',
    },
    { property: 'og:image', content: SITE.ogImage },
    { property: 'og:url', content: siteUrl('/contact/') },
    { property: 'og:site_name', content: SITE.brand },
  ],
};
