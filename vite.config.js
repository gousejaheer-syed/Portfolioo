import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Change this to '/' to fix the 404 and MIME errors
  base: '/',
})