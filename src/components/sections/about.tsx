'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-new');
  const { t } = useTranslation();

  return (
    <section id="about" className="overflow-hidden bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          <div className="h-full min-h-[400px] md:min-h-0 relative">
            {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                    data-ai-hint={aboutImage.imageHint}
                />
            )}
          </div>
          <div className="py-24 pl-8">
            <h2 className="text-4xl font-headline font-bold text-primary mb-6">
              {t('about.title_new')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.subtitle_new')}
            </p>
             <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {t('about.paragraph_new')}
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="#contact" className="flex items-center gap-2">
                    {t('about.contact_button')} <ArrowRight />
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
