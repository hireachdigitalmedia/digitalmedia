import { Container } from '@mui/material';
import type { CtaAction } from '../../data/types';
import { useInView } from '../../hooks/useInView';
import { sectionReveal } from '../../theme/effects';
import { ActionButton } from '../ActionButton';
import { Eyebrow } from '../SectionHeading/SectionHeading.style';
import {
  BandActions,
  BandContent,
  BandImage,
  BandOverlay,
  BandRoot,
  BandText,
  BandTitle,
} from './ImageBand.style';

export interface ImageBandProps {
  image: string;
  eyebrow?: string;
  /** Wrap words in *asterisks* to highlight them in orange. */
  title: string;
  text?: string;
  action?: CtaAction;
}

/** Renders "*word*" segments as highlighted <em>. */
function highlight(title: string) {
  return title
    .split(/(\*[^*]+\*)/)
    .map((part, i) =>
      part.startsWith('*') && part.endsWith('*') ? (
        <em key={i}>{part.slice(1, -1)}</em>
      ) : (
        part
      ),
    );
}

/** Full-width cinematic band: photo background, gradient wash and a statement line. */
export function ImageBand({
  image,
  eyebrow,
  title,
  text,
  action,
}: ImageBandProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <BandRoot ref={ref} sx={sectionReveal(inView)}>
      <BandImage src={image} alt="" loading="lazy" />
      <BandOverlay />
      <Container maxWidth="lg">
        <BandContent>
          {eyebrow && <Eyebrow variant="overline">{eyebrow}</Eyebrow>}
          <BandTitle>{highlight(title)}</BandTitle>
          {text && <BandText>{text}</BandText>}
          {action && (
            <BandActions>
              <ActionButton action={action} arrow />
            </BandActions>
          )}
        </BandContent>
      </Container>
    </BandRoot>
  );
}
