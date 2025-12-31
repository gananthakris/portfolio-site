import SGHero from "@/components/singlegrain-clone/SGHero";
import SGServicesShowcase from "@/components/singlegrain-clone/SGServicesShowcase";
import SGMethodology from "@/components/singlegrain-clone/SGMethodology";
import SGCaseStudies from "@/components/singlegrain-clone/SGCaseStudies";
import SGContactForm from "@/components/singlegrain-clone/SGContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single Grain | The Marketing Partner That Companies Never Outgrow",
  description: "Average 3.2x ROI • Trusted by 500+ companies • We're your proactive marketing team that helps you get found everywhere.",
};

export default function SingleGrainCloneHomePage() {
  return (
    <>
      <SGHero />
      <SGServicesShowcase />
      <SGMethodology />
      <SGCaseStudies />
      <SGContactForm />
    </>
  );
}

