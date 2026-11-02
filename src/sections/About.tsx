import { SectionHeading } from '../components/SectionHeading'
import { personal } from '../content/personal'

export function About() {
  return (
    <section id="about" className="section-shell about-section" aria-labelledby="about-title">
      <SectionHeading eyebrow="Profile · 5 years in software" title="Earth observation and geospatial development" id="about-title" />
      <div className="about-copy">
        {personal.aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
