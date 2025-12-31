"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/lib/singlegrain-real-content";

export default function SGCaseStudies() {
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
            Companies We've Helped Grow
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/singlegrain-clone/case-studies/${study.id}`}
                className="block bg-white rounded-xl p-8 border border-gray-200 hover:border-sg-blue hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="text-3xl font-bold text-sg-blue mb-2">
                    {study.metric}
                  </div>
                </div>
                <h3 className="heading-card mb-2 text-gray-900 group-hover:text-sg-blue transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {study.subtitle}
                </p>
                <div className="text-sm font-semibold text-sg-blue group-hover:underline">
                  Read Full Case Study →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

