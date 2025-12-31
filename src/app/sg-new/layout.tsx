import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "./sg-new.css";
import SGNavbar from "@/components/sg-new/SGNavbar";
import SGFooter from "@/components/sg-new/SGFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Single Grain | The Marketing Partner That Companies Never Outgrow",
  description: "Average 3.2x ROI • Trusted by 500+ companies • Tech-enabled digital marketing that scales with your growth.",
  openGraph: {
    title: "Single Grain | The Marketing Partner That Companies Never Outgrow",
    description: "Average 3.2x ROI • Trusted by 500+ companies • Tech-enabled digital marketing that scales with your growth.",
    type: "website",
    url: "https://singlegrain.com",
  },
};

export default function SGNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased" style={{ fontFamily: 'var(--font-inter)' }}>
        <SGNavbar />
        <main className="min-h-screen">{children}</main>
        <SGFooter />
      </body>
    </html>
  );
}

