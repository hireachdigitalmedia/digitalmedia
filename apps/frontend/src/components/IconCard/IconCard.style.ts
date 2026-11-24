import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const IconCardRoot = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4.5),
  transition: theme.transitions.create('border-color'),
  '&:hover': { borderColor: theme.palette.outline.main },
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(3) },
}));

export const IconCardHeader = styled('div', {
  shouldForwardProp: (prop) => prop !== 'inline',
})<{ inline: boolean }>(({ theme, inline }) => ({
  display: 'flex',
  flexDirection: inline ? 'row' : 'column',
  alignItems: inline ? 'center' : 'flex-start',
  gap: theme.spacing(inline ? 2.5 : 3),
  marginBottom: theme.spacing(inline ? 3.5 : 2),
}));
