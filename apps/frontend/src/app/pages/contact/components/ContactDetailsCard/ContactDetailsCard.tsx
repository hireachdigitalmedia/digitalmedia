import { COMPANY_INFO } from '../../../../../data/company';
import { CONTACT_DETAILS_TITLE } from '../../data';
import {
  DetailLine,
  DetailLink,
  DetailsCard,
  DetailsTitle,
} from './ContactDetailsCard.style';

/** Email always; phone and office appear once they are filled in COMPANY_INFO. */
export function ContactDetailsCard() {
  const { email, phone, office } = COMPANY_INFO;

  return (
    <DetailsCard>
      <DetailsTitle>{CONTACT_DETAILS_TITLE}</DetailsTitle>
      <DetailLine>
        Email: <DetailLink href={`mailto:${email}`}>{email}</DetailLink>
      </DetailLine>
      {phone && (
        <DetailLine>
          Phone:{' '}
          <DetailLink href={`tel:${phone.replace(/\s/g, '')}`}>
            {phone}
          </DetailLink>
        </DetailLine>
      )}
      {office && <DetailLine>Office: {office}</DetailLine>}
    </DetailsCard>
  );
}
