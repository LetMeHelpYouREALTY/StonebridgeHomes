import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site-url';
import { SITE_DISPLAY_TAGLINE } from '@/constants/site';

const siteUrl = getSiteUrl();

// Vercel CLI on Windows can fail prebuilt packaging ("Unable to find lambda for route") for
// static App Router pages when file-tracing fallbacks list many routes. Forcing this segment
// to request-time rendering ensures each route has a server bundle. `/` stays static via `app/page.tsx`.
// See: https://github.com/vercel/next.js/issues/82155
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `${SITE_DISPLAY_TAGLINE} | Berkshire Hathaway HomeServices Nevada Properties`,
  description: "Discover homes in The Vistas Summerlin, Las Vegas 89138. Dr. Jan Duffy offers seller and buyer guidance with subcommunity-level market insight and flexible scheduling.",
  keywords: [
    "The Vistas Summerlin",
    "Vistas Summerlin homes for sale",
    "The Vistas Las Vegas",
    "Dr. Jan Duffy realtor",
    "Summerlin luxury homes",
    "Las Vegas luxury real estate",
    "Canterra community",
    "oversized lots Summerlin",
    "dual master suites",
    "Berkshire Hathaway HomeServices",
    "Berkshire Hathaway Nevada Properties",
    "BHHS Nevada Properties",
    "flexible scheduling real estate",
    "The Vistas community center",
    "11312 Parkside Way",
    "Las Vegas real estate expert"
  ],
  openGraph: {
    title: `${SITE_DISPLAY_TAGLINE} — Luxury homes`,
    description: "Discover homes in The Vistas Summerlin with local market guidance from Dr. Jan Duffy.",
    url: siteUrl,
    siteName: SITE_DISPLAY_TAGLINE,
    images: [
      {
        url: "/subcommunities/IMG_0737.JPG",
        width: 1200,
        height: 630,
        alt: "The Vistas Summerlin Luxury Homes - Featured Canterra Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_DISPLAY_TAGLINE} — Luxury homes`,
    description: "Discover homes in The Vistas Summerlin with local market guidance from Dr. Jan Duffy.",
    images: ["/subcommunities/IMG_0737.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
