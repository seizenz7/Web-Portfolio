/**
 * "Project Showcase" section detailing key projects using storytelling.
 * Focuses on Problem, Role, Tools, Solution, and Result.
 */

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Terminal, ShieldAlert, Zap, Box, BarChart, ChevronLeft, ChevronRight } from 'lucide-react'

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
    name: 'Containerized Auth App with Persistence Database',
    background: 'Modern software delivery requires applications to run consistently anywhere, from local development to production servers. This project was developed to transition a standard Python web service and its database into a fully containerized, highly portable architecture.',
    problem: 'In the industry, the "it works on my machine" syndrome and race conditions (e.g., the app crashing on boot because the database is not fully initialized) are persistent issues that cause inconsistent deployments and downtime.',
    role: 'DevOps Engineer: Designed the containerization strategy, implemented security best practices, and configured the orchestration via Docker Compose.',
    tools: ['Docker', 'Docker Compose', 'Python/Flask', 'PostgreSQL'],
    solution: 'I developed a production-ready Dockerfile utilizing a non-root user for enhanced security and minimized image size. I orchestrated the environment with Docker Compose, implementing strict boot ordering using healthchecks (`pg_isready`) so the application waits for the database. Configurations and credentials were also decoupled using `.env` files and isolated bridge networks.',
    result: 'Eliminated environment inconsistencies across development and production. The application now boots reliably without race conditions, maintains persistent user data, and adheres to strict DevSecOps standards.',
    githubLink: 'https://github.com/seizenz7/docker-python-auth-app',
  },
  {
    name: 'CI/CD Pipeline Optimization & Secret Management',
    background: 'The more repositories a team manages, the more CI/CD scripts pile up, each a slightly different copy of the last, each drifting in its own direction over time. I built this project to challenge that pattern directly. The goal was a single, version-controlled pipeline living in one repository, governing every application in the group, with reusable pipeline code.',
    problem: 'Two compounding problems drove this project. First, duplicating CI/CD logic across repositories creates drift, inconsistency, and scaling friction, adding a new app means copy-pasting an entire pipeline and hoping nothing diverges. Second, and more critically, credentials were at risk of being hardcoded directly into Kubernetes manifests, creating a permanent secret exposure risk in Git history that no rotation policy can fully undo.',
    role: 'DevOps Engineer: Designed the centralized pipeline architecture in the `general-pipeline` repository, authored the Kubernetes manifest templates with `envsubst` injection points, configured GitLab CI/CD Settings to delegate pipeline ownership, and implemented the multi-stage Docker build with a non-root Nginx runner for security compliance.',
    tools: ['GitLab CI/CD', 'Docker', 'Kubernetes (K3s)', 'Nginx', 'Semantic Release'],
    solution: 'The architecture rests on one key GitLab feature: the "CI/CD Configuration File Path" setting, which lets any repository point to an external `.gitlab-ci.yml`. By pointing this app\'s CI/CD configuration to the centralized `general-pipeline` repository, there is zero pipeline code in this repo, any push to the `alpha` branch triggers the central pipeline automatically. Kubernetes manifests (`deployment.yaml`, `services.yaml`, `ingress.yaml`, `secret.yaml`) use `${}` placeholder variables throughout, which `envsubst` resolves at pipeline runtime using GitLab CI/CD Variables, credentials never touch the codebase.',
    result: 'The result is a pipeline architecture that scales without code duplication, onboarding a new microservice requires only a GitLab Settings change, no new CI file, no credential copying. All Kubernetes manifests remain permanently clean of secrets, aligning with DevSecOps best practices. Semantic Release (`@semantic-release/gitlab`) handles automated versioning on the `alpha` branch, closing the loop on a fully automated delivery workflow. The new architecture sped up the deployment cycle by 70% and eliminated 100% of hardcoded secrets from the codebase.',
    githubLink: 'https://gitlab.com/tutorial-ci-dibimbing/aditya-assignment-group',
  },
  {
    name: 'Infrastructure as Code (IaC) Automation Provisioning VM',
    background: 'Every time I provisioned a server manually through the AWS Console, I felt the same unease: there was no audit trail, no way to peer-review the change, and no guarantee the next server would be identical. This project was my answer to that problem a fully declarative, version-controlled IaC pipeline that treats cloud infrastructure the same way engineers treat application code. It is also the second chapter in a DevOps learning series, reusing the Docker image published from a previous CI/CD pipeline project.',
    problem: 'Manual server setup is not just slow it is fundamentally unreliable at scale. Without code, there is no diff to review, no history to audit, and no way to guarantee that a recreated server will be byte-for-byte identical to what was running before. The real danger is "configuration drift": small, undocumented manual tweaks accumulate over time until the server becomes impossible to reproduce reliably a critical liability during incident recovery.',
    role: 'DevOps Engineer: Designed the modular Terraform file structure (compute, security, outputs, inventory as separate concerns), authored the idempotent Ansible playbook, and engineered the automated bridge between the two tools via dynamic inventory generation.',
    tools: ['Terraform', 'Ansible', 'AWS (EC2)', 'Docker'],
    solution: 'The architecture follows a strict separation of concerns across a 7-step automated pipeline. Terraform provisions the AWS Security Group (SSH + HTTP firewall rules), the EC2 Ubuntu 22.04 instance, and an RSA 4096-bit SSH key pair all from code. I used `local_file` + `templatefile()` resource in Terraform auto-generates `inventory.ini` the moment EC2 is live, injecting the dynamic public IP with zero human touch. Ansible then picks up that inventory, connects agentlessly over SSH, installs Docker using the modern `/etc/apt/keyrings/` signed-by method, and pulls and runs the Flask application container from Docker Hub. Every value instance type, port, image name is driven by variables, making the entire codebase reusable across environments.',
    result: 'The end result is a reproducible, one-command infrastructure lifecycle, `terraform apply` provisions the cloud, and `ansible-playbook` configures and deploys no manual steps in between. Slashed infrastructure provisioning time from 30 minutes (manual) to under 8 minutes (automated).',
    githubLink: 'https://github.com/seizenz7/iac-terraform-ansible-vm',
  },
]

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1))
  }

  return (
    <section aria-label="Project Showcase" className="flex flex-1 flex-col relative w-full max-w-full">
      <header className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
            Project Showcase
          </p>
          <h2
            className="text-xl font-semibold text-slate-50 sm:text-2xl md:text-3xl"
            style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
          >
            Building reliable systems from the ground up.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            A deep dive into selected projects, exploring the challenges faced, the architecture designed, and the impact delivered.
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

      <div className="relative w-full pb-12 overflow-x-hidden px-1 -mx-1">
        <motion.div
          className="flex items-stretch"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          {PROJECTS.map((project, index) => {
            const isActive = index === currentIndex;

            return (
              <div 
                key={project.name} 
                className="w-full shrink-0 px-2 sm:px-4" 
              >
                <article
                  className={`group relative h-full overflow-hidden rounded-2xl border bg-slate-900/70 p-6 md:p-8 shadow-[0_0_32px_rgba(15,23,42,0.85)] backdrop-blur transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] ${
                    isActive ? 'border-cyan-500/40 opacity-100' : 'border-slate-800 opacity-60'
                  }`}
                >
                  {/* Background Glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col lg:flex-row gap-8">
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
                            className={`inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-inset ring-slate-600 transition-all ${isActive ? 'hover:bg-slate-700 hover:text-white cursor-pointer' : 'opacity-50 cursor-default'}`}
                            tabIndex={isActive ? 0 : -1}
                            onClick={(e) => {
                              if (!isActive) e.preventDefault();
                            }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Repository
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
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]' : 'w-2 bg-slate-700 hover:bg-slate-500'
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
