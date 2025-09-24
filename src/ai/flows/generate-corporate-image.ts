'use server';

/**
 * @fileOverview An AI agent to generate corporate hero images and videos based on current style trends in the business consulting domain.
 *
 * - generateCorporateImage - A function that generates a corporate image or video.
 * - GenerateCorporateImageInput - The input type for the generateCorporateImage function.
 * - GenerateCorporateImageOutput - The return type for the generateCorporateImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const GenerateCorporateImageInputSchema = z.object({
  prompt: z
    .string()
    .describe(
      'A detailed description of the desired corporate image or video, including the style, theme, and elements to include.'
    ),
  mediaType: z.enum(['image', 'video']).describe('The type of media to generate: image or video.'),
});
export type GenerateCorporateImageInput = z.infer<typeof GenerateCorporateImageInputSchema>;

const GenerateCorporateImageOutputSchema = z.object({
  media: z
    .string()
    .describe('The generated media as a data URI (either image or video).')
    .optional(),
});
export type GenerateCorporateImageOutput = z.infer<typeof GenerateCorporateImageOutputSchema>;

export async function generateCorporateImage(
  input: GenerateCorporateImageInput
): Promise<GenerateCorporateImageOutput> {
  return generateCorporateImageFlow(input);
}

const generateCorporateImageFlow = ai.defineFlow(
  {
    name: 'generateCorporateImageFlow',
    inputSchema: GenerateCorporateImageInputSchema,
    outputSchema: GenerateCorporateImageOutputSchema,
  },
  async input => {
    if (input.mediaType === 'image') {
      const {media} = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: input.prompt,
      });
      return {media: media.url};
    } else {
      let {operation} = await ai.generate({
        model: ai.model('veo-2.0-generate-001'),
        prompt: input.prompt,
        config: {
          durationSeconds: 5,
          aspectRatio: '16:9',
        },
      });

      if (!operation) {
        throw new Error('Expected the model to return an operation');
      }

      // Wait until the operation completes. Note that this may take some time, maybe even up to a minute. Design the UI accordingly.
      while (!operation.done) {
        operation = await ai.checkOperation(operation);
        // Sleep for 5 seconds before checking again.
        await new Promise(resolve => setTimeout(resolve, 5000));
      }

      if (operation.error) {
        throw new Error('failed to generate video: ' + operation.error.message);
      }

      const video = operation.output?.message?.content.find(p => !!p.media);
      if (!video) {
        throw new Error('Failed to find the generated video');
      }

      // Convert the video to base64 for data URI
      const fetch = (await import('node-fetch')).default;
      // Add API key before fetching the video.
      const videoDownloadResponse = await fetch(
        `${video.media!.url}&key=${process.env.GEMINI_API_KEY}`
      );
      if (
        !videoDownloadResponse ||
        videoDownloadResponse.status !== 200 ||
        !videoDownloadResponse.body
      ) {
        throw new Error('Failed to fetch video');
      }

      const buffer = await videoDownloadResponse.arrayBuffer();
      const base64Video = Buffer.from(buffer).toString('base64');
      return {media: `data:video/mp4;base64,${base64Video}`};
    }
  }
);
