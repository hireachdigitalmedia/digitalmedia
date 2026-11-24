import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MediaCardRoot = styled(Card)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  transition: theme.transitions.create('border-color'),
  '&:hover': { borderColor: theme.palette.outline.main },
  '&:hover img': { transform: 'scale(1.04)' },
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

export const CardBody = styled('div')(({ theme }) => ({
  padding: theme.spacing(3, 3.5),
}));
