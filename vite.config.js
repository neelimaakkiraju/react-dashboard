import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      // Configure external modules if needed
      external: ['/src/main.jsx'],
    },
  },
  extensions: ['.js', '.jsx'],
  plugins: [react()],
  base: '/react-dashboard/', 
});
