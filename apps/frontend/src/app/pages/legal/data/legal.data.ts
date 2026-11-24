import { LEGAL_IDS } from '../../../../router/routes';

export const LEGAL_INTRO = {
  eyebrow: 'Legal & Compliance',
  title: 'Legal Policies',
  subtitle:
    'Draft document layouts with placeholders to be reviewed and approved by legal counsel prior to publishing.',
};

export interface Policy {
  id: string;
  /** Short label for the jump links. */
  label: string;
  title: string;
  /** Shown under the title until the approved text is in place. */
  status?: string;
  paragraphs: string[];
}

const PLACEHOLDER = '[Placeholder — Subject to Legal Approval]';

// TODO(legal): replace each policy's paragraphs with the approved text and remove `status`.
export const POLICIES: Policy[] = [
  {
    id: LEGAL_IDS.privacy,
    label: 'Privacy Policy',
    title: 'Privacy Policy',
    status: PLACEHOLDER,
    paragraphs: [
      'This Privacy Policy placeholder outlines how Hi Reach Digital Media collects, uses, and safeguards personal information submitted through consumer enquiries, distribution partner forms, and support requests.',
      '[Insert approved clauses covering data collection, cookies, third-party service disclosures, data retention, and user rights.]',
    ],
  },
  {
    id: LEGAL_IDS.terms,
    label: 'Terms and Conditions',
    title: 'Terms and Conditions',
    status: PLACEHOLDER,
    paragraphs: [
      'These Terms and Conditions govern access to the Hi Reach Digital Media website and any IPTV or OTT services provided directly or through authorized distribution partners.',
      '[Insert approved clauses covering eligibility, acceptable use, intellectual property, service availability, and governing law.]',
    ],
  },
  {
    id: LEGAL_IDS.refund,
    label: 'Refund & Cancellation Policy',
    title: 'Refund and Cancellation Policy',
    status: PLACEHOLDER,
    paragraphs: [
      'This Refund and Cancellation Policy placeholder describes the process and eligibility criteria for subscription cancellations or refund requests where applicable.',
      '[Insert approved clauses covering billing cycles, cancellation windows, partner-managed subscriptions, and support contact procedures.]',
    ],
  },
];
