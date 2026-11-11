import { component$ } from '@builder.io/qwik';
import { StructuredData } from '~/components/StructuredData';
import { breadcrumbSchema } from '~/lib/seo';

type Crumb = { name: string; path: string };

export const Breadcrumbs = component$<{ items: Crumb[] }>(({ items }) => {
  const all: Crumb[] = [{ name: 'Home', path: '/' }, ...items];
  return (
    <nav aria-label="Breadcrumb" class="container-max py-4 text-sm text-stone-mist">
      <StructuredData data={breadcrumbSchema(all)} />
      <ol class="flex flex-wrap items-center gap-2">
        {all.map((c, i) => (
          <li key={c.path} class="flex items-center gap-2">
            {i < all.length - 1 ? (
              <a href={c.path} class="hover:text-stone-rock">
                {c.name}
              </a>
            ) : (
              <span aria-current="page" class="text-stone-slate">
                {c.name}
              </span>
            )}
            {i < all.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
});
