/**
 * "Project Showcase" section detailing key projects using storytelling.
 * Focuses on Problem, Role, Tools, Solution, and Result.
 */

import React from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Terminal, ShieldAlert, Zap, Box, BarChart } from 'lucide-react'

interface ProjectItem {
  name: string
  background: string
  problem: string
  role: string
  tools: string[]
  solution: string
  result: string
  githubLink?: string
}

const PROJECTS: ProjectItem[] = [
  {
    name: 'CI/CD Pipeline Automation for Microservices',
    background: 'A homelab project simulating a modern microservices environment that required frequent updates.',
    problem: 'Manual deployments were error-prone, slow, and inconsistent across different environments. There was no automated way to ensure code quality or security before shipping.',
    role: 'Lead DevOps Engineer (Solo Project)',
    tools: ['GitHub Actions', 'Docker', 'Kubernetes', 'SonarQube'],
    solution: 'Designed and implemented a fully automated CI/CD pipeline using GitHub Actions. The pipeline includes stages for linting, unit testing, SAST scanning (SonarQube), building Docker images, and deploying to a local Kubernetes cluster using GitOps principles.',
    result: 'Reduced deployment time from hours to minutes. Eradicated manual configuration errors and established a reliable, repeatable release process.',
    githubLink: '#', // Placeholder
  },
  {
    name: 'Infrastructure as Code (IaC) Provisioning',
    background: 'An initiative to move away from "ClickOps" and manage cloud resources programmatically.',
    problem: 'Setting up testing environments manually took too long and often resulted in configuration drift between staging and production-like environments.',
    role: 'Cloud Architect (Solo Project)',
    tools: ['Terraform', 'AWS', 'Bash', 'Git'],
    solution: 'Wrote modular Terraform configurations to provision VPCs, Subnets, Security Groups, and EC2 instances on AWS. Integrated the Terraform scripts with a version control system to track changes and enable peer review workflows.',
    result: 'Achieved 100% reproducible environments. Spin-up time for a complete networking and compute stack was reduced to under 5 minutes.',
    githubLink: '#', // Placeholder
  },
]

const ProjectsSection: React.FC = () => {
  return (
    <section aria-label="Project Showcase" className="flex flex-1 flex-col">
      <header className="mb-6 space-y-2 md:mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
          Project Showcase
        </p>
        <h2
          className="text-xl font-semibold text-slate-50 sm:text-2xl md:text-3xl"
          style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
        >
          Building reliable systems from the ground up.
        </h2>
        <p className="max-w-2xl text-sm text-slate-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          A deep dive into selected projects, exploring the challenges faced, the architecture designed, and the impact delivered.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.name}
            className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 md:p-8 shadow-[0_0_32px_rgba(15,23,42,0.85)] backdrop-blur transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5, ease: 'easeOut' }}
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-8">
              {/* Left Column: Details & Storytelling */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3
                    className="text-xl font-bold text-slate-50 md:text-2xl"
                    style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-cyan-300 font-medium">Role: {project.role}</p>
                </div>

                <div className="space-y-4 text-sm text-slate-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  <div>
                    <strong className="flex items-center gap-2 text-slate-200 mb-1">
                      <Box className="w-4 h-4 text-slate-400" /> Background
                    </strong>
                    <p>{project.background}</p>
                  </div>
                  
                  <div>
                    <strong className="flex items-center gap-2 text-rose-300 mb-1">
                      <ShieldAlert className="w-4 h-4" /> The Challenge
                    </strong>
                    <p>{project.problem}</p>
                  </div>

                  <div>
                    <strong className="flex items-center gap-2 text-emerald-300 mb-1">
                      <Terminal className="w-4 h-4" /> Solution & Process
                    </strong>
                    <p>{project.solution}</p>
                  </div>

                  <div>
                    <strong className="flex items-center gap-2 text-amber-300 mb-1">
                      <BarChart className="w-4 h-4" /> Impact & Result
                    </strong>
                    <p>{project.result}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Tech Stack & Links */}
              <div className="lg:w-64 shrink-0 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-slate-700/50 pt-6 lg:pt-0 lg:pl-6">
                <div>
                  <strong className="flex items-center gap-2 text-slate-200 text-sm mb-3">
                    <Zap className="w-4 h-4 text-cyan-400" /> Technologies Used
                  </strong>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => (
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
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition-colors ring-1 ring-inset ring-slate-600"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Repository
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
