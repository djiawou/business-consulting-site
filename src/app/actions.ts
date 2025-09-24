
'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit comporter au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez saisir une adresse e-mail valide.' }),
  subject: z.string().min(5, { message: 'Le sujet doit comporter au moins 5 caractères.' }),
  message: z.string().min(10, { message: 'Le message doit comporter au moins 10 caractères.' }),
});

type State = {
  message: string;
  success: boolean;
};

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
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
    return {
      message: 'Une erreur est survenue lors de votre soumission. Veuillez vérifier les champs.',
      success: false,
    };
  }
  
  // Here you would typically send an email, e.g., using Nodemailer or Resend.
  // For this example, we'll just log it to the console and simulate a delay.
  console.log('Nouvelle soumission de formulaire de contact :');
  console.log(validatedFields.data);

  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: 'Merci pour votre message ! Nous vous recontacterons sous peu.',
    success: true,
  };
}
