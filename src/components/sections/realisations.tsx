
'use client';

import { useTranslation } from '@/context/language-context';

export default function Realisations() {
  const { t } = useTranslation();

  return (
    <section id="realisations" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                {t('header.realisations')}
            </h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Découvrez quelques-uns des projets que nous avons menés à bien.
            </p>
        </div>
        <div className="flex justify-center items-center h-40 bg-muted rounded-lg">
            <p className="text-muted-foreground">La section des réalisations est en cours de construction.</p>
        </div>
      </div>
    </section>
  );
}
