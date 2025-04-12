
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageCode } from '@/utils/translations';

type Language = {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: React.ReactNode;
  direction: 'ltr' | 'rtl';
};

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: <span className="mr-2">🇬🇧</span>,
    direction: 'ltr',
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: <span className="mr-2">🇫🇷</span>,
    direction: 'ltr',
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: <span className="mr-2">🇲🇦</span>,
    direction: 'rtl',
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: <span className="mr-2">🇪🇸</span>,
    direction: 'ltr',
  },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  // Find the current language object
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage.code);
    console.log(`Language changed to ${selectedLanguage.name}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 h-9 px-2">
          {currentLanguage.flag}
          <span className="hidden md:inline">{currentLanguage.name}</span>
          <Globe className="w-4 h-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang)}
            className="flex items-center cursor-pointer"
          >
            {lang.flag}
            <span className={lang.direction === 'rtl' ? 'font-arabic' : ''}>
              {lang.nativeName}
            </span>
            {lang.code === currentLanguage.code && (
              <span className="ml-2 rounded-full w-2 h-2 bg-green-500"></span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
