
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
  // Map car IDs to locally available placeholder images for now
  const carImages: Record<string, string> = {
    car1: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop',
    car2: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop',
    car3: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop',
    car4: 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=800&auto=format&fit=crop',
    car5: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop',
    car6: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop',
  };

  return carImages[carId] || fallbackImages.car;
};
