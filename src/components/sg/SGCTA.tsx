"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cta } from "@/lib/content";

export default function SGCTA() {
  return (
    <section className="py-20 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're your tech-enabled marketing partner. Let's talk about how we can help you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sg/contact"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              {cta.primary}
            </Link>
            <Link
              href="/sg/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              {cta.secondary}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

