import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ValuesRoot = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.surface.containerLow,
}));

export const ValueCard = styled(Card)({
  height: '100%',
});
