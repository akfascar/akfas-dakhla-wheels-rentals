
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Function to check if we're running from a file protocol
const isFileProtocol = () => {
  return window.location.protocol === 'file:';
};

// Make sure the DOM is loaded before rendering
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    // Only try to render the app if we're not on file protocol
    // or if we're specifically allowing it for testing
    if (!isFileProtocol() || window.location.search.includes('allowFileProtocol=true')) {
      try {
        createRoot(rootElement).render(<App />);
      } catch (error) {
        console.error("Error rendering application:", error);
        rootElement.innerHTML = `
          <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
            <h1>AKFAS Car Rental</h1>
            <p>An error occurred while loading the application.</p>
            <p>This site needs to be hosted on a web server to function properly.</p>
            <p>Error details: ${error?.message || 'Unknown error'}</p>
          </div>
        `;
      }
    } else {
      console.log('Running from file protocol. App rendering is disabled.');
      // The fallback content in the HTML will be displayed
    }
  } else {
    console.error("Root element not found");
  }
});
