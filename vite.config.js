import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/guameezia-website/', // GitHub Pages base path; set to '/' if using a custom domain
})
