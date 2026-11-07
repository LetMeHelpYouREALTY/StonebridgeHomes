import type { RequestHandler } from '@builder.io/qwik-city';

/** Legacy URL. Permanently redirect to the keyword-aligned path. */
export const onGet: RequestHandler = async ({ redirect }) => {
  throw redirect(301, '/homes-for-sale');
};
