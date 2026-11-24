import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BenefitsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'start',
  gap: theme.spacing(6),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
}));

export const BenefitsCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(5),
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(3) },
}));

export const BenefitsTitle = styled('h3')(({ theme }) => ({
  ...theme.typography.headlineSm,
  margin: theme.spacing(0, 0, 3),
}));
