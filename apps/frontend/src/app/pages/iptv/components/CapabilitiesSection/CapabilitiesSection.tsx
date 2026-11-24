import {
  IconCardGrid,
  Section,
  SectionHeading,
} from '../../../../../components';
import { CAPABILITIES_CONTENT } from '../../data';

export function CapabilitiesSection() {
  const { eyebrow, title, capabilities } = CAPABILITIES_CONTENT;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <IconCardGrid items={capabilities} />
    </Section>
  );
}
