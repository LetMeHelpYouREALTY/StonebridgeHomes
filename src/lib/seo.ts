import type { DocumentHead } from '@builder.io/qwik-city';
import { SITE_NAME, abs } from './site';

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
};

export const DEFAULT_OG_IMAGE = abs('/images/og-stonebridge-las-vegas-homes.png');

/** Builds a complete, consistent head block for a route. */
export function pageHead({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
}: PageMeta): DocumentHead {
  const url = abs(path);
  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'geo.region', content: 'US-NV' },
      { name: 'geo.placename', content: 'Summerlin West, Las Vegas' },
      { name: 'geo.position', content: '36.1745;-115.3585' },
      { name: 'ICBM', content: '36.1745, -115.3585' },
    ],
  };
}

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const money = (n: number) => `$${n.toLocaleString('en-US')}`;
