import { component$ } from '@builder.io/qwik';
import { AGENT, calendlyUrl } from '~/lib/site';

type Props = { heading: string; body: string; primaryLabel?: string; primaryHref?: string; campaign?: string };

export const CtaBand = component$<Props>(
  ({ heading, body, primaryLabel = 'Book a showing', primaryHref, campaign = 'cta' }) => {
    const href = primaryHref ?? calendlyUrl(campaign);
    return (
      <section class="bg-stone-slate text-white">
        <div class="container-max flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 class="font-serif text-3xl font-bold text-white">{heading}</h2>
            <p class="mt-3 max-w-2xl text-lg text-stone-sand/90">{body}</p>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href={href} class="btn-primary" rel={href.startsWith('http') ? 'noopener' : undefined}>
              {primaryLabel}
            </a>
            <a href={`tel:${AGENT.phoneTel}`} class="btn-outline">
              Call or text {AGENT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    );
  },
);
