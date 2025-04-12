
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [logoPath, setLogoPath] = useState('./placeholder.svg');

  useEffect(() => {
    console.log("Navbar using logo path:", logoPath);
  }, [logoPath]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error("Logo failed to load:", e.currentTarget.src);
    setLogoError(true);
    e.currentTarget.onerror = null;
    
    // Try different paths as fallbacks
    const fallbackPaths = [
      './placeholder.svg',
      '/placeholder.svg',
      'placeholder.svg'
    ];
    
    // Try the first fallback
    e.currentTarget.src = fallbackPaths[0];
    console.log("Trying fallback image:", fallbackPaths[0]);
  };
  
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logoPath} 
              alt="AKFAS Car Rental Logo" 
              className="h-12 w-auto"
              onError={handleLogoError}
            />
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-akfas-blue hover:text-akfas-accent font-medium transition-colors">Home</Link>
            <Link to="/fleet" className="text-akfas-blue hover:text-akfas-accent font-medium transition-colors">Our Fleet</Link>
            <Link to="/dakhla" className="text-akfas-blue hover:text-akfas-accent font-medium transition-colors">About Dakhla</Link>
            <Link to="/contact" className="text-akfas-blue hover:text-akfas-accent font-medium transition-colors">Contact</Link>
            <Button asChild className="bg-akfas-accent hover:bg-akfas-accent/90">
              <Link to="/reserve">Reserve Now</Link>
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
              Home
            </Link>
            <Link 
              to="/fleet" 
              className="text-akfas-blue hover:text-akfas-accent py-2 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Our Fleet
            </Link>
            <Link 
              to="/dakhla" 
              className="text-akfas-blue hover:text-akfas-accent py-2 font-medium transition-colors"
              onClick={toggleMenu}
            >
              About Dakhla
            </Link>
            <Link 
              to="/contact" 
              className="text-akfas-blue hover:text-akfas-accent py-2 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button asChild className="bg-akfas-accent hover:bg-akfas-accent/90 w-full">
              <Link to="/reserve" onClick={toggleMenu}>Reserve Now</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
