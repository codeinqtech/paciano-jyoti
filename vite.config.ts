import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Hostinger live path: https://paciano-dev.codeinq.com/design/tmp_2/
export default defineConfig({
  base: '/design/tmp_2/',
  plugins: [react(), tailwindcss()],
})
