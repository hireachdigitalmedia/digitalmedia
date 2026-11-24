import { styled } from '@mui/material/styles';

export const FeatureGrid = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  margin: theme.spacing(0, 0, 5),
  padding: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
}));

export const FeatureItem = styled('li')(({ theme }) => ({
  ...theme.typography.bodyLg,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.75),
  padding: theme.spacing(2.25, 3),
  borderRadius: 12,
  border: `1px solid ${theme.palette.outline.variant}`,
  backgroundColor: theme.palette.surface.container,
  '& .MuiSvgIcon-root': { color: theme.palette.primary.main },
}));
