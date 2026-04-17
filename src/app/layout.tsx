import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://zelcodes.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zelcodes — 500+ SwiftUI Animations for iOS Developers",
    template: "%s · Zelcodes",
  },
  description:
    "A premium library of production-ready SwiftUI animations, transitions and UI effects. Browse the showcase, copy the code, ship faster.",
  keywords: [
    "SwiftUI animations",
    "iOS UI animations",
    "SwiftUI code examples",
    "SwiftUI transitions",
    "iOS developer tools",
    "SwiftUI components",
    "Zelcodes",
  ],
  authors: [{ name: "Akash Kottil", url: siteUrl }],
  creator: "Akash Kottil — Zelcodes",
  publisher: "Zelcodes",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Zelcodes — 500+ SwiftUI Animations for iOS Developers",
    description:
      "Production-ready SwiftUI animations. Browse the showcase, unlock the source on Patreon.",
    siteName: "Zelcodes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelcodes — SwiftUI Animations",
    description:
      "Production-ready SwiftUI animations. Browse the showcase, unlock the source on Patreon.",
    creator: "@zelcodes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafbff" },
    { media: "(prefers-color-scheme: dark)", color: "#05060f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main id="main" className="relative flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
