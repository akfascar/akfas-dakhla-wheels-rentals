
/**
 * Utility functions for handling images with fallbacks
 */

/**
 * Gets the appropriately formatted image URL with fallback support
 * @param imageUrl The original image URL
 * @param fallbackUrl The fallback image URL (defaults to placeholder)
 * @returns The processed image URL
 */
export const getImageWithFallback = (
  imageUrl: string,
  fallbackUrl: string = './placeholder.svg'
): { src: string; onError: string } => {
  // For external URLs that might fail, ensure we have a fallback
  return {
    src: imageUrl,
    onError: `this.onerror=null; this.src='${fallbackUrl}';`
  };
};

/**
 * List of fallback images to use for different categories
 */
export const fallbackImages = {
  car: './placeholder.svg',
  logo: './placeholder.svg',
  location: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302',
  landscape: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
};

/**
 * Returns a local image path based on a car ID
 * This will use local images rather than external ones that might fail
 */
export const getLocalCarImage = (carId: string): string => {
  // Map car IDs to direct akfascar.com images
  const carImages: Record<string, string> = {
    car1: 'https://akfascar.com/clio.jpg', // Renault Clio 5
    car2: 'https://images.unsplash.com/photo-1630080642366-21cc2930ec3e?w=800&auto=format&fit=crop', // Dacia Stepway
    car3: 'https://akfascar.com/sandero.jpg', // Dacia Sandero
    car4: 'https://images.unsplash.com/photo-1647470221285-0e85668aa3e9?w=800&auto=format&fit=crop', // Dacia Duster
    car5: 'https://akfascar.com/logan.jpg', // Dacia Logan
    car6: 'https://akfascar.com/skoda.jpg', // Skoda Fabia
  };

  return carImages[carId] || fallbackImages.car;
};
