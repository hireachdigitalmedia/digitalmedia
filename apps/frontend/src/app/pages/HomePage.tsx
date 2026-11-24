import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks';

export function HomePage() {
  useDocumentTitle();

  return (
    <Box sx={{ py: { xs: 8, md: 14 } }}>
      <Container maxWidth="md">
        <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
          <Typography variant="h2" component="h1">
            Grow your brand with Reach Digital Media
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Digital marketing, branding and web experiences that turn attention
            into results.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/contact"
            >
              Get in touch
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={RouterLink}
              to="/services"
            >
              Our services
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
