"use client";

import { motion } from "framer-motion";
import { whySingleGrain } from "@/lib/singlegrain-real-content";

export default function SGWhyChoose() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4 text-gray-900">
            {whySingleGrain.headline}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {whySingleGrain.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Agencies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="heading-md mb-6 text-gray-600">
              {whySingleGrain.comparison.traditional.title}
            </h3>
            <ul className="space-y-4">
              {whySingleGrain.comparison.traditional.points.map((point, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <span className="text-gray-400 mr-3 mt-1">×</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Single Grain */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card border-2 border-sg-primary"
          >
            <h3 className="heading-md mb-6 text-sg-primary">
              {whySingleGrain.comparison.singleGrain.title}
            </h3>
            <ul className="space-y-4">
              {whySingleGrain.comparison.singleGrain.points.map((point, idx) => (
                <li key={idx} className="flex items-start text-gray-900">
                  <span className="text-sg-primary mr-3 mt-1 font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

