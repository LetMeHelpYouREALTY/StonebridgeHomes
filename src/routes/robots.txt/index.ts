import type { RequestHandler } from '@builder.io/qwik-city';
import { SITE_ORIGIN } from '~/lib/site';

export const onGet: RequestHandler = async ({ send, headers }) => {
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
  headers.set('Content-Type', 'text/plain; charset=utf-8');
  headers.set('Cache-Control', 'public, max-age=3600');
  send(200, body);
};
