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
        
        {/* Timeline */}
        <div className="relative mb-8">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500"></div>
          <div className="space-y-8 pl-12">
            <div className="relative">
              <div className="absolute -left-[2.25rem] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-zinc-900 shadow-lg"></div>
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">Nov 2022 - Jul 2024</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">1 year 8 months</div>
            </div>
            <div className="relative">
              <div className="absolute -left-[2.25rem] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-zinc-900 shadow-lg"></div>
              <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1">Nov 2020 - Nov 2022</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">2 years</div>
            </div>
            <div className="relative">
              <div className="absolute -left-[2.25rem] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-zinc-900 shadow-lg"></div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">Mar 2019 - Nov 2020</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">1 year 8 months</div>
            </div>
          </div>
        </div>

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
                  Nov 2022 – Jul 2024 · Coimbatore, India · <span className="font-medium">1 year 8 months</span>
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
                  Nov 2020 – Nov 2022 · Indore, India · <span className="font-medium">2 years</span>
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
                  Mar 2019 – Nov 2020 · Bangalore, India · <span className="font-medium">1 year 8 months</span>
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
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* RPA Platforms */}
            <div className="rounded-xl border border-gray-200/50 dark:border-gray-800/50 p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-sm">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                RPA Platforms
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Automation Anywhere (AA360)</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Expert</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">WorkFusion</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Advanced</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">UiPath</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Basic</span>
                </div>
              </div>
            </div>

            {/* Programming & Automation */}
            <div className="rounded-xl border border-gray-200/50 dark:border-gray-800/50 p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-sm">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Programming & Automation
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Python</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Advanced</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">VBA · Excel Automation</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Expert</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Web Automation</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Advanced</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">API Integration</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Advanced</span>
                </div>
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="rounded-xl border border-gray-200/50 dark:border-gray-800/50 p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-sm">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                AI & Machine Learning
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Machine Learning</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Learning</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">AI Agents</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Learning</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">RAG Systems</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Learning</span>
                </div>
              </div>
            </div>

            {/* Full-Stack Development */}
            <div className="rounded-xl border border-gray-200/50 dark:border-gray-800/50 p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-sm">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Full-Stack Development
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Next.js · React</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Learning</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">TypeScript</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Learning</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">PostgreSQL</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Learning</span>
                </div>
              </div>
            </div>

            {/* Development Practices */}
            <div className="rounded-xl border border-gray-200/50 dark:border-gray-800/50 p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-sm">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Development Practices
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">SDLC</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Expert</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Unit Testing</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Advanced</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Hypercare & Support</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FUTURE & OPPORTUNITIES --- */}
      <section className="mt-16 w-full max-w-4xl mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl border border-blue-200/50 dark:border-blue-800/50 p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
            What I'm Working On Next
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-base sm:text-lg">
              Currently pursuing my <span className="font-semibold text-blue-600 dark:text-blue-400">Master's in Computer Science</span> at Binghamton University, I'm actively expanding my expertise in <span className="font-semibold text-purple-600 dark:text-purple-400">AI and full-stack development</span>. My focus areas include:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1.5">▸</span>
                <span>Building intelligent AI agents and RAG systems that combine automation with human-like reasoning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1.5">▸</span>
                <span>Developing full-stack applications with modern frameworks (Next.js, React, TypeScript)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1.5">▸</span>
                <span>Exploring machine learning and generative AI to create innovative automation solutions</span>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-white/60 dark:bg-zinc-900/60 border border-blue-200/50 dark:border-blue-800/50">
              <p className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                Open to Opportunities
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                I'm actively seeking <span className="font-semibold">internships and full-time opportunities</span> in AI/ML engineering, full-stack development, and automation engineering. Particularly interested in roles that combine my RPA expertise with emerging AI technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
