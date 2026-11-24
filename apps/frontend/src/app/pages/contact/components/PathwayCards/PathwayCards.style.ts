import { alpha, styled } from '@mui/material/styles';

export const PathwayList = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}));

export const PathwayButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected: boolean }>(({ theme, selected }) => ({
  all: 'unset',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2.5),
  padding: theme.spacing(3),
  borderRadius: 16,
  backgroundColor: theme.palette.surface.container,
  border: `1px solid ${selected ? theme.palette.primary.main : theme.palette.outline.variant}`,
  transition: theme.transitions.create(['border-color', 'background-color']),
  '&:hover': {
    borderColor: selected
      ? theme.palette.primary.main
      : theme.palette.outline.main,
  },
  '&:focus-visible': {
    outline: `2px solid ${alpha(theme.palette.primary.main, 0.6)}`,
    outlineOffset: 2,
  },
  '& .MuiSvgIcon-root': { color: theme.palette.primary.main, marginTop: 2 },
}));

export const PathwayTitle = styled('span')(({ theme }) => ({
  ...theme.typography.titleLg,
  display: 'block',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.5),
}));

export const PathwayDescription = styled('span')(({ theme }) => ({
  ...theme.typography.bodyLg,
  display: 'block',
  color: theme.palette.text.secondary,
}));
