
import React, { useState, useEffect } from 'react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

// Array of car images to display in the welcome animation
const carImages = [
  '/images/cars/duster.jpg',
  '/images/cars/logan.jpg',
  '/images/cars/skoda.jpg',
  '/images/cars/sandero.jpg'
];

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ onComplete }) => {
  const [opacity, setOpacity] = useState<number>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  
  useEffect(() => {
    // Set up image rotation
    const imageRotation = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 800);
    
    // Fade out after 4 seconds
    const timeout = setTimeout(() => {
      const fadeInterval = setInterval(() => {
        setOpacity((prev) => {
          const newOpacity = prev - 0.02;
          if (newOpacity <= 0) {
            clearInterval(fadeInterval);
            clearInterval(imageRotation);
            // Trigger completion when fully faded
            onComplete();
            return 0;
          }
          return newOpacity;
        });
      }, 20);
      
      return () => clearInterval(fadeInterval);
    }, 4000);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(imageRotation);
    };
  }, [onComplete]);

  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 9999,
        opacity,
        transition: 'opacity 0.5s ease-in-out',
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}
    >
      <div className="mb-8">
        <img 
          src="/images/logo.jpg" 
          alt="AKFAS Car Rental Logo" 
          style={{ 
            width: '180px', 
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }} 
        />
      </div>
      
      <div 
        style={{ 
          marginBottom: '2rem',
          textAlign: 'center',
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '2rem'
        }}
      >
        Welcome to AKFAS Car Rental
      </div>
      
      <div 
        className="animate-fade-in"
        style={{ 
          marginBottom: '2rem',
          color: '#D97941',
          fontSize: '1.2rem',
          textAlign: 'center',
          maxWidth: '600px'
        }}
      >
        Explore Dakhla with Comfort and Style
      </div>
      
      <div 
        className="animate-scale-in"
        style={{ 
          width: '300px',
          height: '200px',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
          marginBottom: '2rem',
          position: 'relative'
        }}
      >
        {carImages.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`AKFAS Fleet Car ${index + 1}`} 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }} 
          />
        ))}
      </div>
      
      <div 
        className="animate-fade-in"
        style={{ 
          color: '#E6D2B5',
          fontSize: '0.9rem',
          textAlign: 'center',
          maxWidth: '600px'
        }}
      >
        Premium car rental service in Dakhla, Morocco
      </div>
    </div>
  );
};

export default WelcomeAnimation;
