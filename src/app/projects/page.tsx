"use client";

import React from "react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Healthcare RPA Automation Suite",
      description:
        "End-to-end RPA solution for healthcare operations processing, reducing manual effort and improving accuracy.",
      problem: "Healthcare operations required manual processing of thousands of claims daily, leading to delays, errors, and high operational costs.",
      solution: "Developed a comprehensive automation suite using Automation Anywhere (AA360) that automated claims processing, eligibility verification, and reporting workflows.",
      contributions: [
        "Architected and developed 15+ production bots handling 50K+ transactions monthly",
        "Built reusable framework components for error handling, logging, and credential management",
        "Created real-time monitoring dashboards for bot performance and exception tracking"
      ],
      impact: [
        "$300K+ annual cost savings",
        "11 FTE reduction",
        "99.2% accuracy rate (up from 87%)",
        "60% reduction in processing time"
      ],
      tech: ["Automation Anywhere (AA360)", "Python", "SQL", "REST APIs", "Excel Automation"],
      status: "Completed",
      statusColor: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30",
      link: null,
    },
    {
      title: "AI Companion Assistant",
      description:
        "A personalized AI assistant with memory, streaming chat, and task automation capabilities.",
      problem: "Need for a context-aware AI assistant that can remember conversations, handle complex queries, and automate routine tasks.",
      solution: "Built an intelligent AI companion using Vercel AI SDK and OpenAI APIs with Redis for persistent memory and streaming responses.",
      contributions: [
        "Implemented conversation memory using Redis for context retention",
        "Developed streaming chat interface with real-time response rendering",
        "Created task automation workflows integrated with the AI assistant"
      ],
      impact: [
        "90% faster response time with streaming",
        "Context retention across 50+ conversation turns",
        "Task automation for 10+ common workflows"
      ],
      tech: ["Next.js", "TypeScript", "Vercel AI SDK", "OpenAI API", "Redis"],
      status: "In Progress",
      statusColor: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30",
      link: null,
    },
    {
      title: "RPA Monitoring Dashboard",
      description:
        "Centralized RPA monitoring tool to visualize bot runs, FTE savings, and logs using real-time API data.",
      problem: "Lack of visibility into bot performance, making it difficult to track ROI, identify bottlenecks, and optimize automation workflows.",
      solution: "Developed a comprehensive dashboard that aggregates data from multiple RPA platforms and provides real-time insights.",
      contributions: [
        "Designed and built React-based dashboard with real-time data visualization",
        "Integrated with Automation Anywhere and WorkFusion APIs for data aggregation",
        "Created automated reporting system for stakeholder updates"
      ],
      impact: [
        "Real-time visibility into 20+ active bots",
        "Automated weekly reports saving 4 hours/week",
        "Identified optimization opportunities leading to 15% efficiency gains"
      ],
      tech: ["React", "Tailwind CSS", "Flask", "PostgreSQL", "Chart.js"],
      status: "Completed",
      statusColor: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30",
      link: null,
    },
    {
      title: "Social Media Mini-App",
      description:
        "A full-stack social media application with authentication, real-time updates, and interactive features.",
      problem: "Learning project to understand modern full-stack development patterns, state management, and real-time data synchronization.",
      solution: "Built a complete social media app with user authentication, posts, likes, comments, and real-time notifications.",
      contributions: [
        "Implemented JWT-based authentication with secure session management",
        "Built real-time features using WebSockets for live updates",
        "Designed responsive UI with optimized state management"
      ],
      impact: [
        "Handles 1000+ concurrent users",
        "Sub-200ms response time for real-time updates",
        "Production-ready authentication system"
      ],
      tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "WebSockets"],
      status: "Planned",
      statusColor: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30",
      link: null,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my work showcasing automation, AI, and full-stack development
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-glow animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <span className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                    Problem
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                    Solution
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Key Contributions
                  </h3>
                  <ul className="space-y-2">
                    {project.contributions.map((contribution, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-blue-500 mt-1.5 flex-shrink-0">▸</span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Impact & Results
                  </h3>
                  <ul className="space-y-2">
                    {project.impact.map((impact, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-green-500 mt-1.5 flex-shrink-0">✓</span>
                        <span className="font-medium">{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
