import { ApiRequestError, apiClient, getErrorMessage } from './client';

const jsonResponse = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

describe('apiClient', () => {
  afterEach(() => vi.restoreAllMocks());

  it('posts JSON and returns the parsed body', async () => {
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(jsonResponse(202, { message: 'Thanks!' }));

    await expect(apiClient.post('/contact', { name: 'Ravi' })).resolves.toEqual(
      { message: 'Thanks!' },
    );
    const [url, init] = fetchSpy.mock.calls[0];
    expect(url).toBe('/api/contact');
    expect(init).toMatchObject({
      method: 'POST',
      body: JSON.stringify({ name: 'Ravi' }),
    });
  });

  it('throws ApiRequestError with the backend validation messages', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      jsonResponse(400, {
        statusCode: 400,
        message: ['email must be an email', 'name should not be empty'],
      }),
    );

    const error = (await apiClient
      .post('/contact', {})
      .catch((e: unknown) => e)) as ApiRequestError;
    expect(error).toBeInstanceOf(ApiRequestError);
    expect(error.status).toBe(400);
    expect(getErrorMessage(error)).toBe(
      'email must be an email, name should not be empty',
    );
  });

  it('reports network failures in plain language', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(
      new TypeError('Failed to fetch'),
    );

    const error = await apiClient.get('/health').catch((e) => e);
    expect(getErrorMessage(error)).toBe(
      'Network error. Please check your connection.',
    );
  });
});
