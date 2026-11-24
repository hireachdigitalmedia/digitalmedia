import { Stack } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

export const HeroRoot = styled('section')(({ theme }) => ({
  padding: theme.spacing(16, 0),
  background: `radial-gradient(ellipse 70% 60% at 80% 0%, ${alpha(theme.palette.primary.main, 0.18)} 0%, transparent 70%)`,
  [theme.breakpoints.down('md')]: { padding: theme.spacing(9, 0) },
}));

export const HeroContent = styled(Stack)({
  alignItems: 'flex-start',
});

export const HeroActions = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
}));
