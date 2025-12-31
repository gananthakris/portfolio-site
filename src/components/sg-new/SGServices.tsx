"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/sg-content";

export default function SGServices() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tech-enabled marketing services that scale with your growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/sg-new/services/${service.id}`}
                className="block card card-hover h-full group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="heading-md mb-3 text-gray-900 group-hover:text-sg-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-sm font-semibold text-sg-blue group-hover:underline">
                  Learn more →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/sg-new/services"
            className="btn-primary"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

