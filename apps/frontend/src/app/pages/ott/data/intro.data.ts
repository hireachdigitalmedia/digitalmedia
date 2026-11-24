import DevicesOutlined from '@mui/icons-material/DevicesOutlined';
import PlayCircleOutlined from '@mui/icons-material/PlayCircleOutlined';
import type { Highlight } from '../../../../data/types';

export const OTT_INTRO = {
  eyebrow: 'Introduction to OTT',
  title: 'On-Demand Streaming Built for Modern Audiences.',
  subtitle:
    'Over-The-Top (OTT) streaming delivers movies, web series, regional programmes, and live entertainment directly over your internet connection to compatible televisions and personal devices.',
  highlights: [
    {
      icon: PlayCircleOutlined,
      title: 'Watch On Demand',
      description:
        'Start, pause, and resume digital entertainment on your own schedule across supported platforms.',
    },
    {
      icon: DevicesOutlined,
      title: 'Multi-Screen Access',
      description:
        'Enjoy connected streaming at home on Smart TVs or on the go with compatible smartphones and tablets.',
    },
  ] satisfies Highlight[],
};
