"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { contact } from "@/lib/singlegrain-real-content";

export default function SGCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-sg-primary to-sg-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-6 text-white">
            {contact.headline}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {contact.subheadline}
          </p>
          <p className="text-lg text-blue-100 mb-8">
            {contact.description}
          </p>
          <Link
            href="/singlegrain-real/contact"
            className="inline-block px-8 py-4 bg-white text-sg-primary rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            {contact.form.submit}
          </Link>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {contact.trustBullets.map((bullet, idx) => (
              <span key={idx} className="text-sm text-blue-100">
                {bullet}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

