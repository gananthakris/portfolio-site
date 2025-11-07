"use client";

import React from "react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "AI Companion",
      description:
        "A personalized AI assistant built with Vercel AI SDK and OpenAI APIs. Supports memory, streaming chat, and task automation.",
      tech: ["Next.js", "TypeScript", "Vercel AI SDK", "Redis"],
      status: "In Progress",
      statusColor: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30",
    },
    {
      title: "Automation Dashboard",
      description:
        "Centralized RPA monitoring tool to visualize bot runs, FTE savings, and logs using real-time API data.",
      tech: ["React", "Tailwind", "Flask", "PostgreSQL"],
      status: "Completed",
      statusColor: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30",
    },
    {
      title: "Social Media Mini-App",
      description:
        "A simple full-stack CRUD app with login, likes, and real-time updates to practice state management and auth flows.",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      status: "Planned",
      statusColor: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30",
    },
    {
      title: "Generative Art Playground",
      description:
        "Canvas-based generative art tool that transforms prompts into unique digital visuals using AI-driven shaders.",
      tech: ["Next.js", "WebGL", "OpenAI API"],
      status: "Upcoming",
      statusColor: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30",
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

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover-glow animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
