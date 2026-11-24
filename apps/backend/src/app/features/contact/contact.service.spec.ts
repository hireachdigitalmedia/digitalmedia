import { Test } from '@nestjs/testing';
import { MailService } from '../../mail/mail.service';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  const send = vi.fn().mockResolvedValue(undefined);
  let service: ContactService;

  beforeEach(async () => {
    send.mockClear();
    const moduleRef = await Test.createTestingModule({
      providers: [
        ContactService,
        {
          provide: MailService,
          useValue: { send, contactInbox: 'inbox@test.dev' },
        },
      ],
    }).compile();
    service = moduleRef.get(ContactService);
  });

  it('emails the contact inbox with the enquiry', async () => {
    await service.submit({
      name: 'Jane',
      email: 'jane@example.com',
      message: 'Hello',
    });

    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'inbox@test.dev',
        replyTo: 'jane@example.com',
        subject: 'General enquiry from Jane',
      }),
    );
  });

  it('labels topic enquiries and includes the city without a message', async () => {
    await service.submit({
      name: 'Ravi',
      email: 'ravi@example.com',
      topic: 'ott',
      city: 'Hyderabad',
    });

    const mail = send.mock.calls[0][0];
    expect(mail.subject).toBe('OTT enquiry from Ravi');
    expect(mail.text).toContain('Location: Hyderabad');
    expect(mail.text).not.toContain('undefined');
  });

  it('includes partner details and the company in the subject', async () => {
    await service.submit({
      topic: 'partnership',
      name: 'Ravi',
      email: 'ravi@netco.in',
      company: 'NetCo',
      businessCategory: 'cable-tv-operator',
      city: 'Hyderabad',
      state: 'Telangana',
      message: 'Hello',
    });

    const mail = send.mock.calls[0][0];
    expect(mail.subject).toBe('Partnership enquiry from Ravi (NetCo)');
    expect(mail.text).toContain('Business category: Cable TV Operator');
    expect(mail.text).toContain('Location: Hyderabad, Telangana');
  });
});
