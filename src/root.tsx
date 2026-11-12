import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import globalStyles from './styles/global.css?inline';

const realScoutStyles = `
realscout-office-listings {
  --rs-listing-image-aspect-ratio: 4/3;
  display: block;
  width: 100%;
  min-height: 320px;
}
realscout-office-listings::part(listing-card) {
  font-family: Outfit, system-ui, sans-serif;
}
`;

export default component$(() => {
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://www.realscout.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <style dangerouslySetInnerHTML={realScoutStyles} />
        <RouterHead />
      </head>
      <body lang="en">
        <SiteHeader />
        <RouterOutlet />
        <SiteFooter />
        <script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          async
        />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
