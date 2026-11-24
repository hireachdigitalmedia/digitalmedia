import ArrowForward from '@mui/icons-material/ArrowForward';
import LinkOutlined from '@mui/icons-material/LinkOutlined';
import { Button } from '@mui/material';
import { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Section, SectionHeading } from '../../../../../components';
import { ECOSYSTEM_CONTENT } from '../../data';
import { EcosystemCard } from './EcosystemCard';
import { EcosystemRow, LinkBadge } from './EcosystemSection.style';

export function EcosystemSection() {
  const { eyebrow, title, subtitle, brands, cta } = ECOSYSTEM_CONTENT;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <EcosystemRow>
        {brands.map((brand, index) => (
          <Fragment key={brand.name}>
            {index > 0 && (
              <LinkBadge aria-hidden>
                <LinkOutlined />
              </LinkBadge>
            )}
            <EcosystemCard {...brand} />
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
