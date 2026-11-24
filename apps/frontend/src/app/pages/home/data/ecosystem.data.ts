import SmartDisplayOutlined from '@mui/icons-material/SmartDisplayOutlined';
import WifiOutlined from '@mui/icons-material/WifiOutlined';
import type { SvgIconComponent } from '@mui/icons-material';
import { ROUTES } from '../../../../router/routes';

export interface EcosystemBrand {
  label: string;
  name: string;
  tagline: string;
  icon: SvgIconComponent;
  accent: 'tertiary' | 'primary';
}

export const ECOSYSTEM_CONTENT = {
  eyebrow: 'The Hi Reach Ecosystem',
  title: 'More Than Connectivity. A Complete Digital Experience.',
  subtitle:
    'Hi Reach brings connectivity and digital entertainment together through its connected business ecosystem.',
  brands: [
    {
      label: 'Connectivity',
      name: 'Hi Reach Broadband',
      tagline: 'Connectivity that keeps you connected.',
      icon: WifiOutlined,
      accent: 'tertiary',
    },
    {
      label: 'Entertainment',
      name: 'Hi Reach Digital Media',
      tagline: 'Entertainment that keeps you engaged.',
      icon: SmartDisplayOutlined,
      accent: 'primary',
    },
  ] satisfies EcosystemBrand[],
  // TODO: link to the Hi Reach Broadband site / an ecosystem page when available.
  cta: { label: 'Discover the Hi Reach Ecosystem', to: ROUTES.about },
};
