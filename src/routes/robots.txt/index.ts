import type { RequestHandler } from '@builder.io/qwik-city';
import { SITE } from '~/config/site';

/**
 * Dynamic robots.txt for Google Search Console crawl discovery.
 * Static fallback also ships from public/robots.txt.
 */
export const onGet: RequestHandler = async ({ text, headers, cacheControl }) => {
  cacheControl({
    public: true,
    maxAge: 60 * 60 * 24,
    sMaxAge: 60 * 60 * 24,
  });
  headers.set('Content-Type', 'text/plain; charset=utf-8');
  headers.set('X-Content-Type-Options', 'nosniff');

  text(
    200,
    `# ${SITE.origin}/
User-agent: *
Allow: /

Disallow: /admin/
Disallow: /api/
Disallow: /private/

Sitemap: ${SITE.origin}/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /
`
  );
};
