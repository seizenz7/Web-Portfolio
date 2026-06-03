/**
 * Section ID definitions for the single-page portfolio.
 * Centralizes valid section identifiers used across layout and navigation.
 */

/**
 * Union type of all available section identifiers.
 */
export type SectionId = 'home' | 'about' | 'stack' | 'experience' | 'projects' | 'contact' | 'reflection'

/**
 * Ordered list of sections, useful for iterating through the layout.
 */
export const SECTION_ORDER: SectionId[] = ['home', 'experience', 'about', 'stack', 'projects', 'contact', 'reflection']