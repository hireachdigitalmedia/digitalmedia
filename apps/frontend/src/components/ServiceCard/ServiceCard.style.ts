import { Card } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

export const ServiceCardRoot = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: theme.transitions.create(['border-color', 'transform']),
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.6),
    transform: 'translateY(-2px)',
  },
}));

export const IconTile = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  marginBottom: theme.spacing(2),
  borderRadius: 12,
  backgroundColor: theme.palette.surface.containerHigh,
  color: theme.palette.primary.main,
  ...theme.typography.titleMd,
}));
