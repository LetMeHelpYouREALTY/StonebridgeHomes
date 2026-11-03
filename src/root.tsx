import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import globalStyles from './styles/global.css?inline';

export default component$(() => {
  useStyles$(globalStyles);

  // Vercel Web Analytics inline script
  const analyticsScript = `
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  `;

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        {/* Vercel Web Analytics */}
        <script dangerouslySetInnerHTML={analyticsScript} />
        <script defer src="/_vercel/insights/script.js" />
      </head>
      <body lang="en" class="min-h-screen bg-heritage-light">
        <RouterOutlet />
        <footer class="bg-heritage-primary text-white text-center text-sm py-6 px-4">
          <p>Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC</p>
        </footer>
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});