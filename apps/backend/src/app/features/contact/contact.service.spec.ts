import { Test } from '@nestjs/testing';
import { MailService } from '../../mail/mail.service';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  it('emails the contact inbox with the enquiry', async () => {
    const send = vi.fn().mockResolvedValue(undefined);
    const moduleRef = await Test.createTestingModule({
      providers: [
        ContactService,
        {
          provide: MailService,
          useValue: { send, contactInbox: 'inbox@test.dev' },
        },
      ],
    }).compile();

    await moduleRef.get(ContactService).submit({
      name: 'Jane',
      email: 'jane@example.com',
      message: 'Hello',
    });

    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'inbox@test.dev',
        replyTo: 'jane@example.com',
        subject: 'New enquiry from Jane',
      }),
    );
  });
});
