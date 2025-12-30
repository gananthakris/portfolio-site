"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Technical Lead – Automation (RPA)",
    company: "Sagility Health",
    period: "Nov 2022 – Jul 2024",
    location: "Coimbatore, India",
    duration: "1 year 8 months",
    color: "blue",
    achievements: [
      "Delivered RPA solutions using Automation Anywhere (AA360) for healthcare operations",
      "Worked on automations that contributed to cost savings and efficiency improvements",
      "Handled full SDLC — requirements gathering, development, testing, deployment, and support",
      "Built reusable bot frameworks and standardized logging and reporting",
    ],
  },
  {
    title: "RPA Developer",
    company: "TaskUs",
    period: "Nov 2020 – Nov 2022",
    location: "Indore, India",
    duration: "2 years",
    color: "purple",
    achievements: [
      "Developed and deployed 20+ bots in Automation Anywhere and Python to streamline back-office processes",
      "Integrated Salesforce, Oracle CRM, and Google Chat APIs for real-time alerts and reporting",
      "Delivered robust bots with structured exception handling, testing scripts, and version-controlled repositories",
      "Collaborated directly with business teams for process discovery, documentation, and optimization",
    ],
  },
  {
    title: "RPA Engineer",
    company: "VRBotz",
    period: "Mar 2019 – Nov 2020",
    location: "Bangalore, India",
    duration: "1 year 8 months",
    color: "indigo",
    achievements: [
      "Developed automation for payroll, reconciliation, and data validation using WorkFusion and Python",
      "Implemented scalable workflows following best practices for design, credential handling, and audit logging",
      "Supported production bots through testing, debugging, and continuous improvement cycles",
    ],
  },
];

const colorClasses = {
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600",
  indigo: "from-indigo-500 to-indigo-600",
};

const colorText = {
  blue: "text-blue-600 dark:text-blue-400",
  purple: "text-purple-600 dark:text-purple-400",
  indigo: "text-indigo-600 dark:text-indigo-400",
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-violet-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-2">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${colorClasses[exp.color as keyof typeof colorClasses]} border-4 border-white dark:border-zinc-900 shadow-lg`}
                  ></div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200/50 dark:border-gray-800/50"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <p
                        className={`text-lg font-semibold ${colorText[exp.color as keyof typeof colorText]} mb-1`}
                      >
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.period} · {exp.location} · {exp.duration}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-4">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span
                          className={`mt-1.5 flex-shrink-0 ${
                            exp.color === "blue"
                              ? "text-blue-500"
                              : exp.color === "purple"
                              ? "text-purple-500"
                              : "text-indigo-500"
                          }`}
                        >
                          ▸
                        </span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Impact metrics highlight */}
                  {index === 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-800"
                    >
                      <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">
                        Key Impact Metrics:
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="text-green-700 dark:text-green-400">
                          <strong>$300K+</strong> annual savings
                        </span>
                        <span className="text-green-700 dark:text-green-400">
                          <strong>11 FTE</strong> reduction
                        </span>
                        <span className="text-green-700 dark:text-green-400">
                          <strong>99.2%</strong> accuracy
                        </span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

