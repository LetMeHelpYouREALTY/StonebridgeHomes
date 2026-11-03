import { component$ } from '@builder.io/qwik';
import { AGENT } from '~/lib/site';

type ListingsProps = {
  heading?: string;
  priceMin?: string;
  priceMax?: string;
  propertyTypes?: string;
  sortOrder?: 'NEWEST' | 'PRICE_LOW' | 'PRICE_HIGH';
};

/**
 * Live MLS listings through RealScout's web component. The script is loaded
 * once in the document head. Attributes mirror RealScout's documented API.
 */
export const RealScoutListings = component$<ListingsProps>(
  ({ heading = 'Live MLS listings', priceMin = '450000', priceMax = '3500000', propertyTypes = 'SFR', sortOrder = 'NEWEST' }) => {
    return (
      <section class="section bg-white" aria-labelledby="listings-heading">
        <div class="container-max">
          <p class="eyebrow">Updated from the MLS</p>
          <h2 id="listings-heading" class="mt-2 text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
          <p class="mt-3 max-w-2xl text-lg text-stone-ink/80">
            Prices and status come straight from the listing feed. Tap a home to see photos, then book a
            showing on the next screen.
          </p>
          <div class="mt-8 rounded-xl border border-stone-dune p-2 md:p-4">
            <realscout-office-listings
              agent-encoded-id={AGENT.realScoutAgentEncodedId}
              sort-order={sortOrder}
              listing-status="For Sale"
              property-types={propertyTypes}
              price-min={priceMin}
              price-max={priceMax}
            />
          </div>
          <p class="mt-4 text-sm text-stone-mist">
            Not seeing a home you know is listed?{' '}
            <a href={AGENT.realScoutPortal} rel="noopener" class="font-semibold text-stone-rock">
              Search every Las Vegas listing
            </a>{' '}
            or call {AGENT.phoneDisplay}.
          </p>
        </div>
      </section>
    );
  },
);

export const RealScoutHomeValue = component$<{ heading?: string }>(
  ({ heading = 'What is your Stonebridge home worth?' }) => {
    return (
      <section class="section" aria-labelledby="home-value-heading">
        <div class="container-max grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p class="eyebrow">Sellers</p>
            <h2 id="home-value-heading" class="mt-2 text-3xl font-bold md:text-4xl">
              {heading}
            </h2>
            <p class="mt-4 text-lg leading-8 text-stone-ink/85">
              The instant number below is a starting point from the MLS feed. Dr. Jan Duffy then prices
              from closed sales of your floor plan inside Stonebridge, not a Las Vegas average.
            </p>
          </div>
          <div class="card p-4 md:p-6">
            <realscout-home-value agent-encoded-id={AGENT.realScoutAgentEncodedId} include-name include-phone />
          </div>
        </div>
      </section>
    );
  },
);
