import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    base: './', // Ensures assets are linked relatively (essential for GH Pages/Vercel)
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    define: {
      // Safely inject ONLY the API key. 
      // Do NOT define 'process.env': {} as it breaks React's ability to check NODE_ENV.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
    },
    server: {
      port: 3000,
      open: true
    }
  };
});