import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PlatformCardRoot = styled(Card)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  transition: theme.transitions.create('border-color'),
  '&:hover': { borderColor: theme.palette.outline.main },
  '&:hover img': { transform: 'scale(1.04)' },
}));

export const PlatformImageWrapper = styled('div')({
  overflow: 'hidden',
  aspectRatio: '16 / 9',
});

export const PlatformImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: theme.transitions.create('transform', { duration: 400 }),
}));

export const PlatformBody = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
}));
