import { ROUTES } from '../../../../../router/routes';
import { POLICIES } from '../../data';
import { LinkRow, PillLink } from './PolicyLinks.style';

/** Jump links to each policy (also shareable as /legal#privacy-policy etc.). */
export function PolicyLinks() {
  return (
    <LinkRow aria-label="Policies">
      {POLICIES.map((policy) => (
        <PillLink key={policy.id} to={`${ROUTES.legal}#${policy.id}`}>
          {policy.label}
        </PillLink>
      ))}
    </LinkRow>
  );
}
