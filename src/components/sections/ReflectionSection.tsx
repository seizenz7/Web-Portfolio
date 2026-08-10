/**
 * Reflection section — bilingual via LanguageContext.
 */

import React from 'react'
import { motion } from 'motion/react'
import { Target, Trophy, TrendingUp, Compass, Award } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslations } from '../../locales'

const ITEM_STYLES = [
  { icon: <Target className="h-5 w-5" />,    accentColor: 'text-cyan-300',   glowColor: 'shadow-cyan-500/40' },
  { icon: <Trophy className="h-5 w-5" />,    accentColor: 'text-emerald-300', glowColor: 'shadow-emerald-500/40' },
  { icon: <TrendingUp className="h-5 w-5" />, accentColor: 'text-violet-300', glowColor: 'shadow-violet-500/40' },
  { icon: <Compass className="h-5 w-5" />,   accentColor: 'text-amber-300',  glowColor: 'shadow-amber-500/40' },
  { icon: <Award className="h-5 w-5" />,     accentColor: 'text-rose-300',   glowColor: 'shadow-rose-500/40' },
]

const ReflectionSection: React.FC = () => {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const r = t.reflection

  return (
    <section aria-label="Reflection" className="flex flex-1 flex-col">
      <header className="mb-6 space-y-2 md:mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
          {r.sectionTag}
        </p>
        <h2
          className="text-xl font-semibold text-slate-50 sm:text-2xl md:text-3xl"
          style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
        >
          {r.sectionTitle}
        </h2>
        <p
          className="max-w-2xl text-sm text-slate-300"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          {r.sectionDescription}
        </p>
      </header>

      <div className="space-y-4">
        {r.items.map((item, index) => {
          const style = ITEM_STYLES[index % ITEM_STYLES.length]
          return (
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
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900/80 ${style.accentColor} shadow-inner ${style.glowColor}`}
                >
                  {style.icon}
                </span>
                <div className="min-w-0">
                  <h3
                    className={`mb-2 text-sm font-semibold ${style.accentColor}`}
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
          )
        })}
      </div>
    </section>
  )
}

export default ReflectionSection
