import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gokulkrishna A – Automation Engineer & AI Enthusiast | Portfolio",
  description: "Automation Engineer (RPA) with 5+ years of experience. Master's student in Computer Science at Binghamton University. Specialized in RPA, AI, and full-stack development. Open to opportunities in AI/ML engineering and automation.",
  keywords: ["Gokulkrishna A", "Automation Engineer", "RPA Developer", "AI Enthusiast", "Full-stack Developer", "Binghamton University", "Automation Anywhere", "Python", "Machine Learning"],
  authors: [{ name: "Gokulkrishna A" }],
  openGraph: {
    title: "Gokulkrishna A – Automation Engineer & AI Enthusiast",
    description: "Automation Engineer (RPA) with 5+ years of experience. Master's student in Computer Science at Binghamton University.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokulkrishna A – Automation Engineer & AI Enthusiast",
    description: "Automation Engineer (RPA) with 5+ years of experience. Master's student in Computer Science at Binghamton University.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-black text-gray-900 dark:text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
