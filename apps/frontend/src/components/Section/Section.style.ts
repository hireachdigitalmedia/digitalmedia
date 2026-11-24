import { styled } from '@mui/material/styles';

export type SectionTone = 'base' | 'raised';

export const SectionRoot = styled('section', {
  shouldForwardProp: (prop) => prop !== 'tone',
})<{ tone: SectionTone }>(({ theme, tone }) => ({
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
}));
