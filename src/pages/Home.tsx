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
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslations } from '../locales'

/**
 * Home component orchestrates the single-page layout and section navigation.
 */
const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const [pointer, setPointer] = useState<GalaxyPointer>({ x: 0, y: 0 })
  const { language, toggleLanguage } = useLanguage()
  const t = getTranslations(language)

  /**
   * Track pointer drag to drive the galaxy parallax background.
   */
  useEffect(() => {
    let isDragging = false
    let lastX = 0
    let lastY = 0

    const handlePointerDown = (e: PointerEvent) => {
      // Ignore drags starting on buttons or links so we don't interfere with UI
      const target = e.target as HTMLElement
      if (target.closest('button') || target.closest('a')) return
      
      isDragging = true
      lastX = e.clientX
      lastY = e.clientY
    }

    const handlePointerUp = () => {
      isDragging = false
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return
      
      const deltaX = e.clientX - lastX
      const deltaY = e.clientY - lastY
      
      lastX = e.clientX
      lastY = e.clientY

      // Accumulate pointer state to rotate the galaxy
      setPointer((prev) => ({
        x: prev.x + (deltaX / window.innerWidth) * 5,
        y: prev.y + (deltaY / window.innerHeight) * 5
      }))
    }

    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointermove', handlePointerMove)
    // Handle cases where pointer leaves window while dragging
    window.addEventListener('pointercancel', handlePointerUp)
    window.addEventListener('pointerleave', handlePointerUp)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointercancel', handlePointerUp)
      window.removeEventListener('pointerleave', handlePointerUp)
    }
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
    <div className="min-h-screen text-slate-50">
      {/* 3D galaxy / visual background */}
      <GalaxyBackground pointer={pointer} />

      {/* Main content */}
      <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-20 pt-16 md:pb-24 md:pt-20">
        <header className="mb-6 flex flex-col gap-2 md:mb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
              {t.portfolioLabel}
            </p>
            <h1
              className="text-lg font-semibold text-slate-50 sm:text-xl"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
            >
              Aditya Indra Wisnu — DevOps Engineer
            </h1>
          </div>

          {/* Right side: active panel badge + language toggle */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span className="font-medium">{t.activePanel}:&nbsp;</span>
              <span>{t.sectionLabels[activeSection]}</span>
            </div>

            {/* Language Toggle Button */}
            <motion.button
              type="button"
              onClick={toggleLanguage}
              aria-label={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
              className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-cyan-500/30 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-slate-200 shadow-[0_0_18px_rgba(34,211,238,0.15)] backdrop-blur transition-all hover:border-cyan-400/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Sliding active indicator */}
              <motion.span
                className="absolute inset-y-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30"
                layoutId="langBg"
                style={{ width: '50%', left: language === 'id' ? 0 : '50%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              />
              <span className={`relative z-10 transition-colors ${language === 'id' ? 'text-cyan-300' : 'text-slate-400'}`}>
                🇮🇩 ID
              </span>
              <span className="relative z-10 text-slate-600">/</span>
              <span className={`relative z-10 transition-colors ${language === 'en' ? 'text-cyan-300' : 'text-slate-400'}`}>
                EN 🇬🇧
              </span>
            </motion.button>
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
