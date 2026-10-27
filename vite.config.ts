import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Alias @ ukazuje do src
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
