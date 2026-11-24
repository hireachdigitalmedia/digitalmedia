import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { Section, SectionHeading } from '../../../../../components';
import { SECTION_IDS } from '../../../../../router/routes';
import { FAQ_CONTENT } from '../../data';
import { FaqList } from './FaqSection.style';

export function FaqSection() {
  const { eyebrow, title, faqs } = FAQ_CONTENT;

  return (
    <Section id={SECTION_IDS.faq} maxWidth="md">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <FaqList>
        {faqs.map((faq, index) => (
          <Accordion key={faq.question}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`faq-${index}-content`}
              id={`faq-${index}-header`}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails id={`faq-${index}-content`}>
              <Typography variant="bodyLg" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </FaqList>
    </Section>
  );
}
