
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink
}) => {
  const heroStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(26, 58, 90, 0.6), rgba(26, 58, 90, 0.4)), url(${backgroundImage})`,
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/212661211237', '_blank');
  };

  return (
    <section 
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
      style={heroStyle}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 opacity-90">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-akfas-accent hover:bg-akfas-accent/90 text-white font-semibold px-8 py-6 text-lg">
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>
            <Button 
              onClick={openWhatsApp} 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg"
            >
              <MessageCircle className="mr-2" /> Contact via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
