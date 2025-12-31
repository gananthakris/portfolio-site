"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Single Grain was instrumental to our growth. They're especially ahead of the game with AI.",
    author: "Yaniv Masjedi",
    role: "Co-Founder & CMO, Nextiva",
    rating: 5,
  },
  {
    quote: "Increased our organic traffic by 67% and achieved visibility across 5 major AI engines. Outstanding results!",
    author: "LS Building Products",
    role: "Client",
    rating: 5,
  },
  {
    quote: "Generated $48K in profit with a single email campaign. Their strategies are truly transformative.",
    author: "Klassy Network",
    role: "Client",
    rating: 5,
  },
  {
    quote: "Increased revenue by 65% using paid media in 2024. The team's expertise is unmatched.",
    author: "Learning A-Z",
    role: "Client",
    rating: 5,
  },
];

const caseStudies = [
  {
    title: "How Klassy Network Generated $48K in Profit",
    description: "With a Single Email Campaign",
    metric: "$48K Profit",
  },
  {
    title: "Increased Organic Traffic by 67%",
    description: "Achieved Visibility Across 5 Major AI Engines",
    metric: "67% Growth",
  },
  {
    title: "Increased Revenue by 65%",
    description: "Using Paid Media in 2024",
    metric: "65% Revenue",
  },
];

export default function MarketingTestimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Companies We've Helped Grow
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-xl text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl font-bold mb-2">{study.metric}</div>
              <h3 className="text-xl font-bold mb-2">{study.title}</h3>
              <p className="text-blue-100">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

