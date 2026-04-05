"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Product & Automation Lead",
    company: "Sagility Health",
    period: "Nov 2022 – Jul 2024",
    location: "Coimbatore, India",
    color: "blue",
    achievements: [
      "Owned full product lifecycle for 8+ automation products — from discovery and requirements to launch and post-deployment support",
      "Drove $300K+ in annual cost savings by identifying bottlenecks and shipping automation solutions with clear ROI alignment",
      "Reduced average process handling time by 65% across healthcare ops teams through targeted automation delivery",
      "Established reusable bot architecture and internal tooling standards adopted as the org-wide platform standard",
    ],
  },
  {
    title: "Automation Specialist",
    company: "TaskUs",
    period: "Nov 2020 – Nov 2022",
    location: "Indore, India",
    color: "purple",
    achievements: [
      "Shipped 20+ automation products eliminating 10,000+ hours/year of manual back-office work across GTM and ops teams",
      "Integrated Salesforce, Oracle CRM, and real-time alerting — reducing time-to-signal on critical deal events from hours to seconds",
      "Led discovery workshops with 5+ business stakeholders per initiative to define scope, success metrics, and feature priorities",
      "Cut average bot development cycle by 30% by standardizing reusable components, specs, and QA frameworks",
    ],
  },
  {
    title: "Automation Engineer",
    company: "VRBotz",
    period: "Mar 2019 – Nov 2020",
    location: "Bangalore, India",
    color: "indigo",
    achievements: [
      "Scoped and delivered automation across payroll, reconciliation, and data validation — reducing client processing time by 50%+",
      "Translated enterprise client pain points into product specs and shipped automation workflows saving 2,000+ hours/year per client",
      "Iterated on deployed products based on user feedback, maintaining 95%+ uptime and continuous improvement cycles",
    ],
  },
];

const colorClasses = {
  blue: "from-amber-500 to-amber-600",
  purple: "from-orange-500 to-orange-600",
  indigo: "from-amber-400 to-orange-500",
};

const colorText = {
  blue: "text-amber-400",
  purple: "text-orange-400",
  indigo: "text-amber-300",
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#08070a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-orange-400 to-amber-600 hidden md:block"></div>

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
                  className="bg-[#0d0c0f] border-amber-900/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200/50 dark:border-gray-800/50"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p
                        className={`text-lg font-semibold ${colorText[exp.color as keyof typeof colorText]} mb-1`}
                      >
                        {exp.company}
                      </p>
                      <p className="text-sm text-white/40">
                        {exp.period} · {exp.location}
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
                        className="flex items-start gap-3 text-white/65"
                      >
                        <span
                          className={`mt-1.5 flex-shrink-0 ${
                            exp.color === "blue"
                              ? "text-amber-400"
                              : exp.color === "purple"
                              ? "text-orange-400"
                              : "text-amber-300"
                          }`}
                        >
                          ▸
                        </span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

