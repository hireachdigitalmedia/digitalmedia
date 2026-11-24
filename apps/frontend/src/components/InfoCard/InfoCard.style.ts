import { Card } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

type Accent = 'primary' | 'tertiary';
export type InfoCardVariant = 'default' | 'brand';

export const InfoCardRoot = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'highlighted',
})<{ highlighted: boolean }>(({ theme, highlighted }) => ({
  height: '100%',
  padding: theme.spacing(5, 5.5),
  borderColor: highlighted
    ? alpha(theme.palette.primary.main, 0.5)
    : theme.palette.outline.variant,
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(3.5) },
}));

export const CardTop = styled('div', {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent: Accent }>(({ theme, accent }) => ({
  ...theme.typography.overline,
  fontSize: '0.8125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2.5),
  color:
    accent === 'tertiary'
      ? theme.palette.tertiary.main
      : theme.palette.primary.main,
  '& .MuiSvgIcon-root': { fontSize: 32 },
}));

export const CardTitle = styled('h3', {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant: InfoCardVariant }>(({ theme, variant }) => ({
  ...(variant === 'brand'
    ? theme.typography.headlineMd
    : theme.typography.headlineSm),
  textTransform: variant === 'brand' ? 'uppercase' : 'none',
  margin: theme.spacing(0, 0, 2.5),
}));
