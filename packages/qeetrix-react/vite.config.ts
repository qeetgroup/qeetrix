import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@qeetrix/icons": path.resolve(__dirname, "../qeetrix-icons/src/index.ts"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
