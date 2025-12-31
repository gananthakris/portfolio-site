import { caseStudies } from "@/lib/sg-content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
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
    <div className="pt-20 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-sm text-gray-600 mb-4">
            {study.client} • {study.industry}
          </div>
          <h1 className="heading-xl mb-6 text-gray-900">
            {study.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {study.results.map((result, idx) => (
            <div
              key={idx}
              className="card text-center"
            >
              <div className="text-4xl font-bold text-sg-blue mb-2">
                {result.metric}
              </div>
              <div className="text-sm text-gray-600">
                {result.label}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8 mb-12">
          <div className="card">
            <h2 className="heading-md mb-4 text-gray-900">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {study.challenge}
            </p>
          </div>

          <div className="card">
            <h2 className="heading-md mb-4 text-gray-900">The Solution</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {study.solution}
            </p>
          </div>

          <div className="card bg-gradient-to-r from-sg-blue/10 to-sg-blue-light/10 border-l-4 border-sg-blue">
            <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
              "{study.quote}"
            </p>
            <p className="text-sm font-semibold text-gray-900">
              — {study.testimonialAuthor}
            </p>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-sg-blue to-sg-blue-light text-white">
          <h2 className="heading-md mb-4 text-white">Ready to Get Similar Results?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Let's talk about how we can help your business achieve similar outcomes.
          </p>
          <Link
            href="/sg-new/contact"
            className="inline-block px-8 py-4 bg-white text-sg-blue rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </div>
    </div>
  );
}

