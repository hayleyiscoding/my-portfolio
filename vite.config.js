import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // rollupOptions: {
    //   external: [/^\/artifacts\/.*\.json$/],
    // },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    exclude: ["swiper"],
  },
});
