import { services, cta } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return services.items.map((service) => ({
    slug: service.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.items.find((s) => s.id === params.slug);
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
  const service = services.items.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-20 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {service.description}
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            What We Offer
          </h2>
          <ul className="space-y-4">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
              >
                <span className="text-gray-900 dark:text-white mr-3 font-bold text-xl">
                  →
                </span>
                <span className="text-gray-700 dark:text-gray-300 text-lg">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 bg-gray-900 dark:bg-black text-white rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">
            Let's talk about how {service.shortTitle} can help your business grow.
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

