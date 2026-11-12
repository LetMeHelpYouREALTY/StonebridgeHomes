import { component$ } from '@builder.io/qwik';
import { EXCLUSIVE_SERVICES } from '~/config/site';

type ExclusiveServicesProps = {
  heading?: string;
  intro?: string;
  limit?: number;
};

export const ExclusiveServices = component$(
  ({
    heading = 'Services exclusive to Stonebridge',
    intro = 'Built only for Heritage at Stonebridge buyers and sellers — not a generic Summerlin playbook.',
    limit,
  }: ExclusiveServicesProps) => {
    const items = limit ? EXCLUSIVE_SERVICES.slice(0, limit) : EXCLUSIVE_SERVICES;

    return (
      <section class="services-section" id="exclusive-services">
        <div class="container-max">
          <div class="section-intro">
            <p class="section-kicker">Exclusive to this gate</p>
            <h2>{heading}</h2>
            <p class="section-lede">{intro}</p>
          </div>
          <ul class="services-list">
            {items.map((service) => (
              <li key={service.slug} class="service-row">
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
                <span class="service-for">{service.forWhom}</span>
              </li>
            ))}
          </ul>
          {limit && (
            <p class="section-more">
              <a href="/services/" class="text-link">
                See all exclusive Stonebridge services →
              </a>
            </p>
          )}
        </div>
      </section>
    );
  }
);
