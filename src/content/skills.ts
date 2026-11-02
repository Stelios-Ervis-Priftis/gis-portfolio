import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-end',
    skills: ['TypeScript', 'JavaScript', 'Angular', 'React', 'Zustand', 'Tailwind', 'PrimeNG'],
  },
  {
    title: 'Web mapping',
    skills: ['OpenLayers', 'MapLibre GL'],
  },
  {
    title: 'Geospatial',
    skills: ['QGIS', 'GeoPandas', 'Rasterio', 'rioxarray', 'GDAL', 'Sentinel-2/NDVI', 'Cartography'],
  },
  {
    title: 'Drone & photogrammetry',
    skills: ['DJI Mini 2', 'Litchi', 'WebODM/ODX', 'Georeferencing'],
  },
  {
    title: 'Data & infra',
    skills: ['PMTiles', 'COG', 'GeoServer WMS', 'Sentinel Hub APIs', 'Hetzner S3', 'REST', 'Git'],
  },
]
