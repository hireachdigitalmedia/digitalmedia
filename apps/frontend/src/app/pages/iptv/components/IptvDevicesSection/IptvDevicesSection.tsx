import { DeviceGrid, Section, SectionHeading } from '../../../../../components';
import { IPTV_DEVICES_CONTENT } from '../../data';

export function IptvDevicesSection() {
  const { eyebrow, title, note, devices } = IPTV_DEVICES_CONTENT;

  return (
    <Section tone="raised">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={note} />
      <DeviceGrid devices={devices} />
    </Section>
  );
}
