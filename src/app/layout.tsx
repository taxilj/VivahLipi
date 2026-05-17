import type { Metadata } from "next"
import "./globals.css"

const baseUrl = "https://vivahlipi.in"

export const metadata: Metadata = {
  title: {
    default: "VivahLipi — Premium Wedding Biodata Platform",
    template: "%s | VivahLipi",
  },
  description:
    "India's most elegant wedding platform. Create stunning biodata profiles, plan your wedding, and share with family — all in one place.",
  keywords: [
    "wedding biodata",
    "shaadi profile",
    "Indian wedding planner",
    "marriage biodata",
    "VivahLipi",
  ],
  metadataBase: new URL(baseUrl),
  robots: { index: true, follow: true },
  openGraph: {
    title: "VivahLipi — Premium Wedding Biodata Platform",
    description:
      "Create stunning biodata profiles, plan your wedding, and share with family.",
    type: "website",
    locale: "en_IN",
    siteName: "VivahLipi",
  },
  twitter: {
    card: "summary_large_image",
    title: "VivahLipi — Premium Wedding Biodata Platform",
    description:
      "Create stunning biodata profiles, plan your wedding, and share with family.",
  },
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
