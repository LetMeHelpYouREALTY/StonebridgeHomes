import { component$ } from '@builder.io/qwik';

export type Stat = { value: string; label: string };

export const StatGrid = component$<{ stats: Stat[] }>(({ stats }) => {
  return (
    <dl class="grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} class="card p-6">
          <dd class="stat">{s.value}</dd>
          <dt class="mt-2 text-sm font-medium uppercase tracking-wide text-stone-mist">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
});
