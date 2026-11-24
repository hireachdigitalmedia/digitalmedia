import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import HubOutlined from '@mui/icons-material/HubOutlined';
import SmartDisplayOutlined from '@mui/icons-material/SmartDisplayOutlined';
import type { Highlight } from '../../../../data/types';

export const FOCUS_CONTENT = {
  eyebrow: 'What We Focus On',
  title: 'Built Around Viewers and Distribution Partners.',
  items: [
    {
      icon: SmartDisplayOutlined,
      title: 'IPTV & OTT Business Focus',
      description:
        'Combining live television experiences with on-demand OTT streaming so audiences can enjoy movies, series, sports, and regional programming.',
    },
    {
      icon: HomeOutlined,
      title: 'Consumer Entertainment',
      description:
        'Designed for everyday viewing across Smart TVs, Android TV, streaming devices, smartphones, and tablets.',
    },
    {
      icon: HubOutlined,
      title: 'Distribution Ecosystem',
      description:
        'Working alongside ISPs, broadband operators, cable TV operators, and regional distributors to bring digital entertainment to more households.',
    },
    {
      icon: AutoAwesomeOutlined,
      title: 'Approach to Innovation',
      description:
        'Focused on intuitive user interfaces, responsive multi-device experiences, and dependable support for both viewers and partners.',
    },
  ] satisfies Highlight[],
};
