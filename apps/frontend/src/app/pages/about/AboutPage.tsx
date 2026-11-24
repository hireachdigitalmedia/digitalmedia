import { Container } from '@mui/material';
import { SectionHeading } from '../../../components';
import { useDocumentTitle } from '../../../hooks';
import { IntroSection } from './AboutPage.style';
import { ValuesSection } from './components';
import { ABOUT_INTRO } from './data';

export function AboutPage() {
  useDocumentTitle('About');

  return (
    <>
      <IntroSection>
        <Container maxWidth="md">
          <SectionHeading
            as="h1"
            title={ABOUT_INTRO.title}
            subtitle={ABOUT_INTRO.subtitle}
          />
        </Container>
      </IntroSection>
      <ValuesSection />
    </>
  );
}
