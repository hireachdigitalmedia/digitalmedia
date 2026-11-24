import {
  createTheme,
  type TypographyVariantsOptions,
} from '@mui/material/styles';
import type { CSSProperties } from '@mui/material/styles';
import { fonts } from './tokens';

const { breakpoints } = createTheme();
const mobile = breakpoints.down('md');

/** px → unitless line height (MUI expects unitless). */
const lh = (lineHeight: number, size: number) =>
  +(lineHeight / size).toFixed(3);

const type = (
  family: string,
  weight: number,
  size: number,
  lineHeight: number,
  letterSpacing = 0,
  mobileSize?: number,
): CSSProperties => ({
  fontFamily: family,
  fontWeight: weight,
  fontSize: `${size / 16}rem`,
  lineHeight: lh(lineHeight, size),
  letterSpacing: letterSpacing ? `${letterSpacing}px` : undefined,
  ...(mobileSize && { [mobile]: { fontSize: `${mobileSize / 16}rem` } }),
});

/**
 * Type scale. Display LG, Headline LG, Body LG and Label SM come from the design-system sheet;
 * the in-between sizes follow the same fonts and step down evenly.
 */
const scale = {
  displayLg: type(fonts.display, 700, 56, 62, -1, 40), // sheet: Space Grotesk 700, 56/62, -1px
  displayMd: type(fonts.display, 700, 45, 52, -0.5, 34),
  headlineLg: type(fonts.display, 700, 40, 48, -0.5, 30), // sheet: Space Grotesk 700, 40/48, -0.5px
  headlineMd: type(fonts.display, 700, 32, 40, -0.25, 26),
  headlineSm: type(fonts.display, 600, 24, 32, 0, 22),
  titleLg: type(fonts.display, 600, 22, 28),
  titleMd: type(fonts.body, 600, 16, 24, 0.15),
  bodyLg: type(fonts.body, 400, 16, 24), // sheet: Inter 400
  bodyMd: type(fonts.body, 400, 14, 20),
  labelLg: type(fonts.body, 600, 14, 20, 0.1),
  labelSm: type(fonts.body, 600, 11, 16, 0.5), // sheet: Inter 600
};

export const typography: TypographyVariantsOptions = {
  fontFamily: fonts.body,
  ...scale,
  // Standard MUI variants mapped onto the scale, so existing components follow it too.
  h1: scale.displayLg,
  h2: scale.headlineLg,
  h3: scale.headlineMd,
  h4: scale.headlineSm,
  h5: scale.titleLg,
  h6: scale.titleMd,
  subtitle1: scale.titleMd,
  subtitle2: scale.labelLg,
  body1: scale.bodyLg,
  body2: scale.bodyMd,
  button: { ...scale.labelLg, textTransform: 'none' },
  caption: { ...scale.labelSm, fontWeight: 400, letterSpacing: '0.4px' },
  overline: {
    ...scale.labelSm,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
};

/** Which HTML element each custom variant renders as by default. */
export const variantMapping = {
  displayLg: 'h1',
  displayMd: 'h1',
  headlineLg: 'h2',
  headlineMd: 'h2',
  headlineSm: 'h3',
  titleLg: 'h3',
  titleMd: 'h4',
  bodyLg: 'p',
  bodyMd: 'p',
  labelLg: 'span',
  labelSm: 'span',
} as const;
