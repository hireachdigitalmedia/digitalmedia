import ArrowForward from '@mui/icons-material/ArrowForward';
import { Button, type ButtonProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import type { CtaAction } from '../../data/types';
import { scrollToSection } from '../../utils/scroll';

export interface ActionButtonProps {
  action: CtaAction;
  variant?: 'contained' | 'outlined';
  size?: ButtonProps['size'];
  /** Show a trailing arrow. */
  arrow?: boolean;
}

/** Button for a CtaAction: navigates for `to`, smooth-scrolls for `sectionId`. */
export function ActionButton({
  action,
  variant = 'contained',
  size = 'large',
  arrow = false,
}: ActionButtonProps) {
  const common = {
    variant,
    size,
    endIcon: arrow ? <ArrowForward /> : undefined,
  };

  if (action.to) {
    return (
      <Button {...common} component={RouterLink} to={action.to}>
        {action.label}
      </Button>
    );
  }
  return (
    <Button
      {...common}
      onClick={() => action.sectionId && scrollToSection(action.sectionId)}
    >
      {action.label}
    </Button>
  );
}
