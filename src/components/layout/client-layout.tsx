
'use client';

import { useTranslation } from '@/context/language-context';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { LanguageProvider } from '@/context/language-context';
import { ThemeProvider } from '@/components/theme-provider';

function InnerClientLayout({ children }: { children: React.ReactNode }) {
  const { language } = useTranslation();

  // This is a bit of a hack to set the lang on the html element
  // from a client component.
  if (typeof window !== 'undefined') {
    document.documentElement.lang = language;
  }

  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster />
    </>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <InnerClientLayout>{children}</InnerClientLayout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
