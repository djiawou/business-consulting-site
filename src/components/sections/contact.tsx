
'use client';

import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, Phone, MapPin } from 'lucide-react';
import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Spinner } from '@/components/ui/spinner';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit comporter au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez saisir une adresse e-mail valide.' }),
  subject: z.string().min(5, { message: 'Le sujet doit comporter au moins 5 caractères.' }),
  message: z.string().min(10, { message: 'Le message doit comporter au moins 10 caractères.' }),
});

type FormData = z.infer<typeof formSchema>;

const initialState = {
  message: '',
  success: false,
};

export default function Contact() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'contact-map');
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const { formState: { isSubmitting } } = form;

  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.success ? 'Succès !' : 'Erreur',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary">Contactez-nous</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Nous sommes là pour vous aider. Contactez-nous pour une consultation ou pour en savoir plus sur nos services.
          </p>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold font-headline mb-6">Écrivez-nous</h3>
                <Form {...form}>
                  <form action={formAction} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean Dupont" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adresse e-mail</FormLabel>
                          <FormControl>
                            <Input placeholder="vous@exemple.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sujet</FormLabel>
                          <FormControl>
                            <Input placeholder="Concernant..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Votre message ici..." {...field} rows={5} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? <Spinner /> : 'Envoyer le message'}
                    </Button>
                  </form>
                </Form>
              </div>
              <div className="bg-primary text-primary-foreground p-8 md:p-12 flex flex-col justify-between rounded-r-lg">
                <div>
                  <h3 className="text-2xl font-bold font-headline mb-6">Nos Coordonnées</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6" />
                      <span>123 Rue du Commerce, Bureau 100, Paris, 75001</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6" />
                      <span>(123) 456-7890</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6" />
                      <span>contact@apexinsights.com</span>
                    </div>
                  </div>
                </div>
                {mapImage && (
                  <div className="mt-8 rounded-lg overflow-hidden aspect-video relative">
                     <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={mapImage.imageUrl}
                            alt={mapImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={mapImage.imageHint}
                        />
                     </a>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
