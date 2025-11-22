import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        try {
          copyFileSync(
            join(__dirname, 'public', '404.html'),
            join(__dirname, 'dist', '404.html')
          )
        } catch (err) {
          console.warn('Could not copy 404.html:', err.message)
        }
      }
    }
  ],
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
})
