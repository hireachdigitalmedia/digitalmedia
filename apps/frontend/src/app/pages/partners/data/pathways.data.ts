import CableOutlined from '@mui/icons-material/CableOutlined';
import HubOutlined from '@mui/icons-material/HubOutlined';
import PublicOutlined from '@mui/icons-material/PublicOutlined';
import RouterOutlined from '@mui/icons-material/RouterOutlined';
import SchemaOutlined from '@mui/icons-material/SchemaOutlined';
import type { Highlight } from '../../../../data/types';

export const PATHWAYS_CONTENT = {
  eyebrow: 'Who We Collaborate With',
  title: 'Distribution Partnership Pathways.',
  pathways: [
    {
      icon: RouterOutlined,
      title: 'Internet Service Providers',
      description:
        'Explore IPTV and OTT entertainment offerings alongside high-speed internet access for residential subscribers.',
    },
    {
      icon: SchemaOutlined,
      title: 'Broadband Operators',
      description:
        'Expand broadband subscriber value by introducing connected digital television and streaming options.',
    },
    {
      icon: CableOutlined,
      title: 'Cable TV Operators',
      description:
        'Transition and complement local television distribution with modern IPTV and OTT viewing experiences.',
    },
    {
      icon: PublicOutlined,
      title: 'Regional Distributors',
      description:
        'Extend digital entertainment access across regional territories through coordinated distribution channels.',
    },
    {
      icon: HubOutlined,
      title: 'Digital Entertainment Partners',
      description:
        'Collaborate on connected OTT and digital entertainment distribution opportunities tailored to local market needs.',
    },
  ] satisfies Highlight[],
};
