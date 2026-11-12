import type { RequestHandler } from '@builder.io/qwik-city';
import {
  SITEMAP_PAGES,
  buildUrlsetXml,
  todayIsoDate,
} from '~/lib/seo/sitemap';

/** Page URL set referenced by sitemap.xml for Search Console. */
export const onGet: RequestHandler = async ({ send, headers, cacheControl }) => {
  cacheControl({
    public: true,
    maxAge: 60 * 60,
    sMaxAge: 60 * 60,
  });
  headers.set('Content-Type', 'application/xml; charset=utf-8');
  headers.set('X-Content-Type-Options', 'nosniff');
  send(200, buildUrlsetXml(SITEMAP_PAGES, todayIsoDate()));
};
