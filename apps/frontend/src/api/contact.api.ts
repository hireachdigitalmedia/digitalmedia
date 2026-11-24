import { apiClient } from './client';

/** Matches the backend's CONTACT_TOPICS. */
export type ContactTopic = 'general' | 'iptv' | 'ott' | 'partnership';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  city?: string;
  topic?: ContactTopic;
  message?: string;
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
