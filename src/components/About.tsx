"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-[#0d0c0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-full blur-2xl opacity-30"></div>
              <Image
                src="/Gokul.jpeg"
                alt="Gokulkrishna A"
                width={300}
                height={300}
                className="relative rounded-full border-4 border-white dark:border-zinc-800 shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 mb-6 rounded-full"></div>
            <p className="text-lg text-white/70 leading-relaxed mb-4">
              I'm a{" "}
              <span className="font-semibold text-amber-500 dark:text-amber-400">
                CS grad student at Binghamton University
              </span>{" "}
              with 5+ years of hands-on experience shipping AI and automation products — from discovery to deployment. I've owned full product lifecycles, led cross-functional delivery, and built systems that measurably reduced operational cost and time.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-4">
              My edge is rare: I can talk to engineers, translate business problems into product specs, and think in GTM terms — positioning, adoption, and outcomes.{" "}
              <span className="font-semibold text-amber-400 dark:text-amber-300">
                Applied AI, LLM-powered products, and AI-native GTM tools
              </span>{" "}
              are where I'm most excited to work — especially at the intersection of product strategy and market execution.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              I'm actively targeting roles in <span className="font-semibold text-amber-500 dark:text-amber-400">Applied AI Product Management</span>, <span className="font-semibold text-amber-400 dark:text-amber-300">GTM Strategy</span>, and <span className="font-semibold text-amber-500 dark:text-amber-400">AI Solutions</span> — where technical depth meets market impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

