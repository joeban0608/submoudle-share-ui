import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      // 這是你的組件進入點
      entry: resolve(__dirname, "src/share-ui/Button.tsx"),
      name: "MyShareUI",
      // 指定輸出的檔名，這樣就不會有隨機的 hash 碼
      fileName: (format) => `index.${format}.js`,
      formats: ["es"], // 使用 ES Module
    },
    rollupOptions: {
      // 確保不要把 React 打包進去，由 main-app 提供
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
