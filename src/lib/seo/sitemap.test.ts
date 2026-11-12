import { describe, expect, it } from 'vitest';
import {
  SITEMAP_PAGES,
  absoluteUrl,
  buildSitemapIndexXml,
  buildUrlsetXml,
} from './sitemap';

describe('sitemap helpers', () => {
  it('builds absolute heritagestonebridge URLs', () => {
    expect(absoluteUrl('/services/')).toBe(
      'https://heritagestonebridge.com/services/'
    );
  });

  it('includes core GSC pages', () => {
    const paths = SITEMAP_PAGES.map((p) => p.path);
    expect(paths).toContain('/');
    expect(paths).toContain('/services/');
    expect(paths).toContain('/homes/');
    expect(paths).toContain('/community/');
    expect(paths).toContain('/contact/');
  });

  it('emits a valid sitemap index pointing at pages sitemap', () => {
    const xml = buildSitemapIndexXml('2026-11-12');
    expect(xml).toContain('<sitemapindex');
    expect(xml).toContain(
      'https://heritagestonebridge.com/sitemap-pages.xml'
    );
  });

  it('emits urlset with absolute locs', () => {
    const xml = buildUrlsetXml(SITEMAP_PAGES, '2026-11-12');
    expect(xml).toContain('<urlset');
    expect(xml).toContain('<loc>https://heritagestonebridge.com/</loc>');
    expect(xml).toContain(
      '<loc>https://heritagestonebridge.com/services/</loc>'
    );
  });
});
