
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Briefcase, Cpu, Users, Presentation } from 'lucide-react';

const services = [
  {
    id: 'service-management',
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: 'Conseil en Management',
    description: 'Des stratégies sur mesure pour optimiser les opérations, stimuler l\'innovation et améliorer la performance.',
  },
  {
    id: 'service-digitalization',
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: 'Digitalisation',
    description: 'Intégrer des technologies de pointe pour moderniser votre entreprise et créer une culture numérique.',
  },
  {
    id: 'service-outsourcing',
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Externalisation',
    description: 'Solutions d\'externalisation stratégiques pour accroître l\'efficacité, réduire les coûts et accéder à des talents spécialisés.',
  },
  {
    id: 'service-training',
    icon: <Presentation className="w-10 h-10 text-primary" />,
    title: 'Formation d\'Entreprise',
    description: 'Programmes de formation personnalisés pour perfectionner votre personnel et favoriser une culture d\'apprentissage continu.',
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const serviceImage = PlaceHolderImages.find((img) => img.id === service.id);
            return (
              <Card key={service.id} className="text-center group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardContent className="p-0">
                  {serviceImage && (
                    <div className="relative h-48">
                       <Image
                        src={serviceImage.imageUrl}
                        alt={serviceImage.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={serviceImage.imageHint}
                      />
                    </div>
                  )}
                </CardContent>
                <CardHeader>
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                  <CardDescription className="pt-2">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
