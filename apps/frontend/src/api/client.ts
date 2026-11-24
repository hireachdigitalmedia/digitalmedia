import { env } from '../utils/env';

const TIMEOUT_MS = 15_000;

/** Error body returned by the backend's exception filter. */
export interface ApiErrorBody {
  statusCode: number;
  message: string | string[];
}

/** Thrown for non-2xx responses, network failures and timeouts. */
export class ApiRequestError extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly body?: ApiErrorBody,
  ) {
    super(message);
    this.name = 'ApiRequestError';
  }
}

async function request<T>(
  method: 'GET' | 'POST',
  path: string,
  body?: unknown,
): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${env.apiUrl}${path}`, {
      method,
      headers:
        body === undefined ? undefined : { 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (error) {
    const timedOut =
      error instanceof DOMException && error.name === 'TimeoutError';
    throw new ApiRequestError(
      timedOut
        ? 'The request timed out. Please try again.'
        : 'Network error. Please check your connection.',
    );
  }

  const data = await response.json().catch(() => undefined);
  if (!response.ok) {
    throw new ApiRequestError(
      `Request failed with status ${response.status}`,
      response.status,
      data as ApiErrorBody | undefined,
    );
  }
  return data as T;
}

/** Minimal JSON client for the backend API (built on fetch; no extra dependency). */
export const apiClient = {
  get: <T>(path: string) => request<T>('GET', path),
  post: <T>(path: string, body: unknown) => request<T>('POST', path, body),
};

/** Pulls a human-readable message out of an API error. */
export function getErrorMessage(error: unknown): string {
  if (error instanceof ApiRequestError) {
    const message = error.body?.message;
    if (Array.isArray(message)) return message.join(', ');
    if (message) return message;
    return error.message;
  }
  return error instanceof Error ? error.message : 'Something went wrong';
}
