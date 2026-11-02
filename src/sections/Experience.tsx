import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../content/experience'

export function Experience() {
  return (
    <section id="experience" className="section-shell" aria-labelledby="experience-title">
      <SectionHeading
        eyebrow="Professional path"
        title="Experience"
        description="Five years in front-end development, Earth observation platforms, GIS analysis, and drone mapping."
        id="experience-title"
      />
      <ol className="timeline" role="list">
        {experience.map((item) => (
          <li key={`${item.period}-${item.title}`}>
            <p className="timeline-period">{item.period}</p>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.organization}</p>
              <p className="timeline-location">{item.location}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
