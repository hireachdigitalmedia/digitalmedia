import { alpha, styled } from '@mui/material/styles';
import { sectionReveal } from '../../theme/effects';

export type SectionTone = 'base' | 'raised';
/** Soft ambient light behind the content, on the left or right edge. */
export type SectionGlow = 'left' | 'right';

export const SectionRoot = styled('section', {
  shouldForwardProp: (prop) =>
    !['tone', 'visible', 'glow'].includes(prop as string),
})<{ tone: SectionTone; visible: boolean; glow?: SectionGlow }>(
  ({ theme, tone, visible, glow }) => ({
    position: 'relative',
    overflow: 'hidden',
    isolation: 'isolate',
    padding: theme.spacing(12, 0),
    backgroundColor:
      tone === 'raised'
        ? theme.palette.surface.containerLow
        : theme.palette.surface.main,
    borderTop:
      tone === 'raised'
        ? `1px solid ${theme.palette.outline.variant}`
        : undefined,
    borderBottom:
      tone === 'raised'
        ? `1px solid ${theme.palette.outline.variant}`
        : undefined,
    [theme.breakpoints.down('md')]: { padding: theme.spacing(8, 0) },
    ...(glow && {
      '&::before': {
        content: '""',
        position: 'absolute',
        zIndex: -1,
        top: '10%',
        [glow]: '-15%',
        width: '55%',
        height: '80%',
        pointerEvents: 'none',
        background: `radial-gradient(closest-side, ${alpha(
          glow === 'right'
            ? theme.palette.primary.main
            : theme.palette.tertiary.main,
          glow === 'right' ? 0.12 : 0.08,
        )}, transparent)`,
      },
    }),
    ...sectionReveal(visible),
  }),
);
