import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script'
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MI - Mohsin Ikram",
  description: "Senior Software Engineer | Team Lead",
  generator: "NextJS",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-6C9Y97L9DK`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`            
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6C9Y97L9DK');
          `}
        </Script>
      </body>
    </html>
  )
}
