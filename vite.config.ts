import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Servi sous https://cortexafrica.github.io/cortex-africa-site/
export default defineConfig({
  base: '/cortex-africa-site/',
  plugins: [react()],
  build: { target: 'es2022', assetsInlineLimit: 0 },
});
