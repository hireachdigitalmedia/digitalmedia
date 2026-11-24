import { apiClient } from './client';

/** Matches the backend's CONTACT_TOPICS. */
export type ContactTopic =
  'general' | 'consumer' | 'iptv' | 'ott' | 'partnership';

/** Matches the backend's BUSINESS_CATEGORIES. */
export type BusinessCategory =
  | 'isp'
  | 'broadband-operator'
  | 'cable-tv-operator'
  | 'regional-distributor'
  | 'digital-entertainment-partner'
  | 'other';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  city?: string;
  state?: string;
  businessCategory?: BusinessCategory;
  customerBase?: string;
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
