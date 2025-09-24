
'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateCorporateImage } from '@/ai/flows/generate-corporate-image';
import { useTranslation } from '@/context/language-context';

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

export default function ImageGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [mediaResult, setMediaResult] = useState<string | null>(null);
  const [generatedMediaType, setGeneratedMediaType] = useState<'image' | 'video' | null>(null);
  const { toast } = useToast();
  const { t } = useTranslation();

  const formSchema = z.object({
    prompt: z.string().min(10, { message: t('image_generator.form.errors.prompt') }),
    mediaType: z.enum(['image', 'video'], { required_error: t('image_generator.form.errors.mediaType') }),
  });
  
  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: t('image_generator.form.defaultPrompt'),
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
            title: t('image_generator.toast.success_title'),
            description: t('image_generator.toast.success_description', {type: data.mediaType === 'image' ? t('image_generator.toast.image') : t('image_generator.toast.video')})
        })
      } else {
        throw new Error(t('image_generator.toast.error_no_media'));
      }
    } catch (error) {
      console.error('Erreur lors de la génération du média:', error);
      toast({
        title: t('image_generator.toast.error_title'),
        description: error instanceof Error ? error.message : t('image_generator.toast.error_unknown'),
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
                  <FormLabel className="text-lg font-semibold">{t('image_generator.form.prompt_label')}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t('image_generator.form.prompt_placeholder')}
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {t('image_generator.form.prompt_description')}
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
                  <FormLabel className="text-lg font-semibold">{t('image_generator.form.mediaType_label')}</FormLabel>
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
                        <FormLabel className="font-normal">{t('image_generator.form.image_label')}</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="video" />
                        </FormControl>
                        <FormLabel className="font-normal">{t('image_generator.form.video_label')}</FormLabel>
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
                  {t('image_generator.form.loading_button')}
                </>
              ) : (
                t('image_generator.form.submit_button')
              )}
            </Button>
          </form>
        </Form>
        {(isLoading || mediaResult) && (
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">{t('image_generator.result_title')}</h3>
                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                    {isLoading ? <Spinner className="w-12 h-12 text-primary" /> : null}
                    {mediaResult && generatedMediaType === 'image' && (
                        <Image src={mediaResult} alt={t('image_generator.alt_generated_image')} width={1280} height={720} className="rounded-lg object-contain"/>
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
