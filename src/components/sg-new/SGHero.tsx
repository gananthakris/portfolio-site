"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { hero } from "@/lib/sg-content";

export default function SGHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl mb-6 text-gray-900 leading-tight">
            {hero.headline}
          </h1>

          <p className="text-xl md:text-2xl text-sg-blue mb-8 font-semibold">
            {hero.subheadline}
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/sg-new/contact"
              className="btn-primary"
            >
              {hero.primaryCTA}
            </Link>
            <Link
              href="/sg-new/case-studies"
              className="btn-secondary"
            >
              {hero.secondaryCTA}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

