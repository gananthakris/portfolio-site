import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Gokulkrishna A | AI Automation Engineer",
  description: "Portfolio showcasing RPA, AI, and Full-Stack Automation projects. Automation Engineer with 5+ years of experience. Master's student in Computer Science at Binghamton University.",
  keywords: ["Gokulkrishna A", "AI Automation Engineer", "RPA Developer", "AI Enthusiast", "Full-stack Developer", "Binghamton University", "Automation Anywhere", "Python", "Machine Learning", "Next.js", "TypeScript"],
  authors: [{ name: "Gokulkrishna A" }],
  openGraph: {
    title: "Gokulkrishna A | AI Automation Engineer",
    description: "Portfolio showcasing RPA, AI, and Full-Stack Automation projects.",
    type: "website",
    url: "https://gokulai.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokulkrishna A | AI Automation Engineer",
    description: "Portfolio showcasing RPA, AI, and Full-Stack Automation projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-black text-gray-900 dark:text-white`}
      >
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
