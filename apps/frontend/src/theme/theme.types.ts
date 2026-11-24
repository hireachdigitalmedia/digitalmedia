/**
 * MUI type augmentation so the custom design tokens are typed:
 *   theme.palette.surface.container, theme.palette.outline.variant,
 *   theme.palette.primary.container, <Typography variant="displayLg" />, …
 */
import type { CSSProperties } from '@mui/material/styles';
import '@mui/material/styles';
import '@mui/material/Typography';
import '@mui/material/Button';

interface SurfacePalette {
  main: string;
  containerLow: string;
  container: string;
  containerHigh: string;
}

interface OutlinePalette {
  main: string;
  variant: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    surface: SurfacePalette;
    outline: OutlinePalette;
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    surface?: SurfacePalette;
    outline?: OutlinePalette;
  }
  interface PaletteColor {
    container?: string;
    hover?: string;
  }
  interface SimplePaletteColorOptions {
    container?: string;
    hover?: string;
  }

  interface TypographyVariants {
    displayLg: CSSProperties;
    displayMd: CSSProperties;
    headlineLg: CSSProperties;
    headlineMd: CSSProperties;
    headlineSm: CSSProperties;
    titleLg: CSSProperties;
    titleMd: CSSProperties;
    bodyLg: CSSProperties;
    bodyMd: CSSProperties;
    labelLg: CSSProperties;
    labelSm: CSSProperties;
  }
  interface TypographyVariantsOptions {
    displayLg?: CSSProperties;
    displayMd?: CSSProperties;
    headlineLg?: CSSProperties;
    headlineMd?: CSSProperties;
    headlineSm?: CSSProperties;
    titleLg?: CSSProperties;
    titleMd?: CSSProperties;
    bodyLg?: CSSProperties;
    bodyMd?: CSSProperties;
    labelLg?: CSSProperties;
    labelSm?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLg: true;
    displayMd: true;
    headlineLg: true;
    headlineMd: true;
    headlineSm: true;
    titleLg: true;
    titleMd: true;
    bodyLg: true;
    bodyMd: true;
    labelLg: true;
    labelSm: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}
