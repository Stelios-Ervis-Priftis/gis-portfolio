import { useState } from 'react'
import postFireImage from '../assets/projects/ember-lens-post-fire.webp'
import preFireImage from '../assets/projects/ember-lens-pre-fire.webp'

export function EmberLensCompare() {
  const [position, setPosition] = useState(50)

  return (
    <div className="project-visual project-visual-photo ember-compare" role="group" aria-label="Pre-fire and post-fire satellite comparison">
      <img
        className="ember-compare-image"
        src={preFireImage}
        alt="Pre-fire satellite view of the incident area"
        width={1440}
        height={821}
        loading="lazy"
        decoding="async"
      />
      <div className="ember-compare-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <img
          src={postFireImage}
          alt="Post-fire satellite view of the incident area"
          width={1440}
          height={821}
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="compare-label compare-label-pre">Pre-fire</span>
      <span className="compare-label compare-label-post">Post-fire</span>
      <div className="compare-divider" style={{ left: `${position}%` }} aria-hidden="true">
        <span>↔</span>
      </div>
      <input
        className="compare-range"
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        aria-label="Move the divider to compare pre-fire and post-fire imagery"
        aria-valuetext={`${position}% pre-fire and ${100 - position}% post-fire visible`}
        onChange={(event) => setPosition(Number(event.target.value))}
      />
      <span className="preview-corner preview-corner-top" />
      <span className="preview-corner preview-corner-bottom" />
    </div>
  )
}
