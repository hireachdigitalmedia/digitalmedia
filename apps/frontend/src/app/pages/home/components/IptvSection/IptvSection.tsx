import ArrowForward from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Section, SectionHeading } from '../../../../../components';
import { SECTION_IDS } from '../../../../../router/routes';
import { IPTV_CONTENT } from '../../data';
import {
  FeatureGrid,
  FeatureItem,
  IptvGrid,
  IptvImage,
} from './IptvSection.style';

export function IptvSection() {
  const { eyebrow, title, subtitle, features, cta, image } = IPTV_CONTENT;

  return (
    <Section id={SECTION_IDS.iptv}>
      <IptvGrid>
        <IptvImage
          src={image.src}
          alt={image.alt}
          width={1400}
          height={1000}
          loading="lazy"
        />
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
          <FeatureGrid>
            {features.map(({ icon: Icon, label }) => (
              <FeatureItem key={label}>
                <Icon aria-hidden />
                {label}
              </FeatureItem>
            ))}
          </FeatureGrid>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            component={RouterLink}
            to={cta.to}
          >
            {cta.label}
          </Button>
        </div>
      </IptvGrid>
    </Section>
  );
}
