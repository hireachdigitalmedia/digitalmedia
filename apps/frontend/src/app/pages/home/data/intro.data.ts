import HubOutlined from '@mui/icons-material/HubOutlined';
import LiveTvOutlined from '@mui/icons-material/LiveTvOutlined';
import SmartDisplayOutlined from '@mui/icons-material/SmartDisplayOutlined';
import type { Highlight } from '../../../../data/types';

export const INTRO_CONTENT = {
  title: 'Your World of Entertainment Starts Here.',
  subtitle:
    "Hi Reach Digital Media brings together modern television experiences and digital streaming entertainment through IPTV and OTT services designed for today's connected audiences.",
  highlights: [
    {
      icon: LiveTvOutlined,
      title: 'IPTV Entertainment',
      description:
        'Live television and connected viewing experiences built for modern screens and digital households.',
    },
    {
      icon: SmartDisplayOutlined,
      title: 'OTT Entertainment',
      description:
        'Discover movies, series and digital streaming experiences curated for on-demand viewing.',
    },
    {
      icon: HubOutlined,
      title: 'Connected Entertainment',
      description:
        'Enjoy digital entertainment through compatible devices and connected distribution networks.',
    },
  ] satisfies Highlight[],
};
