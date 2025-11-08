"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { TypingEffect } from "./TypingEffect";
import { ParticleBackground } from "./ParticleBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8 inline-block"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative">
            <Image
              src="/Gokul.jpeg"
              alt="Gokulkrishna A - AI Automation Engineer"
              width={200}
              height={200}
              className="rounded-full border-4 border-white dark:border-zinc-800 shadow-2xl ring-4 ring-blue-500/20 dark:ring-purple-500/20"
              priority
            />
          </div>
        </motion.div>

        {/* Animated Headline with Typing Effect */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-gray-900 dark:text-white">
            <TypingEffect text="Hi, I'm " speed={80} />
          </span>
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
            <TypingEffect text="Gokulkrishna A" speed={100} />
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium"
        >
          AI & Automation Engineer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-2 max-w-3xl mx-auto italic"
        >
          Turning complexity into intelligent systems
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Building intelligent systems that save thousands of hours & drive
          efficiency.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <MagneticButton
            href="/#projects"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            View My Projects
          </MagneticButton>
          <MagneticButton
            href="/resume.pdf"
            download
            className="px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all"
          >
            Download Resume
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center mt-12"
        >
          <motion.a
            href="https://www.linkedin.com/in/agokulakrishna"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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
      </motion.div>
    </section>
  );
}

