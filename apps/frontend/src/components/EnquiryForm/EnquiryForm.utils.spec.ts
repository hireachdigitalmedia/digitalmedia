import { toEnquiryPayload } from './EnquiryForm.utils';

describe('toEnquiryPayload', () => {
  it('tags the topic, trims values and drops empty optional fields', () => {
    expect(
      toEnquiryPayload(
        { name: ' Ravi ', email: 'ravi@example.com ', phone: ' ', city: '' },
        'ott',
      ),
    ).toEqual({ topic: 'ott', name: 'Ravi', email: 'ravi@example.com' });
  });

  it('keeps phone and city when provided', () => {
    const payload = toEnquiryPayload(
      {
        name: 'Ravi',
        email: 'ravi@example.com',
        phone: '98765 43210',
        city: 'Hyderabad',
      },
      'iptv',
    );
    expect(payload).toMatchObject({
      phone: '98765 43210',
      city: 'Hyderabad',
      topic: 'iptv',
    });
  });
});
