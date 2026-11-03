# Stonebridge Las Vegas Homes

Hyperlocal real estate site for the Stonebridge village of Summerlin West,
Las Vegas, NV 89138, by Dr. Jan Duffy (Berkshire Hathaway HomeServices Nevada
Properties). Live at **https://www.stonebridgelasvegashomes.com** (Vercel project
`stonebridge-homes`).

The sister site **heritagestonebridge.com** covers only the 55+ Heritage at
Stonebridge neighborhood. This site covers the whole village and links to it.

## Stack

- [Qwik City](https://qwik.dev) 1.17 with the Vercel Edge adapter (static
  pre-render of every route, edge functions for the contact action and API).
- Tailwind CSS 3 with the palette in `tailwind.config.js`.
- RealScout web components for live MLS listings and home values.
- Follow Up Boss events API for contact-form leads (`FOLLOW_UP_BOSS_API_KEY`).
- Biome for lint/format, Vitest for tests.

## Commands

```bash
npm install
npm run dev        # SSR dev server on :5173
npm run build      # client + server build into .vercel/output
npm run lint       # biome
npm test           # vitest
npm run images     # regenerate heroes, OG card, logo, favicons, PWA icons
```

## Where things live

| Path | Purpose |
|---|---|
| `src/lib/site.ts` | Identity constants: origin, agent, phone, RealScout ids, nav |
| `src/lib/data.ts` | Market figures with source + as-of date, floor plans, neighborhoods, FAQs |
| `src/lib/seo.ts` | `pageHead()` plus FAQ and breadcrumb schema builders |
| `src/routes/layout.tsx` | Header, footer, skip link, cache headers |
| `src/components/router-head` | Canonical, favicons, fonts, RealScout script, site-wide schema |
| `src/components/ui` | PageHero, StatGrid, Faq, Breadcrumbs, CtaBand, DataNote, RealScout |
| `src/routes/sitemap.xml`, `src/routes/robots.txt` | Generated from `SITE_ORIGIN` |
| `docs/` | Audit report and image notes |

## Updating market numbers

Edit `STONEBRIDGE_MARKET` and `HERITAGE_MARKET` in `src/lib/data.ts`. Change the
figures and the `asOf` date together; every page, FAQ answer, and meta
description reads from there. Then bump `lastmod` in `src/routes/sitemap.xml/index.ts`.

## Routes

`/`, `/homes-for-sale`, `/prices`, `/floor-plans`, `/neighborhoods`,
`/heritage-at-stonebridge`, `/stonebridge-park`, `/stonebridge-las-vegas`,
`/community`, `/faq`, `/home-value`, `/contact`. `/homes` redirects (301) to
`/homes-for-sale`.
