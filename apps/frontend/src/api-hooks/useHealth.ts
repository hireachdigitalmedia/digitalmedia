import { useQuery } from '@tanstack/react-query';
import { healthApi } from '../api';

export const healthKeys = {
  all: ['health'] as const,
};

export function useHealth() {
  return useQuery({ queryKey: healthKeys.all, queryFn: healthApi.get });
}
