import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gokulkrishna A | Applied AI · Product · GTM",
  description: "Applied AI, Product, and GTM professional with 5+ years bridging technical depth and market execution. Shipped AI and automation products across healthcare and BPO. MS CS at Binghamton University.",
  keywords: ["Gokulkrishna A", "Applied AI", "AI Product Manager", "GTM Strategy", "AI Product", "Go-to-Market", "Automation", "LLM Products", "AI Agents", "Product Management", "Binghamton University", "Python", "Next.js"],
  authors: [{ name: "Gokulkrishna A" }],
  openGraph: {
    title: "Gokulkrishna A | Applied AI · Product · GTM",
    description: "Applied AI, Product, and GTM professional shipping AI-powered products that move markets.",
    type: "website",
    url: "https://gokulai.dev",
    images: [
      {
        url: "https://gokulai.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gokulkrishna A - AI & Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokulkrishna A | Applied AI · Product · GTM",
    description: "Applied AI, Product, and GTM professional shipping AI-powered products that move markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020408] text-white`}
      >
        <Script
          data-goatcounter="https://agokulakrishna.goatcounter.com/count"
          src="//gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
        <!-- Place this script before closing </body> tag -->
<script>
  window._evolveConfig = {
    widgetId: "72535125-0b5f-4408-b2da-2ee4ffdb2347",
    apiKey: "0204838d-939c-4ec5-bb3e-4b7fbe58f1bd"
  };
</script>
<script src="https://evolvecopy.webadmin-503.workers.dev/widget.main.js"></script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
