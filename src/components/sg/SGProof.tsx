"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/lib/content";

export default function SGProof() {
  const featuredStudies = caseStudies.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Proof That Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real results from companies that trust us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-950 p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {study.results.map((result, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {result.metric}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {study.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {study.client} • {study.industry}
              </p>
              <Link
                href={`/sg/case-studies/${study.id}`}
                className="text-sm font-semibold text-gray-900 dark:text-white hover:underline"
              >
                Read case study →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/sg/case-studies"
            className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

