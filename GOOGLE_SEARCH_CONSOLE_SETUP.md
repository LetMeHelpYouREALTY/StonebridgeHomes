# Google Search Console Setup — Heritage at Stonebridge

Canonical property: **https://heritagestonebridge.com**

Based on [Google Search Central sitemap docs](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) and [robots.txt guidance](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt) (checked 2026-11-12).

## 1. Verify ownership

Prefer **Domain** property verification via DNS TXT (covers http/https and www/non-www).

### Option A — HTML meta tag (supported in this repo)

1. Open [Google Search Console](https://search.google.com/search-console) → Add property → **URL prefix** → `https://heritagestonebridge.com`
2. Choose **HTML tag**
3. Copy only the `content` token
4. Set Vercel env var:

```bash
PUBLIC_GOOGLE_SITE_VERIFICATION=your_token_here
```

5. Redeploy, then click **Verify** in GSC

The meta tag is emitted from `src/components/router-head/router-head.tsx` when the env var is set.

### Option B — HTML file upload

1. Download Google’s `googleXXXX.html` verification file
2. Place it in `public/googleXXXX.html`
3. Commit, deploy, verify

### Option C — DNS (recommended for long-term)

Add the TXT record Google provides at the DNS host (Cloudflare gray-cloud / DNS-only for the apex when using Vercel).

## 2. Confirm crawl files are live

| File | URL | Purpose |
|------|-----|---------|
| robots.txt | https://heritagestonebridge.com/robots.txt | Allow crawl + declare sitemap |
| Sitemap index | https://heritagestonebridge.com/sitemap.xml | Submit this in GSC |
| Pages sitemap | https://heritagestonebridge.com/sitemap-pages.xml | URL set for core pages |

Quick checks:

```bash
curl -sI https://heritagestonebridge.com/robots.txt | head
curl -s https://heritagestonebridge.com/sitemap.xml | head
curl -s https://heritagestonebridge.com/sitemap-pages.xml | head
```

Expect `Content-Type` of `text/plain` (robots) and `application/xml` (sitemaps). Loc URLs must be absolute `https://heritagestonebridge.com/...`.

## 3. Submit the sitemap

1. GSC → **Sitemaps**
2. Enter: `sitemap.xml` (or full `https://heritagestonebridge.com/sitemap.xml`)
3. Submit
4. Status should become **Success** after Google fetches it

Also listed in robots.txt:

```
Sitemap: https://heritagestonebridge.com/sitemap.xml
```

## 4. Request indexing for priority URLs

Use **URL Inspection** → Request indexing for:

1. `/`
2. `/services/`
3. `/homes/`
4. `/community/`
5. `/contact/`

## 5. What this repo already ships for GSC

- Canonical tags pinned to `https://heritagestonebridge.com`
- `rel="sitemap"` link in `<head>`
- `robots` / `googlebot` meta: `index, follow` (+ preview directives)
- LocalBusiness / RealEstateAgent JSON-LD with NAP matching GBP
- FAQ schema on the homepage
- Trailing-slash locs aligned with Qwik SSG URLs
- SSG origin set to `heritagestonebridge.com` (no vercel.app locs in the auto sitemap)

## 6. After go-live monitoring

| Cadence | Action |
|---------|--------|
| 24–48h | Confirm sitemap Success; check Page indexing |
| Weekly | Coverage / “Why pages aren’t indexed” |
| Monthly | Performance (queries, CTR), Core Web Vitals |

## Support NAP

- Brand: Heritage Stonebridge \| Homes By Dr. Jan Duffy  
- Phone: (702) 789-6561  
- Email: DrDuffySells@HeritageStonebridge.com  
- Address: 930 Silverfir Court, Suite B, Las Vegas, NV 89138  

---

Last updated: 2026-11-12 (America/Los_Angeles)
