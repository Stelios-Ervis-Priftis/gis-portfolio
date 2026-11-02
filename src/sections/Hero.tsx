import ljubljanaMap from '../assets/ljubljana-map.webp'
import { Icon } from '../components/Icon'
import { personal } from '../content/personal'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">GIS · Earth observation · Web applications</p>
        <h1 id="hero-title">{personal.name}</h1>
        <p className="hero-tagline">{personal.tagline}</p>
        <p className="hero-subline">{personal.subline}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={personal.cv.href} download>
            {personal.cv.label}
            <Icon name="download" size={18} />
          </a>
          <a className="button button-secondary" href="#contact">
            Start a conversation
            <Icon name="mail" size={18} />
          </a>
        </div>
        <ul className="social-links" aria-label="Professional profiles" role="list">
          <li>
            <a href={personal.socials.github} target="_blank" rel="noreferrer">
              <Icon name="github" /> GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={personal.socials.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" /> LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="hero-map-wrap">
        <div className="hero-map" aria-hidden="true">
          <img
            className="hero-map-image"
            src={ljubljanaMap}
            alt=""
            width={768}
            height={768}
            decoding="async"
            fetchPriority="high"
          />
          <svg className="hero-map-overlay" viewBox="0 0 620 620" fill="none">
            <g className="map-grid" stroke="currentColor" opacity=".16">
              <path d="M0 77.5h620M0 155h620M0 232.5h620M0 310h620M0 387.5h620M0 465h620M0 542.5h620" />
              <path d="M77.5 0v620M155 0v620M232.5 0v620M310 0v620M387.5 0v620M465 0v620M542.5 0v620" />
            </g>
            <path d="M98 116 519 501" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round" opacity=".6" />
          </svg>
          <span className="map-label map-label-top">46.0569° N</span>
          <span className="map-label map-label-side">14.5058° E</span>
        </div>
        <div className="hero-location">
          <div>
            <Icon name="map-pin" size={19} />
            <span>{personal.location}</span>
          </div>
          <p>{personal.workStyle}</p>
        </div>
        <div className="hero-map-attribution">
          <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
            © OpenStreetMap contributors<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href="https://www.hotosm.org/en/" target="_blank" rel="noreferrer">
            Humanitarian OpenStreetMap Team<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
