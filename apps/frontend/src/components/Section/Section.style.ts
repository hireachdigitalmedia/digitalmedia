import { styled } from '@mui/material/styles';
import { sectionReveal } from '../../theme/effects';

export type SectionTone = 'base' | 'raised';

export const SectionRoot = styled('section', {
  shouldForwardProp: (prop) => prop !== 'tone' && prop !== 'visible',
})<{ tone: SectionTone; visible: boolean }>(({ theme, tone, visible }) => ({
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
  ...sectionReveal(visible),
}));
