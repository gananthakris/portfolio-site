import SGHero from "@/components/singlegrain/SGHero";
import SGPillars from "@/components/singlegrain/SGPillars";
import SGComparison from "@/components/singlegrain/SGComparison";
import SGServicesPreview from "@/components/singlegrain/SGServicesPreview";
import SGLogoStrip from "@/components/singlegrain/SGLogoStrip";
import SGFounder from "@/components/singlegrain/SGFounder";
import SGNewsletter from "@/components/singlegrain/SGNewsletter";
import SGContactCTA from "@/components/singlegrain/SGContactCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single Grain | The Marketing Partner B2B Companies Never Outgrow",
  description: "Average 3.2x ROI • Trusted by 500+ companies • AI-forward digital marketing that scales with your growth.",
  openGraph: {
    title: "Single Grain | The Marketing Partner B2B Companies Never Outgrow",
    description: "Average 3.2x ROI • Trusted by 500+ companies • AI-forward digital marketing that scales with your growth.",
    type: "website",
    url: "https://singlegrain.com",
    images: [
      {
        url: "/singlegrain/api/og?title=Single%20Grain",
        width: 1200,
        height: 630,
        alt: "Single Grain",
      },
    ],
  },
};

export default function SingleGrainHomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Single Grain",
    url: "https://singlegrain.com",
    description: "The marketing partner B2B companies never outgrow",
    founder: {
      "@type": "Person",
      name: "Eric Siu",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grain-bg">
        <SGHero />
        <SGPillars />
        <SGComparison />
        <SGServicesPreview />
        <SGLogoStrip />
        <SGFounder />
        <SGNewsletter />
        <SGContactCTA />
      </div>
    </>
  );
}
