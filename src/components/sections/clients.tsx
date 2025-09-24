
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

const partners = [
  'Innovate Corp', 'QuantumLeap', 'Stellar Solutions', 'Nexus Group', 'Vertex Inc.', 'Synergy Systems'
];

const testimonials = [
  {
    name: 'Jean Dupont',
    title: 'PDG, Innovate Corp',
    avatar: 'https://i.pravatar.cc/150?img=1',
    text: "Apex Insights a transformé notre entreprise. Leurs conseils stratégiques ont changé la donne, entraînant une augmentation de 40% de nos revenus.",
    rating: 5,
  },
  {
    name: 'Marie Martin',
    title: 'DGD, QuantumLeap',
    avatar: 'https://i.pravatar.cc/150?img=2',
    text: "Le professionnalisme et l'expertise approfondie de l'équipe Apex sont inégalés. Ils ont fourni des résultats au-delà de nos attentes.",
    rating: 5,
  },
  {
    name: 'Samuel Lee',
    title: 'CTO, Stellar Solutions',
    avatar: 'https://i.pravatar.cc/150?img=3',
    text: "Leur feuille de route pour la transformation numérique était brillante. Nous avons rationalisé nos opérations et amélioré considérablement la satisfaction de nos clients.",
    rating: 5,
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary">Approuvé par les leaders de l'industrie</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Nous sommes fiers de nous associer à un large éventail de clients qui nous font confiance pour fournir l'excellence.
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
                  <div className="flex aspect-video items-center justify-center p-6 bg-secondary rounded-lg">
                    <span className="text-xl font-semibold text-muted-foreground">{partner}</span>
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
                <h3 className="text-3xl font-headline font-bold">Ce que disent nos clients</h3>
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
