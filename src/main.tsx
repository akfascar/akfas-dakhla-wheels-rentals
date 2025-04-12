
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Function to check if we're running from a file protocol
const isFileProtocol = () => {
  return window.location.protocol === 'file:';
};

// Make sure the DOM is loaded before rendering
document.addEventListener('DOMContentLoaded', () => {
  // Add a console log to check if the script is running
  console.log("DOM Content Loaded, initializing application");
  
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
        baseUrl: '/',
        isFileProtocol: isFileProtocol()
      };
      
      console.log("Environment:", appEnv);
      
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
