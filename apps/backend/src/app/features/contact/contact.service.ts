import { Injectable } from '@nestjs/common';
import { MailService } from '../../mail/mail.service';
import { ContactTopic, CreateContactDto } from './dto/create-contact.dto';

const TOPIC_LABELS: Record<ContactTopic, string> = {
  general: 'General enquiry',
  iptv: 'IPTV enquiry',
  ott: 'OTT enquiry',
  partnership: 'Partnership enquiry',
};

@Injectable()
export class ContactService {
  constructor(private readonly mailService: MailService) {}

  async submit(dto: CreateContactDto): Promise<void> {
    const topic = TOPIC_LABELS[dto.topic ?? 'general'];
    const lines = [
      `Topic: ${topic}`,
      `Name: ${dto.name}`,
      `Email: ${dto.email}`,
      dto.phone && `Phone: ${dto.phone}`,
      dto.company && `Company: ${dto.company}`,
      dto.city && `City: ${dto.city}`,
      dto.message && `\n${dto.message}`,
    ].filter(Boolean);

    await this.mailService.send({
      to: this.mailService.contactInbox,
      replyTo: dto.email,
      subject: `${topic} from ${dto.name}`,
      text: lines.join('\n'),
    });
  }
}
