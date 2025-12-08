import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_"); // Load env variables
  
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            VITE_APP_PATH: env.VITE_APP_PATH
          }
        }
      })
    ],
    base: env.VITE_APP_PATH || "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "process.env": env,
    },
  };
});
