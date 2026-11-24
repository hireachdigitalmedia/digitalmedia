import CastConnectedOutlined from '@mui/icons-material/CastConnectedOutlined';
import DevicesOutlined from '@mui/icons-material/DevicesOutlined';
import ListAltOutlined from '@mui/icons-material/ListAltOutlined';
import TheatersOutlined from '@mui/icons-material/TheatersOutlined';
import TuneOutlined from '@mui/icons-material/TuneOutlined';
import TvOutlined from '@mui/icons-material/TvOutlined';
import type { SvgIconComponent } from '@mui/icons-material';
import iptvImage from '../../../../assets/home-image/live-tv.webp';
import { ROUTES } from '../../../../router/routes';

export interface Feature {
  icon: SvgIconComponent;
  label: string;
}

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
  ] satisfies Feature[],
  cta: { label: 'Explore IPTV Services', to: ROUTES.contact },
  image: {
    src: iptvImage,
    alt: 'A smart TV showing streaming apps in a dim room',
  },
};
