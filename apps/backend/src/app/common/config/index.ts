import appConfig from './app.config';
import mailConfig from './mail.config';

export const configurations = [appConfig, mailConfig];

export type { AppConfig } from './app.config';
export type { MailConfig } from './mail.config';
