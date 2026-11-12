/**
 * Lighthouse CI config.
 *
 * Vercel Deployment Protection bypass is applied via collect.settings.extraHeaders
 * for the ephemeral CI runner only. Lighthouse persists those headers inside the
 * LHR (configSettings.extraHeaders / network records), so this config must never
 * upload reports to temporary public storage or any shared artifact store while
 * the bypass secret is present. The GitHub Actions job asserts only.
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
    // Never upload LHRs when a bypass secret may be embedded in them.
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
  },
};
