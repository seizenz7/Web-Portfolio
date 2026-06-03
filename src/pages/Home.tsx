/**
 * Main home page for the Digital Galaxy portfolio.
 * Renders the galaxy background, active section, and command dock navigation.
 */

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import GalaxyBackground, { type GalaxyPointer } from '../components/layout/GalaxyBackground'
import CommandDock from '../components/layout/CommandDock'
import type { SectionId } from '../types/sections'
import {
  HeroSection,
  AboutSection,
  TechStackSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
  ReflectionSection,
} from '../components/sections'

/**
 * Human-readable labels for each section id.
 */
const SECTION_LABELS: Record<SectionId, string> = {
  home: 'Onboarding',
  about: 'Identity',
  stack: 'Skills & Tools',
  experience: 'Personal Branding',
  projects: 'Project Showcase',
  contact: 'Contact & Links',
  reflection: 'Reflection',
}

/**
 * Home component orchestrates the single-page layout and section navigation.
 */
const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const [pointer, setPointer] = useState<GalaxyPointer>({ x: 0, y: 0 })

  /**
   * Track pointer movement to drive the galaxy parallax background.
   */
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = (event.clientY / window.innerHeight) * 2 - 1
      setPointer({ x, y })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  /**
   * Navigate to a specific section.
   * @param section Target section id.
   */
  const handleNavigate = (section: SectionId) => {
    setActiveSection(section)
  }

  /**
   * Render the component for the current active section.
   */
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection onNavigate={handleNavigate} />
      case 'about':
        return <AboutSection />
      case 'stack':
        return <TechStackSection />
      case 'experience':
        return <ExperienceSection />
      case 'projects':
        return <ProjectsSection />
      case 'contact':
        return <ContactSection />
      case 'reflection':
        return <ReflectionSection />
      default:
        return <HeroSection onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* 3D galaxy / visual background */}
      <GalaxyBackground pointer={pointer} />

      {/* Main content */}
      <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-20 pt-16 md:pb-24 md:pt-20">
        <header className="mb-6 flex flex-col gap-2 md:mb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
              Portfolio
            </p>
            <h1
              className="text-lg font-semibold text-slate-50 sm:text-xl"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
            >
              Aditya Indra — DevOps Engineer
            </h1>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            <span className="font-medium">Active panel:&nbsp;</span>
            <span>{SECTION_LABELS[activeSection]}</span>
          </div>
        </header>

        <section className="relative flex flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              className="flex w-full"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      {/* Bottom command dock navigation */}
      <CommandDock activeSection={activeSection} onNavigate={handleNavigate} />
    </div>
  )
}

export default Home
