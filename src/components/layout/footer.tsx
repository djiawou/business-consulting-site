
import Link from 'next/link';
import { Mountain, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline text-primary">
                Apex Insights
              </span>
            </Link>
            <p className="text-muted-foreground">
              Unlocking Potential, Driving Growth.
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
              <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">Management Consulting</Link></li>
              <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">Digitalization</Link></li>
              <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">Outsourcing</Link></li>
              <li><Link href="#services" className="text-base text-muted-foreground hover:text-primary">Training</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#about" className="text-base text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#clients" className="text-base text-muted-foreground hover:text-primary">Clients</Link></li>
              <li><Link href="/image-generator" className="text-base text-muted-foreground hover:text-primary">AI Tools</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-2 text-base text-muted-foreground">
                <p>123 Business Rd, Suite 100</p>
                <p>New York, NY 10001</p>
                <p>contact@apexinsights.com</p>
                <p>(123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-base text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Apex Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
