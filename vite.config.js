import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['rollup'],  // EXCLUDE ROLLUP COMPLETELY — KILLS THE ERROR
    },
  },
  resolve: {
    alias: {
      '/src': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    exclude: ['rollup', '@rollup/wasm-node'],  // DOUBLE EXCLUDE — NO NATIVE LOADING
  },
  define: {
    'import.meta.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
  },
});