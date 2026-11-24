import {
  EMPTY_PARTNER_ENQUIRY,
  toPartnerPayload,
} from './partner-enquiry.utils';

describe('toPartnerPayload', () => {
  const filled = {
    ...EMPTY_PARTNER_ENQUIRY,
    name: ' Ravi ',
    company: 'NetCo ',
    phone: '+91 98765 43210',
    email: 'ravi@netco.in',
    businessCategory: 'isp' as const,
    city: 'Hyderabad',
    state: 'Telangana',
    message: ' Hello ',
  };

  it('tags the partnership topic and trims values', () => {
    expect(toPartnerPayload(filled)).toEqual({
      topic: 'partnership',
      name: 'Ravi',
      company: 'NetCo',
      phone: '+91 98765 43210',
      email: 'ravi@netco.in',
      businessCategory: 'isp',
      city: 'Hyderabad',
      state: 'Telangana',
      message: 'Hello',
    });
  });

  it('includes customer base only when provided', () => {
    expect(
      toPartnerPayload({ ...filled, customerBase: ' 5,000 ' }).customerBase,
    ).toBe('5,000');
    expect(
      toPartnerPayload({ ...filled, customerBase: '  ' }),
    ).not.toHaveProperty('customerBase');
  });
});
