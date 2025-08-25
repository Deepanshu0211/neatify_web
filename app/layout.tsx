import type React from "react"
import { DM_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata = {
  title: "Neatify - Organize your digital mess. Clean. Fast. Effortless.",
  description:
    "The ultimate file organization tool that helps you clean up your digital mess with AI-powered suggestions and smart categorization.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} dark`}>
      <head />
      <body className="antialiased">
        {children}

        {/* Load GSAP asynchronously */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
