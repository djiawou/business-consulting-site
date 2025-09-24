
'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
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
      message: 'There was an error with your submission. Please check the fields.',
      success: false,
    };
  }
  
  // Here you would typically send an email, e.g., using Nodemailer or Resend.
  // For this example, we'll just log it to the console and simulate a delay.
  console.log('New contact form submission:');
  console.log(validatedFields.data);

  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: 'Thank you for your message! We will get back to you shortly.',
    success: true,
  };
}
