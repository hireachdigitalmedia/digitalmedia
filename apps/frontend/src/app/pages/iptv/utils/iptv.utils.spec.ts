import { getCapabilitySpan } from './iptv.utils';

describe('getCapabilitySpan', () => {
  it('makes the 5th of 5 cards span two columns', () => {
    expect([0, 1, 2, 3, 4].map((i) => getCapabilitySpan(i, 5))).toEqual([
      1, 1, 1, 1, 2,
    ]);
  });
});
