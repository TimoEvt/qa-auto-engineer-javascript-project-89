import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    alias: {
      '@hexlet/chatbot-v2/dist/init.css': '/__mocks__/init.css', 
    },
  },
})
