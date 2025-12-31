import { services } from "@/lib/singlegrain-content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.id === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Single Grain`,
    description: service.description,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="grain-bg pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="heading-xl mb-6 text-sg-light">
            {service.title}
          </h1>
          <p className="text-xl text-sg-light-muted leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="space-y-12">
          <div className="glass-card p-8">
            <h2 className="heading-md mb-4 text-sg-light">Outcomes</h2>
            <ul className="space-y-3">
              {service.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start text-sg-light-muted">
                  <span className="text-sg-neon-lime mr-3 mt-1 font-bold">→</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8">
            <h2 className="heading-md mb-4 text-sg-light">Our Approach</h2>
            <p className="text-sg-light-muted leading-relaxed">
              {service.approach}
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="heading-md mb-4 text-sg-light">What You Get</h2>
            <ul className="space-y-3">
              {service.whatYouGet.map((item, idx) => (
                <li key={idx} className="flex items-start text-sg-light-muted">
                  <span className="text-sg-neon-lime mr-3 mt-1 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 border-sg-neon-lime/30">
            <h2 className="heading-md mb-4 text-sg-light">Typical Engagement</h2>
            <p className="text-sg-light-muted">
              {service.engagement}
            </p>
          </div>

          <div className="glass-card p-8 bg-sg-neon-lime/10 border-sg-neon-lime/30">
            <h2 className="heading-md mb-4 text-sg-light">Ready to Get Started?</h2>
            <p className="text-sg-light-muted mb-6">
              Let's talk about how {service.shortTitle} can help your business grow.
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
    </div>
  );
}

