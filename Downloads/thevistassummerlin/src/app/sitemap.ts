import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site-url';
import { NAVIGATION } from '@/constants/site';

/** High-priority marketing URLs beyond nav/footer (each route should return 200 + real content in prod). */
const EXTRA_PATHS = [
  '/contact',
  '/privacy',
  '/terms',
  '/testimonials',
  '/sold',
  '/community-guide',
  '/investment',
  '/market-analysis',
  '/search',
  '/agents/dr-jan-duffy',
  '/properties/11773-golden-moments-avenue',
] as const;

function collectStaticPaths(): string[] {
  const paths = new Set<string>(['/', ...EXTRA_PATHS]);
  for (const item of NAVIGATION.main) paths.add(item.href);
  for (const item of NAVIGATION.footer.communities) paths.add(item.href);
  for (const item of NAVIGATION.footer.services) paths.add(item.href);
  for (const item of NAVIGATION.footer.resources) paths.add(item.href);
  return [...paths];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().replace(/\/$/, '');
  return collectStaticPaths().map((path) => ({
    url: path === '/' ? base : `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.75,
  }));
}
