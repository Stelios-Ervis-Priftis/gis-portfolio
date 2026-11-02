import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../content/skills'

export function Skills() {
  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="Technical toolkit"
        title="Technical skills"
        description="Front-end development, web mapping, geospatial analysis, drone photogrammetry, and geospatial infrastructure."
        id="skills-title"
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <section className="skill-group" key={group.title} aria-labelledby={`skill-${group.title.replaceAll(' ', '-').replaceAll('&', 'and').toLowerCase()}`}>
            <h3 id={`skill-${group.title.replaceAll(' ', '-').replaceAll('&', 'and').toLowerCase()}`}>{group.title}</h3>
            <ul role="list">
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
