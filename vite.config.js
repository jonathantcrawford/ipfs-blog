import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from 'vite-plugin-mdx';

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  root: "./",
  plugins: [react(), mdx()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, './src')},
    ]
  }
})
