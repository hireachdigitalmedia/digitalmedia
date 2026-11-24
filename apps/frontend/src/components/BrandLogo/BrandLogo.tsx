import { ROUTES } from '../../router/routes';
import { env } from '../../utils/env';
import { LogoImage, LogoLink, type LogoSize } from './BrandLogo.style';

export interface BrandLogoProps {
  /** "md" for the header, "lg" for the footer. */
  size?: LogoSize;
}

export function BrandLogo({ size = 'md' }: BrandLogoProps) {
  return (
    <LogoLink to={ROUTES.home} aria-label={`${env.appName} home`}>
      <LogoImage
        src="/logo-light.png"
        alt={env.appName}
        width={457}
        height={160}
        size={size}
      />
    </LogoLink>
  );
}
