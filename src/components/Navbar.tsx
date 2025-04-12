
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { fallbackImages } from '@/utils/imageUtils';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string>('./placeholder.svg');
  const { t, language } = useLanguage();
  
  useEffect(() => {
    // Use the direct link to the logo
    const img = new Image();
    img.onload = () => {
      setLogoSrc('https://i.postimg.cc/fL4C9k58/f760973e-a8df-45fa-88df-4bbbec69fbd0.jpg');
      console.log("Navbar logo loaded successfully");
    };
    img.onerror = () => {
      setLogoSrc(fallbackImages.logo);
      console.log("Navbar logo failed to load, using fallback");
    };
    img.src = 'https://i.postimg.cc/fL4C9k58/f760973e-a8df-45fa-88df-4bbbec69fbd0.jpg';
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Add RTL class for the navbar based on language
  const isRTL = language === 'ar';
  const rtlClass = isRTL ? 'rtl' : '';
  
  return (
    <header className={`bg-white sticky top-0 z-50 shadow-sm ${rtlClass}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logoSrc} 
              alt="AKFAS Car Rental Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                console.error("Logo failed to load in render:", e.currentTarget.src);
                e.currentTarget.onerror = null; // Prevent infinite loop
                e.currentTarget.src = fallbackImages.logo;
              }}
            />
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-akfas-blue hover:text-akfas-accent font-medium transition-colors">
              {t('navbar.home')}
            </Link>
            <Link to="/fleet" className="text-akfas-blue hover:text-akfas-accent font-medium transition-colors">
              {t('navbar.fleet')}
            </Link>
            <Link to="/dakhla" className="text-akfas-blue hover:text-akfas-accent font-medium transition-colors">
              {t('navbar.dakhla')}
            </Link>
            <Link to="/contact" className="text-akfas-blue hover:text-akfas-accent font-medium transition-colors">
              {t('navbar.contact')}
            </Link>
            <Button asChild className="bg-akfas-accent hover:bg-akfas-accent/90">
              <Link to="/reserve">{t('navbar.reserve')}</Link>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} className="text-akfas-blue" /> : <Menu size={24} className="text-akfas-blue" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-x-0 top-16 bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}>
          <nav className="flex flex-col py-4 px-8 space-y-4">
            <Link 
              to="/" 
              className="text-akfas-blue hover:text-akfas-accent py-2 font-medium transition-colors"
              onClick={toggleMenu}
            >
              {t('navbar.home')}
            </Link>
            <Link 
              to="/fleet" 
              className="text-akfas-blue hover:text-akfas-accent py-2 font-medium transition-colors"
              onClick={toggleMenu}
            >
              {t('navbar.fleet')}
            </Link>
            <Link 
              to="/dakhla" 
              className="text-akfas-blue hover:text-akfas-accent py-2 font-medium transition-colors"
              onClick={toggleMenu}
            >
              {t('navbar.dakhla')}
            </Link>
            <Link 
              to="/contact" 
              className="text-akfas-blue hover:text-akfas-accent py-2 font-medium transition-colors"
              onClick={toggleMenu}
            >
              {t('navbar.contact')}
            </Link>
            <Button asChild className="bg-akfas-accent hover:bg-akfas-accent/90 w-full">
              <Link to="/reserve" onClick={toggleMenu}>{t('navbar.reserve')}</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
