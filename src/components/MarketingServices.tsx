"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "SEO Services",
    description: "Comprehensive search engine optimization including technical SEO, programmatic SEO, and AI-powered optimization strategies.",
    icon: "🔍",
    features: ["Technical SEO", "Programmatic SEO", "AI SEO", "Content Optimization"],
  },
  {
    title: "Paid Advertising",
    description: "Data-driven paid media campaigns across Google Ads, Facebook, LinkedIn, and emerging platforms to maximize ROI.",
    icon: "📢",
    features: ["Google Ads", "LinkedIn Ads", "Facebook Ads", "TikTok Advertising"],
  },
  {
    title: "Content Marketing",
    description: "Conversion-driven content strategies that engage audiences, build authority, and drive measurable business results.",
    icon: "✍️",
    features: ["Content Strategy", "Blog Writing", "Video Marketing", "SEO Content"],
  },
  {
    title: "CRO Services",
    description: "Optimize every step of your user journey to increase conversions and drive more revenue through data-driven testing.",
    icon: "📈",
    features: ["Conversion Optimization", "A/B Testing", "Landing Pages", "Funnel Optimization"],
  },
  {
    title: "Data & Analytics",
    description: "Uncover insights that drive growth with in-depth analysis and actionable data to maximize your marketing ROI.",
    icon: "📊",
    features: ["Analytics Setup", "Data Analysis", "ROI Tracking", "Performance Reports"],
  },
  {
    title: "AI Marketing",
    description: "Cutting-edge AI-powered marketing solutions that help you stay ahead in the rapidly evolving digital landscape.",
    icon: "🤖",
    features: ["AI Content", "LLM Optimization", "AI Tools", "Automation"],
  },
];

export default function MarketingServices() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to drive growth and maximize ROI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

