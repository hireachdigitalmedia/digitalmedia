import { styled } from '@mui/material/styles';

export const SplitGrid = styled('div', {
  shouldForwardProp: (prop) => prop !== 'reverse',
})<{ reverse: boolean }>(({ theme, reverse }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  gap: theme.spacing(6),
  // image on the right; on small screens the image stays on top
  '& > :first-of-type': { order: reverse ? 2 : 0 },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    '& > :first-of-type': { order: 0 },
  },
}));
