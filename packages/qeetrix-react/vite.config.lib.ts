import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const externalPackages = [
  "react",
  "react/jsx-runtime",
  "react-dom",
  "@base-ui/react/accordion",
  "@base-ui/react/button",
  "class-variance-authority",
  "clsx",
  "tailwind-merge",
]

export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: false,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es"],
      fileName: "index",
      cssFileName: "styles",
    },
    sourcemap: true,
    rollupOptions: {
      external: externalPackages,
    },
  },
})
