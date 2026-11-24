import { Card } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

export const FlowCardRoot = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(3) },
}));

export const FlowTitle = styled('h3')(({ theme }) => ({
  ...theme.typography.overline,
  fontSize: '0.8125rem',
  color: theme.palette.text.secondary,
  margin: theme.spacing(0, 0, 3),
}));

export const FlowList = styled('ol')(({ theme }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}));

export const FlowStep = styled('li', {
  shouldForwardProp: (prop) => prop !== 'highlighted',
})<{ highlighted: boolean }>(({ theme, highlighted }) => ({
  ...theme.typography.titleMd,
  fontFamily: theme.typography.displayLg.fontFamily,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2.5),
  padding: theme.spacing(2.75, 3),
  borderRadius: 12,
  backgroundColor: theme.palette.surface.containerHigh,
  border: `1px solid ${highlighted ? alpha(theme.palette.primary.main, 0.6) : 'transparent'}`,
  '& .MuiSvgIcon-root': { color: theme.palette.primary.main },
}));
