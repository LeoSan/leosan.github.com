import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necesario si este proyecto no está servido desde la raíz. 
  // Ej: en leosan.github.com sirve de raíz, así que base: '/'
  base: '/',
})
