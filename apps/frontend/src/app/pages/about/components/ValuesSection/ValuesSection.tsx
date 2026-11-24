import { CardContent, Container, Grid, Typography } from '@mui/material';
import { SectionHeading } from '../../../../../components';
import { VALUES_CONTENT } from '../../data';
import { ValueCard, ValuesRoot } from './ValuesSection.style';

export function ValuesSection() {
  const { eyebrow, title, values } = VALUES_CONTENT;

  return (
    <ValuesRoot>
      <Container maxWidth="lg">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <Grid container spacing={3}>
          {values.map((value) => (
            <Grid key={value.title} size={{ xs: 12, md: 4 }}>
              <ValueCard variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
              </ValueCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ValuesRoot>
  );
}
