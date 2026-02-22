import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        livre: resolve(__dirname, "livre/index.html"),
        avis: resolve(__dirname, "avis/index.html"),
        mentions: resolve(__dirname, "mentions-legales/index.html"),
        politique: resolve(__dirname, "politique-confidentialite/index.html"),
      },
    },
  },
});