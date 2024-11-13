import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3009,
  },
  envPrefix: ['API_HOST', 'FRONT_URL', 'sistemaId', 'RECAPTCHA_SITE_KEY'],
});
