"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SGContactCTA() {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <h2 className="heading-lg mb-4 text-sg-light">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-sg-light-muted mb-8 max-w-2xl mx-auto">
            Let's talk about how we can help you grow. We typically respond the same day.
          </p>
          <Link
            href="/singlegrain/contact"
            className="inline-block px-8 py-4 bg-sg-neon-lime text-sg-dark rounded-lg font-semibold text-lg hover:bg-sg-neon-lime/90 transition-colors neon-glow"
          >
            Work With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

