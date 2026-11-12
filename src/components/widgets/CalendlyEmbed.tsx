import { component$ } from '@builder.io/qwik';
import { SITE } from '~/config/site';

export type CalendlyVariant = 'showing' | 'strategy' | 'listing';

type CalendlyEmbedProps = {
  variant?: CalendlyVariant;
  heading?: string;
  intro?: string;
  utmMedium?: string;
  utmCampaign?: string;
  compact?: boolean;
};

function calendlyBase(variant: CalendlyVariant): string {
  switch (variant) {
    case 'showing':
      return SITE.calendlyShowing;
    case 'listing':
      return SITE.calendlyListing;
    case 'strategy':
      return SITE.calendlyStrategy;
    default: {
      const _exhaustive: never = variant;
      return _exhaustive;
    }
  }
}

function calendlyUrl(
  variant: CalendlyVariant,
  utmMedium: string,
  utmCampaign: string
): string {
  const params = new URLSearchParams({
    hide_gdpr_banner: '1',
    utm_source: 'www.heritagestonebridge.com',
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
  });

  return `${calendlyBase(variant)}?${params.toString()}`;
}

export const CalendlyEmbed = component$(
  ({
    variant = 'strategy',
    heading = 'Book a time with Dr. Jan Duffy',
    intro = 'Pick a slot for Stonebridge tours, market strategy, or a listing consult.',
    utmMedium = 'inline',
    utmCampaign = 'site',
    compact = false,
  }: CalendlyEmbedProps) => {
    const url = calendlyUrl(variant, utmMedium, utmCampaign);
    const height = compact ? 650 : 720;

    return (
      <section
        class={
          compact
            ? 'widget-section calendly-section calendly-compact'
            : 'widget-section calendly-section'
        }
        id={`schedule-${variant}`}
      >
        <div class="container-max">
          <div class="section-intro">
            <p class="section-kicker">Schedule</p>
            <h2>{heading}</h2>
            <p class="section-lede">{intro}</p>
          </div>
          <div class="calendly-frame">
            <iframe
              title={`${heading} — Calendly`}
              src={url}
              loading="lazy"
              style={{ width: '100%', height: `${height}px`, border: '0' }}
            />
          </div>
          <p class="calendly-fallback">
            Prefer a link?{' '}
            <a
              href={url}
              class="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Calendly
            </a>
          </p>
        </div>
      </section>
    );
  }
);
