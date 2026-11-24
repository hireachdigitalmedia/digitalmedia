import GroupsOutlined from '@mui/icons-material/GroupsOutlined';
import PlayCircleOutlined from '@mui/icons-material/PlayCircleOutlined';
import RouterOutlined from '@mui/icons-material/RouterOutlined';
import { ROUTES } from '../../../../router/routes';
import type { Feature } from './iptv.data';

export const DISTRIBUTION_CONTENT = {
  eyebrow: 'B2B2C Distribution Ecosystem',
  title: 'Grow Together. Deliver More Entertainment.',
  subtitle:
    'Partner with Hi Reach Digital Media and bring digital entertainment experiences to more customers through a connected distribution ecosystem.',
  partnerTypes: [
    'Internet Service Providers',
    'Broadband Operators',
    'Cable TV Operators',
    'Regional Distributors',
    'Digital Entertainment Partners',
  ],
  cta: { label: 'Become a Distribution Partner', to: ROUTES.contact },
  flowTitle: 'Distribution Flow',
  flow: [
    { icon: PlayCircleOutlined, label: 'Hi Reach Digital Media' },
    { icon: RouterOutlined, label: 'Distribution Partners' },
    { icon: GroupsOutlined, label: 'End Customers' },
  ] satisfies Feature[],
  benefits: [
    'Entertainment service distribution opportunities',
    'Expanded customer offerings',
    'Partner collaboration',
    'Connected digital entertainment ecosystem',
    'Dedicated business enquiry support',
  ],
};
