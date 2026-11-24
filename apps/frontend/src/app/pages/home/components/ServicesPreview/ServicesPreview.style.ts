import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ServicesPreviewRoot = styled('section')(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

export const ViewAllWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(5),
}));
