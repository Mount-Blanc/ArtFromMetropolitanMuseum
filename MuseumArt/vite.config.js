import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: 'index.html',
      importAnalysis: false
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
