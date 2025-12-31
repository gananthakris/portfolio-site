import { services } from "@/lib/singlegrain-content";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Single Grain",
  description: "Tech-enabled marketing services: SEO, Paid Media, Content, CRO, and AI-forward growth systems.",
};

export default function ServicesPage() {
  return (
    <div className="grain-bg pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6 text-sg-light">
            Services
          </h1>
          <p className="text-lg text-sg-light-muted max-w-3xl mx-auto">
            Tech-enabled marketing services that scale with your growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/singlegrain/services/${service.id}`}
              className="block glass-card glass-card-hover p-8 h-full group"
            >
              <h2 className="heading-md mb-4 text-sg-light group-hover:text-sg-neon-lime transition-colors">
                {service.title}
              </h2>
              <p className="text-sg-light-muted mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="text-sm font-semibold text-sg-neon-lime group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

