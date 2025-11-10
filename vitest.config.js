// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    // Мокаем CSS из node_modules
    alias: {
      '@hexlet/chatbot-v2/dist/init.css': '/__mocks__/init.css', 
    },
  },
})
