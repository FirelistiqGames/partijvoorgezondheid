import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/partijvoorgezondheid/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),

    },
  },
  server: {
    proxy: {
      // during `vite dev`, any call your code makes to /api/*
      // will be forwarded to your backend at localhost:5000
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
