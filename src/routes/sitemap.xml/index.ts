import type { RequestHandler } from '@builder.io/qwik-city';
import { SITE_ORIGIN } from '~/lib/site';

/**
 * Keep this list in sync with src/routes. `lastmod` is the date the page's
 * content or data was last edited, not the build date, so crawlers are not
 * told every page changed on every deploy.
 */
export const ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-11-03' },
  { path: '/homes-for-sale', priority: '0.9', changefreq: 'daily', lastmod: '2026-11-03' },
  { path: '/luxury-homes', priority: '0.9', changefreq: 'weekly', lastmod: '2026-11-11' },
  { path: '/prices', priority: '0.9', changefreq: 'weekly', lastmod: '2026-11-03' },
  { path: '/floor-plans', priority: '0.8', changefreq: 'monthly', lastmod: '2026-11-03' },
  { path: '/neighborhoods', priority: '0.8', changefreq: 'monthly', lastmod: '2026-11-03' },
  { path: '/heritage-at-stonebridge', priority: '0.9', changefreq: 'weekly', lastmod: '2026-11-03' },
  { path: '/stonebridge-park', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-03' },
  { path: '/stonebridge-las-vegas', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-03' },
  { path: '/community', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-03' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-03' },
  { path: '/home-value', priority: '0.8', changefreq: 'monthly', lastmod: '2026-11-03' },
  { path: '/contact', priority: '0.6', changefreq: 'yearly', lastmod: '2026-11-03' },
];

export const onGet: RequestHandler = async ({ send, headers }) => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_ORIGIN}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
).join('\n')}
</urlset>`;

  headers.set('Content-Type', 'application/xml; charset=utf-8');
  headers.set('Cache-Control', 'public, max-age=3600');
  send(200, body);
};
