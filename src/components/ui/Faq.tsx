import { component$ } from '@builder.io/qwik';
import { StructuredData } from '~/components/StructuredData';
import { faqSchema } from '~/lib/seo';

type Props = { heading?: string; faqs: { q: string; a: string }[]; id?: string };

/** Accessible accordion plus FAQPage schema for answer engines. */
export const Faq = component$<Props>(({ heading = 'Questions people ask', faqs, id = 'faq' }) => {
  return (
    <section class="section" id={id} aria-labelledby={`${id}-heading`}>
      <StructuredData data={faqSchema(faqs)} />
      <div class="container-max">
        <h2 id={`${id}-heading`} class="text-3xl font-bold md:text-4xl">
          {heading}
        </h2>
        <div class="mt-8 divide-y divide-stone-dune rounded-xl border border-stone-dune bg-white">
          {faqs.map((f) => (
            <details key={f.q} class="group px-5 py-4">
              <summary class="flex items-center justify-between gap-4 text-lg font-semibold text-stone-slate">
                <span>{f.q}</span>
                <span aria-hidden="true" class="text-stone-rock transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p class="mt-3 text-base leading-7 text-stone-ink/90">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
});
