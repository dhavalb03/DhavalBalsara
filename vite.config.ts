
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures the app works on GitHub Pages subpaths and Vercel
  build: {
    outDir: 'dist',
  },
});
