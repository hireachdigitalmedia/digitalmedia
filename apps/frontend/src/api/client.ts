import axios, { AxiosError } from 'axios';
import { env } from '../utils/env';

export const apiClient = axios.create({
  baseURL: env.apiUrl,
  timeout: 15_000,
  headers: { 'Content-Type': 'application/json' },
});

export interface ApiError {
  statusCode: number;
  message: string | string[];
}

/** Pulls a human-readable message out of an API/axios error. */
export function getErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    const message = (error.response?.data as ApiError | undefined)?.message;
    if (Array.isArray(message)) return message.join(', ');
    if (message) return message;
    return error.message;
  }
  return error instanceof Error ? error.message : 'Something went wrong';
}
