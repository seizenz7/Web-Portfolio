/**
 * "Project Showcase" section — bilingual via LanguageContext.
 * Project names and tool names remain in English in both languages.
 */

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Terminal, ShieldAlert, Zap, Box, BarChart, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslations } from '../../locales'

/**
 * Static project data in original order.
 * Project #6 (CBS) has `featured: true` to activate Spotlight features and default focus.
 */
const PROJECT_STATIC = [
  {
    name: 'Containerized Auth App with Persistence Database',
    shortTitle: 'Docker Auth App',
    featured: false,
    tools: ['Docker', 'Docker Compose', 'Python/Flask', 'PostgreSQL'],
    githubLink: 'https://github.com/seizenz7/docker-python-auth-app',
  },
  {
    name: 'CI/CD Pipeline Optimization & Secret Management',
    shortTitle: 'Centralized CI/CD',
    featured: false,
    tools: ['GitLab CI/CD', 'Docker', 'Kubernetes (K3s)', 'Nginx', 'Semantic Release'],
    githubLink: 'https://gitlab.com/tutorial-ci-dibimbing/aditya-assignment-group',
  },
  {
    name: 'Infrastructure as Code (IaC) Automation Provisioning VM',
    shortTitle: 'IaC AWS (Terraform)',
    featured: false,
    tools: ['Terraform', 'Ansible', 'AWS (EC2)', 'Docker'],
    githubLink: 'https://github.com/seizenz7/iac-terraform-ansible-vm',
  },
  {
    name: 'GitOps CI/CD Integration with ArgoCD',
    shortTitle: 'GitOps ArgoCD',
    featured: false,
    tools: ['GitLab CI/CD', 'ArgoCD', 'Kubernetes (K3s)', 'Docker', 'Helm', 'Semantic Release'],
    githubLink: 'https://gitlab.com/tutorial-ci-dibimbing/aditya-assignment-argocd',
  },
  {
    name: 'Modular GCP Infrastructure Provisioning with Terraform',
    shortTitle: 'IaC GCP (Terraform)',
    featured: false,
    tools: ['Terraform', 'Google Cloud Platform (GCP)', 'Bash', 'Nginx'],
    githubLink: 'https://gitlab.com/seizenz/iac-terraform-gcp',
  },
  {
    name: 'End-to-End DevOps & Observability for Core Banking System',
    shortTitle: 'CBS DevOps (Spotlight)',
    featured: true,
    tools: ['GitLab CI', 'Docker', 'Helm', 'Kubernetes', 'Semantic Release', 'SonarQube', 'Trivy', 'Grafana Beyla (eBPF)', 'Prometheus', 'OpenTelemetry', 'Loki'],
    githubLink: 'https://gitlab.com/aditya-indra-wisnu-cbs-final-project',
  },
]

const ProjectsSection: React.FC = () => {
  // Start on featured project index (CBS project at index 5)
  const initialIndex = PROJECT_STATIC.findIndex((p) => p.featured)
  const [currentIndex, setCurrentIndex] = useState(initialIndex !== -1 ? initialIndex : 0)
  const { language } = useLanguage()
  const t = getTranslations(language)
  const p = t.projects

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PROJECT_STATIC.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECT_STATIC.length - 1 : prev - 1))
  }

  return (
    <section aria-label="Project Showcase" className="flex flex-1 flex-col relative w-full max-w-full">
      <header className="mb-6 flex flex-col gap-4 md:mb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
            {p.sectionTag}
          </p>
          <h2
            className="text-xl font-semibold text-slate-50 sm:text-2xl md:text-3xl"
            style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
          >
            {p.sectionTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {p.sectionDescription}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 text-slate-300 shadow-[0_0_15px_rgba(15,23,42,0.8)] backdrop-blur transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 text-slate-300 shadow-[0_0_15px_rgba(15,23,42,0.8)] backdrop-blur transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Quick Nav Pill Tabs */}
      <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {PROJECT_STATIC.map((project, index) => {
          const isActive = index === currentIndex
          return (
            <button
              key={project.name}
              onClick={() => setCurrentIndex(index)}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? project.featured
                    ? 'bg-gradient-to-r from-amber-500/25 via-cyan-500/25 to-purple-500/25 text-amber-300 ring-1 ring-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                    : 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.25)]'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {project.featured && <Sparkles className="h-3.5 w-3.5 text-amber-400" />}
              <span>{project.shortTitle}</span>
            </button>
          )
        })}
      </div>

      <div className="relative w-full pb-12 overflow-x-hidden px-1 -mx-1">
        <motion.div
          className="flex items-stretch"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          {PROJECT_STATIC.map((project, index) => {
            const isActive = index === currentIndex
            const content = p.items[index]

            return (
              <div key={project.name} className="w-full shrink-0 px-2 sm:px-4">
                <article
                  className={`group relative h-full overflow-hidden rounded-2xl border bg-slate-900/70 p-6 md:p-8 shadow-[0_0_32px_rgba(15,23,42,0.85)] backdrop-blur transition-all duration-500 ${
                    isActive
                      ? project.featured
                        ? 'border-amber-400/50 shadow-[0_0_40px_rgba(245,158,11,0.25)]'
                        : 'border-cyan-500/40 opacity-100'
                      : 'border-slate-800 opacity-60'
                  }`}
                >
                  {/* Background Glow */}
                  <div
                    className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                      project.featured
                        ? 'bg-gradient-to-br from-amber-500/10 via-cyan-500/5 to-purple-500/10'
                        : 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5'
                    }`}
                  />

                  <div className="relative z-10 flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 space-y-6">
                      <div>
                        {project.featured && (
                          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-purple-500/20 px-3.5 py-1 text-xs font-semibold text-amber-300 ring-1 ring-amber-400/40 shadow-[0_0_18px_rgba(245,158,11,0.35)] backdrop-blur">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                            <span>{p.labels.featuredBadge}</span>
                          </div>
                        )}
                        <h3
                          className="text-xl font-bold text-slate-50 md:text-2xl"
                          style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
                        >
                          {project.name}
                        </h3>
                        <p className="mt-2 text-sm text-cyan-300 font-medium">
                          {p.labels.role}: {content.role}
                        </p>
                      </div>

                      <div className="space-y-4 text-sm text-slate-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        <div>
                          <strong className="flex items-center gap-2 text-slate-200 mb-1">
                            <Box className="w-4 h-4 text-slate-400" /> {p.labels.background}
                          </strong>
                          <p>{content.background}</p>
                        </div>

                        <div>
                          <strong className="flex items-center gap-2 text-rose-300 mb-1">
                            <ShieldAlert className="w-4 h-4" /> {p.labels.challenge}
                          </strong>
                          <p>{content.problem}</p>
                        </div>

                        <div>
                          <strong className="flex items-center gap-2 text-emerald-300 mb-1">
                            <Terminal className="w-4 h-4" /> {p.labels.solution}
                          </strong>
                          <p>{content.solution}</p>
                        </div>

                        <div>
                          <strong className="flex items-center gap-2 text-amber-300 mb-1">
                            <BarChart className="w-4 h-4" /> {p.labels.impact}
                          </strong>
                          <p>{content.result}</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-64 shrink-0 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-slate-700/50 pt-6 lg:pt-0 lg:pl-6">
                      <div>
                        <strong className="flex items-center gap-2 text-slate-200 text-sm mb-3">
                          <Zap className="w-4 h-4 text-cyan-400" /> {p.labels.technologies}
                        </strong>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span key={tool} className="inline-flex items-center rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-cyan-100 ring-1 ring-inset ring-cyan-500/20">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.githubLink && (
                        <div>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-inset ring-slate-600 transition-all ${isActive ? 'hover:bg-slate-700 hover:text-white cursor-pointer' : 'opacity-50 cursor-default'}`}
                            tabIndex={isActive ? 0 : -1}
                            onClick={(e) => { if (!isActive) e.preventDefault() }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            {p.labels.viewRepo}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </motion.div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {PROJECT_STATIC.map((project, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? project.featured
                    ? 'w-8 bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]'
                    : 'w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
