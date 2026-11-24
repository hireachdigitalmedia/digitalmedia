import { InfoCard, Section } from '../../../../../components';
import { VISION_MISSION } from '../../data';
import { TwoColumnGrid } from './VisionMissionSection.style';

export function VisionMissionSection() {
  return (
    <Section tone="raised">
      <TwoColumnGrid data-stagger>
        {VISION_MISSION.map((item) => (
          <InfoCard key={item.eyebrow} {...item} />
        ))}
      </TwoColumnGrid>
    </Section>
  );
}
