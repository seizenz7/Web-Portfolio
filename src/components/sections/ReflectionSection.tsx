/**
 * Reflection section — personal growth introspection.
 * Displays structured reflection questions with placeholder answers.
 */

import React from 'react'
import { motion } from 'motion/react'
import { Target, Trophy, TrendingUp, Compass, Award } from 'lucide-react'

/**
 * A single reflection topic with its question and answer.
 */
interface ReflectionItem {
  icon: React.ReactNode
  question: string
  answer: string
  accentColor: string
  glowColor: string
}

/**
 * Pre-filled reflection items — placeholders for the student to personalize.
 */
const REFLECTIONS: ReflectionItem[] = [
  {
    icon: <Target className="h-5 w-5" />,
    question: 'Biggest Challenge',
    answer:
      'The biggest challenge in building this portfolio was translating DevOps technical skills—which mostly run in terminals and servers—into something visual and easy to understand. Crafting a narrative that demonstrates the problem-solving behind each pipeline and infrastructure configuration requires a different mindset from day-to-day engineering work.',
    accentColor: 'text-cyan-300',
    glowColor: 'shadow-cyan-500/40',
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    question: 'Most Representative Project',
    answer:
      "The CI/CD Pipeline Automation project best reflects who I am. It combines my passion for automation, attention to detail in configuration, and the drive to build reliable and repeatable deployment processes. Through this project, I learned that good infrastructure is the kind you don't have to think about—it just works.",
    accentColor: 'text-emerald-300',
    glowColor: 'shadow-emerald-500/40',
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    question: 'Most Improved Skill',
    answer:
      'The skill that has improved the most is my ability to troubleshoot and solve problems systematically. Through hands-on experience in my homelab, I learned to read logs carefully, understand network flows, and debug containers that fail to start. This capability has made me much more confident in tackling complex infrastructure issues.',
    accentColor: 'text-violet-300',
    glowColor: 'shadow-violet-500/40',
  },
  {
    icon: <Compass className="h-5 w-5" />,
    question: 'Areas for Future Growth',
    answer:
      "Moving forward, I want to deepen my understanding of cloud security and the observability stack (Prometheus, Grafana, OpenTelemetry). I also aim to earn professional certifications such as the AWS Certified Solutions Architect or CKA (Certified Kubernetes Administrator) to formally validate the skills I've built independently.",
    accentColor: 'text-amber-300',
    glowColor: 'shadow-amber-500/40',
  },
  {
    icon: <Award className="h-5 w-5" />,
    question: 'Why This Portfolio Matters',
    answer:
      "This portfolio serves as tangible proof of my capabilities. While a resume only lists skills, a portfolio demonstrates how those skills are applied to solve real-world problems. As a fresh graduate without formal work experience, this portfolio bridges the gap between what I've learned in my homelab and industry requirements—showing that I am ready to contribute from day one.",
    accentColor: 'text-rose-300',
    glowColor: 'shadow-rose-500/40',
  },
]

/**
 * ReflectionSection renders the personal growth reflection cards.
 */
const ReflectionSection: React.FC = () => {
  return (
    <section aria-label="Reflection" className="flex flex-1 flex-col">
      <header className="mb-6 space-y-2 md:mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
          Reflection
        </p>
        <h2
          className="text-xl font-semibold text-slate-50 sm:text-2xl md:text-3xl"
          style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
        >
          Looking Back, Moving Forward.
        </h2>
        <p
          className="max-w-2xl text-sm text-slate-300"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          A brief reflection on my learning journey, the challenges I've faced, and where I'm heading next.
        </p>
      </header>

      <div className="space-y-4">
        {REFLECTIONS.map((item, index) => (
          <motion.article
            key={item.question}
            className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 shadow-[0_0_30px_rgba(15,23,42,0.85)] backdrop-blur transition-shadow duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * index, duration: 0.45, ease: 'easeOut' }}
          >
            <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-tr from-cyan-500/5 via-slate-900/0 to-violet-500/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex gap-4">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900/80 ${item.accentColor} shadow-inner ${item.glowColor}`}
              >
                {item.icon}
              </span>
              <div className="min-w-0">
                <h3
                  className={`mb-2 text-sm font-semibold ${item.accentColor}`}
                  style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
                >
                  {item.question}
                </h3>
                <p
                  className="text-sm leading-relaxed text-slate-300"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ReflectionSection
