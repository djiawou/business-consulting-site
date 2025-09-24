
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
import { Star } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import Image from 'next/image';


const partners = [
    { name: 'Innovate Corp', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=400' },
    { name: 'QuantumLeap', logo: 'https://images.unsplash.com/photo-1557864137-2929636454c5?q=80&w=400' },
    { name: 'Stellar Solutions', logo: 'https://images.unsplash.com/photo-1549421257-a93c7219c636?q=80&w=400' },
    { name: 'Nexus Group', logo: 'https://images.unsplash.com/photo-1553011388-3483b1b6c779?q=80&w=400' },
    { name: 'Vertex Inc.', logo: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?q=80&w=400' },
    { name: 'Synergy Systems', logo: 'https://images.unsplash.com/photo-1522199895919-207908c69f7f?q=80&w=400' },
    { name: 'GlobalTrust', logo: 'https://images.unsplash.com/photo-1521151636413-a43a34215283?q=80&w=400' },
    { name: 'Pinnacle Corp', logo: 'https://images.unsplash.com/photo-1618218169123-afc3ea93a275?q=80&w=400' },
    { name: 'Zenith Solutions', logo: 'https://images.unsplash.com/photo-1612550992286-a7541f379637?q=80&w=400' },
    { name: 'FusionWorks', logo: 'https://images.unsplash.com/photo-1606166325413-a5dc53c1553a?q=80&w=400' }
  ];

export default function Clients() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Jean Dupont',
      title: 'PDG, Innovate Corp',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzU4NzA4MjUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: t('clients.testimonials.0.text'),
      rating: 5,
    },
    {
      name: 'Marie Martin',
      title: 'DGD, QuantumLeap',
      avatar: 'https://images.unsplash.com/photo-1479936343636-73da5e5c000c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwwfHx8fDE3NTg3MDgyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: t('clients.testimonials.1.text'),
      rating: 5,
    },
    {
      name: 'Samuel Lee',
      title: 'CTO, Stellar Solutions',
      avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzU4NzA4MjUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
                  <div className="flex aspect-video items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105" title={partner.name}>
                    <div className="relative w-full h-16">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
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
                     <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <CardHeader className="flex-row items-center gap-4">
                             <Avatar className="w-16 h-16">
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name.substring(0,2)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold text-lg">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground italic">"{testimonial.text}"</p>
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

    
