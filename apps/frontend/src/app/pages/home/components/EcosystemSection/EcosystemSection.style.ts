import { alpha, styled } from '@mui/material/styles';

export const EcosystemRow = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
  gap: theme.spacing(4),
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    justifyItems: 'stretch',
    gap: theme.spacing(2),
  },
}));

export const LinkBadge = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  justifySelf: 'center',
  width: 56,
  height: 56,
  borderRadius: '50%',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  color: theme.palette.primary.main,
  [theme.breakpoints.down('md')]: { transform: 'rotate(90deg)' },
}));
