import { DeviceGrid, Section, SectionHeading } from '../../../../../components';
import { OTT_DEVICES_CONTENT } from '../../data';

export function OttDevicesSection() {
  const { eyebrow, title, note, devices } = OTT_DEVICES_CONTENT;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={note} />
      <DeviceGrid devices={devices} />
    </Section>
  );
}
