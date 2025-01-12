import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/store/store';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from "@/hooks/theme-provider";
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme" enableSystem>
        <App />
        <Toaster />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);