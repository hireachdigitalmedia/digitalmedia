import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const WhyChooseUsRoot = styled('section')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.paper,
}));

export const ReasonItem = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  borderLeft: `3px solid ${theme.palette.primary.main}`,
}));
