import CastConnectedOutlined from '@mui/icons-material/CastConnectedOutlined';
import DevicesOutlined from '@mui/icons-material/DevicesOutlined';
import ListAltOutlined from '@mui/icons-material/ListAltOutlined';
import TheatersOutlined from '@mui/icons-material/TheatersOutlined';
import TuneOutlined from '@mui/icons-material/TuneOutlined';
import TvOutlined from '@mui/icons-material/TvOutlined';
import type { IconLabel } from '../../../../data/types';
import { ROUTES } from '../../../../router/routes';

export const IPTV_CONTENT = {
  eyebrow: 'IPTV Services',
  title: 'Television, Reimagined.',
  subtitle:
    'Experience television through modern IPTV services designed for connected homes and digital audiences.',
  features: [
    { icon: TvOutlined, label: 'Live TV experiences' },
    { icon: TheatersOutlined, label: 'Television entertainment' },
    { icon: ListAltOutlined, label: 'Electronic programme guide' },
    { icon: DevicesOutlined, label: 'Compatible device viewing' },
    { icon: TuneOutlined, label: 'Flexible entertainment options' },
    { icon: CastConnectedOutlined, label: 'Digital television experiences' },
  ] satisfies IconLabel[],
  cta: { label: 'Explore IPTV Services', to: ROUTES.iptv },
  visual: 'tv-guide' as const,
};
