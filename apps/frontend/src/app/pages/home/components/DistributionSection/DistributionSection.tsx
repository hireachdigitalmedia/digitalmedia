import ArrowForward from '@mui/icons-material/ArrowForward';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Section, SectionHeading } from '../../../../../components';
import { SECTION_IDS } from '../../../../../router/routes';
import { DISTRIBUTION_CONTENT } from '../../data';
import { DistributionFlow } from './DistributionFlow';
import {
  Benefit,
  BenefitList,
  BenefitsCard,
  Chip,
  ChipList,
  DistributionGrid,
  RightColumn,
} from './DistributionSection.style';

export function DistributionSection() {
  const {
    eyebrow,
    title,
    subtitle,
    partnerTypes,
    cta,
    flowTitle,
    flow,
    benefits,
  } = DISTRIBUTION_CONTENT;

  return (
    <Section id={SECTION_IDS.distribution} tone="raised">
      <DistributionGrid>
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
          <ChipList aria-label="Partner types">
            {partnerTypes.map((type) => (
              <Chip key={type}>{type}</Chip>
            ))}
          </ChipList>
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
        <RightColumn>
          <DistributionFlow title={flowTitle} steps={flow} />
          <BenefitsCard>
            <BenefitList>
              {benefits.map((benefit) => (
                <Benefit key={benefit}>
                  <CheckCircleOutlined aria-hidden />
                  {benefit}
                </Benefit>
              ))}
            </BenefitList>
          </BenefitsCard>
        </RightColumn>
      </DistributionGrid>
    </Section>
  );
}
