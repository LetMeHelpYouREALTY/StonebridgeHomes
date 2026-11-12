import { component$ } from '@builder.io/qwik';
import { SITE } from '~/config/site';

type RealScoutListingsProps = {
  title?: string;
  intro?: string;
  priceMin?: number;
  priceMax?: number;
};

/**
 * RealScout office listings — script loads once in root; markup is static HTML
 * so the custom element hydrates without React/Qwik state.
 */
export const RealScoutListings = component$(
  ({
    title = 'Homes for sale in Stonebridge',
    intro = 'Current MLS listings through Dr. Jan Duffy. Prices and availability come from the listing feed.',
    priceMin = 400000,
    priceMax = 1500000,
  }: RealScoutListingsProps) => {
    const markup = `<realscout-office-listings agent-encoded-id="${SITE.realScoutAgentId}" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF" price-min="${priceMin}" price-max="${priceMax}"></realscout-office-listings>`;

    return (
      <section class="widget-section realscout-section" id="listings">
        <div class="container-max">
          <div class="section-intro">
            <p class="section-kicker">MLS · RealScout</p>
            <h2>{title}</h2>
            <p class="section-lede">{intro}</p>
          </div>
          <div
            class="realscout-host"
            dangerouslySetInnerHTML={markup}
          />
        </div>
      </section>
    );
  }
);
