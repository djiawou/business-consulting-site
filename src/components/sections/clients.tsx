'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Lightbulb, Rocket, Network, Mountain, GitMerge } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';


const partners = [
  { name: 'Innovate Corp', icon: <Lightbulb className="w-16 h-16 text-muted-foreground" /> },
  { name: 'QuantumLeap', icon: <Rocket className="w-16 h-16 text-muted-foreground" /> },
  { name: 'Stellar Solutions', icon: <Star className="w-16 h-16 text-muted-foreground" /> },
  { name: 'Nexus Group', icon: <Network className="w-16 h-16 text-muted-foreground" /> },
  { name: 'Vertex Inc.', icon: <Mountain className="w-16 h-16 text-muted-foreground" /> },
  { name: 'Synergy Systems', icon: <GitMerge className="w-16 h-16 text-muted-foreground" /> }
];

export default function Clients() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Jean Dupont',
      title: 'PDG, Innovate Corp',
      avatar: 'https://i.pravatar.cc/150?img=1',
      text: t('clients.testimonials.0.text'),
      rating: 5,
    },
    {
      name: 'Marie Martin',
      title: 'DGD, QuantumLeap',
      avatar: 'https://i.pravatar.cc/150?img=2',
      text: t('clients.testimonials.1.text'),
      rating: 5,
    },
    {
      name: 'Samuel Lee',
      title: 'CTO, Stellar Solutions',
      avatar: 'https://i.pravatar.cc/150?img=3',
      text: t('clients.testimonials.2.text'),
      rating: 5,
    },
  ];

  return (
    <section id="clients" className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary">{t('clients.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('clients.subtitle')}
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
                <div className="p-1">
                  <div className="flex aspect-video items-center justify-center p-6 bg-secondary rounded-lg grayscale hover:grayscale-0 transition-all duration-300" title={partner.name}>
                    {partner.icon}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-24">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-headline font-bold">{t('clients.testimonialsTitle')}</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader className="flex-row items-center gap-4">
                             <Avatar>
                                <AvatarImage src={testimonial.avatar} />
                                <AvatarFallback>{testimonial.name.substring(0,2)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">"{testimonial.text}"</p>
                        </CardContent>
                        <CardFooter>
                            <div className="flex gap-1">
                                {Array(testimonial.rating).fill(0).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
