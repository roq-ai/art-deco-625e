const mapping: Record<string, string> = {
  'color-palettes': 'color_palette',
  designs: 'design',
  galleries: 'gallery',
  motifs: 'motif',
  users: 'user',
  versions: 'version',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
