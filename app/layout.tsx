import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { business, fullAddress } from "@/lib/business"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { MobileActionBar } from "@/components/site/mobile-action-bar"
import { LocalBusinessJsonLd } from "@/components/site/json-ld"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} | ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  applicationName: business.name,
  keywords: [
    "AC repair Madurai",
    "AC service Madurai",
    "AC installation Madurai",
    "AC gas charging Madurai",
    "washing machine repair Madurai",
    "washing machine service Madurai",
    "air conditioner service Madurai",
    "appliance repair Madurai Tamil Nadu",
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  generator: "v0.app",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: business.locale,
    url: business.url,
    siteName: business.name,
    title: `${business.name} | ${business.tagline}`,
    description: business.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | ${business.tagline}`,
    description: business.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Madurai",
    "geo.position": `${business.geo.latitude};${business.geo.longitude}`,
    ICBM: `${business.geo.latitude}, ${business.geo.longitude}`,
    "business:contact_data:street_address": fullAddress,
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#1e6fd6",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`light ${inter.variable} ${jakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LocalBusinessJsonLd />
        <SiteHeader />
        <main className="min-h-screen pb-14 lg:pb-0">{children}</main>
        <SiteFooter />
        <MobileActionBar />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
