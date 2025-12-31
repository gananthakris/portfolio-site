import { caseStudies } from "@/lib/singlegrain-content";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Single Grain",
  description: "Real results from companies that trust Single Grain. See how we've helped brands achieve 3.2x ROI and more.",
};

export default function CaseStudiesPage() {
  return (
    <div className="grain-bg pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6 text-sg-light">
            Case Studies
          </h1>
          <p className="text-lg text-sg-light-muted max-w-3xl mx-auto">
            Real results from companies that trust us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/singlegrain/case-studies/${study.id}`}
              className="block glass-card glass-card-hover p-8 h-full group"
            >
              <div className="mb-4">
                {study.results.slice(0, 2).map((result, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="text-3xl font-bold text-sg-neon-lime">
                      {result.metric}
                    </div>
                    <div className="text-sm text-sg-light-muted">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
              <h2 className="heading-md mb-2 text-sg-light group-hover:text-sg-neon-lime transition-colors">
                {study.title}
              </h2>
              <p className="text-sm text-sg-light-muted mb-4">
                {study.client} • {study.industry}
              </p>
              <div className="text-sm font-semibold text-sg-neon-lime group-hover:underline">
                Read case study →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

