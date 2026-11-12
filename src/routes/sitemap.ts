import type { RequestHandler } from '@builder.io/qwik-city';

const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/services', priority: '1.0', changefreq: 'weekly' },
  { path: '/homes', priority: '0.9', changefreq: 'daily' },
  { path: '/community', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
];

export const onGet: RequestHandler = async ({ html }) => {
  const baseUrl = 'https://heritagestonebridge.com';
  const lastmod = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  html(200, sitemap);
};
