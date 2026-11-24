import { CardContent, Typography } from '@mui/material';
import type { Service } from '../../data/services';
import { IconTile, ServiceCardRoot } from './ServiceCard.style';

export interface ServiceCardProps {
  service: Service;
  /** Shown in the icon tile (e.g. "01"); defaults to the service's initial. */
  badge?: string;
}

export function ServiceCard({ service, badge }: ServiceCardProps) {
  return (
    <ServiceCardRoot>
      <CardContent>
        <IconTile aria-hidden>{badge ?? service.title.charAt(0)}</IconTile>
        <Typography variant="titleLg" component="h3" gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="bodyMd" color="text.secondary">
          {service.description}
        </Typography>
      </CardContent>
    </ServiceCardRoot>
  );
}
