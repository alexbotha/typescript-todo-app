import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginWindicss from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginWindicss({
      // Add your WindiCSS configuration options here if needed
      // For example, specifying the scan paths:
      scan: {
        include: ["src/**/*.{html,jsx,tsx,ts}"],
      },
    }),
  ],
});
