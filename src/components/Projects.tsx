"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "SplitBill — AI-Powered Bill Splitter",
    description:
      "Mobile-first web app that scans any bill with your camera, uses OCR + AI to parse line items, and splits costs fairly across people.",
    problem:
      "Splitting bills at restaurants or shared expenses is tedious and error-prone — especially across multiple people with different orders.",
    solution:
      "Built an AI-native product using Tesseract.js for on-device OCR, Supabase for real-time data, and a clean UX that lets users assign items and split in seconds.",
    impact: [
      "Eliminates manual re-entry — photo to split in under 10 seconds",
      "Runs OCR client-side with no image upload (privacy-first design decision)",
      "Persistent split history via Supabase — usable across group trips",
    ],
    tech: ["Next.js 14", "Supabase", "Tesseract.js", "TypeScript", "Tailwind CSS"],
    status: "Completed",
    image: null,
    github: "https://github.com/gananthakris",
    demo: null,
  },
  {
    id: 2,
    title: "Healthcare Ops Automation Platform",
    description:
      "Owned discovery, spec, and delivery of an automation platform that eliminated manual workflows across 3 healthcare back-office teams.",
    problem:
      "Healthcare ops teams were spending 60%+ of their time on repetitive data entry, reconciliation, and reporting — leaving no capacity for patient-facing work.",
    solution:
      "Led stakeholder discovery to map pain points, defined product requirements, and shipped a suite of automation bots integrated with the existing EHR and reporting systems.",
    impact: [
      "Reduced average process handling time significantly across 3 operational teams",
      "Standardized exception handling and audit logging — adopted as org-wide platform standard",
      "Full lifecycle ownership: discovery → spec → build → launch → iteration",
    ],
    tech: ["Automation Anywhere", "Python", "SQL", "API Integration"],
    status: "Completed",
    image: null,
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: "GTM Intelligence Layer — CRM Automation",
    description:
      "Built real-time GTM intelligence integrations connecting CRM, back-office data, and alerting — giving sales teams live pipeline visibility.",
    problem:
      "Sales and GTM teams at TaskUs were flying blind — CRM data was stale, manual updates lagged by hours, and reps had no real-time signal on deal status or escalations.",
    solution:
      "Integrated Salesforce, Oracle CRM, and Google Chat APIs to create a live data pipeline — auto-populating CRM fields and surfacing alerts to reps in real time.",
    impact: [
      "GTM teams gained real-time pipeline visibility without manual CRM updates",
      "Automated 20+ back-office workflows — freeing ops team capacity for higher-value work",
      "Reduced time-to-alert on critical deal events from hours to seconds",
    ],
    tech: ["Python", "Salesforce API", "Oracle CRM", "Google Chat API", "Automation Anywhere"],
    status: "Completed",
    image: null,
    github: null,
    demo: null,
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#0d0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 mx-auto rounded-full"></div>
          <p className="text-lg text-white/45 mt-4 max-w-2xl mx-auto">
            Projects and work I've been building and learning from
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
              <div className="bg-[#0d0c0f] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-800/50 group">
                {/* Project Image/Thumbnail with Hover Effect */}
                <div className="relative h-48 bg-gradient-to-br from-amber-600 via-amber-500 to-orange-500 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold opacity-20 group-hover:opacity-30 transition-opacity">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-white/90 rounded-lg backdrop-blur-sm"
                            aria-label="View on GitHub"
                          >
                            <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                            </svg>
                          </motion.a>
                        )}
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-white/90 rounded-lg backdrop-blur-sm"
                            aria-label="View Live Demo"
                          >
                            <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
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
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/45 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs font-medium bg-amber-900/20 text-amber-300/80 border border-amber-900/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 rounded text-xs font-medium bg-amber-900/20 text-amber-300/80 border border-amber-900/30">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors">
                      Learn more →
                    </button>
                    {(project.github || project.demo) && (
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                            aria-label="GitHub"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                            </svg>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            aria-label="Live Demo"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
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
                className="bg-[#0d0c0f] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {(() => {
                  const project = projects.find((p) => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">
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
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-800"
                          >
                            {project.github && (
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                                </svg>
                                View on GitHub
                              </motion.a>
                            )}
                            {project.demo && (
                              <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 text-white font-medium hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 transition-all flex items-center justify-center gap-2"
                              >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                              </motion.a>
                            )}
                          </motion.div>
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

