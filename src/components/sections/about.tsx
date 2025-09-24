
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslation } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-new');
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                    data-ai-hint={aboutImage.imageHint}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            )}
          </div>
          <div className="">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 md:mb-6">
              {t('about.title_new')}
            </h2>
            <p className="text-md md:text-lg text-muted-foreground leading-relaxed">
              {t('about.subtitle_new')}
            </p>
             <p className="mt-4 text-md md:text-lg text-muted-foreground leading-relaxed">
              {t('about.paragraph_new')}
            </p>
            <Button asChild size="lg" className="mt-6 md:mt-8">
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
