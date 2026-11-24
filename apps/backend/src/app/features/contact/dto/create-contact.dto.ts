import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

const trim = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim() : value;

/** What the enquiry is about — used in the email subject. */
export const CONTACT_TOPICS = [
  'general',
  'iptv',
  'ott',
  'partnership',
] as const;
export type ContactTopic = (typeof CONTACT_TOPICS)[number];

export class CreateContactDto {
  @Transform(trim)
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name!: string;

  @Transform(trim)
  @IsEmail()
  @MaxLength(254)
  email!: string;

  @Transform(trim)
  @IsOptional()
  @IsString()
  @MaxLength(30)
  phone?: string;

  @Transform(trim)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  company?: string;

  @Transform(trim)
  @IsOptional()
  @IsString()
  @MaxLength(100)
  city?: string;

  @IsOptional()
  @IsIn(CONTACT_TOPICS)
  topic?: ContactTopic;

  /** Optional: short enquiry forms (e.g. OTT) only collect contact details. */
  @Transform(trim)
  @IsOptional()
  @IsString()
  @MaxLength(5000)
  message?: string;
}
