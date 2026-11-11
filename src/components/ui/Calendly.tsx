import { component$ } from '@builder.io/qwik';
import { calendlyUrl } from '~/lib/site';

/**
 * Inline Calendly booking widget. The script is loaded once in the document
 * head; Calendly upgrades every `.calendly-inline-widget` it finds on load.
 */
export const CalendlyInline = component$<{ campaign: string; heading?: string }>(
  ({ campaign, heading = 'Pick a time with Dr. Jan Duffy' }) => {
    const url = calendlyUrl(campaign);
    return (
      <section class="section bg-white" aria-labelledby="calendly-heading">
        <div class="container-max">
          <p class="eyebrow">Showings and calls</p>
          <h2 id="calendly-heading" class="mt-2 text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
          <p class="mt-3 max-w-2xl text-lg text-stone-ink/80">
            Choose a showing or a 15-minute call. You get a confirmation by email and text right away.
          </p>
          <div class="mt-8 overflow-hidden rounded-xl border border-stone-dune">
            <div class="calendly-inline-widget" data-url={url} style="min-width:320px;height:760px" />
          </div>
          <noscript>
            <a href={url} rel="noopener" class="btn-primary mt-4">
              Open the booking calendar
            </a>
          </noscript>
        </div>
      </section>
    );
  },
);
