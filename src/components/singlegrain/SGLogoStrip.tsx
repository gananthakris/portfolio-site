"use client";

import { motion } from "framer-motion";

const companies = [
  "Nextiva",
  "Learning A-Z",
  "LS Building Products",
  "Klassy Network",
  "Schumacher Homes",
  "Wine Deals",
];

export default function SGLogoStrip() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-md mb-4 text-sg-light-muted">
            Companies We've Helped Grow
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-6 py-4 glass-card"
            >
              <span className="text-sg-light-muted font-medium text-sm">
                {company}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

