import tolminPreview from '../assets/projects/tolmin-parcel.webp'
import zagreenPreview from '../assets/projects/zagreen.webp'
import type { ProjectPreviewKind } from '../content/types'
import { EmberLensCompare } from './EmberLensCompare'

const previews: Record<Exclude<ProjectPreviewKind, 'ember-lens'>, { src: string; width: number; height: number; photographic?: boolean }> = {
  zagreen: { src: zagreenPreview, width: 1440, height: 821, photographic: true },
  tolmin: { src: tolminPreview, width: 1200, height: 819, photographic: true },
}

export function ProjectPreview({ kind }: { kind: ProjectPreviewKind }) {
  if (kind === 'ember-lens') return <EmberLensCompare />

  const preview = previews[kind]

  return (
    <div className={`project-visual${preview.photographic ? ' project-visual-photo' : ''}`} aria-hidden="true">
      <img
        src={preview.src}
        alt=""
        width={preview.width}
        height={preview.height}
        loading="lazy"
        decoding="async"
      />
      <span className="preview-corner preview-corner-top" />
      <span className="preview-corner preview-corner-bottom" />
    </div>
  )
}
