
'use client';

import { useEffect, useState, useRef } from 'react';
import { useTranslation } from '@/context/language-context';
import { Users, Briefcase, Award, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const Counter = ({ to }: { to: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const duration = 2000; // 2 seconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = to;
          if (start === end) return;

          const incrementTime = (duration / end) * 1;
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
          }, incrementTime);
        }
      },
      { threshold: 0.7 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [to]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold font-headline text-primary">
      {count}+
    </span>
  );
};


export default function Realisations() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Users,
      value: 330,
      label: t('realisations.stats.clients'),
    },
    {
      icon: Briefcase,
      value: 850,
      label: t('realisations.stats.projects'),
    },
    {
      icon: Award,
      value: 15,
      label: t('realisations.stats.team'),
    },
    {
      icon: Calendar,
      value: 15,
      label: t('realisations.stats.years'),
    },
  ];

  return (
    <section id="realisations" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            {t('realisations.title')}
          </h2>
          <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('realisations.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                'bg-background p-6 md:p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl'
              )}
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <Counter to={stat.value} />
              <p className="text-md font-semibold text-muted-foreground mt-2 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
