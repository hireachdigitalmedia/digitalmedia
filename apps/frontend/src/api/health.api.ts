import { apiClient } from './client';

export interface HealthResponse {
  status: 'ok';
  uptime: number;
  timestamp: string;
}

export const healthApi = {
  get: async () => {
    const { data } = await apiClient.get<HealthResponse>('/health');
    return data;
  },
};
