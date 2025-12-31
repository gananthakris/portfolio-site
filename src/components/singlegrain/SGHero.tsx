"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { hero } from "@/lib/singlegrain-content";

export default function SGHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-blob bg-sg-neon-lime/20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-blob bg-sg-neon-cyan/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl mb-6 text-sg-light">
            {hero.headline}
          </h1>

          <p className="text-xl md:text-2xl text-sg-neon-lime mb-8 font-mono">
            {hero.proofLine}
          </p>

          <p className="text-lg md:text-xl text-sg-light-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/singlegrain/contact"
              className="px-8 py-4 bg-sg-neon-lime text-sg-dark rounded-lg font-semibold text-lg hover:bg-sg-neon-lime/90 transition-all duration-300 neon-glow"
            >
              {hero.primaryCTA}
            </Link>
            <Link
              href="/singlegrain/case-studies"
              className="px-8 py-4 bg-transparent border-2 border-sg-neon-lime text-sg-neon-lime rounded-lg font-semibold text-lg hover:bg-sg-neon-lime/10 transition-all duration-300"
            >
              {hero.secondaryCTA}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

