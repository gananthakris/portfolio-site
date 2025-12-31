import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import "./singlegrain.css";
import SGNavbar from "@/components/singlegrain/SGNavbar";
import SGFooter from "@/components/singlegrain/SGFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Single Grain | The Marketing Partner B2B Companies Never Outgrow",
  description: "Average 3.2x ROI • Trusted by 500+ companies • AI-forward digital marketing that scales with your growth.",
  openGraph: {
    title: "Single Grain | The Marketing Partner B2B Companies Never Outgrow",
    description: "Average 3.2x ROI • Trusted by 500+ companies • AI-forward digital marketing that scales with your growth.",
    type: "website",
    url: "https://singlegrain.com",
  },
};

export default function SingleGrainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-sg-dark text-sg-light antialiased" style={{ fontFamily: 'var(--font-inter)' }}>
        <SGNavbar />
        <main className="min-h-screen">{children}</main>
        <SGFooter />
      </body>
    </html>
  );
}

