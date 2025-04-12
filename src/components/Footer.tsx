
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/212661211237', '_blank');
  };
  
  return (
    <footer className="bg-akfas-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6" />
              <span className="text-xl font-bold">AKFAS Car Rental</span>
            </div>
            <p className="mb-4 text-gray-300">
              Premium car rental services in Dakhla. Explore the beautiful landscapes with our comfortable and reliable vehicles.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-akfas-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-akfas-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-akfas-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-akfas-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-akfas-accent transition-colors">Our Fleet</Link>
              </li>
              <li>
                <Link to="/dakhla" className="hover:text-akfas-accent transition-colors">About Dakhla</Link>
              </li>
              <li>
                <Link to="/reserve" className="hover:text-akfas-accent transition-colors">Reserve a Car</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-akfas-accent transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>Main Street, Dakhla City Center, Morocco</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="shrink-0" />
                <span>+212 661-211-237</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer hover:text-akfas-accent" onClick={handleWhatsAppRedirect}>
                <MessageCircle size={20} className="shrink-0" />
                <span>WhatsApp Reservation</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="shrink-0" />
                <span>Akfasrentacar@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} AKFAS Car Rental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
