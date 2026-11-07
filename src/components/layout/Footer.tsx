import { component$ } from '@builder.io/qwik';
import { AGENT, AREA, FOOTER_LINKS, NAV, SITE_NAME } from '~/lib/site';

export const Footer = component$(() => {
  const year = new Date().getFullYear();
  return (
    <footer class="mt-16 bg-stone-slate text-stone-sand">
      <div class="container-max grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div class="flex items-center gap-3">
            <img src="/images/logo-light.svg" alt="" width="40" height="40" class="h-10 w-10" />
            <p class="font-serif text-xl font-bold text-white">{SITE_NAME}</p>
          </div>
          <p class="mt-4 text-sm leading-6 text-stone-sand/80">
            Resale homes, prices, and floor plans in the Stonebridge village of {AREA.masterPlan},{' '}
            {AREA.city}, {AREA.state} {AREA.zip}. Listing data comes from the Las Vegas REALTORS® MLS
            through RealScout and can change without notice.
          </p>
          <p class="mt-4 text-sm">
            <a href={`tel:${AGENT.phoneTel}`} class="font-semibold text-white hover:text-stone-gold">
              {AGENT.phoneDisplay}
            </a>
          </p>
        </div>

        <nav aria-label="Footer site">
          <p class="eyebrow text-stone-gold">Explore</p>
          <ul class="mt-3 grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} class="hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer guides">
          <p class="eyebrow text-stone-gold">Guides</p>
          <ul class="mt-3 space-y-2 text-sm">
            {FOOTER_LINKS.map((n) => (
              <li key={n.href}>
                <a href={n.href} class="hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div class="border-t border-white/10">
        <div class="container-max space-y-2 py-6 text-xs leading-5 text-stone-sand/70">
          <p>
            {AGENT.name}, {AGENT.title} · Nevada License {AGENT.license} · {AGENT.brokerage}. Licensed
            since {AGENT.licensedSince}. Each office is independently owned and operated.
          </p>
          <p>
            Equal Housing Opportunity. This site follows the federal Fair Housing Act and Nevada law.
            Heritage at Stonebridge is an age-qualified 55+ community under the Housing for Older
            Persons Act; occupancy is subject to the association's recorded governing documents.
          </p>
          <p>
            Market figures are from Las Vegas REALTORS® MLS data on the dates stated on each page and
            are not guaranteed. Verify any figure on the live listing before you rely on it.
          </p>
          <p>
            © {year} {SITE_NAME}. Not affiliated with Stone Bridge Learning Academy or Stonebridge
            Companies.
          </p>
        </div>
      </div>
    </footer>
  );
});
