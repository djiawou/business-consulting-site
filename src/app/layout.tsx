
import type { Metadata } from 'next';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { LanguageProvider } from '@/context/language-context';
import ClientLayout from '@/components/layout/client-layout';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Apex Insights',
  description: 'Libérer le potentiel, stimuler la croissance. | Unlocking Potential, Driving Growth.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <ClientLayout
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          playfair.variable,
          ptSans.variable
        )}
      >
        {children}
      </ClientLayout>
    </LanguageProvider>
  );
}
