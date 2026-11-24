import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const LinkRow = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1.25),
}));

export const PillLink = styled(Link)(({ theme }) => ({
  ...theme.typography.labelLg,
  padding: theme.spacing(0.75, 2),
  borderRadius: 8,
  border: `1px solid ${theme.palette.outline.variant}`,
  backgroundColor: theme.palette.surface.container,
  color: theme.palette.text.primary,
  textDecoration: 'none',
  transition: theme.transitions.create(['border-color', 'color']),
  '&:hover, &:focus-visible': {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
}));
