import { Typography } from '@mui/material';
import type { IconLabel } from '../../data/types';
import { IconTile } from '../IconTile';
import { DeviceCard, Grid } from './DeviceGrid.style';

export interface DeviceGridProps {
  devices: IconLabel[];
}

/** Row of device cards with a round icon tile and label. */
export function DeviceGrid({ devices }: DeviceGridProps) {
  return (
    <Grid data-stagger>
      {devices.map(({ icon, label }) => (
        <li key={label}>
          <DeviceCard>
            <IconTile icon={icon} shape="circle" size="lg" />
            <Typography variant="titleLg" component="h3">
              {label}
            </Typography>
          </DeviceCard>
        </li>
      ))}
    </Grid>
  );
}
