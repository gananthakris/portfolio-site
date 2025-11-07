"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    category: "RPA Platforms",
    skills: [
      { name: "Automation Anywhere (AA360)", level: 95 },
      { name: "WorkFusion", level: 85 },
      { name: "UiPath", level: 60 },
    ],
  },
  {
    category: "Programming & Automation",
    skills: [
      { name: "Python", level: 90 },
      { name: "VBA · Excel Automation", level: 95 },
      { name: "Web Automation", level: 85 },
      { name: "API Integration", level: 88 },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", level: 70 },
      { name: "AI Agents", level: 75 },
      { name: "RAG Systems", level: 72 },
    ],
  },
  {
    category: "Full-Stack Development",
    skills: [
      { name: "Next.js · React", level: 80 },
      { name: "TypeScript", level: 82 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    category: "Development Practices",
    skills: [
      { name: "SDLC", level: 95 },
      { name: "Unit Testing", level: 85 },
      { name: "Hypercare & Support", level: 95 },
    ],
  },
];

function ProgressRing({ progress, size = 80 }: { progress: number; size?: number }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
    return () => clearTimeout(timer);
  }, [progress]);

  const offset = circumference - (animatedProgress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          className="text-gray-200 dark:text-gray-800"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          {Math.round(animatedProgress)}%
        </span>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Grouped by category: Languages, RPA Tools, AI/ML, and Web Development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-800/50"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.1,
                    }}
                    className="flex items-center gap-4"
                  >
                    <ProgressRing progress={skill.level} size={70} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                        {skill.name}
                      </p>
                      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

