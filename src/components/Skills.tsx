"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    category: "Applied AI",
    skills: [
      { name: "LLM Applications", level: 80, recentlyUsed: true },
      { name: "AI Agents & RAG", level: 78, recentlyUsed: true },
      { name: "Prompt Engineering", level: 82, recentlyUsed: true },
      { name: "OCR & Document AI", level: 85, recentlyUsed: true },
    ],
  },
  {
    category: "Product Management",
    skills: [
      { name: "Product Discovery", level: 82, recentlyUsed: true },
      { name: "Roadmapping & Specs", level: 80, recentlyUsed: true },
      { name: "User Research", level: 75, recentlyUsed: true },
      { name: "Stakeholder Alignment", level: 85, recentlyUsed: true },
    ],
  },
  {
    category: "GTM & Strategy",
    skills: [
      { name: "GTM Planning", level: 72, recentlyUsed: true },
      { name: "CRM & Sales Tools", level: 88, recentlyUsed: true },
      { name: "Process Analysis", level: 92, recentlyUsed: true },
      { name: "Metrics & Success KPIs", level: 80, recentlyUsed: true },
    ],
  },
  {
    category: "Automation",
    skills: [
      { name: "Automation Anywhere", level: 95, recentlyUsed: false },
      { name: "Python Automation", level: 90, recentlyUsed: true },
      { name: "WorkFusion", level: 85, recentlyUsed: false },
      { name: "API & Workflow Integration", level: 88, recentlyUsed: true },
    ],
  },
  {
    category: "Build Stack",
    skills: [
      { name: "Python · SQL", level: 90, recentlyUsed: true },
      { name: "Next.js · React", level: 80, recentlyUsed: true },
      { name: "TypeScript", level: 82, recentlyUsed: true },
      { name: "Supabase · Node.js", level: 78, recentlyUsed: true },
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
          className="text-white/10"
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
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-white">
          {Math.round(animatedProgress)}%
        </span>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#08070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Core Competencies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Applied AI · Product · GTM · Automation
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
              className="bg-[#0d0c0f] border-amber-900/20 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-800/50"
            >
              <h3 className="text-lg font-semibold text-white mb-6">
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
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-white">
                          {skill.name}
                        </p>
                        {skill.recentlyUsed && (
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-amber-900/20 text-amber-300">
                            Recent
                          </span>
                        )}
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          className="h-2 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400"
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

