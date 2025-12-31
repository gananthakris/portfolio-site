"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Friendly Chat",
    duration: "1-2 hours",
    description: "We'll start by talking on the phone to get a sense of what your challenges are right now, what you've tried so far, and if we're the right full-service digital marketing agency for you. No hard selling. Promise.",
  },
  {
    number: "2",
    title: "Opportunities Analysis",
    duration: "1-2 weeks",
    description: "If we think we can help you, we'll put together Marketing Insights specifically for your company. Running your business through our experienced digital marketing agency analysis, we'll create an execution plan which maximizes all the opportunities we see for growth and specific KPIs.",
  },
  {
    number: "3",
    title: "Strategy Discussion",
    duration: "2-4 weeks",
    description: "We'll get you as many quick and early wins as possible, while setting up specific, long-term, scalable digital marketing goals.",
  },
  {
    number: "4",
    title: "Full Rollout",
    duration: "Up to 3 months",
    description: "We'll roll out our full execution plan, focusing on timely, tactical implementation, and setting up scalable growth opportunities. This frees you up to work on other high impact areas of your business.",
  },
  {
    number: "5",
    title: "Continuous Optimization",
    duration: "Ongoing",
    description: "Our online marketing team continually monitors your results at every step of the process, then leverages that to get you even more wins.",
  },
];

export default function MarketingMethodology() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Our Growth Methodology
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A proven process that delivers results at every stage
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2 md:mt-0">
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

