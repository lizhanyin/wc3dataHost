import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from "@/hooks/theme-provider";
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById('root')).render(
  <ThemeProvider defaultTheme="dark" storageKey="ui-theme" enableSystem>
    <App />
    <Toaster />
  </ThemeProvider>
);