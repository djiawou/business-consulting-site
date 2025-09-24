'use client';

import { useContext } from 'react';
import { LanguageContext } from '@/context/language-context';

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  const { language, setLanguage, translations } = context;

  const t = (key: string, replacements?: { [key: string]: string | number }) => {
    let translation = key.split('.').reduce((obj, k) => (obj as any)?.[k], translations);

    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }

    if (replacements) {
        Object.keys(replacements).forEach(rKey => {
            translation = translation.replace(`{${rKey}}`, String(replacements[rKey]));
        })
    }


    return translation;
  };

  return { t, language, setLanguage };
};
