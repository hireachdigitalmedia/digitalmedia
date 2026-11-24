import { PageIntro } from '../../../components';
import { useDocumentTitle } from '../../../hooks';
import { ContactSection } from './components';
import { ContactPageRoot } from './ContactPage.style';
import { CONTACT_HERO } from './data';

export function ContactPage() {
  useDocumentTitle('Contact Us');

  return (
    <ContactPageRoot>
      <PageIntro {...CONTACT_HERO} />
      <ContactSection />
    </ContactPageRoot>
  );
}
