"use client";

import { motion } from "framer-motion";
import { newsletter } from "@/lib/singlegrain-content";

export default function SGNewsletter() {
  return (
    <section id="newsletter" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <h2 className="heading-lg mb-4 text-sg-light">
            {newsletter.headline}
          </h2>
          <p className="text-lg text-sg-light-muted mb-8 max-w-2xl mx-auto">
            {newsletter.description}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-sg-dark-lighter border border-white/10 rounded-lg text-sg-light placeholder-sg-light-muted focus:outline-none focus:border-sg-neon-lime"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-sg-neon-lime text-sg-dark rounded-lg font-semibold hover:bg-sg-neon-lime/90 transition-colors"
            >
              {newsletter.cta}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

