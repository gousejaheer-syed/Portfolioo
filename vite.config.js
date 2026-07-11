import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This tells the browser to look for files in /Portfolioo/
  base: '/Portfolioo/',
})