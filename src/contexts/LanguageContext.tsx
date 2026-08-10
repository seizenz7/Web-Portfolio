/**
 * LanguageContext — provides global language state (EN/ID) across the portfolio.
 * Default: 'id' (Bahasa Indonesia). No persistence — resets on every page load.
 */

import React, { createContext, useContext, useState } from 'react'
import type { Language } from '../types/language'

interface LanguageContextValue {
  /** Currently active language code. */
  language: Language
  /** Toggle between 'id' and 'en'. */
  toggleLanguage: () => void
  /** Convenience setter for explicit change. */
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * LanguageProvider wraps the app and supplies language state to all children.
 */
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default: Bahasa Indonesia
  const [language, setLanguageState] = useState<Language>('id')

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'id' ? 'en' : 'id'))
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Hook to access language context. Must be used within <LanguageProvider>.
 */
export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
