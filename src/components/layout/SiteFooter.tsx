import { component$ } from '@builder.io/qwik';
import { SITE } from '~/config/site';

export const SiteFooter = component$(() => {
  return (
    <footer class="site-footer">
      <div class="container-max footer-grid">
        <div>
          <p class="footer-brand">{SITE.brand}</p>
          <p class="footer-copy">
            Exclusive representation for Heritage at Stonebridge — 421 guard-gated
            55+ homes in Summerlin West {SITE.zip}.
          </p>
        </div>

        <div class="footer-nap">
          <p>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p>
            {SITE.streetAddress}
            <br />
            {SITE.addressLocality}, {SITE.addressRegion} {SITE.postalCode}
          </p>
          <p>{SITE.hoursLabel}</p>
        </div>

        <div class="footer-actions">
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

      <div class="container-max footer-legal">
        <p>
          {SITE.brokerage} · License {SITE.license} · {SITE.agent}
        </p>
        <p>
          Listing data comes from the MLS through RealScout and can change without
          notice. Equal Housing Opportunity.
        </p>
      </div>
    </footer>
  );
});
