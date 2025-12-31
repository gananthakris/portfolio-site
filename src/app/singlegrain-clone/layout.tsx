import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "./singlegrain-clone.css";
import SGNavbar from "@/components/singlegrain-clone/SGNavbar";
import SGFooter from "@/components/singlegrain-clone/SGFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Single Grain | The Marketing Partner That Companies Never Outgrow",
  description: "Average 3.2x ROI • Trusted by 500+ companies • We're your proactive marketing team that helps you get found everywhere.",
  openGraph: {
    title: "Single Grain | The Marketing Partner That Companies Never Outgrow",
    description: "Average 3.2x ROI • Trusted by 500+ companies • We're your proactive marketing team that helps you get found everywhere.",
    type: "website",
    url: "https://singlegrain.com",
  },
};

export default function SingleGrainCloneLayout({
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

