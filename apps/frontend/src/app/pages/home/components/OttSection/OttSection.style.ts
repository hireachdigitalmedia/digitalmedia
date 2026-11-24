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
