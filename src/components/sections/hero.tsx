'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslation } from '@/hooks/use-translation';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-bg');
  const { t } = useTranslation();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
          {t('hero.subtitle')}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#services">{t('hero.servicesButton')}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
            <Link href="#contact">{t('hero.contactButton')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
