import { useDocumentTitle } from '../../../hooks';
import { ContactHeroSection, ContactSection } from './components';
import { ContactPageRoot } from './ContactPage.style';

export function ContactPage() {
  useDocumentTitle('Contact Us');

  return (
    <ContactPageRoot>
      <ContactHeroSection />
      <ContactSection />
    </ContactPageRoot>
  );
}
