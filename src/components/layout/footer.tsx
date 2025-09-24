
import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { Logo } from '../logo';

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline text-primary">
                Apex Insights
              </span>
            </Link>
            <p className="text-muted-foreground">
              Libérer le potentiel, stimuler la croissance.
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
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">Conseil en Management</Link></li>
              <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">Digitalisation</Link></li>
              <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">Externalisation</Link></li>
              <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">Formation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Entreprise</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#about" className="text-base text-muted-foreground hover:text-primary">À Propos</Link></li>
              <li><Link href="#clients" className="text-base text-muted-foreground hover:text-primary">Clients</Link></li>
              <li><Link href="/image-generator" className="text-base text-muted-foreground hover:text-primary">Outils IA</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-2 text-base text-muted-foreground">
                <p>123 Rue du Commerce, Bureau 100</p>
                <p>Paris, 75001</p>
                <p>contact@apexinsights.com</p>
                <p>(123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-base text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Apex Insights. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
