export interface GuideWindow {
  /** Start of the visible schedule (current time rounded down to the slot). */
  start: Date;
  /** "HH:mm" label for each slot. */
  labels: string[];
  /** Minutes covered by the whole window. */
  totalMinutes: number;
  /** Minutes from the window start to now. */
  nowMinutes: number;
}

const pad = (n: number) => String(n).padStart(2, '0');

/** 24-hour "HH:mm". */
export function formatTime(date: Date): string {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/** The schedule window shown by the guide: `slots` columns of `slotMinutes`, starting at the current slot. */
export function getGuideWindow(
  now: Date,
  slotMinutes = 30,
  slots = 3,
): GuideWindow {
  const start = new Date(now);
  start.setSeconds(0, 0);
  start.setMinutes(Math.floor(now.getMinutes() / slotMinutes) * slotMinutes);

  const labels = Array.from({ length: slots }, (_, i) =>
    formatTime(new Date(start.getTime() + i * slotMinutes * 60_000)),
  );
  const nowMinutes = (now.getTime() - start.getTime()) / 60_000;

  return { start, labels, totalMinutes: slotMinutes * slots, nowMinutes };
}
