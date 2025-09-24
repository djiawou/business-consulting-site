
'use server';

import * as z from 'zod';

const createFormSchema = (t) => z.object({
  name: z.string().min(2, { message: t('contact.form.errors.name') }),
  email: z.string().email({ message: t('contact.form.errors.email') }),
  subject: z.string().min(5, { message: t('contact.form.errors.subject') }),
  message: z.string().min(10, { message: t('contact.form.errors.message') }),
});


type State = {
  message: string;
  success: boolean;
  lang: 'fr' | 'en';
};

// Helper to get translations on the server
async function getTranslations(lang: 'fr' | 'en') {
  if (lang === 'en') {
    return (await import('@/locales/en.json')).default;
  }
  return (await import('@/locales/fr.json')).default;
}

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  const lang = (formData.get('lang') as ('fr' | 'en')) || 'fr';
  const translations = await getTranslations(lang);
  
  // This is a helper to get nested keys, e.g., t('contact.form.errors.name')
  const t = (key: string) => key.split('.').reduce((obj, k) => (obj as any)?.[k], translations);

  const formSchema = createFormSchema(t);

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  const validatedFields = formSchema.safeParse({
    name,
    email,
    subject,
    message,
  });

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      message: firstError || t('contact.form.errors.generic'),
      success: false,
      lang,
    };
  }
  
  // Here you would typically send an email, e.g., using Nodemailer or Resend.
  // For this example, we'll just log it to the console and simulate a delay.
  console.log('Nouvelle soumission de formulaire de contact :');
  console.log(validatedFields.data);

  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: t('contact.form.success'),
    success: true,
    lang,
  };
}
