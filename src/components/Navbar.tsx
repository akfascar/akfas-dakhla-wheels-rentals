
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [basePath, setBasePath] = useState('./');

  useEffect(() => {
    // Get the base URL from the global variable or default to './'
    setBasePath(window.__APP_BASE_URL || './');
    console.log("Navbar using base path:", window.__APP_BASE_URL || './');
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Use base-relative paths for images to work on any domain
  const logoPath = logoError 
    ? `${basePath}placeholder.svg` 
    : `${basePath}images/logo.jpg`;
  
  console.log("Using logo path:", logoPath);
  
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logoPath} 
              alt="AKFAS Car Rental Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                console.error("Logo failed to load", e);
                setLogoError(true);
                e.currentTarget.onerror = null;
                // Try with absolute fallback as last resort
                if (logoError) {
                  e.currentTarget.src = '/placeholder.svg';
                }
              }}
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
