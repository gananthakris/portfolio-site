import SGHero from "@/components/sg-new/SGHero";
import SGStats from "@/components/sg-new/SGStats";
import SGServices from "@/components/sg-new/SGServices";
import SGWhyChoose from "@/components/sg-new/SGWhyChoose";
import SGTestimonials from "@/components/sg-new/SGTestimonials";
import SGCTA from "@/components/sg-new/SGCTA";
import { Metadata } from "next";

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

export default function SGNewHomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Single Grain",
    url: "https://singlegrain.com",
    description: "The marketing partner that companies never outgrow",
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
      <div className="gradient-section">
        <SGHero />
        <SGStats />
        <SGServices />
        <SGWhyChoose />
        <SGTestimonials />
        <SGCTA />
      </div>
    </>
  );
}

