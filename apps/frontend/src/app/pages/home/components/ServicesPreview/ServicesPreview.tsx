import { Button, Container, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SectionHeading, ServiceCard } from '../../../../../components';
import { SERVICES } from '../../../../../data';
import { SERVICES_PREVIEW_CONTENT } from '../../data';
import { getFeaturedServices } from '../../utils';
import { ServicesPreviewRoot, ViewAllWrapper } from './ServicesPreview.style';

export function ServicesPreview() {
  const { eyebrow, title, viewAll, count } = SERVICES_PREVIEW_CONTENT;
  const services = getFeaturedServices(SERVICES, count);

  return (
    <ServicesPreviewRoot>
      <Container maxWidth="lg">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
        <ViewAllWrapper>
          <Button variant="text" component={RouterLink} to={viewAll.to}>
            {viewAll.label} →
          </Button>
        </ViewAllWrapper>
      </Container>
    </ServicesPreviewRoot>
  );
}
