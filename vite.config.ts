import { defineConfig } from "vite";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        ganadores: "ganadores.html",
        notfound: "404.html",
      },
    },
  },
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  },
  plugins: [vercel()],
});
