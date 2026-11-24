import { Card } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

type Accent = 'primary' | 'tertiary';

export const EcosystemCardRoot = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent: Accent }>(({ theme, accent }) => ({
  height: '100%',
  padding: theme.spacing(5, 5.5),
  borderColor:
    accent === 'primary'
      ? alpha(theme.palette.primary.main, 0.5)
      : theme.palette.outline.variant,
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(3.5) },
}));

export const CardTop = styled('div', {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent: Accent }>(({ theme, accent }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(3),
  ...theme.typography.overline,
  fontSize: '0.8125rem',
  color:
    accent === 'primary'
      ? theme.palette.primary.main
      : theme.palette.text.secondary,
  '& .MuiSvgIcon-root': {
    fontSize: 32,
    color:
      accent === 'primary'
        ? theme.palette.primary.main
        : theme.palette.tertiary.main,
  },
}));

export const BrandName = styled('h3')(({ theme }) => ({
  ...theme.typography.headlineMd,
  textTransform: 'uppercase',
  margin: theme.spacing(0, 0, 2.5),
}));
