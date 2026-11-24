import { EMPTY_CONTACT_FORM, toContactPayload } from './contact.utils';

const values = {
  ...EMPTY_CONTACT_FORM,
  name: ' Priya ',
  email: 'priya@example.com',
  phone: '+91 90000 00000',
  city: 'Chennai',
  message: ' Is IPTV available? ',
  company: 'NetCo',
  businessCategory: 'isp' as const,
  state: 'Tamil Nadu',
};

describe('toContactPayload', () => {
  it('sends consumer enquiries without partner fields', () => {
    expect(toContactPayload(values, 'consumer')).toEqual({
      topic: 'consumer',
      name: 'Priya',
      email: 'priya@example.com',
      phone: '+91 90000 00000',
      city: 'Chennai',
      message: 'Is IPTV available?',
    });
  });

  it('maps general enquiries to the general topic', () => {
    expect(toContactPayload(values, 'general').topic).toBe('general');
  });

  it('includes business details for partner enquiries', () => {
    expect(toContactPayload(values, 'partner')).toMatchObject({
      topic: 'partnership',
      company: 'NetCo',
      businessCategory: 'isp',
      state: 'Tamil Nadu',
    });
  });
});
