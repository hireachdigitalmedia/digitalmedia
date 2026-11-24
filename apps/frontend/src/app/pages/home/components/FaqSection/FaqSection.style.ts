import { styled } from '@mui/material/styles';

export const FaqList = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  '& .MuiAccordion-root + .MuiAccordion-root': { marginTop: 0 },
  '& .MuiAccordionSummary-content': {
    ...theme.typography.titleLg,
    fontSize: '1.125rem',
    margin: theme.spacing(2.25, 0),
  },
}));
