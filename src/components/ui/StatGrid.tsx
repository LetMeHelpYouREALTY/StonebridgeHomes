import { component$ } from '@builder.io/qwik';

export type Stat = { value: string; label: string };

export const StatGrid = component$<{ stats: Stat[] }>(({ stats }) => {
  return (
    <dl class="grid grid-cols-2 gap-px border border-stone-dune bg-stone-dune md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} class="bg-white p-7 md:p-8">
          <div class="rule-gold mb-5" />
          <dd class="stat">{s.value}</dd>
          <dt class="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-mist">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
});
