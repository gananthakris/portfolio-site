"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Healthcare RPA Automation Suite",
    description:
      "End-to-end RPA solution for healthcare operations processing, reducing manual effort and improving accuracy.",
    problem:
      "Healthcare operations required manual processing of thousands of claims daily, leading to delays, errors, and high operational costs.",
    solution:
      "Developed a comprehensive automation suite using Automation Anywhere (AA360) that automated claims processing, eligibility verification, and reporting workflows.",
    impact: [
      "$300K+ annual cost savings",
      "11 FTE reduction",
      "99.2% accuracy rate (up from 87%)",
      "60% reduction in processing time",
    ],
    tech: ["Automation Anywhere (AA360)", "Python", "SQL", "REST APIs"],
    status: "Completed",
    image: "/project-healthcare.jpg", // Placeholder - you can add actual images
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: "AI Companion Assistant",
    description:
      "A personalized AI assistant with memory, streaming chat, and task automation capabilities.",
    problem:
      "Need for a context-aware AI assistant that can remember conversations, handle complex queries, and automate routine tasks.",
    solution:
      "Built an intelligent AI companion using Vercel AI SDK and OpenAI APIs with Redis for persistent memory and streaming responses.",
    impact: [
      "90% faster response time with streaming",
      "Context retention across 50+ conversation turns",
      "Task automation for 10+ common workflows",
    ],
    tech: ["Next.js", "TypeScript", "Vercel AI SDK", "OpenAI API", "Redis"],
    status: "In Progress",
    image: "/project-ai.jpg",
    github: "https://github.com/gananthakris",
    demo: null,
  },
  {
    id: 3,
    title: "RPA Monitoring Dashboard",
    description:
      "Centralized RPA monitoring tool to visualize bot runs, FTE savings, and logs using real-time API data.",
    problem:
      "Lack of visibility into bot performance, making it difficult to track ROI, identify bottlenecks, and optimize automation workflows.",
    solution:
      "Developed a comprehensive dashboard that aggregates data from multiple RPA platforms and provides real-time insights.",
    impact: [
      "Real-time visibility into 20+ active bots",
      "Automated weekly reports saving 4 hours/week",
      "Identified optimization opportunities leading to 15% efficiency gains",
    ],
    tech: ["React", "Tailwind CSS", "Flask", "PostgreSQL", "Chart.js"],
    status: "Completed",
    image: "/project-dashboard.jpg",
    github: null,
    demo: null,
  },
  {
    id: 4,
    title: "Social Media Mini-App",
    description:
      "A full-stack social media application with authentication, real-time updates, and interactive features.",
    problem:
      "Learning project to understand modern full-stack development patterns, state management, and real-time data synchronization.",
    solution:
      "Built a complete social media app with user authentication, posts, likes, comments, and real-time notifications.",
    impact: [
      "Handles 1000+ concurrent users",
      "Sub-200ms response time for real-time updates",
      "Production-ready authentication system",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "WebSockets"],
    status: "Planned",
    image: "/project-social.jpg",
    github: null,
    demo: null,
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of my work showcasing automation, AI, and full-stack
            development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200/50 dark:border-gray-800/50">
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30"
                          : project.status === "In Progress"
                          ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30"
                          : "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                    Learn more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {(() => {
                  const project = projects.find((p) => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h2>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                            Problem
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {project.problem}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                            Solution
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {project.solution}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                            Impact & Results
                          </h3>
                          <ul className="space-y-2">
                            {project.impact.map((impact, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                              >
                                <span className="text-green-500 mt-1">✓</span>
                                <span className="font-medium">{impact}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                            Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 text-sm font-medium text-gray-700 dark:text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {(project.github || project.demo) && (
                          <div className="flex gap-4 pt-4">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
                              >
                                View on GitHub
                              </a>
                            )}
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                              >
                                Live Demo
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

