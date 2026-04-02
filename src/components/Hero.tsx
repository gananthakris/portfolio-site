"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { TypingEffect } from "./TypingEffect";
import { ParticleBackground } from "./ParticleBackground";
import { HolographicAvatar } from "./HolographicAvatar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#08070a] cyber-grid">
      {/* Neon canvas particles */}
      <ParticleBackground />

      {/* Deep ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(251,146,60,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ x: [0, -80, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(217,119,6,0.05) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        {/* Holographic 3D Avatar */}
        <motion.div variants={itemVariants} className="mb-10 inline-block">
          <HolographicAvatar />
        </motion.div>

        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-widest uppercase text-[#fbbf24] border border-[#f59e0b]/30 bg-[#f59e0b]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-white/90">
            <TypingEffect text="Hi, I'm " speed={80} />
          </span>
          <span className="relative inline-block">
            {/* Glow halo under name */}
            <motion.span
              className="absolute -inset-3 rounded-xl blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.18), rgba(251,146,60,0.14))",
              }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <span
              className="relative neon-pulse"
              style={{
                background:
                  "linear-gradient(90deg, #fbbf24 0%, #fef3c7 30%, #fb923c 55%, #fbbf24 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradient-shift 4s linear infinite, amber-text-pulse 3s ease-in-out infinite alternate",
              }}
            >
              <TypingEffect text="Gokulkrishna A" speed={100} />
            </span>
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl mb-3 font-mono tracking-wide neon-amber"
        >
          Applied AI · Product · GTM
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-white/40 mb-3 italic font-mono"
        >
          From insight to launch — shipping AI products that move markets
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          5+ years bridging technical depth and product thinking — discovering user problems, defining AI-powered solutions, and driving them to market.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <MagneticButton
            href="/#projects"
            className="glass-btn-accent px-8 py-4 rounded-xl text-white font-semibold font-mono tracking-wide"
          >
            View My Projects
          </MagneticButton>
          <MagneticButton
            href="/resume.pdf"
            download="Gokulkrishna_A_Resume.pdf"
            className="glass-btn px-8 py-4 rounded-xl text-[#00f7ff] font-semibold font-mono tracking-wide"
            onClick={async (e) => {
              try {
                const response = await fetch("/resume.pdf", { method: "HEAD" });
                if (!response.ok) {
                  e.preventDefault();
                  window.location.href =
                    "mailto:gananthakris@binghamton.edu?subject=Resume Request&body=Hi Gokulkrishna, I'd like to request your resume.";
                }
              } catch {
                e.preventDefault();
                window.location.href =
                  "mailto:gananthakris@binghamton.edu?subject=Resume Request&body=Hi Gokulkrishna, I'd like to request your resume.";
              }
            }}
          >
            Download Resume
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-8 justify-center mt-14"
        >
          <motion.a
            href="https://www.linkedin.com/in/agokulakrishna"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="text-white/40 hover:text-[#00f7ff] transition-colors"
            style={{ filter: "drop-shadow(0 0 0px transparent)" }}
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://github.com/gananthakris"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="text-white/40 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-white/25 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-[#fbbf24]/40 to-transparent"
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
