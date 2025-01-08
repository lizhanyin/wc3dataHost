import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa';
import Inspect from 'vite-plugin-inspect';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    Inspect(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Web Code Editor',
        short_name: 'Code Editor',
        description: 'A web code editor powered by monaco editor (same editor powering vscode) with code execution feature for languages ranging from javascript, lua, python, typescript and many more',
        background_color: 'black',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        orientation: 'portrait',
        theme_color: '#000000',
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png"
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      }
    }),
    
  ],
  optimizeDeps: {
    /** vite >= 2.3.0 */
    esbuildOptions: {
        plugins: [
            
        ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
});