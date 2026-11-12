import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { localBusinessSchema, SITE } from '~/config/site';

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const canonical = `${SITE.origin}${loc.url.pathname}`;

  return (
    <>
      <title>{head.title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}
      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}
      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...{ dangerouslySetInnerHTML: s.style }}
        />
      ))}

      <meta name="twitter:site" content="@DrJanDuffy" />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="https://imagedelivery.net" />

      <script
        type="application/ld+json"
        {...{ dangerouslySetInnerHTML: JSON.stringify(localBusinessSchema()) }}
      />
    </>
  );
});
