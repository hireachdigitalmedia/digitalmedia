import CastConnectedOutlined from '@mui/icons-material/CastConnectedOutlined';
import DevicesOutlined from '@mui/icons-material/DevicesOutlined';
import TuneOutlined from '@mui/icons-material/TuneOutlined';
import TvOutlined from '@mui/icons-material/TvOutlined';
import ViewDayOutlined from '@mui/icons-material/ViewDayOutlined';
import type { Highlight } from '../../../../data/types';

export const CAPABILITIES_CONTENT = {
  eyebrow: 'Core Capabilities',
  title: 'Designed Around Everyday Viewing.',
  capabilities: [
    {
      icon: TvOutlined,
      title: 'Live TV',
      description:
        'Seamless access to live television programming designed for crisp big-screen viewing.',
    },
    {
      icon: ViewDayOutlined,
      title: 'Electronic Programme Guide',
      description:
        'Clear programme listings and category navigation so you can find what to watch effortlessly.',
    },
    {
      icon: DevicesOutlined,
      title: 'Compatible Devices',
      description:
        'Watch on supported Smart TVs, Android TV, streaming devices, smartphones, and tablets.',
    },
    {
      icon: CastConnectedOutlined,
      title: 'Digital Television Experience',
      description:
        'A modern, responsive interface that brings television into a connected digital environment.',
    },
    {
      icon: TuneOutlined,
      title: 'Flexible Service Options',
      description:
        'Service options tailored for residential consumers as well as distribution partners delivering television entertainment to their local subscriber networks.',
    },
  ] satisfies Highlight[],
};
