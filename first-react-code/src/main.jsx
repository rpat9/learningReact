import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Ulchallenge from './challengeFiles/ulChallenge.jsx';

createRoot(document.getElementById('root')).render(
  // StrictMode is a tool for highlighting potential problems in an application
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(document.getElementById('ulChallenge')).render(
  
  <StrictMode>
    <Ulchallenge />
  </StrictMode>

);
