'use client'

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Rocket, Handshake } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export default function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us');
  const { t } = useTranslation();

  const values = [
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: t('about.values.vision.title'),
      description: t('about.values.vision.description'),
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: t('about.values.mission.title'),
      description: t('about.values.mission.description'),
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary" />,
      title: t('about.values.values.title'),
      description: t('about.values.values.description'),
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary">
            {t('about.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {values.map((value, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-bold font-headline">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {aboutImage && (
              <Card className="overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
