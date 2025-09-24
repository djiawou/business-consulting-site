
'use client';
import ImageGeneratorForm from "@/components/image-generator-form";
import { useTranslation } from "@/context/language-context";

export default function ImageGeneratorPage() {
  const { t } = useTranslation();
  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-headline font-bold text-primary">
            {t('image_generator.title')}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('image_generator.subtitle')}
          </p>
        </div>
        <ImageGeneratorForm />
      </div>
    </div>
  );
}
