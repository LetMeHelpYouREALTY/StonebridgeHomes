import type { RequestHandler } from '@builder.io/qwik-city';
import { buildSitemapIndexXml, todayIsoDate } from '~/lib/seo/sitemap';

/** Sitemap index — submit this URL in Google Search Console. */
export const onGet: RequestHandler = async ({ send, headers, cacheControl }) => {
  cacheControl({
    public: true,
    maxAge: 60 * 60,
    sMaxAge: 60 * 60,
  });
  headers.set('Content-Type', 'application/xml; charset=utf-8');
  headers.set('X-Content-Type-Options', 'nosniff');
  send(200, buildSitemapIndexXml(todayIsoDate()));
};
