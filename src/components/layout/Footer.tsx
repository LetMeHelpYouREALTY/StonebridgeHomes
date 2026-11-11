import { component$ } from '@builder.io/qwik';
import { AGENT, AREA, FOOTER_LINKS, NAV, SITE_NAME } from '~/lib/site';

export const Footer = component$(() => {
  const year = new Date().getFullYear();
  return (
    <footer class="mt-24 bg-stone-night text-stone-sand">
      <div class="container-max grid gap-12 py-20 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div class="flex items-center gap-3">
            <img src="/images/logo-light.svg" alt="" width="40" height="40" class="h-10 w-10" />
            <p class="font-serif text-2xl font-semibold text-white">{SITE_NAME}</p>
          </div>
          <p class="mt-5 max-w-md text-sm leading-7 text-stone-sand/75">
            Resale homes, prices, and floor plans in the Stonebridge village of {AREA.masterPlan},{' '}
            {AREA.city}, {AREA.state} {AREA.zip}. Listing data comes from the Las Vegas REALTORS® MLS
            through RealScout and can change without notice.
          </p>
          <div class="mt-8 flex items-center gap-5">
            <img
              src="/images/bhhs-seal-white.png"
              alt="Berkshire Hathaway HomeServices seal"
              width="88"
              height="88"
              loading="lazy"
              class="h-[88px] w-[88px]"
            />
            <div class="text-sm leading-6">
              <p class="font-semibold text-white">{AGENT.name}, {AGENT.title}</p>
              <p class="text-stone-sand/75">{AGENT.brokerage}</p>
              <p class="text-stone-sand/75">Nevada License {AGENT.license}</p>
              <a href={`tel:${AGENT.phoneTel}`} class="font-semibold text-stone-gold hover:text-white">
                {AGENT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <nav aria-label="Footer site">
          <p class="eyebrow text-stone-gold">Explore</p>
          <ul class="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} class="text-stone-sand/85 hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer guides">
          <p class="eyebrow text-stone-gold">Guides</p>
          <ul class="mt-5 space-y-3 text-sm">
            {FOOTER_LINKS.map((n) => (
              <li key={n.href}>
                <a href={n.href} class="text-stone-sand/85 hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div class="border-t border-white/10">
        <div class="container-max space-y-2 py-7 text-xs leading-5 text-stone-sand/60">
          <p>
            {AGENT.brokerage}. Licensed since {AGENT.licensedSince}. Each office is independently owned and operated.
            Equal Housing Opportunity. This site follows the federal Fair Housing Act and Nevada law. Heritage at
            Stonebridge is an age-qualified 55+ community under the Housing for Older Persons Act; occupancy is subject
            to the association's recorded governing documents.
          </p>
          <p>
            Market figures are from Las Vegas REALTORS® MLS data on the dates stated on each page and are not
            guaranteed. Verify any figure on the live listing before you rely on it. Photography is illustrative of the
            Summerlin West setting and does not depict specific listed properties.
          </p>
          <p>
            © {year} {SITE_NAME}. Not affiliated with Stone Bridge Learning Academy or Stonebridge Companies.
          </p>
        </div>
      </div>
    </footer>
  );
});
