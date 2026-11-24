import { Box, Container, Typography } from '@mui/material';
import { env } from '../utils/env';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 4, mt: 'auto', bgcolor: 'background.paper' }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} {env.appName}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
