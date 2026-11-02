import type { Project } from '../content/types'
import { Icon } from './Icon'
import { ProjectPreview } from './ProjectPreview'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" aria-labelledby={`${project.slug}-title`}>
      <ProjectPreview kind={project.preview} />
      <div className="project-content">
        <div className="project-meta">
          <span>{project.period}</span>
          {project.coordinateLabel ? <span>{project.coordinateLabel}</span> : null}
        </div>
        <h3 id={`${project.slug}-title`}>{project.title}</h3>
        <p className="project-role">{project.role}</p>
        <p className="project-context">{project.context}</p>
        <p className="project-summary">{project.summary}</p>
        <ul className="project-highlights" role="list">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <ul className="tag-list" aria-label={`${project.title} technologies`} role="list">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        {project.links.length > 0 ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <Icon name="arrow-up-right" size={17} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
