import { Fragment } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { SectionDivider } from '../components/SectionDivider'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../content/projects'

export function Projects() {
  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-title">
      <SectionHeading
        eyebrow="Selected work · GIS and Earth observation"
        title="Featured projects"
        description="Web-GIS applications, satellite-data viewers, and drone-mapping deliverables."
        id="projects-title"
      />
      <div className="project-list">
        {projects.map((project, index) => (
          <Fragment key={project.slug}>
            {index > 0 ? <SectionDivider className="section-divider--project" /> : null}
            <ProjectCard project={project} />
          </Fragment>
        ))}
      </div>
    </section>
  )
}
