import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5173,
    host: true,
    open: false,
    proxy: {
      "/api":  {
        target: "http://backend:8080",
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: "dist",
  },
});
