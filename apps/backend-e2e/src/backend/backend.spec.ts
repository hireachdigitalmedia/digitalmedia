import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.HOST ?? 'localhost'}:${process.env.PORT ?? 8080}/api`,
  validateStatus: () => true,
});

describe('Backend API', () => {
  it('GET /api returns API info', async () => {
    const res = await api.get('/');
    expect(res.status).toBe(200);
    expect(res.data.name).toBe('Reach Digital Media API');
  });

  it('GET /api/health reports ok', async () => {
    const res = await api.get('/health');
    expect(res.status).toBe(200);
    expect(res.data.status).toBe('ok');
  });

  it('POST /api/contact rejects invalid payloads', async () => {
    const res = await api.post('/contact', { name: '', email: 'not-an-email' });
    expect(res.status).toBe(400);
  });
});
