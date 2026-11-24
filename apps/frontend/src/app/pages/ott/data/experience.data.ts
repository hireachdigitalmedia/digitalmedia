import ExploreOutlined from '@mui/icons-material/ExploreOutlined';
import FamilyRestroomOutlined from '@mui/icons-material/FamilyRestroomOutlined';
import HighQualityOutlined from '@mui/icons-material/HighQualityOutlined';
import type { Highlight } from '../../../../data/types';

export const EXPERIENCE_CONTENT = {
  eyebrow: 'Streaming Experience',
  title: 'Built for Smooth, Intuitive Viewing.',
  features: [
    {
      icon: ExploreOutlined,
      title: 'Unified Discovery',
      description:
        'Browse categories across movies, series, sports, and family entertainment without visual clutter.',
    },
    {
      icon: HighQualityOutlined,
      title: 'Adaptive Playback',
      description:
        'Streaming quality adapts to your connected broadband or mobile network conditions.',
    },
    {
      icon: FamilyRestroomOutlined,
      title: 'Family-Friendly Viewing',
      description:
        'Entertainment categories suited for shared living-room viewing as well as personal screens.',
    },
  ] satisfies Highlight[],
};
