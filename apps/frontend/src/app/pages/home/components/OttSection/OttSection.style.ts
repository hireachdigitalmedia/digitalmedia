import { styled } from '@mui/material/styles';

export const OttHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(6),
}));

export const HeaderActions = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

export const CARD_WIDTH = 340;
export const CARD_GAP = 24;

export const Carousel = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  margin: 0,
  padding: theme.spacing(0, 0, 1),
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: CARD_WIDTH,
  gap: CARD_GAP,
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' },
  '& > li': { scrollSnapAlign: 'start' },
  [theme.breakpoints.down('sm')]: { gridAutoColumns: '82%' },
}));
