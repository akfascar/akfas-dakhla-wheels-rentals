
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Function to check if we're running from a file protocol
const isFileProtocol = () => {
  return window.location.protocol === 'file:';
};

// Function to get the base URL for assets
const getBaseUrl = () => {
  // For GitHub Pages and custom domains, we need to detect if we're in a subdirectory
  const path = window.location.pathname;
  // If path ends with .html or has no trailing slash, we're likely in a GitHub Pages environment
  if (path.indexOf('.html') > -1 || (path !== '/' && !path.endsWith('/'))) {
    return './';
  }
  return '/';
};

// Make sure the DOM is loaded before rendering
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM Content Loaded, initializing application");
  console.log("Current URL:", window.location.href);
  console.log("Protocol:", window.location.protocol);
  console.log("Pathname:", window.location.pathname);
  
  const rootElement = document.getElementById("root");
  if (rootElement) {
    // Clear any fallback content if present
    if (rootElement.innerHTML.includes("For the best experience")) {
      rootElement.innerHTML = '';
    }
    
    try {
      // Create environment variables for debugging without using global window property
      const appEnv = {
        isCustomDomain: true,
        baseUrl: getBaseUrl(),
        isFileProtocol: isFileProtocol()
      };
      
      console.log("Environment:", appEnv);
      
      // Set a global property that components can access for asset paths
      window.__APP_BASE_URL = appEnv.baseUrl;
      
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
});

// Add type declaration for window
declare global {
  interface Window {
    __APP_BASE_URL: string;
  }
}
