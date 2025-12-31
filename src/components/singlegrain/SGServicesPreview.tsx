"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/singlegrain-content";

export default function SGServicesPreview() {
  const previewServices = services.slice(0, 4);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4 text-sg-light">
            Services
          </h2>
          <p className="text-lg text-sg-light-muted max-w-2xl mx-auto">
            Tech-enabled marketing services that scale with your growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/singlegrain/services/${service.id}`}
                className="block glass-card glass-card-hover p-6 h-full group"
              >
                <h3 className="heading-md mb-3 text-sg-light group-hover:text-sg-neon-lime transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-sg-light-muted mb-4">
                  {service.description}
                </p>
                <div className="text-sm font-semibold text-sg-neon-lime group-hover:underline">
                  Learn more →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/singlegrain/services"
            className="inline-block px-8 py-4 bg-sg-neon-lime text-sg-dark rounded-lg font-semibold hover:bg-sg-neon-lime/90 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

