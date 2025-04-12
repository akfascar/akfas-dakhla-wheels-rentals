
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Function to get the base URL for assets - simplified and more robust
const getBaseUrl = () => {
  // For file protocol (local file system), GitHub Pages and custom domains
  if (window.location.protocol === 'file:') {
    return './';
  }
  
  // For localhost development server
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return '/';
  }
  
  // For production on GitHub Pages or custom domain, use relative paths
  return './';
};

// Make sure the DOM is loaded before rendering
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM Content Loaded, initializing application");
  console.log("Current URL:", window.location.href);
  console.log("Protocol:", window.location.protocol);
  console.log("Pathname:", window.location.pathname);
  console.log("Hostname:", window.location.hostname);
  console.log("Base Path:", getBaseUrl());
  
  const rootElement = document.getElementById("root");
  if (rootElement) {
    // Clear any fallback content if present
    if (rootElement.innerHTML.includes("For the best experience")) {
      rootElement.innerHTML = '';
    }
    
    try {
      // Set base URL for the application to use for assets
      const baseUrl = getBaseUrl();
      console.log("Using base URL for assets:", baseUrl);
      
      // Set a global property that components can access for asset paths
      window.__APP_BASE_URL = baseUrl;
      
      createRoot(rootElement).render(<App />);
      console.log("App rendered successfully");
    } catch (error) {
      console.error("Error rendering application:", error);
      rootElement.innerHTML = `
        <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
          <h1>AKFAS Car Rental</h1>
          <p>An error occurred while loading the application.</p>
          <p>This site needs to be hosted on a web server to function properly.</p>
          <p>Error details: ${error instanceof Error ? error.message : 'Unknown error'}</p>
          <p>If you are seeing this message on a custom domain, try refreshing the page or contact the site administrator.</p>
        </div>
      `;
    }
  } else {
    console.error("Root element not found");
  }
});

// Add a global error handler
window.addEventListener('error', (event) => {
  console.error("Global error caught:", event.error || event.message);
  // Log image loading errors specifically
  if (event.target && (event.target as HTMLElement).tagName === 'IMG') {
    console.error(`Image failed to load: ${(event.target as HTMLImageElement).src}`);
  }
});

// Add type declaration for window
declare global {
  interface Window {
    __APP_BASE_URL: string;
  }
}
