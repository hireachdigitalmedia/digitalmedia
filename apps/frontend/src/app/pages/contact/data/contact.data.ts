export const CONTACT_CONTENT = {
  title: 'Contact us',
  subtitle: "Tell us about your project and we'll get back to you.",
  submitLabel: 'Send message',
  submittingLabel: 'Sending…',
};

/** Form state uses strings for every field (empty = not filled in). */
export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export const INITIAL_CONTACT_FORM: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};
