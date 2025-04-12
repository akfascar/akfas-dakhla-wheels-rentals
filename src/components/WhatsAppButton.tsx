
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const WhatsAppButton = () => {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/212661211237', '_blank');
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleWhatsAppRedirect}
            className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg z-50 transition-all hover:scale-110 animate-pulse hover:animate-none"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle size={28} />
          </button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Contact us on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
