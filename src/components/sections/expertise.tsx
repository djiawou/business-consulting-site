'use client';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const SapModule = ({
  name,
  description,
  className,
}: {
  name: string;
  description: string;
  className?: string;
}) => (
  <div
    className={`bg-blue-500 text-white rounded-lg shadow-lg p-3 text-center flex flex-col justify-center ${className}`}
  >
    <div className="font-bold text-sm md:text-base">{name}</div>
    <div className="text-xs hidden md:block">({description})</div>
  </div>
);

export default function Expertise() {
  const { t } = useTranslation();

  const expertisePoints = [
    t('expertise.points.implementation'),
    t('expertise.points.migration'),
    t('expertise.points.competence'),
    t('expertise.points.architecture'),
  ];

  return (
    <section id="expertise" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-bold mb-2">
              // {t('expertise.tagline')}
            </p>
            <h2 className="text-4xl font-headline font-bold text-foreground mb-6">
              {t('expertise.title_new')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t('expertise.description_new')}
            </p>
            <ul className="space-y-4">
              {expertisePoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <span className="text-foreground font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center justify-center min-h-[350px] md:min-h-[450px]">
            <div className="absolute w-48 h-48 md:w-56 md:h-56 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <svg
                viewBox="0 0 100 40"
                className="w-32 h-auto text-blue-600"
              >
                <path
                  fill="currentColor"
                  d="M99.1,3.4c-2.3-2.3-5.9-3.4-10.4-3.4H11.2c-4.6,0-8.2,1.2-10.4,3.4C-1.4,5.6-2.5,8.8-2.5,12.9v14.1c0,4.2,1.1,7.3,3.3,9.6c2.3,2.3,5.9,3.4,10.4,3.4h77.5c4.6,0,8.2-1.2,10.4-3.4c2.3-2.3,3.3-5.5,3.3-9.6V12.9C102.5,8.8,101.4,5.6,99.1,3.4z M35.3,29.5H26l-6-11.7c-0.6-1.2-1-2.3-1.2-3.3c-0.2,1-0.5,2.1-1.1,3.3l-6,11.7h-9.2L16.4,9.7h11.2l-6,11.7c-0.5,1-0.9,1.9-1.2,2.8c0.3-0.9,0.7-1.8,1.2-2.8l6-11.7h11.1L35.3,29.5z M61.9,29.5h-9.2l-6-11.7c-0.6-1.2-1-2.3-1.2-3.3c-0.2,1-0.5,2.1-1.1,3.3l-6,11.7h-9.2L42.8,9.7h11.2l-6,11.7c-0.5,1-0.9,1.9-1.2,2.8c0.3-0.9,0.7-1.8,1.2-2.8l6-11.7h11.1L61.9,29.5z M92.4,29.5H81.2V9.7h11.2V29.5z"
                />
              </svg>
            </div>
            
            <SapModule name="FI" description={t('expertise.modules.fi')} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-24 h-16 md:w-28" />
            <SapModule name="CO" description={t('expertise.modules.co')} className="absolute top-0 right-0 -translate-y-1/4 w-24 h-16 md:w-28" />
            <SapModule name="MM" description={t('expertise.modules.mm')} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-24 h-16 md:w-28" />
            <SapModule name="SD" description={t('expertise.modules.sd')} className="absolute bottom-0 right-0 translate-y-1/4 w-24 h-16 md:w-28" />
            <SapModule name="QM" description={t('expertise.modules.qm')} className="absolute bottom-0 right-1/2 translate-x-[150%] translate-y-1/4 w-24 h-16 md:w-28"/>
            <SapModule name="PM" description={t('expertise.modules.pm')} className="absolute bottom-0 left-1/2 -translate-x-[150%] translate-y-1/4 w-24 h-16 md:w-28" />
            <SapModule name="PP" description={t('expertise.modules.pp')} className="absolute bottom-0 left-0 translate-y-1/4 w-24 h-16 md:w-28" />
            <SapModule name="HCM" description={t('expertise.modules.hcm')} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-24 h-16 md:w-28" />

          </div>
        </div>
      </div>
    </section>
  );
}
