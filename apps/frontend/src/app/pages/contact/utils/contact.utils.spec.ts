import { toContactPayload } from './contact.utils';

describe('toContactPayload', () => {
  it('trims values and omits empty optional fields', () => {
    expect(
      toContactPayload({
        name: ' Jane ',
        email: 'jane@example.com ',
        phone: '  ',
        company: '',
        message: ' Hi ',
      }),
    ).toEqual({ name: 'Jane', email: 'jane@example.com', message: 'Hi' });
  });

  it('keeps optional fields when filled in', () => {
    const payload = toContactPayload({
      name: 'Jane',
      email: 'jane@example.com',
      phone: '123',
      company: 'Acme',
      message: 'Hi',
    });
    expect(payload.phone).toBe('123');
    expect(payload.company).toBe('Acme');
  });
});
