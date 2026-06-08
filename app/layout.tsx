import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL, SITE_NAME } from "@/lib/utils";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Level With Respect — Residents for a Good Neighbor on Pico Boulevard",
    template: "%s — Level With Respect",
  },
  description:
    "An independent resident initiative encouraging responsible operation and community accountability from LEVEL Venue at 9320 W Pico Blvd, Los Angeles. We want the venue to succeed — and the neighborhood to thrive alongside it.",
  keywords: [
    "LEVEL Venue",
    "LEVEL Venue Los Angeles",
    "9320 W Pico Blvd",
    "Pico Robertson event venue",
    "Pico Boulevard",
    "neighborhood advocacy",
    "community relations",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Level With Respect",
    description:
      "A beautiful venue can still be a good neighbor. Residents near LEVEL Venue on Pico Boulevard advocating for responsible operation.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Level With Respect",
    description:
      "A beautiful venue can still be a good neighbor. Residents near LEVEL Venue on Pico Boulevard advocating for responsible operation.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "An independent resident-led advocacy initiative encouraging responsible operation and community accountability from LEVEL Venue at 9320 W Pico Blvd, Los Angeles.",
  email: "hello@levelwithrespect.com",
  areaServed: {
    "@type": "Place",
    name: "Pico-Robertson, Los Angeles, CA 90035",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, webSiteSchema]),
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
