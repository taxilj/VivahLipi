import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "VivahLipi — Premium Wedding Biodata Platform",
  description:
    "India's most elegant wedding platform. Create stunning biodata profiles, plan your wedding, and share with family — all in one place.",
  keywords: [
    "wedding biodata",
    "shaadi profile",
    "Indian wedding planner",
    "marriage biodata",
    "VivahLipi",
  ],
  openGraph: {
    title: "VivahLipi — Premium Wedding Biodata Platform",
    description:
      "Create stunning biodata profiles, plan your wedding, and share with family.",
    type: "website",
    locale: "en_IN",
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
