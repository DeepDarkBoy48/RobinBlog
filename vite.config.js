import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  // vueDevTools()是开发工具，在开发时使用，生产时不需要使用
  plugins: [
    vue(),
    react(),
    tailwindcss(),
    // vueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api/fastapi": {
        target: "http://localhost:8000",
        // target: "http://47.79.43.73:8001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/api": {
        //获取路径中包含了/api的请求
        target: "http://localhost:8081", //后台服务所在的源
        // target: "http://47.79.145.141:8081", //后台服务所在的源
        // target: "http://x.smashteches.com:8081", //后台服务所在的源
        changeOrigin: true, //修改源
        rewrite: (path) => path.replace(/^\/api/, ""), ///api替换为''
      },
    },

  },
});
