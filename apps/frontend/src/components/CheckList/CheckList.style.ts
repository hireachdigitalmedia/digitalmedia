import { styled } from '@mui/material/styles';

export const List = styled('ul', {
  shouldForwardProp: (prop) => prop !== 'columns',
})<{ columns: 1 | 2 }>(({ theme, columns }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  gap: columns === 2 ? theme.spacing(3, 4) : theme.spacing(1.75),
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
}));

export const Item = styled('li')(({ theme }) => ({
  ...theme.typography.bodyLg,
  fontSize: '1.0625rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  '& .MuiSvgIcon-root': { color: theme.palette.primary.main, flexShrink: 0 },
}));
