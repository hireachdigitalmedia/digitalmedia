import { alpha, type Components, type Theme } from '@mui/material/styles';
import { variantMapping } from './typography';
import { colors, radius } from './tokens';

export const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: colors.surface,
        color: colors.onSurface,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      '::selection': { backgroundColor: alpha(colors.primary, 0.35) },
    },
  },

  MuiTypography: {
    defaultProps: { variantMapping },
  },

  // Dark-mode MUI adds a white overlay gradient to Paper; the design uses flat surfaces.
  MuiPaper: {
    styleOverrides: { root: { backgroundImage: 'none' } },
  },

  // ---------- Buttons ----------
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: {
        borderRadius: radius.sm,
        padding: '10px 20px',
        transition:
          'background-color 150ms ease, border-color 150ms ease, color 150ms ease',
      },
      sizeLarge: { padding: '12px 24px', fontSize: '0.9375rem' },
      sizeSmall: { padding: '6px 14px' },
    },
    variants: [
      // Primary — orange fill, dark label
      {
        props: { variant: 'contained', color: 'primary' },
        style: {
          backgroundColor: colors.primary,
          color: colors.onPrimary,
          '&:hover': { backgroundColor: colors.primaryHover },
          '&.Mui-disabled': {
            backgroundColor: alpha(colors.primary, 0.4),
            color: alpha(colors.onPrimary, 0.7),
          },
        },
      },
      // Secondary — dark fill, outline border, light label
      {
        props: { variant: 'outlined' },
        style: {
          backgroundColor: colors.surfaceContainerLow,
          borderColor: colors.outlineVariant,
          color: colors.onSurface,
          '&:hover': {
            backgroundColor: colors.surfaceContainerHigh,
            borderColor: colors.outline,
          },
          '&.Mui-disabled': {
            borderColor: colors.outlineVariant,
            color: colors.outline,
          },
        },
      },
      {
        props: { variant: 'text' },
        style: {
          color: colors.primary,
          '&:hover': { backgroundColor: alpha(colors.primary, 0.08) },
        },
      },
    ],
  },

  // ---------- Containment ----------
  MuiCard: {
    defaultProps: { variant: 'outlined' },
    styleOverrides: {
      root: {
        backgroundColor: colors.surfaceContainer,
        borderColor: colors.outlineVariant,
        borderRadius: radius.lg,
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: { padding: 24, '&:last-child': { paddingBottom: 24 } },
    },
  },

  MuiAccordion: {
    defaultProps: { disableGutters: true, elevation: 0 },
    styleOverrides: {
      root: {
        backgroundColor: colors.surfaceContainer,
        border: `1px solid ${colors.outlineVariant}`,
        borderRadius: radius.lg,
        '&:first-of-type, &:last-of-type': { borderRadius: radius.lg },
        '&::before': { display: 'none' },
        '& + &': { marginTop: 12 },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: { padding: '8px 24px' },
      content: { fontWeight: 700 },
      expandIconWrapper: { color: colors.onSurfaceVariant },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: { padding: '0 24px 20px', color: colors.onSurfaceVariant },
    },
  },

  // ---------- Inputs ----------
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: radius.sm,
        backgroundColor: colors.surfaceContainerLow,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.outlineVariant,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.outline,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.primary,
        },
      },
    },
  },

  MuiAlert: {
    styleOverrides: { root: { borderRadius: radius.md } },
  },

  MuiDivider: {
    styleOverrides: { root: { borderColor: colors.outlineVariant } },
  },
};
