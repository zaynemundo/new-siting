import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false,
    cors: true,
    allowedHosts: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false,
    cors: true,
    allowedHosts: true
  }
})
