import { services } from "@/lib/sg-content";
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
    <div className="pt-20 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="heading-xl mb-6 text-gray-900">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="space-y-12">
          <div className="card">
            <h2 className="heading-md mb-6 text-gray-900">What You Get</h2>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="text-sg-blue mr-3 mt-1 font-bold text-xl">✓</span>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2 className="heading-md mb-6 text-gray-900">Expected Outcomes</h2>
            <ul className="space-y-4">
              {service.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="text-sg-accent mr-3 mt-1 font-bold text-xl">→</span>
                  <span className="text-lg">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card bg-gradient-to-r from-sg-blue to-sg-blue-light text-white">
            <h2 className="heading-md mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Let's talk about how {service.shortTitle} can help your business grow.
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
    </div>
  );
}

