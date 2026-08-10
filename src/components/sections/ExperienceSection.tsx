/**
 * Personal Branding Mapping section — bilingual via LanguageContext.
 */

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Code2, Sparkles, Compass, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslations } from '../../locales'

const CARD_STYLES = [
  { iconBg: 'from-cyan-500 to-teal-500',    glowColor: 'rgba(34, 211, 238, 0.15)',  icon: <Target className="h-5 w-5" /> },
  { iconBg: 'from-violet-500 to-purple-500', glowColor: 'rgba(139, 92, 246, 0.15)', icon: <Code2 className="h-5 w-5" /> },
  { iconBg: 'from-amber-500 to-orange-500',  glowColor: 'rgba(245, 158, 11, 0.15)', icon: <Sparkles className="h-5 w-5" /> },
  { iconBg: 'from-emerald-500 to-green-500', glowColor: 'rgba(16, 185, 129, 0.15)', icon: <Compass className="h-5 w-5" /> },
  { iconBg: 'from-rose-500 to-pink-500',     glowColor: 'rgba(244, 63, 94, 0.15)',  icon: <ShieldCheck className="h-5 w-5" /> },
]

const ExperienceSection: React.FC = () => {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const e = t.experience

  return (
    <section aria-label="Personal Branding Mapping" className="flex flex-1 flex-col">
      {/* Header */}
      <header className="mb-8 space-y-3 md:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
          {e.sectionTag}
        </p>
        <h2
          className="text-xl font-semibold text-slate-50 sm:text-2xl md:text-3xl tracking-tight"
          style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
        >
          {e.sectionTitle}
        </h2>
        <p
          className="max-w-2xl text-sm text-slate-300 leading-relaxed"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          {e.sectionDescription}
        </p>
      </header>

      {/* Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {e.cards.map((card, index) => {
          const style = CARD_STYLES[index]
          return (
            <motion.div
              key={card.title}
              className="group relative flex flex-col gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/70 p-5 backdrop-blur transition-colors hover:border-slate-600/80"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.06 * index, duration: 0.4, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              style={{ boxShadow: `0 0 30px ${style.glowColor}, inset 0 1px 0 rgba(255,255,255,0.04)` }}
            >
              {/* Icon */}
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${style.iconBg} text-white shadow-lg`}>
                {style.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-sm font-semibold text-slate-50"
                  style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-xs leading-relaxed text-slate-400"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {card.description}
                </p>
              </div>

              {/* Hover glow overlay */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${style.glowColor}, transparent 70%)` }}
              />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default ExperienceSection
