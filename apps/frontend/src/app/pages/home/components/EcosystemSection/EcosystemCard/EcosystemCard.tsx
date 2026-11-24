import { Typography } from '@mui/material';
import type { EcosystemBrand } from '../../../data';
import { BrandName, CardTop, EcosystemCardRoot } from './EcosystemCard.style';

export function EcosystemCard({
  label,
  name,
  tagline,
  icon: Icon,
  accent,
}: EcosystemBrand) {
  return (
    <EcosystemCardRoot accent={accent}>
      <CardTop accent={accent}>
        {label}
        <Icon aria-hidden />
      </CardTop>
      <BrandName>{name}</BrandName>
      <Typography
        variant="bodyLg"
        color="text.secondary"
        sx={{ fontSize: '1.125rem' }}
      >
        {tagline}
      </Typography>
    </EcosystemCardRoot>
  );
}
