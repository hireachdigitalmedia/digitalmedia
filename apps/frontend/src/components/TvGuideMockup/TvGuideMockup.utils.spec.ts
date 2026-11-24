import { formatTime, getGuideWindow } from './TvGuideMockup.utils';

describe('getGuideWindow', () => {
  it('starts at the current half-hour and labels three slots', () => {
    const window = getGuideWindow(new Date(2026, 10, 24, 20, 47, 30));
    expect(window.labels).toEqual(['20:30', '21:00', '21:30']);
    expect(window.totalMinutes).toBe(90);
    expect(window.nowMinutes).toBeCloseTo(17.5);
  });

  it('wraps past midnight', () => {
    expect(getGuideWindow(new Date(2026, 10, 24, 23, 40)).labels).toEqual([
      '23:30',
      '00:00',
      '00:30',
    ]);
  });
});

describe('formatTime', () => {
  it('pads hours and minutes', () => {
    expect(formatTime(new Date(2026, 0, 1, 7, 5))).toBe('07:05');
  });
});
