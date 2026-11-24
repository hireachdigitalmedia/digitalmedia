import { styled } from '@mui/material/styles';

export const CtaContent = styled('div')(({ theme }) => ({
  textAlign: 'center',
  maxWidth: 860,
  margin: '0 auto',
  padding: theme.spacing(2, 0),
}));

export const CtaActions = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4.5),
}));
