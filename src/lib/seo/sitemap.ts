import { SITE } from '~/config/site';

export type SitemapEntry = {
  path: string;
  priority: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
};

/** Canonical indexable routes for Google Search Console. */
export const SITEMAP_PAGES: SitemapEntry[] = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/services/', priority: '1.0', changefreq: 'weekly' },
  { path: '/homes/', priority: '0.9', changefreq: 'daily' },
  { path: '/community/', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact/', priority: '0.8', changefreq: 'monthly' },
];

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.origin}${normalized}`;
}

export function buildUrlsetXml(entries: SitemapEntry[], lastmod: string): string {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${absoluteUrl(entry.path)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function buildSitemapIndexXml(lastmod: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE.origin}/sitemap-pages.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>
`;
}

export function todayIsoDate(): string {
  return new Date().toISOString().split('T')[0] ?? '';
}
