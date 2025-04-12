
import React from 'react';
import { Button } from '@/components/ui/button';
import { Flag, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Language = {
  code: string;
  name: string;
  nativeName: string;
  flag: React.ReactNode;
};

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: <span className="mr-2">🇬🇧</span>,
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: <span className="mr-2">🇫🇷</span>,
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: <span className="mr-2">🇲🇦</span>,
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: <span className="mr-2">🇪🇸</span>,
  },
];

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = React.useState(languages[0]);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    // In a real app, this would change the language throughout the application
    console.log(`Language changed to ${language.name}`);
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
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="flex items-center cursor-pointer"
          >
            {language.flag}
            <span>{language.nativeName}</span>
            {language.code === currentLanguage.code && (
              <span className="ml-2 rounded-full w-2 h-2 bg-green-500"></span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
