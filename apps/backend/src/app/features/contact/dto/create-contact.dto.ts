import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateIf,
} from 'class-validator';

const trim = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim() : value;

/** What the enquiry is about — used in the email subject. */
export const CONTACT_TOPICS = [
  'general',
  'consumer',
  'iptv',
  'ott',
  'partnership',
] as const;
export type ContactTopic = (typeof CONTACT_TOPICS)[number];

/** Business categories offered on the distribution partner form. */
export const BUSINESS_CATEGORIES = [
  'isp',
  'broadband-operator',
  'cable-tv-operator',
  'regional-distributor',
  'digital-entertainment-partner',
  'other',
] as const;
export type BusinessCategory = (typeof BUSINESS_CATEGORIES)[number];

/**
 * Validate the field when it was sent, and require it for partnership enquiries.
 * (Other enquiry types treat these fields as optional.)
 */
const RequiredForPartnership = (field: keyof CreateContactDto) =>
  ValidateIf(
    (dto: CreateContactDto) =>
      dto.topic === 'partnership' || dto[field] !== undefined,
  );

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

  @IsOptional()
  @IsIn(CONTACT_TOPICS)
  topic?: ContactTopic;

  @Transform(trim)
  @RequiredForPartnership('phone')
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  phone?: string;

  @Transform(trim)
  @RequiredForPartnership('company')
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  company?: string;

  @Transform(trim)
  @RequiredForPartnership('city')
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  city?: string;

  @Transform(trim)
  @RequiredForPartnership('state')
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  state?: string;

  @RequiredForPartnership('businessCategory')
  @IsIn(BUSINESS_CATEGORIES)
  businessCategory?: BusinessCategory;

  /** Approximate subscriber count — always optional. */
  @Transform(trim)
  @IsOptional()
  @IsString()
  @MaxLength(50)
  customerBase?: string;

  @Transform(trim)
  @RequiredForPartnership('message')
  @IsString()
  @IsNotEmpty()
  @MaxLength(5000)
  message?: string;
}
