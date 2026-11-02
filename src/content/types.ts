export type ProjectPreviewKind = 'zagreen' | 'ember-lens' | 'tolmin'

export interface ProjectLink {
  label: string
  href: string
}

export interface PersonalInfo {
  name: string
  tagline: string
  subline: string
  location: string
  workStyle: string
  aboutParagraphs: string[]
  cv: ProjectLink
  socials: {
    github: string
    linkedin: string
  }
}

export interface Project {
  slug: string
  title: string
  role: string
  context: string
  period: string
  summary: string
  highlights: string[]
  technologies: string[]
  links: ProjectLink[]
  preview: ProjectPreviewKind
  coordinateLabel?: string
}

export interface ExperienceItem {
  period: string
  title: string
  organization: string
  location: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}
