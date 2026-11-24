import { Container } from '@mui/material';
import { SectionHeading } from '../../../components';
import { useDocumentTitle } from '../../../hooks';
import { ContactForm } from './components';
import { ContactPageRoot } from './ContactPage.style';
import { CONTACT_CONTENT } from './data';

export function ContactPage() {
  useDocumentTitle('Contact');

  return (
    <ContactPageRoot>
      <Container maxWidth="sm">
        <SectionHeading
          as="h1"
          title={CONTACT_CONTENT.title}
          subtitle={CONTACT_CONTENT.subtitle}
        />
        <ContactForm />
      </Container>
    </ContactPageRoot>
  );
}
