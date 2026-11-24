import { useState } from 'react';
import { Section } from '../../../../../components';
import { PATHWAYS_TITLE, type EnquiryType } from '../../data';
import { ContactDetailsCard } from '../ContactDetailsCard';
import { ContactForm } from '../ContactForm';
import { PathwayCards } from '../PathwayCards';
import { ContactGrid, PathwaysTitle } from './ContactSection.style';

/** Pathway picker + contact details beside the enquiry form; both share the enquiry type. */
export function ContactSection() {
  const [type, setType] = useState<EnquiryType>('consumer');

  return (
    <Section tone="raised">
      <ContactGrid>
        <div>
          <PathwaysTitle>{PATHWAYS_TITLE}</PathwaysTitle>
          <PathwayCards selected={type} onSelect={setType} />
          <ContactDetailsCard />
        </div>
        <ContactForm type={type} onTypeChange={setType} />
      </ContactGrid>
    </Section>
  );
}
