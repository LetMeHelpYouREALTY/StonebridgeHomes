import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { AGENT, NAV, SITE_NAME } from '~/lib/site';

export const Header = component$(() => {
  const loc = useLocation();
  const current = loc.url.pathname.replace(/\/$/, '') || '/';

  return (
    <header class="sticky top-0 z-40 border-b border-stone-dune/70 bg-stone-cream/95 backdrop-blur">
      <div class="container-max flex items-center justify-between gap-6 py-4">
        <a href="/" class="flex items-center gap-3" aria-label={`${SITE_NAME} home`}>
          <img src="/images/logo.svg" alt="" width="40" height="40" class="h-10 w-10" />
          <span class="font-serif text-lg font-semibold leading-tight tracking-wide text-stone-slate sm:text-xl">
            Stonebridge <span class="text-stone-rock">Las Vegas</span> Homes
          </span>
        </a>

        <nav aria-label="Primary" class="hidden xl:block">
          <ul class="flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-slate">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={current === item.href ? 'page' : undefined}
                  class={`border-b pb-1 transition-colors hover:text-stone-rock ${
                    current === item.href ? 'border-stone-rock text-stone-rock' : 'border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div class="flex items-center gap-2">
          <a href={`tel:${AGENT.phoneTel}`} class="btn-light hidden px-5 py-2.5 sm:inline-flex">
            {AGENT.phoneDisplay}
          </a>
          <details class="relative xl:hidden">
            <summary class="btn-light list-none px-4 py-2.5" aria-label="Open menu">
              Menu
            </summary>
            <nav aria-label="Mobile" class="absolute right-0 mt-3 w-72 border border-stone-dune bg-white p-2 shadow-card">
              <ul class="flex flex-col text-sm font-medium uppercase tracking-[0.14em]">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} class="block px-3 py-2.5 hover:bg-stone-sand hover:text-stone-rock">
                      {item.label}
                    </a>
                  </li>
                ))}
                <li class="mt-1 border-t border-stone-dune pt-2">
                  <a href={`tel:${AGENT.phoneTel}`} class="block px-3 py-2.5 font-semibold text-stone-rock">
                    Call {AGENT.phoneDisplay}
                  </a>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
});
