import { apiClient } from './client';

export interface HealthResponse {
  status: 'ok';
  uptime: number;
  timestamp: string;
}

export const healthApi = {
  get: async () => {
    return apiClient.get<HealthResponse>('/health');
  },
};
