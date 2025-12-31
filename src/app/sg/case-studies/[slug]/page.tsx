import { caseStudies, cta } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.id === params.slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} | Single Grain`,
    description: study.challenge,
  };
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((s) => s.id === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="pt-20 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {study.client} • {study.industry}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {study.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {study.results.map((result, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {result.metric}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {result.label}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              The Challenge
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {study.challenge}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              The Solution
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {study.solution}
            </p>
          </div>

          <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl border-l-4 border-gray-900 dark:border-white">
            <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
              "{study.quote}"
            </p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              — {study.testimonialAuthor}
            </p>
          </div>
        </div>

        <div className="p-8 bg-gray-900 dark:bg-black text-white rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Similar Results?</h2>
          <p className="text-gray-300 mb-6">
            Let's talk about how we can help your business achieve similar outcomes.
          </p>
          <Link
            href="/sg/contact"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {cta.primary}
          </Link>
        </div>
      </div>
    </div>
  );
}

