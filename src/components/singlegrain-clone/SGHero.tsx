"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { hero, pillars } from "@/lib/singlegrain-real-content";

export default function SGHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-hero mb-6 text-gray-900 leading-tight max-w-5xl mx-auto">
              {hero.headline}
            </h1>

            <p className="text-xl md:text-2xl text-sg-blue mb-8 font-semibold">
              {hero.proofLine}
            </p>

            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/singlegrain-clone/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                {hero.primaryCTA}
              </Link>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm">{pillar.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Video CTA */}
            <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">{hero.videoCTA}</p>
              <p className="font-semibold text-gray-900">{hero.videoSpeaker}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

