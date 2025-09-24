'use client'

import Image from 'next/image';
import {
  Card,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslation } from '@/hooks/use-translation';


export default function Services() {
    const { t } = useTranslation();

    const services = [
        {
          id: 'service-sap-migration',
          title: t('services.items.sap_migration.title'),
          description: t('services.items.sap_migration.description'),
        },
        {
          id: 'service-sap-expertise',
          title: t('services.items.sap_expertise.title'),
          description: t('services.items.sap_expertise.description'),
        },
        {
          id: 'service-support',
          title: t('services.items.support.title'),
          description: t('services.items.support.description'),
        },
        {
          id: 'service-training-new',
          title: t('services.items.training.title'),
          description: t('services.items.training.description'),
        },
        {
          id: 'service-strategy',
          title: t('services.items.strategy.title'),
          description: t('services.items.strategy.description'),
        },
        {
          id: 'service-digital-transformation',
          title: t('services.items.digital_transformation.title'),
          description: t('services.items.digital_transformation.description'),
        },
      ];


  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary">{t('services.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const serviceImage = PlaceHolderImages.find((img) => img.id === service.id);

            return (
              <Card key={service.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl h-80">
                
                <div className="absolute inset-0 bg-white transition-opacity duration-500 group-hover:opacity-0">
                  {serviceImage ? (
                    <Image
                      src={serviceImage.imageUrl}
                      alt={serviceImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={serviceImage.imageHint}
                    />
                  ) : <div className="h-full w-full bg-muted" />}
                   <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold font-headline text-white">{service.title}</h3>
                  </div>
                </div>

                
                <div className="absolute inset-0 bg-primary text-primary-foreground p-6 flex flex-col justify-center items-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold font-headline mb-4">{service.title}</h3>
                  <p className="text-primary-foreground/90">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
