
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
    title: 'Management Consulting',
    description: 'Tailored strategies to optimize operations, drive innovation, and enhance performance.',
  },
  {
    id: 'service-digitalization',
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: 'Digitalization',
    description: 'Integrating cutting-edge technology to modernize your business and create a digital-first culture.',
  },
  {
    id: 'service-outsourcing',
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Outsourcing',
    description: 'Strategic outsourcing solutions to increase efficiency, reduce costs, and access specialized talent.',
  },
  {
    id: 'service-training',
    icon: <Presentation className="w-10 h-10 text-primary" />,
    title: 'Corporate Training',
    description: 'Customized training programs to upskill your workforce and foster a culture of continuous learning.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary">What We Offer</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive suite of services designed to address your most complex business challenges and drive sustainable growth.
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
