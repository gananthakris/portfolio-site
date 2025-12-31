"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SGCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-sg-blue to-sg-blue-light text-white">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're your tech-enabled marketing partner. Let's talk about how we can help you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sg-new/contact"
              className="px-8 py-4 bg-white text-sg-blue rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Work With Us
            </Link>
            <Link
              href="/sg-new/case-studies"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              See Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

