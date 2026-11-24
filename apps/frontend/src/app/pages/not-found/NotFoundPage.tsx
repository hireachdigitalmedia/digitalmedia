import { Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useDocumentTitle } from '../../../hooks';
import { ROUTES } from '../../../router/routes';
import { NotFoundRoot } from './NotFoundPage.style';

export function NotFoundPage() {
  useDocumentTitle('Page not found');

  return (
    <NotFoundRoot>
      <Container maxWidth="sm">
        <Typography variant="displayLg" component="h1" gutterBottom>
          404
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          The page you&apos;re looking for doesn&apos;t exist.
        </Typography>
        <Button variant="contained" component={RouterLink} to={ROUTES.home}>
          Back to home
        </Button>
      </Container>
    </NotFoundRoot>
  );
}
