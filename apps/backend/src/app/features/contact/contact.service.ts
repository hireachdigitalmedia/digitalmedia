import { Injectable } from '@nestjs/common';
import { MailService } from '../../mail/mail.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private readonly mailService: MailService) {}

  async submit(dto: CreateContactDto): Promise<void> {
    const lines = [
      `Name: ${dto.name}`,
      `Email: ${dto.email}`,
      dto.phone && `Phone: ${dto.phone}`,
      dto.company && `Company: ${dto.company}`,
      '',
      dto.message,
    ].filter((line) => line !== undefined && line !== '');

    await this.mailService.send({
      to: this.mailService.contactInbox,
      replyTo: dto.email,
      subject: `New enquiry from ${dto.name}`,
      text: lines.join('\n'),
    });
  }
}
