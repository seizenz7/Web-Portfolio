/**
 * "Skills & Tools" section — bilingual via LanguageContext.
 * Technologies displayed as glowing orbital nodes inside category cards.
 */

import React from 'react'
import { motion } from 'motion/react'
import { GitBranch, CloudCog, Container, Cloud, Terminal, Users, Activity } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslations } from '../../locales'

interface TechItem {
  name: string
  level?: 'Basic' | 'Intermediate' | 'Learning'
}

interface TechClusterConfig {
  icon: React.ReactNode
  items: TechItem[]
  hoverBorder?: string
  hoverShadow?: string
}

/**
 * Static config per cluster (icons, items, hover styles).
 * Text (title, description) comes from translations.
 */
const CLUSTER_CONFIGS: TechClusterConfig[] = [
  {
    icon: <Container className="h-4 w-4" />,
    items: [{ name: 'Docker', level: 'Intermediate' }, { name: 'Kubernetes', level: 'Basic' }],
  },
  {
    icon: <GitBranch className="h-4 w-4" />,
    items: [{ name: 'Git', level: 'Basic' }, { name: 'GitHub Actions', level: 'Basic' }, { name: 'GitLab CI', level: 'Intermediate' }],
  },
  {
    icon: <CloudCog className="h-4 w-4" />,
    items: [{ name: 'Terraform', level: 'Learning' }, { name: 'Ansible', level: 'Learning' }],
  },
  {
    icon: <Cloud className="h-4 w-4" />,
    items: [{ name: 'AWS', level: 'Learning' }, { name: 'GCP', level: 'Learning' }],
  },
  {
    icon: <Terminal className="h-4 w-4" />,
    items: [{ name: 'Linux', level: 'Intermediate' }, { name: 'Bash', level: 'Basic' }, { name: 'Python', level: 'Basic' }],
  },
  {
    icon: <Activity className="h-4 w-4" />,
    items: [
      { name: 'Prometheus', level: 'Basic' },
      { name: 'Grafana', level: 'Basic' },
      { name: 'Loki', level: 'Learning' },
      { name: 'OpenTelemetry', level: 'Learning' },
    ],
  },
  {
    icon: <Users className="h-4 w-4" />,
    items: [], // items come from translations for soft skills
    hoverBorder: 'hover:border-emerald-400/70',
    hoverShadow: 'hover:shadow-[0_0_40px_rgba(52,211,153,0.55)]',
  },
]

const TechStackSection: React.FC = () => {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const ts = t.techStack

  return (
    <section aria-label="Skills and Tools" className="flex flex-1 flex-col">
      <header className="mb-6 space-y-2 md:mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
          {ts.sectionTag}
        </p>
        <h2
          className="text-xl font-semibold text-slate-50 sm:text-2xl md:text-3xl"
          style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
        >
          {ts.sectionTitle}
        </h2>
        <p
          className="max-w-2xl text-sm text-slate-300"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          {ts.sectionDescription}
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ts.clusters.map((cluster, index) => {
          const config = CLUSTER_CONFIGS[index]
          // For soft skills (which have items defined in the locale, and no static items), use translated item names
          const isSoftSkills = config.items.length === 0 && cluster.items
          const displayItems: TechItem[] = isSoftSkills
            ? cluster.items!.map((name) => ({ name }))
            : config.items

          return (
            <motion.article
              key={cluster.title}
              className={`group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 shadow-[0_0_30px_rgba(15,23,42,0.85)] backdrop-blur transition-shadow duration-300 ${
                config.hoverBorder || 'hover:border-cyan-400/70'
              } ${config.hoverShadow || 'hover:shadow-[0_0_40px_rgba(56,189,248,0.55)]'}`}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.05 * index, duration: 0.45, ease: 'easeOut' }}
              whileHover={{ y: -6, scale: 1.03 }}
              style={{ transformOrigin: 'center bottom' }}
            >
              {/* Hover glow layers */}
              <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-tr from-cyan-500/10 via-slate-900/0 to-violet-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-cyan-400/30 opacity-0 blur-[1.5px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -inset-6 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-pulse">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.55),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.5),transparent_55%)] mix-blend-screen" />
              </div>

              <div className="relative mb-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900/80 text-cyan-300 shadow-inner shadow-cyan-500/40">
                  {config.icon}
                </span>
                <h3
                  className="text-sm font-semibold text-slate-50"
                  style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
                >
                  {cluster.title}
                </h3>
              </div>

              <p
                className="mb-4 text-xs text-slate-400"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {cluster.description}
              </p>

              <div className="relative flex flex-wrap gap-2">
                {displayItems.map((item) => (
                  <motion.div
                    key={item.name}
                    className="relative inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-slate-100 shadow-[0_0_18px_rgba(56,189,248,0.45)]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                    {item.name}
                    {item.level && (
                      <span className={`ml-1 text-[9px] uppercase tracking-wider ${
                        item.level === 'Learning'      ? 'text-amber-400' :
                        item.level === 'Intermediate'  ? 'text-blue-400'  :
                        'text-emerald-400'
                      }`}>
                        • {ts.levels[item.level]}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default TechStackSection
