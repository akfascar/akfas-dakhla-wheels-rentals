
import { useState, useEffect } from 'react';

export const useWelcomeAnimation = (): boolean => {
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if this is the first visit in the current session
    const hasSeenAnimation = sessionStorage.getItem('hasSeenWelcomeAnimation');
    
    if (!hasSeenAnimation) {
      setShowAnimation(true);
      sessionStorage.setItem('hasSeenWelcomeAnimation', 'true');
    }
  }, []);
  
  return showAnimation;
};
