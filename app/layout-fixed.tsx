import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { GoogleAnalytics } from "@next/third-parties/google"
import ErrorBoundary from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Char Dham Yatra 2025 | Kedarnath Badrinath Gangotri Yamunotri Tour Packages",
  description:
    "Book authentic Char Dham Yatra packages from ₹10,999. Visit Kedarnath, Badrinath, Gangotri & Yamunotri with comfortable accommodation, meals, and experienced guides.",
  keywords: "char dham yatra, kedarnath tour, badrinath tour, gangotri tour, yamunotri tour, char dham packages 2025",
  authors: [{ name: "Char Dham Yatra" }],
  creator: "Char Dham Yatra",
  publisher: "Char Dham Yatra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chardhamyatra2025.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Char Dham Yatra 2025 | Sacred Himalayan Pilgrimage",
    description: "Experience the divine journey to four sacred dhams with our expertly crafted tour packages.",
    url: "https://chardhamyatra2025.vercel.app",
    siteName: "Char Dham Yatra 2025",
    images: [
      {
        url: "/images/char-dham-og.jpg",
        width: 1200,
        height: 630,
        alt: "Char Dham Yatra 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Char Dham Yatra 2025 | Sacred Himalayan Pilgrimage",
    description: "Book authentic Char Dham Yatra packages from ₹10,999",
    images: ["/images/char-dham-og.jpg"],
  },
  verification: {
    google: "your-google-search-console-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <Providers>{children}</Providers>
        </ErrorBoundary>
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
