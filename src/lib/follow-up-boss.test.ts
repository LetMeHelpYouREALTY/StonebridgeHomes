import { describe, expect, it, vi } from 'vitest';
import {
  buildFollowUpBossEvent,
  mapInterestToFubType,
  sendFollowUpBossEvent,
  validateContactPayload,
} from './follow-up-boss';

describe('validateContactPayload', () => {
  it('rejects an empty body', () => {
    const result = validateContactPayload({}, 'https://example.com/contact');
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.status).toBe(400);
    }
  });

  it('accepts name with email', () => {
    const result = validateContactPayload(
      { firstName: 'Jan', lastName: 'Duffy', email: 'jan@example.com' },
      'https://example.com/contact'
    );
    expect(result.ok).toBe(true);
  });
});

describe('mapInterestToFubType', () => {
  it('maps selling to Seller Inquiry', () => {
    expect(mapInterestToFubType('selling')).toBe('Seller Inquiry');
  });

  it('maps other interests to General Inquiry', () => {
    expect(mapInterestToFubType('buying')).toBe('General Inquiry');
  });
});

describe('sendFollowUpBossEvent', () => {
  it('posts to FUB events with mocked fetch', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ status: 201 });
    const contact = {
      firstName: 'Test',
      lastName: 'Lead',
      email: 'test@example.com',
      interest: 'buying',
      message: 'Hello',
      sourceUrl: 'https://stonebridge-homes.vercel.app/contact',
    };

    const result = await sendFollowUpBossEvent(contact, {
      apiKey: 'test-key',
      fetchImpl: fetchMock,
    });

    expect(result.ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('https://api.followupboss.com/v1/events');
    expect(init.method).toBe('POST');
    const payload = JSON.parse(String(init.body));
    expect(payload.type).toBe('General Inquiry');
    expect(payload.source).toBe('stonebridge-homes');
    expect(buildFollowUpBossEvent(contact).person.emails).toEqual([
      { value: 'test@example.com' },
    ]);
  });

  it('returns 503 when API key is missing', async () => {
    const result = await sendFollowUpBossEvent(
      {
        firstName: 'Test',
        lastName: 'Lead',
        email: 'test@example.com',
        interest: '',
        message: '',
        sourceUrl: 'https://example.com/contact',
      },
      { apiKey: undefined }
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.status).toBe(503);
    }
  });
});
