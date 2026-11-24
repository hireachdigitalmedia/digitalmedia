/** Fictional channels and programmes for the decorative TV guide (no real broadcaster names). */

export interface GuideProgramme {
  title: string;
  /** Length in minutes; programmes play back to back from the window start. */
  minutes: number;
}

export interface GuideChannel {
  number: number;
  name: string;
  programmes: GuideProgramme[];
}

export const GUIDE_CHANNELS: GuideChannel[] = [
  {
    number: 101,
    name: 'Hi Reach One',
    programmes: [
      { title: 'Evening Headlines', minutes: 30 },
      { title: 'City Lights', minutes: 60 },
    ],
  },
  {
    number: 102,
    name: 'Cinema Max',
    programmes: [{ title: 'The Silent Tide', minutes: 90 }],
  },
  {
    number: 103,
    name: 'Sports Arena',
    programmes: [
      { title: 'Match Day Live', minutes: 60 },
      { title: 'Highlights', minutes: 30 },
    ],
  },
  {
    number: 104,
    name: 'News 24',
    programmes: [
      { title: 'World Tonight', minutes: 30 },
      { title: 'Market Watch', minutes: 30 },
      { title: 'Late Edition', minutes: 30 },
    ],
  },
  {
    number: 105,
    name: 'Kids Zone',
    programmes: [
      { title: 'Space Explorers', minutes: 30 },
      { title: 'Toon Time', minutes: 60 },
    ],
  },
  {
    number: 106,
    name: 'Regional Plus',
    programmes: [
      { title: 'Folk Stories', minutes: 45 },
      { title: 'Regional Cinema', minutes: 45 },
    ],
  },
];
