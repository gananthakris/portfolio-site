"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/sg-content";

const testimonials = [
  {
    quote: "Single Grain was instrumental to our growth. They're especially ahead of the game with AI.",
    author: "Yaniv Masjedi",
    role: "Co-Founder & CMO, Nextiva",
    company: "Nextiva",
  },
  {
    quote: "Increased our organic traffic by 67% and achieved visibility across 5 major AI engines. Outstanding results!",
    author: "LS Building Products",
    role: "Client",
    company: "LS Building Products",
  },
  {
    quote: "The combination of expert strategy and AI tools meant we could test and iterate faster than ever.",
    author: "E-commerce Brand",
    role: "VP Marketing",
    company: "E-commerce Brand",
  },
];

export default function SGTestimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 text-gray-900">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

