import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const conditionalPlugins = [];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [...conditionalPlugins]
      }
    })
  ]
});