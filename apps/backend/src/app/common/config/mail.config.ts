import { registerAs } from '@nestjs/config';

export interface MailConfig {
  host?: string;
  port: number;
  secure: boolean;
  user?: string;
  pass?: string;
  from: string;
  contactInbox: string;
}

export default registerAs('mail', (): MailConfig => ({
  host: process.env.SMTP_HOST || undefined,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  user: process.env.SMTP_USER || undefined,
  pass: process.env.SMTP_PASS || undefined,
  from:
    process.env.MAIL_FROM ??
    'Reach Digital Media <no-reply@hireachdigitalmedia.com>',
  contactInbox: process.env.CONTACT_INBOX ?? 'hello@hireachdigitalmedia.com',
}));
