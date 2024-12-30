import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';

// Render the application into the DOM
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);