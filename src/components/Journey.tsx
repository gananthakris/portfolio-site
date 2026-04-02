"use client";

import { motion } from "framer-motion";

const journeySteps = [
  {
    year: "2019-2020",
    title: "RPA Engineer",
    description: "Started building automation solutions with WorkFusion and Python",
    icon: "🤖",
  },
  {
    year: "2020-2022",
    title: "RPA Developer",
    description: "Developed 20+ production bots, integrated APIs, and scaled automation",
    icon: "⚡",
  },
  {
    year: "2022-2024",
    title: "Technical Lead",
    description: "Led teams, saved $300K+ annually, and architected enterprise solutions",
    icon: "🚀",
  },
  {
    year: "2024-Present",
    title: "MS in CS + AI",
    description: "Expanding into AI, ML, and full-stack development at Binghamton University",
    icon: "🧠",
  },
];

const currentFocus = [
  "LLMs + RAG",
  "AI Agents",
  "Intelligent Automation",
  "Full-Stack Development",
];

export function Journey() {
  return (
    <section className="py-20 bg-[#0d0c0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-400 to-orange-400 hidden md:block"></div>
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-0 md:pl-20"
              >
                <div className="absolute left-0 md:left-6 top-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 border-4 border-white dark:border-zinc-900 shadow-lg"></div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white/5 border border-amber-900/15 rounded-xl p-6 border border-gray-200/50 dark:border-gray-800/50"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{step.icon}</span>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-amber-400">
                          {step.year}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-amber-900/10 rounded-2xl p-8 border border-amber-800/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Currently Exploring → <span className="text-amber-400">LLMs + RAG + Agents</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {currentFocus.map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-lg bg-[#0d0c0f] text-white font-medium shadow-sm border border-gray-200 dark:border-gray-800 hover:border-amber-500/40 transition-colors"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

