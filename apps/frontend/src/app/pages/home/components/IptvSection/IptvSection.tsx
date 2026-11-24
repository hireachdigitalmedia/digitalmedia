import {
  ActionButton,
  MediaSplit,
  Section,
  SectionHeading,
} from '../../../../../components';
import { SECTION_IDS } from '../../../../../router/routes';
import { IPTV_CONTENT } from '../../data';
import { FeatureGrid, FeatureItem } from './IptvSection.style';

export function IptvSection() {
  const { eyebrow, title, subtitle, features, cta, image } = IPTV_CONTENT;

  return (
    <Section id={SECTION_IDS.iptv}>
      <MediaSplit image={image}>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <FeatureGrid>
          {features.map(({ icon: Icon, label }) => (
            <FeatureItem key={label}>
              <Icon aria-hidden />
              {label}
            </FeatureItem>
          ))}
        </FeatureGrid>
        <ActionButton action={cta} arrow />
      </MediaSplit>
    </Section>
  );
}
