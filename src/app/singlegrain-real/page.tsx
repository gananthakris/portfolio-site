import SGHero from "@/components/singlegrain-real/SGHero";
import SGPillars from "@/components/singlegrain-real/SGPillars";
import SGWhyChoose from "@/components/singlegrain-real/SGWhyChoose";
import SGServices from "@/components/singlegrain-real/SGServices";
import SGMethodology from "@/components/singlegrain-real/SGMethodology";
import SGCaseStudies from "@/components/singlegrain-real/SGCaseStudies";
import SGCTA from "@/components/singlegrain-real/SGCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single Grain | The Marketing Partner That Companies Never Outgrow",
  description: "Average 3.2x ROI • Trusted by 500+ companies • We're your proactive marketing team that helps you get found everywhere.",
};

export default function SingleGrainRealHomePage() {
  return (
    <>
      <SGHero />
      <SGPillars />
      <SGWhyChoose />
      <SGServices />
      <SGMethodology />
      <SGCaseStudies />
      <SGCTA />
    </>
  );
}

