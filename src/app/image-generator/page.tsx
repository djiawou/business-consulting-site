
import ImageGeneratorForm from "@/components/image-generator-form";

export default function ImageGeneratorPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-headline font-bold text-primary">
            AI Corporate Media Generator
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Generate stunning, on-brand corporate images and videos in seconds. Describe your vision, and let our AI bring it to life, tailored to the style trends of the business consulting domain.
          </p>
        </div>
        <ImageGeneratorForm />
      </div>
    </div>
  );
}
