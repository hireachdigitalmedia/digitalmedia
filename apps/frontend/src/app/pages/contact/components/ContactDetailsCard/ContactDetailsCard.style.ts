import { Card, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DetailsCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(3),
}));

export const DetailsTitle = styled('h3')(({ theme }) => ({
  ...theme.typography.titleLg,
  margin: theme.spacing(0, 0, 2),
}));

export const DetailLine = styled('p')(({ theme }) => ({
  ...theme.typography.bodyLg,
  color: theme.palette.text.secondary,
  margin: theme.spacing(0, 0, 1.25),
  '&:last-of-type': { marginBottom: 0 },
}));

export const DetailLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': { color: theme.palette.primary.main },
}));
