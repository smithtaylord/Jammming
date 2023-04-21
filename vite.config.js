import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'root',
    sourcemap: false,
  },
  base: '/Jammming/',
  server: {
    port: 8080
  }
})
