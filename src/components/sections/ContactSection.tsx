/**
 * Contact section & Social Links — bilingual via LanguageContext.
 */

import React from 'react'
import { motion } from 'motion/react'
import { Mail, Linkedin, Github, Gitlab, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslations } from '../../locales'

const CONTACT_LINKS = [
  {
    name: 'Email',
    url: 'mailto:adityaiw4@gmail.com',
    displayValue: 'adityaiw4@gmail.com',
    icon: <Mail className="h-5 w-5" />,
    color: 'hover:border-rose-400/70 hover:shadow-rose-500/20 text-rose-300',
    bgIcon: 'bg-rose-500/10 text-rose-400',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/adityaiw4',
    displayValue: 'linkedin.com/in/adityaiw4',
    icon: <Linkedin className="h-5 w-5" />,
    color: 'hover:border-blue-400/70 hover:shadow-blue-500/20 text-blue-300',
    bgIcon: 'bg-blue-500/10 text-blue-400',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/seizenz7',
    displayValue: 'github.com/seizenz7',
    icon: <Github className="h-5 w-5" />,
    color: 'hover:border-slate-300/70 hover:shadow-slate-300/20 text-slate-200',
    bgIcon: 'bg-slate-500/10 text-slate-300',
  },
  {
    name: 'GitLab',
    url: 'https://gitlab.com/seizenz',
    displayValue: 'gitlab.com/seizenz',
    icon: <Gitlab className="h-5 w-5" />,
    color: 'hover:border-orange-400/70 hover:shadow-orange-500/20 text-orange-300',
    bgIcon: 'bg-orange-500/10 text-orange-400',
  },
]

const ContactSection: React.FC = () => {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const c = t.contact

  return (
    <section aria-label="Contact & Links" className="flex flex-1 flex-col items-center justify-center">
      <div className="w-full max-w-2xl text-center">
        <header className="mb-10 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/90">
            {c.sectionTag}
          </p>
          <h2
            className="text-3xl font-bold text-slate-50 md:text-4xl"
            style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
          >
            {c.sectionTitle}
          </h2>
          <p
            className="mx-auto max-w-lg text-sm text-slate-300 md:text-base"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {c.sectionDescription}
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {CONTACT_LINKS.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.name === 'Email' ? undefined : '_blank'}
              rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
              className={`group flex items-center gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 ${link.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${link.bgIcon}`}>
                {link.icon}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-slate-200">{link.name}</p>
                <p className="truncate text-xs text-slate-400 transition-colors group-hover:text-slate-300">
                  {link.displayValue}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-500 opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
