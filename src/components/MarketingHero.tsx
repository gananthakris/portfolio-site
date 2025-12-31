"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MarketingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            We are the marketing partner that{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              companies never outgrow.
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">Average 3.2x ROI</span>
            </span>
            <span>•</span>
            <span>Trusted by 500+ companies</span>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            We're your proactive marketing team that helps you get found everywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Work With Us
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold text-lg border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">ROI-focused</h3>
              <p className="text-gray-600 dark:text-gray-400">Every strategy is designed to maximize your return on investment.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Expert-led</h3>
              <p className="text-gray-600 dark:text-gray-400">Led by industry veterans with proven track records.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">AI-forward</h3>
              <p className="text-gray-600 dark:text-gray-400">Leveraging cutting-edge AI to stay ahead of the curve.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

