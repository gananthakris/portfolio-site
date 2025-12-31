import { services } from "@/lib/content";
import Link from "next/link";

export const metadata = {
  title: "Services | Single Grain",
  description: "Tech-enabled marketing services: SEO, Paid Media, Content, CRO, Demand Gen, and AI Marketing.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {services.headline}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {services.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service) => (
            <Link
              key={service.id}
              href={`/sg/services/${service.id}`}
              className="block p-8 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-gray-700 transition-all duration-300 h-full group"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-gray-900 dark:text-white mr-2 font-bold">
                      →
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

