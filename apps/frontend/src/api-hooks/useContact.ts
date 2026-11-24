import { useMutation } from '@tanstack/react-query';
import { contactApi, type ContactPayload } from '../api';

export function useSubmitContact() {
  return useMutation({
    mutationFn: (payload: ContactPayload) => contactApi.submit(payload),
  });
}
