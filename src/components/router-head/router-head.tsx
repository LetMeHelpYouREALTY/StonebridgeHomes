import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { localBusinessSchema, SITE } from '~/config/site';

function googleSiteVerification(): string | undefined {
  // Set PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel to the GSC meta-tag token
  // (the content= value only — not the full <meta> tag).
  const fromEnv =
    typeof process !== 'undefined'
      ? process.env.PUBLIC_GOOGLE_SITE_VERIFICATION
      : undefined;
  return fromEnv?.trim() || undefined;
}

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const rawPath = loc.url.pathname || '/';
  const withSlash = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;
  const canonicalPath = withSlash === '//' ? '/' : withSlash;
  const canonical = `${SITE.origin}${canonicalPath === '/' ? '/' : canonicalPath}`;
  const verification = googleSiteVerification();

  return (
    <>
      <title>{head.title}</title>
      <link rel="canonical" href={canonical} />
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href={`${SITE.origin}/sitemap.xml`}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />

      {verification && (
        <meta name="google-site-verification" content={verification} />
      )}

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
