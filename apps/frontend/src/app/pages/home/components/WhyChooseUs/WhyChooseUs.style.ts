import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const WhyChooseUsRoot = styled('section')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.surface.containerLow,
  borderTop: `1px solid ${theme.palette.outline.variant}`,
  borderBottom: `1px solid ${theme.palette.outline.variant}`,
}));

export const ReasonItem = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2.5),
  borderLeft: `3px solid ${theme.palette.primary.main}`,
}));
