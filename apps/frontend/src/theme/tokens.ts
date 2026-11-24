/**
 * Hi Reach Digital Media — design tokens.
 * Source of truth for colors, fonts and radii. Everything else in the theme reads from here.
 */

export const colors = {
  primary: '#FF7629',
  primaryHover: '#FF8C53',
  primaryContainer: '#571F00',
  tertiary: '#2AB8ED',
  surface: '#101014',
  surfaceContainerLow: '#191922',
  surfaceContainer: '#22222D',
  surfaceContainerHigh: '#2C2C3A',
  outline: '#78767B',
  outlineVariant: '#33333E',
  success: '#34D399',
  error: '#FF5449',

  // Not in the design-system sheet — chosen to read well on the dark surfaces.
  onPrimary: '#101014',
  onSurface: '#F4F4F6',
  onSurfaceVariant: '#B4B2B8',
} as const;

export const fonts = {
  display: '"Space Grotesk Variable", "Space Grotesk", system-ui, sans-serif',
  body: '"Inter Variable", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
} as const;

export const radius = {
  sm: 8, // buttons, inputs
  md: 12, // small cards, icon tiles
  lg: 16, // cards, accordions
} as const;

export type ColorToken = keyof typeof colors;
