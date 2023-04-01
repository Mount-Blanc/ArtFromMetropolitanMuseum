import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
    // disable manifest and manifest.json generation
    manifest: false,
    outDir: 'dist',
  },
  optimizeDeps: {
    include: [],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
