import CastOutlined from '@mui/icons-material/CastOutlined';
import ConnectedTvOutlined from '@mui/icons-material/ConnectedTvOutlined';
import PhoneAndroidOutlined from '@mui/icons-material/PhoneAndroidOutlined';
import TabletAndroidOutlined from '@mui/icons-material/TabletAndroidOutlined';
import TvOutlined from '@mui/icons-material/TvOutlined';
import type { IconLabel } from './types';

/** Supported device types — shared by the Home and IPTV pages. */
export const DEVICES: IconLabel[] = [
  { icon: TvOutlined, label: 'Smart TVs' },
  { icon: ConnectedTvOutlined, label: 'Android TV' },
  { icon: CastOutlined, label: 'Streaming Devices' },
  { icon: PhoneAndroidOutlined, label: 'Smartphones' },
  { icon: TabletAndroidOutlined, label: 'Tablets' },
];
