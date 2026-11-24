import { formatStepNumber, getLastRowSpan } from './format';

describe('formatStepNumber', () => {
  it('converts a zero-based index to a 1-based label', () => {
    expect(formatStepNumber(0)).toBe('1');
    expect(formatStepNumber(3)).toBe('4');
  });
});

describe('getLastRowSpan', () => {
  it('stretches the last card to fill an incomplete row', () => {
    expect(getLastRowSpan(4, 5, 3)).toBe(2);
    expect(getLastRowSpan(3, 4, 3)).toBe(3);
  });

  it('leaves full rows and non-last cards alone', () => {
    expect(getLastRowSpan(5, 6, 3)).toBe(1);
    expect(getLastRowSpan(0, 5, 3)).toBe(1);
  });
});
