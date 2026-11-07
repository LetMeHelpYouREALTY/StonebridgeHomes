import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { Footer } from '~/components/layout/Footer';
import { Header } from '~/components/layout/Header';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Pages are static per build; let the CDN serve them and revalidate in the background.
  cacheControl({ staleWhileRevalidate: 60 * 60 * 24 * 7, maxAge: 60 * 5 });
};

export default component$(() => {
  return (
    <>
      <a href="#main" class="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
