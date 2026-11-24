import { Container, Grid } from '@mui/material';
import { SectionHeading, ServiceCard } from '../../../components';
import { SERVICES } from '../../../data';
import { useDocumentTitle } from '../../../hooks';
import { SERVICES_PAGE_CONTENT } from './data';
import { ServicesPageRoot } from './ServicesPage.style';

export function ServicesPage() {
  useDocumentTitle('Services');

  return (
    <ServicesPageRoot>
      <Container maxWidth="lg">
        <SectionHeading
          as="h1"
          title={SERVICES_PAGE_CONTENT.title}
          subtitle={SERVICES_PAGE_CONTENT.subtitle}
        />
        <Grid container spacing={3}>
          {SERVICES.map((service, index) => (
            <Grid key={service.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <ServiceCard
                service={service}
                badge={String(index + 1).padStart(2, '0')}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ServicesPageRoot>
  );
}
