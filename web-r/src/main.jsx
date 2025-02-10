import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@/hooks/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { router } from './router'
import store from '@/store/store';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme" enableSystem>
        <RouterProvider router={router}/>
        <Toaster />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);