import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CtaRoot = styled('section')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
}));

export const CtaButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  backgroundColor: theme.palette.secondary.main,
  '&:hover': { backgroundColor: theme.palette.secondary.dark },
})) as typeof Button;
