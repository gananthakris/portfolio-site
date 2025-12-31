import { caseStudies } from "@/lib/singlegrain-content";
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
    <div className="grain-bg pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-sm text-sg-light-muted mb-4">
            {study.client} • {study.industry}
          </div>
          <h1 className="heading-xl mb-6 text-sg-light">
            {study.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {study.results.map((result, idx) => (
            <div
              key={idx}
              className="glass-card p-6 text-center"
            >
              <div className="text-4xl font-bold text-sg-neon-lime mb-2">
                {result.metric}
              </div>
              <div className="text-sm text-sg-light-muted">
                {result.label}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8 mb-12">
          <div className="glass-card p-8">
            <h2 className="heading-md mb-4 text-sg-light">The Challenge</h2>
            <p className="text-sg-light-muted leading-relaxed">
              {study.challenge}
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="heading-md mb-4 text-sg-light">The Solution</h2>
            <p className="text-sg-light-muted leading-relaxed">
              {study.solution}
            </p>
          </div>

          <div className="glass-card p-8 border-l-4 border-sg-neon-lime">
            <p className="text-lg text-sg-light italic mb-4">
              "{study.quote}"
            </p>
            <p className="text-sm font-semibold text-sg-light-muted">
              — {study.testimonialAuthor}
            </p>
          </div>

          {study.keyLearnings && (
            <div className="glass-card p-8 bg-sg-neon-lime/10 border-sg-neon-lime/30">
              <h2 className="heading-md mb-4 text-sg-light">Key Learnings</h2>
              <p className="text-sg-light-muted leading-relaxed">
                {study.keyLearnings}
              </p>
            </div>
          )}
        </div>

        <div className="glass-card p-8 bg-sg-neon-lime/10 border-sg-neon-lime/30">
          <h2 className="heading-md mb-4 text-sg-light">Ready to Get Similar Results?</h2>
          <p className="text-sg-light-muted mb-6">
            Let's talk about how we can help your business achieve similar outcomes.
          </p>
          <Link
            href="/singlegrain/contact"
            className="inline-block px-8 py-4 bg-sg-neon-lime text-sg-dark rounded-lg font-semibold hover:bg-sg-neon-lime/90 transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </div>
    </div>
  );
}

