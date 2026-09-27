import type { RequestHandler } from '@builder.io/qwik-city';
import {
  getFollowUpBossApiKey,
  sendFollowUpBossEvent,
  validateContactPayload,
  type ContactFormPayload,
} from '~/lib/follow-up-boss';

export const onPost: RequestHandler = async (event) => {
  let body: ContactFormPayload;

  try {
    const parsed = await event.parseBody();
    if (parsed === null || typeof parsed !== 'object') {
      event.json(400, { error: 'Name and either email or phone are required.' });
      return;
    }
    body = parsed as ContactFormPayload;
  } catch {
    try {
      body = (await event.request.json()) as ContactFormPayload;
    } catch {
      event.json(400, { error: 'Invalid JSON body.' });
      return;
    }
  }

  const fallbackSourceUrl =
    event.request.headers.get('referer') ?? event.url.origin + '/contact';
  const validation = validateContactPayload(body, fallbackSourceUrl);

  if (!validation.ok) {
    event.json(validation.status, { error: validation.error });
    return;
  }

  const apiKey = getFollowUpBossApiKey(event.env);
  const result = await sendFollowUpBossEvent(validation.data, { apiKey });

  if (!result.ok) {
    event.json(result.status, { error: result.error });
    return;
  }

  event.json(200, {
    success: true,
    message: 'Thank you for your message! We will get back to you soon.',
  });
};
