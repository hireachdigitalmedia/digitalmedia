import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DistributionGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(6),
  alignItems: 'start',
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
}));

export const ChipList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  margin: theme.spacing(0, 0, 5),
  padding: 0,
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1.5),
}));

export const Chip = styled('li')(({ theme }) => ({
  ...theme.typography.labelLg,
  padding: theme.spacing(1, 2.5),
  borderRadius: 999,
  border: `1px solid ${theme.palette.outline.variant}`,
  backgroundColor: theme.palette.surface.container,
}));

export const RightColumn = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const BenefitsCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(3) },
}));
