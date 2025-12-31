import { caseStudies } from "@/lib/content";
import Link from "next/link";

export const metadata = {
  title: "Case Studies | Single Grain",
  description: "Real results from companies that trust Single Grain. See how we've helped brands achieve 3.2x ROI and more.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-20 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real results from companies that trust us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/sg/case-studies/${study.id}`}
              className="block p-8 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="mb-4">
                {study.results.slice(0, 2).map((result, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {result.metric}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {study.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {study.client} • {study.industry}
              </p>
              <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:underline">
                Read case study →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

