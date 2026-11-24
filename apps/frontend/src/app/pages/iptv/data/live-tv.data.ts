import ListAltOutlined from '@mui/icons-material/ListAltOutlined';
import SmartDisplayOutlined from '@mui/icons-material/SmartDisplayOutlined';
import type { Highlight } from '../../../../data/types';

export const LIVE_TV_CONTENT = {
  eyebrow: 'Live Television Experiences',
  title: 'Digital Television Built for Connected Homes.',
  subtitle:
    'IPTV (Internet Protocol Television) delivers structured television programming over IP networks, giving viewers an intuitive, responsive way to browse live channels and schedules on supported screens.',
  highlights: [
    {
      icon: SmartDisplayOutlined,
      title: 'Live TV',
      description:
        'Structured live television viewing across entertainment, news, sports, and regional programming.',
    },
    {
      icon: ListAltOutlined,
      title: 'Electronic Programme Guide',
      description:
        'Browse what is currently airing and upcoming schedules with a clean on-screen programme guide.',
    },
  ] satisfies Highlight[],
};
