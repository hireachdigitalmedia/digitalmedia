import { formatStepNumber, getCarouselStep } from './home.utils';

describe('getCarouselStep', () => {
  it('scrolls by the viewport minus one card', () => {
    expect(getCarouselStep(1200, 300, 24)).toBe(876);
  });

  it('always scrolls at least one card on narrow viewports', () => {
    expect(getCarouselStep(320, 300, 24)).toBe(324);
  });
});

describe('formatStepNumber', () => {
  it('converts a zero-based index to a 1-based label', () => {
    expect(formatStepNumber(0)).toBe('1');
    expect(formatStepNumber(3)).toBe('4');
  });
});
