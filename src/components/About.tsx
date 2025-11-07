"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-900">
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30"></div>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              From building production-grade RPA bots that saved{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                $300K+ annually
              </span>{" "}
              to pursuing my Master's in Computer Science at{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Binghamton University
              </span>
              , my journey has been about transforming automation into intelligent
              systems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              With over five years of experience in Automation Anywhere, WorkFusion,
              and Python, I've led teams, architected scalable solutions, and delivered
              measurable business impact. Now, I'm expanding into{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                AI and full-stack development
              </span>
              , exploring machine learning, intelligent agents, and generative systems
              to create automation that thinks.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm actively seeking opportunities where I can combine my RPA expertise
              with emerging AI technologies to build the next generation of intelligent
              automation solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

