/**
 * Floating glassmorphism "Command Center" dock.
 * Provides persistent navigation between sections using icons and labels.
 */

import React from 'react'
import { motion } from 'framer-motion' // Gunakan 'framer-motion' agar lebih stabil
import { Home, Fingerprint, User, Orbit, Layers, Send, BookOpen } from 'lucide-react'
import type { SectionId } from '../../types/sections'

/**
 * Props for the CommandDock component.
 */
export interface CommandDockProps {
  /** Currently active section for visual highlighting and aria-current. */
  activeSection: SectionId
  /** Navigation callback to change the active section. */
  onNavigate: (section: SectionId) => void
}

/**
 * Individual nav item definition for the dock.
 */
interface DockItem {
  id: SectionId
  label: string
  icon: React.ReactNode
}

/**
 * List of navigation items shown in the dock.
 */
const DOCK_ITEMS: DockItem[] = [
  { 
    id: 'home', 
    label: 'Home', 
    icon: <Home className="h-4 w-4" /> 
  },
  { 
    id: 'experience', 
    label: 'Branding', 
    icon: <Fingerprint className="h-4 w-4" /> 
  },
  {
    id: 'about',
    label: 'About',
    icon: <User className="h-4 w-4" />
  },
  { 
    id: 'stack', 
    label: 'Skills & Tools', 
    icon: <Orbit className="h-4 w-4" /> 
  },
  { 
    id: 'projects', 
    label: 'Projects', 
    icon: <Layers className="h-4 w-4" /> 
  },
  { 
    id: 'contact', 
    label: 'Contact', 
    icon: <Send className="h-4 w-4" /> 
  },
  {
    id: 'reflection',
    label: 'Reflection',
    icon: <BookOpen className="h-4 w-4" />
  },
]

/**
 * CommandDock renders a frosted-glass navigation dock anchored near the bottom
 * of the viewport, with glowing accents and icon-based section controls.
 */
const CommandDock: React.FC<CommandDockProps> = ({ activeSection, onNavigate }) => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:bottom-8">
      <motion.nav
        aria-label="Command center navigation"
        className="pointer-events-auto flex items-center gap-1 rounded-2xl border border-cyan-500/20 bg-slate-900/80 px-2 py-1 shadow-[0_0_40px_rgba(34,211,238,0.2)] backdrop-blur-xl md:gap-2 md:px-3 md:py-2"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {DOCK_ITEMS.map((item) => {
          const isActive = item.id === activeSection

          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`group relative flex items-center gap-1 rounded-xl px-2 py-1 text-xs font-medium outline-none transition-colors md:px-3 md:py-1.5 ${
                isActive
                  ? 'text-cyan-100'
                  : 'text-slate-400 hover:text-cyan-100 focus-visible:text-cyan-100'
              }`}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              {isActive && (
                <motion.span
                  layoutId="dockGlow"
                  className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-cyan-500/40 via-emerald-500/40 to-violet-500/40 shadow-[0_0_22px_rgba(56,189,248,0.4)]"
                  transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                />
              )}
              <span className={`flex h-6 w-6 items-center justify-center rounded-lg shadow-inner transition-colors ${
                  isActive ? 'bg-slate-900/60 text-cyan-200' : 'bg-transparent text-current'
              }`}>
                {item.icon}
              </span>
              <span className="hidden whitespace-nowrap md:inline-block">{item.label}</span>
            </motion.button>
          )
        })}
      </motion.nav>
    </div>
  )
}

export default CommandDock