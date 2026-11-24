import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormRoot = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
})) as typeof Stack;
