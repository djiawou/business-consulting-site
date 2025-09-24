
import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
    {
      id: 'service-sap-migration',
      title: 'Migration SAP vers le Cloud',
      description: 'Migration transparente de votre environnement SAP vers le cloud pour plus de flexibilité, de performance et une réduction des coûts. Nous assurons une transition sécurisée et optimisée.',
    },
    {
      id: 'service-sap-expertise',
      title: 'Expertise SAP',
      description: 'Nos consultants certifiés SAP optimisent vos modules existants, implémentent de nouvelles fonctionnalités et assurent la performance de votre écosystème SAP.',
    },
    {
      id: 'service-support',
      title: 'Assistance et Support',
      description: 'Un support technique et fonctionnel réactif pour garantir la continuité de vos opérations. Nous offrons une assistance 24/7 pour résoudre rapidement tous vos incidents.',
    },
    {
      id: 'service-training-new',
      title: 'Formation',
      description: 'Programmes de formation sur mesure pour vos équipes afin de maximiser l\'adoption des outils et d\'améliorer la productivité. Sessions en ligne ou sur site.',
    },
    {
      id: 'service-strategy',
      title: 'Conseils et Stratégie d\'entreprise',
      description: 'Nous vous aidons à définir une vision claire et une feuille de route stratégique pour aligner votre technologie sur vos objectifs commerciaux et stimuler la croissance.',
    },
    {
      id: 'service-digital-transformation',
      title: 'Transformation Digitale',
      description: 'Accompagnement de A à Z dans votre transformation numérique, de l\'audit initial à la mise en œuvre de solutions innovantes pour digitaliser vos processus métier.',
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
          {services.map((service) => {
            const serviceImage = PlaceHolderImages.find((img) => img.id === service.id);

            return (
              <Card key={service.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl h-80">
                {/* Initial State */}
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

                {/* Hover State */}
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
