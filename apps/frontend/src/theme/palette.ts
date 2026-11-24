import type { PaletteOptions } from '@mui/material/styles';
import { colors } from './tokens';

export const palette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: colors.primary,
    light: colors.primaryHover,
    dark: colors.primaryContainer,
    contrastText: colors.onPrimary,
    hover: colors.primaryHover,
    container: colors.primaryContainer,
  },
  // MUI has no "tertiary" slot of its own; secondary points at it too.
  secondary: { main: colors.tertiary, contrastText: colors.onPrimary },
  tertiary: { main: colors.tertiary, contrastText: colors.onPrimary },
  success: { main: colors.success, contrastText: colors.onPrimary },
  error: { main: colors.error, contrastText: colors.onPrimary },
  background: {
    default: colors.surface,
    paper: colors.surfaceContainer,
  },
  surface: {
    main: colors.surface,
    containerLow: colors.surfaceContainerLow,
    container: colors.surfaceContainer,
    containerHigh: colors.surfaceContainerHigh,
  },
  outline: {
    main: colors.outline,
    variant: colors.outlineVariant,
  },
  text: {
    primary: colors.onSurface,
    secondary: colors.onSurfaceVariant,
    disabled: colors.outline,
  },
  divider: colors.outlineVariant,
};
