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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logos/branding-consulting.jpg" alt="Business Consulting Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-2xl font-bold font-headline text-primary">
                Business Consulting
              </span>
            </Link>
            <p className="text-muted-foreground">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">{t('footer.solutions.title')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">{t('footer.solutions.management')}</Link></li>
              <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">{t('footer.solutions.digitalization')}</Link></li>
              <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">{t('footer.solutions.outsourcing')}</Link></li>
              <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">{t('footer.solutions.training')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">{t('footer.company.title')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#about" className="text-base text-muted-foreground hover:text-primary">{t('footer.company.about')}</Link></li>
              <li><Link href="#clients" className="text-base text-muted-foreground hover:text-primary">{t('footer.company.clients')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">{t('footer.contact.title')}</h3>
            <div className="mt-4 space-y-2 text-base text-muted-foreground">
                <p>123 Rue du Commerce, Bureau 100</p>
                <p>Paris, 75001</p>
                <p>contact@apexinsights.com</p>
                <p>(123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-base text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Business Consulting. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
