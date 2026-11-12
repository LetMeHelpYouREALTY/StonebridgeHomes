import { component$, useSignal, $ } from '@builder.io/qwik';
import { SITE } from '~/config/site';

const NAV = [
  { href: '/services', label: 'Exclusive Services' },
  { href: '/homes', label: 'Homes' },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SiteHeader = component$(() => {
  const open = useSignal(false);
  const close = $(() => {
    open.value = false;
  });

  return (
    <header class="site-header">
      <div class="container-max header-inner">
        <a href="/" class="brand-mark" onClick$={close}>
          <span class="brand-name">{SITE.shortBrand}</span>
          <span class="brand-byline">Homes by {SITE.agent}</span>
        </a>

        <nav class="desktop-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} class="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div class="header-actions">
          <a href={`tel:${SITE.phoneTel}`} class="header-phone">
            {SITE.phoneDisplay}
          </a>
          <a href="/contact" class="btn-primary header-cta">
            Book a Tour
          </a>
          <button
            type="button"
            class="menu-toggle"
            aria-expanded={open.value}
            aria-controls="mobile-nav"
            aria-label={open.value ? 'Close menu' : 'Open menu'}
            onClick$={() => {
              open.value = !open.value;
            }}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open.value && (
        <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick$={close}>
              {item.label}
            </a>
          ))}
          <a href={`tel:${SITE.phoneTel}`} onClick$={close}>
            Call {SITE.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
});
