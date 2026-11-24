import { CardContent, Typography } from '@mui/material';
import type { Service } from '../../data/services';
import { ServiceCardRoot } from './ServiceCard.style';

export interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <ServiceCardRoot variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
      </CardContent>
    </ServiceCardRoot>
  );
}
