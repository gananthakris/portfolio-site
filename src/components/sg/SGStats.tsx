"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3.2x", label: "Average ROI", sublabel: "For our clients" },
  { value: "500+", label: "Companies", sublabel: "Trust us" },
  { value: "67%", label: "Traffic Growth", sublabel: "Average increase" },
];

export default function SGStats() {
  return (
    <section className="py-20 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-3">
                {stat.value}
              </div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

