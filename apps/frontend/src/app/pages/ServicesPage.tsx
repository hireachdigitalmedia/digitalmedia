import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { useDocumentTitle } from '../../hooks';

const services = [
  {
    title: 'Social Media Marketing',
    body: 'Content and campaigns that build engaged audiences.',
  },
  {
    title: 'Search & Performance Ads',
    body: 'Paid campaigns optimised for measurable ROI.',
  },
  {
    title: 'Branding & Design',
    body: 'Identities and creative that make you memorable.',
  },
  {
    title: 'Website Development',
    body: 'Fast, modern websites that convert visitors.',
  },
];

export function ServicesPage() {
  useDocumentTitle('Services');

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Services
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {services.map((service) => (
          <Grid key={service.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
