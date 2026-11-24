import { styled } from '@mui/material/styles';

export const MoviesHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(5),
}));

export const HeaderEnd = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));
