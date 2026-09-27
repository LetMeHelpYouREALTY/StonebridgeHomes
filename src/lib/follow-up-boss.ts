import type { EnvGetter } from '@builder.io/qwik-city/middleware/request-handler';

export const FUB_SYSTEM = 'stonebridge-homes';
export const CONTACT_ERROR_PHONE = '(702) 222-1964';
export const CONTACT_ERROR_MESSAGE = `Sorry, something went wrong sending your message. Please call or text Dr. Jan Duffy at ${CONTACT_ERROR_PHONE}.`;

export type ContactFormPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  sourceUrl?: string;
};

export type ContactValidationResult =
  | { ok: true; data: ValidatedContact }
  | { ok: false; status: 400; error: string };

export type ValidatedContact = {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  interest: string;
  message: string;
  sourceUrl: string;
};

export type FollowUpBossSendResult =
  | { ok: true }
  | { ok: false; status: 503 | 502; error: string };

export function getFollowUpBossApiKey(env?: EnvGetter): string | undefined {
  const fromPlatform = env?.get('FOLLOW_UP_BOSS_API_KEY');
  if (fromPlatform) {
    return fromPlatform;
  }
  return process.env.FOLLOW_UP_BOSS_API_KEY;
}

function normalizeString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export function validateContactPayload(
  payload: ContactFormPayload,
  fallbackSourceUrl: string
): ContactValidationResult {
  const firstName = normalizeString(payload.firstName);
  const lastName = normalizeString(payload.lastName);
  const email = normalizeString(payload.email);
  const phone = normalizeString(payload.phone);
  const interest = normalizeString(payload.interest);
  const message = normalizeString(payload.message);
  const sourceUrl = normalizeString(payload.sourceUrl) || fallbackSourceUrl;

  const hasName = Boolean(firstName || lastName);
  const hasContact = Boolean(email || phone);

  if (!hasName || !hasContact) {
    return {
      ok: false,
      status: 400,
      error: 'Name and either email or phone are required.',
    };
  }

  return {
    ok: true,
    data: {
      firstName: firstName || 'Visitor',
      lastName: lastName || 'Inquiry',
      email: email || undefined,
      phone: phone || undefined,
      interest,
      message,
      sourceUrl,
    },
  };
}

export function mapInterestToFubType(interest: string): string {
  if (interest === 'selling') {
    return 'Seller Inquiry';
  }
  return 'General Inquiry';
}

export function buildFollowUpBossEvent(contact: ValidatedContact) {
  const interestLabel = contact.interest
    ? `Interest: ${contact.interest}`
    : 'Interest: not specified';
  const visitorMessage = contact.message || '(no message provided)';
  const fubType = mapInterestToFubType(contact.interest);

  const message = [visitorMessage, interestLabel].filter(Boolean).join('\n\n');

  const person: {
    firstName: string;
    lastName: string;
    emails?: Array<{ value: string }>;
    phones?: Array<{ value: string }>;
    tags: string[];
  } = {
    firstName: contact.firstName,
    lastName: contact.lastName,
    tags: [FUB_SYSTEM, 'Contact Form'],
  };

  if (contact.email) {
    person.emails = [{ value: contact.email }];
  }
  if (contact.phone) {
    person.phones = [{ value: contact.phone }];
  }

  return {
    source: FUB_SYSTEM,
    system: FUB_SYSTEM,
    type: fubType,
    message,
    description: 'Contact Form - /contact',
    sourceUrl: contact.sourceUrl,
    person,
  };
}

export async function sendFollowUpBossEvent(
  contact: ValidatedContact,
  options: {
    apiKey?: string;
    fetchImpl?: typeof fetch;
  } = {}
): Promise<FollowUpBossSendResult> {
  const apiKey = options.apiKey;
  if (!apiKey) {
    console.error(
      'FOLLOW_UP_BOSS_API_KEY is not configured for stonebridge-homes contact leads.'
    );
    return {
      ok: false,
      status: 503,
      error: 'Lead capture is temporarily unavailable.',
    };
  }

  const fetchFn = options.fetchImpl ?? fetch;
  const auth = Buffer.from(`${apiKey}:`).toString('base64');
  const body = buildFollowUpBossEvent(contact);

  try {
    const response = await fetchFn('https://api.followupboss.com/v1/events', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
        'X-System': FUB_SYSTEM,
      },
      body: JSON.stringify(body),
    });

    if (response.status === 200 || response.status === 201 || response.status === 204) {
      return { ok: true };
    }

    console.error(
      `Follow Up Boss events API returned HTTP ${response.status} for stonebridge-homes contact form.`
    );
    return {
      ok: false,
      status: 502,
      error: CONTACT_ERROR_MESSAGE,
    };
  } catch (error) {
    console.error('Follow Up Boss events API request failed for stonebridge-homes.', error);
    return {
      ok: false,
      status: 502,
      error: CONTACT_ERROR_MESSAGE,
    };
  }
}
