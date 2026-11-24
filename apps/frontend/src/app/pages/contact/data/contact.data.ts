import HandshakeOutlined from '@mui/icons-material/HandshakeOutlined';
import MailOutlined from '@mui/icons-material/MailOutlined';
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import type { SvgIconComponent } from '@mui/icons-material';

export const CONTACT_HERO = {
  eyebrow: 'Contact Us',
  title: 'Let’s Connect.',
  subtitle:
    'Have questions about IPTV, OTT entertainment or distribution opportunities? Get in touch with our team.',
};

/** The three kinds of enquiry this page handles. */
export type EnquiryType = 'consumer' | 'partner' | 'general';

export interface Pathway {
  type: EnquiryType;
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export const PATHWAYS_TITLE = 'Choose Your Pathway';

export const PATHWAYS: Pathway[] = [
  {
    type: 'consumer',
    icon: PersonOutlined,
    title: 'Consumer Enquiry',
    description: 'IPTV, OTT subscriptions, and home viewing availability.',
  },
  {
    type: 'partner',
    icon: HandshakeOutlined,
    title: 'Distribution Partner Enquiry',
    description: 'ISP, broadband, cable operator, and regional distribution.',
  },
  {
    type: 'general',
    icon: MailOutlined,
    title: 'General Enquiry',
    description: 'Media, feedback, and general company questions.',
  },
];

export const CONTACT_DETAILS_TITLE = 'Official Contact Details';

export const CONTACT_FORM_CONTENT = {
  title: 'Send Us a Message',
  submitLabel: 'Submit Enquiry',
  submittingLabel: 'Sending…',
  partnerNote: 'Partnership enquiries need a few business details:',
};
