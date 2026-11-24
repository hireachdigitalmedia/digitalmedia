import { CtaBanner } from '../../../../../components';
import { CTA_CONTENT } from '../../data';

export function FinalCtaSection() {
  const { title, subtitle, primaryCta, secondaryCta } = CTA_CONTENT;

  return (
    <CtaBanner
      title={title}
      subtitle={subtitle}
      primaryAction={primaryCta}
      secondaryAction={secondaryCta}
    />
  );
}
