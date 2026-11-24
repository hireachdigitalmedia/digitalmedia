import { Injectable } from '@nestjs/common';
import { MailService } from '../../mail/mail.service';
import {
  BusinessCategory,
  ContactTopic,
  CreateContactDto,
} from './dto/create-contact.dto';

const TOPIC_LABELS: Record<ContactTopic, string> = {
  general: 'General enquiry',
  iptv: 'IPTV enquiry',
  ott: 'OTT enquiry',
  partnership: 'Partnership enquiry',
};

const CATEGORY_LABELS: Record<BusinessCategory, string> = {
  isp: 'Internet Service Provider',
  'broadband-operator': 'Broadband Operator',
  'cable-tv-operator': 'Cable TV Operator',
  'regional-distributor': 'Regional Distributor',
  'digital-entertainment-partner': 'Digital Entertainment Partner',
  other: 'Other',
};

@Injectable()
export class ContactService {
  constructor(private readonly mailService: MailService) {}

  async submit(dto: CreateContactDto): Promise<void> {
    const topic = TOPIC_LABELS[dto.topic ?? 'general'];
    const location = [dto.city, dto.state].filter(Boolean).join(', ');
    const lines = [
      `Topic: ${topic}`,
      `Name: ${dto.name}`,
      `Email: ${dto.email}`,
      dto.phone && `Phone: ${dto.phone}`,
      dto.company && `Company: ${dto.company}`,
      dto.businessCategory &&
        `Business category: ${CATEGORY_LABELS[dto.businessCategory]}`,
      dto.customerBase && `Customer base: ${dto.customerBase}`,
      location && `Location: ${location}`,
      dto.message && `\n${dto.message}`,
    ].filter(Boolean);

    await this.mailService.send({
      to: this.mailService.contactInbox,
      replyTo: dto.email,
      subject: `${topic} from ${dto.company ? `${dto.name} (${dto.company})` : dto.name}`,
      text: lines.join('\n'),
    });
  }
}
