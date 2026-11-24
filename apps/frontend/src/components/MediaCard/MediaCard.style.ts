import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { hoverLift } from '../../theme/effects';

export type MediaCardSize = 'md' | 'lg';

export const MediaCardRoot = styled(Card)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  ...hoverLift(theme),
  '&:hover img': { transform: 'scale(1.05)' },
}));

export const ImageWrapper = styled('div')({
  overflow: 'hidden',
  aspectRatio: '16 / 9',
});

export const CardImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: theme.transitions.create('transform', { duration: 400 }),
}));

export const CardBody = styled('div', {
  shouldForwardProp: (prop) => prop !== 'size',
})<{ size: MediaCardSize }>(({ theme, size }) => ({
  padding: size === 'lg' ? theme.spacing(4) : theme.spacing(3, 3.5),
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(3) },
}));

export const CardEyebrow = styled('span')(({ theme }) => ({
  ...theme.typography.overline,
  fontSize: '0.8125rem',
  display: 'block',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));
