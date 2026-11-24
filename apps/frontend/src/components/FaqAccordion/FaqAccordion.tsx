import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { useId } from 'react';
import type { Faq } from '../../data/types';
import { FaqList } from './FaqAccordion.style';

export interface FaqAccordionProps {
  faqs: Faq[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const baseId = useId();

  return (
    <FaqList>
      {faqs.map((faq, index) => {
        const id = `${baseId}-${index}`;
        return (
          <Accordion key={faq.question}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`${id}-content`}
              id={`${id}-header`}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails id={`${id}-content`}>
              <Typography variant="bodyLg" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </FaqList>
  );
}
