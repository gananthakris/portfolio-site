import MarketingHero from "@/components/MarketingHero";
import MarketingServices from "@/components/MarketingServices";
import MarketingMethodology from "@/components/MarketingMethodology";
import MarketingTestimonials from "@/components/MarketingTestimonials";
import MarketingContact from "@/components/MarketingContact";
import MarketingStats from "@/components/MarketingStats";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <MarketingHero />
      <MarketingStats />
      <MarketingServices />
      <MarketingMethodology />
      <MarketingTestimonials />
      <MarketingContact />
    </div>
  );
}

