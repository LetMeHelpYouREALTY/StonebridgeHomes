import Script from 'next/script'

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    url: string
  }>
}

/**
 * Breadcrumb schema for 2026 SEO best practices
 * Helps with navigation and Answer Engine Optimization (AEO)
 */
export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://searchforhomesinhenderson.com${item.url}`,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(schema)}
    </Script>
  )
}
