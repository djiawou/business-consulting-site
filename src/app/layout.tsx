
import type { Metadata } from 'next';
import { Playfair_Display, Open_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { LanguageProvider } from '@/context/language-context';
import ClientLayout from '@/components/layout/client-layout';
import { ThemeProvider } from '@/components/theme-provider';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Business Consulting',
  description: 'Libérer le potentiel, stimuler la croissance. | Unlocking Potential, Driving Growth.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <ClientLayout
          className={cn(
            'min-h-screen bg-background font-body antialiased',
            playfair.variable,
            openSans.variable
          )}
        >
          {children}
        </ClientLayout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
