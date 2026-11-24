import { ContactModule } from './contact/contact.module';
import { HealthModule } from './health/health.module';

/** Register every feature module here; AppModule imports this list. */
export const featureModules = [HealthModule, ContactModule];
