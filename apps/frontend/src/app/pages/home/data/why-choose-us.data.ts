import DevicesOtherOutlined from '@mui/icons-material/DevicesOtherOutlined';
import MovieOutlined from '@mui/icons-material/MovieOutlined';
import SubscriptionsOutlined from '@mui/icons-material/SubscriptionsOutlined';
import SupportAgentOutlined from '@mui/icons-material/SupportAgentOutlined';
import type { Highlight } from './intro.data';

export const WHY_CHOOSE_US_CONTENT = {
  eyebrow: 'Why Choose Us',
  title: 'Entertainment Made More Connected.',
  reasons: [
    {
      icon: MovieOutlined,
      title: 'Digital Entertainment Experiences',
      description:
        'Modern viewing journeys designed around movies, live television, and streaming discovery.',
    },
    {
      icon: SubscriptionsOutlined,
      title: 'IPTV and OTT Options',
      description:
        'Explore both live IPTV programming and on-demand OTT platforms in one connected ecosystem.',
    },
    {
      icon: DevicesOtherOutlined,
      title: 'Connected Viewing',
      description:
        'Built to fit connected homes and supported smart screens across everyday viewing moments.',
    },
    {
      icon: SupportAgentOutlined,
      title: 'Customer-Focused Support',
      description:
        'Dedicated assistance for consumer service enquiries, compatibility checks, and partner onboarding.',
    },
  ] satisfies Highlight[],
};
