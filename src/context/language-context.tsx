
'use client';

import React, { createContext, useState, useEffect, ReactNode, useCallback, useContext } from 'react';
import fr from '@/locales/fr.json';
import en from '@/locales/en.json';

const translations = { fr, en };

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: { [key: string]: string | number }) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const storedLang = localStorage.getItem('language') as Language;

    if (storedLang && ['fr', 'en'].includes(storedLang)) {
      setLanguage(storedLang);
    } else if (browserLang === 'en') {
      setLanguage('en');
    }
  }, []);

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  }, []);

  const t = (key: string, replacements?: { [key: string]: string | number }) => {
    const currentTranslations = translations[language];
    let translation = key.split('.').reduce((obj, k) => (obj as any)?.[k], currentTranslations);

    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }

    if (replacements) {
        Object.keys(replacements).forEach(rKey => {
            const regex = new RegExp(`\\{${rKey}\\}`, 'g');
            translation = translation.replace(regex, String(replacements[rKey]));
        })
    }

    return translation;
  };
  
  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};


export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
      throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};
