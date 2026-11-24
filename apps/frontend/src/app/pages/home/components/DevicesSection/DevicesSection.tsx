import { DeviceGrid, Section, SectionHeading } from '../../../../../components';
import { DEVICES_CONTENT } from '../../data';

export function DevicesSection() {
  const { eyebrow, title, note, devices } = DEVICES_CONTENT;

  return (
    <Section glow="right">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={note} />
      <DeviceGrid devices={devices} />
    </Section>
  );
}
