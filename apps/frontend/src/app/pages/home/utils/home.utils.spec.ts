import { getFeaturedServices } from './home.utils';

const services = [
  { id: 'a', title: 'A', description: '' },
  { id: 'b', title: 'B', description: '' },
  { id: 'c', title: 'C', description: '' },
];

describe('getFeaturedServices', () => {
  it('returns the first N services', () => {
    expect(getFeaturedServices(services, 2).map((s) => s.id)).toEqual([
      'a',
      'b',
    ]);
  });

  it('handles counts larger than the list and negative counts', () => {
    expect(getFeaturedServices(services, 10)).toHaveLength(3);
    expect(getFeaturedServices(services, -1)).toHaveLength(0);
  });
});
