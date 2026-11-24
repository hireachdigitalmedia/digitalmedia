import CastOutlined from '@mui/icons-material/CastOutlined';
import ConnectedTvOutlined from '@mui/icons-material/ConnectedTvOutlined';
import PhoneAndroidOutlined from '@mui/icons-material/PhoneAndroidOutlined';
import TabletAndroidOutlined from '@mui/icons-material/TabletAndroidOutlined';
import TvOutlined from '@mui/icons-material/TvOutlined';
import type { Feature } from './iptv.data';

export const DEVICES_CONTENT = {
  eyebrow: 'Multi-Screen Access',
  title: 'Entertainment Across Your Devices.',
  note: 'Compatibility depends on the selected service and supported application.',
  devices: [
    { icon: TvOutlined, label: 'Smart TVs' },
    { icon: ConnectedTvOutlined, label: 'Android TV' },
    { icon: CastOutlined, label: 'Streaming Devices' },
    { icon: PhoneAndroidOutlined, label: 'Smartphones' },
    { icon: TabletAndroidOutlined, label: 'Tablets' },
  ] satisfies Feature[],
};
