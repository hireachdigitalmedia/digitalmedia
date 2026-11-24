import { Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks';

export function NotFoundPage() {
  useDocumentTitle('Page not found');

  return (
    <Container maxWidth="sm" sx={{ py: 12, textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        404
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </Typography>
      <Button variant="contained" component={RouterLink} to="/">
        Back to home
      </Button>
    </Container>
  );
}
