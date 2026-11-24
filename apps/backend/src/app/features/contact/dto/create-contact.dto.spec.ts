import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateContactDto } from './create-contact.dto';

const errorsFor = async (body: object) => {
  const errors = await validate(plainToInstance(CreateContactDto, body));
  return errors.map((e) => e.property).sort();
};

describe('CreateContactDto', () => {
  it('accepts a short OTT enquiry without company/state/message', async () => {
    expect(
      await errorsFor({
        topic: 'ott',
        name: 'Ravi',
        email: 'ravi@example.com',
        city: 'Hyderabad',
      }),
    ).toEqual([]);
  });

  it('requires business details for partnership enquiries', async () => {
    expect(
      await errorsFor({
        topic: 'partnership',
        name: 'Ravi',
        email: 'ravi@example.com',
      }),
    ).toEqual([
      'businessCategory',
      'city',
      'company',
      'message',
      'phone',
      'state',
    ]);
  });

  it('accepts a complete partnership enquiry', async () => {
    expect(
      await errorsFor({
        topic: 'partnership',
        name: 'Ravi',
        email: 'ravi@netco.in',
        phone: '+91 98765 43210',
        company: 'NetCo',
        city: 'Hyderabad',
        state: 'Telangana',
        businessCategory: 'isp',
        customerBase: '5,000',
        message: 'Interested in IPTV for our subscribers.',
      }),
    ).toEqual([]);
  });

  it('rejects an unknown business category', async () => {
    expect(
      await errorsFor({
        name: 'Ravi',
        email: 'ravi@example.com',
        businessCategory: 'spam',
      }),
    ).toEqual(['businessCategory']);
  });
});
