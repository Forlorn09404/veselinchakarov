import React, { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import { translations } from '../translations/translations';
type Language = 'en' | 'bg';
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.en;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export function LanguageProvider({
  children
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>('en');
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'bg')) {
      setLanguage(savedLang);
    }
  }, []);
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'bg' : 'en';
    setLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
  };
  const value = {
    language,
    toggleLanguage,
    t: translations[language]
  };
  return <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}