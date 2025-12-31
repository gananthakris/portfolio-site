"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/singlegrain-real-content";

export default function SGServicesShowcase() {
  return (
    <section className="section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to drive growth and maximize ROI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-card h-full">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="heading-card mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  href={`/singlegrain-clone/services/${service.id}`}
                  className="text-sm font-semibold text-sg-blue hover:underline inline-block"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

