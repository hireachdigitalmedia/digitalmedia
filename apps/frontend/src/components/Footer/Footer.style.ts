import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterRoot = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  padding: theme.spacing(9, 0, 5),
  backgroundColor: theme.palette.surface.main,
  borderTop: `1px solid ${theme.palette.outline.variant}`,
}));

export const FooterGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '2fr repeat(4, 1fr)',
  gap: theme.spacing(5),
  [theme.breakpoints.down('lg')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
}));

export const BrandColumn = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  [theme.breakpoints.down('lg')]: { gridColumn: '1 / -1' },
}));

export const ColumnTitle = styled('h3')(({ theme }) => ({
  ...theme.typography.titleMd,
  fontFamily: theme.typography.displayLg.fontFamily,
  margin: theme.spacing(0, 0, 2),
}));

export const LinkList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.25),
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  ...theme.typography.bodyLg,
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  '&:hover': { color: theme.palette.primary.main },
})) as typeof Link;

export const BottomBar = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(4),
  borderTop: `1px solid ${theme.palette.outline.variant}`,
}));
