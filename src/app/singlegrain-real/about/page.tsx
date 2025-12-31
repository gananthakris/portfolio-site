import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Single Grain",
  description: "Learn about Single Grain's mission, team, and how we help companies grow their revenues online.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6 text-gray-900">
            About Us
          </h1>
          <p className="text-xl text-gray-600">
            Single Grain is a full-service digital marketing agency that helps great companies grow their revenues online.
          </p>
        </div>

        <div className="space-y-12">
          <div className="card">
            <h2 className="heading-md mb-4 text-gray-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              We are the marketing partner that companies never outgrow. We specialize in exclusive, cutting-edge marketing strategies that produce substantial results. Our proprietary approaches like Programmatic SEO and AI-Powered CRO have skyrocketed revenues for our clients.
            </p>
          </div>

          <div className="card">
            <h2 className="heading-md mb-4 text-gray-900">What Sets Us Apart</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              We're not about small tweaks—we're about transformative growth. We combine ROI-focused strategies, expert-led execution, and AI-forward tools to deliver results that scale.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-sg-primary mr-3 mt-1 font-bold">✓</span>
                <span>Average 3.2x ROI for our clients</span>
              </li>
              <li className="flex items-start">
                <span className="text-sg-primary mr-3 mt-1 font-bold">✓</span>
                <span>Trusted by 500+ companies</span>
              </li>
              <li className="flex items-start">
                <span className="text-sg-primary mr-3 mt-1 font-bold">✓</span>
                <span>AI-forward approach to marketing</span>
              </li>
              <li className="flex items-start">
                <span className="text-sg-primary mr-3 mt-1 font-bold">✓</span>
                <span>Expert-led team with proven track records</span>
              </li>
            </ul>
          </div>

          <div className="card bg-gradient-to-r from-sg-primary/10 to-sg-primary-dark/10">
            <h2 className="heading-md mb-4 text-gray-900">Eric Siu, Founder & CEO</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Eric Siu is the founder and CEO of Single Grain, host of the "Leveling Up" and "Marketing School" podcasts, and a recognized thought leader in digital marketing and AI.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/singlegrain-real/contact"
            className="btn-primary text-lg px-8 py-4"
          >
            Work With Us
          </Link>
        </div>
      </div>
    </div>
  );
}

