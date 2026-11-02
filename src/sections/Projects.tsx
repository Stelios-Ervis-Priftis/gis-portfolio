import { ProjectCard } from '../components/ProjectCard'
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
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
