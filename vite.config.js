import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
    sourcemap: false,
    rollupOptions: {
      external: ['@popperjs/core']
    }
  },
  base: '/Jammming/',
  server: {
    port: 8080
  }
})
