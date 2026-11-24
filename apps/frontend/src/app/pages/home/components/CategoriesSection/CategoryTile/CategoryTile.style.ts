import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const TileLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  overflow: 'hidden',
  aspectRatio: '16 / 9',
  borderRadius: 20,
  border: `1px solid ${theme.palette.outline.variant}`,
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, rgba(16,16,20,0.15) 30%, rgba(16,16,20,0.9) 100%)',
  },
  '&:hover img, &:focus-visible img': { transform: 'scale(1.05)' },
  '&:hover .tile-arrow, &:focus-visible .tile-arrow': {
    transform: 'translateX(4px)',
    color: theme.palette.primary.main,
  },
}));

export const TileImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: theme.transitions.create('transform', { duration: 400 }),
}));

export const TileFooter = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(3.5),
  right: theme.spacing(3.5),
  bottom: theme.spacing(3),
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ...theme.typography.headlineSm,
  '& .tile-arrow': {
    transition: theme.transitions.create(['transform', 'color']),
  },
}));
