
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Rocket, Handshake } from 'lucide-react';

export default function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us');

  const values = [
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: 'Notre Vision',
      description: 'Être le catalyseur de référence pour la transformation des entreprises et la croissance durable à l’échelle mondiale.',
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: 'Notre Mission',
      description: 'Donner aux organisations les moyens de libérer leur plein potentiel grâce à des stratégies innovantes et des analyses basées sur les données.',
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary" />,
      title: 'Nos Valeurs',
      description: 'L\'intégrité, l\'excellence et le partenariat sont les piliers de nos relations avec nos clients.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary">
            Pionniers de l'Excellence Commerciale
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Apex Insights a été fondé sur le principe de fournir des résultats tangibles. Nous combinons une connaissance approfondie de l'industrie avec une passion pour l'innovation afin de résoudre les défis les plus critiques de nos clients.
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
