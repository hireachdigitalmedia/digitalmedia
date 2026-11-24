import { styled } from '@mui/material/styles';

export const SplitGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  gap: theme.spacing(6),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
}));

export const SplitImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  aspectRatio: '16 / 9',
  objectFit: 'cover',
  borderRadius: 24,
  border: `1px solid ${theme.palette.outline.variant}`,
}));
