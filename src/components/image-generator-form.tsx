
'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateCorporateImage } from '@/ai/flows/generate-corporate-image';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';
import { Card, CardContent } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

const formSchema = z.object({
  prompt: z.string().min(10, { message: 'Le prompt doit contenir au moins 10 caractères.' }),
  mediaType: z.enum(['image', 'video'], { required_error: 'Vous devez sélectionner un type de média.' }),
});

type FormData = z.infer<typeof formSchema>;

export default function ImageGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [mediaResult, setMediaResult] = useState<string | null>(null);
  const [generatedMediaType, setGeneratedMediaType] = useState<'image' | 'video' | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: 'Une équipe diversifiée de professionnels dans un bureau moderne et ensoleillé, collaborant autour d\'une table de conférence élégante. Le style est cinématographique et optimiste.',
      mediaType: 'image',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setMediaResult(null);
    setGeneratedMediaType(null);
    
    try {
      const result = await generateCorporateImage(data);
      if (result.media) {
        setMediaResult(result.media);
        setGeneratedMediaType(data.mediaType);
        toast({
            title: 'Génération terminée !',
            description: `Votre ${data.mediaType === 'image' ? 'image' : 'vidéo'} a été générée avec succès.`
        })
      } else {
        throw new Error('L\'IA n\'a retourné aucun média.');
      }
    } catch (error) {
      console.error('Erreur lors de la génération du média:', error);
      toast({
        title: 'La génération a échoué',
        description: error instanceof Error ? error.message : 'Une erreur inconnue est survenue.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto mt-12 shadow-lg">
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Votre Vision</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Un plan dynamique d'un consultant présentant un graphique de croissance..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Décrivez en détail l'image ou la vidéo que vous souhaitez créer.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mediaType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-lg font-semibold">Type de Média</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="image" />
                        </FormControl>
                        <FormLabel className="font-normal">Image</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="video" />
                        </FormControl>
                        <FormLabel className="font-normal">Vidéo (peut prendre jusqu'à une minute)</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner className="mr-2 h-4 w-4" />
                  Génération en cours...
                </>
              ) : (
                'Générer le média'
              )}
            </Button>
          </form>
        </Form>
        {(isLoading || mediaResult) && (
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Résultat</h3>
                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                    {isLoading ? <Spinner className="w-12 h-12 text-primary" /> : null}
                    {mediaResult && generatedMediaType === 'image' && (
                        <Image src={mediaResult} alt="Image d'entreprise générée" width={1280} height={720} className="rounded-lg object-contain"/>
                    )}
                    {mediaResult && generatedMediaType === 'video' && (
                        <video src={mediaResult} controls autoPlay loop className="rounded-lg w-full h-full"/>
                    )}
                </div>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
