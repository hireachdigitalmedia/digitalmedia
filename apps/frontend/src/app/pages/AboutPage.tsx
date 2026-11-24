import { Container, Typography } from '@mui/material';
import { useDocumentTitle } from '../../hooks';

export function AboutPage() {
  useDocumentTitle('About');

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About us
      </Typography>
      <Typography color="text.secondary">
        Content for the About page goes here.
      </Typography>
    </Container>
  );
}
