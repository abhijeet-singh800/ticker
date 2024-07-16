import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../"),
      "@server": path.resolve(__dirname, "../server/src"),
      "@src": path.resolve(__dirname, "src")
    },
  },
  plugins: [react()],
});