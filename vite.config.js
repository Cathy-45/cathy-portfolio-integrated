// vite.config.js — FINAL FIX
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "/src": path.resolve(__dirname, "src"),
    },
  },
  // FORCES VITE TO USE WASM ROLLUP 
  optimizeDeps: {
    exclude: ['rollup'],
  },
  define: {
    "import.meta.env.VITE_BUILD_TIME": JSON.stringify(new Date().toISOString()),
  },
});
