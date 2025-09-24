
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'service-sap-migration',
    title: 'Migration SAP vers le Cloud',
    description: 'Accélérez la migration vers le cloud avec notre expertise de conseil SAP pour atteindre l\'excellence opérationnelle.',
    isFeatured: true,
  },
  {
    id: 'service-sap-expertise',
    title: 'Expertise SAP',
  },
  {
    id: 'service-support',
    title: 'Assistance et Support',
  },
  {
    id: 'service-training-new',
    title: 'Formation',
  },
  {
    id: 'service-strategy',
    title: 'Conseils et Stratégie d\'entreprise',
  },
  {
    id: 'service-digital-transformation',
    title: 'Transformation Digitale',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary">Ce que nous offrons</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Une gamme complète de services conçus pour relever vos défis commerciaux les plus complexes et favoriser une croissance durable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const serviceImage = PlaceHolderImages.find((img) => img.id === service.id);

            if (service.isFeatured) {
              return (
                <Card key={service.id} className="text-left group overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col bg-primary text-primary-foreground p-8">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold font-headline mb-4">{service.title}</h3>
                    <p className="text-primary-foreground/80">{service.description}</p>
                  </div>
                  <div className="flex justify-between items-end mt-6">
                    <Link href="#" className="flex items-center font-semibold hover:underline">
                      VOIR PLUS <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <div className="text-8xl font-bold text-primary-foreground/20 leading-none">
                      0{index + 1}
                    </div>
                  </div>
                </Card>
              );
            }

            return (
              <Card key={service.id} className="text-center group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative">
                <CardContent className="p-0">
                  {serviceImage ? (
                    <div className="relative h-64">
                       <Image
                        src={serviceImage.imageUrl}
                        alt={serviceImage.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={serviceImage.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                    </div>
                  ) : (
                    <div className="relative h-64 bg-muted flex items-center justify-center">
                        <p className="text-muted-foreground">Ajoutez votre image</p>
                    </div>
                  )}
                </CardContent>
                <div className="absolute inset-0 flex flex-col justify-end items-start p-6 text-white">
                  <div className="text-8xl font-bold text-white/20 leading-none -mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-bold font-headline">{service.title}</h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
