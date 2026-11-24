import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  async submit(@Body() dto: CreateContactDto) {
    await this.contactService.submit(dto);
    return { message: 'Thanks! We will get back to you shortly.' };
  }
}
