/**
 * Locale index — exports all translations and a helper to pick the right one.
 */

export { en } from './en'
export type { Translations } from './en'
export { id } from './id'

import { en } from './en'
import { id } from './id'
import type { Language } from '../types/language'
import type { Translations } from './en'

export const locales: Record<Language, Translations> = { en, id }

/**
 * Returns the translation object for the given language.
 */
export const getTranslations = (lang: Language): Translations => locales[lang]
