/**
 * "Skills & Tools" section visualizing the DevOps tech stack and soft skills.
 * Technologies are displayed as glowing orbital nodes inside category cards.
 */

import React from 'react'
import { motion } from 'motion/react'
import { GitBranch, CloudCog, Container, ShieldCheck, Cpu, Terminal, Users, Activity } from 'lucide-react'

/**
 * Single technology representation for display.
 */
interface TechItem {
  /** Name of the technology. */
  name: string
  /** Proficiency level. */
  level?: 'Basic' | 'Intermediate' | 'Learning'
}

/**
 * Cluster of related technologies grouped into a constellation card.
 */
interface TechCluster {
  /** Category title for the cluster. */
  title: string
  /** Brief description or focus area. */
  description: string
  /** Icon representing the cluster. */
  icon: React.ReactNode
  /** List of tools/technologies contained in the cluster. */
  items: TechItem[]
  /** Optional: accent color for hover glow. */
  hoverBorder?: string
  hoverShadow?: string
}

/**
 * Configured tech clusters based on Aditya's selected skills.
 */
const TECH_CLUSTERS: TechCluster[] = [
  {
    title: 'Containers & Orchestration',
    description: 'Containerized workloads, orchestration, and cloud-native deployments.',
    icon: <Container className="h-4 w-4" />,
    items: [{ name: 'Docker', level: 'Intermediate' }, { name: 'Kubernetes', level: 'Basic' }],
  },
  {
    title: 'CI/CD & Automation',
    description: 'Continuous integration, delivery pipelines, and automated workflows.',
    icon: <GitBranch className="h-4 w-4" />,
    items: [{ name: 'Git', level: 'Basic' }, { name: 'GitHub Actions', level: 'Basic' }, { name: 'GitLab CI', level: 'Intermediate' }],
  },
  {
    title: 'Infrastructure as Code',
    description: 'Provisioning and configuration management through declarative code.',
    icon: <CloudCog className="h-4 w-4" />,
    items: [{ name: 'Terraform', level: 'Learning' }, { name: 'Ansible', level: 'Learning' }],
  },
  {
    title: 'Cloud Platforms',
    description: 'Public cloud services for compute, storage, and networking.',
    icon: <ShieldCheck className="h-4 w-4" />,
    items: [{ name: 'AWS', level: 'Learning' }, { name: 'GCP', level: 'Learning' }],
  },
  {
    title: 'Scripting & OS',
    description: 'Systems administration, automation scripts, and runtime environments.',
    icon: <Terminal className="h-4 w-4" />,
    items: [{ name: 'Linux', level: 'Intermediate' }, { name: 'Bash', level: 'Basic' }, { name: 'Python', level: 'Basic' }],
  },
  // {
  //   title: 'Monitoring & Observability',
  //   description: 'Metrics collection, visualization, and alerting for system health.',
  //   icon: <Activity className="h-4 w-4" />,
  //   items: [{ name: 'Prometheus' }, { name: 'Grafana' }],
  // },
  {
    title: 'Soft Skills',
    description: 'Non-technical strengths that complement engineering work.',
    icon: <Users className="h-4 w-4" />,
    items: [
      { name: 'Problem Solving' },
      { name: 'Continuous Learning' },
      { name: 'Communicative' },
      { name: 'Collaborative' },
      { name: 'Adaptability' },
    ],
    hoverBorder: 'hover:border-emerald-400/70',
    hoverShadow: 'hover:shadow-[0_0_40px_rgba(52,211,153,0.55)]',
  },
]

/**
 * TechStackSection renders "Skills & Tools", showcasing skills as
 * luminous, connected nodes within interactive cards.
 */
const TechStackSection: React.FC = () => {
  return (
    <section
      aria-label="Skills and Tools"
      className="flex flex-1 flex-col"
    >
      <header className="mb-6 space-y-2 md:mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
          Skills & Tools
        </p>
        <h2
          className="text-xl font-semibold text-slate-50 sm:text-2xl md:text-3xl"
          style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
        >
          The toolkit powering my projects.
        </h2>
        <p
          className="max-w-2xl text-sm text-slate-300"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          A curated set of platforms, tools, and skills I use to build, deploy,
          and operate the projects.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TECH_CLUSTERS.map((cluster, index) => (
          <motion.article
            key={cluster.title}
            className={`group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 shadow-[0_0_30px_rgba(15,23,42,0.85)] backdrop-blur transition-shadow duration-300 ${
              cluster.hoverBorder || 'hover:border-cyan-400/70'
            } ${cluster.hoverShadow || 'hover:shadow-[0_0_40px_rgba(56,189,248,0.55)]'}`}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.05 * index, duration: 0.45, ease: 'easeOut' }}
            whileHover={{
              y: -6,
              scale: 1.03,
            }}
            style={{ transformOrigin: 'center bottom' }}
          >
            {/* Soft base glow that intensifies on hover */}
            <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-tr from-cyan-500/10 via-slate-900/0 to-violet-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

            {/* Neon border outline for electric hover effect */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-cyan-400/30 opacity-0 blur-[1.5px] transition-opacity duration-300 group-hover:opacity-100" />

            {/* Electric aura effect on hover */}
            <div className="pointer-events-none absolute -inset-6 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-pulse">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.55),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.5),transparent_55%)] mix-blend-screen" />
            </div>

            {/* Floating electric sparks */}
            {/* <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute left-5 top-5 h-1.5 w-1.5 rounded-full bg-cyan-300/90 shadow-[0_0_14px_rgba(56,189,248,0.9)] group-hover:animate-pulse" />
              <div className="absolute right-6 bottom-6 h-1.5 w-1.5 rounded-full bg-violet-300/90 shadow-[0_0_14px_rgba(168,85,247,0.9)] group-hover:animate-pulse" />
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/90 shadow-[0_0_20px_rgba(56,189,248,1)] group-hover:animate-pulse" />
            </div> */}

            <div className="relative mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900/80 text-cyan-300 shadow-inner shadow-cyan-500/40">
                {cluster.icon}
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
              {cluster.items.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-slate-100 shadow-[0_0_18px_rgba(56,189,248,0.45)]"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                  {item.name}
                  {item.level && (
                    <span className={`ml-1 text-[9px] uppercase tracking-wider ${
                      item.level === 'Learning' ? 'text-amber-400' :
                      item.level === 'Intermediate' ? 'text-blue-400' :
                      'text-emerald-400'
                    }`}>
                      • {item.level}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default TechStackSection
