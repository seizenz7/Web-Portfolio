import React from 'react'
import { motion } from 'motion/react'
import { Terminal, User, Coffee, Target, GraduationCap, Code2 } from 'lucide-react'

/**
 * AboutSection renders a brief overview of the developer.
 */
const AboutSection: React.FC = () => {
  return (
    <section aria-label="About Me" className="flex flex-1 flex-col">
      <header className="mb-6 space-y-2 md:mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
          About Me
        </p>
        <h2
          className="text-xl font-semibold text-slate-50 sm:text-2xl md:text-3xl"
          style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
        >
          The Engineer behind the project.
        </h2>
        <p
          className="max-w-2xl text-sm text-slate-300"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Main Bio Card */}
        <motion.article
          className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-[0_0_30px_rgba(15,23,42,0.85)] backdrop-blur transition-shadow duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_40px_rgba(56,189,248,0.55)] md:col-span-2"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-tr from-cyan-500/10 via-slate-900/0 to-violet-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 text-cyan-300 shadow-inner shadow-cyan-500/40">
              <User className="h-5 w-5" />
            </span>
            <h3
              className="text-lg font-semibold text-slate-50"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
            >
              Who I Am
            </h3>
          </div>
          <div
            className="space-y-4 text-sm leading-relaxed text-slate-300"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            <p>
              Hi, I'm Aditya Indra Wisnu a fresh Informatics graduate and self-taught DevOps Engineering enthusiast.
              My journey into the world of DevOps started from my curiosity. I joined an online course and Bootcamp
              to understand how real-world systems are deployed, monitored, and scaled. Without formal work experience,
              I've relied on hands-on experimentation, spinning up Kubernetes clusters, designing CI/CD pipelines,
              and automating infrastructure to build practical skills that mirror industry demands.
            </p>
            <p>
              I'm deeply passionate about CI/CD engineering, container orchestration, and Infrastructure as Code.
              My goal is to become a professional DevOps Engineer who bridges the gap between development and operations,
              ensuring that software delivery is fast, secure, and reliable. I believe that the best way to learn
              is by building, breaking, and rebuilding. I am also highly interested in building smart systems integrated with AI.
            </p>
          </div>
        </motion.article>

        {/* Career Goals Card */}
        <motion.article
          className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-[0_0_30px_rgba(15,23,42,0.85)] backdrop-blur transition-shadow duration-300 hover:border-emerald-400/70 hover:shadow-[0_0_40px_rgba(52,211,153,0.35)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45, ease: 'easeOut' }}
        >
          <div className="relative mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 text-emerald-300 shadow-inner shadow-emerald-500/40">
              <Target className="h-5 w-5" />
            </span>
            <h3
              className="text-lg font-semibold text-slate-50"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
            >
              Career Goals
            </h3>
          </div>
          <p
            className="text-sm leading-relaxed text-slate-300"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            My short-term goal is to land a Junior DevOps Engineer role where I can apply and expand my homelab
            experience in a production environment. Long-term, I aspire to become a DevOps Automation Architect,
            focusing on advanced automation and AI integration to design resilient, scalable, smart and reliable infrastructure.
          </p>
        </motion.article>

        {/* Philosophy & Interests Card */}
        <motion.article
          className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-[0_0_30px_rgba(15,23,42,0.85)] backdrop-blur transition-shadow duration-300 hover:border-violet-400/70 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45, ease: 'easeOut' }}
        >
          <div className="relative mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 text-violet-300 shadow-inner shadow-violet-500/40">
              <Terminal className="h-5 w-5" />
            </span>
            <h3
              className="text-lg font-semibold text-slate-50"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
            >
              Interests & Philosophy
            </h3>
          </div>
          <p
            className="text-sm leading-relaxed text-slate-300"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            I'm fascinated by cloud-native architecture, GitOps workflows, and the integration of AI within the DevSecOps ecosystem.
            My philosophy is simple: "Automate the mundane, focus on the meaningful." When I'm not configuring
            pipelines or debugging something, you'll find me exploring open-source tools for DevOps and AIOps, experimenting in my
            homelab, or reading about AI-driven distributed systems.
          </p>
        </motion.article>

        {/* Background & Experience Card */}
        <motion.article
          className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-[0_0_30px_rgba(15,23,42,0.85)] backdrop-blur transition-shadow duration-300 hover:border-blue-400/70 hover:shadow-[0_0_40px_rgba(96,165,250,0.35)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.45, ease: 'easeOut' }}
        >
          <div className="relative mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 text-blue-300 shadow-inner shadow-blue-500/40">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3
              className="text-lg font-semibold text-slate-50"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
            >
              Background & Experience
            </h3>
          </div>
          <p
            className="text-sm leading-relaxed text-slate-300"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            I hold a degree in Informatics, providing a rigorous foundation in algorithms and software architecture. To bridge the gap between academic theory and industry practice, I joined specialized online courses and a DevOps bootcamp. Additionally, I've dedicated myself to hands-on engineering through a custom homelab, treating it as a production environment to build real-world infrastructure and CI/CD pipelines.
          </p>
        </motion.article>

        {/* Core Skills Card */}
        <motion.article
          className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-[0_0_30px_rgba(15,23,42,0.85)] backdrop-blur transition-shadow duration-300 hover:border-orange-400/70 hover:shadow-[0_0_40px_rgba(251,146,60,0.35)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.45, ease: 'easeOut' }}
        >
          <div className="relative mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 text-orange-300 shadow-inner shadow-orange-500/40">
              <Code2 className="h-5 w-5" />
            </span>
            <h3
              className="text-lg font-semibold text-slate-50"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
            >
              Core Technical Skills
            </h3>
          </div>
          <ul
            className="space-y-2 text-sm leading-relaxed text-slate-300 list-disc list-inside"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            <li><strong>Containerization:</strong> Docker, Kubernetes</li>
            <li><strong>CI/CD & Automation:</strong> GitLab CI, GitHub Actions</li>
            <li><strong>Infrastructure as Code:</strong> Terraform, Ansible</li>
            <li><strong>Systems & Scripting:</strong> Linux, Bash, Python</li>
          </ul>
        </motion.article>
      </div>
    </section>
  )
}

export default AboutSection
