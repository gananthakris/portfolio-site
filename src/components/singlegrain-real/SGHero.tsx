"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { hero, pillars } from "@/lib/singlegrain-real-content";

export default function SGHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl mb-6 text-gray-900 leading-tight">
            {hero.headline}
          </h1>

          <p className="text-xl md:text-2xl text-sg-primary mb-8 font-semibold">
            {hero.proofLine}
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/singlegrain-real/contact"
              className="btn-primary text-lg px-8 py-4"
            >
              {hero.primaryCTA}
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card text-center"
              >
                <h3 className="font-bold text-lg mb-2 text-gray-900">{pillar.title}</h3>
                <p className="text-gray-600 text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-gray-50 rounded-xl max-w-2xl mx-auto">
            <p className="text-gray-700 mb-2">{hero.videoCTA}</p>
            <p className="font-semibold text-gray-900">{hero.videoSpeaker}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

