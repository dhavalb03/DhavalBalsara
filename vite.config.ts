import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are linked relatively (essential for GH Pages/Vercel)
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  define: {
    // Prevents 'process is not defined' crash in browser
    'process.env': {}
  },
  server: {
    port: 3000,
    open: true
  }
});