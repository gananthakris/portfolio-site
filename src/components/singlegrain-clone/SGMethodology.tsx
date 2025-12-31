"use client";

import { motion } from "framer-motion";
import { methodology } from "@/lib/singlegrain-real-content";

export default function SGMethodology() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-4 text-gray-900">
            Discover Our Growth Methodology
          </h2>
        </motion.div>

        <div className="space-y-6">
          {methodology.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-sg-blue flex items-center justify-center text-white text-2xl font-bold">
                  {step.step}
                </div>
              </div>
              <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="heading-card text-gray-900">
                    {step.title}
                  </h3>
                  <span className="text-sm font-semibold text-sg-blue mt-2 md:mt-0">
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

