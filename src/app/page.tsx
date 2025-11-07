import Image from "next/image";

export default function Home() {
  return (
    <main id="home" className="scroll-mt-24 flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900 p-8">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-4xl animate-fade-in">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <Image
            src="/Gokul.jpeg"
            alt="Gokulkrishna A"
            width={180}
            height={180}
            className="relative rounded-full shadow-2xl mb-6 object-cover border-4 border-white dark:border-zinc-800 ring-4 ring-blue-500/20 dark:ring-purple-500/20"
            priority
          />
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-fade-in-up">
          Hi, I'm <span className="gradient-text">Gokulkrishna</span> 👋
        </h1>
        
        <p className="text-center text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mb-6 animate-fade-in-up">
          Master's student in Computer Science at <span className="font-semibold">Binghamton University</span>
        </p>
        
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-8 animate-fade-in-up">
          Passionate about <span className="font-semibold text-blue-600 dark:text-blue-400">AI</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">automation</span>, and building <span className="font-semibold text-indigo-600 dark:text-indigo-400">full-stack applications</span>
        </p>
        
        <div className="flex gap-4 text-lg mb-12 animate-fade-in-up">
          <a
            href="https://www.linkedin.com/in/agokulakrishna"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/gananthakris"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
          >
            GitHub
          </a>
        </div>
      </section>


      {/* --- ABOUT ME --- */}
      <section className="mt-16 w-full max-w-4xl">
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
            About Me
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-base sm:text-lg">
              I'm an <span className="font-semibold text-blue-600 dark:text-blue-400">Automation Engineer</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">AI enthusiast</span> with over <span className="font-semibold">five years of experience</span>
              building production-grade bots and workflow automations using Automation Anywhere,
              WorkFusion, and Python. I love designing reliable, high-impact automation solutions
              that save time and create measurable business value.
            </p>
            <p className="text-base sm:text-lg">
              I'm currently pursuing my Master's in Computer Science at Binghamton University,
              where I'm expanding into AI and full-stack development — exploring topics like
              machine learning, intelligent agents, and generative systems to combine automation
              with human-like reasoning.
            </p>
          </div>
        </div>
      </section>


      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="mt-16 w-full max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
          Experience
        </h2>
        <div className="space-y-6">
          {/* Sagility Health */}
          <div className="group rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover-glow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Technical Lead – Automation (RPA)
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Sagility Health
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Nov 2022 – Jul 2024 · Coimbatore, India
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1.5">▸</span>
                <span>Led end-to-end RPA solution delivery using Automation Anywhere (AA360) across healthcare operations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1.5">▸</span>
                <span>Achieved <strong className="text-green-600 dark:text-green-400">$300K+ annual cost savings</strong> and 11 FTE reduction through high-impact automations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1.5">▸</span>
                <span>Owned full SDLC — requirements, development, code review, unit testing, deployment, and hypercare support.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1.5">▸</span>
                <span>Built reusable bot frameworks, standardized logs, and client-ready reporting dashboards.</span>
              </li>
            </ul>
          </div>

          {/* TaskUs */}
          <div className="group rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover-glow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  RPA Developer
                </h3>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  TaskUs
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Nov 2020 – Nov 2022 · Indore, India
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1.5">▸</span>
                <span>Developed and deployed <strong>20+ bots</strong> in Automation Anywhere and Python to streamline back-office processes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1.5">▸</span>
                <span>Integrated Salesforce, Oracle CRM, and Google Chat APIs for real-time alerts and reporting.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1.5">▸</span>
                <span>Delivered robust bots with structured exception handling, testing scripts, and version-controlled repositories.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1.5">▸</span>
                <span>Collaborated directly with business teams for process discovery, documentation, and optimization.</span>
              </li>
            </ul>
          </div>

          {/* VRBotz */}
          <div className="group rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover-glow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  RPA Engineer
                </h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  VRBotz
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Mar 2019 – Nov 2020 · Bangalore, India
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-1.5">▸</span>
                <span>Developed automation for payroll, reconciliation, and data validation using WorkFusion and Python.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-1.5">▸</span>
                <span>Implemented scalable workflows following best practices for design, credential handling, and audit logging.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-1.5">▸</span>
                <span>Supported production bots through testing, debugging, and continuous improvement cycles.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* --- EDUCATION & SKILLS --- */}
      <section id="education" className="mt-16 w-full max-w-4xl scroll-mt-24 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
          Education & Skills
        </h2>

        {/* Education */}
        <div className="space-y-4 mb-8">
          <div className="rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                MS
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  M.S. in Computer Science
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                  Binghamton University, State University of New York
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Expected 2025
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Focus on <span className="font-semibold">Artificial Intelligence</span>, <span className="font-semibold">System Programming</span>, and <span className="font-semibold">Algorithm Design</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                BE
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  B.E. in Computer Science & Engineering
                </h3>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                  SNS College of Technology
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  2018
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Automation Anywhere (AA360 / 2019)",
              "WorkFusion · UiPath (Basics)",
              "Python · VBA · Excel Automation",
              "Machine Learning · AI Agents · RAG",
              "Web Automation · API Integration",
              "SDLC · Unit Testing · Hypercare"
            ].map((skill, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200/50 dark:border-gray-800/50 p-3 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
