import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { AGENT, NAV, SITE_NAME } from '~/lib/site';

export const Header = component$(() => {
  const loc = useLocation();
  const current = loc.url.pathname.replace(/\/$/, '') || '/';

  return (
    <header class="sticky top-0 z-40 border-b border-stone-dune bg-stone-cream/95 backdrop-blur">
      <div class="container-max flex items-center justify-between gap-4 py-3">
        <a href="/" class="flex items-center gap-3" aria-label={`${SITE_NAME} home`}>
          <img src="/images/logo.svg" alt="" width="40" height="40" class="h-10 w-10" />
          <span class="font-serif text-lg font-bold leading-tight text-stone-slate sm:text-xl">
            Stonebridge <span class="text-stone-rock">Las Vegas</span> Homes
          </span>
        </a>

        <nav aria-label="Primary" class="hidden lg:block">
          <ul class="flex items-center gap-5 text-sm font-medium text-stone-slate">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={current === item.href ? 'page' : undefined}
                  class={`border-b-2 pb-1 transition-colors hover:text-stone-rock ${
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
          <a href={`tel:${AGENT.phoneTel}`} class="btn-primary hidden px-4 py-2 text-sm sm:inline-flex">
            Call {AGENT.phoneDisplay}
          </a>
          <details class="relative lg:hidden">
            <summary class="btn-light list-none px-3 py-2 text-sm" aria-label="Open menu">
              Menu
            </summary>
            <nav aria-label="Mobile" class="absolute right-0 mt-2 w-64 rounded-xl border border-stone-dune bg-white p-2 shadow-card">
              <ul class="flex flex-col text-base">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} class="block rounded-md px-3 py-2 hover:bg-stone-sand">
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`tel:${AGENT.phoneTel}`} class="block rounded-md px-3 py-2 font-semibold text-stone-rock">
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
