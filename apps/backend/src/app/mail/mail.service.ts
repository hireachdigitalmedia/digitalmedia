import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport, type Transporter } from 'nodemailer';
import type { MailConfig } from '../common/config';

export interface SendMailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private readonly config: MailConfig;
  private readonly transporter?: Transporter;

  constructor(configService: ConfigService) {
    this.config = configService.getOrThrow<MailConfig>('mail');

    if (this.config.host) {
      this.transporter = createTransport({
        host: this.config.host,
        port: this.config.port,
        secure: this.config.secure,
        auth: this.config.user
          ? { user: this.config.user, pass: this.config.pass }
          : undefined,
      });
    } else {
      this.logger.warn(
        'SMTP_HOST is not set — emails will be logged, not sent.',
      );
    }
  }

  get contactInbox() {
    return this.config.contactInbox;
  }

  async send(options: SendMailOptions): Promise<void> {
    if (!this.transporter) {
      this.logger.log(
        `[mail:dry-run] to=${options.to} subject="${options.subject}"`,
      );
      return;
    }
    await this.transporter.sendMail({ from: this.config.from, ...options });
  }
}
