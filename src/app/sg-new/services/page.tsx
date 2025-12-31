import { services } from "@/lib/sg-content";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Single Grain",
  description: "Tech-enabled marketing services: SEO, Paid Media, Content Marketing, and Conversion Rate Optimization.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6 text-gray-900">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tech-enabled marketing services that scale with your growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/sg-new/services/${service.id}`}
              className="block card card-hover h-full group"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="heading-md mb-4 text-gray-900 group-hover:text-sg-blue transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="text-sm font-semibold text-sg-blue group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

