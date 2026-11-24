import type { Service } from '../../../../data/services';

/** First `count` services, for the home page preview. */
export function getFeaturedServices(
  services: Service[],
  count: number,
): Service[] {
  return services.slice(0, Math.max(0, count));
}
