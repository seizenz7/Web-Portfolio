/**
 * Hero section — professional onboarding landing page for the portfolio.
 * Welcomes visitors and guides them to explore the portfolio sections.
 * Personal bio details are intentionally omitted (handled by AboutSection).
 */

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Fingerprint, Layers, Sparkles } from 'lucide-react'
import type { SectionId } from '../../types/sections'

/**
 * Props for HeroSection.
 */
export interface HeroSectionProps {
  /** Callback to navigate to another section from CTAs. */
  onNavigate: (section: SectionId) => void
}

/**
 * Quick-access card shown below the headline to guide visitors.
 */
interface QuickNavCard {
  label: string
  description: string
  target: SectionId
  icon: React.ReactNode
  /** Pre-built Tailwind classes to avoid JIT purge issues with dynamic colors. */
  iconWrapClass: string
  hoverBorderClass: string
  accentTextClass: string
}

const QUICK_NAV: QuickNavCard[] = [
  {
    label: 'Personal Branding',
    description: 'Career direction, skills, and values at a glance.',
    target: 'experience',
    icon: <Fingerprint className="h-4 w-4" />,
    iconWrapClass: 'bg-cyan-500/15 text-cyan-400',
    hoverBorderClass: 'hover:border-cyan-500/50',
    accentTextClass: 'text-cyan-400',
  },
  {
    label: 'Project Showcase',
    description: 'Real-world projects built with modern DevOps tooling.',
    target: 'projects',
    icon: <Layers className="h-4 w-4" />,
    iconWrapClass: 'bg-violet-500/15 text-violet-400',
    hoverBorderClass: 'hover:border-violet-500/50',
    accentTextClass: 'text-violet-400',
  },
]

/**
 * Renders a professional portfolio onboarding hero with a welcoming headline,
 * a brief value proposition, and quick-nav cards to guide exploration.
 */
const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      aria-label="Welcome — Aditya Indra's DevOps Portfolio"
      className="flex flex-1 flex-col items-center justify-center text-center"
    >
      {/* Shimmer keyframes */}
      <style>{`
        @keyframes galaxy-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .text-galaxy-glitter {
          background: linear-gradient(
            90deg,
            rgba(148, 248, 255, 1),
            rgba(56,189,248,0.95),
            rgba(251,113,133,0.95),
            rgba(129,140,248,0.98)
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: galaxy-shimmer 6s linear infinite;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        {/* Status badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/70 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.35)] backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span>Open to Opportunities</span>
        </div>

        {/* Greeting */}
        <motion.p
          className="mb-2 text-sm font-medium text-slate-400 sm:text-base"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Welcome to the portfolio of
        </motion.p>

        {/* Name + Title */}
        <div className="mb-3 relative">
          <motion.h1
            className="text-balance text-4xl font-bold text-galaxy-glitter pb-1 sm:text-5xl md:text-6xl"
            style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
          >
            Aditya Indra Wisnu
          </motion.h1>
          <div className="absolute inset-0 -z-10 blur-2xl opacity-20 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full transform scale-y-50" />
        </div>

        <motion.p
          className="mb-6 text-lg font-semibold tracking-wide text-slate-200 sm:text-xl"
          style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          DevOps Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="mx-auto mb-10 max-w-xl text-pretty text-sm leading-relaxed text-slate-400 sm:text-base"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Building reliable infrastructure through automation, containers, and
          continuous delivery — explore the projects, skills, and my personal branding.
        </motion.p>

        {/* Quick Nav Cards */}
        <motion.div
          className="mx-auto mb-8 grid max-w-lg gap-3 sm:grid-cols-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          {QUICK_NAV.map((card) => (
            <motion.button
              key={card.target}
              type="button"
              onClick={() => onNavigate(card.target)}
              className={`group flex flex-col items-start gap-2 rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4 text-left backdrop-blur transition-colors ${card.hoverBorderClass}`}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${card.iconWrapClass}`}>
                {card.icon}
              </div>
              <span
                className="text-sm font-semibold text-slate-100"
                style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
              >
                {card.label}
              </span>
              <span className="text-xs leading-relaxed text-slate-400">
                {card.description}
              </span>
              <span className={`mt-auto inline-flex items-center gap-1 text-[11px] font-medium ${card.accentTextClass} opacity-0 transition-opacity group-hover:opacity-100`}>
                Explore <ArrowRight className="h-3 w-3" />
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <motion.button
            type="button"
            onClick={() => onNavigate('experience')}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-500 px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.55)] outline-none transition-colors hover:from-cyan-400 hover:via-emerald-300 hover:to-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>Start Exploring</span>
          </motion.button>

          <motion.button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/80 px-6 py-2.5 text-sm font-medium text-slate-100 shadow-[0_0_22px_rgba(15,23,42,0.9)] outline-none transition-colors hover:border-violet-400/80 hover:text-violet-100 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection