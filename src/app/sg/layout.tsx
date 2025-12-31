import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SGNavbar from "@/components/sg/SGNavbar";
import SGFooter from "@/components/sg/SGFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Single Grain | Tech-Enabled Digital Marketing Agency",
  description: "The marketing partner that companies never outgrow. Average 3.2x ROI. Trusted by 500+ companies.",
  openGraph: {
    title: "Single Grain | Tech-Enabled Digital Marketing Agency",
    description: "The marketing partner that companies never outgrow. Average 3.2x ROI. Trusted by 500+ companies.",
    type: "website",
    url: "https://singlegrain.com",
  },
};

export default function SGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased">
        <SGNavbar />
        <main className="min-h-screen">{children}</main>
        <SGFooter />
      </body>
    </html>
  );
}

