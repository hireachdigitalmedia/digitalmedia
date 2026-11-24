import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeroRoot = styled('section')(({ theme }) => ({
  padding: theme.spacing(14, 0),
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 60%)`,
  [theme.breakpoints.down('md')]: { padding: theme.spacing(8, 0) },
}));

export const HeroContent = styled(Stack)({
  alignItems: 'flex-start',
});

export const HeroActions = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));
