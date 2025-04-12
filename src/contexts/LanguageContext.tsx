
import React, { createContext, useState, useContext, useEffect } from 'react';
import { LanguageCode, getTranslation, TranslationKey } from '@/utils/translations';

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Try to load saved language preference from localStorage or default to 'en'
  const [language, setLanguageState] = useState<LanguageCode>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageCode;
    if (savedLanguage && ['en', 'fr', 'es', 'ar'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: LanguageCode) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    
    // Set HTML dir attribute for RTL support (only Arabic needs RTL)
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // You might also want to add a class to the body for RTL styling
    if (newLanguage === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  };

  // Translation function
  const t = (key: TranslationKey): string => {
    return getTranslation(key, language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
