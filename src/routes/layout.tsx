import { component$, Slot } from '@builder.io/qwik';
import { SiteFooter, SiteHeader } from '~/components/layout/SiteChrome';

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col bg-heritage-light">
      <a
        href="#main-content"
        class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-heritage-primary focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" class="flex-1">
        <Slot />
      </main>
      <SiteFooter />
    </div>
  );
});
