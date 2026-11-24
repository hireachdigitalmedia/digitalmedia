import { Typography } from '@mui/material';
import { IconTile, Section, SectionHeading } from '../../../../../components';
import { DEVICES_CONTENT } from '../../data';
import { DeviceCard, DeviceGrid } from './DevicesSection.style';

export function DevicesSection() {
  const { eyebrow, title, note, devices } = DEVICES_CONTENT;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={note} />
      <DeviceGrid>
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
      </DeviceGrid>
    </Section>
  );
}
