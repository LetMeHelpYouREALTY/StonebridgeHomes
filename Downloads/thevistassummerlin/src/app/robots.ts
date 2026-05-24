import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site-url';

/**
 * Crawl policy: allow marketing HTML and static assets under `/_next/` so Googlebot can render.
 * Do not add `Disallow: /_next/` — it breaks rendering and can harm indexing (Search Central).
 */
export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl().replace(/\/$/, '');
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
