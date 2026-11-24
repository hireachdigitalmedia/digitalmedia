import ArrowForward from '@mui/icons-material/ArrowForward';
import LinkOutlined from '@mui/icons-material/LinkOutlined';
import { Button } from '@mui/material';
import { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { InfoCard, Section, SectionHeading } from '../../../../../components';
import { ECOSYSTEM_CONTENT } from '../../data';
import { EcosystemRow, LinkBadge } from './EcosystemSection.style';

export function EcosystemSection() {
  const { eyebrow, title, subtitle, brands, cta } = ECOSYSTEM_CONTENT;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <EcosystemRow>
        {brands.map((brand, index) => (
          <Fragment key={brand.title}>
            {index > 0 && (
              <LinkBadge aria-hidden>
                <LinkOutlined />
              </LinkBadge>
            )}
            <InfoCard variant="brand" {...brand} />
          </Fragment>
        ))}
      </EcosystemRow>
      <Button
        variant="outlined"
        size="large"
        endIcon={<ArrowForward />}
        component={RouterLink}
        to={cta.to}
      >
        {cta.label}
      </Button>
    </Section>
  );
}
