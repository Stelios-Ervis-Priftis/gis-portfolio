import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'zagreen',
    title: 'ZAGreen',
    role: 'GIS Developer, LIST LABS d.o.o.',
    context: 'City of Zagreb 2025 open-data grant',
    period: 'Feb–Oct 2026',
    summary:
      'A web-GIS application mapping and ranking green-roof candidates across Zagreb to support urban heat-island mitigation.',
    highlights: [
      'Five-phase Python pipeline with GeoPandas, Rasterio, rioxarray, and NumPy; a custom unvegetated index across 11,477 landuse zones, buffers around 132,167 buildings, and 70,855 LiDAR-derived flat roofs.',
      'NDVI from peak heat-stress Sentinel-2 imagery from June–August 2025, exported to COG and served through GeoServer WMS; vectors delivered through PMTiles.',
      'Bilingual HR/EN viewer built with React 19, TypeScript, OpenLayers 10, Zustand, and Tailwind, with 10 layers and Jenks natural-breaks priority tiers.',
    ],
    technologies: ['React 19', 'OpenLayers 10', 'Python', 'GeoPandas', 'Rasterio', 'PMTiles', 'COG'],
    links: [{ label: 'Explore ZAGreen', href: 'https://zagreen.listlabs.net/' }],
    preview: 'zagreen',
    coordinateLabel: '45.8154° N · 15.9819° E',
  },
  {
    slug: 'ember-lens',
    title: 'Ember Lens',
    role: 'Personal project',
    context: 'European wildfire visualization · EFFIS perimeters and hotspots',
    period: '2024–ongoing',
    summary:
      'An interactive map of European wildfire incidents from 2018–2025, with EFFIS perimeters, hotspots, and pre-/post-fire Sentinel-2 imagery.',
    highlights: [
      'Time-filtered heatmap with intensity scaled by burned area, from 200 to more than 10,000 hectares.',
      'Per-incident view with 3D terrain and hillshade, plus pre-/post-fire Sentinel-2 L1C/L2A imagery through Sentinel Hub and the Copernicus Data Space.',
      'Before–after comparison slider with true-colour, false-colour infrared, and NDVI composites.',
      'Shareable event URLs that preserve the full map state.',
    ],
    technologies: ['Angular 19', 'ngx-maplibre-gl', 'PrimeNG', 'Sentinel-2', 'EFFIS'],
    links: [
      { label: 'Open Ember Lens', href: 'https://ember-lens.netlify.app/' },
      {
        label: 'View analysis demo',
        href: 'https://ember-lens.netlify.app/?mode=analysis&selectedEventId=213578&center=23.31895351409912,38.87002171064155',
      },
    ],
    preview: 'ember-lens',
    coordinateLabel: '38.8700° N · 23.3190° E',
  },
  {
    slug: 'tolmin-parcel',
    title: 'Tolmin Parcel',
    role: 'Independent pro bono project',
    context: 'Drone survey & GIS mapping · Tolmin, Slovenia',
    period: '2026–ongoing',
    summary:
      'A measurable digital base map for a residential parcel, produced from drone imagery and digitised into maintainable GIS layers.',
    highlights: [
      'DJI Mini 2 and Litchi automated area-mapping mission, capturing 106 nadir images.',
      'WebODM processing produced a sub-centimetre orthophoto at 0.85 cm GSD and a 3D model.',
      'Georeferenced against the GURS national orthophoto into EPSG:3794 (D96/TM).',
      'Multi-layer GeoPackage with boundary, land-use zones, and structures digitised in QGIS with auto-calculated areas.',
    ],
    technologies: ['DJI Mini 2', 'Litchi', 'WebODM', 'QGIS', 'GeoPackage', 'EPSG:3794'],
    links: [],
    preview: 'tolmin',
  },
]
