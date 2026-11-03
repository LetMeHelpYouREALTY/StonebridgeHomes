import { component$ } from '@builder.io/qwik';
import { Form, routeAction$ } from '@builder.io/qwik-city';
import { StructuredData } from '~/components/StructuredData';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import {
  CONTACT_ERROR_MESSAGE,
  type ContactFormPayload,
  getFollowUpBossApiKey,
  sendFollowUpBossEvent,
  validateContactPayload,
} from '~/lib/follow-up-boss';
import { pageHead } from '~/lib/seo';
import { AGENT, SITE_ORIGIN } from '~/lib/site';

export const useContactAction = routeAction$(async (values, event) => {
  const payload = values as ContactFormPayload;
  const fallbackSourceUrl = event.request.headers.get('referer') ?? `${event.url.origin}/contact`;
  const validation = validateContactPayload(payload, fallbackSourceUrl);

  if (!validation.ok) {
    return event.fail(validation.status, { success: false, message: validation.error });
  }

  const apiKey = getFollowUpBossApiKey(event.env);
  const result = await sendFollowUpBossEvent(validation.data, { apiKey });

  if (!result.ok) {
    const message = result.status === 503 ? result.error : CONTACT_ERROR_MESSAGE;
    return event.fail(result.status, { success: false, message });
  }

  return { success: true, message: 'Got it. Dr. Duffy will reply within one business day, usually sooner.' };
});

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_ORIGIN}/contact#page`,
  url: `${SITE_ORIGIN}/contact`,
  mainEntity: { '@id': `${SITE_ORIGIN}/#agent` },
};

const inputClass =
  'w-full rounded-md border border-stone-dune bg-white px-3 py-2 text-base focus:border-stone-copper focus:outline-none focus:ring-2 focus:ring-stone-copper/40';

export default component$(() => {
  const contactAction = useContactAction();

  return (
    <>
      <StructuredData data={contactSchema} />
      <section class="bg-stone-slate py-16 text-white">
        <div class="container-max">
          <p class="eyebrow text-stone-gold">Stonebridge · Summerlin West</p>
          <h1 class="mt-3 font-serif text-4xl font-bold text-white md:text-5xl">Talk with Dr. Jan Duffy</h1>
          <p class="mt-4 max-w-2xl text-lg text-stone-sand">
            One question or a full showing list. Call, text, book a time, or send the form. Every message goes
            straight to Dr. Duffy, not a call center.
          </p>
        </div>
      </section>
      <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />

      <section class="section pt-6">
        <div class="container-max grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div class="space-y-6">
            <div class="card p-6">
              <h2 class="text-2xl font-bold">{AGENT.name}</h2>
              <p class="mt-1 text-sm text-stone-mist">
                {AGENT.title} · {AGENT.brokerage} · NV License {AGENT.license}
              </p>
              <ul class="mt-5 space-y-3 text-base">
                <li>
                  <a href={`tel:${AGENT.phoneTel}`} class="font-semibold text-stone-rock">
                    Call or text {AGENT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={AGENT.calendly} rel="noopener" class="font-semibold text-stone-rock">
                    Book a showing time on the calendar
                  </a>
                </li>
                <li>
                  <a href={AGENT.realScoutPortal} rel="noopener" class="font-semibold text-stone-rock">
                    Search every Las Vegas listing
                  </a>
                </li>
              </ul>
            </div>
            <div class="card p-6">
              <h2 class="text-xl font-bold">Hours</h2>
              <dl class="mt-3 space-y-2 text-base">
                <div class="flex justify-between">
                  <dt>Monday to Friday</dt>
                  <dd>9:00 AM to 6:00 PM</dd>
                </div>
                <div class="flex justify-between">
                  <dt>Saturday</dt>
                  <dd>10:00 AM to 4:00 PM</dd>
                </div>
                <div class="flex justify-between">
                  <dt>Sunday</dt>
                  <dd>Showings by appointment</dd>
                </div>
              </dl>
              <p class="mt-3 text-sm text-stone-mist">Texts outside these hours are answered the next morning.</p>
            </div>
            <div class="card p-6">
              <h2 class="text-xl font-bold">Service area</h2>
              <p class="mt-2 text-base leading-7 text-stone-ink/85">
                Stonebridge and all of Summerlin West (89138), plus the rest of Summerlin, Las Vegas, and Henderson for
                buyers comparing villages.
              </p>
            </div>
          </div>

          <div class="card p-6 md:p-8">
            <h2 class="text-2xl font-bold">Send a message</h2>
            <p class="mt-1 text-sm text-stone-mist">Name plus a phone or email is enough. The rest is optional.</p>

            {contactAction.value?.success && (
              <output class="mt-4 block rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800">
                {contactAction.value.message}
              </output>
            )}
            {contactAction.value?.failed && (
              <div class="mt-4 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-red-800" role="alert">
                {contactAction.value.message}
              </div>
            )}

            <Form action={contactAction} class="mt-6 space-y-4">
              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <label for="firstName" class="mb-1 block text-sm font-medium">
                    First name
                  </label>
                  <input type="text" id="firstName" name="firstName" autoComplete="given-name" class={inputClass} required />
                </div>
                <div>
                  <label for="lastName" class="mb-1 block text-sm font-medium">
                    Last name
                  </label>
                  <input type="text" id="lastName" name="lastName" autoComplete="family-name" class={inputClass} />
                </div>
              </div>
              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <label for="email" class="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <input type="email" id="email" name="email" autoComplete="email" class={inputClass} />
                </div>
                <div>
                  <label for="phone" class="mb-1 block text-sm font-medium">
                    Phone
                  </label>
                  <input type="tel" id="phone" name="phone" autoComplete="tel" class={inputClass} />
                </div>
              </div>
              <div>
                <label for="interest" class="mb-1 block text-sm font-medium">
                  I want to
                </label>
                <select id="interest" name="interest" class={inputClass}>
                  <option value="">Choose one</option>
                  <option value="buying">Buy in Stonebridge</option>
                  <option value="selling">Sell my Stonebridge home</option>
                  <option value="heritage">Learn about Heritage at Stonebridge (55+)</option>
                  <option value="report">Get the weekly sold-price report</option>
                  <option value="other">Ask something else</option>
                </select>
              </div>
              <div>
                <label for="message" class="mb-1 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  class={inputClass}
                  placeholder="Address, floor plan, budget, or timing. Anything that helps."
                />
              </div>
              <input type="hidden" name="sourceUrl" value={`${SITE_ORIGIN}/contact`} />
              <button type="submit" class="btn-primary w-full" disabled={contactAction.isRunning}>
                {contactAction.isRunning ? 'Sending…' : 'Send to Dr. Duffy'}
              </button>
              <p class="text-xs leading-5 text-stone-mist">
                By sending, you agree to be contacted by Dr. Jan Duffy about your request. No automated drip campaigns
                unless you ask for the weekly report.
              </p>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
});

export const head = pageHead({
  title: `Contact Dr. Jan Duffy | Stonebridge Summerlin REALTOR® | ${AGENT.phoneDisplay}`,
  description: `Call or text ${AGENT.phoneDisplay}, book a showing, or send a message to Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, for homes in Stonebridge, Summerlin West 89138, including 55+ Heritage at Stonebridge.`,
  path: '/contact',
});
