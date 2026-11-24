import { IconCard, Section, SectionHeading } from '../../../../../components';
import { CAPABILITIES_CONTENT } from '../../data';
import { getCapabilitySpan } from '../../utils';
import { CapabilityGrid } from './CapabilitiesSection.style';

export function CapabilitiesSection() {
  const { eyebrow, title, capabilities } = CAPABILITIES_CONTENT;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <CapabilityGrid>
        {capabilities.map((item, index) => (
          <div
            key={item.title}
            style={{
              gridColumn: `span ${getCapabilitySpan(index, capabilities.length)}`,
            }}
          >
            <IconCard {...item} />
          </div>
        ))}
      </CapabilityGrid>
    </Section>
  );
}
