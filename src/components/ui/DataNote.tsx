import { component$ } from '@builder.io/qwik';

/** Inline provenance line under any statistic block. */
export const DataNote = component$<{ asOf: string; source: string }>(({ asOf, source }) => {
  return (
    <p class="mt-4 text-sm text-stone-mist">
      Source: {source}. Figures as of {asOf}. Listings change daily; confirm any number on the live MLS
      listing before you write an offer.
    </p>
  );
});
