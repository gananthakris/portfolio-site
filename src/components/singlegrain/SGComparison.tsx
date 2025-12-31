"use client";

import { motion } from "framer-motion";
import { comparison } from "@/lib/singlegrain-content";

export default function SGComparison() {
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
            What Sets Us Apart
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Agencies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="heading-md mb-6 text-sg-light-muted">
              {comparison.traditional.title}
            </h3>
            <ul className="space-y-4">
              {comparison.traditional.points.map((point, idx) => (
                <li key={idx} className="flex items-start text-sg-light-muted">
                  <span className="text-sg-light-muted mr-3 mt-1">×</span>
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
            className="glass-card p-8 border-sg-neon-lime/30"
          >
            <h3 className="heading-md mb-6 text-sg-neon-lime">
              {comparison.singleGrain.title}
            </h3>
            <ul className="space-y-4">
              {comparison.singleGrain.points.map((point, idx) => (
                <li key={idx} className="flex items-start text-sg-light">
                  <span className="text-sg-neon-lime mr-3 mt-1 font-bold">✓</span>
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

