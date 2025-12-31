"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "ROI-Focused",
    description: "Every strategy is designed to maximize your return on investment. We measure what matters.",
    icon: "📊",
  },
  {
    title: "Expert-Led",
    description: "Industry veterans with proven track records, not junior teams. You get senior expertise from day one.",
    icon: "👥",
  },
  {
    title: "AI-Forward",
    description: "AI is foundational to how we work. We leverage cutting-edge tools to stay ahead of the curve.",
    icon: "🤖",
  },
  {
    title: "Scalable Systems",
    description: "We build systems that grow with you, not campaigns that need constant hand-holding.",
    icon: "🚀",
  },
];

export default function SGWhyChoose() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 text-gray-900">
            Why Choose Single Grain?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another agency. We're your growth partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="heading-md mb-3 text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

