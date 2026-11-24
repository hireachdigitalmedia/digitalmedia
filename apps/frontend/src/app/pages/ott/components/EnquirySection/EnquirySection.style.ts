import { styled } from '@mui/material/styles';

export const EnquiryGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  gap: theme.spacing(6),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
}));
