import { Container, Grid, Typography } from '@mui/material';
import { SectionHeading } from '../../../../../components';
import { WHY_CHOOSE_US } from '../../data';
import { ReasonItem, WhyChooseUsRoot } from './WhyChooseUs.style';

export function WhyChooseUs() {
  const { eyebrow, title, reasons } = WHY_CHOOSE_US;

  return (
    <WhyChooseUsRoot>
      <Container maxWidth="lg">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <Grid container spacing={4}>
          {reasons.map((reason) => (
            <Grid key={reason.title} size={{ xs: 12, md: 4 }}>
              <ReasonItem>
                <Typography variant="titleLg" component="h3" gutterBottom>
                  {reason.title}
                </Typography>
                <Typography color="text.secondary">
                  {reason.description}
                </Typography>
              </ReasonItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </WhyChooseUsRoot>
  );
}
