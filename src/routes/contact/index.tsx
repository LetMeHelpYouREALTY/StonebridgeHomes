import { component$ } from '@builder.io/qwik';
import { StructuredData } from '~/components/StructuredData';
import { Breadcrumbs } from '~/components/ui/Breadcrumbs';
import { CalendlyInline } from '~/components/ui/Calendly';
import { pageHead } from '~/lib/seo';
import { AGENT, SITE_ORIGIN, calendlyUrl } from '~/lib/site';

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_ORIGIN}/contact#page`,
  url: `${SITE_ORIGIN}/contact`,
  mainEntity: { '@id': `${SITE_ORIGIN}/#agent` },
};

export default component$(() => {
  return (
    <>
      <StructuredData data={contactSchema} />
      <section class="bg-stone-slate py-16 text-white">
        <div class="container-max">
          <p class="eyebrow text-stone-gold">Stonebridge · Summerlin West</p>
          <h1 class="mt-3 font-serif text-4xl font-bold text-white md:text-5xl">Talk with Dr. Jan Duffy</h1>
          <p class="mt-4 max-w-2xl text-lg text-stone-sand">
            Book a showing or a call below, or call and text directly. Every booking lands on Dr. Duffy's own
            calendar, not a call center.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${AGENT.phoneTel}`} class="btn-primary">
              Call or text {AGENT.phoneDisplay}
            </a>
            <a href="#calendly-heading" class="btn-outline">
              Book a time
            </a>
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />

      <CalendlyInline campaign="contact" />

      <section class="section">
        <div class="container-max grid gap-6 md:grid-cols-3">
          <div class="card p-6">
            <h2 class="text-xl font-bold">{AGENT.name}</h2>
            <p class="mt-1 text-sm text-stone-mist">
              {AGENT.title} · {AGENT.brokerage} · NV License {AGENT.license}
            </p>
            <ul class="mt-4 space-y-2 text-base">
              <li>
                <a href={`tel:${AGENT.phoneTel}`} class="font-semibold text-stone-rock">
                  {AGENT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={calendlyUrl('contact-card')} rel="noopener" class="font-semibold text-stone-rock">
                  Booking calendar
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
      </section>
    </>
  );
});

export const head = pageHead({
  title: `Book a Showing with Dr. Jan Duffy | Stonebridge Summerlin REALTOR® | ${AGENT.phoneDisplay}`,
  description: `Book a Stonebridge showing or a 15-minute call on Dr. Jan Duffy's calendar, or call and text ${AGENT.phoneDisplay}. Berkshire Hathaway HomeServices Nevada Properties, Summerlin West 89138, including 55+ Heritage at Stonebridge.`,
  path: '/contact',
});
