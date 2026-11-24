import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeadingRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'align',
})<{ align: 'left' | 'center' }>(({ theme, align }) => ({
  textAlign: align,
  maxWidth: align === 'center' ? 720 : undefined,
  marginLeft: align === 'center' ? 'auto' : undefined,
  marginRight: align === 'center' ? 'auto' : undefined,
  marginBottom: theme.spacing(5),
}));

export const Eyebrow = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 700,
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  marginBottom: theme.spacing(1),
}));
