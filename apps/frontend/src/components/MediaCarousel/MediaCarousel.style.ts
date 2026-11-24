import { styled } from '@mui/material/styles';

export const CARD_WIDTH = 340;
export const CARD_GAP = 24;

export const CarouselList = styled('ul', {
  shouldForwardProp: (prop) => prop !== 'cardWidth',
})<{ cardWidth: number }>(({ theme, cardWidth }) => ({
  listStyle: 'none',
  margin: 0,
  padding: theme.spacing(0, 0, 1),
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: cardWidth,
  gap: CARD_GAP,
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' },
  '& > li': { scrollSnapAlign: 'start' },
  [theme.breakpoints.down('sm')]: { gridAutoColumns: '82%' },
}));

export const Controls = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}));
