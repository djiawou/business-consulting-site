
'use client';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/context/language-context';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Expertise() {
  const { t } = useTranslation();

  const expertisePoints = [
    t('expertise.points.implementation'),
    t('expertise.points.migration'),
    t('expertise.points.competence'),
    t('expertise.points.architecture'),
  ];
  const expertiseImage = PlaceHolderImages.find((img) => img.id === 'expertise-sap-modules');


  return (
    <section id="expertise" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4 md:mb-6">
              {t('expertise.title_new')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8">
              {t('expertise.description_new')}
            </p>
            <ul className="space-y-4">
              {expertisePoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-foreground font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          {expertiseImage && (
            <div className="relative aspect-square order-1 md:order-2">
                <Image
                    src={expertiseImage.imageUrl}
                    alt={expertiseImage.description}
                    fill
                    className="object-contain"
                    unoptimized
                    data-ai-hint={expertiseImage.imageHint}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
