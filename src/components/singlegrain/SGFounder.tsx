"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/singlegrain-content";

export default function SGFounder() {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <div className="mb-6">
            <h3 className="heading-md mb-2 text-sg-light">
              {about.founder.name}
            </h3>
            <p className="text-sg-light-muted mb-4">
              {about.founder.role}
            </p>
            <p className="text-sg-light leading-relaxed mb-6">
              {about.founder.bio}
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sg-light-muted mb-2">Host of:</p>
            <div className="flex flex-wrap gap-4">
              {about.founder.podcasts.map((podcast, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-sg-neon-lime/20 text-sg-neon-lime rounded-lg text-sm font-medium"
                >
                  {podcast}
                </span>
              ))}
            </div>
          </div>

          <div className="border-l-4 border-sg-neon-lime pl-6">
            <p className="text-lg text-sg-light italic">
              "{about.founder.quote}"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

