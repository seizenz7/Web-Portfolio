/**
 * AboutSection — bilingual via LanguageContext.
 */
import React from 'react'
import { motion } from 'motion/react'
import { Terminal, User, Target, GraduationCap, Code2 } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslations } from '../../locales'

const AboutSection: React.FC = () => {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const a = t.about

  return (
    <section aria-label="About Me" className="flex flex-1 flex-col">
      <header className="mb-6 space-y-2 md:mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
          {a.sectionTag}
        </p>
        <h2
          className="text-xl font-semibold text-slate-50 sm:text-2xl md:text-3xl"
          style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
        >
          {a.sectionTitle}
        </h2>
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
              {a.cards.whoIAm.title}
            </h3>
          </div>
          <div
            className="space-y-4 text-sm leading-relaxed text-slate-300"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {a.cards.whoIAm.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
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
              {a.cards.careerGoals.title}
            </h3>
          </div>
          <p
            className="text-sm leading-relaxed text-slate-300"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {a.cards.careerGoals.body}
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
              {a.cards.interests.title}
            </h3>
          </div>
          <p
            className="text-sm leading-relaxed text-slate-300"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {a.cards.interests.body}
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
              {a.cards.background.title}
            </h3>
          </div>
          <p
            className="text-sm leading-relaxed text-slate-300"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {a.cards.background.body}
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
              {a.cards.coreSkills.title}
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
