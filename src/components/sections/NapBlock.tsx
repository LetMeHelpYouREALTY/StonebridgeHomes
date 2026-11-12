import { component$ } from '@builder.io/qwik';
import { SITE } from '~/config/site';

type NapBlockProps = {
  compact?: boolean;
};

export const NapBlock = component$(({ compact = false }: NapBlockProps) => {
  return (
    <section class={compact ? 'nap-block nap-compact' : 'nap-block'} aria-label="Business contact">
      <div class="container-max">
        <h2 class="section-kicker">{SITE.brand}</h2>
        <p class="nap-address">
          {SITE.streetAddress}, {SITE.addressLocality}, {SITE.addressRegion}{' '}
          {SITE.postalCode}
        </p>
        <p class="nap-hours">{SITE.hoursLabel}</p>
        <div class="nap-actions">
          <a href={`tel:${SITE.phoneTel}`} class="btn-primary">
            Call {SITE.phoneDisplay}
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
        {!compact && (
          <div class="map-frame">
            <iframe
              title={`Map to ${SITE.fullAddress}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.fullAddress)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullscreen
            />
          </div>
        )}
      </div>
    </section>
  );
});
