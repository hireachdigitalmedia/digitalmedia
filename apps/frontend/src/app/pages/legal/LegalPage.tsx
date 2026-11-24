import { PageIntro, Section } from '../../../components';
import { useDocumentTitle } from '../../../hooks';
import { PolicyCard, PolicyLinks } from './components';
import { LEGAL_INTRO, POLICIES } from './data';
import { PolicyList } from './LegalPage.style';

export function LegalPage() {
  useDocumentTitle('Legal Policies');

  return (
    <>
      <PageIntro {...LEGAL_INTRO} maxWidth="md">
        <PolicyLinks />
      </PageIntro>
      <Section tone="raised" maxWidth="md">
        <PolicyList>
          {POLICIES.map((policy) => (
            <PolicyCard key={policy.id} {...policy} />
          ))}
        </PolicyList>
      </Section>
    </>
  );
}
