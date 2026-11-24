import { apiClient } from './client';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export const contactApi = {
  submit: async (payload: ContactPayload) => {
    const { data } = await apiClient.post<{ message: string }>(
      '/contact',
      payload,
    );
    return data;
  },
};
