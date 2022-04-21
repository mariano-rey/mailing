import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: true,
  //   proxy: {
  //     "/api": process.env.VITE_BASE_URL,
  //   },
  // },
  plugins: [react(), eslintPlugin()],
  define: { "process.env": {} },
});
