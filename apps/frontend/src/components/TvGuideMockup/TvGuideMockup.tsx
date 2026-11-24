import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import { useMediaQuery } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { GUIDE_CHANNELS } from './TvGuideMockup.data';
import {
  Body,
  ChannelCell,
  Clock,
  Grid,
  GuideTitle,
  LiveBadge,
  NowLine,
  Preview,
  PreviewArt,
  PreviewLabel,
  PreviewMeta,
  PreviewTitle,
  Programme,
  Progress,
  Row,
  Screen,
  TimeHeader,
  TimeLabels,
  TopBar,
  Track,
} from './TvGuideMockup.style';
import { formatTime, getGuideWindow } from './TvGuideMockup.utils';

export interface TvGuideMockupProps {
  /** Smaller layout for cards: fewer channels, larger text, no preview panel. */
  compact?: boolean;
}

const HIGHLIGHT_INTERVAL_MS = 2600;

/**
 * Decorative IPTV programme guide built in code (fictional channels, real current time).
 * Animates a "now" line and cycles the highlighted channel unless reduced motion is preferred.
 */
export function TvGuideMockup({ compact = false }: TvGuideMockupProps) {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const channels = GUIDE_CHANNELS.slice(0, compact ? 4 : 5);
  const [now, setNow] = useState(() => new Date());
  const [active, setActive] = useState(0);

  useEffect(() => {
    const clock = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(clock);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const cycle = setInterval(
      () => setActive((index) => (index + 1) % channels.length),
      HIGHLIGHT_INTERVAL_MS,
    );
    return () => clearInterval(cycle);
  }, [reduceMotion, channels.length]);

  const guide = useMemo(() => getGuideWindow(now), [now]);
  const nowPercent = (guide.nowMinutes / guide.totalMinutes) * 100;

  // Lay programmes out back to back and find what is on now for each channel.
  const rows = channels.map((channel) => {
    let offset = 0;
    const programmes = channel.programmes.map((programme) => {
      const start = offset;
      offset += programme.minutes;
      return {
        ...programme,
        left: (start / guide.totalMinutes) * 100,
        width: (programme.minutes / guide.totalMinutes) * 100,
        onNow: guide.nowMinutes >= start && guide.nowMinutes < offset,
        progress: ((guide.nowMinutes - start) / programme.minutes) * 100,
        endsAt: new Date(guide.start.getTime() + offset * 60_000),
      };
    });
    return { channel, programmes };
  });

  const featured = rows[active];
  const featuredNow =
    featured.programmes.find((p) => p.onNow) ?? featured.programmes[0];

  return (
    <Screen
      role="img"
      aria-label="Illustration of an IPTV live TV programme guide"
    >
      <TopBar>
        <GuideTitle compact={compact}>
          LIVE TV GUIDE <LiveBadge compact={compact}>LIVE</LiveBadge>
        </GuideTitle>
        <Clock compact={compact}>{formatTime(now)}</Clock>
      </TopBar>

      <Body compact={compact}>
        <Grid>
          <TimeHeader compact={compact}>
            <span />
            <TimeLabels compact={compact}>
              {guide.labels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </TimeLabels>
          </TimeHeader>
          {rows.map(({ channel, programmes }, index) => (
            <Row key={channel.number} compact={compact}>
              <ChannelCell active={index === active} compact={compact}>
                <b>{channel.number}</b>
                {channel.name}
              </ChannelCell>
              <Track>
                {index === 0 && (
                  <NowLine
                    style={{
                      left: `${nowPercent}%`,
                      bottom: 'auto',
                      height: `calc(${rows.length * 100}% + ${(rows.length - 1) * 0.9 + 1.2}cqw)`,
                    }}
                  />
                )}
                {programmes.map((programme) => (
                  <Programme
                    key={programme.title}
                    active={index === active}
                    onNow={programme.onNow}
                    compact={compact}
                    style={{
                      left: `${programme.left}%`,
                      width: `${programme.width}%`,
                    }}
                  >
                    {programme.title}
                  </Programme>
                ))}
              </Track>
            </Row>
          ))}
        </Grid>

        {!compact && (
          <Preview>
            <PreviewArt>
              <PlayArrowRounded />
            </PreviewArt>
            <PreviewLabel>NOW PLAYING</PreviewLabel>
            <PreviewTitle>{featuredNow.title}</PreviewTitle>
            <PreviewMeta>
              {featured.channel.number} · {featured.channel.name} · until{' '}
              {formatTime(featuredNow.endsAt)}
            </PreviewMeta>
            <Progress>
              <span
                style={{
                  width: `${Math.min(100, Math.max(0, featuredNow.progress))}%`,
                }}
              />
            </Progress>
          </Preview>
        )}
      </Body>
    </Screen>
  );
}
