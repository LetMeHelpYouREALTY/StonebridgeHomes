/**
 * Lighthouse CI config.
 *
 * Vercel Deployment Protection bypass must be sent as an HTTP header, never as
 * a query parameter on the audited URL. LHCI reports persist requestedUrl /
 * finalUrl and may be uploaded to temporary public storage.
 */
const bypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

const collectSettings = bypassSecret
  ? {
      extraHeaders: {
        'x-vercel-protection-bypass': bypassSecret,
      },
    }
  : {};

module.exports = {
  ci: {
    collect: {
      settings: collectSettings,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'speed-index': ['error', { maxNumericValue: 3000 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
