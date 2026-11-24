import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CtaRoot = styled('section')(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

export const CtaPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  textAlign: 'center',
  borderRadius: 24,
  border: `1px solid ${theme.palette.outline.variant}`,
  background: `linear-gradient(135deg, ${theme.palette.primary.container} 0%, ${theme.palette.surface.container} 70%)`,
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(6, 3) },
}));

export const CtaButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
})) as typeof Button;
