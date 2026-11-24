import { getCarouselStep } from './home.utils';

describe('getCarouselStep', () => {
  it('scrolls by the viewport minus one card', () => {
    expect(getCarouselStep(1200, 300, 24)).toBe(876);
  });

  it('always scrolls at least one card on narrow viewports', () => {
    expect(getCarouselStep(320, 300, 24)).toBe(324);
  });
});
