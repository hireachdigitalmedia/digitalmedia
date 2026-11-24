import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ServiceCardRoot = styled(Card)(({ theme }) => ({
  height: '100%',
  borderTop: `4px solid ${theme.palette.secondary.main}`,
  transition: theme.transitions.create(['transform', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));
