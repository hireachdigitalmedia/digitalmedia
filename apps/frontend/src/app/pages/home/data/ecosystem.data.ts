import SmartDisplayOutlined from '@mui/icons-material/SmartDisplayOutlined';
import WifiOutlined from '@mui/icons-material/WifiOutlined';
import type { InfoItem } from '../../../../data/types';
import { ROUTES } from '../../../../router/routes';

export const ECOSYSTEM_CONTENT = {
  eyebrow: 'The Hi Reach Ecosystem',
  title: 'More Than Connectivity. A Complete Digital Experience.',
  subtitle:
    'Hi Reach brings connectivity and digital entertainment together through its connected business ecosystem.',
  brands: [
    {
      eyebrow: 'Connectivity',
      title: 'Hi Reach Broadband',
      description: 'Connectivity that keeps you connected.',
      icon: WifiOutlined,
      accent: 'tertiary',
    },
    {
      eyebrow: 'Entertainment',
      title: 'Hi Reach Digital Media',
      description: 'Entertainment that keeps you engaged.',
      icon: SmartDisplayOutlined,
      accent: 'primary',
      highlighted: true,
    },
  ] satisfies InfoItem[],
  // The About page explains the Hi Reach ecosystem.
  cta: { label: 'Discover the Hi Reach Ecosystem', to: ROUTES.about },
};
