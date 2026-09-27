import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { AGENT, COMMUNITY } from '~/lib/community/config';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/homes', label: 'Homes' },
  { href: '/community', label: 'Community' },
  { href: '/amenities', label: 'Nearby Amenities' },
  { href: '/contact', label: 'Contact' },
];

export const SiteHeader = component$(() => {
  return (
    <header class="bg-heritage-dark text-white shadow-md">
      <div class="container-max py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Link href="/" class="text-xl font-bold hover:text-heritage-secondary transition-colors">
          {COMMUNITY.name}
        </Link>
        <nav aria-label="Main navigation">
          <ul class="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  class="hover:text-heritage-secondary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-heritage-secondary rounded px-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={AGENT.telephoneHref}
          class="text-sm font-semibold whitespace-nowrap hover:text-heritage-secondary"
        >
          {AGENT.telephone}
        </a>
      </div>
    </header>
  );
});

export const SiteFooter = component$(() => {
  return (
    <footer class="bg-heritage-dark text-white py-12 mt-auto">
      <div class="container-max grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 class="text-lg font-semibold mb-3">{COMMUNITY.name}</h2>
          <p class="text-sm text-gray-200">
            {COMMUNITY.clubhouseAddress}
            <br />
            {COMMUNITY.areaLabel}, {COMMUNITY.city}, {COMMUNITY.region}
          </p>
        </div>
        <div>
          <h2 class="text-lg font-semibold mb-3">Explore</h2>
          <ul class="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} class="hover:text-heritage-secondary underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold mb-3">{AGENT.name}</h2>
          <p class="text-sm text-gray-200 mb-2">{AGENT.brokerage}</p>
          <p class="text-sm">
            <a href={AGENT.telephoneHref} class="hover:text-heritage-secondary">
              {AGENT.telephone}
            </a>
            <br />
            <a href={`mailto:${AGENT.email}`} class="hover:text-heritage-secondary break-all">
              {AGENT.email}
            </a>
          </p>
        </div>
      </div>
      <p class="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} {COMMUNITY.name}. All rights reserved.
      </p>
    </footer>
  );
});
