'use client'
import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import Image from 'next/image';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logos/branding-consulting.jpg" alt="Business Consulting Logo" width={32} height={32} />
              <span className="text-2xl font-bold font-headline text-primary">
                Business Consulting
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">{t('footer.solutions.title')}</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">{t('services.items.sap_migration.title')}</Link></li>
                <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">{t('services.items.digital_transformation.title')}</Link></li>
                <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">{t('services.items.support.title')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">{t('footer.company.title')}</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#about" className="text-base text-muted-foreground hover:text-primary">{t('footer.company.about')}</Link></li>
                <li><Link href="#clients" className="text-base text-muted-foreground hover:text-primary">{t('footer.company.clients')}</Link></li>
                <li><Link href="#contact" className="text-base text-muted-foreground hover:text-primary">{t('footer.contact.title')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">{t('footer.contact.title')}</h3>
              <div className="mt-4 flex gap-4">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-6 w-6 text-primary hover:opacity-80 transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 text-primary hover:opacity-80 transition-colors" />
                </Link>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-6 w-6 text-primary hover:opacity-80 transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-base text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Business Consulting. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
