
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
  prompt: z.string().min(10, { message: 'Prompt must be at least 10 characters.' }),
  mediaType: z.enum(['image', 'video'], { required_error: 'You must select a media type.' }),
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
      prompt: 'A diverse team of business professionals in a modern, sunlit office, collaborating around a sleek conference table. The style is cinematic and optimistic.',
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
            title: 'Generation Complete!',
            description: `Your ${data.mediaType} has been successfully generated.`
        })
      } else {
        throw new Error('The AI did not return any media.');
      }
    } catch (error) {
      console.error('Error generating media:', error);
      toast({
        title: 'Generation Failed',
        description: error instanceof Error ? error.message : 'An unknown error occurred.',
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
                  <FormLabel className="text-lg font-semibold">Your Vision</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., A dynamic shot of a consultant presenting a growth chart..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Describe the image or video you want to create in detail.
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
                  <FormLabel className="text-lg font-semibold">Media Type</FormLabel>
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
                        <FormLabel className="font-normal">Video (may take up to a minute)</FormLabel>
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
                  Generating...
                </>
              ) : (
                'Generate Media'
              )}
            </Button>
          </form>
        </Form>
        {(isLoading || mediaResult) && (
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Result</h3>
                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                    {isLoading ? <Spinner className="w-12 h-12 text-primary" /> : null}
                    {mediaResult && generatedMediaType === 'image' && (
                        <Image src={mediaResult} alt="Generated corporate image" width={1280} height={720} className="rounded-lg object-contain"/>
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
